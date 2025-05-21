<template>
    <section class="relative overflow-hidden text-white min-h-[60vh] flex">
        <!-- Vidéo de fond -->
        <div class="absolute inset-0 -z-10">
            <video class="w-full h-full object-cover" autoplay muted loop playsinline preload="auto">
                <source src="/video/shadow.mp4" type="video/mp4" />
            </video>

            <!-- Overlay bleuté avec clip-path haut -->
            <div class="absolute triangle-clip-top top-0 left-0 w-full h-[120px] bg-dark-blue z-10" />
            <!-- Overlay principal semi-transparent -->
            <div class="absolute inset-0 bg-dark-blue/80 z-10" />
            <!-- Clip-path bas -->
            <div class="triangle-clip-bot absolute bottom-0 left-0 w-full h-[120px] bg-dark-blue z-10" />
        </div>

        <!-- Contenu - Utilisation de flex et auto margins pour centrage vertical parfait -->
        <div class="relative z-20 container mx-auto px-4 py-8 flex flex-col items-center justify-center my-auto w-full">
            <h2 class="text-4xl md:text-5xl font-bebas uppercase mb-12">Nos entraînements</h2>

            <div
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl text-sm uppercase font-bebas mt-8">
                <div class="space-y-3 text-center flex-col">
                    <Icon name="material-symbols-light:sports-kabaddi-rounded" class=" mx-auto" size="60" />
                    <h3 class="text-lg m-0">Enfants & Ados</h3>
                    <p class="font-body text-regular uppercase">Dès 8 ans – encadrement ludique</p>
                </div>
                <div class="space-y-3 text-center flex-col">
                    <Icon name="guidance:boxing" class=" mx-auto" size="60" />
                    <h3 class="text-lg m-0">Adultes loisir</h3>
                    <p class="font-body text-regular uppercase">Accessible à tous, sans contact</p>
                </div>
                <div class="space-y-3 text-center flex-col">
                    <Icon name="ph:boxing-glove-fill" class=" mx-auto" size="60" />
                    <h3 class="text-lg m-0">Compétiteurs</h3>
                    <p class="font-body text-regular uppercase">Préparation & sparring intensif</p>
                </div>
                <div class="space-y-3 text-center flex-col">
                    <Icon name="game-icons:muscular-torso" class=" mx-auto" size="60" />
                    <h3 class="text-lg m-0">Prépa physique</h3>
                    <p class="font-body text-regular uppercase">Cardio, explosivité, renforcement</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.triangle-clip-bot {
    clip-path: polygon(0 100%, 100% 0%, 100% 100%);
    transform: scaleX(-1);
}

.triangle-clip-top {
    clip-path: polygon(0 100%, 100% 0%, 100% 100%);
    transform: scaleY(-1);
}
</style>