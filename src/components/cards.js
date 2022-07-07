import {toggleButtonState} from "./utils.js"

import {
  elementPopupForm,
  elementLink,
  elementName,
  elementPopup,
  elementsList,
  elementTemplate,
  initialCards,
  elementSubmitButton
} from "./const";

import {
  closePopup,
  openPopupImage
} from "./modal";

function loadElements(elementName, elementLink) { // create element node
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  const likeBtn = element.querySelector('.element__btn-like');
  const elementImage = element.querySelector('.element__image');
  const elementTrash = element.querySelector('.element__trash');

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
  renderElement(loadElements(elementName.value, elementLink.value));
  elementPopupForm.reset();
  elementSubmitButton.disabled = true;
  elementSubmitButton.classList.add('button_state_inactive');
  closePopup(elementPopup);
}

initialCards.reverse().forEach((element) => {
  renderElement(loadElements(element.name, element.link))
});

export {createElement}
