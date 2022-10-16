import {
  // request,
  addCard,
  deleteCard,
  putLike,
  deleteLike
} from "./api";


import {
  showSaveStatus
} from "./utils"

import {
  elementPopupForm,
  elementLink,
  elementName,
  elementPopup,
  elementsList,
  elementTemplate,
  elementSubmitButton,
  deleteElementPopup,
  deletePopupBtnSubmit,
} from "./const";

import {
  closePopup,
  openPopupImage,
  openDeletePopup
} from "./modal";

import {
  userId
} from "./index"

function addCardsData(body) {
  showSaveStatus(true, elementSubmitButton);
  addCard(body)
    .then((data) => {
      // console.log(data)
      renderElement(createCard(data.name, data.link, data.likes, data.owner._id, data._id, userId));
      elementPopupForm.reset();
      elementSubmitButton.disabled = true;
      elementSubmitButton.classList.add('button_state_inactive');
      closePopup(elementPopup);
    })
    .catch((err) => {
      if (err.status === 400) {
        const errorMsg = elementPopupForm.querySelector('.element-url-error');
        errorMsg.classList.add('form__input-error_active');
        errorMsg.textContent = `Ошибка: ${err.status}`;
        setTimeout(() => {
          errorMsg.classList.remove('form__input-error_active');
          errorMsg.textContent = "";
        }, 3000)
        console.log(err)
      }
    })
    .finally(() => {
      showSaveStatus(false, elementSubmitButton, 'Создать');
    });
}

function deleteElement(data) {
  const CardID = data.target.dataset.id;
  showSaveStatus(true, deletePopupBtnSubmit);
  deleteCard(CardID)
    .then(() => {
      document.getElementById(CardID).remove()
      closePopup(deleteElementPopup);
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      showSaveStatus(false, deletePopupBtnSubmit, 'Да');
    });
}

function createCard(elementName, elementLink, elementLikes, elementOwnerId, elementId, userId) {
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  const likeBtn = element.querySelector('.element__btn-like');
  const elementImage = element.querySelector('.element__image');
  const elementTrash = element.querySelector('.element__trash');
  const elementLikeCounter = element.querySelector('.element__like-counter');
  elementLikeCounter.textContent = elementLikes.length;
  element.querySelector('.element__name').textContent = elementName;
  elementImage.src = elementLink;
  elementImage.alt = elementName;
// Check owner for like and set like to active
  if (elementLikes.some((like) => like._id === userId)) {
    likeBtn.classList.add('element__btn-like_active');
  }
  likeBtn.addEventListener('click', function (evt) {
      if (evt.target.classList.contains('element__btn-like_active')) {
        deleteLike(elementId)
          .then((data) => {
            elementLikeCounter.textContent = `${data.likes.length}`;
            likeBtn.classList.remove('element__btn-like_active');
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        putLike(elementId)
          .then((data) => {
            elementLikeCounter.textContent = `${data.likes.length}`;
            likeBtn.classList.add('element__btn-like_active');
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  );
// Check owner for cards and show trash icon
  if (elementOwnerId === userId) {
    // Show trash icon
    element.setAttribute("id", elementId);
    elementTrash.addEventListener('click', () => {
      openDeletePopup(deleteElementPopup, elementId);
    });
  } else {
    // Hide trash icon
    elementTrash.classList.add('element__trash_disabled');
  }

  // Add preview action for new elements
  elementImage.addEventListener('click', () => {
    openPopupImage(elementLink, elementName);
  });


  return element;
}

function renderElement(element) { //render elements
  elementsList.prepend(element);
}

function createElement(evt) { //add image from popup
  evt.preventDefault();
  const cardNewData = {
    name: elementName.value,
    link: elementLink.value
  }
  addCardsData(cardNewData)

}

export {
  createElement,
  deleteElement,
  renderElement,
  createCard
}

