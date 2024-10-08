import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class userDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}