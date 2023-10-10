const reveal = document.querySelectorAll('.reveal')

window.addEventListener("scroll", function () {
    reveal.forEach((el) => {
      const top = el.getBoundingClientRect().top
      const bottom = el.getBoundingClientRect().bottom
      if (bottom > 0 && top < this.window.innerHeight) {
        el.classList.add("reveal_active")
      } else {
        el.classList.remove("reveal_active")
      }
    })
  })