import { Router } from "express";
import { courseController } from "./courseController";

const router = Router();

router.route("/").get(courseController.index);

router.route("/:term").get(courseController.showMany);

export default router;
