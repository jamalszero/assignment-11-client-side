import Footer from "../../../sharedComponents/Footer/Footer";
import NavBar from "../../../sharedComponents/NavBar/NavBar";
import Banner from "../Banner/Banner";
import Faqs from "../Faqs/Faqs";
import Features from "../Features/Features";

const Home = () => {
    return (
        <div className="container mx-auto">
            <header>
                <NavBar></NavBar>
                <Banner></Banner>
            </header>
            <main>
                <Features></Features>
                <Faqs></Faqs>
            </main>
            <div>
                <Footer></Footer>
                
            </div>
        </div>
    );
};

export default Home;