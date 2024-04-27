export const openModal = (popup) => {
  popup.classList.add("popup_is-opened");
  document.addEventListener("click", handleClickOutside);
  document.addEventListener("keydown", handleOnEscape);
};

export const closeModal = (popup) => {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("click", handleClickOutside);
  document.removeEventListener("keydown", handleOnEscape);
};

const handleClickOutside = (evt) => {
  if (!evt.target.contains(evt.target.closest(".popup"))) return;
  if (evt.target.isEqualNode(evt.target.closest(".popup__close"))) return;
  const openPopup = document.querySelector(".popup_is-opened");
  closeModal(openPopup);
};

const handleOnEscape = (evt) => {
  if (evt.key === "Escape" || evt.keyCode === 27) {
    const openPopup = document.querySelector(".popup_is-opened");
    closeModal(openPopup);
  }
};
