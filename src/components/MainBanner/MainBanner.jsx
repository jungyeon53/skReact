
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import '../style.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Banner() {

    return(
      
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        
      className='Banner'>

        <SwiperSlide> 
			<div className="bg">
          <img className='banner' src="../img/main/main_b_1.png" alt="" />
		  </div>
        </SwiperSlide>

        <SwiperSlide> 
			<div className="bg1">
          <img className='banner' src="../img/main/main_b_2.png" alt="" />
		  </div>
        </SwiperSlide>

        <SwiperSlide> 
			<div className="bg2">
          <img src="../img/main/main_b_3.png" alt="" />
		  </div>
        </SwiperSlide>

        <SwiperSlide> 
			<div className="bg3">
          <img src="../img/main/main_b_4.png" alt="" />
		  </div>
        </SwiperSlide>

        <SwiperSlide> 
			<div className="bg4">
          <img src="../img/main/main_b_5.png" alt="" />
		  </div>
        </SwiperSlide>

        <SwiperSlide> 
			<div className="bg5">
          <img src="../img/main/main_b_6.png" alt="" />
		  </div>
        </SwiperSlide>

      </Swiper>
      
      
    )
  }



  export default Banner;