import React from 'react';

const RecommendationSection = ({ recommendations }) => {
  return (
    <section className="p-4">
      <h2 className="text-xl mb-4">Recommended Clothes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recommendations.map((item, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-2" />
            <p>{item.description}</p>
            <div>
              <button 
                className="bg-blue-600 text-white mt-2 p-2 rounded-lg"
                onClick={() => window.location.href = `http://127.0.0.1:550${index+1}/index.html`}
              >
                View Collection
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendationSection;
