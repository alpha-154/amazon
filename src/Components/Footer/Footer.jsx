import React from "react"
import "./Footer.css"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <button className="back-to-top" onClick={scrollToTop}>
          Back to top
        </button>
      </div>

      <div className="footer-bottom-layout-one">
        <div className="footer-links">
          <div className="footer-column">
            <h3>Get to Know Us</h3>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">About Amazon</a>
            <a href="#">Investor Relations</a>
            <a href="#">Amazon Devices</a>
            <a href="#">Amazon Science</a>
          </div>
          <div className="footer-column">
            <h3>Make Money with Us</h3>
            <a href="#">Sell products on Amazon</a>
            <a href="#">Sell on Amazon Business</a>
            <a href="#">Sell apps on Amazon</a>
            <a href="#">Become an Affiliate</a>
            <a href="#">Advertise Your Products</a>
            <a href="#">Self-Publish with Us</a>
            <a href="#">Host an Amazon Hub</a>
            <a href="#">› See More Make Money with Us</a>
          </div>
          <div className="footer-column">
            <h3>Amazon Payment Products</h3>
            <a href="#">Amazon Business Card</a>
            <a href="#">Shop with Points</a>
            <a href="#">Reload Your Balance</a>
            <a href="#">Amazon Currency Converter</a>
          </div>
          <div className="footer-column">
            <h3>Let Us Help You</h3>
            <a href="#">Amazon and COVID-19</a>
            <a href="#">Your Account</a>
            <a href="#">Your Orders</a>
            <a href="#">Shipping Rates & Policies</a>
            <a href="#">Returns & Replacements</a>
            <a href="#">Manage Your Content and Devices</a>
            <a href="#">Amazon Assistant</a>
            <a href="#">Help</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom-one">
        <div className="footer-logo">
          <a href="#">
            <img src={logo} alt="Amazon Logo" />
          </a>
        </div>
        <div className="footer-buttons">
          <select
            name="select"
            id="bottom-select"
            className="custom-select"
            defaultValue="English"
          >
            <option value="English">🇺🇸 English</option>
            <option value="Hindi">🇮🇳 Hindi</option>
            <option value="Bengali">🇧🇩 Bengali</option>
          </select>
          <button className="footer-button">$ USD - U.S Dollar</button>
          <button className="footer-button">🇺🇸 United States</button>
        </div>
      </div>

      <div className="footer-bottom-layout-two">
        <div className="footer-bottom-two">
          <div className="footer-section">
            <h2>Amazon Music</h2>
            <a href="#">Stream millions of songs</a>
          </div>
          <div className="footer-section">
            <h2>Amazon Ads</h2>
            <a href="#">Reach customers wherever they spend their time</a>
          </div>
          <div className="footer-section">
            <h2>6pm</h2>
            <a href="#">Score deals on fashion brands</a>
          </div>
          <div className="footer-section">
            <h2>AbeBooks</h2>
            <a href="#">Books, art & collectibles</a>
          </div>
          <div className="footer-section">
            <h2>ACX</h2>
            <a href="#">Audiobook Publishing Made Easy</a>
          </div>
          <div className="footer-section">
            <h2>Sell on Amazon</h2>
            <a href="#">Start a Selling Account</a>
          </div>
          <div className="footer-section">
            <h2>Amazon Business</h2>
            <a href="#">Everything For Your Business</a>
          </div>
          <div className="footer-section">
            <h2>AmazonGlobal</h2>
            <a href="#">Ship Orders Internationally</a>
          </div>
          <div className="footer-section">
            <h2>Home Services</h2>
            <a href="#">Experienced Pros Happiness Guarantee</a>
          </div>
          <div className="footer-section">
            <h2>Amazon Web Services</h2>
            <a href="#">Scalable Cloud Computing Services</a>
          </div>
          <div className="footer-section">
            <h2>Audible</h2>
            <a href="#">Listen to Books & Original Audio Performances</a>
          </div>
          <div className="footer-section">
            <h2>Box Office Mojo</h2>
            <a href="#">Find Movie Box Office Data</a>
          </div>
          <div className="footer-section">
            <h2>Goodreads</h2>
            <a href="#">Book reviews & recommendations</a>
          </div>
          <div className="footer-section">
            <h2>IMDb</h2>
            <a href="#">Movies, TV & Celebrities</a>
          </div>
          <div className="footer-section">
            <h2>IMDbPro</h2>
            <a href="#">Get Info Entertainment Professionals Need</a>
          </div>
          <div className="footer-section">
            <h2>Kindle Direct Publishing</h2>
            <a href="#">Indie Digital & Print Publishing Made Easy</a>
          </div>
          <div className="footer-section">
            <h2>Prime Video Direct</h2>
            <a href="#">Video Distribution Made Easy</a>
          </div>
          <div className="footer-section">
            <h2>Shopbop</h2>
            <a href="#">Designer Fashion Brands</a>
          </div>
          <div className="footer-section">
            <h2>Woot!</h2>
            <a href="#">Deals and Shenanigans</a>
          </div>
          <div className="footer-section">
            <h2>Zappos</h2>
            <a href="#">Shoes & Clothing</a>
          </div>
          <div className="footer-section">
            <h2>Ring</h2>
            <a href="#">Smart Home Security Systems</a>
          </div>
          <div className="footer-section">
            <h2>eero WiFi</h2>
            <a href="#">Stream 4K Video in Every Room</a>
          </div>
          <div className="footer-section">
            <h2>Blink</h2>
            <a href="#">Smart Security for Every Home</a>
          </div>
          <div className="footer-section">
            <h2>Neighbors App</h2>
            <a href="#">Real-Time Crime & Safety Alerts</a>
          </div>
          <div className="footer-section">
            <h2>Amazon Subscription Boxes</h2>
            <a href="#">Top subscription boxes – right to your door</a>
          </div>
          <div className="footer-section">
            <h2>PillPack</h2>
            <a href="#">Pharmacy Simplified</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom-links">
        <a href="#">Conditions of Use</a>
        <a href="#">Privacy Notice</a>
        <a href="#">Consumer Health Data Privacy Disclosure</a>
        <a href="#">Your Ads Privacy Choices</a>
      </div>

      <div className="copyright">
        <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
      </div>
    </footer>
  );
};

export default Footer
