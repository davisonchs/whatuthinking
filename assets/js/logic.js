function getAllPosts() {
    let localStorageposts = localStorage.getItem('posts')
    return JSON.parse(localStorageposts)
}

function submitpost(newPost) {
    console.log ('submitting new post')

    let localStorageposts = localStorage.getItem('posts')

    let parsedLocalStoragePosts;

    if (localStorageposts === null) {
        parsedLocalStoragePosts = []
    } else {
        parsedLocalStoragePosts = JSON.parse(localStorageposts)
    }

    parsedLocalStoragePosts.push(newPost)

    localStorage.setItem("posts", JSON.stringify(parsedLocalStoragePosts))

}

function renderTheme() {
   const bodyEl = document.querySelector('body')
   const darkTheme = localStorage.getItem('darkTheme')

   if (darkTheme === "true") {
    bodyEl.classList.add('dark')
   }
}


function switchTheme() {
   const darkTheme = localStorage.getItem('darkTheme')

   const bodyEl = document.querySelector('body')
   if (darkTheme === null || darkTheme === "false") {
    localStorage.setItem('darkTheme', "true")
    bodyEl.classList.add('dark') 
   } else {
    localStorage.setItem('darkTheme', "false")
    bodyEl.classList.remove('dark')
   }

}

const switchThemeButtonEl = document.querySelector('#switch-theme')

switchThemeButtonEl.addEventListener('click', switchTheme)

renderTheme()