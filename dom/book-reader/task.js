const fontSizeSmall = document.querySelector('.font-size_small')
const fontSizeBig = document.querySelector('.font-size_big')
const fontSize = Array.from(document.querySelectorAll('.font-size'))
const book = document.querySelector('.book')

fontSize.forEach((el) => {
  el.addEventListener('click', function (event) {
    event.preventDefault();
    fontSize.forEach((el) => {
      el.classList.remove('font-size_active');
    });
    el.classList.add('font-size_active')
    if (el === fontSizeSmall) {
      book.classList.add('book_fs-small')
    } else if (el === fontSizeBig) {
      book.classList.remove('book_fs-small')
      book.classList.add('book_fs-big');
    } else {
      book.classList.remove('book_fs-small')
      book.classList.remove('book_fs-big')
    }
  });
});