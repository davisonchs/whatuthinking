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