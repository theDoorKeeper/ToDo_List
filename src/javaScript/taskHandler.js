import { shelf } from ".";
import { Task } from "./taskClass";

const taskHandler =(function() {   
      
     const _getTaskInfo =()=>{
        return [document.querySelector("#title").value,document.querySelector("#description").value,document.querySelector("#date").value]
      }

     const _generateTask =()=>{
          return new Task(..._getTaskInfo())
      }

      const edit=(id,folder)=>{
        for( let i = 0; i < folder.content.length; i++){ 
          
            if ( folder.content[i].id === id) { 
        
                folder.content[i]=_generateTask();
            }
        
        }
    }


    const remove = (id,folder)=>{ 
      for( let i = 0; i < folder.content.length; i++){ 
      
          if ( folder.content[i].id === id) { 
      
              folder.content.splice(i, 1); 
          }
      
      }
  
  }
      
      const storeTask=(id)=>{
        let folder = shelf.find(folder=>folder.id===id);
        folder.content.push(_generateTask())
      }
        return {storeTask,edit,remove}

})();
export{taskHandler}