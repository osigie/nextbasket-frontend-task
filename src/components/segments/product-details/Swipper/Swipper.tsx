import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

export const Swipper = ({ images }: { images?: string[] }) => {
  return (
    <Swiper
      className="mySwiper"
      modules={[Navigation, Pagination]}
      navigation={true}
      pagination={true}
    >
      {images?.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image}
            width={506}
            height={450}
            alt="Picture of product"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
