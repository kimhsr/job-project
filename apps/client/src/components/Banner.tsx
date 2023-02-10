import React, { useRef } from 'react';
import styled from 'styled-components';
import './Banner.css';

import { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const BannerContainer = styled.div`
  width: 100%;
  max-width: 71.25rem;
  margin: 0 auto;
`;

const BannerImg = styled.div<{ bg: string }>`
  position: relative;
  top: 25px;
  background-color: ${(props) => props.bg};
  height: 370px;
`;

function Banner() {
  return (
    <div>
      <BannerContainer>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}>
          <SwiperSlide>
            <BannerImg bg='gray'>배너이미지1</BannerImg>
          </SwiperSlide>
          <SwiperSlide>
            <BannerImg bg='#9A5123'>배너이미지2</BannerImg>
          </SwiperSlide>
          <SwiperSlide>
            <BannerImg bg='skyblue'>배너이미지3</BannerImg>
          </SwiperSlide>
        </Swiper>
      </BannerContainer>
    </div>
  );
}

export default Banner;
