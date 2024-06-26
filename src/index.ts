#! /usr/bin/env node

const { Command } = require("commander");
const figlet = require ("figlet");
const fs = require("fs");
const path = require("path");

const program = new Command();

program
    .version("1.0.0")
    .description("An example CLI for managing a directory")
    .option("-l, --ls [value]", "List directory contents")
    .option("-m, --mkdir <value>", "Create directory")
    .option("-t, --touch <value>", "Create a file")
    .parse(process.argv);

const options = program.opts();

console.log(figlet.textSync("Dir Manager"));

export async function listDirCont(filepath: string){
    try{
        const files = await fs.promises.readdir(filepath);
        const detailedFilePromises = files.map(async (file: string) =>{
            let fileDetails = await fs.promises.lstat(path.resolve(filepath, file));
            const { size, birthtime } = fileDetails;
            return { filename: file, "size(KB)": size, created_at: birthtime};
        })

        const detailedFiles = await Promise.all(detailedFilePromises);
        console.table(detailedFiles);
    }
    catch(error){
        console.error("Error occurred while reading the directory", error);
    }
}

export function createDir(filepath: string){
    if(!fs.existsSync(filepath)){
        fs.mkdirSync(filepath);
        console.log("The directory has been created successfully");
    }
    else{
        console.log("The directory already exists")
    }
}

export function createFile(filepath: string){
    fs.openSync(filepath, "w");
    console.log("An empty file has been created");
}

if (options.ls){
    const filepath = typeof options.ls === "string" ? options.ls : __dirname;
    listDirCont(filepath);
}

if(options.mkdir) {
    createDir(path.resolve(__dirname, options.mkdir))
}

if(options.touch){
    createFile(path.resolve(__dirname, options.touch))
}

if(!process.argv.slice(2).length){
    program.outputHelp();
}