import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarTop from "./components/navbar/NavbarTop";
import NavbarBottom from "./components/navbar/NavbarBottom";

//redux
import store from "./redux-tools/store/store";
import { Provider } from "react-redux";

import Home from "./components/home/Home";

//OurWork Tabs
import OurWork from "./components/our_work/OurWork";
import Overview from "./components/our_work/overview/Overview";
import Education from "./components/our_work/education/Education";
import Healthcare from "./components/our_work/healthcare/Healthcare";
import Livelihoods from "./components/our_work/livelihoods/Livelihoods";
import Sports from "./components/our_work/sports/Sports";
import Humanitarian from "./components/our_work/humanitarian/Humanitarian";

//AboutUs Tabs
import AboutUs from "./components/about_us/AboutUs";
import Mission from "./components/about_us/mission_vision/Mission";
import OurApproach from "./components/about_us/our_approach/OurApproach";
import OurTeam from "./components/about_us/our_team/OurTeam";
import Financial from "./components/about_us/financial/Financial";
import Documents from "./components/about_us/documents/Documents";
import LatestNews from "./components/about_us/latest_news/LatestNews";
import StoriesOfChange from "./components/about_us/stories_of_change/StoriesOfChange";
import SuccessStory from "./components/about_us/success_story/SuccessStory";

//TheFellowship Tabs
import ThfFellowship from "./components/the_fellowship/ThfFellowship";

//Emergency Tabs
import EmergencyCase from "./components/emergency/emergency_case/EmergencyCase";
import Covid from "./components/emergency/covid_19/Covid";

//GetInvolved Tabs
import GetInvolved from "./components/get_involved/GetInvolved";
import Donate from "./components/get_involved/donate/Donate";
import OurDonor from "./components/get_involved/our_donor/OurDonor";
import Legacy from "./components/get_involved/legacy/Legacy";
import Partnerships from "./components/get_involved/partnerhips/Partnerships";
import OtherWays from "./components/get_involved/other_ways_to_help/OtherWays";
import OurProgrammes from "./components/get_involved/our_programmes/OurProgrammes";
import OurCampaigns from "./components/get_involved/our_campaigns/OurCampaigns";
import Events from "./components/get_involved/events/Events";
import Careers from "./components/get_involved/careers/Careers";
import ContactUs from "./components/get_involved/contact/ContactUs";
import SupportUs from "./components/get_involved/support_us/SupportUs";

//Footer Tabs
import Footer from "./components/footer/Footer";
import Blog from "./components/footer/blog/Blog";
import Resource from "./components/footer/resource/Resource";
import ChildProtectionPolicy from "./components/footer/child_protection_policy/ChildProtectionPolicy";
import Disclaimer from "./components/footer/disclaimer/Disclaimer";
import RefundPolicy from "./components/footer/refund-policy/RefundPolicy";
import PrivacyPolicy from "./components/footer/privacy-policy/PrivacyPolicy";
import TermsAndConditions from "./components/footer/terms_and_conditions/TermsAndConditions"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          {/* <Route render={props => <Navbar {...props} />} /> */}
          {/* <Route component={NavbarTop} /> */}
          <Route component={NavbarBottom} />
          <Route exact path="/" component={Home} />
          <Switch>
            {/* header-links */}
            {/* OurWork Tabs */}
            <Route exact path="/our-work" component={OurWork} />
            <Route path="/overview" component={Overview} />
            <Route path="/education" component={Education} />
            <Route path="/healthcare" component={Healthcare} />
            <Route path="/livelihoods" component={Livelihoods} />
            <Route path="/sports" component={Sports} />
            <Route path="/humanitarian" component={Humanitarian} />
            {/* AboutUs Tabs */}
            <Route path="/about-us" component={AboutUs} />
            <Route path="/mission-vision-values" component={Mission} />
            <Route path="/our-approach" component={OurApproach} />
            <Route path="/our-team" component={OurTeam} />
            <Route path="/financials" component={Financial} />
            <Route path="/documents" component={Documents} />
            <Route path="/latest-news" component={LatestNews} />
            <Route path="/stories-of-change" component={StoriesOfChange} />
            <Route path="/success-story" component={SuccessStory} />
            {/* TheFellowship Tabs */}
            <Route path="/thf-fellowship" component={ThfFellowship} />
            {/* Emergency Tabs */}
            <Route path="/emergency-case" component={EmergencyCase} />
            <Route path="/covid-19-relief" component={Covid} />
            {/* GetInvolved Tabs */}
            <Route path="/get-involved" component={GetInvolved} />
            <Route path="/donate" component={Donate} />
            <Route path="/our-donor" component={OurDonor} />
            <Route path="/legacy" component={Legacy} />
            <Route path="/partnerships" component={Partnerships} />
            <Route path="/other-ways-to-help" component={OtherWays} />
            <Route path="/our-programmes" component={OurProgrammes} />
            <Route path="/our-campaigns" component={OurCampaigns} />
            <Route path="/events" component={Events} />
            <Route path="/careers" component={Careers} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/support-us" component={SupportUs} />
            {/* footer-links */}
            <Route path="/blog" component={Blog} />
            <Route
              path="/child-protection-policy"
              component={ChildProtectionPolicy}
            />
            <Route path="/disclaimer" component={Disclaimer} />
            <Route path="/resource" component={Resource} />
            <Route path="/refund-policy" component={RefundPolicy} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route
              path="/terms-and-conditions"
              component={TermsAndConditions}
            />
          </Switch>
          <div className="whatsapp-logo-container">
            <a
              className="whatsapp-logo"
              href="https://api.whatsapp.com/send?phone=+918800202933&text=Hi, I need some information!."
              target="_blank"
            ></a>
          </div>
          <a
            onClick={() =>
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              })
            }
            className="scroll-up-icon"
            // className={`${window.scrollY<528? "display-none":"scroll-up-icon"}`}
          ></a>
          <Route component={Footer} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
