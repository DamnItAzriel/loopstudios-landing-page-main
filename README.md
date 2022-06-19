# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./Loopstudios%20landing%20page%20desktop.png)
![](./Loopstudios%20landing%20page%20mobile.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Loopstudios Landing Page](https://loopstudios-landing-page-main-opal.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

For first time set up heroImage and added Overlay text to it. Used pos-rel and text-overlay classes to set position for heroImage and heroText.

Also for first time used responsive web design knowledge learnt from Kevin Powell's course.


To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

### Continued development

- Add styled bottom radius for links.
- Adding color to mobile menu interactive states. Involves removing background image and adding black background to menu. (Faced problem removing image because of the way i defined images using <picture> tag.)
- Update media queries from >375px, >720px to wider and better range like >375px, >600px, >900px, >1200px, >1800px.
- Adding image gradient for better reading ability of text on the website. (Might require changing HTML for images from <picture> tag was to background url() in css).



### Useful resources

- [Gradient Overlay to background image](https://webdevetc.com/blog/how-to-add-a-gradient-overlay-to-a-background-image-using-just-css-and-html/) - Useful resource making text better for readin gin contrast to background.
- [Gradient Overlay to background image](https://css-tricks.com/design-considerations-text-images/) - Useful resource making text better for readin gin contrast to background.
- [Half Underline](https://stackoverflow.com/questions/8572952/border-length-smaller-than-div-width?noredirect=1&lq=1) - making bottom radius center aligned but smaller in length compared to parent.

## Author

- Website - [Website in production](https://www.twitter.com/damnitazriel)
- Frontend Mentor - [@damnitazriel](https://www.frontendmentor.io/profile/damnitazriel)
- Twitter - [@damnitazriel](https://www.twitter.com/damnitazriel)


## Acknowledgments

- Would like to thank kevin powell for improving my responsive design. Shout out to frontend mentors. And one shout to me please for conquering my fear of not being good enough to crack this kind of challenge.