function postBlog() {
    let name = document.getElementById('name').value;
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    
    if (name && title && content) {
        let blogPost = {
            name: name,
            title: title,
            content: content
        };
        
        let posts = JSON.parse(localStorage.getItem('blogs')) || [];
        posts.push(blogPost);
        localStorage.setItem('blogs', JSON.stringify(posts));
        alert('Blog posted successfully!');
        document.getElementById('name').value = '';
        document.getElementById('title').value = '';
        document.getElementById('content').value = '';
    } else {
        alert('Please fill out all fields!');
    }
}

function viewPosts() {
    let blogContainer = document.getElementById('blogContainer');
    blogContainer.innerHTML = '';
    let posts = JSON.parse(localStorage.getItem('blogs')) || [];
    
    posts.forEach(post => {
        let postElement = document.createElement('div');
        postElement.classList.add('blog-post');
        postElement.innerHTML = `<h3>${post.title}</h3><p><strong>${post.name}</strong></p><p>${post.content}</p>`;
        blogContainer.appendChild(postElement);
    });
}

