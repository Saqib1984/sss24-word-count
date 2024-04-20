#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green.bold("\t Welcome To SSS Word Count Project \t"));
let condition = true;
while (condition) {
    // word count project
    // First i installed inquire
    // Second i have to use await function by using inquirer
    let answer = await inquirer.prompt({
        type: "input",
        name: "sentence",
        message: chalk.yellow.bold("Please enter a sentence you want to count words."),
    });
    // i will make variable by using the answer of await function and use trim and split method.so that may remove the extra spaces and get seperate words through split method
    let word_count = answer.sentence.trim().split(" ");
    // print the statmenet.
    console.log(chalk.green.bold(`Your sentence count is ${word_count.length} words`));
    console.log(chalk.yellow.bold("\t Thank You For Using Words Count Project.\t"));
    let exit = await inquirer.prompt({
        name: "exit",
        type: "confirm",
        message: chalk.bgRed(`If You Want To Count Another Words, Please Enter "Yes", For Exit Enter "No"`),
        default: false,
    });
    condition = exit.exit;
}
