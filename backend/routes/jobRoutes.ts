import { Router } from "express";
import { createJob, getAllJobs, getJob } from "@/controllers/jobController";

const router = Router();

router.post("/jobs", createJob);
router.get("/jobs", getAllJobs);
router.get("/jobs/:id", getJob);

export default router;
