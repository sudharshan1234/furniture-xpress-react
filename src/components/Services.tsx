import React from "react";
import styled from "styled-components";
import { services } from "../utils/constants";

const Services = () => {
  return (
    <section className='py-20 px-5 bg-primary-1000 xg:p-0'>
      <div className='xg:translate-y-20 w-[90vw] mx-auto my-0 max-w[1170px] lg:w-[95vw]'>
        <article className='lg:grid lg:grid-cols-2'>
          <h3 className='text-primary-100 mb-8 text-2xl lg:text-4xl leading-none capitalize tracking-tighter'>
            custom furniture <br />
            built only for you
          </h3>
          <p className='mb-0 leading-relaxed text-primary-300'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas modi
            magnam vitae amet! Aspernatur odio vel cum iure officia! Commodi!
          </p>
        </article>
        <div className='mt-16 grid gap-10 sg:grid-cols-[repeat(auto-fit,minmax(360px,1fr))]'>
          {services.map((service) => {
            const { id, text, icon, title } = service;
            return (
              <article
                key={id}
                className='bg-primary-700 text-center py-10 px-8 rounded'
              >
                <span className='w-16 h-16 grid my-0 mx-auto place-items-center mb-4 rounded bg-primary-1000 text-primary-100 text-3xl'>
                  {icon}
                </span>
                <h4 className='text-primary-100 mb-8 text-4xl lg:text-5xl leading-none capitalize tracking-tighter'>
                  {title}
                </h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
