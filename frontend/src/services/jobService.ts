// src/jobService.ts
import axios from 'axios'
import { Job } from '../types/job'

const API_URL = `${import.meta.env.VITE_APP_API_URL}/api`

export async function createJob(): Promise<string> {
  const response = await axios.post(`${API_URL}/jobs`)
  return response.data.id
}

export async function getJobs(): Promise<Job[]> {
  const response = await axios.get(`${API_URL}/jobs`)
  return response.data
}

export async function getJob(jobId: string): Promise<Job> {
  const response = await axios.get(`${API_URL}/jobs/${jobId}`)
  return response.data
}
