const apiURL = 'https://jsonplaceholder.typicode.com/posts';
const postsContainer = document.getElementById('posts');


fetch(apiURL)
  .then(response => response.json())
  .then(posts => {
    posts.slice(0, 10).forEach(post => { 
      const postCard = document.createElement('div');
      postCard.className = 'post-card';
      postCard.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <small>Post ID: ${post.id}</small>
      `;
      postsContainer.appendChild(postCard);
    });
  })
  .catch(err => {
    console.log("Error fetching posts: ", err);
  });

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('src/js/service-worker.js')
      .then(reg => console.log('Service Worker registered', reg))
      .catch(err => console.log('Service Worker registration failed', err));
  });
}