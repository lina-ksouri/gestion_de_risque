import { Entities } from "./entities";
import { Level } from "./level";
import { User } from "./user";

export class Process {
    name! : string;
    owner! : User;
    level! : string;
    parent! : Process;
    entity! : string;
    attachment!: File ;
    name_attachment!: string;
}
