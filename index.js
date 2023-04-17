const filesystem = require('./node_modules/graceful-fs/graceful-fs.js')
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./lib/shapes.js');

// Defining a Svg class for the three methods we will be using for rendering
class Svg {
    constructor() {
        this.textElement = ''
        this.shapeElement = ''
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape) {
        this.shapeElement = shape.render()
    }

}

// This is to set up the array of questions that you will be prompted to use
const questions = [
    {
        type: "input",
        name: "text",
        message: "TEXT: Enter up to (3) Characters:",
    },
    {
        type: "input",
        name: "text-color",
        message: "TEXT COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "input",
        name: "shape",
        message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):"
    },
    {
        type: "list",
        name: "pixel-image",
        message: "Choose which Pixel Image you would like?",
        choices: ["Circle", "Square", "Triangle"],
    },
];

//Creating a function to write the data to svg file
function writeToFile(fileName, data) {
    console.log("Writing [" + data + "] to file [" + fileName + "]")
    filesystem.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Well done, you Generated a logo.svg!");
    });
}

async function init() {
    console.log("Starting init");
	var svgString = "";
	var svg_file = "logo.svg";

    // This queues up the questions
    const answers = await inquirer.prompt(questions);


    //Users answers
    var user_text = "";
	if (answers.text.length > 0 && answers.text.length < 4) {
        //if they enter in 1-3 character then it will be a valid entry
        user_text = answers.text;
    } else {
        //0 or 4+ characters will equal a invalid entry
        console.log("Invalid user text field detected! Please enter 1-3 Characters, no more and no less");
        return;
    }


    console.log("User text: [" + user_text + "]");
	//user font color
	user_font_color = answers["text-color"];
	console.log("User font color: [" + user_font_color + "]");
	//user shape color
	user_shape_color = answers.shape;
	console.log("User shape color: [" + user_shape_color + "]");
	//user shape type
	user_shape_type = answers["pixel-image"];
	console.log("User entered shape = [" + user_shape_type + "]");

    // Shape
    let user_shape;
    if (user_shape_type === "Square" || user_shape_type === "square") {
        user_shape = new Square();
		console.log("User selected Square shape");
    }
    else if (user_shape_type === "Circle" || user_shape_type === "circle") {
        user_shape = new Circle();
		console.log("User selected Circle shape");
    }
    else if (user_shape_type === "Triangle" || user_shape_type === "triangle") {
        user_shape = new Triangle();
		console.log("User selected Triangle shape");
    }
    else {
        console.log("Invalid shape!");
    }
    user_shape.setColor(user_shape_color);

    // Create a new Svg
    var svg = new Svg();
    svg.setTextElement(user_text, user_font_color);
	svg.setShapeElement(user_shape);
	svgString = svg.render();

    //Print shape to the console log
    console.log("Displaying shape:\n\n" + svgString);
    //document.getElementById("svg_image").innerHTML = svgString;

    console.log("Shape generation complete!");
	console.log("Writing shape to file...");
	writeToFile(svg_file, svgString); 

}
init()