<p align="center">
    <br>
    <img src="https://raw.githubusercontent.com/ecrows/open-model-cards/master/docs/open_model_cards_logo.png" width="380"/>
    <br>
<p>
<h3 align="center">
<p>Visually compelling and portable ML model reporting for everyone. 
</h3>

<br/>

## What is Open Model Cards?

Increasingly, ML researchers and developers are asked to provide documentation that covers the ethical considerations and limitations of machine learning models that they develop.  While scientific papers are often the best source of documentation for a model, there is a genuine need to communicate findings in an accessible way outside the scientific community, such that they can reach legal experts, policymakers, journalists, and the general public.

Web-based formats are ideal for this kind of communication, but not all machine learning developers are web developers, and producing compelling web-based documentation can be time-consuming.  As this documentation is often made with non-technical stakeholders in mind, making sure it is both easily accessible and easily understood is important.

Open Model Cards solves this problem by streamlining the production of web-based ML model documentation in an easy to share and consume format.  Leveraging `create-react-app`, we provide a simple method for compiling model documentation into a single HTML file that can be hosted on a documentation server or personal website, or printed as a PDF for offline sharing.

The Open Model Cards template is based on the beautiful ["Google Model Cards"](https://modelcards.withgoogle.com/model-reports) released by Google Research alongside the paper ["Model Cards for Model Reporting"](https://research.google/pubs/pub48120/), and inspired by the goals of projects like [presskit.html](https://github.com/pixelnest/presskit.html) that aim to improve the experience of developers.

Open Model Cards is currently targeted at developers who are comfortable running a few command line commands and writing documentation in Markdown format, though we're continuing to try to streamline the process.


## Quickstart

1. [Install Node](https://nodejs.org/en/download/) on your development machine, if you haven't already.
2. Clone this repository, navigate to the directory using a terminal, run `npm install`, and `npm start`
3. The model card webpage will appear and dynamically update.  Add a new YAML defition to `src/models/`, or edit the existing example file.  Text is rendered from [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) so you can easily add simple formatting and links.  Place images under `public/`, as in the example.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more about how this works behind the scenes in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) and [React documentation](https://reactjs.org/).

