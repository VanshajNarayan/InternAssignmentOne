import "./About.css";

function About() {
  return (
    <>
      <section className="about_section">
        <div className="about_box">
          <div className="imgPart">
            <img
              src="https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="pizza"
              width="100%"
            />
          </div>
          <div className="textPart">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At minima
              autem a eligendi delectus aut? Tempore sed ratione enim nisi quod
              facilis explicabo corrupti? Ex repellat alias laboriosam
              distinctio quae. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quaerat, vel!
            </p>
            <button>Read More</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
