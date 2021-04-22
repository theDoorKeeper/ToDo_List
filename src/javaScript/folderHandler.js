import { shelf } from ".";
import { domHandler } from "./domHandler";
import { folder } from "./folderCLass";

const folderHandler=(function() {   
      
      const _getTitle = ()=>{
        return document.querySelector("#titleProject").value
      }



      const _generateFolder = ()=>{
        return  new folder(_getTitle());
      }



      const storeFolder = (shelf)=>{
          shelf.push(_generateFolder())
      }


      const _getEditedTitle=()=>{
        return document.querySelector("#editTitleProject").value
      }


      const edit=(id)=>{
        for( let i = 0; i < shelf.length; i++){ 
          
            if ( shelf[i].id === id) { 
        
                shelf[i].name=_getEditedTitle();
            }
        
        }
        domHandler.createFolderDivs(shelf);
    }
      


      const deleteFolder = (id)=>{ 
          for( let i = 0; i < shelf.length; i++){ 
          
              if ( shelf[i].id === id) { 
          
                  shelf.splice(i, 1); 
              }
          
          }
          domHandler.createFolderDivs(shelf);
      }


return {storeFolder,edit,deleteFolder}
})();

export {folderHandler}