const icon = document.querySelector('.item__top-icon')

document.querySelectorAll(".process__faq-item").forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("open-item");
      icon.src = item.classList.contains("open-item")
      ? "./assets/icons/minus icon.svg"
      : "./assets/icons/Plus icon.svg";
    });
  });

