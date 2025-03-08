<!-- pages/contact.vue -->
<template>
    <div class="py-12">
      <div class="container">
        <h1 class="text-3xl font-bold text-primary mb-6">Contact Us</h1>
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Contact Form -->
          <div class="lg:col-span-2">
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <div class="p-6">
                <h2 class="text-xl font-bold mb-6">Get In Touch</h2>
                
                <div v-if="formSubmitted" class="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div class="flex">
                    <span class="material-icons text-green-500 mr-3">check_circle</span>
                    <div>
                      <h3 class="font-semibold text-green-800">Message Sent Successfully!</h3>
                      <p class="text-green-700">Thank you for contacting us. We'll get back to you as soon as possible.</p>
                    </div>
                  </div>
                </div>
                
                <form v-else @submit.prevent="submitForm">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                      <input
                        id="name"
                        v-model="form.name"
                        type="text"
                        class="input"
                        required
                      />
                    </div>
                    
                    <div>
                      <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        id="email"
                        v-model="form.email"
                        type="email"
                        class="input"
                        required
                      />
                    </div>
                  </div>
                  
                  <div class="mb-6">
                    <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input
                      id="subject"
                      v-model="form.subject"
                      type="text"
                      class="input"
                      required
                    />
                  </div>
                  
                  <div class="mb-6">
                    <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                    <textarea
                      id="message"
                      v-model="form.message"
                      rows="6"
                      class="input"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <button 
                      type="submit"
                      class="btn btn-primary py-3 px-8"
                      :disabled="isSubmitting"
                    >
                      <span v-if="isSubmitting" class="flex items-center">
                        <span class="animate-spin mr-2">
                          <span class="material-icons">sync</span>
                        </span>
                        Sending...
                      </span>
                      <span v-else>
                        Send Message
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          <!-- Contact Info -->
          <div class="lg:col-span-1">
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <div class="p-6">
                <h2 class="text-xl font-bold mb-6">Contact Information</h2>
                
                <div class="space-y-6">
                  <div class="flex">
                    <div class="flex-shrink-0 h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span class="material-icons text-primary">smartphone</span>
                    </div>
                    <div class="ml-4">
                      <h3 class="text-lg font-semibold text-gray-800">Phone</h3>
                      <p class="text-gray-600">
                        <a href="tel:0550210487" class="hover:text-primary">0550210487</a>
                      </p>
                    </div>
                  </div>
                  
                  <div class="flex">
                    <div class="flex-shrink-0 h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span class="material-icons text-primary">email</span>
                    </div>
                    <div class="ml-4">
                      <h3 class="text-lg font-semibold text-gray-800">Email</h3>
                      <p class="text-gray-600">
                        <a href="mailto:familyricewholesaleandretail@gmail.com" class="hover:text-primary break-words">
                          familyricewholesaleandretail@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div class="flex">
                    <div class="flex-shrink-0 h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span class="material-icons text-primary">location_on</span>
                    </div>
                    <div class="ml-4">
                      <h3 class="text-lg font-semibold text-gray-800">Location</h3>
                      <p class="text-gray-600">
                        Adjiringanor Accra, Ghana
                      </p>
                    </div>
                  </div>
                  
                  <div class="flex">
                    <div class="flex-shrink-0 h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span class="material-icons text-primary">schedule</span>
                    </div>
                    <div class="ml-4">
                      <h3 class="text-lg font-semibold text-gray-800">Business Hours</h3>
                      <p class="text-gray-600">
                        Monday - Friday: 8:00 AM - 5:00 PM<br>
                        Saturday: 9:00 AM - 3:00 PM<br>
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                <div class="mt-8">
                  <h3 class="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
                  <div class="flex space-x-4">
                    <a href="#" class="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                      <span class="material-icons text-primary">facebook</span>
                    </a>
                    <a href="#" class="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                      <span class="material-icons text-primary">diversity_3</span>
                    </a>
                    <a href="#" class="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                      <span class="material-icons text-primary">whatsapp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Map -->
        <div class="mt-12">
          <h2 class="text-2xl font-bold text-primary mb-6">Our Location</h2>
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="aspect-w-16 aspect-h-9">
              <!-- Replace with actual Google Maps embed -->
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254202.39449592213!2d-0.30076094876531855!3d5.5912384863484105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra!5e0!3m2!1sen!2sgh!4v1709835700850!5m2!1sen!2sgh" 
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  // Form state
  const form = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const isSubmitting = ref(false);
  const formSubmitted = ref(false);
  
  async function submitForm(): Promise<void> {
    isSubmitting.value = true;
    
    try {
      // In a real app, you would send the form data to your backend here
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      
      // Show success message
      formSubmitted.value = true;
      
      // Reset form
      form.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      
      // Scroll to top of form
      window.scrollTo({
        top: document.querySelector('.bg-green-50')?.getBoundingClientRect().top,
        behavior: 'smooth'
      });
    } catch (error) {
      alert('There was an error sending your message. Please try again.');
    } finally {
      isSubmitting.value = false;
    }
  }
  
  // Set page meta
  useHead({
    title: 'Contact Us - Family Rice',
    meta: [
      { 
        name: 'description', 
        content: 'Contact Family Rice Wholesale & Retail for inquiries about our premium rice products, ordering information, or business opportunities.' 
      }
    ]
  });
  </script>