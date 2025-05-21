<template>
  <div class="h-screen relative overflow-hidden">
    <!-- Vidéo plein écran -->
    <video class="w-full h-full object-cover" autoplay muted loop playsinline preload="auto">
      <source src="/video/video_hero.mp4" type="video/mp4" />
      Ton navigateur ne supporte pas les vidéos HTML5.
    </video>

    <!-- Texte d'accroche -->
    <div class="absolute z-20 top-1/2 left-8 transform -translate-y-1/2 text-white">
      <div class="relative container mx-auto px-4 w-fit">
        <div class="text-7xl md:text-8xl font-bold uppercase leading-[0.7] font-bebas whitespace-nowrap">
          Rentre dans
        </div>
        <div
          class="text-[5rem] md:text-[6.5rem] font-bold uppercase leading-[1.1] font-bebas text-white whitespace-nowrap text-right"
        >
          le <span class="text-red-600">ring</span>
        </div>
      </div>
    </div>

    <!-- Clip path en CSS -->
    <div class="triangle-clip bg-dark-blue absolute bottom-0 left-0 w-full h-[80px] z-10 pointer-events-none" />
  </div>
</template>

<style scoped>
.triangle-clip {
  clip-path: polygon(0 100%, 100% 0%, 100% 100%);
}
</style>
