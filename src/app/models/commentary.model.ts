import { User } from "./user.model";

export interface Commentary {
    id : number;
    content : string;
    gameId : number;
    user : User;
}