import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppHeader from "../src/assets/images/components/header"
import AppHero from "../src/assets/images/components/hero";
import AppAbout from "../src/assets/images/components/about";
import AppServices from "../src/assets/images/components/services";
import AppWork from "../src/assets/images/components/works";
import AppTeam from "../src/assets/images/components/teams";
import AppTestimonials from "../src/assets/images/components/testimonials";
import AppPricing from "../src/assets/images/components/pricing";
import AppBlog from "../src/assets/images/components/blog";
import AppContact from "../src/assets/images/components/contact";
import AppFooter from "../src/assets/images/components/footer";
function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader />
      </header>
      <main>
        <AppHero />
        <AppAbout />
        <AppServices />
        <AppWork />
        <AppTeam />
        <AppTestimonials />
        <AppPricing />
        <AppBlog />
        <AppContact />
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  );
}

export default App;
