import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitter,
  faBars,
} from "@fortawesome/free-brands-svg-icons";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("./../imgs", false, /\.(png|jpe?g|svg)$/)
);

export const dishes = [
  {
    img: images["food-1.jpg"].default,
    text: "Wood Fire Charred Steak with BBQ Sauce",
  },
  {
    img: images["food-2.jpg"].default,
    text: "Oven-roasted Beef with tossed vegetables",
  },
  {
    img: images["food-3.jpg"].default,
    text: "Roasted Lamb with Seasoned Potatoes",
  },
  {
    img: images["food-4.jpg"].default,
    text: "BBQ Ribs with Vegies and French Fries",
  },
];

export const recipes = [
  {
    name: "Smoking Steaks",
    img: images["steaks.jpg"].default,
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
    img: images["desserts.jpg"].default,
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
    img: images["mocktails.jpg"].default,
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

export const pp_reviews = [
  {
    img: images["customer-1.jpg"].default,
    name: "Jessica Sommer",
    parag:
      "Diam, urna, ornare leo facilisis suspendisse eu rutrum id augue cursus tincidunt nisl eget ornare pharetra ac pharetra, pulvinar ipsum sed amet diam morbi amet cursus blandit augue feugiat arcu aliquet egestas id diam.",
  },
  {
    img: images["customer-img.jpg"].default,
    name: "Bryan Lambert",
    parag:
      "Diam, urna, ornare leo facilisis suspendisse eu rutrum id augue cursus tincidunt nisl eget ornare pharetra ac pharetra, pulvinar ipsum sed amet diam morbi amet cursus blandit augue feugiat arcu aliquet egestas id diam.",
  },
  {
    img: images["customer-img1.jpg"].default,
    name: "Kristin Foster",
    parag:
      "Diam, urna, ornare leo facilisis suspendisse eu rutrum id augue cursus tincidunt nisl eget ornare pharetra ac pharetra, pulvinar ipsum sed amet diam morbi amet cursus blandit augue feugiat arcu aliquet egestas id diam.",
  },
];

export const hours = [
  "Monday : 11AM – 11PM",
  "Tuesday : 11AM – 11PM",
  "Wednesday : 11AM – 11PM",
  "Thursday : 11AM – 11PM",
  "Friday : 11AM – 11PM",
  "Saturday : 11AM – 01AM",
  "Sunday : 11AM – 01AM",
];

export const links = [
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

export const titles = {
  home: {
    html: (
      <>
        <h1>a Premium</h1>
        <h1>and Authentic</h1>
        <h1>Steak House</h1>
        <button className="reserv btn">MAKE RESERVATION</button>
      </>
    ),
    img: images["hero-bg.jpg"].default,
  },
  about: {
    html: <h1>Who Are We</h1>,
    img: images["about-bg.jpg"].default,
  },

  menu: {
    html: <h1>The Menu</h1>,
    img: images["menu-bg.jpg"].default,
  },

  contact: {
    html: <h1>Get In Touch</h1>,
    img: images["contact.jpg"].default,
  },
};
