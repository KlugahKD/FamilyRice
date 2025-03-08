<!-- pages/testimonials.vue -->
<template>
    <div class="testimonials-page">
      <!-- Hero Banner -->
      <section class="relative bg-indigo-950 py-16">
        <div class="absolute inset-0 opacity-15">
          <img src="/images/rice-fields.jpg" alt="" class="w-full h-full object-cover" />
        </div>
        <div class="container relative z-10">
          <div class="text-center text-white max-w-3xl mx-auto">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Customer Testimonials</h1>
            <p class="text-lg md:text-xl opacity-90 leading-relaxed">
              Discover what our customers have to say about Family Rice quality and service
            </p>
          </div>
        </div>
      </section>
  
      <!-- Featured Testimonials Section -->
      <section class="py-16 bg-white">
        <div class="container">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <!-- Featured Testimonial 1 -->
            <div class="bg-gray-50 rounded-lg p-8 shadow-lg relative">
              <div class="absolute -top-5 -right-5 text-accent opacity-30">
                <span class="material-icons text-6xl">format_quote</span>
              </div>
              
              <div class="flex mb-6">
                <div class="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                </div>
                <div>
                  <h3 class="text-xl font-bold text-indigo-950">Ama Ofori</h3>
                  <div class="flex text-amber-400 mb-1">
                    <span class="material-icons" v-for="i in 5" :key="i">star</span>
                  </div>
                </div>
              </div>
              
              <p class="text-gray-700 italic mb-4 text-lg">
                "Family Rice Wholesale & Retail has the best quality basmati rice I've ever bought! The grains are long, aromatic, and cook perfectly every time."
              </p>
            </div>
            
            <!-- Featured Testimonial 2 -->
            <div class="bg-gray-50 rounded-lg p-8 shadow-lg relative">
              <div class="absolute -top-5 -right-5 text-accent opacity-30">
                <span class="material-icons text-6xl">format_quote</span>
              </div>
              
              <div class="flex mb-6">
                <div class="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                </div>
                <div>
                  <h3 class="text-xl font-bold text-indigo-950">Kwame Mensah</h3>
                  <div class="flex text-amber-400 mb-1">
                    <span class="material-icons" v-for="i in 5" :key="i">star</span>
                  </div>
                </div>
              </div>
              
              <p class="text-gray-700 italic mb-4 text-lg">
                "I've never been disappointed. The taste and texture are simply amazing! Their delivery is always on time, making shopping so convenient."
              </p>
            </div>
          </div>
          
          <!-- More Testimonials Grid -->
          <h2 class="text-3xl font-bold text-center text-indigo-950 mb-12">More Customer Reviews</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Testimonial Card 1 -->
            <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div class="flex text-amber-400 mb-3">
                <span class="material-icons" v-for="i in 5" :key="i">star</span>
              </div>
              <p class="text-gray-700 italic mb-4">
                "The wholesale pricing is fantastic for my small business. My customers specifically ask for Family Rice now!"
              </p>
              <div class="flex items-center mt-auto pt-4 border-t border-gray-100">
                <div class="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-200">
                </div>
                <div>
                  <p class="font-semibold text-gray-800">Elizabeth Owusu</p>
                  <p class="text-xs text-gray-500">Market Vendor</p>
                </div>
              </div>
            </div>
            
            <!-- Testimonial Card 2 -->
            <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div class="flex text-amber-400 mb-3">
                <span class="material-icons" v-for="i in 5" :key="i">star</span>
              </div>
              <p class="text-gray-700 italic mb-4">
                "I appreciate the consistency in quality. Every time I order, I know exactly what I'm getting - premium rice that's perfect for my family."
              </p>
              <div class="flex items-center mt-auto pt-4 border-t border-gray-100">
                <div class="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-200">
                </div>
                <div>
                  <p class="font-semibold text-gray-800">Michael Darko</p>
                  <p class="text-xs text-gray-500">Retail Customer</p>
                </div>
              </div>
            </div>
            
            <!-- Testimonial Card 3 -->
            <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div class="flex text-amber-400 mb-3">
                <span class="material-icons" v-for="i in 5" :key="i">star</span>
              </div>
              <p class="text-gray-700 italic mb-4">
                "As a restaurant owner, quality and consistency are everything. Family Rice delivers on both fronts, every single time."
              </p>
              <div class="flex items-center mt-auto pt-4 border-t border-gray-100">
                <div class="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-200">
                </div>
                <div>
                  <p class="font-semibold text-gray-800">Joseph Agyeman</p>
                  <p class="text-xs text-gray-500">Restaurant Owner</p>
                </div>
              </div>
            </div>
            
            <!-- Testimonial Card 4 -->
            <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div class="flex text-amber-400 mb-3">
                <span class="material-icons" v-for="i in 4" :key="i">star</span>
                <span class="material-icons">star_border</span>
              </div>
              <p class="text-gray-700 italic mb-4">
                "Great value for money. The bulk ordering process is simple and the delivery is always prompt. Would recommend!"
              </p>
              <div class="flex items-center mt-auto pt-4 border-t border-gray-100">
                <div class="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-200">
                </div>
                <div>
                  <p class="font-semibold text-gray-800">Abena Kyei</p>
                  <p class="text-xs text-gray-500">Wholesaler</p>
                </div>
              </div>
            </div>
            
            <!-- Testimonial Card 5 -->
            <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div class="flex text-amber-400 mb-3">
                <span class="material-icons" v-for="i in 5" :key="i">star</span>
              </div>
              <p class="text-gray-700 italic mb-4">
                "I've tried many rice brands, but Family Rice stands out for its aroma and texture. It's now the only rice I buy for my family."
              </p>
              <div class="flex items-center mt-auto pt-4 border-t border-gray-100">
                <div class="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-200">
                </div>
                <div>
                  <p class="font-semibold text-gray-800">Patricia Osei</p>
                  <p class="text-xs text-gray-500">Homemaker</p>
                </div>
              </div>
            </div>
            
            <!-- Testimonial Card 6 -->
            <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div class="flex text-amber-400 mb-3">
                <span class="material-icons" v-for="i in 5" :key="i">star</span>
              </div>
              <p class="text-gray-700 italic mb-4">
                "The customer service is exceptional. When I had a question about bulk ordering, they were quick to respond and very helpful."
              </p>
              <div class="flex items-center mt-auto pt-4 border-t border-gray-100">
                <div class="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-200">
                </div>
                <div>
                  <p class="font-semibold text-gray-800">Daniel Asare</p>
                  <p class="text-xs text-gray-500">Hotel Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Add Your Testimonial Section -->
      <section class="py-16 bg-gray-50">
        <div class="container">
          <div class="max-w-2xl mx-auto">
            <h2 class="text-3xl font-bold text-center text-indigo-950 mb-8">Share Your Experience</h2>
            <p class="text-center text-gray-600 mb-8">
              We value your feedback! Share your experience with Family Rice products and services.
            </p>
            
            <div class="bg-white rounded-lg shadow-md p-8">
              <form @submit.prevent="submitTestimonial">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                      id="name"
                      v-model="testimonialForm.name"
                      type="text"
                      class="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      id="email"
                      v-model="testimonialForm.email"
                      type="email"
                      class="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                </div>
                
                <div class="mb-6">
                  <label class="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                  <div class="flex space-x-1">
                    <button 
                      v-for="star in 5" 
                      :key="star" 
                      type="button"
                      @click="testimonialForm.rating = star"
                      class="focus:outline-none"
                    >
                      <span class="material-icons text-2xl" :class="star <= testimonialForm.rating ? 'text-amber-400' : 'text-gray-300'">
                        star
                      </span>
                    </button>
                  </div>
                </div>
                
                <div class="mb-6">
                  <label for="testimonial" class="block text-sm font-medium text-gray-700 mb-1">Your Testimonial</label>
                  <textarea
                    id="testimonial"
                    v-model="testimonialForm.testimonial"
                    rows="4"
                    class="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit"
                    class="w-full py-3 bg-indigo-950 text-white rounded-md hover:bg-indigo-900 transition-colors"
                  >
                    Submit Testimonial
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
  
      <!-- CTA Section -->
      <section class="py-16 bg-indigo-950 text-white">
        <div class="container">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-3xl font-bold mb-6">Ready to experience our quality?</h2>
            <p class="text-xl opacity-90 mb-8">
              Join thousands of satisfied customers who trust Family Rice for their rice needs.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink to="/shop" class="px-8 py-3 bg-white text-indigo-950 rounded font-bold text-lg hover:bg-gray-100 shadow-md">
                Shop Now
              </NuxtLink>
              <NuxtLink to="/contact" class="px-8 py-3 bg-amber-400 text-white rounded font-bold text-lg hover:bg-amber-500 shadow-md">
                Contact Us
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>  
  // Form data for testimonial submission
  const testimonialForm = ref({
    name: '',
    email: '',
    rating: 5,
    testimonial: ''
  })
  
  // Function to handle testimonial submission
  function submitTestimonial() {
    // In a real application, you would send this data to your backend
    alert('Thank you for your testimonial! We will review it shortly.')
    
    // Reset form
    testimonialForm.value = {
      name: '',
      email: '',
      rating: 5,
      testimonial: ''
    }
  }
  
  // Set page meta
  useHead({
    title: 'Testimonials - Family Rice',
    meta: [
      { 
        name: 'description', 
        content: 'Read what our customers have to say about Family Rice products and services. Quality rice trusted by households and businesses across Ghana.' 
      }
    ]
  })
  </script>