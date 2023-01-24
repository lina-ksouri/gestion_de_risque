import { Category } from "./category";
import { Process } from "./process";

export class Risque {
    name !: string;
    cause !:string;
    impact !: number;
    probability !: number;
    niv_maitrise : number = 0;
    risk_net !: number;
    risk_brut !: number;
    last_update !: Date;
    process !: string[];
    category !: string;
    

}
