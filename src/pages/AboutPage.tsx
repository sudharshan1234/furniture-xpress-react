import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about"></PageHero>
      <section className="grid gap-16 p-20 px-0 w-[90vw] my-0 mx-auto max-w-[1170px] lg:grid-cols-2">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="text-left">
            <h2 className="tracking-widest mb-3 capitalize text-3xl">
              our story
            </h2>
            <div className="w-24 h-1 bg-primary-500 ml-0 mr-auto"></div>
          </div>
          <p className="max-w-[45em] my-0 mx-auto mt-8 text-grey-500">
            Welcome to FurnitureXpress, your one-stop destination for premium
            furniture solutions that perfectly blend style, comfort, and
            functionality. Our mission is to revolutionize the furniture
            shopping experience and make it enjoyable, seamless, and secure for
            every customer.
            <br></br>
            <br></br>
            At FurnitureXpress, we curate an extensive collection of handpicked
            furniture pieces designed to elevate your home or office
            environment. From elegant accent chairs to durable wooden desks, our
            carefully selected range caters to diverse tastes and interior
            design preferences. Embracing innovation, we offer a seamless login,
            logout, and signup functionality to ensure a personalized and secure
            shopping journey for each user.
            <br></br>
            <br></br>
            We take pride in our dedication to customer satisfaction, offering
            top-notch customer service and incorporating Stripe payment for
            smooth and secure transactions. Our platform goes beyond just
            showcasing furniture; it inspires creativity and transformation,
            making it easier than ever to turn your living spaces into
            personalized havens of style and comfort. Discover the art of
            furniture shopping redefined at FurnitureXpress, and embark on a
            delightful journey of furnishing your spaces with elegance and
            grace.
          </p>
        </article>
      </section>
    </main>
  );
};

export default AboutPage;
