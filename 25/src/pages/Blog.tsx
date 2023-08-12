import React from 'react';

const Blog = () => {
  const posts = [
    { id: 1, title: '1 Post', content: 'This is the content of the 1 post.' },
    { id: 2, title: '2 Post', content: 'This is the content of the 2 post.' },
    { id: 3, title: '3 Post', content: 'This is the content of the 3 post.' },
    { id: 4, title: '4 Post', content: 'This is the content of the 4 post.' },
    { id: 5, title: '5 Post', content: 'This is the content of the 5 post.' },
    // Diğer gönderileri burada tanımlayabilirsiniz
  ];

  return (
    <div>
      <h2>Blog</h2>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Blog;
