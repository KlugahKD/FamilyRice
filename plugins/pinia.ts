// plugins/pinia.ts
import { defineNuxtPlugin } from '#app'
import { setActivePinia, createPinia } from 'pinia'

export default defineNuxtPlugin(({ vueApp }) => {
  const pinia = createPinia()
  setActivePinia(pinia)
  vueApp.use(pinia)
})