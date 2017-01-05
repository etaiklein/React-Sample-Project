# React-Sample-Project
A single page React app with responsive design. 

Keywords: flexbox, API, responsive, redux, middleware, react

### Challenge

"Your task is to create a single page app which shows artist images, names and artist station descriptions in a responsive web design. There are two steps to this test. The first (Frontend) showcases your presentation layer skills, and the second shows your ability to build a Node service and render resulting data using a JS framework of your choice."

#### Frontend
- [x] When the browser window is set to 768px or less, show the images in a 2x3 grid
- [x] When the browser window width is set to 769px or more, show the images in a 3x2 grid
- [x] The full row of images should be completely visible within the browser width at all times, and the transition between 2x3 and 3x2 should be made as smooth as possible
- [x] Images should grow in size (so long as they are completely visible within the browser) until they reach 250px width
- [x] Seed the data (provided)

#### React/Node
- [x] Create a search box on the SPA
- [x] Create a Node service which accepts the text string entered into the search box and returns up to the first 6 artist results via API
- [x] Create a JS template that renders by default the grid from the frontend test
- [x] Integrate the JS template into the SPA from the frontend test
- [x] Searches should cause the JS template to replace the default data in the grid with the results from the Node web service.

## Available Scripts

In the project directory, you can run:

### `npm install`

Install the dependencies in the local node_modules folder.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

### `npm t`

Runs Jest tests. All actions and reducers are mocked and testable.