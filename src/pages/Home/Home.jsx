import React from "react";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";

import Attractions from "../../assets/Attractions.png";
import Hotels from "../../assets/Hotels.png";
import Restaurants from "../../assets/Restaurants.png";

import "./Home.css";

const Home = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerContent">
          <Link to="/" className="home__logo">
            Travel Companion
          </Link>

          <div className="home__links">
            <Link to="/explore" className="home__link">
              Explore
            </Link>
            <div className="home__link">Contact Us</div>
          </div>
        </div>
      </div>

      <div className="home__body">
        <div className="home__bodyLeft">
          <h1 className="home__heading">Its time to explore the world!</h1>

          <p className="home__para">
            You will be able to choose the best restaurants, Hotels and
            attractions according to your preferred location with the help of
            our travel advisory
          </p>
        </div>

        <div className="home__bodyRight">
          <div>
            <img src={Restaurants} alt="restaurants" />
          </div>

          <div>
            <img src={Hotels} alt="hotel" />
          </div>

          <div>
            <img src={Attractions} alt="attractions" />
          </div>
        </div>
      </div>

      <div className="home__footer">
        <div className="home__footerTop">
          <div>
            Want to recieve exclusive hotel offers? Subscribe to our newsletter!
          </div>

          <form
            className="home__footerTop-right"
            onSubmit={(e) => {
              e.preventDefault();
              setEmail("");
            }}
          >
            <input
              type="text"
              placeholder="Email address"
              className="home__emailInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="home__subscribe">
              Subscribe
            </button>
          </form>
        </div>

        <div className="home__footerBottom">
          <div className="home__footerBottom-top">
            <div className="home__footerBottom-topLeft">
              <div className="home__footerUpperText">
                <span>Travelling Companion.</span> 
              </div>

              <div className="home__footerLowerText">Germany</div>
            </div>

            <select id="country">
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Kosovo">Kosovo</option>
              <option value="Poland">Poland</option>
            </select>
          </div>

          <div className="home__footerBottom-center1">
            <a href="#" className="home__footerSocial">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>

            <a href="#" className="home__footerSocial">
              <FontAwesomeIcon icon={faTwitter} />
            </a>

            <a href="#" className="home__footerSocial">
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a href="#" className="home__footerSocial">
              <FontAwesomeIcon icon={faYoutube} />
            </a>

            <a href="#" className="home__footerSocial">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>

          <div className="home__footerBottom-center2">
            <ul className="home__footerList">
              <li className="home__footerListItem">
                <a href="#">Company</a>{" "}
              </li>
              <li className="home__footerListItem">
                <a href="#">Jobs</a>
              </li>
              <li className="home__footerListItem">
                <a href="#">Press</a>
              </li>
              <li className="home__footerListItem">
                <a href="#">Investor relations</a>
              </li>
            </ul>

            <ul className="home__footerList">
              <li className="home__footerListItem">
                <a href="#"> Mobile apps - searching on the go</a>
              </li>
              <li className="home__footerListItem">
                <a href="#">Travelling Companion Business Studio</a>
              </li>
            </ul>

            <ul className="home__footerList">
              <li className="home__footerListItem">
                <a href="#"> Help</a>
              </li>
              <li className="home__footerListItem">
                <a href="#"> Learn how travelling companion works</a>
              </li>
              <li className="home__footerListItem">
                <a href="#">Terms and conditions</a>
              </li>
              <li className="home__footerListItem">
                <a href="#">Legal information</a>
              </li>
              <li className="home__footerListItem">
                <a href="#">Privacy notice</a>
              </li>
              <li className="home__footerListItem">
                <a href="#">Cyber security</a>
              </li>
              <li className="home__footerListItem">
                <a href="#">Coronavirus (Covid-19) travel advice</a>
              </li>
            </ul>
          </div>

          <div className="home__footerBottom-bottom">
            <Link to={"/"} className="home__footerLogo">
              Travelling Companion
            </Link>

            <div className="home__footerCopyright">
              Copyright 2022 Travelling Companion | powered by GVSU
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
