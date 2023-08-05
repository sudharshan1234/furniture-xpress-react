const Contact = () => {
  return (
    <section className="py-20 px-0 xg:py-60">
      <div className="w-[90vw] my-0 mx-auto max-w-[1170px] lg:w-[95vw]">
        <h3 className="text-primary-100 mb-8 text-2xl lg:text-4xl leading-none capitalize tracking-tighter">
          join our newsletter and get 20% off
        </h3>
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-32 mt-8">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
            eveniet commodi laudantium. Nobis officia, dolorem veniam unde
            asperiores ratione possimus.
          </p>
          <form>
            <input
              type="email"
              className="text-xl py-2 px-4 border-solid border-2 border-black border-r-0 text-grey-300 rounded-l-md placeholder:text-black placeholder:capitalize"
              placeholder="enter email"
            />
            <button
              type="submit"
              className="text-xl py-2 px-4 rounded-r-md bg-primary-500 capitalize tracking-widest cursor-pointer transition-all text-black hover:text-white"
            >
              subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
