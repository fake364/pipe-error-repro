import {
    Body,
    createHandler,
    Post,
    Res,
    ValidationPipe
} from 'next-api-decorators';
import type { NextApiResponse } from 'next';
import { StatusCodes } from 'http-status-codes';
import CommentEntity from "../../src/classes/CommentEntiry";

class CommentsHandler {
    @Post()
    async createComment(
        @Body(ValidationPipe) { text, userId, postId }: CommentEntity,
        @Res() res: NextApiResponse
    ) {
        try {
            return {text:"success"};
        } catch (e) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: e });
        }
    }
}

export default createHandler(CommentsHandler);