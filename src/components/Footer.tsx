const Footer = () => {
  return (
    <footer className='h-20 flex flex-col items-center justify-center bg-black text-center lg:flex-row'>
      <h5 className='text-white m-0.5 font-normal normal-case text-sm'>
        &copy; {new Date().getFullYear()}
      </h5>
      <span className='text-primary-500'> Comfy Sloth</span>
      <h5 className='text-white m-0.5 font-normal normal-case text-sm'>
        All Rights Reserved
      </h5>
    </footer>
  );
};

export default Footer;
