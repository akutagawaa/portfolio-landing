const img = document.querySelector('.item__top-icon1')

document.querySelectorAll(".process__faq-item").forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("open-item");
      img.classList.toggle(".item__top-icon2")
    });
  });

