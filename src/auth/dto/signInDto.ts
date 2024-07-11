import { PartialType } from "@nestjs/mapped-types"
import { SignUpDto } from "./signUpDto";

export class SignInDto extends PartialType(SignUpDto){
    // name: string
    // userName: string
    // email: string
    // password: string
    // phone: string
    // dateOfBirth: string
    // gender: "male" | "female"
}
