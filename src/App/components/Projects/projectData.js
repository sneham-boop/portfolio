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
  // 2: {
  //   name: "ParkEAT",
  //   description:
  //     "ParkEAT allows users to save their favourite parking spaces and rate them. Locations can be opened directly in google maps to allow navigation to take over.",
  //   details: ["a", "b", "c", "d", "e", "f"],
  //   github: "https://github.com/sneham-boop/colourly",
  //   live: null,
  //   media:
  //   "https://github.com/mariannebourcier/werun/raw/master/docs/images/homepage.png?raw=true",
  // },
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
