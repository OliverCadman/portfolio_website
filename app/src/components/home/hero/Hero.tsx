import heroAvatarDesktop from "../../../assets/images/image-profile-desktop.webp";
import heroAvatarTablet from "../../../assets/images/image-profile-tablet.webp";
import heroAvatarMobile from "../../../assets/images/image-profile-mobile.webp";

const Hero = () => {
  return (
    <section className="hero__content">
      <div className="hero__avatar-container">
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
            <span className="underlined">Oli Cadman.</span>
          </h2>
        </article>
      </div>
    </section>
  );
};

export default Hero;
