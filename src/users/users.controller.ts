import { ValidationPipe } from "./../pipes/validation.pipe";
import { BanUserDto } from "./dto/ban-user.dto";
import { RolesGuard } from "./../auth/roles.guard";
import { User } from "./users.model";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import {
    Body,
    Controller,
    Get,
    Post,
    UseGuards,
    UsePipes,
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { Roles } from "src/auth/roles-auth.decorator";
import { AddRoleDto } from "./dto/add-role.dto";

@ApiTags("Users")
@Controller("users")
export class UsersController {
    constructor(private userService: UsersService) {}

    @ApiOperation({ summary: "User creation" })
    @ApiResponse({ status: 200, type: User })
    @UsePipes(ValidationPipe)
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

    @ApiOperation({ summary: "Give the role" })
    @ApiResponse({ status: 200 })
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    @Post("/role")
    addRole(@Body() dto: AddRoleDto) {
        return this.userService.addRole(dto);
    }

    @ApiOperation({ summary: "Ban user" })
    @ApiResponse({ status: 200 })
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    @Post("/ban")
    ban(@Body() dto: BanUserDto) {
        return this.userService.ban(dto);
    }
}
