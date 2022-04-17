import { AppController } from "./app.controller";
import { Module } from "@nestjs/common";

@Module({
    controllers: [AppController],
    providers: [],
})
export class AppModule {}
