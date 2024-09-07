import ExploreHerbs from "../HomeSection/ExploreHerbs";
import HerbalEducation from "../HomeSection/HerbalEducation";
import Navbar from "../Navbar/Navbar";
import UsersEntry from "../StaticData/UsersEntry";
import Footer from "../footer/Footer";

function Home(){
    console.log("im in home");
    return(
        <>  
            <div className="flex flex-col items-center">
                <ExploreHerbs/>
                <HerbalEducation/>
                <UsersEntry/>
                <Footer/>
            </div>
        </>
    );
}

export default Home;