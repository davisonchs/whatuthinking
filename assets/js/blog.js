const postsContainerEl = document.querySelector('#posts-container')

const posts = getAllPosts()

for (const post of posts) {

    const postEl = document.createElement('div')
    const postTitleEl = document.createElement('h2')
    const postContentEl = document.createElement('p')
    const postUsernameEl = document.createElement('p')
    

    postTitleEl.textContent = post.title 
    postContentEl.textContent = post.content 
    postUsernameEl.textContent = `Submitted by: ${post.username}`


    postEl.appendChild(postTitleEl)
    postEl.appendChild(postContentEl)
    postEl.appendChild(postUsernameEl)

    postsContainerEl.appendChild(postEl)
}