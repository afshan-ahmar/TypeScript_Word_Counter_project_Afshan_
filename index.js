#!/usr/bin/env node
// importing inquirer and chalk packages  
import inquirer from "inquirer";
import chalk from "chalk";
//display a colourfull welcome message
console.log(chalk.bold.cyanBright("\n\t \t Code With Afshan -Word Counter"));
console.log("=".repeat(60));
//prompt the user to enter a sentences
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);
//trimming the sentence split the sentence into an array
let words = answers.sentence.trim().split("");
//Analysis  of  user input sentence
console.log("*".repeat(60));
console.log(chalk.bold("SENTENCE WORDS"));
console.log(words);
console.log(chalk.bold(`\n WORD COUNT: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));
