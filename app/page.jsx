import About from "./components/About";
import Categories from "./components/Categories";
import Coment from "./components/Coment";
import Featured_Products from "./components/Featured-Products";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Our_Products from "./components/Our Products";
import Slaider from "./components/Slaider";

export default function Home() {
  return (
    <>
      <Header />
      <Slaider />
      <About />
      <Featured_Products />
      <Categories></Categories>
      <Our_Products></Our_Products>
      <Coment></Coment> <Featured_Products />
      <Footer></Footer>
    </>
  );
}
