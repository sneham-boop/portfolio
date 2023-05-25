import Icons from "../Skills/Icons";

const projectsData = {
  0: {
    name: "Pristine Roboweld",
    description:
      "This website was developed for a metal fabrication business in Nashik, MH, India, my hometown. It is owned by my dad & brother. We worked as a team to create something that would be cost effective and easy for them to maintain by themselves, as well as reflective of what Pristine Roboweld stands for.",
    details: [
      "I took on this project to get an experience of working with an actual customer, even though, it was my own dad & brother in this case!",
      "I learnt that asking clear and direct questions was critical to getting my customer to think about what they wanted Pristine's brand to reflect.",
      "Head over to the live website link to take a peek at how this project looks live.",
      "Although, WIX ended up as our platform of choice, if I had to do this project all over again, I may have programmed this application myself. However, the self sufficiency aspect of that decision would still have proved a hurdle, since, something like WIX is definitely easier for my brother to maintain on his own, vs relying on me 100% for development/design support.",
      "Currently, I am working on incorporating the new brand colours and logo into Pristine's other marketing material such as their company profile and business cards.",
      "Family and friends tested this website thoroughly and my brother and I worked as a team to resolve any issues that came up. Making this website responsive was one of the challenges we had to overcome since WIX only allows a limited type of changes with the website. I couldn't really use any special CSS magic! Their Velo platform may allow more flexibility though. I have yet to explore that.",
    ],
    live: "https://www.pristineroboweld.com/",
    media: `${process.env.PUBLIC_URL}/Pristine_Roboweld.png`,
    stack: () => {
      const icons = ["canva", "wix"];
      return <Icons size={30} iconNames={icons} descShowFlag={false} />;
    },
  },
  2: {
    name: "Art Shop & Blog",
    description:
      "I designed this website to sell art and share my thoughts on creativity. It started a few awkwardly placed images and grew into a desire to learn the nuts and bolts of web development. I keep iterating the design and this is the 4th or 5th live version.",
    details: [
      "The idea came from simple over abundance of art that was accumulating in my little home studio. I wanted to try and sell it!",
      "I chose WIX as the CMS platform early on and it's been a process to learn what all can be customized and what not. Now, having learnt how to make websites literally from scratch, I'd love to dig into their Velo/developer mode a little more.",
      "Check out the live link. This is a functional e-commerce website where I sell art.",
      "I'd probably not pay for a custom email address if I'd known about email aliases. This one isn't really related to web development. It just stung to know I could've gotten away without the extra email fees!",
      "One of my goals is to code this whole website myself. E-commerce store and everything.",
      "This is has been my most tested website. After getting input from my fellow testers, I re-designed the website to use more of the space on the screen. I've also since added multiple forms to grab data from visitors interested in subscribing to my newsletter.",
    ],
    github: null,
    live: "https://www.snehakm.com/",
    media: `${process.env.PUBLIC_URL}/VisualArtistPage.png`,
    stack: () => {
      const icons = ["wix", "canva"];
      return <Icons size={30} iconNames={icons} descShowFlag={false} />;
    },
  },
  3: {
    name: "Mom's Talk",
    description:
      "This project is a collaborative effort with my best friend, who is a wonderfully resourceful and driven mommy. She and I noodled with this idea for the longest time and 2023 was finally the year it came into fruition. Both of us came up with the topics trained other mom's on how to navigate the world of blogging. More than anything, we had a ton of fun working on this project.",
    details: [
      "The idea came from simple over abundance of art that was accumulating in my little home studio. I wanted to try and sell it!",
      "I chose WIX as the CMS platform early on and it's been a process to learn what all can be customized and what not. Now, having learnt how to make websites literally from scratch, I'd love to dig into their Velo/developer mode a little more.",
      "Check out the live link. This is a functional e-commerce website where I sell art.",
      "I'd probably not pay for a custom email address if I'd known about email aliases. This one isn't really related to web development. It just stung to know I could've gotten away without the extra email fees!",
      "One of my goals is to code this whole website myself. E-commerce store and everything.",
      "This is has been my most tested website. After getting input from my fellow testers, I re-designed the website to use more of the space on the screen. I've also since added multiple forms to grab data from visitors interested in subscribing to my newsletter.",
    ],
    github: null,
    live: "https://www.themomstalk.com/",
    media: `${process.env.PUBLIC_URL}/MomsTalk.png`,
    stack: () => {
      const icons = ["wix", "canva"];
      return <Icons size={30} iconNames={icons} descShowFlag={false} />;
    },
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
