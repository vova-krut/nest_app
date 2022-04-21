import { Role } from "./../roles/roles.model";
import { ApiProperty } from "@nestjs/swagger";
import {
    BelongsToMany,
    Column,
    DataType,
    Model,
    Table,
} from "sequelize-typescript";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({ example: "1", description: "Unique id" })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({ example: "vthehang@gmail.com", description: "User's email" })
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    email: string;

    @ApiProperty({ example: "root", description: "User's password" })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string;

    @ApiProperty({ example: "true", description: "Banned or not" })
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
    })
    banned: boolean;

    @ApiProperty({ example: "Scamming", description: "Ban reason" })
    @Column({
        type: DataType.BOOLEAN,
        allowNull: true,
    })
    banReason: boolean;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];
}
