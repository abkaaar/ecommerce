import React from "react";
import Image from "next/image";
import Hero from "../Home/Hero";

const AboutPage = () => {
  return (
    <>
      <Hero backgroundImage="/images/about/gray-sofa.webp" height="h-200" />

  <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 lg:py-25 xl:py-30 bg-gray-50">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-7.5 xl:px-0">
          <div className="text-center">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-dark mb-6">
              Welcome to Bentro
            </h1>
            <p className="font-light text-xl md:text-2xl text-dark max-w-4xl mx-auto leading-relaxed">
              At Bentro, we believe that a sofa is the heart of every home.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-25">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-7.5 xl:px-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-bold text-3xl md:text-4xl text-dark mb-6">
                Our Mission
              </h2>
              <p className="font-light text-lg md:text-xl text-dark leading-relaxed mb-6">
                Welcome to Bentro, where we believe that comfort and style should be effortlessly intertwined. Our mission is to help you create beautiful, functional spaces that bring warmth and relaxation into your home.
              </p>
              <p className="font-light text-lg md:text-xl text-dark leading-relaxed">
                Every piece in our collection is designed with care, blending timeless craftsmanship with modern aesthetics to offer you the perfect balance between form and function.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/about/gray-sofa.webp"
                alt="Living room with elegant sofa"
                width={600}
                height={400}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 lg:py-20 bg-dark text-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-7.5 xl:px-0 text-center">
          <blockquote className="font-light text-2xl md:text-3xl leading-relaxed italic">
            &ldquo;We are here to make your living space a true reflection of your personal style.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-20 lg:py-25">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-7.5 xl:px-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/images/categories/sofas.webp"
                alt="Gray one-seater sofa and wooden coffee table"
                width={600}
                height={400}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-bold text-3xl md:text-4xl text-dark mb-6">
                Commitment to Quality
              </h2>
              <p className="font-light text-lg md:text-xl text-dark leading-relaxed mb-6">
                At the heart of our brand is a deep commitment to quality. We understand that a sofa isn&apos;t just another piece of furniture; it&apos;s where you unwind, gather with loved ones, and make memories. That&apos;s why we source only the finest materials and fabrics, ensuring that every sofa we offer is built to last.
              </p>
              <p className="font-light text-lg md:text-xl text-dark leading-relaxed">
                From luxurious leathers and soft linens to high-performance textiles, each fabric is carefully selected for its durability and beauty. Our attention to detail extends to every stitch and seam, guaranteeing that your sofa will not only look stunning but will also withstand the test of time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy Section */}
      <section className="py-20 lg:py-25 bg-gray-50">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-7.5 xl:px-0">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl md:text-4xl text-dark mb-6">
              Our Design Philosophy
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="font-light text-lg md:text-xl text-dark leading-relaxed mb-6">
                Our design philosophy revolves around creating pieces that are both beautiful and practical. Inspired by Scandinavian simplicity, modern luxury, and timeless classics, our collections are curated to suit a wide variety of tastes and lifestyles.
              </p>
              <p className="font-light text-lg md:text-xl text-dark leading-relaxed mb-6">
                We understand that every home is different, so we offer a diverse range of styles, colors, and textures to help you find the perfect fit. Whether you prefer sleek modern lines or soft, inviting silhouettes, we have something to suit every space and personality.
              </p>
              <p className="font-light text-lg md:text-xl text-dark leading-relaxed">
                We believe that great design should be environmentally conscious, which is why we strive to minimise our environmental footprint through responsible sourcing and production practices. Our commitment to sustainability ensures that our products are not only beautiful but also kind to the planet.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/categories/arm-chairs.webp"
                alt="Living room with gray three-seater puffy sofa"
                width={600}
                height={400}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Focus Section */}
      <section className="py-20 lg:py-25">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-7.5 xl:px-0">
          <div className="text-center">
            <h2 className="font-bold text-3xl md:text-4xl text-dark mb-8">
              Our Customers Are at the Center of Everything We Do!
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="font-light text-lg md:text-xl text-dark leading-relaxed mb-6">
                Our team is here to help guide you through the process, offering personalised support to ensure that you find exactly what you&apos;re looking for.
              </p>
              <p className="font-light text-lg md:text-xl text-dark leading-relaxed mb-8">
                We&apos;re not just selling sofas - we&apos;re helping you create spaces where you can relax, recharge, and make lasting memories.
              </p>
              <p className="font-semibold text-xl md:text-2xl text-dark">
                Thank you for choosing Bentro to be a part of your home!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-25 bg-gray-50">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-7.5 xl:px-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Quality Feature */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-dark mb-4">Premium Quality</h3>
              <p className="font-light text-base text-dark leading-relaxed">
                Only the finest materials and fabrics, carefully selected for durability and beauty.
              </p>
            </div>

            {/* Design Feature */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-dark mb-4">Timeless Design</h3>
              <p className="font-light text-base text-dark leading-relaxed">
                Blending modern aesthetics with timeless craftsmanship for lasting appeal.
              </p>
            </div>

            {/* Sustainability Feature */}
            <div className="text-center md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.5 9 6.5C4 7.5 2 11.5 2 13.5C2 15.5 3.5 17 5.5 17C7.5 17 8.5 15 8.5 15S13 15.5 17 8Z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-dark mb-4">Sustainable Practices</h3>
              <p className="font-light text-base text-dark leading-relaxed">
                Environmentally conscious design with responsible sourcing and production.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div> 
     </>
    
  );
};

export default AboutPage;
