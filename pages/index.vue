<!-- pages/index.vue -->
<template>
  <div>
    <!-- Hero Section with Dark Background -->
    <section class="relative bg-indigo-950 py-24 md:py-32 text-white">
      <div class="absolute inset-0 bg-indigo-950 opacity-90"></div>
      <div class="container relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-semibold mb-6 leading-tight">
            <span class="text-amber-300">Nourishing generations</span>,<br/>
            <span class="text-amber-300">one grain at a time</span>.
          </h1>
          <p class="text-xl md:text-2xl mb-12 text-white">
            High-quality, carefully sourced rice from the best farms
          </p>
          
          <!-- Rice Package Image -->
          <div class="max-w-xs mx-auto mb-10">
            <img src="/images/rice-package.jpg" alt="Family Rice Package" class="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>

    <!-- "Carefully sourced" Section with Person Image -->
    <section class="py-20 bg-white">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              <span class="text-amber-300">Carefully sourced rice</span>
              <span class="text-indigo-950"> from the best farms</span>
            </h2>
            
            <p class="text-gray-700 mb-6 text-lg">
              At Family Rice Wholesale & Retail, we are dedicated to providing high-quality rice to businesses and consumers. With years of expertise in the rice industry, we ensure that every grain meets the highest standards of taste, texture, and nutritional value. Whether you're a retailer, distributor, or a household looking for premium rice, we have the perfect variety for you.
            </p>
            
            <ul class="space-y-4 mb-8">
              <li class="flex items-start">
                <span class="text-secondary mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span>High-quality, carefully sourced rice from the best farms</span>
              </li>
              <li class="flex items-start">
                <span class="text-secondary mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span>Competitive wholesale pricing with flexible bulk order options</span>
              </li>
              <li class="flex items-start">
                <span class="text-secondary mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span>Reliable logistics and distribution services for on-time delivery</span>
              </li>
              <li class="flex items-start">
                <span class="text-secondary mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span>Commitment to food safety and quality standards</span>
              </li>
            </ul>
            
            <NuxtLink to="/contact" class="inline-flex items-center justify-center px-6 py-3 bg-indigo-950 text-white rounded hover:bg-indigo-900 transition-colors">
              Contact us
            </NuxtLink>
          </div>
          
          <div>
            <img src="/images/lady-with-rice.jpg" alt="Family Rice Product" class="w-full h-auto rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </section>

    <!-- Products Section -->
    <section class="py-20 bg-gray-50">
      <div class="container">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-indigo-950 mb-4">Our Premium Rice Products</h2>
          <p class="text-gray-600 max-w-3xl mx-auto">
            Discover our range of high-quality rice products available in various sizes to meet your retail and wholesale needs.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- 5kg Rice Product -->
          <div class="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
            <div class="h-64 overflow-hidden">
              <img src="/images/rice-5kg.jpg" alt="Family Rice 5kg" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-indigo-950 mb-2">Family Rice 5kg</h3>
              <p class="text-gray-600 mb-4">Premium quality rice in a convenient 5kg package. Perfect for households and small businesses.</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                  Retail: GHC 200.00
                </span>
                <span class="bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full">
                  Wholesale: GHC 720.00
                </span>
              </div>
              <NuxtLink to="/products/1" class="block w-full py-2 text-center bg-indigo-950 text-white rounded hover:bg-indigo-900 transition-colors">
                View Details
              </NuxtLink>
            </div>
          </div>
          
          <!-- 1kg Rice Product -->
          <div class="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
            <div class="h-64 overflow-hidden">
              <img src="/images/rice-1kg.jpg" alt="Family Rice 1kg" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-indigo-950 mb-2">Family Rice 1kg</h3>
              <p class="text-gray-600 mb-4">Premium quality rice in a convenient 1kg package. Ideal for small households.</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                  Retail: GHC 40.00
                </span>
                <span class="bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full">
                  Wholesale: GHC 620.00
                </span>
              </div>
              <NuxtLink to="/products/2" class="block w-full py-2 text-center bg-indigo-950 text-white rounded hover:bg-indigo-900 transition-colors">
                View Details
              </NuxtLink>
            </div>
          </div>
          
          <!-- 50kg Rice Product -->
          <div class="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
            <div class="h-64 overflow-hidden">
              <img src="/images/rice_50kg.jpg" alt="Family Rice 50kg" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-indigo-950 mb-2">Family Rice 50kg</h3>
              <p class="text-gray-600 mb-4">Premium quality rice in a large 50kg package. Perfect for businesses and bulk buyers.</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full">
                  Wholesale: GHC 850.00
                </span>
              </div>
              <NuxtLink to="/products/3" class="block w-full py-2 text-center bg-indigo-950 text-white rounded hover:bg-indigo-900 transition-colors">
                View Details
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="text-center mt-10">
          <NuxtLink to="/shop" class="inline-flex items-center px-6 py-3 bg-indigo-950 text-white rounded hover:bg-indigo-900 transition-colors">
            View All Products
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-20 bg-white">
      <div class="container">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-indigo-950 mb-4">Why Choose Us?</h2>
          <p class="text-gray-600 max-w-3xl mx-auto">
            We take pride in delivering premium quality rice products with exceptional customer service.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="material-icons text-amber-600">star</span>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-indigo-950">Premium Quality</h3>
            <p class="text-gray-600">
              High-quality, carefully sourced rice from the best farms
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="material-icons text-amber-600">local_shipping</span>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-indigo-950">Reliable Delivery</h3>
            <p class="text-gray-600">
              Reliable logistics and distribution for on-time delivery
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="material-icons text-amber-600">price_check</span>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-indigo-950">Competitive Pricing</h3>
            <p class="text-gray-600">
              Competitive wholesale pricing with flexible bulk order options
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="material-icons text-amber-600">verified</span>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-indigo-950">Quality Assured</h3>
            <p class="text-gray-600">
              Commitment to food safety and quality standards
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-indigo-950 text-white">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to order?</h2>
          <p class="text-xl opacity-90 mb-8">
            Join the Family Rice community today, where quality and trust come first!
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
// Set page meta
useHead({
  title: 'Family Rice - Wholesale & Retail',
  meta: [
    { 
      name: 'description', 
      content: 'At Family Rice Wholesale & Retail, we provide high-quality rice for businesses and consumers. Browse our selection and order online.' 
    }
  ]
});
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .container {
    padding: 0 2rem;
  }
}

/* Override Tailwind colors to match the images */
:root {
  --primary-color: #755723; /* Brown */
  --secondary-color: #8aad67; /* Green */
  --accent-color: #d4af37; /* Gold */
  --text-color: #333333;
  --background-color: #f8f8f8;
  --dark-blue: #1e1a4c; /* Dark blue from hero section */
}
</style>