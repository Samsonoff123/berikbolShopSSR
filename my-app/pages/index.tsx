import Container from "../components/Container/index";
import Header from "../components/Header/index";
import Slider from '../components/MainPageComponents/Slider'
import ContactForm from '../components/MainPageComponents/ContacsUs'
import OurProducts from '../components/MainPageComponents/OurProducts'
import Footer from '../components/MainPageComponents/Footer'


const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Home = ({products}:any) => {
  
  return (
    <>
      <Header>
          <></>
      </Header>
      <Slider />
      <Container>
        <>
        <OurProducts products={products} />
        <ContactForm />
        </>
      </Container>
      <Footer />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return {
    props: { products },
  };

};
