import express, {route} from "express";
import { login, register } from "../controllers/userController";


const router = Router();

router.route("/login").post(login);
router.route("/register").post(register);
router.route("add-activity");
router.route("/get-activity");

export default router;
