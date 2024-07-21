import { v4 as uuidv4 } from "uuid";
import { Job, JobImage, JobStatus } from "@/types/job";
import { unsplashClient } from "./unsplashService";
import { createJob, getAllJobs, getJobById, updateJob } from "./jsonDatabase";
import { io } from "@/server";

export class JobService {
  async createJob(): Promise<string> {
    const jobId = uuidv4();
    const job: Job = { id: jobId, status: JobStatus.PENDING };
    createJob(job);
    this.resolveJob(jobId);
    return jobId;
  }

  getJob(jobId: string): Job | undefined {
    return getJobById(jobId);
  }

  getAllJobs(): Job[] {
    return getAllJobs();
  }

  private async resolveJob(jobId: string) {
    const delay = Math.floor(Math.random() * 60) * 100; // 5 sec to 5 min
    await new Promise((resolve) => setTimeout(resolve, delay));
    const imageUrl = await this.getRandomImage();
    const job = getJobById(jobId);
    if (job) {
      job.status = JobStatus.RESOLVED;
      job.image = imageUrl;
      updateJob(job);
      io.emit("jobResolved", job); // Emit the event when the job is resolved
    }
  }

  private async getRandomImage(): Promise<JobImage> {
    try {
      const { data } = await unsplashClient().get("photos/random", {
        params: {
          query: "food",
          topics: "food-drink",
        },
      });

      return {
        url: data.urls.thumb,
        createdBy: data.user.name,
        description: data.description || data.alt_description || "",
      };
    } catch (error) {
      console.error("Error fetching image from Unsplash:", error);
      throw new Error("Error fetching image from Unsplash");
    }
  }
}

export default JobService;
