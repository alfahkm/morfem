import React from 'react';
import '../styles/MerchandiseSection.css';
import merch1 from '../assets/merchandise.webp';
import merch2 from '../assets/id-11134207-7rase-m61seqkcbz6wd1.webp';
import merch3 from '../assets/id-11134207-7rask-m5woi01dm1p2b9.webp';

const merchandiseData = [
  {
    name: 'Morfem - Morfuzz',
    image: merch1,
    description: 'Official Merchandise (Free Poster, Pin & Sticker) | Kaos Band Katun',
    price: 'IDR: 220.000 ONLYYYY',
    link: 'https://shopee.co.id/Morfem-Morfuzz-Tshirt-Black-Official-Merchandise-(Free-Poster-Pin-Sticker)-Kaos-Band-Katun-i.381723876.27534335228?sp_atk=c381e4a7-aa35-41c3-94c1-64ed9bb78eaa&xptdk=c381e4a7-aa35-41c3-94c1-64ed9bb78eaa',
  },
  {
    name: 'Morfem - Morfrenz',
    image: merch2,
    description: 'Official Merchandise',
    price: 'IDR: 220.000 ONLYYYY',
    link: 'https://shopee.co.id/Morfem-Morfrenz-Tshirt-Black-Official-Merchandise-i.381723876.29875536360?sp_atk=49a24e10-316a-4094-b8c0-f1bfc83e8650&xptdk=49a24e10-316a-4094-b8c0-f1bfc83e8650',
  },
  {
    name: 'Morfem - Morpyman',
    image: merch3,
    description: 'Official Merchandise',
    price: 'IDR: 220.000 ONLYYYY',
    link: 'https://shopee.co.id/Morfem-Morpyman-Tshirt-White-Official-Merchandise-i.381723876.27175272301?sp_atk=7386539e-dc67-4db3-a3d9-7e997dc7f6ca&xptdk=7386539e-dc67-4db3-a3d9-7e997dc7f6ca',
  },
  // Add more merchandise items as needed
];

const MerchandiseSection = () => {
  return (
    <section className="merchandise-section" id="merchandise">
      <h2>Merchandise</h2>
      <div className="merch-list">
        {merchandiseData.map(({ name, image, description, price, link }) => (
          <div key={name} className="merch-item">
            <img src={image} alt={name} className="merch-image" />
            <h3>{name}</h3>
            <p>{description}</p>
            <div className="merch-price">{price}</div>
            <a href={link} target="_blank" rel="noopener noreferrer" className="merch-link">Buy Now</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MerchandiseSection;
