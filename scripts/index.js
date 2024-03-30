const cardTemplate = document.querySelector("#card-template");
const placesList = document.querySelector(".places__list");

function addCard(data, Delete) {
  const CardContent = cardTemplate.content.querySelector(".card");
  const newCard = CardContent.cloneNode(true);
  const cardImage = newCard.querySelector(".card__image");
  cardImage.src = data.link;
  cardImage.alt = data.name;

  newCard.querySelector(".card__title").textContent = data.name;

  const deleteButton = newCard.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", function () {
    Delete(newCard);
  });
  return newCard;
}

function Delete(card) {
  card.remove();
}

initialCards.forEach((cardData) => {
  const cardElement = addCard(cardData, Delete);
  placesList.appendChild(cardElement);
});
