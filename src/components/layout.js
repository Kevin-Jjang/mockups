import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, post, landingPage, title, announcementData }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

