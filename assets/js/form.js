const buttonEl = document.querySelector("#form-submit")

const usernameInputEl = document.querySelector("#username")
const titleInputEl = document.querySelector("#title")
const contentInputEl = document.querySelector("#content")

buttonEl.addEventListener('click', function (event) {
    event.preventDefault()

    const asObject = {
        username: usernameInputEl.value,
        title: titleInputEl.value,
        content: contentInputEl.value
    }
    
    submitpost(asObject)
})