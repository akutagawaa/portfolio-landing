<<<<<<< HEAD
const img = document.querySelector('.item__top-icon1')

document.querySelectorAll(".process__faq-item").forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("open-item");
      img.classList.toggle(".item__top-icon2")
    });
  });

=======
const icon = document.querySelector('.item__top-icon')

document.querySelectorAll(".process__faq-item").forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("open-item");
      icon.src = item.classList.contains("open-item")
      ? "./assets/icons/minus icon.svg"
      : "./assets/icons/Plus icon.svg";
    });
  });

>>>>>>> 624cdeb35c3f77c7a308793d548ae4aa52a823af
