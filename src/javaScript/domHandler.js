
import { folderHandler } from "./folderHandler";
import { openEditProjectForm , closeEditProjectForm, openForm, closeForm} from "./form";
import { taskHandler } from "./taskHandler";
import { createHtmlElement } from "./uniqueID";

const domHandler= (function() {   


            const main=document.querySelector(".main");
            const folderContainer=document.querySelector(".folderContainer");
            const sideBar=document.querySelector(".sidebar")
            const taskContainer=document.querySelector(".taskListContainer")

            const _renderFolder=(shelf)=>{ shelf.forEach( folder => {
                const renderTasks=()=>{
                    folder.content.forEach(task => {
                        const taskSkeleton=createHtmlElement("div",task.id,["task"],null);
                        taskContainer.appendChild(taskSkeleton);



                        const checkBtnContainer=createHtmlElement("label",task.id,["switch"],null);
                        taskSkeleton.appendChild(checkBtnContainer);

                        const checkBtn=createHtmlElement("input",task.id,["checkbox"],null)
                        checkBtn.setAttribute("type","checkbox");
                        checkBtnContainer.appendChild(checkBtn);

                        const slider=createHtmlElement("span",task.id,["slider","round"],null)
                        checkBtnContainer.appendChild(slider);



                        taskSkeleton.innerHTML+=`<div> ${task.title}   Description: ${task.description}</div>  <div> Date : ${task.date} </div>`;


                        const btnWrapper=createHtmlElement("div",null,["buttonWrap"],null)
                        taskSkeleton.appendChild(btnWrapper);

                        const editBtn=createHtmlElement("button",task.id,["taskIcon"]);
                        const editIcon=createHtmlElement("i",task.id,["fa","fa-edit"]);

                        btnWrapper.appendChild(editBtn);
                        editBtn.appendChild(editIcon);



                        const confirmEditBtn=createHtmlElement("button",task.id,["taskIcon"],null)
                        confirmEditBtn.style.display="none";
                        const confirmEditIcon=createHtmlElement("i",task.id,["fa","fa-check-circle"]);

                        
                        btnWrapper.appendChild(confirmEditBtn);
                        confirmEditBtn.appendChild(confirmEditIcon)


                    
                        const deleteBtn=createHtmlElement("button",task.id,["taskIcon"]);
                        const deleteIcon=createHtmlElement("i",task.id,["fa","fa-trash"]);
                        
                        btnWrapper.appendChild(deleteBtn);
                        deleteBtn.appendChild(deleteIcon);

                        deleteIcon.addEventListener("click",e=>{
                            taskContainer.innerHTML="";
                            taskHandler.remove(e.target.id,folder);
                            renderTasks();
                        })
                        editIcon.addEventListener("click",e=>{
                            openForm();
                            e.target.style.display="none";
                            confirmEditBtn.style.display="";

                        })

                        confirmEditIcon.addEventListener("click",e=>{
                            taskContainer.innerHTML="";
                            e.target.style.display="none";
                            editBtn.style.display="";
                            console.log(e.target.id)
                            taskHandler.edit(e.target.id,folder);
                            renderTasks();
                            closeForm();
                            

                        })


                        taskSkeleton.addEventListener("click",e=>{
                            const isButton = e.target.className === "slider round";
                            if (!isButton) {
                               return;
                               }    

                               taskSkeleton.classList.toggle("taskComplete")


                        })




                    });
                   }


                    const eachFolder =createHtmlElement("div",folder.id,["folder"],folder.name ) ;

                     folderContainer.appendChild(eachFolder);

                     eachFolder.addEventListener("click",e=>{
                        if(main.childNodes[9])
                        {
                             main.childNodes[9].remove()
                                                     }                               
                        const taskList=createHtmlElement("div",e.target.id,["tasklist"],null)
                        main.appendChild(taskList);


                        const addTask=createHtmlElement("button",folder.id,["taskIcon","addTask"],null);
                        const addTaskIcon=createHtmlElement("i",null,["fa","fa-plus-square"]);

                        taskList.appendChild(addTask);
                        addTask.appendChild(addTaskIcon)

                        const confirmBtn=createHtmlElement("button",folder.id,["taskIcon"],null);
                        const confirmIcon=createHtmlElement("i",folder.id,["fa","fa-check"],null);
                        confirmBtn.style.display="none"; 

                        taskList.appendChild(confirmBtn);    
                        confirmBtn.appendChild(confirmIcon)                         
                        taskContainer.innerHTML="";

                        renderTasks();


                        taskList.addEventListener('click', (e) => {
                            const isButton = e.target.className === "fa fa-plus-square";
                            if (!isButton) {
                               return;
                               } 
                               openForm();
                                
                               confirmBtn.style.display="";
                            })                                     
                            taskList.addEventListener('click', (e) => {
                                const isButton = e.target.className === "fa fa-check";
                                if (!isButton) {
                                   return;
                                   } 
                                   taskContainer.innerHTML="";

                                   taskHandler.storeTask(e.target.id);
                                   renderTasks();

                                    closeForm();
                                    confirmBtn.style.display="none";
                                })     




                     })

                     

                    const deleteFolder = createHtmlElement("button",null,["taskIcon"],null);
                    const deleteFolderIcon=createHtmlElement("i",null,["fa","fa-trash"],null);

                    eachFolder.appendChild(deleteFolder);
                    deleteFolder.appendChild(deleteFolderIcon);


                     const editFolderBtn=createHtmlElement("button",null,["taskIcon"],null);
                     const editFolderIcon=createHtmlElement("i",null,["fa","fa-pencil"]);

                     eachFolder.appendChild(editFolderBtn);
                     editFolderBtn.appendChild(editFolderIcon);

                    const eachFoldersConfirmEditbtn = createHtmlElement("button",null,["taskIcon"],null);
                    const confirmIcon= createHtmlElement("i",null,["fa","fa-check"]);


                    eachFoldersConfirmEditbtn.style.display="none";
                    eachFolder.appendChild(eachFoldersConfirmEditbtn);
                    eachFoldersConfirmEditbtn.appendChild(confirmIcon);


                                })  

                     //ading event listener for each DELETE button using bubling
                     sideBar.addEventListener('click', (e) => {
                     const isButton = e.target.className === "fa fa-trash";
                     if (!isButton) {
                        return;
                        } 
                        folderHandler.deleteFolder(e.target.parentNode.parentNode.id);
                        closeEditProjectForm();
                     })
                                   
                      //ading event listener for each EDIT button using bubling
                      sideBar.addEventListener('click', (e) => {
                        const isButton = e.target.className === "fa fa-check";
                        if (!isButton) {
                           return;
                           }
                           console.log(e.target.parentNode.parentNode.childNodes[2])
                           e.target.parentNode.parentNode.childNodes[2].style.display=""
                            e.target.style.display = "none";
                            folderHandler.edit(e.target.parentNode.parentNode.id);
                            closeEditProjectForm()
                        })

                        //ading event listener for each CONFIRM button using bubling

                        sideBar.addEventListener('click', (e) => {
                            const isButton = e.target.className === "fa fa-pencil";
                            if (!isButton) {
                               return;
                               } 
                               e.target.parentNode.parentNode.childNodes[3].style.display=""
                                e.target.style.display = "none";
                                
                                openEditProjectForm();
                            })



    


                 }



            const createFolderDivs = (shelf)=>{
                folderContainer.innerHTML="";
                _renderFolder(shelf);
            }   
            
            


            

            
  




         return {createFolderDivs}   


})();
export {domHandler}