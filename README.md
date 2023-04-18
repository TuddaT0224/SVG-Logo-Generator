# SVG-Logo-Generator

## Description

Generate an SVG logo with your choice of shape (circle, square, or triangle), shape color, text (limit of 3 characters), and text color. Shape and text colors can be chosen using color keywords or hexadecimal numbers.

[![NodeJS]()]
[![JestBadge]
[![License: MIT]() ]

Watch this video on how to create a logo with SVG file [video](<iframe src="https://drive.google.com/file/d/10pLUlGms6PWGVSLMKZo3uDJ0t0fT_CHz/preview" width="640" height="480"></iframe>)

GitHub Url:https://github.com/TuddaT0224/SVG-Logo-Generator#readme
WebBrowser Url:https://tuddat0224.github.io/SVG-Logo-Generator/

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation 

Check if you have Node.js installed by typing "node -v" in your command line. If node is not installed, visit the [Node.js website](https://nodejs.org/en) to install. Next, clone this project repository to your computer. Use the command "npm install" to install dependecies. Use the command "npm install --save-dev jest" to install Jest as a devDependency.

## Usage

Invoke the application by typing "node index.js" or by typing the script "npm start" in the terminal's command line. You will be asked a series of questions before your logo is generated.If you do not enter a valid color keyword or hexadecimal number, you will be prompted to try again. If your text contains more than 3 characters, you will be prompted to try again. Once all prompts have been answered with accepted values, your new logo will be generated with the file name 'logo.svg' in the 'examples' folder. Refer back to the video posted in the description as needed.

## License
[MIT License]()

## Contributing

This project was created as a challenge assignment for MSU full stack Bootcamp.

## Tests
Each shape class (Circle, Square, and Triangle) is tested for a render() method that returns a string for the corresponfing SVG file matching color and text requests. Type "npm test" in the command line and Jest will run all three tests.

## Questions

You can contact me for questions at:

GitHub [TuddaT0224](https://github.com/TuddaT0224)

Email: trezzt0224@gmail.com