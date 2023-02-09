import React, { useRef } from 'react';
import styled from 'styled-components';

import { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const BaContainer = styled.div<{ bg: string }>`
  position: relative;
  top: 25px;
  background-color: ${(props) => props.bg};
  width: 100%;
  max-width: 71.25rem;
  margin: 0 auto;
  height: 370px;
`;

function Banner() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}>
        <SwiperSlide>
          <BaContainer bg='gray'>배너이미지1</BaContainer>
        </SwiperSlide>
        <SwiperSlide>
          <BaContainer bg='#9A5123'>배너이미지2</BaContainer>
        </SwiperSlide>
        <SwiperSlide>
          <BaContainer bg='skyblue'>배너이미지3</BaContainer>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
