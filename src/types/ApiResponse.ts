import { Message } from "@/modals/User.model";


export interface ApiResponse {
    success: boolean,
    message: string,
    isAcceptingMessages?: boolean,
    messages?:Array<Message>
}