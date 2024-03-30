import Access from "./templates/Access";
import Concept from "./templates/Concept";
import Facility from "./templates/Facility";
import Faq from "./templates/Faq";
import NewsTopic from "./templates/NewsTopic";
import SpaceType from "./templates/SpaceType";
import Carousel from "./templates/organisms/Carousel";
import ImageData from "./json/image.json";
import { Footer } from "./templates/organisms/Footer";
import { Header } from "./templates/organisms/Header";
import { GoToTOP } from "./templates/organisms/GoToTop";

const Home = () => {
  return (
    <section>
      <div className="go-to-top">
        <GoToTOP />
      </div>
      <div>
        <Header />
        <Carousel images={ImageData.images} interval={2400} />
      </div>
      <NewsTopic />
      <br />
      <Concept />
      <br />
      <SpaceType />
      <br />
      <Facility />
      <br />
      <Access />
      <br />
      <Faq />
      <br />
      <Footer />
    </section>
  )
}

export default Home;
