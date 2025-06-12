document.addEventListener("DOMContentLoaded", () => {
  fetch("posts.json")
    .then((res) => res.json())
    .then((posts) => {
      const container = document.getElementById("blog-container");
      posts.forEach((post) => {
        const postEl = document.createElement("div");
        postEl.className = "post";
        postEl.innerHTML = `
          <h2>${post.title}</h2>
          <img loading="lazy" src="${post.image}" alt="${post.title}" />
          <p>${post.content}</p>
        `;
        container.appendChild(postEl);
      });
    })
    .catch((err) => console.error("Error loading posts:", err));
});
