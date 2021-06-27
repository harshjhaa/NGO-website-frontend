import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavbarTop from "./components/navbar/NavbarTop";
import NavbarBottom from "./components/navbar/NavbarBottom";
import Home from "./components/home/Home";
import AboutUs from "./components/about_us/AboutUs";
import ActiveCases from "./components/active_cases_emergency/ActiveCases";
import Donate from "./components/donate/Donate";
import Partners from "./components/our_partners/Partners";
import ContactUs from "./components/contact_us/ContactUs";
import Volunteer from "./components/volunteer/Volunteer";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <div className="app">
        {/* <Route render={props => <Navbar {...props} />} /> */}
        <Route component={NavbarTop} />
        <Route component={NavbarBottom} />
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/about-us" component={AboutUs} />
          <Route path="/active-cases-emergency" component={ActiveCases} />
          <Route path="/donate" component={Donate} />
          <Route path="/our-partners" component={Partners} />
          <Route path="/volunteer" component={Volunteer} />
          <Route path="/contact-us" component={ContactUs} />
        </Switch>
        <Route component={Footer} />
      </div>
    </Router>
  );
}

export default App;
