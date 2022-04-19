import { RolesGuard } from "./../auth/roles.guard";
import { User } from "./users.model";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { Roles } from "src/auth/roles-auth.decorator";

@ApiTags("Users")
@Controller("users")
export class UsersController {
    constructor(private userService: UsersService) {}

    @ApiOperation({ summary: "User creation" })
    @ApiResponse({ status: 200, type: User })
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto);
    }

    @ApiOperation({ summary: "Get all users" })
    @ApiResponse({ status: 200, type: [User] })
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    @Get()
    getAll() {
        return this.userService.getAllUsers();
    }
}
