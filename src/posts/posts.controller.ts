import { PostsService } from "./posts.service";
import {
    Body,
    Controller,
    Post,
    UploadedFile,
    UseInterceptors,
} from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("posts")
export class PostsController {
    constructor(private PostService: PostsService) {}

    @Post()
    @UseInterceptors(FileInterceptor("image"))
    createPost(@Body() dto: CreatePostDto, @UploadedFile() image) {
        return this.PostService.create(dto, image);
    }
}
