import { PercentPipe } from "@angular/common";
import { QueryList } from "@angular/core";
import { Class } from "./class";

export class Type {
    name!: string;
    compliance_Score_Percentage!: string ;
    active!: boolean;
    classe! :  Class[];
    description!: string;
    
    
}
