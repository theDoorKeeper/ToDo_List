import { ID } from "./uniqueID";

class folder{
    constructor(name,id,content){
        this.name=name;
        this.id=ID();
        this.content=[];

    }
}  


export{folder}