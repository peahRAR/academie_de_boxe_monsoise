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
                    <Icon name="box:punching-bag" class="mx-auto" color="white" size="60" />
                    <h3 class="text-lg m-0">Boxe Loisir</h3>
                    <p class="font-body text-regular uppercase">Ludique et idéal pour brûler des calories</p>
                    <NuxtLink to="/"
                        class="inline-block px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-red-800 transition duration-300">
                        En savoir plus
                    </NuxtLink>
                </div>

                <div class="space-y-3 text-center flex-col">
                    <Icon name="box:gloves" class="mx-auto" color="white" size="60" />
                    <h3 class="text-lg m-0">Boxe Amateur</h3>
                    <p class="font-body text-regular uppercase">Intense et idéale pour se dépasser en compétition</p>
                    <NuxtLink to="/"
                        class="inline-block px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-red-800 transition duration-300">
                        En savoir plus
                    </NuxtLink>
                </div>

                <div class="space-y-3 text-center flex-col">
                    <Icon name="box:mouthguard" class="mx-auto" color="white" size="60" />
                    <h3 class="text-lg m-0">Boxe Educative Assault</h3>
                    <p class="font-body text-regular uppercase">Accessible et parfaite pour apprendre en sécurité</p>
                    <NuxtLink to="/"
                        class="inline-block px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-red-800 transition duration-300">
                        En savoir plus
                    </NuxtLink>
                </div>

                <div class="space-y-3 text-center flex-col">
                    <Icon name="box:female-boxer" class="mx-auto" color="white" size="60" />
                    <h3 class="text-lg m-0">Ladies Boxing</h3>
                    <p class="font-body text-regular uppercase">Entre femmes, en confiance et sans pression</p>
                    <NuxtLink to="/"
                        class="inline-block px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-red-800 transition duration-300">
                        En savoir plus
                    </NuxtLink>
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