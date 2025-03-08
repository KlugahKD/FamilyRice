<!-- components/ui/QuantitySelector.vue -->
<template>
    <div class="quantity-selector">
      <label v-if="label" :for="inputId" class="block text-sm font-medium text-gray-700 mb-1">{{ label }}</label>
      <div class="flex items-center">
        <button 
          @click="decrement" 
          :disabled="modelValue <= min"
          class="w-10 h-10 flex items-center justify-center bg-gray-100 border border-gray-300 rounded-l-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          type="button"
        >
          <span class="material-icons text-xl">remove</span>
        </button>
        <input 
          :id="inputId"
          :value="modelValue"
          @input="updateValue"
          type="number" 
          :min="min"
          :max="max"
          class="w-16 h-10 text-center border-t border-b border-gray-300 focus:ring-0 focus:border-gray-300"
        >
        <button 
          @click="increment"
          :disabled="max !== undefined && modelValue >= max"
          class="w-10 h-10 flex items-center justify-center bg-gray-100 border border-gray-300 rounded-r-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          type="button"
        >
          <span class="material-icons text-xl">add</span>
        </button>
      </div>
      <p v-if="helpText" class="text-xs text-gray-500 mt-1">
        {{ helpText }}
      </p>
    </div>
  </template>
  
  <script setup lang="ts">  
  const props = defineProps({
    modelValue: {
      type: Number,
      required: true
    },
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: undefined
    },
    label: {
      type: String,
      default: ''
    },
    helpText: {
      type: String,
      default: ''
    },
    inputId: {
      type: String,
      default: `quantity-${Math.random().toString(36).substring(2, 9)}`
    }
  });
  
  const emit = defineEmits(['update:modelValue']);
  
  function increment(): void {
    if (props.max === undefined || props.modelValue < props.max) {
      emit('update:modelValue', props.modelValue + 1);
    }
  }
  
  function decrement(): void {
    if (props.modelValue > props.min) {
      emit('update:modelValue', props.modelValue - 1);
    }
  }
  
  function updateValue(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    let value = parseInt(inputElement.value);
    
    if (isNaN(value)) {
      value = props.min;
    } else {
      if (props.min !== undefined && value < props.min) {
        value = props.min;
      }
      if (props.max !== undefined && value > props.max) {
        value = props.max;
      }
    }
    
    emit('update:modelValue', value);
  }
  </script>