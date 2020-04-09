import { Router, Request, Response } from "express";
import { User } from "../models";
import { catchAsync, auth } from "../middleware";

const router = Router();

router.get("/home", auth, catchAsync(async (req: Request, res: Response) => {
    const user = await User.findById(req.session!.userId);

    res.json(user);
}));

export default router;