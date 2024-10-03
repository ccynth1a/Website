// Display the most recently posted blog post on index.html
fetch('blog-posts.html')
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");
    const posts = doc.querySelectorAll('.blog-post');
    const recentPost = posts[posts.length - 1];

    document.getElementById('recent-blog').outerHTML = recentPost.outerHTML;
  });
