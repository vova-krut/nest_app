import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ example: "vthehang@gmail.com", description: "User's email" })
    readonly email: string;
    @ApiProperty({ example: "root", description: "User's password" })
    readonly password: string;
}
