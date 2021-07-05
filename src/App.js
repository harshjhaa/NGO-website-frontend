import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavbarTop from "./components/navbar/NavbarTop";
import NavbarBottom from "./components/navbar/NavbarBottom";
import Home from "./components/home/Home";
import AboutUs from "./components/about_us/AboutUs";
import ActiveCases from "./components/active_cases/ActiveCases";
import Donate from "./components/donate/Donate";
import OurWork from "./components/our_work/OurWork";
import ContactUs from "./components/contact_us/ContactUs";
import TheFellowship from "./components/the_fellowship/TheFellowship";
import GetInvolved from "./components/get_involved/GetInvolved";
import Blog from "./components/blog/Blog";
import ProtectionPolicy from "./components/protection_policy/ProtectionPolicy";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <Router>
      <div className="app">
        {/* <Route render={props => <Navbar {...props} />} /> */}
        {/* <Route component={NavbarTop} /> */}
        <Route component={NavbarBottom} />
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/" component={OurWork} />
        <Switch>
          {/* header-links */}
          <Route path="/about-us" component={AboutUs} />
          <Route path="/the-fellowship" component={TheFellowship} />
          <Route path="/active-cases" component={ActiveCases} />
          <Route path="/get-involved" component={GetInvolved} />
          <Route path="/donate" component={Donate} />
          {/* footer-links */}
          <Route path="/blog" component={Blog} />
          <Route path="/protection-policy" component={ProtectionPolicy} />
          <Route path="/contact-us" component={ContactUs} />
        </Switch>
        <a className="whatsapp-logo" href="https://api.whatsapp.com/send?phone=+919315653969&text=Hi, I need some information!." target='_blank'></a>
        <Route component={Footer} />
      </div>
    </Router>
  );
}

export default App;
