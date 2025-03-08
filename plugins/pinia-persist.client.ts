// plugins/pinia-persist.client.ts
import { defineNuxtPlugin } from '#app'
import { createPersistedState } from 'pinia-plugin-persistedstate'

export default defineNuxtPlugin(({ $pinia }) => {
  // Note: we're using $pinia which is provided by @pinia/nuxt
  // NOT creating a new pinia instance
  $pinia.use(createPersistedState({
    storage: localStorage
  }))
})