import profileImage from "../../../assets/images/image-profile-desktop.webp";

const Hero = () => {
  return (
    <div className="main__hero mt-4">
      <div className="main__hero-grid">
        <div className="main__hero-content">
          <article>
            <h2>
              Nice to meet you! I'm{" "}
              <span className="underlined">Oliver Cadman.</span>
            </h2>
          </article>
        </div>
        <div className="image-wrapper">
          <img src={profileImage} alt="Profile Picture of Website Owner." />
        </div>
      </div>
    </div>
  );
};

export default Hero;
