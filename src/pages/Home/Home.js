import Layout from '../../Component/Layouts/Layout'
import Section1 from './Section1'
import Section2 from './Section2'
import "../../styles/HomeStyles.css";
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';

function Home() {
  return (
    <>
        <Layout>
          {/* {Hero Section} */}
        <Section1/> 
        {/* {About Section} */}
        <Section2/>
        {/* {Menu Sections} */}
        <Section3/>
        {/* {Promotion Sections} */}
        <Section4/>
         {/* Home Section Shop */}
         <Section5/>
         {/* {Home Section Blog} */}
         <Section6/>
         {/* {Home Section Contact} */}
         <Section7/>
         </Layout>
    </>

  )
}

export default Home