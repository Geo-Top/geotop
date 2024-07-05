import { useState } from 'react';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
const Card = ({ title, content, imgUrl }) => (
  <div className="card" style={{height: "380px"}} >
    <img style={{width: "100%"}} src={imgUrl} alt={title || 'Image'} />
    <div className="card-content">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  </div>
);
const cardsContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    borderRadius: "6px",
    color: "#333",
    // padding: "1rem",
    // overflowX: "auto",
    position: "relative",
}
export default function OurProject() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsData = [
    { id: 1, title: 'Health clinic control and management unit', imgUrl: 'img/clinic.jpeg' },
    { id: 2, title: 'A 3D model of one of the buildings in New Alamein',  imgUrl: 'img/3d modeling bulding.jpg' },
    { id: 3, title: 'Distribution of solar power stations in albuhayrih', imgUrl: 'img/البحيرة.jpg' },
    { id: 4, title: 'Evaluating the health of agricultural crops in Dakahlia',  imgUrl: 'img/Evaluating the health of agricultural crops.png' },
    { id: 5, title: 'Surveying of the Benhtai drinking water station',  imgUrl: 'img/حياة كريمة زفتى.jpg' },
    { id: 6, title: '3D MODELING OF AL BALAD BANK',  imgUrl: 'img/33d.jpg' },
    { id: 7, title: 'qanony mobile app',  imgUrl: 'img/mobile app.png' },
    { id: 8, title: 'Supermarket control panel',  imgUrl: 'img/Dashboard.png' },
    { id: 9, title: 'Designs for Softilox company',imgUrl: 'img/graphic design (3).jfif' },
    { id: 10, title: 'A website that displays the restaurant\'s meals', imgUrl: 'img/trainingproject.jpeg' },
  ];

  const shiftCards = (arr, steps) => {
    return [...arr.slice(steps), ...arr.slice(0, steps)];
  };


  return (
    <div className="container" style={{marginTop: "60px"}}>
      <br/>
      <h1  style={{ textAlign: 'center' }}> Our Projects </h1>
      <div style={cardsContainer}>
        {shiftCards(cardsData, currentIndex).slice(0, 10).map((card, index) => (
          <Card
            key={card.id}
            title={card.title}
            content={card.content}
            imgUrl={card.imgUrl}
          />
        ))}
      </div>
</div>
  );
}


