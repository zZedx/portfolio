import React from "react";
import { BsArrowRight } from "react-icons/bs";

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <div className="h-full w-full pb-28 pt-36 px-32 xl:px-48 flex flex-col lg:flex-row items-center justify-center gap-12">
      <div className="flex-1 h-full py-12 px-8 xl:px-16 flex flex-col items-center">
        <h1 className="tracking-widest uppercase text-6xl font-bold text-center">Get in touch</h1>
        <p className="text-accent text-center mt-12">
          Thank you for visiting my portfolio! If you have any questions, project ideas, or just
          want to say hello, feel free to reach out. I am always open to discussing new projects,
          creative ideas, or opportunities to be part of your visions.
          <br />
          <br />
          You can contact me via the form or through the provided contact details. I look forward to
          connecting with you!
        </p>
        <div className="mt-auto flex flex-col gap-8">
          <div className="flex flex-col items-center">
            <span className="font-semibold text-xl tracking-wide">Phone</span>
            <p className="text-accent">+91 9799712300</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold text-xl tracking-wide">E-mail</span>
            <p className="text-accent">Kartikajmera890@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex flex-1 shadow-[rgba(0,0,0,1)_-7px_7px_28px_0px] h-full py-12 px-8 xl:px-16 flex-col items-center">
        <h1 className="tracking-widest uppercase text-6xl font-bold">Contact</h1>
        <form className="flex flex-col gap-8 mt-12 w-full h-full">
          <input
            type="text"
            placeholder="Name"
            className="w-full py-3 outline-none border-b border-b-accent focus:border-b-primary text-primary bg-transparent placeholder:text-accent font-semibold text-lg"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full py-3 outline-none border-b border-b-accent focus:border-b-primary text-primary bg-transparent placeholder:text-accent font-semibold text-lg"
          />
          <textarea
            placeholder="Message"
            className="w-full py-3 outline-none border-b border-b-accent focus:border-b-primary text-primary bg-transparent placeholder:text-accent font-semibold text-lg"
            rows={4}
          ></textarea>

          <button
            className="text-accent uppercase tracking-widest text-base md:text-xl font-semibold px-4 md:px-8 py-2 md:py-5 mt-auto hover:text-primary transition-all bg-secondary shadow-[rgba(0,0,0,1)_7px_7px_14px_0px] hover:shadow-[rgba(0,0,0,1)_0px_5px_14px_0px] flex gap-4 items-center justify-center
          "
            // style={{
            //   boxShadow: "rgba(0, 0, 0, 1) 0px 7px 29px 0px",
            // }}
          >
            <span>Send messagge</span>
            <BsArrowRight />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
