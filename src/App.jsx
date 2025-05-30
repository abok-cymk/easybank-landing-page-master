import { memo } from "react";
import Footer from "./Footer";
import Header from "./Header";
import LatestArticles from "./LatestArticles";
import Services from "./Services";

function App() {
  return (
    <>
      <Header />
      <main>
        <Services />
        <LatestArticles />
      </main>
      <Footer />
    </>
  );
}

export default memo(App);
