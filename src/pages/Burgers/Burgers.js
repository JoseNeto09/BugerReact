import Layout from "../../components/Layouts/Layout";
import "../../Styles/BurgersStyles.css";
import Section3 from "./Section3";
import Section5 from "./Section5";
    
function Burgers(){
    return(
        <>
            <Layout>
                <Section3 />
                <Section5 />
            </Layout>
        </>
    )
}
export default Burgers;