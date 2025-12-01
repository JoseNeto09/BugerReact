import Layout from "../../components/Layouts/Layout";
import "../../Styles/HomeStyles.css";
import Section1 from "./Section1";
import { Section2 } from "./Section2";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";

function Home() {
  return (
    <>
      <Layout>
        <Section1 />
        <Section2 />
        <Section4 />
        <Section5 />
        <Section6 />
      </Layout>
    </>
  );
}
export default Home;
