import others from "../../assets/images/others.jpg";
import ram from "../../assets/images/ram.webp";
import monitor from "../../assets/images/DELL 19.webp";
import motherboard from "../../assets/images/motherboard.webp";
import powerSupply from "../../assets/images/power_supply.webp";
import storage from "../../assets/images/ssd.webp";
import cpu from "../../assets/images/processor.webp";

import Image from "next/image";
import Link from "next/link";

const FeaturedCategories = () => {
  return (
    <div className="w-11/12 mx-auto pb-10">
      <h1 className="text-5xl text-center my-14">Featured Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-8">
        <div className="w-11/12 md:w-[200px] h-52 flex items-center justify-center flex-col shadow-2xl rounded-lg py-0 px-0">
          <Link href="/ram">
            <Image
              className="w-full p-0"
              src={ram}
              alt="ram"
              width="100"
              height="50"
            />
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-center">
              Ram
            </h2>
          </Link>
        </div>
        <div className="w-11/12 md:w-[200px] h-52 flex items-center justify-center flex-col shadow-2xl rounded-lg py-0 px-0">
          <Link href="/monitor">
            <Image
              className="w-full p-0"
              src={monitor}
              alt="ram"
              width="100"
              height="50"
            />
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-center">
              Monitor
            </h2>
          </Link>
        </div>
        <div className="w-11/12 md:w-[200px] h-52 flex items-center justify-center flex-col shadow-2xl rounded-lg py-0 px-0">
          <Link href="/motherboard">
            <Image
              className="w-full p-0"
              src={motherboard}
              alt="ram"
              width="100"
              height="50"
            />
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-center">
              Motherboard
            </h2>
          </Link>
        </div>
        <div className="w-11/12 md:w-[200px] h-52 flex items-center justify-center flex-col shadow-2xl rounded-lg py-0 px-0">
          <Link href="/cpu-processor">
            <Image
              className="w-full p-0"
              src={cpu}
              alt="ram"
              width="100"
              height="50"
            />
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-center">
              CPU/processor
            </h2>
          </Link>
        </div>
        <div className="w-11/12 md:w-[200px] h-52 flex items-center justify-center flex-col shadow-2xl rounded-lg py-0 px-0">
          <Link href="/power-supply">
            <Image
              className="w-full p-0"
              src={powerSupply}
              alt="ram"
              width="100"
              height="50"
            />
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-center">
              Power Supply
            </h2>
          </Link>
        </div>
        <div className="w-11/12 md:w-[200px] h-52 flex items-center justify-center flex-col shadow-2xl rounded-lg py-0 px-0">
          <Link href="/storage">
            <Image
              className="w-full p-0"
              src={storage}
              alt="ram"
              width="100"
              height="50"
            />
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-center">
              Storage
            </h2>
          </Link>
        </div>
        <div className="w-11/12 md:w-[200px] h-52 flex items-center justify-center flex-col shadow-2xl rounded-lg py-0 px-0">
          <Link href="/others">
            <Image
              className="w-full p-0"
              src={others}
              alt="ram"
              width="100"
              height="50"
            />
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-center">
              Others
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
