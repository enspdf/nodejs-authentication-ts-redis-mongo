import { Router, Request, Response } from "express";
import { registerSchema, validate } from "../validation";
import { User } from "../models";
import { logIn } from "../auth";
import { guest, catchAsync } from "../middleware";
import { BadRequest } from "../errors";

const router = Router();

router.post("/register", guest, catchAsync(async (req: Request, res: Response) => {
    await validate(registerSchema, req.body);
    const { email, name, password } = req.body;

    const found = await User.exists({ email });

    if (found) {
        throw new BadRequest("Invalid mail");
    }

    const user = await User.create({
        email, name, password
    });

    logIn(req, user.id);

    res.json({ message: "OK" });
}));

export default router;