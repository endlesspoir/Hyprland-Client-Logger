#!/usr/bin/env node

const{spawn} = require("child_process");
const fs = require("fs");
const path = require("path");

const months = { 
    1:"January", 2:"February", 3:"March", 4:"April",
    5:"May", 6:"June", 7:"July", 8:"August",
    9:"September", 10:"October", 11:"November", 12:"December",
};

const logDir = path.join(__dirname,"logs")

function getLogFile(){
    const today = new Date().toISOString().split("T")[0];
    return path.join(logDir,today.split("-")[0],months[parseInt(today.split("-")[1])],`${today}.json`)
}

if(!fs.existsSync(logDir)){
    fs.mkdirSync(logDir,{recursive:true})
}

function addLog(line){
    const timestamp = new Date().toISOString().split("T")[1].split('.')[0];
    const logEntry ={timestamp,log : line};
    let logs =[];
    const logFile = getLogFile();
    const folder = path.dirname(logFile);

    console.log(folder);
    if(!fs.existsSync(folder)){
        fs.mkdirSync(folder,
            {recursive:true}
        )

    }
    

    if(fs.existsSync(logFile)){
        try{
            logs = JSON.parse(fs.readFileSync(logFile,"utf-8"));


        }catch(err){
            console.log("Ошибка чтения")
        }
        
        logs.push(logEntry);

      

    }
    fs.writeFileSync(logFile,JSON.stringify(logs,null,2),"utf8");

    
}

const proc = spawn("hyprwatch", ["clients"], {
  stdio: ["ignore", "pipe", "inherit"],
});

proc.stdout.on("data",(data)=>{
    const line = data.toString().trim();
    if(!line)return;
    
    addLog(line);
 
})





