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
import Hamburger from "./templates/organisms/Hamburger";
import CatchCopy from "./templates/CatchCopy";

const Home = () => {
  return (
    <section>
      <div className="go-to-top">
        <GoToTOP />
      </div>
      <div className="fix-menu">
        <Header />
      </div>
      <div className="mt-20">
      <Carousel images={ImageData.images} interval={2400} />
      <CatchCopy />
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
