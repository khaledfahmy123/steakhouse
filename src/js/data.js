import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitter,
  faBars,
} from "@fortawesome/free-brands-svg-icons";

export const dishes = [
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

export const recipes = [
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

export const pp_reviews = [
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
