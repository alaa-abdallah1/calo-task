import { Request, Response } from "express";
import JobService from "@/services/jobService";

const jobService = new JobService();

export async function createJob(req: Request, res: Response) {
  try {
    const jobId = await jobService.createJob();
    res.status(201).json({ id: jobId });
  } catch (error) {
    res.status(500).json({ error: "Failed to create job" });
  }
}

export function getAllJobs(req: Request, res: Response) {
  try {
    const jobs = jobService.getAllJobs();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve jobs" });
  }
}

export function getJob(req: Request, res: Response) {
  try {
    const job = jobService.getJob(req.params.id);
    if (job) {
      res.status(200).json(job);
    } else {
      res.status(404).json({ error: "Job not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve job" });
  }
}
