import "./App.css";
import Router from "./Router/Router";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  window.addEventListener("mousewheel", function (e) {
    if (e.ctrlKey) {
      e.preventDefault();
      return false;
    }
  });

  return (
    <>
      <TopBar />
      <ScrollToTop />
      <Router />
      <Footer />
    </>
  );
}

export default App;