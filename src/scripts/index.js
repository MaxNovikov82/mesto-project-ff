import "../styles/index.css";
import { initialCards } from "./initialCards";
import { closeModal, openModal } from "./modals";
import { handleDeleteCard, likeCard, createCard } from "./cards";

const cardContainer = document.querySelector(".places__list");
const cardForm = document.forms["new-place"];
const placeName = cardForm["place-name"];
const placeLink = cardForm["link"];
const popupEdit = document.querySelector(".popup_type_edit");
const popupNewCard = document.querySelector(".popup_type_new-card");
const popupImage = document.querySelector(".popup_type_image");
const popupImagePicture = popupImage.querySelector(".popup__image");
const popupImageCaption = popupImage.querySelector(".popup__caption");

const profileInfoButton = document.querySelector(".profile__edit-button");
const profileAddCardButton = document.querySelector(".profile__add-button");
const popupCloseButtons = document.querySelectorAll(".popup__close");

const profileForm = document.forms["edit-profile"];
const nameInput = profileForm.name;
const jobInput = profileForm.description;
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__description");

const zoomImage = (card) => {
  popupImagePicture.src = card.link;
  popupImagePicture.alt = card.name;
  popupImageCaption.textContent = card.name;
  openModal(popupImage);
};

initialCards.forEach((card) => {
  cardContainer.append(createCard(card, handleDeleteCard, likeCard, zoomImage));
});

cardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const cardData = {
    name: placeName.value,
    link: placeLink.value,
  };
  cardContainer.prepend(
    createCard(cardData, handleDeleteCard, likeCard, zoomImage)
  );
  closeModal(popupNewCard);
  setTimeout(() => {
    cardForm.reset();
  }, 600);
});

popupCloseButtons.forEach((element) => {
  const popup = element.closest(".popup");
  element.addEventListener("click", () => closeModal(popup));
});

profileInfoButton.addEventListener("click", () => {
  openModal(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

profileAddCardButton.addEventListener("click", () => {
  openModal(popupNewCard);
});

const handleProfileOnSubmit = (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closeModal(popupEdit);
};

profileForm.addEventListener("submit", handleProfileOnSubmit);
