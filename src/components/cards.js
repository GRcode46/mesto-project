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
  closePopup, openPopup,
  openPopupImage
} from "./modal";

function getCardsData(path) {
  getRequest(path)
    .then((data) => {
      // profileTitleValue.textContent = data.name;
      // profileSubtitleValue.textContent = data.about;
      // profileAvatar.src = data.avatar;

      // console.log(data)
      data.reverse().forEach((element) => {
        renderElement(loadElements(element.name, element.link, element.likes, element.owner._id))
        // console.log(element.likes.length)
      });
    })
    .catch((err) => {
      console.log(err)
    })
}

function addCardsData(path, body) {
  postRequest(path, body)
    .then((data) => {
      renderElement(loadElements(data.name, data.link, data.likes));
      elementPopupForm.reset();
      elementSubmitButton.disabled = true;
      elementSubmitButton.classList.add('button_state_inactive');
    })
    .catch((err) => {
      console.log(err)
    })
}

function deleteElement(path, cardID) {
  delRequest(path, cardID)
    .then((data) => {
      console.log(data)
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
function loadElements(elementName, elementLink, elementLikes, elementID) {
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  const likeBtn = element.querySelector('.element__btn-like');
  const elementImage = element.querySelector('.element__image');
  const elementTrash = element.querySelector('.element__trash');
  const elementLikeCounter = element.querySelector('.element__like-counter');

  elementLikeCounter.textContent = elementLikes.length;
  element.querySelector('.element__name').textContent = elementName;
  elementImage.src = elementLink;
  elementImage.alt = elementName;
  element.setAttribute("data-id", elementID);
  likeBtn.addEventListener("click", () => likeBtn.classList.toggle('element__btn-like_active'));

  if (elementID === userData.id) {
    elementTrash.addEventListener('click', function (evt) {
      openPopup(deleteElementPopup, elementID);
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

