import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            I'm baby forage vexillologist lumbersexual austin poutine kinfolk,
            grailed lo-fi vinyl 3 wolf moon air plant. Vexillologist wolf master
            cleanse, fingerstache echo park chicharrones distillery. Listicle
            master cleanse raclette hot chicken you probably haven't heard of
            them, umami tacos cronut. Adaptogen cliche iPhone, biodiesel art.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
