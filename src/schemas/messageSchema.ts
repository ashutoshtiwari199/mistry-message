import {z} from 'zod'

export const MessageSchema = z.object({
    content: z.string()
    .min(10, {message: 'Content must be at least of 10 charecters'}) 
    .max(300, {message: 'Content must be at least of 300 charecters'})
})