import { Role } from "./role";

export class User {
    id !: number;
    username: string="";
    password: string="";
    name: string="";
    role!: Role;
    email: string="";
    phone :string="";
    token: string="";
    block !: Boolean; 
}
