import React, { useState } from 'react';

const RecommendationSection = ({ recommendations }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction) => {
    if (direction === 'left' && currentIndex < recommendations.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (direction === 'right' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="p-4">
      <h2 className="text-xl mb-4">Recommended Clothes</h2>
      {recommendations.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {recommendations.map((item, index) => (
            <div
              key={index}
              className={`border p-4 rounded-lg ${
                index === currentIndex ? 'active' : ''
              }`}
              onTouchStart={(e) => {
                const startX = e.touches[0].clientX;
                const startY = e.touches[0].clientY;
                const touchMoveHandler = (e) => {
                  const endX = e.touches[0].clientX;
                  const endY = e.touches[0].clientY;
                  const distanceX = Math.abs(endX - startX);
                  const distanceY = Math.abs(endY - startY);
                  if (distanceX > distanceY && distanceX > 50) {
                    if (endX > startX) {
                      handleSwipe('right');
                    } else {
                      handleSwipe('left');
                    }
                  }
                };
                document.addEventListener('touchmove', touchMoveHandler);
                document.addEventListener('touchend', () => {
                  document.removeEventListener('touchmove', touchMoveHandler);
                });
              }}
            >
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-2" />
              <h3 className="text-lg">{item.name}</h3>
              <p>{item.description}</p>
              <button className="bg-blue-600 text-white mt-2 p-2 rounded-lg">
                View Collection
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No recommended products available at the moment. Please check back later.</p>
      )}
    </section>
  );
};

export default RecommendationSection;
