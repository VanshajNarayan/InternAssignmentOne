import "./HeroSection.css";

function Hero() {
  return (
    <>
      <header className="header">
        <section className="hero_section">
          <div className="textPart">
            <img
              src="https://cdn-icons-png.flaticon.com/512/412/412869.png"
              alt="food truck"
              width="100%"
              className="food_truck"
            />
            <h2>
              Discover the <span className="best">Best</span> Food and Drinks
            </h2>
            <p>
              Naturally made Healthcare Products for the better care & support
              of your body.
            </p>
            <button>Explore Now!</button>
          </div>
          <div className="imagePart">
            <img
              src="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="pizza"
              width="100%"
            />
          </div>
        </section>
      </header>
    </>
  );
}

export default Hero;
