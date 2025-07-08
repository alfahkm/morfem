import React from 'react';
import '../styles/MusicSection.css';
import cover1 from '../assets/592x592bb (8).webp';
import cover2 from '../assets/592x592bb (9).webp';
import cover3 from '../assets/592x592bb (3).webp';
import cover4 from '../assets/592x592bb.webp';
import cover5 from '../assets/592x592bb (1).webp';
import cover6 from '../assets/592x592bb (2).webp';
import cover7 from '../assets/592x592bb (4).webp';
import cover8 from '../assets/592x592bb (5).webp';
import cover9 from '../assets/sekaingusmu.jpg';
import cover10 from '../assets/592x592bb (6).webp';
import cover11 from '../assets/592x592bb (7).webp';

const musicData = [
  {
    title: 'Rayakan Pemenang',
    cover: cover1,
    description: '',
    streamingLink: 'https://open.spotify.com/track/52v1IcYW8l17Q72wWMeklf?si=cc8b698fa73e4abb',
    purchaseLink: 'https://store.example.com/album2',
  },
  {
    title: 'Hey, Makan Tuh Gitar!',
    cover: cover2,
    description: '',
    streamingLink: 'https://open.spotify.com/album/12VSaUx0wY6WPYzjfZ7W7n?si=6Fgg0T7xRsCeUE746caylQ',
    purchaseLink: 'https://store.example.com/album1',
  },
  {
    title: 'Binar Wajah Sebaya ',
    cover: cover3,
    description: '',
    streamingLink: 'https://open.spotify.com/album/7G4xr0o7RglaKNu7efMhOR?si=QSxZVXSXQzOIKWevQHzQjg',
    purchaseLink: 'https://store.example.com/album2',
  },
  {
    title: 'Seketika Sekarang Juga',
    cover: cover4,
    description: '',
    streamingLink: 'https://open.spotify.com/album/0x3HYGAWj8ekIfdaJnIKUR?si=j1rTFliVRlaczz4sx8013g',
    purchaseLink: 'https://store.example.com/album2',
  },
  {
    title: 'Dramaturgi Underground',
    cover: cover5,
    description: '',
    streamingLink: 'https://open.spotify.com/album/2Cbzom66XvdzCcZgkrDMCm?si=kaNsbkA9RTaDmcJz0DYgvQ',
    purchaseLink: 'https://store.example.com/album2',
  },
  {
    title: 'Megah Diterima',
    cover: cover6,
    description: '',
    streamingLink: 'https://open.spotify.com/track/13HWccwFz8rjJTYtWz5UrY?si=607ac7a71fcd42b6',
    purchaseLink: 'https://store.example.com/album2',
  },
  {
    title: 'Roman Rafah 2024',
    cover: cover7,
    description: '',
    streamingLink: 'https://open.spotify.com/track/7oL2kNGnLUgtRSghUnLyiz?si=1c587661a33e4fcd',
    purchaseLink: 'https://store.example.com/album2',
  },
  {
    title: 'Teleportasi',
    cover: cover8,
    description: '',
    streamingLink: 'https://open.spotify.com/track/2b9dCRQBpQUHb2SxUDFSXL?si=6d6484ccc94945ff',
    purchaseLink: 'https://store.example.com/album2',
  },
  {
    title: 'Seka Ingusmu',
    cover: cover9,
    description: '',
    streamingLink: 'https://open.spotify.com/track/2736xpp9NVEIuUdafnFCbl?si=d2b0feac08d740a0',
    purchaseLink: 'https://store.example.com/album2',
  },
  {
    title: 'Apapun Dilibas',
    cover: cover10,
    description: '',
    streamingLink: 'https://open.spotify.com/track/6NaXGMzvNsaKMsHEYQhu32?si=9ffd780719cc499e',
    purchaseLink: 'https://store.example.com/album2',
  },
  {
    title: 'INDONESIA',
    cover: cover11,
    description: '',
    streamingLink: 'https://open.spotify.com/album/2ghJjKYrxvScTls6DgzahG?si=HXcz1n6LRQW1jr6xQEOvPg',
    purchaseLink: 'https://store.example.com/album2',
  },
];

const MusicSection = () => {
  return (
    <section className="music-section" id="music">
      <h2>Music</h2>
      <div className="music-list">
        {musicData.map(({ title, cover, description, streamingLink, purchaseLink }) => (
          <div key={title} className="music-item">
            <img src={cover} alt={title} className="music-cover" />
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="music-links">
              <a href={streamingLink} target="_blank" rel="noopener noreferrer" className="streaming-link">Listen</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MusicSection;
