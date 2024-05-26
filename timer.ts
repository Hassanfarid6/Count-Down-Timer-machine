#! /usr/bin/env node

import inquirer from "inquirer";

async function timer() {
   let input = await inquirer.prompt({
       name: "countTimer",
       type: "number",
       message: "please enter time between {1-60}",
       validate:(Number =>{
           if(Number < 1 || Number > 60){
               return "Please Enter a Number Between 1 and 60";
             }else{
             return true;}
   })
       
   })
        
       let count = 0
       let starttime =  setInterval(function(){
           count++
       let cond = count <= 9? `00.0${count}`: `00.${count}`;
       console.log(cond);
       if (count === input.countTimer){
           clearInterval(starttime)
       }
       },1000)

}
timer()