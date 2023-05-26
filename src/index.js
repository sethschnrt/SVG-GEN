const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateCircle = require("./shapes/circle");
const generateTriangle = require("./shapes/triangle");
const generateSquare = require("./shapes/square");

inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter three characters for your logo",
      validate: function (value) {
        if (value.length > 3) {
          return "Please enter more than 3 characters.";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "textColor",
      message:
        "Enter a color in the form of its corresponding keyword or its hex value for the logo text color:",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message:
        "Enter a color keyword or hexadecimal number for the shape color:",
    },
  ])
  .then((answers) => {
    let svgData;
    switch (answers.shape) {
      case "circle":
        svgData = generateCircle(
          answers.text,
          answers.shapeColor,
          answers.textColor
        );
        break;
      case "triangle":
        svgData = generateTriangle(
          answers.text,
          answers.shapeColor,
          answers.textColor
        );
        break;
      case "square":
        svgData = generateSquare(
          answers.text,
          answers.shapeColor,
          answers.textColor
        );
        break;
      default:
        console.log("Invalid shape.");
        process.exit(1);
    }
    fs.writeFile(
      path.join(__dirname, "../logo.svg"),
      svgData,
      "utf8",
      (err) => {
        if (err) {
          console.log("An error occured while generating the logo.");
          console.log(err);
        } else {
          console.log("Generated logo.svg");
        }
      }
    );
  });
