import fs from "fs";
import path from "path";
import { Job } from "@/types/job";

const filePath = path.resolve(__dirname, "../data/jobs.json");

function readJobsFromFile(): Job[] {
  if (fs.existsSync(filePath)) {
    const jobsData = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(jobsData) as Job[];
  }
  return [];
}

function writeJobsToFile(jobs: Job[]) {
  fs.writeFileSync(filePath, JSON.stringify(jobs, null, 2), "utf-8");
}

export function getAllJobs(): Job[] {
  return readJobsFromFile();
}

export function getJobById(jobId: string): Job | undefined {
  const jobs = readJobsFromFile();
  return jobs.find((job) => job.id === jobId);
}

export function createJob(job: Job): void {
  const jobs = readJobsFromFile();
  jobs.push(job);
  writeJobsToFile(jobs);
}

export function updateJob(updatedJob: Job): void {
  const jobs = readJobsFromFile();
  const jobIndex = jobs.findIndex((job) => job.id === updatedJob.id);
  if (jobIndex !== -1) {
    jobs[jobIndex] = updatedJob;
    writeJobsToFile(jobs);
  }
}
