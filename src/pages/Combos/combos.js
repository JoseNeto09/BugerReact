import Layout from "../../components/Layouts/Layout";
import "../../Styles/ComboStyles.css";
import Section3 from "./Section3";
import Section5 from "./Section5";
    
function Combos(){
    return(
        <>
            <Layout>
                {/* Home Section Menu*/}
                <Section3 />
                
                {/* Home Section App Dowload*/}
                <Section5 />
            </Layout>
        </>

    )
}
export default Combos;