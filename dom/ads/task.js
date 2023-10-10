const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'))

let i = 0;

function classChange() {
  rotatorCase[i].classList.remove("rotator__case_active")
  if (i === rotatorCase.length - 1) {
    i = 0;
  } else {
    i++;
  }
  rotatorCase[i].classList.add("rotator__case_active")
}

setInterval(classChange, 1000)

