import {z} from 'zod'

export const userNameValidation = z
            .string()
            .min(3, 'username must be atleast 3 char')
            .max(25, 'username should not be more than 25 char')
            .regex(/^[a-zA-Z0-9@_]+$/, 'username must not contain special char')

export const signUpSchema = z.object({
    username: userNameValidation,
    email: z.string().email({message: 'Invalid Email address'}),
    password: z.string().min(6, {message: 'password must be at least 6 charecter'}),
})