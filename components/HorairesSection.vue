<template>
  <section class="bg-dark-blue text-white py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-5xl md:text-6xl font-bebas uppercase text-center mb-16">Infos pratiques</h2>

      <div class="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
        <!-- Colonne 1 : Horaires -->
        <div>
          <h3 class="text-3xl font-bebas uppercase mb-8">Horaires</h3>
          <div class="grid grid-cols-2 gap-y-4 font-body text-base md:text-lg">
            <div class="text-right pr-4 font-bebas uppercase">Lundi</div>
            <div class="text-left">18:30 – 21:00</div>

            <div class="text-right pr-4 font-bebas uppercase">Mardi</div>
            <div class="text-left">19:30 – 21:30</div>

            <div class="text-right pr-4 font-bebas uppercase">Mercredi</div>
            <div class="text-left">18:00 – 21:00</div>

            <div class="text-right pr-4 font-bebas uppercase">Jeudi</div>
            <div class="text-left">19:30 – 21:00</div>

            <div class="text-right pr-4 font-bebas uppercase">Vendredi</div>
            <div class="text-left">18:30 – 21:00</div>

            <div class="text-right pr-4 font-bebas uppercase">Samedi</div>
            <div class="text-left">10:00 – 12:00</div>

            <div class="text-right pr-4 font-bebas uppercase">Dimanche</div>
            <div class="text-left">18:00 – 20:00</div>
          </div>
        </div>

        <!-- Colonne 2 : Adresse + Map -->
        <div>
          <h3 class="text-3xl font-bebas uppercase mb-6">Adresse</h3>
          <p class="font-body text-base md:text-lg mb-8 leading-relaxed">
            <strong>Salle de Sports Rabelais</strong><br />
            Rue Albert Schweitzer<br />
            59370 Mons-en-Barœul
          </p>

          <div class="aspect-video rounded overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=Salle+de+Sports+Rabelais,+Rue+Albert+Schweitzer,+59370+Mons-en-Baroeul&output=embed"
              width="100%"
              height="100%"
              class="w-full h-full border-0"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
