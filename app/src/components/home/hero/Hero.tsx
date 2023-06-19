import heroAvatarDesktop from "../../../assets/images/image-profile-desktop.webp";
import heroAvatarTablet from "../../../assets/images/image-profile-tablet.webp";
import heroAvatarMobile from "../../../assets/images/image-profile-mobile.webp";
import { ReactComponent as PatternRings } from "../../../assets/images/pattern-rings.svg";
import { ReactComponent as PatternCircle } from "../../../assets/images/pattern-circle.svg";
import ContactBtn from "../contact_btn/ContactBtn";

const Hero = () => {
  return (
    <>
      <section className="section hero__container">
        <div className="hero__content">
          <div className="hero__avatar-container">
            <PatternCircle className="hero-circle" />
            <picture className="hero__img">
              <source media="(min-width: 768px)" srcSet={heroAvatarTablet} />
              <source media="(min-width: 1220px)" srcSet={heroAvatarDesktop} />
              <img
                src={heroAvatarMobile}
                alt="Avatar of website owner."
                className="hero__img"
              />
            </picture>
          </div>
          <div className="hero__callout">
            <article>
              <h2>
                Nice to meet you! I'm{" "}
                <span className="underlined">Adam Keyes.</span>
              </h2>
              <p>
                Based in London UK, I'm a Full Stack Developer, passionate about
                building accessible web apps and data transformation pipelines.
              </p>
              <div className="hero__contact">
                <ContactBtn />
              </div>
            </article>
          </div>
          <hr />
        </div>
      </section>
      <PatternRings className="hero-rings" />
    </>
  );
};

export default Hero;
