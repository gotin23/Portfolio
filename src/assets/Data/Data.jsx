import CssGenerator from "../../assets/image/cssgenerator.png";
import Pokedex from "../../assets/image/pokedex.png";
import ArgentBank from "../../assets/image/Argent-Bank_11zon.jpg";
import Debug77 from "../../assets/image/debug77_11zon.jpg";
import ExpenseMate from "../../assets/image/expense.png";
// import CssLogo from "../../assets/icons/icons8-nextjs.svg";
// import PokedexLogo from "../../assets/icons/skills-svgrepo-com.svg";
import ReactLogo from "../../assets/icons/icons8-react-native.svg";
import ReduxLogo from "../../assets/icons/icons8-redux.svg";
import JestLogo from "../../assets/icons/jest-svgrepo-com.svg";
import NextLogo from "../../assets/icons/icons8-nextjs.svg";
import TypescriptLogo from "../../assets/icons/icons8-typescript.svg";

export const data = [
  {
    id: "1",
    image: ExpenseMate,
    name: "Expense-Mate",
    description:
      "Expense Mate streamlines shared expenses effortlessly. Built with Next.js, TypeScript, and Redux, this user-friendly app tracks, organizes, and fairly distributes costs among friends. Experience hassle-free financial management!",
    techno: [NextLogo, TypescriptLogo, ReduxLogo],
    techno: [
      { image: NextLogo, name: "Next" },
      { image: ReduxLogo, name: "Redux" },
      { image: TypescriptLogo, name: "Typespript" },
    ],
    github: "https://github.com/gotin23/Expense-mate",
    website: "https://expense-mate.vercel.app/",
    // logo: CssLogo,
  },
  {
    id: "2",
    image: CssGenerator,
    name: "Css generator",
    description:
      "My initial project marks a significant milestone as it represents my introduction to React. In this project, I developed a tool that serves as a CSS code generator. It simplifies the process of creating CSS code snippets for styling purposes, making it a valuable resource for web development and design.",
    techno: [{ image: ReactLogo, name: "React" }],
    github: "https://github.com/gotin23/generator-css",
    website: "https://gotin23.github.io/css-tools-generator/",
    // logo: CssLogo,
  },
  {
    id: "3",
    image: Pokedex,
    name: "Pokedex",
    description:
      "My second project is a Pokedex built with React and Redux. It's a digital encyclopedia for Pokemon, offering a user-friendly way to explore and learn about different Pokemon species. This project helped me dive deeper into React and gain experience in state management with Redux.",
    // techno: [ReactLogo, ReduxLogo],
    techno: [
      { image: ReactLogo, name: "React" },
      { image: ReduxLogo, name: "Redux" },
    ],
    github: "https://github.com/gotin23/pokedex-api-react",
    website: "https://gotin.netlify.app/",
    // logo: PokedexLogo,
  },
  {
    id: "4",
    image: ArgentBank,
    name: "Argent Bank",
    description:
      "As part of my OpenClassrooms training, I developed a project called 'Argent Bank' using React and Redux. This project includes API integration and a secure authentication system.",
    // techno: [ReactLogo, ReduxLogo],
    techno: [
      { image: ReactLogo, name: "React" },
      { image: ReduxLogo, name: "Redux" },
    ],
    github: "https://github.com/gotin23/ArgentBank-ProjectOC",
    website: "",
    // logo: PokedexLogo,
  },
  {
    id: "5",
    image: Debug77,
    name: "77event Debug",
    description:
      "During my OpenClassrooms training, I worked on a complex React project, emphasizing debugging to enhance application stability. Extensive Jest testing improved reliability, sharpening my problem-solving skills and React proficiency.",
    github: "https://github.com/gotin23/77event-debug",
    website: "",
    techno: [ReactLogo, JestLogo],
    techno: [
      { image: ReactLogo, name: "React" },
      { image: JestLogo, name: "Jest" },
    ],
    // logo: PokedexLogo,
  },
  // {
  //   image: Pokedex,
  //   name: "Pokedex",
  //   description: "lorem di stel lo paser tyu huvi alireda estitulo",
  //   techno: [ReactLogo, ReduxLogo],
  //   // logo: PokedexLogo,
  // },
];
