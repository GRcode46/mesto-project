import {getRequest, postRequest, delRequest} from "./api";

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
  deleteElementPopup
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
        // console.log(element)
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
    })
    .catch((err) => {
      console.log(err)
    })
}

function deleteElement(path, data) {
  console.log(data.target.dataset.id)
  const CardID = data.target.dataset.id;
  delRequest(path, CardID)
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

  likeBtn.addEventListener("click", () => likeBtn.classList.toggle('element__btn-like_active'));

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
  closePopup(elementPopup);
}


export {getCardsData, createElement, deleteElement}

