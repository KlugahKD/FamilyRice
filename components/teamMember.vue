<!-- components/TeamMember.vue -->
<template>
    <div class="team-member">
      <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
        <div class="aspect-w-1 aspect-h-1">
          <NuxtImg 
            :src="photo" 
            :alt="name"
            width="400"
            height="400"
            format="webp"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold text-primary mb-1">{{ name }}</h3>
          <p class="text-sm text-accent font-medium mb-3">{{ role }}</p>
          <p class="text-gray-600 text-sm">{{ bio }}</p>
          
          <div v-if="socialLinks" class="mt-4 flex space-x-3">
            <a 
              v-for="(link, platform) in socialLinks" 
              :key="platform"
              :href="link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-primary transition-colors"
              :aria-label="`${name}'s ${platform}`"
            >
              <span class="material-icons text-xl">{{ getSocialIcon(platform) }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  interface SocialLinks {
    [key: string]: string;
  }
  
  const props = defineProps({
    name: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    bio: {
      type: String,
      required: true
    },
    photo: {
      type: String,
      required: true
    },
    socialLinks: {
      type: Object as () => SocialLinks,
      default: () => ({})
    }
  });
  
  // Map platform names to Material Icons
  function getSocialIcon(platform: string): string {
    const iconMap: Record<string, string> = {
      facebook: 'facebook',
      twitter: 'twitter',
      instagram: 'instagram',
      linkedin: 'linkedin',
      github: 'code',
      email: 'email',
      whatsapp: 'whatsapp'
    };
    
    return iconMap[platform.toLowerCase()] || 'link';
  }
  </script>