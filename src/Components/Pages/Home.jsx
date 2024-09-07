import HerbsTemplate from "../HerbsTemplate/HerbsTemplate";
import ExploreHerbs from "../HomeSection/ExploreHerbs";
import FirstSection from "../HomeSection/FirstSection";
import HerbalEducation from "../HomeSection/HerbalEducation";
import ImageCarousel from "../ImageCaraousel/ImageCaraousel";
import Navbar from "../Navbar/Navbar";
import UsersEntry from "../StaticData/UsersEntry";
import Footer from "../footer/Footer";

function Home(){
    console.log("im in home");
    return(
        <>  
            <div className="flex flex-col items-center">
                <ImageCarousel/>
                <FirstSection/>
                <ExploreHerbs/>
                <HerbalEducation/>
                <UsersEntry/>
                <Footer/>
            </div>
        </>
    );
}

export default Home;