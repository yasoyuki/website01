import Access from "../templates/Access";
import Concept from "../templates/Concept";
import Facility from "../templates/Facility";
import Faq from "../templates/Faq";
import Menu from "../templates/Menu";
import NewsTopic from "../templates/NewsTopic";
import SpaceType from "../templates/SpaceType";
import { Footer_1 } from "../templates/organisms/Footer_1";
import { Header_1 } from "../templates/organisms/Header_1";


export default function Portfolio1() {
    return (
        <section>
            <div>
                <Header_1 />
                <img src="../001.jpg" alt="FV" className="w-screen object-cover lg:h-96" />
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
            <Footer_1 />
            <div className="fixed inset-x-0 bottom-0">
            <Menu/>
            </div>
        </section>

    );
}

