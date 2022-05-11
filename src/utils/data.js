import {
  NodeJsIcon,
  ReactIcon,
  ReduxIcon,
  ScssIcon,
  StyledCompIcon,
  TsIcon,
} from "../assets/skillsIcons";

export const projectsData = [
  {
    about:
      "The Toad Tribune was the final group project of the React apprenticeship. Our team of 3, was tasked with building an app using any API we wanted. Our team decided to build a news application. We used NewsAPI for everything news related and a weather API to tell the users the weather at their location. Since this application was relatively simplistic, we decided to learn and implement TypeScript for it. The Toad Tribune is has an main page of news that displays varous topics as well as a search feature. We decided to design the layout to reflect a newspaper.",
    challenges:
      "Since we decided to learn TypeScript for The Toad Tribune, we faced many challenges. One of the biggest was how to fully utilize TypeScript in a meaningful way. Our team used FIX LATER (classes and interfaces ...)",
    description:
      "Do you like to know what is happening in the world? Do you like things that look nice? Well then, look no further. The Toad Tribune is a modern news app that displays information in an easily digestible way. ",
    colors: ["#E3dAC9", "#1A1A1A", "#262626", "#757575", "#AD9363", "#E2D9C8"],
    image: "",
    links: {
      gitHubLink: "https://github.com/JayDampitan/news-app",
      webSiteLink: "https://the-toad-tribune-659c7.web.app/",
    },
    name: "The Toad Tribune",
    techs: [
      <TsIcon style={{ margin: "0 5px", height: "55px" }} />,
      <ReactIcon style={{ margin: "0 5px", height: "55px" }} />,
      <StyledCompIcon style={{ margin: "0 5px", height: "55px" }} />,
    ],
    typography: ["Oswald", "Rubik", "Times New Roman ", "Old English Text Mt"],
  },
  {
    about:
      "PokePalace was the final team project of the apprenticeship. The only requirement for the project was to use the PokeAPi. Our team decided to create PokePalace, a gambling style gacha game with a Pokemon theme. The main goal is to catch em' all and maybe get rich in the process. The user starts with 10,000 PokeCoins. They can then buy and sell pokemon or play the PokeSlots. Each Pokemon has a value that is determined by various traits. There is a badge style achievement system which challenges users to various tasks. You are also able to look up any Pokemon and see detailed information about them. This can be anything from the size to which games they appeared in.",
    challenges:
      "While making PokePalace, we encountered many challenges. One of them was implementing the badge style achievement system. This challenge required a ton of logic to decide when a user's inventory had the correct Pokemon to complete a badge. We decided to let Redux handle this by creating a reducer for each badge. Since we needed to check for a badge completion every time a user acquired a new Pokemon - and there are many ways to acquire a new Pokemon - we simply had the app dispatch the transaction details to Redux and let the reducers handle the rest. The benifit to this approach was that the transaction behavior was consistent accross the entire app and was easily maintainable because the logic was centralized to Redux.",
    description:
      "Do you remember the feeling you got the first time you caught a Charizard? Do you like RNG? Get your gambling and nostalgia fix with PokePalace, the primere Pokemon gacha game! Buy, sell, and win Pokemon until you have earned every badge!",
    colors: [
      "#1C1C1C",
      "#262626",
      "#333333",
      "#E3DAC9",
      "#C98F07",
      "#8FBD6D",
      "#F37D7D",
    ],
    image: "",
    links: {
      gitHubLink: "https://github.com/gonzalespaulb/Pokemon-App",
      webSiteLink: "https://pokepalace-fa118.web.app/",
    },
    name: "PokePalace",
    techs: [
      <ScssIcon style={{ margin: "0 5px", height: "55px" }} />,
      <ReactIcon style={{ margin: "0 5px", height: "55px" }} />,
      <ReduxIcon style={{ margin: "0 5px", height: "55px" }} />,
    ],
    typography: ["poppins"],
  },
  {
    about:
      "News Flash was a solo project that I did for the marketing team at BW Ventures. The app offers tattoo related news and is branded under Tatstat. The purpose of News Flash was to drive traffic up and create brand trust. The project took 3 weeks once I got handed the design.",
    challenges:
      "The main challenge while developing News Flash was the API. We decided to go with Web Search API from RapidAPI because it offered some very useful prefiltering tools such as safeSearch and filtering out articles without thumbnails. However, some articles that made it through their filters did not have thumbnails and thus, we needed to have a default place holder when this happen. This was a challenge because the API returned a URL but the url was broken and I could not find a way to test the URL. After some research, I found a package called react-image that had this feature built in. It resolved the issue perfectly with no downside. Another challenge that I faced while making this app was creating a backend to make the API call. Since this is a production level application, I needed to secure the API key using a node.js backend. After some research into various options, I found Express.js to be the best option. The setup was easy and offered protection to the API key.",
    description:
      "Interested in tattoo related news, but tired of scrolling throught pages of daily news on other apps just to find it? News Flash has got you covered! News Flash is a modern news app that delivers articles related to tattoos in a minimalist fashion.",
    colors: ["#363E3C", "#696C36", "#B4B849", "#FFFFFF"],
    gitHubLink: "",
    image: "",
    links: {
      gitHubLink: "",
      webSiteLink: "https://ts-news-flash-client.herokuapp.com/",
    },
    name: "News Flash",
    techs: [
      <NodeJsIcon style={{ margin: "0 5px", height: "55px" }} />,
      <ReactIcon style={{ margin: "0 5px", height: "55px" }} />,
      <StyledCompIcon style={{ margin: "0 5px", height: "55px" }} />,
    ],
    typography: ["Poppins"],
  },
  {
    about:
      "The marketing team at Bitwise Ventures asked me to create this applet as a marketing tool for Ordrslip(An online ordering software for restaurants). Its puprose was to show interested parties how long it would take to see a return on investment when purchasing Ordrslip. It is a simple calculator that takes in some information about the restaurant and then tells the restaurant owner what the estimated annual return on investment and the days until they recoupped their total costs. This was another project that I worked on solo and it took about a month to complete a V1 and another 2 weeks to complete the final revised version. ",
    challenges:
      "Getting this application hosted in the way that the marketing team wanted was the biggest hurdle. They wanted this to live inside of an existing website that was being hosted on Wordpress. After a lot of research and trial and error I found a way to embed this React app into a Wordpress site. It involved using a plug-in called ReactPress. After installing ReactPress, I had to manually insert the build folder for the React app into the build folder of the Wordpress site. Since the React app was now being hosted on a Wordpress site, the Wordpress theme was overriding the CSS of the React app. I was able to apply a custom theme and adjust the CSS on the Wordpress site to accomidate the React app. ",
    description:
      "This application was designed and developed to help sell software to restaurants. A years worth of data was collected and used to come up with the calculations that drive this calculator. Given certain data, this calculator will return the average return on investment for people who were interested in purchasing Ordrslip.",
    colors: ["#FFFFFF", "#F93822", "#55DA38", "#0077CC", "#000000"],
    gitHubLink: "",
    image: "",
    links: {
      gitHubLink: "",
      webSiteLink: "https://ordrslip.com/osreactcalculator/",
    },
    name: "Ordrslip ROI Calculator",
    techs: [
      <ReactIcon style={{ margin: "0 5px", height: "55px" }} />,
      <StyledCompIcon style={{ margin: "0 5px", height: "55px" }} />,
    ],
    typography: ["Sofia Pro", "Mulish"],
  },
  {
    about:
      "This calculator is an applet that the Bitwise Ventures marketing team asked me to make to help build brand trust for Listing Alert. The applet calculates 4 unique values for users that are interested in real estate, such as how much it would cost to become an agent, how many leads an agent needs to calculate to bring home a certain income, take home of the agent and the brokerage base on a average sale price and leads generated, and finally the take home based on single home sale. This application took a month to develop and another week after to revise some styling. Unfortunately, the applet has not been made public yet and the repository is private.",
    challenges:
      "The biggest challenge I faced on this solo project was the inputs. The inputs needed to be formatted as the user typed values into them. This challenge was solved by using the react-currency-input-field package. Some more struggles I face with the inputs was how many different states they had. The designer requested that there be a hover, a focus, a ready to submit, and an error state that would be represented by a color on each input. This challenge was solved by using React state variable to keep track of which state the input was in and the use of refs on each input to determine what the input's values are at any given time. In the end the logic was quite complex and long but the desired result was achieved. ",
    description:
      "This multipurpose calculator was designed and developed as a marketing tool for people interested in the real estate business. It's stylish and responsive design makes it a go to option for calculating useful real estate key performance indicators.",
    colors: ["#212226", "#F5A800", "#4D75BF", "#6BB3F2", "#69B1F0", "#E5E5E5"],
    image: "",
    links: { gitHubLink: "", webSiteLink: "" },
    name: "Listing Alert Calculator",
    techs: [
      <ReactIcon style={{ margin: "0 5px", height: "55px" }} />,
      <StyledCompIcon style={{ margin: "0 5px", height: "55px" }} />,
    ],
    typography: [],
  },
  {
    about:
      "ToadTV is the first React app that I worked on. I was apart of a team of 5 during the beginning of a year long React apprenticeship. Our lead gave us a the assignment to create a movie app that allows users to look up movies and get details about them. We used the OMDB API to fetch all of the data we used. ToadTV is primarily designed for users to be able to find out more about their favorite films, while interacting with a clean UI. ",
    challenges:
      "Since this was the first application a lot of us had ever built, each step of the way we faced challenges. This first, was coming up with a design and discussing functionality. After a week of each of us creating a design for the application, we took elements from each person's vision and put it together. Once the design process was finished, we decided to come up with a game plan on how to tackle breaking the project into small enough chunks that we could finish the project in the month of allotted time. We ended up creating issues on a GitHub repository to keep us on track with completing our minimal viable product and to track bugs along the way. This allowed us to stay organized throughout the coding process",
    description:
      "Looking for some information about a movie? Look no further! ToadTV delivers a quick and stylish way to find movies and view details about them.",
    colors: ["#8ED0EF", "#4A3800", "#986900", "#A89DBA", "#333333"],
    image: "",
    links: {
      gitHubLink:
        "https://github.com/Lap343/2021-React-Apprenticeship/tree/development/movie-app",
      webSiteLink: "https://toadtv-b4454.web.app/",
    },
    name: "ToadTV",
    techs: [
      <ScssIcon style={{ margin: "0 5px", height: "55px" }} />,
      <ReactIcon style={{ margin: "0 5px", height: "55px" }} />,
    ],
    typography: ["Lato"],
  },
];
