// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CustomItems from './CustomItems.jsx';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Container } from 'react-bootstrap';

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <div className="bigsection">
        <Container>
        <h2 className='text-best'>추천상품</h2>
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
          
                <SwiperSlide className="mySwiper d-flex">
                  <CustomItems />
                </SwiperSlide>
                <SwiperSlide className="mySwiper d-flex">
                  <CustomItems />
                </SwiperSlide>
                <SwiperSlide className="mySwiper d-flex">
                  <CustomItems />
                </SwiperSlide>
                <SwiperSlide className="mySwiper d-flex">
                  <CustomItems />
                </SwiperSlide>
                <SwiperSlide className="mySwiper d-flex">
                  <CustomItems />
                </SwiperSlide>
                <SwiperSlide className="mySwiper d-flex">
                  <CustomItems />
                </SwiperSlide>
                <SwiperSlide className="mySwiper d-flex">
                  <CustomItems />
                </SwiperSlide>
                <SwiperSlide className="mySwiper d-flex">
                  <CustomItems />
                </SwiperSlide>


          </Swiper>
        
        </div>
        </Container>
    </div>
  );
}