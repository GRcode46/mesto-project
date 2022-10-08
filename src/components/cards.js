import {
  getRequest,
  postRequest,
  deleteRequest,
  patchRequest,
  putRequest
} from "./api";

import {
  // delLike,
  // putLike
} from "./utils"
import {
  elementPopupForm,
  elementLink,
  elementName,
  elementPopup,
  elementsList,
  elementTemplate,
  elementSubmitButton,
  cardsPath,
  userData,
  deleteElementPopup, likesPath
} from "./const";

import {
  closePopup,
  openPopupImage,
  openDeletePopup
} from "./modal";

function getCardsData(path) {
  getRequest(path)
    .then((data) => {
      data.reverse().forEach((element) => {
        renderElement(loadElements(element.name, element.link, element.likes, element.owner._id, element._id))
        console.log(element)
      });
    })
    .catch((err) => {
      console.log(err)
    })
}

function addCardsData(path, body) {
  postRequest(path, body)
    .then((data) => {
      renderElement(loadElements(data.name, data.link, data.likes, data.owner._id, data._id));
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
      // console.log(err)
    })
}

function deleteElement(path, data) {
  // console.log(data.target.dataset.id)
  const CardID = data.target.dataset.id;
  deleteRequest(path, CardID)
    .then((res) => {
      const elementForRemove = document.getElementById(CardID);
      elementForRemove.remove();
      closePopup(deleteElementPopup);

    })
    .catch((err) => {
      console.log(err)
    })
}

// function getLikes(path) {
//   getRequest(path)
//     .then((data) => {
//
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// }

// create element node
function loadElements(elementName, elementLink, elementLikes, elementOwnerId, elementID) {
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  const likeBtn = element.querySelector('.element__btn-like');
  const elementImage = element.querySelector('.element__image');
  const elementTrash = element.querySelector('.element__trash');
  const elementLikeCounter = element.querySelector('.element__like-counter');
  elementLikeCounter.textContent = elementLikes.length;
  element.querySelector('.element__name').textContent = elementName;
  elementImage.src = elementLink;
  elementImage.alt = elementName;

  //
  // function isLikedByMe(elementLike, elementOwnerId) {
  //   return (elementLike === '7537b1858521a986747b9063')
  // }

  if (elementLikes.some((like) => like._id === userData.id)) {
    console.log("est'");
    console.log(elementLikes);
    console.log(elementOwnerId);
    likeBtn.classList.add('element__btn-like_active');
  } else {
    console.log('nety')
  }

  // if (isLikedByMe) {
  //   console.log("est'");
  // } else {
  //   console.log("netu");
  // }


  likeBtn.addEventListener('click', function (evt) {
      // likeBtn..toggle('element__btn-like_active');
      if (evt.target.classList.contains('element__btn-like_active')) {
        deleteRequest(likesPath, elementID)
          .then((data) => {
            elementLikeCounter.textContent = `${data.likes.length}`;
            likeBtn.classList.remove('element__btn-like_active');
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        putRequest(likesPath, elementID)
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

  if (elementOwnerId === userData.id) {
    element.setAttribute("id", elementID);
    elementTrash.addEventListener('click', function (evt) {
      openDeletePopup(deleteElementPopup, elementID);
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
  addCardsData(cardsPath, cardNewData)

}


export {getCardsData, createElement, deleteElement}

