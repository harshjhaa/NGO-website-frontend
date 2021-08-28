import React, { useEffect } from "react";
import "../FooterTabsCommonCSS.scss";
import "./PrivacyPolicy.scss";

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    document.getElementById("top-marquee").style.visibility = "hidden";
    return () => {
      document.getElementById("top-marquee").style.visibility = "visible";
    };
  }, []);

  return (
    <div className="privacy-policy-tab">
      <div className="contents">
        <div className="head-title">PRIVACY POLICY</div>
        <div className="text-content">
          <p>
            Truly Help Foundation takes your privacy seriously and treats all
            financial information about any transaction you have with the
            Foundation as highly confidential. In addition, THF does not share
            e-mail addresses or phone numbers of any of our donors or partners.
          </p>
          <ul>
            <li>
              <p>Information Gathering and Use</p>
              <div>
                <p>
                  We collect information from you in a number of ways, for
                  example when you:
                </p>
                <ul className="sub-list">
                  <li>Make a donation.</li>
                  <li>Sign up to our campaign.</li>
                  <li>Sign up to newsletters.</li>
                  <li>
                    We won’t collect or record your personal information unless
                    you choose to give it us.
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <p>Use of Personal Information</p>
              <div>
                <p>We use the information you give us in the following ways:</p>
                <ul className="sub-list">
                  <li>
                    {" "}
                    To make sure we have an accurate record of all the donations
                    we receive.
                  </li>
                  <li>
                    To email you with latest news and updates about Truly Help
                    Foundation and our campaigns, but only if you have agreed to
                    this.
                  </li>
                  <li>
                    To make sure you are receiving the most appropriate and
                    relevant information for you.
                  </li>
                  <li>
                    To find out more about you and the people who are visiting
                    our website, donating or joining our campaign. Privacy of
                    our email lists.
                  </li>
                  <li>
                    Individuals who join our mailing lists via our website or
                    through our campaigning engagements are added to our email
                    database. We do not sell, rent, loan, trade, or lease the
                    addresses on our lists to anyone.
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <p>Cookie Policy</p>
              <div>
                <ul className="sub-list">
                  <li>
                    Cookies are small amount of electronic information which
                    will be sent by TRULY HELP Foundation when you use our web
                    site. These will be placed in your computer’s hard disk and
                    enable us to recognize you as a user when you next visit.
                  </li>
                  <li>
                    You can configure your browser so that it responds to
                    cookies the way you deem fit. For example, you make want to
                    accept all cookies, reject them all or get notified when a
                    cookie is sent. Please check your browser’s settings to
                    modify cookie behavior as per your individual behavior.
                  </li>
                  <li>
                    Please note that if you disable the use of cookies on your
                    web browser or remove or reject specific cookies from our
                    website or linked sites then you may not be able to use the
                    website as it is intended.
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <p>Security</p>
              <div>
                <ul className="sub-list">
                  <li>
                    We are committed to protecting donor personal information
                    from unauthorized access, alteration, disclosure, or
                    destruction. Among other things, we undertake a range of
                    security practices, including measures to help secure web
                    access to sensitive data and undertake efforts to address
                    security vulnerabilities for various tools and databases.
                  </li>
                  <li>
                    We use well-recognized and proven technology for payments.
                    Payment information is transferred by the use of an SSL
                    connection which offers the highest degree of security that
                    your browser is able to support.
                  </li>
                  <li>
                    Several layers of built-in security, including an advanced
                    firewall system, encryption of credit card numbers, and use
                    of passwords, protect the collected information.
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <p>External Web Services</p>
              <div>
                <ul className="sub-list">
                  <li>
                    We use a number of external web services on our site to
                    display content within our web pages. For example, to
                    display video we use YouTube. As with the social buttons, we
                    cannot prevent these sites, or external domains, from
                    collecting information on your use of the content we embed
                    on our site.
                  </li>
                  <li>
                    The Site contains links to other websites for the benefit of
                    it’s visitors. This Privacy Policy does not apply to such
                    other websites. Truly Help Foundation is not expressly or
                    impliedly responsible for, or liable to any loss or damage
                    caused to you by the collection, use and retention of
                    Personal Information by such website in any manner
                    whatsoever. It is important that you review the privacy
                    policies of all websites you visit before you disclose any
                    information to such websites.
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div>
            <p>Changes to Privacy Policy</p>
            We may change the Donor Privacy Policy from time to time. As and
            when the need arises, TRULY HELP FOUNDATION may alter its privacy
            policy in accordance with the latest technology and trends. We
            strive to provide you with timely notice of these changes. You may
            reach out to us if you have any queries about any changes made to
            our practices.
          </div>
          <br />
          <div>
            <p>Write us</p>
            If you have any questions at all about our privacy policy, reach us:{" "}
            <a
              style={{ color: "red" }}
              href="mailto:writeus@trulyhelpfoundation.org"
            >
              writeus@trulyhelpfoundation.org
            </a>
            .
          </div>
        </div>
      </div>
      <div className="hr-line">
        <hr />
      </div>
    </div>
  );
}

export default PrivacyPolicy;
