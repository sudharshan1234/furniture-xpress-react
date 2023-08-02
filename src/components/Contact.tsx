import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <section className='py-20 px-0 xg:py-60'>
      <div className='w-[90vw] my-0 mx-auto max-w-[1170px] lg:w-[95vw]'>
        <h3 className='text-primary-100 mb-8 text-2xl lg:text-4xl leading-none capitalize tracking-tighter'>
          join our newsletter and get 20% off
        </h3>
        <div className='lg:grid lg:grid-cols-2 lg:items-center lg:gap-32 mt-8'>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
            eveniet commodi laudantium. Nobis officia, dolorem veniam unde
            asperiores ratione possimus.
          </p>
          <form>
            <input
              type='email'
              className='text-xl py-2 px-4 border-solid border-2 border-black border-r-0 text-grey-300 rounded-l-md placeholder:text-black placeholder:capitalize'
              placeholder='enter email'
            />
            <button
              type='submit'
              className='text-xl py-2 px-4 rounded-r-md bg-primary-500 capitalize tracking-widest cursor-pointer transition-all text-black hover:text-white'
            >
              subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`;

export default Contact;
