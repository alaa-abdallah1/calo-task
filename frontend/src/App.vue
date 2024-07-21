<template>
  <div
    class="max-w-7xl mx-auto py-12 px-4 space-y-12"
    :style="{
      minWidth: '300px'
    }"
  >
    <div
      class="flex items-center flex-col sm:flex-row gap-4 justify-between bg-white rounded-lg"
    >
      <h1 class="text-3xl md:text-5xl font-bold italic text-gray-800">
        Job Management
      </h1>
      <Button class="italic" :loading="loading" :onClick="createNewJob">
        Create New Job
      </Button>
    </div>
    <JobList :jobs="jobs" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import JobList from './components/JobList.vue'
import Button from './components/Button.vue'
import { io } from 'socket.io-client'
import { Job } from './types/job'
import { createJob, getJobs } from './services/jobService'

const jobs = ref<Job[]>([])
const loading = ref(false)
const socket = io(import.meta.env.VITE_APP_API_URL)

const fetchJobs = async () => {
  jobs.value = await getJobs()
}

const createNewJob = async () => {
  loading.value = true
  await createJob()
  await fetchJobs()
  loading.value = false
}

socket.on('jobResolved', (job: Job) => {
  const index = jobs.value.findIndex((j) => j.id === job.id)
  if (index !== -1) {
    jobs.value[index] = job
  } else {
    jobs.value.push(job)
  }
})

onMounted(() => {
  fetchJobs()
})
</script>

<style scoped></style>
