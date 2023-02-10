import React, { useRef } from 'react';
import styled from 'styled-components';
import './Banner.css';

import { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const BaContainer = styled.div`
  max-width: 71.25rem;
  margin: 0 auto;
  width: 100%;
  position: relative;
  top: 25px;
`;

const BaImg = styled.div<{ bg: string }>`
  background-color: ${(props) => props.bg};
  height: 370px;
`;

function Banner() {
  return (
    <div>
      <BaContainer>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}>
          <SwiperSlide>
            <BaImg bg='gray'>배너이미지1</BaImg>
          </SwiperSlide>
          <SwiperSlide>
            <BaImg bg='#9A5123'>배너이미지2</BaImg>
          </SwiperSlide>
          <SwiperSlide>
            <BaImg bg='skyblue'>배너이미지3</BaImg>
          </SwiperSlide>
        </Swiper>
      </BaContainer>
    </div>
  );
}

export default Banner;
