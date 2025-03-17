import "../styles/style.css";

const ShimmerUI = () => {
  return (
    <div className="restaurant-container">
      {[...Array(8)].map((_, index) => (
        <div key={index} className="shimmer-card">
          <div className="shimmer-image"></div>
          <div className="shimmer-content">
            <div className="shimmer-title"></div>
            <div className="shimmer-rating"></div>
            <div className="shimmer-cuisine"></div>
            <div className="shimmer-area"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerUI;
