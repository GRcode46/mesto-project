// import {toggleButtonState} from "./utils.js"
import {getRequest, postRequest} from "./api";

import {
  elementPopupForm,
  elementLink,
  elementName,
  elementPopup,
  elementsList,
  elementTemplate,
  elementSubmitButton,
  cardsPath
} from "./const";

import {
  closePopup,
  openPopupImage
} from "./modal";

function getCardsData(path) {
  getRequest(path)
    .then((data) => {
      // profileTitleValue.textContent = data.name;
      // profileSubtitleValue.textContent = data.about;
      // profileAvatar.src = data.avatar;
      console.log(data)
      data.reverse().forEach((element) => {
        renderElement(loadElements(element.name, element.link, element.likes))
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
function loadElements(elementName, elementLink, elementLikes) {
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

  elementImage.addEventListener('click', () => { //add preview action for new elements from array
    openPopupImage(elementLink, elementName)
  });

  elementTrash.addEventListener('click', function (evt) {
    evt.target.closest('.element').remove();
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


export {getCardsData, createElement}

