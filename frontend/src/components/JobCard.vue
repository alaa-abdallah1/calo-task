<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden">
    <div
      v-if="job.status === JobStatus.RESOLVED"
      class="relative flex justify-center w-full h-64 bg-gray-200 group cursor-pointer"
    >
      <div
        :style="{ backgroundImage: `url(${job?.image?.url})` }"
        class="w-full h-full bg-cover bg-center transition-opacity duration-500 ease-in-out"
        :class="{ 'opacity-0': !loaded, 'opacity-100': loaded }"
        @load="loaded = true"
      ></div>
      <div v-if="!loaded" class="skeleton w-full h-full absolute"></div>
      <div
        class="absolute inset-0 bg-black bg-opacity-0 flex items-end group p-4 group-hover:bg-opacity-70"
      >
        <div class="opacity-0 group-hover:opacity-100">
          <p class="text-white text-sm">
            <strong>Created By:</strong> {{ job?.image?.createdBy }}
          </p>
          <p class="text-gray-300 text-xs">{{ job?.image?.description }}</p>
        </div>
      </div>
    </div>
    <div
      v-else-if="job.status === JobStatus.PENDING"
      class="flex justify-center flex-col gap-4 items-center w-full h-64 bg-gray-200"
    >
      <div
        class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"
      ></div>
      <p class="text-sm">Job is being processed...</p>
    </div>
    <SkeletonLoader v-else />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import { defineProps } from 'vue'
import SkeletonLoader from './SkeletonLoader.vue'
import { Job, JobStatus } from '../types/job'

const props = defineProps<{
  job: Job
}>()

const loaded = ref(false)

watch(
  () => props.job.status,
  () => {
    if (props.job?.status === JobStatus.RESOLVED) {
      console.log('bbbbb')
      loaded.value = true
    }
  }
)

onMounted(() => {
  const img = new Image()
  img.src = props.job?.image?.url as string
  img.onload = () => {
    loaded.value = true
  }
})
</script>

<style scoped>
.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: skeleton-animation 1.5s infinite;
}

@keyframes skeleton-animation {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

img {
  transition: opacity 0.3s ease-in-out;
}

img.opacity-0 {
  opacity: 0;
}

img.opacity-100 {
  opacity: 1;
}

.bg-cover {
  background-size: cover;
}
</style>
