# bees-frontend-challenge

This is my implementation of the BEES Frontend Challenge. My name is Nelson Salles de Barros Filho, and I will be your guide.

## Libraries

This project was developed using the following libraries:

- React: 18.2.0
- React Router DOM: 6.3.0
- Styled Components: 5.3.5

For testing, the following libraries were used:
- Jest: 28.1.1
- Nock (for request mocking): 13.2.7
- React Testing Library: 8.0.1

For managing the global state I didn't use any external libraries, instead I relied on React's **useContext** feature and concentrated the states in the *App* (topmost) component

Also, I didn't use any design systems, I decided to make the  components from scratch using HTML tags, but please check out this one I created a while ago: https://www.npmjs.com/package/pure-ui-react

Ah, one more thing, I used Commitizen to format my commits; it's a really nice tool, and since I found out about it there's never been a single day I haven't used it

## Folder structure

For components and pages, I opted for using a similar (though slightly adapted) structure to Angular, like so:

|--src\
&nbsp;&nbsp;&nbsp;&nbsp;|--  components (or pages)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--  SomeComponent (or SomePage)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--  \_\_tests\_\_\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--  index.test.tsx\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--  index.tsx (the component/page itself)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--  styles.ts (styles, very conveniently named so)

Files that are assets (like images and fonts) were included in an *assets* folder in the root of the src directory. Requests are handled in files located in the *services* folder, and any utilities (configuration, breakpoints and colors for using in Styled Components, etc.) are inside the *utils* folder. Also, their respective tests are inside a \_\_tests\_\_ folder located inside of their directory. Like this:

|--src\
&nbsp;&nbsp;&nbsp;&nbsp;|--  utils\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--  config.ts\
&nbsp;&nbsp;&nbsp;&nbsp;|--services\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--  Brewery.ts\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--  \_\_tests\_\_\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--  Brewery.test.ts

Also, the *router* gets its own folder in src, where all pages are imported and, well, routed

## Running the project

But just me telling what a wonderful job I did is not enough, now is it? It's no good if you can't see it for yourselves. And doing that is really simple:
- Running **npm install** (or **yarn install** if you're into that kind of thing, though I do not recommend it) will install any dependencies needed
- Once all the dependencies are installed and set, running **npm start** or **yarn start** should do it, and the project will automatically open in *https://localhost:3000*

And I guess that's it! Any doubts or comments please reach out to me, and also feel free to check out my GitHub repository at https://github.com/YoguiSan
