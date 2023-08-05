import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";
import LinkBtn from "./LinkBtn";

const Hero = () => {
  return (
    <section className="min-h-[60vh] grid place-items-center w-[90vw] my-0 mx-auto max-w-[1170px] lg:w-[95vw] lg:h-[calc(100vh-5rem)] lg:grid-cols-2 lg:gap-8">
      <article>
        <h1 className="text-4xl capitalize ">
          design your <br />
          comfort zone
        </h1>
        <p className="leading-loose max-w-[45em] mb-8 text-grey-500 text-xs lg:text-xl">
          Elevate your living spaces with our curated selection of exquisite
          furniture pieces. From luxurious sofas and elegant dining sets to
          innovative home decor, we offer a diverse range of contemporary and
          timeless designs to complement any interior theme. Enjoy a seamless
          shopping experience on our user-friendly website, and let our
          dedicated customer care team guide you to create a harmonious and
          inviting atmosphere in your home.
        </p>
        <LinkBtn text="SHOP NOW" url="/products"></LinkBtn>
      </article>
      <article className="hidden lg:block lg:relative before:absolute before:w-[10%] before:h-[80%] before:bg-primary-900 before:bottom-0 before:left-[-8%] before:rounded">
        <img
          src={heroBcg}
          alt="nice table"
          className="w-full h-[550px] relative rounded block object-cover"
        />
        <img
          src={heroBcg2}
          alt="person working "
          className="absolute bottom-0 left-0 w-[250px] -translate-x-2/4 rounded"
        />
      </article>
    </section>
  );
};

export default Hero;
