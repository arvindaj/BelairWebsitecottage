

import "../assets/css/home.css";


import BelairCottages from "../components/home/belaircottages";
import RoomAmenities from "../components/home/roomamenities";
import AmenitiesSection from "../components/home/amenitiessection";
import BlogSection from "../components/home/blogsection";
import Resortinfo from "../components/home/resortinfo";
import Premiumfacilities from "../components/home/premiumfacilities";
import Datecheckin from "../components/home/datecheckin";
import Welcomesection from "../components/home/welcomesection";
import BelairSlider from "../components/home/belairslide";
import EliteRoomAmenities from "../components/about/facilitiessection";
import Testimonials from "../components/about/testimonialsection";


const Home = () => {


  return (


    <div>

      <Welcomesection />
      <Datecheckin />
      <Resortinfo />
      <Premiumfacilities />
      <BelairCottages />
      <BelairSlider/>
      <RoomAmenities />
      <AmenitiesSection />
      <EliteRoomAmenities/>
      <Testimonials/>
      <BlogSection/>

    </div>
  );
};

export default Home;
