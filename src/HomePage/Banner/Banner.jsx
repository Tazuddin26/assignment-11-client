import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Carousel from "./Carousel";
const img1 = "https://i.ibb.co.com/hCmBL1Q/volunteer4.jpg";
const img2 = "https://i.ibb.co.com/L0879xP/volunteer2.webp";
const img3 = "https://i.ibb.co.com/vzJ6N0N/volunteer3.webp";
const img4 = "https://i.ibb.co.com/3WhZnYq/volunteer1.jpg";
const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Carousel
            image={img1}
            article="Definition & Principles of Volunteering"
            text="Definition Volunteering is the commitment of time and energy 
            for the benefit of society and the community,the environment or individuals outside one's immediate family. 
It is undertaken freely and by choice, without concern for financial gain."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Carousel
            image={img2}
            article="Inspiring Community Engagement"
            text="Volunteers serve as catalysts for community engagement. When people witness the impact of volunteering, they are inspired to get involved themselves. "
          />
        </SwiperSlide>
        <SwiperSlide>
          <Carousel
            image={img3}
            article="Enhancing Community Health and Well-being"
            text="Volunteering has a direct impact on community health and well-being. Through healthcare initiatives, 
          volunteers provide medical support, health education, and resources to underserved populations. "
          />
        </SwiperSlide>
        <SwiperSlide>
          <Carousel
            image={img4}
            article="Volunteering: Stories of hope and experiences in cultivating good"
            text="Volunteering makes me feel good, and it also gives young people the space to do good for the vulnerable, for free."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
