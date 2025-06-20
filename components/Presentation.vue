<template>
    <div class="relative">
        <!-- Section principale -->
        <section class="relative bg-dark-blue text-white py-16 pb-2 overflow-visible z-10">
            <div class="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-start">
                <!-- Bloc gauche : texte -->
                <div class="w-full md:w-1/2 space-y-6">
                    <h2 class="text-4xl md:text-5xl font-bebas mb-0 uppercase leading-tight">
                        Votre Club de Boxe Anglaise
                    </h2>
                    <div class="text-4xl md:text-4xl font-script text-center pl-4 -mt-5 text-red-600">
                        "L'Esprit du Noble Art"
                    </div>
                    <div class="font-body text-base md:text-lg leading-relaxed space-y-6">
                        <p>
                            Bien plus qu’un simple lieu d’entraînement, <strong>votre club de boxe</strong> incarne des
                            valeurs fortes :
                            passion, engagement, et dépassement de soi. Pensé comme un espace de transmission et
                            d’épanouissement, il s’adresse
                            à tous ceux qui souhaitent découvrir ou perfectionner l’art de la boxe anglaise.
                        </p>

                        <p>
                            Les séances sont encadrées par des coachs qualifiés et attentifs, alliant rigueur technique
                            et approche pédagogique.
                            Ici, chaque adhérent évolue à son rythme, qu’il soit débutant ou pratiquant confirmé.
                            L’objectif : progresser en
                            toute sécurité dans une atmosphère motivante et respectueuse.
                        </p>

                        <p>
                            Le club propose des cours adaptés à tous les niveaux et à tous les âges, à partir de 8 ans.
                            Des modules spécifiques
                            sont également proposés : préparation physique, cardio-boxe, perfectionnement technique ou
                            encore accompagnement
                            à la compétition.
                        </p>

                        <p>
                            L’esprit de groupe occupe une place centrale. Les entraînements favorisent l’entraide, la
                            confiance et la cohésion.
                            Des événements, stages et rencontres viennent enrichir la saison pour renforcer les liens
                            entre pratiquants.
                        </p>

                        <p>
                            Que tu sois là pour te remettre en forme, apprendre à te défendre, canaliser ton énergie ou
                            viser la compétition,
                            <strong>ce club t’offre un cadre stimulant pour révéler ton potentiel</strong>. Monte sur le
                            ring. Et découvre de quoi tu es capable.
                        </p>
                    </div>
                </div>


                <!-- Bloc droit : grille de photos -->
                <div class="w-full md:w-1/2 flex justify-center gap-6">
                    <!-- Colonne de gauche -->
                    <div class="flex flex-col gap-4 w-[45%]">
                        <NuxtImg src="/img/img-placeholder1.png" alt="Photo 1" class="aspect-square object-cover rounded" />
                        <NuxtImg src="/img/img-placeholder2.png" alt="Photo 2" class="aspect-square object-cover rounded" />
                        <NuxtImg src="/img/img-placeholder3.png" alt="Photo 3" class="aspect-square object-cover rounded" />
                    </div>

                    <!-- Colonne de droite décalée -->
                    <div class="flex flex-col gap-4 w-[45%] translate-y-10">
                        <NuxtImg src="/img/img-placeholder4.png" alt="Photo 4" class="aspect-square object-cover rounded" />
                        <NuxtImg src="/img/img-placeholder5.png" alt="Photo 5" class="aspect-square object-cover rounded" />
                        <NuxtImg src="/img/img-placeholder6.png" alt="Photo 6" class="aspect-square object-cover rounded" />
                    </div>
                </div>
            </div>
        </section>

        <!-- Clip-path bas en dehors de la section -->
        <div class="absolute -bottom-[120px] left-0 w-full h-[120px] bg-dark-blue triangle-clip-bot z-0" />
    </div>
</template>

<style scoped>
.triangle-clip-bot {
    clip-path: polygon(0 100%, 100% 0%, 100% 100%);
    transform: scaleY(-1);

}
</style>