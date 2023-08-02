import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LinkBtn from "../components/LinkBtn";
const ErrorPage = () => {
  return (
    <main className='min-h-[calc(100vh-10rem)] py-20 bg-primary-1000 flex justify-center items-center'>
      <section>
        <h1 className='text-[10rem] '>404</h1>
        <h3 className='normal-case mb-8'>
          sorry the page you tried cannot be found
        </h3>
        <LinkBtn text='back to home' url='/'></LinkBtn>
      </section>
    </main>
  );
};

export default ErrorPage;
