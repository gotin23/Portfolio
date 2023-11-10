import CssGenerator from "../../assets/image/cssgenerator.png";
import Pokedex from "../../assets/image/pokedex.png";
import ArgentBank from "../../assets/image/Argent-Bank_11zon.jpg";
import Debug77 from "../../assets/image/debug77_11zon.jpg";
import ReactLogo from "../../assets/icons/icons8-react-native.svg";
import ReduxLogo from "../../assets/icons/icons8-redux.svg";
import JestLogo from "../../assets/icons/jest-svgrepo-com.svg";
// import ExpenseMate from "../../assets/image/expense.png";
// import NextLogo from "../../assets/icons/icons8-nextjs.svg";
// import TypescriptLogo from "../../assets/icons/icons8-typescript.svg";

export const data = [
  // {
  //   id: "1",
  //   image: ExpenseMate,
  //   name: "Expense-Mate",
  //   description:
  //     "Expense Mate streamlines shared expenses effortlessly. Built with Next.js, TypeScript, and Redux, this user-friendly app tracks, organizes, and fairly distributes costs among friends. Experience hassle-free financial management!",
  //   techno: [NextLogo, ReduxLogo, TypescriptLogo],
  //   github: "https://github.com/gotin23/Expense-mate",
  //   website: "https://expense-mate.vercel.app/",
  // },
  {
    id: "1",
    image: CssGenerator,
    name: "Css generator",
    description:
      "CSS Tools Generator, developed in React, streamlines CSS code creation. This user-friendly tool enables live previews for effects like box-shadow, filter, and border-radius. With intuitive parameter adjustment, users swiftly visualize changes. Tailored for all levels, it accelerates coding, empowering developers to create visually stunning effects effortlessly.",

    techno: [ReactLogo],
    github: "https://github.com/gotin23/generator-css",
    website: "https://gotin23.github.io/css-tools-generator/",
  },
  {
    id: "2",
    image: Pokedex,
    name: "Pokedex",
    description:
      "Pokedex is a React-based project utilizing the Pokemon API and React Redux. This application allows users to explore various Pokemon and their characteristics. With seamless integration of the Pokedex API and React Redux, users can efficiently browse and access comprehensive information about different Pokemon, providing an immersive and interactive experience.",
    techno: [ReactLogo, ReduxLogo],
    github: "https://github.com/gotin23/pokedex-api-react",
    website: "https://gotin.netlify.app/",
  },
  {
    id: "3",
    image: ArgentBank,
    name: "Argent Bank",
    description:
      "As part of my OpenClassrooms training, I developed a project called 'Argent Bank' using React and Redux. This project includes API integration and a secure authentication system.",
    techno: [ReactLogo, ReduxLogo],
    github: "https://github.com/gotin23/ArgentBank-ProjectOC",
    website: "",
  },
  {
    id: "4",
    image: Debug77,
    name: "77event Debug",
    description:
      "During my OpenClassrooms training, I worked on a complex React project, emphasizing debugging to enhance application stability. Extensive Jest testing improved reliability, sharpening my problem-solving skills and React proficiency.",
    github: "https://github.com/gotin23/77event-debug",
    website: "",
    techno: [ReactLogo, JestLogo],
  },
];
