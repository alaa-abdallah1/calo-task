<template>
  <div>
    <div
      v-if="jobs.length === 0"
      class="flex flex-col items-center justify-center h-64"
    >
      <svg
        class="w-40 h-40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 12C10.3431 12 9 13.3431 9 15C9 16.6569 10.3431 18 12 18C13.6569 18 15 16.6569 15 15C15 13.3431 13.6569 12 12 12ZM12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2ZM12 9.5C10.2761 9.5 8.8125 10.9636 8.8125 12.6875C8.8125 14.4114 10.2761 15.875 12 15.875C13.7239 15.875 15.1875 14.4114 15.1875 12.6875C15.1875 10.9636 13.7239 9.5 12 9.5ZM12 17.25C9.80558 17.25 8 19.0556 8 21.25H16C16 19.0556 14.1944 17.25 12 17.25ZM2 5C2 3.34315 3.34315 2 5 2C6.65685 2 8 3.34315 8 5C8 6.65685 6.65685 8 5 8C3.34315 8 2 6.65685 2 5ZM21 2C19.3431 2 18 3.34315 18 5C18 6.65685 19.3431 8 21 8C22.6569 8 24 6.65685 24 5C24 3.34315 22.6569 2 21 2ZM4 9.5C2.27615 9.5 0.8125 10.9636 0.8125 12.6875C0.8125 14.4114 2.27615 15.875 4 15.875C5.72385 15.875 7.1875 14.4114 7.1875 12.6875C7.1875 10.9636 5.72385 9.5 4 9.5ZM20 9.5C18.2761 9.5 16.8125 10.9636 16.8125 12.6875C16.8125 14.4114 18.2761 15.875 20 15.875C21.7239 15.875 23.1875 14.4114 23.1875 12.6875C23.1875 10.9636 21.7239 9.5 20 9.5ZM5 17.25C2.80558 17.25 1 19.0556 1 21.25H9C9 19.0556 7.19442 17.25 5 17.25ZM20 17.25C17.8056 17.25 16 19.0556 16 21.25H24C24 19.0556 22.1944 17.25 20 17.25Z"
          fill="#000"
        />
      </svg>
      <p class="text-gray-500 mt-4 text-lg">No jobs available</p>
      <p class="text-gray-400 mt-2 text-sm">
        Please check back later or create a new job
      </p>
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <JobCard v-for="job in jobs" :key="job.id" :job="job" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import JobCard from './JobCard.vue'
import { Job } from '../types/job'

defineProps<{
  jobs: Job[]
}>()
</script>

<style scoped></style>
