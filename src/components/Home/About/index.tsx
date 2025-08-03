import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="overflow-hidden py-20 mx-auto px-4 sm:px-8 xl:px-20">
      <div className="flex flex-col gap-18">
        <h1 className="font-medium text-3xl md:text-5xl text-dark">
          About Bentro
        </h1>
        <Image
          src="/images/about/gray-sofa.webp"
          alt="icon"
          width={1000}
          height={500}
          className="w-full"
        />
        <article className="md:flex md:gap-6 ">
          <h1 className="font-medium text-3xl md:text-5xl text-dark mb-8">
            At Bentro, we believe that a bentro is the heart of every home.
          </h1>
          <p className="font-light text-xl md:text-2xl text-dark">
            We are dedicated to delivering high-quality, thoughtfully designed
            sofas that merge comfort and style effortlessly. <br /> <br />
            Our mission is to transform your living space into a sanctuary of
            relaxation and beauty, with products built to last.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
