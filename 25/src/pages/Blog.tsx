import React, { useEffect, useState } from 'react';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  thumbnailUrl: string;
}

const Blog = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => {
        setPhotos(data);
        setLoading(false); // Veriler geldiğinde loading durumunu kapat
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
        setLoading(false); // Hata durumunda da loading durumunu kapat
      });
  }, []);

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <div className='main'>
      <h2>Blog</h2>
      {photos.map(photo => (
        <img key={photo.id} src={photo.thumbnailUrl} alt="" />
      ))}
    </div>
  );
};

export default Blog;
