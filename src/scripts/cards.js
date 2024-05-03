export const handleDeleteCard = (event) => {
  const card = event.target.closest("li");
  card.remove();
};

export const likeCard = (likeButton) => {
  likeButton.classList.toggle("card__like-button_is-active");
};
