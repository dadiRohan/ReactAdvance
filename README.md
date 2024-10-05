# Basic to Advance React Learning

#URL : https://66dc79ef0ae2360008740cd7--splendorous-bunny-536637.netlify.app/

# Important Commands :
(1) npm init
 - it give details for json
   
(2)  npm install -D parcel
     npm install -D parcel-bundler 
 - parcel can be used to hold all packages for project
   
(3) npx parcel index.html
 - npx mostly used for the execution for project
   
(4) npm run start
 - it will start on local machine
   
(5) npm run build
 - it will build for production run

# Important Points :
(1) At package.json and package.lock having symbols carot(^) or tild(~). So Carot can be used for upgrading version which is nearest and tild can be used for upgrade direct latest version.

(2) At package.json "start" can be used for run on dev machine & "build" can be used for run on production.

(3) JSX - Its not HTML in JS. Structure is JSX => React.createElement => ReactElement.js Object => HTML Element (render)

# Additional Extension for VS Code :
(1) Prettier Formater for Visual Studio Code.

(2) Bracket Pair Colorization Code.

(3) Vs Code ESLint extension.

# React Components : 
(1) Class Based Components (old approach)

(2) Functional Based Component (new approach)

- When Component inside component is called as Component Composition.
- JSX always Sanitize variable call API for prevent XSS attacks.

# React Hooks :
At React for doing operations and callback apis used hook these are inbuild react components which used for do operations smootly.

(1) useState() : use state hook using for initial state and its updated state. when usestate function at initially set at const variable array used 2 fields. Its syntax is 

`const [userData, setUserData] = useState([]);`

(2) useEffect() : use effect hook using for lifecycle of api because when calling api then async and await has to call and sometime updated data api has to call so useEffect() used. its second parameter is mostly empty array but we should used for update data in lifecycle of API. Its syntax is

`useEffect(
 () => {
  setUserData(data?.list)
 }
,[])`

(3) useParams() : This hook can be used when at browser route id or slug as parameter passing and has to fetch inside component then this hook should be used.

(4) useContext() : This hook can be used for manage used data or details for example UserName or Active Status and can be accessed that data everywhere in applications. We can also pass UserName when we get from Authentication API and pass through this hook. Its advantage is one we declare any context we should call it functional based component as well as class based components (its syntax for calling is different).

# CSS Properties :
At React should used different types of css stylings which are Scss, Sass, Style Component, Tailwind, Material UI, Chakra UI etc.
- Commands to install Tailwind :
  
  (I) npm install -D tailwindcs postcss
  
  (II) npx tailwindcss init
  
- For VS Code Extension : Tailwind CSS IntelliSense  

# Redux : 
Redux is Similar to React Library but its not compulsary to use redux. at large scale applications redux can be used for hold and process data in whole application just like useContext. To use redux has to setup in react application has to follow below given steps : 
- Install @reduxjs/toolkit & react-redux
- Connect our Store to our app
- Slice (CartSlice)
- dispatch (action)
- Selector

  


