// this is gonna be an absolute MESS

const searchBar = document.getElementById("search-bar");
const posts = document.querySelectorAll(".blog-post");

searchBar.addEventListener("input", () => { // use arrow to preserve scope of this (OH MY GOD I HATE YOU JAVASCRIPT)
  const searchVal = searchBar.value.toLowerCase(); // "searchBar.value is not defined" randomly fixed itself? pray it works forever now

  posts.forEach(post => {
    const title = post.querySelector(".post-title").textContent.toLowerCase();

    if (title.includes(searchVal)) {
      post.classList.remove("hidden"); // if it contains the string, remove the hidden element
    } else {
      post.classList.add("hidden");
    }
  });
})
