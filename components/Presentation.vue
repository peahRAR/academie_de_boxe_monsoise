<template>
    <div class="relative">
        <!-- Section principale -->
        <section class="relative bg-dark-blue text-white py-16 pb-2 overflow-visible z-10">
            <div class="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-start">
                <!-- Bloc gauche : texte -->
                <div class="w-full md:w-1/2 space-y-6">
                    <h2 class="text-4xl md:text-5xl font-bebas mb-0 uppercase leading-tight">
                        Académie de Boxe Monsoise
                    </h2>
                    <div class="text-4xl md:text-4xl font-script text-center pl-4 -mt-5 text-red-600">
                        "La Bambam"
                    </div>
                    <div class="font-body text-base md:text-lg leading-relaxed space-y-6">
                        <p>
                            L’<strong>Académie de Boxe Monsoise</strong>, surnommée affectueusement <em>“La
                                Bambam”</em>,
                            est bien plus qu’un simple club de boxe anglaise. Nichée au cœur du <strong>Fort de
                                Mons</strong>,
                            à Villeneuve d’Ascq dans la métropole lilloise, elle représente un lieu d’apprentissage, de
                            transmission
                            et de dépassement de soi. Depuis sa création, le club s’engage à offrir un environnement à
                            la fois
                            structuré, accessible et humain, où chacun peut évoluer à son rythme, qu’il soit débutant ou
                            boxeur confirmé.
                        </p>

                        <p>
                            Nos entraînements s’articulent autour d’un encadrement rigoureux, dispensé par des coachs
                            passionnés,
                            expérimentés et attentifs au progrès de chacun. Ici, la boxe est enseignée comme un
                            <strong>art du mouvement et de la discipline</strong>, dans le respect des valeurs sportives
                            :
                            courage, rigueur, respect et persévérance.
                        </p>

                        <p>
                            L’Académie accueille aussi bien les jeunes à partir de 8 ans que les adultes, avec des
                            séances adaptées
                            à tous les niveaux. Du loisir à la compétition, chacun trouve sa place dans un cadre
                            bienveillant où l’on
                            progresse physiquement autant que mentalement. Des sections spécifiques, comme le travail
                            technique,
                            le cardio-boxe ou la préparation physique, viennent enrichir les entraînements pour
                            permettre un
                            développement complet.
                        </p>

                        <p>
                            La Bambam, c’est aussi une communauté : une ambiance chaleureuse, soudée, où les liens se
                            tissent au
                            fil des rounds. Des événements internes, des stages, et des rencontres interclubs ponctuent
                            la saison
                            pour renforcer l’esprit d’équipe et la cohésion.
                        </p>

                        <p>
                            Que tu sois là pour te remettre en forme, apprendre à te défendre, préparer une compétition
                            ou
                            simplement canaliser ton énergie dans un cadre stimulant,
                            <strong>l’Académie de Boxe Monsoise t’ouvre ses portes</strong>.
                            Entre dans le ring. Et découvre ce que tu as vraiment dans les gants.
                        </p>
                    </div>
                </div>

                <!-- Bloc droit : grille de photos -->
                <div class="w-full md:w-1/2 flex justify-center gap-6">
                    <!-- Colonne de gauche -->
                    <div class="flex flex-col gap-4 w-[45%]">
                        <NuxtImg src="/img/ABM1.jpg" alt="Photo 1" class="aspect-square object-cover rounded" />
                        <NuxtImg src="/img/ABM2.jpg" alt="Photo 2" class="aspect-square object-cover rounded" />
                        <NuxtImg src="/img/ABM3.jpg" alt="Photo 3" class="aspect-square object-cover rounded" />
                    </div>

                    <!-- Colonne de droite décalée -->
                    <div class="flex flex-col gap-4 w-[45%] translate-y-10">
                        <NuxtImg src="/img/ABM4.jpg" alt="Photo 4" class="aspect-square object-cover rounded" />
                        <NuxtImg src="/img/ABM5.jpg" alt="Photo 5" class="aspect-square object-cover rounded" />
                        <NuxtImg src="/img/ABM6.jpg" alt="Photo 6" class="aspect-square object-cover rounded" />
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