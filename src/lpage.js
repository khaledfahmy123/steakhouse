import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import GoogleMapReact from "google-map-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitter,
  faBars,
} from "@fortawesome/free-brands-svg-icons";
import Nav from "./nav.js";
import SimpleMap from "./map.js";
import "./css/main.css";
import "./css/about.css";
import "./css/menu.css";
import "./css/contact.css";

const dishes = [
  {
    img:
      "https://websitedemos.net/steak-house-08/wp-content/uploads/sites/848/2021/05/food-1.jpg",
    text: "Wood Fire Charred Steak with BBQ Sauce",
  },
  {
    img:
      "https://websitedemos.net/steak-house-08/wp-content/uploads/sites/848/2021/05/food-2.jpg",
    text: "Oven-roasted Beef with tossed vegetables",
  },
  {
    img:
      "https://websitedemos.net/steak-house-08/wp-content/uploads/sites/848/2021/05/food-3.jpg",
    text: "Roasted Lamb with Seasoned Potatoes",
  },
  {
    img:
      "https://websitedemos.net/steak-house-08/wp-content/uploads/sites/848/2021/05/food-4.jpg",
    text: "BBQ Ribs with Vegies and French Fries",
  },
];

const recipes = [
  {
    name: "Smoking Steaks",
    img:
      "https://websitedemos.net/steak-house-08/wp-content/uploads/sites/848/2021/05/steaks.jpg",
    prices: [
      {
        type: "Pan Seared Steak – $25",
        txt:
          "Diam, urna, ornare leo facilisis suspendisse eu rutrum id augue cursus.",
      },
      {
        type: "Herb-Crusted Filet Mignon – $28",
        txt:
          "Diam, urna, ornare leo facilisis suspendisse eu rutrum id augue cursus.",
      },
      {
        type: "Classic French Steak au Poivre – $31",
        txt:
          "Diam, urna, ornare leo facilisis suspendisse eu rutrum id augue cursus.",
      },
      {
        type: "Steak With Gorgonzola Sauce – $45",
        txt:
          "Diam, urna, ornare leo facilisis suspendisse eu rutrum id augue cursus.",
      },
    ],
  },
  {
    name: "Classic Desserts",
    img:
      "https://websitedemos.net/steak-house-08/wp-content/uploads/sites/848/2021/05/desserts.jpg",
    prices: [
      {
        type: "Almond Torte – $15",
        txt:
          "Diam, urna, ornare leo facilisis suspendisse eu rutrum id augue cursus.",
      },
      {
        type: "Apple Brie Tart – $18",
        txt:
          "Diam, urna, ornare leo facilisis suspendisse eu rutrum id augue cursus.",
      },
      {
        type: "Chocolate Soufflé – $9",
        txt:
          "Diam, urna, ornare leo facilisis suspendisse eu rutrum id augue cursus.",
      },
      {
        type: "Crème Caramel – $28",
        txt:
          "Diam, urna, ornare leo facilisis suspendisse eu rutrum id augue cursus.",
      },
    ],
  },

  {
    name: "Chilled Mocktails",
    img:
      "https://websitedemos.net/steak-house-08/wp-content/uploads/sites/848/2021/05/mocktails.jpg",
    prices: [
      {
        type: "Virgin Cucumber Gimlet – $25",
        txt:
          "Diam, urna, ornare leo facilisis suspendisse eu rutrum id augue cursus.",
      },
      {
        type: "Shirley Ginger – $28",
        txt:
          "Diam, urna, ornare leo facilisis suspendisse eu rutrum id augue cursus.",
      },
      {
        type: "Tahitian Coffee – $31",
        txt:
          "Diam, urna, ornare leo facilisis suspendisse eu rutrum id augue cursus.",
      },
      {
        type: "Winter Shandy – $45",
        txt:
          "Diam, urna, ornare leo facilisis suspendisse eu rutrum id augue cursus.",
      },
    ],
  },
];

const rev = [
  {
    img:
      "https://websitedemos.net/steak-house-08/wp-content/uploads/sites/848/2021/05/customer-img.jpg",
    name: "Jessica Sommer",
    parag:
      "Diam, urna, ornare leo facilisis suspendisse eu rutrum id augue cursus tincidunt nisl eget ornare pharetra ac pharetra, pulvinar ipsum sed amet diam morbi amet cursus blandit augue feugiat arcu aliquet egestas id diam.",
  },
  {
    img:
      "https://websitedemos.net/steak-house-08/wp-content/uploads/sites/848/2021/05/customer-1.jpg",
    name: "Bryan Lambert",
    parag:
      "Diam, urna, ornare leo facilisis suspendisse eu rutrum id augue cursus tincidunt nisl eget ornare pharetra ac pharetra, pulvinar ipsum sed amet diam morbi amet cursus blandit augue feugiat arcu aliquet egestas id diam.",
  },
  {
    img:
      "https://websitedemos.net/steak-house-08/wp-content/uploads/sites/848/2021/05/customer-img1.jpg",
    name: "Kristin Foster",
    parag:
      "Diam, urna, ornare leo facilisis suspendisse eu rutrum id augue cursus tincidunt nisl eget ornare pharetra ac pharetra, pulvinar ipsum sed amet diam morbi amet cursus blandit augue feugiat arcu aliquet egestas id diam.",
  },
];

const hours = [
  "Monday : 11AM – 11PM",
  "Tuesday : 11AM – 11PM",
  "Wednesday : 11AM – 11PM",
  "Thursday : 11AM – 11PM",
  "Friday : 11AM – 11PM",
  "Saturday : 11AM – 01AM",
  "Sunday : 11AM – 01AM",
];

const link = [
  {
    name: "facebook",
    link: "https://www.facebook.com/",
    icon: faFacebookSquare,
  },
  {
    name: "twitter",
    link: "https://www.twitter.com/",
    icon: faTwitter,
  },
  {
    name: "insta",
    link: "https://www.instagram.com/",
    icon: faInstagramSquare,
  },
];

export const TabContext = React.createContext();

const Lpage = () => {
  const [tab, setTab] = useState("home");

  const active_Tab = (e) => {
    setTab(e);
  };

  const pageObj = {
    home: <Home></Home>,
    about: <About></About>,
    menu: <Menu></Menu>,
    contact: <Contact></Contact>,
  };

  return (
    <TabContext.Provider value={{ active_Tab, tab }}>
      <Header></Header>
      {pageObj[tab]}
      <Footer></Footer>
    </TabContext.Provider>
  );
};

/*=================Header ============*/

const Header = (props) => {
  const { tab } = useContext(TabContext);
  const titles = {
    home: {
      html: (
        <>
          <h1>a Premium</h1>
          <h1>and Authentic</h1>
          <h1>Steak House</h1>
          <button className="reserv btn">MAKE RESERVATION</button>
        </>
      ),
      img:
        "https://websitedemos.net/steak-house-08/wp-content/uploads/sites/848/2021/05/hero-bg.jpg",
    },
    about: {
      html: <h1>Who Are We</h1>,
      img:
        "https://websitedemos.net/steak-house-08/wp-content/uploads/sites/848/2021/05/about-bg.jpg",
    },

    menu: {
      html: <h1>The Menu</h1>,
      img:
        "https://websitedemos.net/steak-house-08/wp-content/uploads/sites/848/2021/05/menu-bg.jpg",
    },

    contact: {
      html: <h1>Get In Touch</h1>,
      img:
        "https://websitedemos.net/steak-house-08/wp-content/uploads/sites/848/2021/05/contact.jpg",
    },
  };

  document.body.style.background =
    "url(" + titles[tab]["img"] + ") no-repeat center center fixed";

  return (
    <>
      <header>
        <Nav></Nav>
        <div className="container">{titles[tab]["html"]}</div>
      </header>
    </>
  );
};

/*=================Home ============*/

const Home = () => {
  return (
    <>
      <section className="welcome">
        <div className="container">
          <article>
            <h2>Welcome to Steak by the Bay</h2>
            <img
              src={
                "https://websitedemos.net/steak-house-08/wp-content/uploads/sites/848/2021/05/about.jpg"
              }
            ></img>
          </article>
          <article>
            <div>
              <h3>Our Delicious Story</h3>
              <p>
                Our journey started in 1985 when James, a steak lover, explored
                various recipes from across the world and brought them together
                in our menu. Ever since we are now a team of 10 expert chefs
                from 3 top cities in India serving you the best steaks, desserts
                and mocktails in town.
              </p>
              <button className="reserv btn">book a table</button>
            </div>
          </article>
        </div>
      </section>

      <section className="dishes">
        <div className="container">
          <h2>Our Featured Delicacies</h2>
          <main>
            {dishes.map((e, i) => (
              <article key={i}>
                <img src={e.img}></img>
                <h4>{e.text}</h4>
              </article>
            ))}
          </main>
        </div>
      </section>
    </>
  );
};

/*=================About ============*/

const About = () => {
  return (
    <>
      <section className="welcome about">
        <div className="container">
          <h4>
            Winners of international cooking competitions, James and Steve are
            the co-founders and head chefs at Steak House. We are experienced
            and passionate chefs wanting to serve you the best delicacies that
            will satisfy your taste buds.
          </h4>
          <img
            src={
              "https://websitedemos.net/steak-house-08/wp-content/uploads/sites/848/2021/05/about-img.jpg"
            }
            alt="resturant"
          />
          <h2>Our History</h2>
          <article>
            <h4>Most loved steak house since 1985</h4>
            <p>
              Our steak story dates back to 1985 when James, a steak lover
              himself, had the urge of serving the most delicious recipes for
              foodies like him. It was then that he met Steve, a passionate chef
              who shared similar interests.
              <br />
              <br />
              They started a small food let that offered takeaways only. Seeing
              the love the city had for steak, they expanded their team with 8
              more chefs from different parts of the country so we could serve
              more variety on the table.
              <br />
              <br />
              Ever since, we’ve been known as the best Steak house in town
              serving over 1000 customers everyday. Humbled by the love we’ve
              received, we strive to continue giving you the best.
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

/*=================Menu ============*/

const Recipe = (rec) => {
  console.log(rec);
  return (
    <main className={rec.num % 2 == 0 ? "recipe" : "recipe odd"}>
      <img src={rec.img} alt={rec.name}></img>
      <article>
        <h2>{rec.name}</h2>
        <div>
          {rec.prices.map((e) => {
            return (
              <>
                <h5>{e.type}</h5>
                <p>{e.txt}</p>
              </>
            );
          })}
        </div>
      </article>
    </main>
  );
};

const Menu = (props) => {
  return (
    <>
      <section>
        {recipes.map((e, i) => {
          return <Recipe key={i} num={i} {...e}></Recipe>;
        })}
      </section>
    </>
  );
};

/*=================Contact ============*/
const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="container">
          <h2>+1 234 567 980</h2>
          <h3>Address</h3>
          <p>1234 N Spring St, Los Angeles, CA 90012</p>
          <div className="map">
            <SimpleMap></SimpleMap>
          </div>
          <form>
            <h2>Keep Your Message Constructive:</h2>
            <div className="name">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="email" placeholder="Email Adress" />
            <input type="number" placeholder="Contact Number" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message"></textarea>
            <button type="sumbit" className="btn reserv btn-st submit">
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

/*=================Footer ============*/

const Review = (props) => {
  const { img, name, parag } = props;
  return (
    <div className="opnion">
      <p>{parag}</p>
      <img src={img}></img>
      <h5>{name}</h5>
    </div>
  );
};

const Footer = () => {
  const { tab } = useContext(TabContext);
  return (
    <>
      <div
        className={["contact", "menu"].includes(tab) ? "empty hide" : "empty"}
      ></div>
      <section className="footer">
        <div className="container">
          <article className={tab == "contact" ? "review hide" : "review"}>
            <section>
              <h2>Loved by Many</h2>
              <Review key={0} {...rev[0]}></Review>
            </section>
            <section>
              <Review key={1} {...rev[1]}></Review>
              <Review key={2} {...rev[2]}></Review>
            </section>
          </article>

          <article className="phone">
            <h3>We Are Waiting to Serve You!</h3>
            <button className="btn reserv btn-st">Book a table</button>
            <h3>Or Call +1 234 56 7890</h3>
          </article>

          <article className="info">
            <div className="location">
              <h4>location</h4>
              <p>
                1234 N Spring St, <br /> Los Angeles, CA 90012
              </p>

              <h4>follow us</h4>
              <ul>
                {link.map((e, i) => (
                  <li key={i}>
                    <a href={e.link}>
                      <FontAwesomeIcon
                        className="icon"
                        icon={e.icon}
                      ></FontAwesomeIcon>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <img
              src={
                "https://websitedemos.net/steak-house-08/wp-content/uploads/sites/848/2021/05/footer-img.jpg"
              }
              alt="pic"
            ></img>

            <div>
              <h4>Hours</h4>
              {hours.map((e, i) => (
                <p key={i}>{e}</p>
              ))}
            </div>
          </article>
          <div className="copy">
            Copyright © 2021 Steak House | Powered by Khaled Fahmy
          </div>
        </div>
      </section>
    </>
  );
};

export default Lpage;
