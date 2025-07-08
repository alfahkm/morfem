import React, { useEffect, useRef } from 'react';
import '../styles/Content.css';
import cover1 from '../assets/16tahun.jpg';
import cover2 from '../assets/panggung.webp';
import cover3 from '../assets/Mendarat dengan sukses di Jepang..jpg';
import cover4 from '../assets/Jumpa di.jpg';

const Content = () => {
  const sectionRef = useRef(null);

  const albums = [
    { title: '', artist: '', cover: cover1, link: 'https://www.instagram.com/p/DJHlSDfSK2c/?utm_source=ig_web_copy_link&igsh=MTMxeGNvdzNxanh4Ng==' },
    { title: '', artist: '', cover: cover2, link: 'https://www.instagram.com/p/DI_bnJtzfh-/?utm_source=ig_web_copy_link&igsh=ZmVxeGlrMHduZXY2' },
    { title: '', artist: '', cover: cover3, link: 'https://www.instagram.com/p/DC8PSC1yAEU/?utm_source=ig_web_copy_link&igsh=MWNjaThzdnA4dGJhbA==' },
    { title: '', artist: '', cover: cover4, link: 'https://www.instagram.com/p/DFfspd4yAiM/?utm_source=ig_web_copy_link&igsh=dG4xZWtuYzRlYngx' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section className="content" ref={sectionRef}>
      <div className="content-inner">
        <h2>Postingan INSTAGRAM</h2>
        <div className="album-grid">
          {albums.map(({ title, artist, cover, link }) => (
            <div key={title} className="album-item">
              <div className="album-image">
                <img src={cover} alt={`${title} Cover`} />
              </div>
              <div className="album-info">
                <h3>{title}</h3>
                <p>{artist}</p>
                <a href={link} className="listen-btn" target="_blank" rel="noopener noreferrer">Lihat Postingan</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content;
