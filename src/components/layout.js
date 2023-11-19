import Footer from "./Footer";

export default function Layout({ children, post, landingPage, title, announcementData }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

