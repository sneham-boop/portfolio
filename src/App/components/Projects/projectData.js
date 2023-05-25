import Icons from "../Skills/Icons";

const projectsData = {
  0: {
    name: "weHike",
    description:
      "An app where users can find hiking events near them or create new events for others to join. I often go hiking with my dog and wish there was a way to involve other people or plan new hiking routes together.",
    details: [
      "weHike is based on was my finals project weRun. My partner Marianne and I finished weRun (link) prior to the demo day and then I ended up adding a few more features to the app and put my own little twist to it! I often go hiking with my dog and wish there was a way to involve other people or plan new hiking routes together.",
      "Clear communication was critical while working together on the same codebase. Marianne and I often worked on both backend/frontend together and merge conflicts were common. Overtime we learnt to resolve them more efficiently. Also, working on each others code allowed us to better understand our coding habits and minimize bugs.",
      "This project is live. You can log in as one of the test users (email: jane@jane.com, password: password) or create your own account.",
      "I had to redo the entire database and a huge part of the server routes during deployment. I will likely select a cloud-based database service right at the start of the project to save time moving forward.",
      "I would love to add a chat feature for planners and hikers to communicate with eachother about event changes.",
      "I had my friends and colleagues test this app and used their input to improve the apps responsiveness on various devices.",
    ],
    github: "https://github.com/sneham-boop/wehike",
    live: "https://wehike-app.netlify.app/",
    media:
      "https://github.com/sneham-boop/wehike/raw/main/docs/images/Home.png",
    stack: () => {
      const icons = ["react", "css", "canva", "node", "ex", "psql"];
      return <Icons size={30} iconNames={icons} descShowFlag={false} />;
    },
  },
  1: {
    name: "Colourly",
    description:
      "Colourly is a simple full-stack application inspired by the amazing tool created by Coolers. It allows users to create their own colour palettes, see what others have created, save their favourites, delete pelettes, etc.",
    details: [
      "This app is inspired by Coolers. I am an artist in my spare time and this application felt like something I would actually use. I loved their clean and intuitive UI and so I took up the challenge to create a mock based on some of their features.",
      "Adding additional data points as an after thought makes a huge impact on the amount of rework. I had to restructure the database, queries and re-think the movement of data as Colourly developed multiple times. Learning from this experience, I appreciate the importance of structuring data well and in advance.",
      "Currently, this project requires to be locally deployed on your machine to be able to be tested. I have included detailed instructions on the github page for deploying the front-end and back-end of this project locally on your machine. It will cost nothing but you will need to have some web-development experience to be able to try it. Once set up, you can use either of the test accounts I've set up or create your own account to test the app.",
      "Giving thought to the movement and structure of data through the application prior to jumping straight into development is important. Also, I would use a front-end framework such as React to better control state within the application. Right, now application state not managed centrally and there is no single source of truth.",
      "I am currently working on deploying this application so that it can be experienced without having to deploy it yourself. It would also be nice to have more ways to modify colours on the create page. Also, it would be helpful to have more detail for each colour, such as a name, their RGB / HSL values.",
      "Yes. Based on feedback, I simplified the menu structure and added this FAQ page. I also had to fix a few broken links.",
    ],
    github: "https://github.com/sneham-boop/colourly",
    live: "https://colourly.vercel.app/",
    media:
      "https://github.com/sneham-boop/colourly/blob/main/docs/images/homepage.png?raw=true",
    inspiredBy: "https://coolors.co/palettes/trending",
    stack: () => {
      const icons = ["html", "css", "js", "jq", "ex", "node", "psql"];
      return <Icons size={30} iconNames={icons} descShowFlag={false} />;
    },
  },
  // 5: {
  //   name: "Pristine Roboweld",
  //   description:
  //     "This website was developed for a metal fabrication business in Nashik, MH, India, my hometown. It is owned by my dad & brother and we worked as a team to create something that would be cost effective and easy for them to maintain by themselves, as well as reflective of what Pristine Roboweld stands for.",
  //   details: [
  //     "I took on this project to get an experience of working with an actual customer, even though, it was my own dad & brother in this case!",
  //     "I learnt that asking clear and direct questions was critical to getting my customer to think about what they wanted Pristine's brand to reflect.",
  //     "Head over to the live website link to take a peek at how this project looks live.",
  //     "Although, WIX ended up as our platform of choice, if I had to do this project all over again, I may have programmed this application myself. However, the self sufficiency aspect of that decision would still have proved a hurdle, since, something like WIX is definitely easier for my brother to maintain on his own, vs relying on me 100% for development/design support.",
  //     "Currently, I am working on incorporating the new brand colours and logo into Pristine's other marketing material such as their company profile and business cards.",
  //     "Family and friends tested this website thoroughly and my brother and I worked as a team to resolve any issues that came up. Making this website responsive was one of the challenges we had to overcome since WIX only allows a limited type of changes with the website. I couldn't really use any special CSS magic! Their Velo platform may allow more flexibility though. I have yet to explore that.",
  //   ],
  //   live: "https://www.pristineroboweld.com/",
  //   media: `${process.env.PUBLIC_URL}/Pristine_Roboweld.png`,
  //   stack: () => {
  //     const icons = ["canva", "wix"];
  //     return <Icons size={30} iconNames={icons} descShowFlag={false} />;
  //   },
  // },
  2: {
    name: "Interview Scheduler",
    description:
      "An app that allows users to schedule interviews for the week. This was my first React app. Check out the GitHub link, I have included a few additional steps to help with any setbacks I faced during local deployment. This application also supports testing via the Jest, Storybook and Cypress frameworks.",
    details: [
      "This was my first ReactJS app and a huge shift from jQuery and EJS, which is what I was learning right before this. I remember feeling blown away by all the possibilities.",
      "One main challenge was to learn how state management and prop drilling works in React. I was quite pleased to learn about the useContext hook after passing props down to multiple levels and getting thoroughly confused by what I was naming them by the end it of all. It was almost like the Rumors game I played as a child.",
      "You will have to deploy this app locally on your machine to be able to test this.",
      "I would use the useContext hook and the browsers local storage for data persistence instead of passing all the data to each and every component. Prop drilling has definitely made this app more complex than it needed to be.",
      "It would be helpful to have user authentication on this applicaton. Also, I would love to spend some time and deploy this app.",
      "Me and my mentor were the only testers for this application. Cypress and Jest were used.",
    ],
    github: "https://github.com/sneham-boop/scheduler",
    live: "https://scheduler-sm.vercel.app/",
    media:
      "https://github.com/sneham-boop/scheduler/blob/master/documents/images/Main_page.png?raw=true",
    stack: () => {
      const icons = ["react", "sass", "postman", "node", "psql"];
      return <Icons size={30} iconNames={icons} descShowFlag={false} />;
    },
  },
  3: {
    name: "ParkEAT",
    description:
      "An app that allows users to search and save popular eating spots near safe and reliable parking spaces in Toronto. This app is currently under construction. However, I have enabled auto-deployment on Vercel so you can click the live link to see the progress. Ask me more about how I thought of this app idea!",
    details: [
      "Ask me! ;) ",
      "I'm applying all the skills I've learnt so far and learning some more along the way. Currently learning how to use NoSQL databases, since I'll be using MongoDB for this app.",
      "Currently not ready for testing, but you you can check out the live link!",
      "Still working on this one - so no regrets yet.",
      "I'm hoping to incorporate some sort of sentiment analysis API for scoring parking spaces on safety, reliability and fun factor.",
      "Only manual testing so far.",
    ],
    github: "https://github.com/sneham-boop/parkeat",
    live: "https://parkeat.vercel.app/",
    media: `${process.env.PUBLIC_URL}/ParkEat.png`,
    stack: () => {
      const icons = ["react", "sass", "mongo", "nextjs"];
      return <Icons size={30} iconNames={icons} descShowFlag={false} />;
    },
  },
  // 4: {
  //   name: "Art Shop & Blog",
  //   description:
  //     "I designed this website to sell art and share my thoughts on creativity. It started a few awkwardly placed images and grew into a desire to learn the nuts and bolts of web development. I keep iterating the design and this is the 4th or 5th live version.",
  //   details: [
  //     "The idea came from simple over abundance of art that was accumulating in my little home studio. I wanted to try and sell it!",
  //     "I chose WIX as the CMS platform early on and it's been a process to learn what all can be customized and what not. Now, having learnt how to make websites literally from scratch, I'd love to dig into their Velo/developer mode a little more.",
  //     "Check out the live link. This is a functional e-commerce website where I sell art.",
  //     "I'd probably not pay for a custom email address if I'd known about email aliases. This one isn't really related to web development. It just stung to know I could've gotten away without the extra email fees!",
  //     "One of my goals is to code this whole website myself. E-commerce store and everything.",
  //     "This is has been my most tested website. After getting input from my fellow testers, I re-designed the website to use more of the space on the screen. I've also since added multiple forms to grab data from visitors interested in subscribing to my newsletter.",
  //   ],
  //   github: null,
  //   live: "https://www.snehakm.com/",
  //   media: `${process.env.PUBLIC_URL}/VisualArtistPage.png`,
  //   stack: () => {
  //     const icons = ["wix", "canva"];
  //     return <Icons size={30} iconNames={icons} descShowFlag={false} />;
  //   },
  // },

  6: {
    name: "ArtSee",
    description:
      "Artsee is a NextJS app that uses Artsy's API to explore art by famous artists.",
    details: [
      "I wanted to get more comfortable using NextJS and I am an artist. Thought it would be cool to connect to Artsy's API and allow some way to explore beautiful art by famous artists.",
      "NextJS is a such a versatile platform. I loved how easy it was to setup API routes directly in the app. Couple that with the power of React and the possibilities are endless.",
      "You can test the app by looking up artists in the input or click on any of the buttons, that will then search Artsy's API in the background. I tested the app via Postman, which came in very handy during the initial API set up process.",
      "Next time I make another similar app, I want to try using TypeScript! I've heard how much of a difference it makes in error proofing everything and I want to explore that.",
      "I'd love to add a way to save artists on different user profiles and use it as a way to save my inspirations.",
      "I haven't really done any user testing with this app yet.",
    ],
    github: "https://github.com/sneham-boop/artsee",
    live: "https://artsee-two.vercel.app/",
    media:
      "https://github.com/sneham-boop/artsee/blob/main/public/ExploreArt.png?raw=true",
  },
  // 4: {
  //   name: "Remi",
  //   description:
  //     "Remi automatically categorizes items based on OpenAI's algorithm and multiple reminders may be added to each item on the list and an urgency level may be set. A colleague/friend can be added for further accountability of tasks.",
  //   details: ["a", "b", "c", "d", "e", "f"],
  //   github: "https://github.com/sneham-boop/remi",
  //   live: null,
  //   media:
  //   "https://github.com/mariannebourcier/werun/raw/master/docs/images/homepage.png?raw=true",
  // },
  // 5: {
  //   name: "Mento",
  //   description:
  //     "Get matched with our mentors based on your interests and goals.",
  //   details: ["a", "b", "c", "d", "e", "f"],
  //   github: "https://github.com/sneham-boop/colourly",
  //   live: null,
  //   media:
  //   "https://github.com/mariannebourcier/werun/raw/master/docs/images/homepage.png?raw=true",
  // },
};

export default projectsData;
