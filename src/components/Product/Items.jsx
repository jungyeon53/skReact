import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Container } from 'react-bootstrap';

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  return (
    <div className="bigsection">
        <Container>
        <h2>추천상품</h2>
        <div className='back'>
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              type: 'fraction',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className='p-swiper'
          >
          
                <SwiperSlide className="mySwiper">
                    <p>500M 인터넷 <br />
                    + B tv all</p>
                    <img src="../img/products/ico_recom_prod_01.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="mySwiper">Slide 2</SwiperSlide>
                <SwiperSlide className="mySwiper">Slide 3</SwiperSlide>
                <SwiperSlide className="mySwiper">Slide 4</SwiperSlide>
          </Swiper>
        
        </div>
        </Container>
    </div>
  );
}