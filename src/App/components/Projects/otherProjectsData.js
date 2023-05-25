import Icons from "../Skills/Icons";

const projectsData = {
  0: {
    name: "Pristine Roboweld",
    description:
      "This website was developed for Pristine Roboweld, a metal fabrication business in my hometown of Nashik, MH, India. Owned by my dad and brother, we worked as a team to improve their online presence and created an easily maintainable, cost-effective solution.",
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
      "I designed this website to sell art and share my thoughts on creativity. It started as a few awkwardly placed pictures of my art and grew into a desire to learn the nuts and bolts of web development. I routinely iterate the design and this is the 4th or 5th version.",
    details: [
      "The idea came from over abundance of art that was accumulating in my little home studio. I wanted to share it on a platform different from social media and possibly even try and sell it!",
      "I chose WIX as the CMS platform early on and it's been a process to learn what all can be customized and what not. Now, having learnt how to make websites literally from scratch, I'd love to dig into their Velo/developer mode a little more.",
      "This is a functional e-commerce website where I sell my own art. Check it out!",
      "I'd probably not pay for a custom email address if I'd known about email aliases. This one isn't really related to web development. It just stung to know I could've gotten away without the extra email fees!",
      "One of my goals is to code this whole website myself. E-commerce store and everything. Definitely going to use Next.js for this.",
      "This is has been my most tested website. After getting input from my artist friends and family, I re-designed the website to use more of the space on the screen. I've also since added multiple forms to grab data from visitors interested in subscribing to my newsletter.",
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
      "This blog is a collaborative effort with a resourceful and driven mommy friend. In 2023, we brought our idea to life, defining the project scope, training other moms in blogging, and strategizing scalability. Above all, we had a ton of fun working on this project.",
      details: [
      "This was my friends idea and I helped her execute it. She's a highly resourceful individual and always keen in helping others succeed, whether its mottherhood or something related to career. This was a way for her to share her learnings while parenting a baby in the middle of a pandemic and we see it grow slowly to become a place where other mom's can share their experiences as well.",
      "I learned how important it was to not assume someone else's knowledge level when it comes to technology. Having been a blogger for a while myself, I took my experience for granted. But, it was an altogether different experience to guide someone else to do it.",
      "Check out the live link. This is a functional blog that my friend uses actively and there's a readership of atleast 30+ individuals at this time. We are still growing!",
      "My friend wanted to have an option to write in our native language, Marathi. WIX currently does not support this and I'd love to explore this further with a different platform or develop my own.",
      "We have not yet discussed further features to add, but, adding a forum section where different conversation threads can exist might be of soem value.",
      "Over 130 people have accessed this website to read our blog, and we have received compliments on the design as well as constructive criticism on the usability. Initial tests exposed a few issues with the responsiveness of the website on multiple devices. I've taken efforts after that to make it more mobile friendly and responsive.",
    ],
    github: null,
    live: "https://www.themomstalk.com/",
    media: `${process.env.PUBLIC_URL}/MomsTalk.png`,
    stack: () => {
      const icons = ["wix", "canva"];
      return <Icons size={30} iconNames={icons} descShowFlag={false} />;
    },
  },
};

export default projectsData;
