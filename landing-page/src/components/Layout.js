import Footer from "./footer";
import Header from "./header";
import Loader from "./loader";
import NavBar from "./navbar";



export default function Layout({ children }) {
  return (
    <>
      <Header />
      <NavBar />
      <Loader />
      <main>{children}</main>
      <Footer />
    </>
  );
}
