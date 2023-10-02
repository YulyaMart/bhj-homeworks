const dropdown = document.querySelector('.dropdown')
const dropdownList = document.querySelector('.dropdown__list')
const dropdownValue = document.querySelector('.dropdown__value')
const dropdownLink = Array.from(document.querySelectorAll('.dropdown__link'))

const dropdownListActive = () => {
    dropdownList.classList.toggle('dropdown__list_active')
}
dropdown.addEventListener('click', dropdownListActive)

for (let i = 0; i < dropdownLink.length; i++) {
    dropdownLink[i].onclick = () => {
        dropdownValue.closest('div').textContent = dropdownLink[i].textContent
        return false
    }
}