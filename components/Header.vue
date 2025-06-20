<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-colors duration-300',
      isScrolled ? 'bg-black/85 backdrop-blur' : 'bg-transparent'
    ]"
  >
    <div class="max-w-screen-xl mx-auto px-4 py-3 flex items-center">
      <nuxt-link to="/">
        <img
          src="/img/logo-placeholder.svg"
          alt="Logo"
          class="h-32 py-2 w-auto block"
        />
      </nuxt-link>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
