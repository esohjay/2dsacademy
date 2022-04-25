import Meta from "./Meta";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="bg-bodyBg min-h-screen font-bigTexts overflow-hidden">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
