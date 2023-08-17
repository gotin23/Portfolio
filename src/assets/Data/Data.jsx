import CssGenerator from "../../assets/image/cssgenerator.png";
import Pokedex from "../../assets/image/pokedex.png";
import ArgentBank from "../../assets/image/Argent-Bank.png";
import Debug77 from "../../assets/image/debug77.png";
// import CssLogo from "../../assets/icons/icons8-nextjs.svg";
import PokedexLogo from "../../assets/icons/skills-svgrepo-com.svg";
import ReactLogo from "../../assets/icons/icons8-react-native.svg";
import ReduxLogo from "../../assets/icons/icons8-redux.svg";
import JestLogo from "../../assets/icons/jest-svgrepo-com.svg";

export const data = [
  {
    id: "1",
    image: CssGenerator,
    name: "Css generator",
    description:
      "My inaugural project involved crafting a practical web tool using React and Redux. This tool simplifies the generation of CSS code for gradients, text shadows, border radius... providing an instant preview of these effects on the website. This undertaking underscores my proficiency in React and Redux, and how I can leverage these technologies to create user-friendly solutions.",
    techno: [ReactLogo, ReduxLogo],
    github: "https://github.com/gotin23/css-tools-generator",
    website: "https://gotin23.github.io/css-tools-generator/",
    // logo: CssLogo,
  },
  {
    id: "2",
    image: Pokedex,
    name: "Pokedex",
    description:
      "Another endeavor I embarked on was building a Pokedex using React and Redux. Leveraging an external API, this project brings the world of Pokémon to life by displaying comprehensive information about different species. Through this project, I demonstrated my proficiency in React, Redux, and API integration, while also creating an engaging and informative user experience.",
    techno: [ReactLogo, ReduxLogo],
    github: "https://github.com/gotin23/pokedex-api-react",
    website: "https://gotin.netlify.app/",
    // logo: PokedexLogo,
  },
  {
    id: "3",
    image: ArgentBank,
    name: "Argent Bank",
    description:
      "During my OpenClassrooms training, I worked on 'Argent Bank,' a dynamic React and Redux project. This application seamlessly integrates API calls and user authentication, offering a comprehensive banking experience. With a focus on user interaction and data management, this project showcases my ability to work with React, Redux, and API integrations to create a feature-rich web application.",
    techno: [ReactLogo, ReduxLogo],
    github: "https://github.com/gotin23/ArgentBank-ProjectOC",
    website: "",
    // logo: PokedexLogo,
  },
  {
    id: "4",
    image: Debug77,
    name: "77event Debug",
    description:
      "During my OpenClassrooms training, I tackled a React project riddled with issues. My focus was on meticulous bug identification, resolution, and bolstering application stability. By implementing extensive Jest tests, I ensured reliability. This experience honed my problem-solving, deepened my React expertise, and showcased my knack for creating robust, rigorously tested code.",
    github: "https://github.com/gotin23/77event-debug",
    website: "",
    techno: [ReactLogo, JestLogo],
    // logo: PokedexLogo,
  },
  {
    image: Pokedex,
    name: "Pokedex",
    description: "lorem di stel lo paser tyu huvi alireda estitulo",
    techno: [ReactLogo, ReduxLogo],
    // logo: PokedexLogo,
  },
];
