import { openModal } from "./modals";
const cardTemplate = document.querySelector("#card-template");

export const handleDeleteCard = (event) => {
  const card = event.target.closest("li");
  card.remove();
};

export const likeCard = (likeButton) => {
  likeButton.classList.toggle("card__like-button_is-active");
};

export const cardCreate = (card, deleteCard, likeCard, zoomImage) => {
  const cardElement = cardTemplate.cloneNode(true).content;
  const cardImage = cardElement.querySelector(".card__image");
  const cardDescription = cardElement.querySelector(".card__description");
  const cardTitle = cardDescription.querySelector(".card__title");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");

  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardTitle.textContent = card.name;

  deleteButton.addEventListener("click", (event) => deleteCard(event));
  likeButton.addEventListener("click", () => likeCard(likeButton));
  cardImage.addEventListener("click", () => zoomImage(openModal, card));

  return cardElement;
};
