export interface Job {
  id: string;
  status: JobStatus;
  image?: JobImage;
}

export interface JobImage {
  url: string;
  createdBy: string;
  description: string;
}

export enum JobStatus {
  PENDING = "pending",
  RESOLVED = "resolved",
}
