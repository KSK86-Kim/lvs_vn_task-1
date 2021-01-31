// (() => {
//   const menuBtnRef = document.querySelector("[data-button]");

//   menuBtnRef.addEventListener("click", () => {
//     const expanded =
//       menuBtnRef.getAttribute("aria-expanded") === "true" || false;
//     menuBtnRef.classList.toggle("is-open");
//     menuBtnRef.setAttribute("aria-expanded", !expanded);
//   });
// })();

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();

const questionBtnRef1 = document.querySelector("[data-idBtn1]");
const questionBtnRef2 = document.querySelector("[data-idBtn2]");
const questionBtnRef3 = document.querySelector("[data-idBtn3]");
const questionBtnRef4 = document.querySelector("[data-idBtn4]");

function questBtn() {
  const expanded = this.getAttribute("aria-expanded") === "true" || false;
  this.classList.toggle("is-open");
  this.setAttribute("aria-expanded", !expanded);
}

const accHD = document.getElementsByClassName("question__btn");

console.log(accHD);

accHD.addEventListener("click", questBtn);
// questionBtnRef2.addEventListener("click", questBtn);
// questionBtnRef3.addEventListener("click", questBtn);
// questionBtnRef4.addEventListener("click", questBtn);
