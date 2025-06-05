<template>
  <section class=" py-12 px-4 bg-gray-900 text-white">
    <h2 class="text-4xl md:text-5xl font-bebas  uppercase text-center mt-12 mb-12">Notre Équipe</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
      <!-- Entraîneurs -->
      <div>
        <h3 class="text-4xl font-script mb-6 text-center">Les Entraîneurs</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div v-for="n in 3" :key="'coach-' + n" class="text-center space-y-3">
            <img
              src="https://avatar.iran.liara.run/public/boy"
              alt="Coach photo"
              class="w-28 h-28 object-cover rounded-full mx-auto"
            />
            <p class="text-lg font-semibold">Nom Prénom</p>
            <p class="text-sm text-gray-300">Entraîneur</p>
          </div>
        </div>
      </div>

      <!-- Membres du bureau -->
      <div>
        <h3 class="text-4xl font-script mb-6 text-center ">Le Bureau</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div v-for="n in 4" :key="'staff-' + n" class="text-center space-y-3">
            <img
              src="https://avatar.iran.liara.run/public/boy"
              alt="Staff photo"
              class="w-28 h-28 object-cover rounded-full mx-auto"
            />
            <p class="text-lg font-semibold">Nom Prénom</p>
            <p class="text-sm text-gray-300">Président / Secrétaire / Trésorier</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
