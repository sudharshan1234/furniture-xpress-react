import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about'></PageHero>
      <section className='grid gap-16 p-20 px-0 w-[90vw] my-0 mx-auto max-w-[1170px] lg:grid-cols-2'>
        <img src={aboutImg} alt='nice desk' />
        <article>
          <div className='text-left'>
            <h2 className='tracking-widest mb-3 capitalize text-3xl'>
              our story
            </h2>
            <div className='w-24 h-1 bg-primary-500 ml-0 mr-auto'></div>
          </div>
          <p className='max-w-[45em] my-0 mx-auto mt-8 text-grey-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            possimus, repellat voluptatum libero quisquam laboriosam unde sequi
            magnam ad facilis mollitia obcaecati. Impedit magni harum magnam
            nostrum hic quam eligendi.
          </p>
        </article>
      </section>
    </main>
  );
};

export default AboutPage;
