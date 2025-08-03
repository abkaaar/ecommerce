import React from "react";
import Image from "next/image";
import Link from "next/link";

const PromoBanner = () => {
  return (
    <section className="overflow-hidden py-20 mx-auto px-4 sm:px-8 xl:px-20">
      <div className="md:flex md:justify-between py-16">
        <div className="max-w-xl">
          <h1 className="font-medium text-3xl md:text-5xl text-dark mb-4">Elevate Your Living Space with Unmatched Comfort & Style</h1>
        </div>
        <div>
         <p className="font-medium text-2xl text-dark mb-2">Discover Your Perfect Sofa Today</p>  
         <Link href="/shop" className="border-b-2">Explore Now</Link>
        </div>
       
      </div>

      <div className=" w-full ">
        <h1 className="font-medium text-3xl md:text-5xl  text-dark mb-12">
          Our Products
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
         <div>
           <Image
            src="/images/ourproducts/sofas.webp"
            alt="sofa"
            className=""
            width={500}
            height={400}
          />
         </div>

         <div>
           <Image
            src="/images/ourproducts/arm-chairs.webp"
            alt="arm chair"
            className=""
            width={500}
            height={400}
          />
         </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
