import { Risque } from "./risque";
import { User } from "./user";

export class Control {
    id_control!: number;
    name!: string;
    description!: string;
    attestation! : string;
    risk!: Risque;
    user_name!: string;
}
