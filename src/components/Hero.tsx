import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";
import LinkBtn from "./LinkBtn";

const Hero = () => {
  return (
    <section className='min-h-[60vh] grid place-items-center w-[90vw] my-0 mx-auto max-w-[1170px] lg:w-[95vw] lg:h-[calc(100vh-5rem)] lg:grid-cols-2 lg:gap-8'>
      <article>
        <h1 className='text-4xl capitalize '>
          design your <br />
          comfort zone
        </h1>
        <p className='leading-loose max-w-[45em] mb-8 text-grey-500 text-xs lg:text-xl'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Exercitationem modi in magni magnam accusantium, ab et quia, dolorum
          adipisci aliquam, reprehenderit autem dignissimos? Natus quas quia
          officiis ullam ea. Vero?
        </p>
        <LinkBtn text='SHOP NOW' url='/products'></LinkBtn>
      </article>
      <article className='hidden lg:block lg:relative before:absolute before:w-[10%] before:h-[80%] before:bg-primary-900 before:bottom-0 before:left-[-8%] before:rounded'>
        <img
          src={heroBcg}
          alt='nice table'
          className='w-full h-[550px] relative rounded block object-cover'
        />
        <img
          src={heroBcg2}
          alt='person working '
          className='absolute bottom-0 left-0 w-[250px] -translate-x-2/4 rounded'
        />
      </article>
    </section>
  );
};

export default Hero;
