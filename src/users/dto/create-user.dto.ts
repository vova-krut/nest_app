import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length, IsEmail } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: "vthehang@gmail.com", description: "User's email" })
    @IsString({ message: "Email has to be a string" })
    @IsEmail({}, { message: "Email is incorrect" })
    readonly email: string;

    @ApiProperty({ example: "root", description: "User's password" })
    @IsString({ message: "Password has to be a string" })
    @Length(4, 16, {
        message: "Password has to be between 4 and 16 characters",
    })
    readonly password: string;
}
