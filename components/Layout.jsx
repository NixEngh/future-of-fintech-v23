import NavBar from "./NavBar";
import Footer from "./Footer";


const Layout = ({ children }) => {
  return (
    <>
      <head>
        <title>Stracc strømkalkulator</title>
      </head>
      <main>
        <NavBar />
        {children}
      </main>
    </>
  );
};

export default Layout;
