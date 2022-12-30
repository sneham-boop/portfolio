const projectsData = {
  0: {
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
    live: null,
    media:
      "https://github.com/sneham-boop/colourly/raw/main/docs/images/homepage.png",
    inspiredBy: "https://coolors.co/palettes/trending",
  },
  1: {
    name: "weBike",
    description:
      "weBike is a single page application where users can find biking events near them or create new biking events for others to join. The goal of this app is to make biking more fun and bring together the biking community by having them join events in an interactive way.",
    details: [
      "weBike is based on my finals project, weRun, for the Lighthouse Labs web development bootcamp. I wanted to add more features to the app and put my own little twist to it! My husband and his close friend, both work at Trek and hearing all the biking stories from them gave me the idea that it will be fun to change over this app to track biking events instead of running events.",
      "I learnt that clear communication was a key element while working together on the same codebase. Merge conflicts were common and overtime my teammate and I learnt to resolve them more efficiently. Also, working on each others code allowed us to better understand eachothers coding habits and minimize bugs as a result.",
      "You can log in as one of the test users (email: jane@jane.com, password: password) or create your own account.",
      "I had to redo a big part of the database and server related code during deployment and next time I will better plan my initial actions to allow for a more seemless deployment experience.",
      "I would love to add a chat feature for planners and runners to communicate with eachother about event changes.",
      "I had my friends and colleagues test this app and used their input to improve the apps responsiveness on various devices.",
    ],
    github: "https://github.com/sneham-boop/werun",
    live: "https://werun-app.netlify.app",
    media:
      "https://github.com/mariannebourcier/werun/raw/master/docs/images/homepage.png?raw=true",
  },
  2: {
    name: "Pristine Roboweld",
    description:
      "This website was developed for a metal fabrication business in Nashik, MH, India. It is owned by my brother and we worked as a team to create something that would be cost effective and easy for him to maintain by himself as well as reflective of what Pristine Roboweld, his company, stands for.",
    details: [
      "I took on this project to get an experience of working with an actual customer, even though, it is my own brother in this case!",
      "Working with family has its own challenges, as we all know! I learnt that asking clear and direct questions was critical to getting my brother to think about what he wanted Pristine's brand to reflect.",
      "Head over to the live website link to take a peek at how this project looks live.",
      "Although, WIX ended up our platform of choice ultimately, if I had to do this project over again, I may have programmed this application myself. However, the self sufficiency aspect of that decision would still have proved a hurdle, since, WIX is definitely easier for my brother to maintain on his own, vs relying on my for development support.",
      "Currently, I am working on incorporating the new brand colours and logo into Pristine's other marketing material such as their company profile and business cards.",
      "Family and friends tested this website thoroughly and my brother and I worked as a team to resolve any issues that came up. Making this website responsive was one of the challenges we had to overcome since WIX only allows a limited number of changes with the plan we could afford.",
    ],
    live: "https://www.pristineroboweld.com/",
    media: `${process.env.PUBLIC_URL}/Pristine_Roboweld.png`,
  },
  3: {
    name: "Interview Scheduler",
    description:
      "Interview Scheduler is single page ReactJS app. It uses the scheduler-api as its API server to allow for state persistence. Check out the GitHub link. I have included a few additional steps to help with any setbacks I faced during local deployment. This application also supports testing via the Jest, Storybook and Cypress frameworks. Testing via the Cypress framework requires an additional database to be setup and instructions are included below.",
    details: [
      "This was my first ReactJS app and a huge shift from jQuery and EJS, which is what I was learning right before this. I remember feeling blown away by all the possibilities.",
      "One main challenge was to learn how state management and prop drilling works in React. I was quite pleased to learn about the useContext hook after passing props down to multiple levels and getting thoroughly confused by what I was naming them by the end it of all. It was almost like the Rumors game I played as a child.",
      "You will have to deploy this app locally on your machine to be able to test this.",
      "I would use the useContext hook and the browsers local storage for data persistence instead of passing all the data to each and every component. Prop drilling has definitely made this app more complex than it needed to be.",
      "It would be helpful to have user authentication on this applicaton. Also, I would love to spend some time and deploy this app.",
      "Me and my mentor were the only testers for this application. Cypress and Jest were used.",
    ],
    github: "https://github.com/sneham-boop/scheduler",
    live: null,
    media:
      "https://github.com/sneham-boop/scheduler/blob/master/documents/images/Main_page.png?raw=true",
  },
  4: {
    name: "ParkEAT",
    description:
      "An app that allows users to search and save popular eating spots near safe and reliable parking spaces in Toronto. This app is currently under construction. However, I have enabled auto-deployment on Netlify so you can click the live link to see the progress. Ask me more about how I thought of this app idea!",
    details: [
      "Ask me! ;) ",
      "I'm applying all the skills I've learnt so far and learning some more along the way. Currently learning how to use NoSQL databases, since I'll be using MongoDB for this app.",
      "Currently not ready for testing, but you you can check out the live link!",
      "Still working on this one - so no regrets yet.",
      "I'm hoping to incorporate some sort of sentiment analysis API for scoring parking spaces on safety, reliability and fun factor.",
      "Only manual testing so far.",
    ],
    github: "https://github.com/sneham-boop/park-and-eat",
    live: "https://parkeat.netlify.app/",
    media:
      "https://images.pexels.com/photos/5775059/pexels-photo-5775059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  // 3: {
  //   name: "ArtRoute",
  //   description:
  //     "Artists and craftspersons can use this application to plan and share their upcoming art drives. They can also manage their show setup list and enlist other artists for help. Visitors can pick out art drives to visit in their neighbourhood and plan a route. ",
  //   details: ["a", "b", "c", "d", "e", "f"],
  //   github: "https://github.com/sneham-boop/colourly",
  //   live: null,
  //   media:
  //   "https://github.com/mariannebourcier/werun/raw/master/docs/images/homepage.png?raw=true",
  // },
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
