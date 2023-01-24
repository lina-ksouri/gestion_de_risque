import { Class } from "./class";
import { Type } from "./type";
import { User } from "./user";


export class Entities {
    name! :string;
    active! :boolean;
    owned_by! : User[];
    type! : Type;
    compliance_Score_Percentage! : number;
    location! : string;
    description! : string;
    
    classe! :Class;


}
