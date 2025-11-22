import Layout from "../../components/Layouts/Layout";
import "../../Styles/HomeStyles.css";
import Section1 from "./Section1";
import { Section2 } from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
    
function Home(){
    return(
        <>
            <Layout>
                {/* Home Section Hero Banner */}
                <Section1/>

                {/* Home Section about*/}
                <Section2/>

                {/* Home Section Menu*/}
                <Section3 />

                {/* Home Section Promotion*/}
                <Section4 />
                
                {/* Home Section App Dowload*/}
                <Section5 />
            </Layout>
        </>

    )
}
export default Home;