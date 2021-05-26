import { Router } from "express";
import { courseController } from "./courseController";

const router = Router();

router.route("/").get(courseController.index);

router.route("/:searchTerm").get(courseController.showMany);

router.route("/course/:id").get(courseController.show);

export default router;
