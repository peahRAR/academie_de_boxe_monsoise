<template>
  <section class="bg-dark-blue text-white py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-5xl md:text-6xl font-bebas uppercase text-center mb-16">Infos pratiques</h2>

      <div class="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
        <!-- Colonne 1 : Horaires -->
        <div class="horaires">
          <div class="flex items-center gap-2 mb-6">
            <Icon name="uil:schedule" size="30" class="text-red-500 " />
            <h3 class="text-3xl font-bebas uppercase pt-1">Horraire</h3>
          </div>

          <div class="space-y-2 font-body text-base md:text-lg">
            <div class="flex items-center gap-4">
              <div class="font-bebas uppercase text-left min-w-[100px] whitespace-nowrap">Lundi</div>
              <div class="text-left whitespace-nowrap pb-1">18:30 – 21:00</div>
            </div>
            <div class="flex items-center gap-4">
              <div class="font-bebas uppercase text-left min-w-[100px] whitespace-nowrap">Mardi</div>
              <div class="text-left whitespace-nowrap pb-1">19:30 – 21:30</div>
            </div>
            <div class="flex items-center gap-4">
              <div class="font-bebas uppercase text-left min-w-[100px] whitespace-nowrap">Mercredi</div>
              <div class="text-left whitespace-nowrap pb-1">18:00 – 21:00</div>
            </div>
            <div class="flex items-center gap-4">
              <div class="font-bebas uppercase text-left min-w-[100px] whitespace-nowrap">Jeudi</div>
              <div class="text-left whitespace-nowrap pb-1">19:30 – 21:00</div>
            </div>
            <div class="flex items-center gap-4">
              <div class="font-bebas uppercase text-left min-w-[100px] whitespace-nowrap">Vendredi</div>
              <div class="text-left whitespace-nowrap pb-1">18:30 – 21:00</div>
            </div>
            <div class="flex items-center gap-4">
              <div class="font-bebas uppercase text-left min-w-[100px] whitespace-nowrap">Samedi</div>
              <div class="text-left whitespace-nowrap pb-1">10:00 – 12:00</div>
            </div>
            <div class="flex items-center gap-4">
              <div class="font-bebas uppercase text-left min-w-[100px] whitespace-nowrap">Dimanche</div>
              <div class="text-left whitespace-nowrap pb-1">18:00 – 20:00</div>
            </div>
          </div>

        </div>

        <!-- Colonne 2 : Adresse + Map -->
        <div>
          <div class="flex items-center gap-2 mb-6">
            <Icon name="mdi:map-marker" size="30" class="text-red-500" />
            <h3 class="text-3xl font-bebas uppercase pt-1">Adresse</h3>
          </div>

          <address class="not-italic font-body text-base md:text-lg mb-8 leading-relaxed">
            <strong>Salle de Sports Rabelais</strong><br />
            Rue Albert Schweitzer<br />
            59370 Mons-en-Barœul
          </address>

          

          <div class="aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=Salle+de+Sports+Rabelais,+Rue+Albert+Schweitzer,+59370+Mons-en-Baroeul&output=embed"
              width="100%" height="100%" class="w-full h-full border-0" allowfullscreen loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>
