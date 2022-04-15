import { Router } from "express";
import gamesRoutes from "./games.js";
import charactersRoutes from "./characters.js";

const router = Router();

router.get("/", (req, res) => res.send("It's me Mario!(Root of API)"));
router.use("/", gamesRoutes);
router.use("/", charactersRoutes);

export default router;
