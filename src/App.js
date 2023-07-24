import "./App.css";
import logo from "./Assets/images/logo (2).png";
import image from "./Assets/images/img-about.png";
import images from "./Assets/images/image-2.png";
import image_3 from "./Assets/images/image-3.png";
import image_4 from "./Assets/images/image-4.png";
import image_5 from "./Assets/images/image_5.webp";
import image_6 from "./Assets/images/image-6.png";
import image_7 from "./Assets/images/image-7.png";
import image_8 from "./Assets/images/image-8.png";
import image_9 from "./Assets/images/image-9.png";

function App() {
  return (
    <div>
      <div className="direction-changer create-space background-color">
        <div className="direction-changer create-space">
          <img className="margin-logo" src={logo} alt="Logo" />
          <div className="direction-changer ">
            <p className="create-margin ">Why Zyro</p>
            <p className="create-margin ">Products</p>
            <p className="create-margin ">Resources</p>
            <p className="create-margin ">Website Templates</p>
            <p className="create-margin ">Pricing</p>
          </div>
        </div>
        <div className="direction-changer create-margin">
          <svg
            className="globe-icon "
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-globe"
            viewBox="0 0 16 16"
          >
            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
          </svg>
          <p className="create-margin ">IN</p>
          <p className="create-margin create-margin-right">Sign IN</p>
          <button className="button create-margin-right">START FOR FREE</button>
        </div>
      </div>
      <div className="direction-changer">
        <div className="left-card">
          <img
            height="90%"
            width="125%"
            src="https://zyro.com/images/homePage/hero-placeholder.jpg"
            alt="img"
          />
        </div>
        <div className="right-card">
          <h1>
            Flawless templates, easy editing, no coding required — that's Zyro
            website builder
          </h1>
          <p>
            Build a website and save up to 68% with plans from ₹150.00/mo. Deal
            ends in:
          </p>
          <button className="button-body">Start For Free</button>
          <p>No credit card required</p>
        </div>
      </div>
      <div className="container">
        <div className="about">
          <img src={image} alt="img" />
        </div>
      </div>
      <div className="section">
        <h1 className="text content">Choose your website builder plan</h1>
        <p className="text content-2">
          30-day <b> money-back guarantee </b> with every Zyro plan.
        </p>
        <img className="text" src={images} alt="img" />
        <p className="violet">+ see all features</p>
      </div>
      <div className="container-2">
        <div>
          <h1 className="space content">Zyro success stories</h1>
          <p className="space-2">
            Join over 250,000 small business owners. Find out
          </p>
          <p className="space-3">what you can do with a Zyro website</p>
        </div>
        <div className="client">
          <div>
            <h4 className="color">Client</h4>
          </div>
          <div className="tech">
            <h4>Tech Experts</h4>
          </div>
        </div>
        {/* <div className="parts">
          <div className="part-1">
            <div>
              <p>
                "A portfolio is all about making an impression. I wanted a
                solution with great templates so that people can find my work
                easily and quickly."
              </p>
            </div>
            <div>
              <p>Juan Antonio Garcia</p>
              <a href="https://www.juanantoniogarciaarquitectura.com/">
                visit the website
              </a>
            </div>
          </div>
          <div className="part-2">
            <div>
              <p>
                "Zyro really empowers new businesses because you dont need a lot
                of time, money, or experience to make it work. You can invest
                that straight back into your business."
              </p>
            </div>
            <div>
              <p>Tati Uribe</p>
              <a href="https://www.tatiuribe.com/?r_done=1">
                visit the website
              </a>
            </div>
          </div>
          <div className="part-3">
            <div>
              <p>
                "I needed a simple website, very fast, to get found online and
                start my business. Now, I’m ready to take the next step with
                Zyro and create an online store."
              </p>
            </div>
            <div>
              <p>Paulius Jančiukas</p>
              <a href="https://www.balticblades.com/">visit the website</a>
            </div>
          </div>
        </div> */}
        <div className="imag-cont">
          <div>
            <h1 className="img-head">
              Build fast. Grow <br></br>faster. Load fastest.
            </h1>
            <p className="img-para">
              Get a professional website that loads at lightning speed. Convert
              more of your website traffic into paying customers and rank higher
              on search engines.
            </p>
            <button className="btn">START FOR FREE</button>
          </div>
          <div>
            <img width="745px" src={image_3} alt="img" />
          </div>
        </div>
        <div className="imag-cont rev-margin">
          <div>
            <img width="755px" className="img-4" src={image_4} alt="img" />
          </div>
          <div>
            <h1 className="img-head">
              Customer support. <br></br>Ready 24/7.
            </h1>
            <p className="img-para">
              Stuck? Not for long. Our live support team can help, no matter the
              time of day (or night).
            </p>
            <button className="btn">START FOR FREE</button>
          </div>
        </div>
        <div className="container-3">
          <div className="section-3">
            <h1 className="context">Sell online with no hidden fees</h1>
            <p className="context-para">
              Zyro's powerful eCommerce builder has everything you need to
              start, manage and grow your business online without taking a cut
              of your profits.
            </p>
          </div>
          <div className="sections-3">
            <div className="section-4">
              <div>
                <div>
                  <h1 className="section-title">SET UP IN MINUTES</h1>
                  <p className="section-para">
                    Use our all-in-one eCommerce platform to build your shop and
                    start selling online today.
                  </p>
                </div>
                <div>
                  <h1 className="section-title">MANAGEMENT MADE EASY</h1>
                  <p className="section-para">
                    Whether it's inventory, shipping, or even taxes, our
                    automatic tools will do the hard work for you.
                  </p>
                </div>
                <div>
                  <h1 className="section-title">GROW YOUR BUSINESS</h1>
                  <p className="section-para">
                    Unleash the power of our AI tools and third party marketing
                    integrations to scale your online business.
                  </p>
                </div>
                <div>
                  <h1 className="section-title">GET PAID INSTANTLY</h1>
                  <p className="section-para">
                    Accept credit and debit card payments in over 40 countries
                    with payment methods such as Google Pay, Apple Pay and many
                    others.
                  </p>
                </div>
                <button className="btn btn-margin">START FOR FREE</button>
              </div>
              <div>
                <img className="image_5" src={image_5} alt="img" />
              </div>
            </div>
            <div className="section-5">
              <div>
                <h1 className="space content">Fully customizable website</h1>
                <h1 className="space content extra">templates</h1>
                <p className="section-para extra-para">
                  Designer-made templates built to meet your needs. Choose a
                  template and edit anything – change colors, fonts, images, and
                  more. No coding skills needed.
                </p>
                <img className="image_6" src={image_6} alt="img" />
                <button className="btn btn-margin bt-extra">
                  EXPLORE TEMPLATES
                </button>
              </div>
              <div>
                <h1 className="space content left-mrg">
                  Create a website you're proud of
                </h1>
                <h1 className="space content extra">in 5 steps</h1>
                <img className="image_7" src={image_7} alt="img" />
              </div>
            </div>
            <div className="section-6">
              <h1 className="space2 content pret">
                Website builder questions? We’ve
              </h1>
              <h1 className="space content extra pret">got answers.</h1>
              <div>
                <div>
                  <h3 className="question">What is a website builder?</h3>
                  <h3 className="question">
                    Do I need any coding knowledge to create my website?{" "}
                  </h3>
                  <h3 className="question">Can I use custom domain?</h3>
                  <h3 className="question">
                    Is it easy to make a website with Zyro website builder?
                  </h3>
                  <h3 className="question">
                    Can i host a website I created free?
                  </h3>
                  <h3 className="question">
                    Is Zyro website builder SEO friendly?
                  </h3>
                  <h3 className="question">
                    Will my Zyro website be mobile friendly?
                  </h3>
                  <div>
                    <img className="image_8" src={image_8} alt="img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="footer">
              <div className="foot-section">
                <div>
                  <img src={image_9} alt="img" className="foot-img" />
                </div>
                <div className="foot-sub-sections">
                  <p className="bold">Products </p>

                  <p>Website Builder </p>

                  <p>Online store </p>

                  <p>Features </p>

                  <p>Website Templates </p>

                  <p>Domains </p>

                  <p> Business email</p>

                  <p>Pricing </p>

                  <p>Free hosting</p>

                  <p>Landing page builder</p>
                </div>
                <div className="foot-sub-sections">
                  <p className="bold">Company </p>

                  <p>About </p>

                  <p>Contact </p>

                  <p>Careers </p>

                  <p>Press </p>

                  <p>Youtube creators</p>

                  <p>Terms & privacy</p>

                  <p>Sitemap </p>
                </div>
                <div className="foot-sub-sections">
                  <p className="bold">Resources </p>

                  <p>Blog</p>

                  <p>Support</p>

                  <p>Help center </p>

                  <p>Sell online</p>

                  <p>eCommerce website </p>

                  <p>Business glossary</p>

                  <p>Roadmap </p>

                  <p>eCommerce guide</p>

                  <p>Refer for $20</p>
                </div>
                <div className="foot-sub-sections">
                  <p className="bold">AI Tools </p>

                  <p>Logo maker</p>

                  <p>Image resizer</p>

                  <p>Business name generator </p>

                  <p>Slogan generator</p>

                  <p>Blog title generator </p>

                  <p>Heatmap</p>

                  <p>AI Writer</p>

                  <p>AI Image upscaler</p>

                  <p>Image background remover</p>
                  <p>Favicon generator</p>
                </div>
              </div>
              <div>
                <hr
                  style={{
                    background: "grey",
                    color: "grey",
                    borderColor: "grey",
                    height: "1px",
                  }}
                />
                <p>
                  © 2019-2023 Zyro.com - Website Builder, AI Powered Business
                  Tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
