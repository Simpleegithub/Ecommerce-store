import BannerImg from "../../assets/women/women2.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { useEffect } from 'react';
import AOS from 'aos'

function Banner() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {/* image-section  */}

            <div data-aos="flip-right">
              <img
                src={BannerImg}
                alt=""
                className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
              />
            </div>

            {/* text-detail-section  */}

            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1
                data-aos="fade-left"
                className="text-3xl sm:text-4xl font-bold"
              >
                Winter Sale upto 50% Off
              </h1>
              <p
                data-aos="fade-left"
                className="text-sm text-gray-500 tracking-wide leading-5"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus laboriosam voluptate qui impedit illum dolor et
                repudiandae eos id repellendus.
              </p>
              <div className="flex flex-col gap-4">
                <div data-aos="fade-left" className="flex items-center gap-4">
                  <GrSecure className="text-4xl h-12 w-12 shadow-sm padding-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                  <p>Quality Products</p>
                </div>
                <div data-aos="fade-left" className="flex items-center gap-4">
                  <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100  dark:bg-orange-400  " />
                  <p>Fast Delivery</p>
                </div>
                <div data-aos="fade-left" className="flex items-center gap-4">
                  <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                  <p>Easy Payment method</p>
                </div>
                <div data-aos="fade-left" className="flex items-center gap-4">
                  <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                  <p>Get Offers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
