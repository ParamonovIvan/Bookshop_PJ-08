const booksList = document.querySelector(".books__cards");

const displayBooks = (booksArray) => {
  booksArray.forEach(book => {
    let author;
    if (!book.authors) {
      author = "Unknown Author";
    } else if (book.authors.length == 1) {
      author = book.authors[0];
    } else if (book.authors.length > 1) {
      author = book.authors.join(", ");
    }

    let reviews;
    if (book.reviews) {
      reviews = book.reviews;
    } else {
      reviews = 0;
    }

    let description;
    if (!book.description) {
      description = " ";
    } else {
      description = book.description;
    }
    
    const bookCard = `
      <li class="books__card" id="${book.id}">
        <img src="${book.coverUrl}" alt="${book.title} book cover" class="books__card-img">
        <div class="books__info-box">
          <p class="books__author">${author}</p>
          <p class="books__title">${book.title}</p>
          <span class="books__reviews">
            <div class="review-stars">
              <img src="./images/star-gray.svg" class="review-star">
              <img src="./images/star-gray.svg" class="review-star">
              <img src="./images/star-gray.svg" class="review-star">
              <img src="./images/star-gray.svg" class="review-star">
              <img src="./images/star-gray.svg" class="review-star">
            </div>
            ${reviews} reviews
          </span>
          <p class="books__about">${description}</p>
          <p class="books__price">${book.currency} ${book.price}</p>
          <button id="${book.id}" class="books__btn btn">buy now</button>
        </div>
      </li>
    `;
    booksList.insertAdjacentHTML("beforeend", bookCard);

    const currentBook = document.getElementById(book.id);
    let stars = Array.from(currentBook.querySelectorAll(".review-star"));
    if (book.rating && book.reviews) {
      if (!Number.isInteger(book.rating)) {
        book.rating = Math.floor(book.rating);
      }
      switch (book.rating) {
        case 1:
          stars[0].src = "./images/star-gold.svg";
          break;
        case 2:
          stars[0].src = "./images/star-gold.svg";
          stars[1].src = "./images/star-gold.svg";
          break;
        case 3:
          stars[0].src = "./images/star-gold.svg";
          stars[1].src = "./images/star-gold.svg";
          stars[2].src = "./images/star-gold.svg";
          break;
        case 4:
          stars[0].src = "./images/star-gold.svg";
          stars[1].src = "./images/star-gold.svg";
          stars[2].src = "./images/star-gold.svg";
          stars[3].src = "./images/star-gold.svg";
          break;
        case 5:
          stars[0].src = "./images/star-gold.svg";
          stars[1].src = "./images/star-gold.svg";
          stars[2].src = "./images/star-gold.svg";
          stars[3].src = "./images/star-gold.svg";
          stars[4].src = "./images/star-gold.svg";
          break;
        default:
          console.log("default");
      }
    }
    stars = [];
  });

    const btns = Array.from(document.querySelectorAll(".books__btn"));
    const container = document.querySelector(".shop-bag");
    
    btns.forEach(btn => {
      if (Object.prototype.hasOwnProperty.call(localStorage, btn.id)) {
        btn.classList.add("pressed");
        btn.innerHTML = "in the cart";
      }

      let bagItems = `<div class="items-number">${Object.keys(localStorage).length}</div>`;
      if (Object.keys(localStorage).length > 0) {
        container.innerHTML = bagItems;
      }

      btn.addEventListener("click", () => {
        const idName = btn.id;
        if (!btn.classList.contains("pressed")) {
          btn.innerHTML = "in the cart";
          btn.classList.add("pressed");
          localStorage.setItem(idName, btn.id);
        } else if (btn.classList.contains("pressed")) {
          btn.innerHTML = "buy now";
          btn.classList.remove("pressed");
          localStorage.removeItem(idName, btn.id);
        }
        bagItems = `<div class="items-number">${Object.keys(localStorage).length}</div>`;
        container.innerHTML = bagItems;
        if (Object.keys(localStorage).length == 0) {
          container.innerHTML = " ";
        }
      });
  });
};

export { booksList, displayBooks};