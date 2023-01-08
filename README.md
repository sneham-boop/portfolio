# Sneha Mahajan - Web Developer Portfolio

This is my portfolio showing the applications/projects I have worked on so far.

It was created with ReactJS, SASS, React Router. useContext hook was used for implementing dark/light modes. I used gitHub pages deploy this website, which was made infinitely simpler via the gh-pages package.

I've also experimented a bit with using [GSAP](https://github.com/greensock/GSAP) for animation and simple visual effects.

### Live link: [Sneha Mahajan](https://snehakmahajan.com/)

### Ideas:

1. I ran into GSAP when I found this super cool [cursor](https://codepen.io/clementGir/pen/RQqvQx) implementation by [Clement Girault](http://clementgirault.com/). I decided to dive in and understand more about the GSAP library and re-create the cursor and other animated SVG elements.

2. Font's and other icons have been used mainly via Google's free font and icon library. I've used [Simple Icons](https://github.com/simple-icons/simple-icons) for the skill icons.

## App screen capture

This screen capture shows the homepage for my portfolio.
![](public/images/Homepage.gif)

## Tech Stack / Dependencies

- react-simple-icons
- bootstrap
- classnames
- gsap
- normalize.css
- react
- react-bootstrap
- react-dom
- react-router-dom
- react-scripts
- sass

## Learning Experiences

- The power of modular components combined with SASS.
- The power of CI/CD - something I'd love to explore further.
- Loved learning how powerful a library like gsap can be.
- Re-using components
- Client side vs server side rendering. My routes weren't refreshing as expected and it turned out I had missed a crucial detail from [create-react-app](https://create-react-app.dev/docs/deployment#github-pages)'s deployment section. Github's gh-pages do not support single page apps, which is why my links weren't refreshing. Thankfully, I found code by [Rafael Pedicini]("https://github.com/rafgraph/spa-github-pages") which fixes this issue.

## Future Features

- An FAQ page.
- A hidden section for fun.
- More interactive elements on the play page.

## Known Issues

- The multiple SVG elements in the about section make it slightly glitchy.
- I need to remove the black cursor for non-PC based devices since it feels visually redundant.
