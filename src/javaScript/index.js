/* Interface should have :
left banner with button to add Projects ;
middle banner to add To dos, 
TO DOS must have : 
Title , 
Description,
Date,
checklist,
priority



USE A LIST OF TASKS AND LOOP TO DISPLAY IT

MAYBE MAKE A PROJECT CLASS
*/

import { domHandler } from "./domHandler";
import { folderHandler } from "./folderHandler";
import { openProjectForm, closeProjectForm } from "./form";




let shelf=[];



document.querySelector("#newProject").addEventListener("click",(e)=>{
/* shelf.push(new folder("movies to watch",null));
console.log(shelf) */
   openProjectForm()
   console.log(shelf)
})



document.querySelector(".Projectcancel").addEventListener("click",(e)=>{
   e.preventDefault()
   closeProjectForm()
})

document.querySelector(".Projectadd").addEventListener("click",(e)=>{
   e.preventDefault();
   folderHandler.storeFolder(shelf);
   domHandler.createFolderDivs(shelf);
   closeProjectForm();
   console.log(shelf)
})


/* document.querySelector(".open-button").addEventListener("click",(e)=>{
   
   openForm()
}) */

/* 
 document.querySelector(".cancel").addEventListener("click",(e)=>{
   e.preventDefault()
   closeForm()
})  */

/*  document.querySelector(".add").addEventListener("click",(e)=>{
   e.preventDefault();
   taskHandler.storeTask(id)
   console.log(shelf)

    shelf[0].content.push(new Todo("lordof the rings","great movie"));
   console.log(shelf[0]) 

})  */


export{shelf}
