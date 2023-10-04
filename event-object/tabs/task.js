const tabs = Array.from(document.querySelectorAll('.tab'))
const tabContent = Array.from(document.querySelectorAll('.tab__content'))

tabs.forEach((tab) => {
    tab.addEventListener('click', (event) => {
        let tabIndex = tabs.indexOf(tab)
        tabs.forEach((tab) => {
            tab.classList.remove('tab_active')
        })
        tabContent.forEach((content) => {
            content.classList.remove('tab__content_active')
        })
        tab.classList.add('tab_active')
        tabContent[tabIndex].classList.add('tab__content_active')
    })
})