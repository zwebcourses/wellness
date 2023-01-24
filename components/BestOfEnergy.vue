<template>
  <section
    id="best-of-energy"
    class="block bg-green bg-pattern-products bg-pattern bg-blend-overlay bg-cover bg-center md:py-24 py-12 relative overflow-hidden"
  >
    <Title classes="h-20 md:h-[150px] w-full md:w-3/5" radius="rounded-full">
      <h2
        class="text-white md:text-5xl text-2xl text-center font-extrabold lg:scale-x-125"
      >
        المنتجات الأكثر مبيعا للشركة
      </h2>
    </Title>
    <div class="text-right mt-24">
      <Title
        parentClass="text-right"
        classes="h-16 md:h-24 w-3/5 md:w-1/3"
        radius="rounded-[10px]"
      >
        <h2
          class="text-white md:text-4xl text-xl text-center font-extrabold lg:scale-x-125"
        >
          منتجات الطاقة
        </h2>
      </Title>
    </div>
    <div class="mx-auto mt-24">
      <no-ssr placeholder="Loading...">
        <carousel-3d
          :autoplay="false"
          :autoplay-timeout="3000"
          :controls-visible="true"
          :controls-prev-html="'&#x203A; '"
          :controls-next-html="'&#x2039; '"
          :controls-width="10"
          :controls-height="30"
          :clickable="true"
        >
          <slide
            class="rounded-full"
            v-for="(energy, i) in energies"
            :key="i"
            :index="i"
          >
            <div
              class="relative bg-frame bg-contain bg-center bg-no-repeat rounded-tl-[50px] rounded-br-[50px]"
            >
              <div class="mx-auto w-full">
                <nuxt-img
                  format="webp"
                  :src="`img/bestOf/energy/${energy.name}`"
                  :alt="energy.alt"
                  style="pointer-events: none"
                  onContextMenu="return false;"
                  class="relative top-[-35px]"
                />
                <div class="h-40 relative top-[-15px]">
                  <div class="p-2 text-center">
                    <h2 class="md:text-5xl text-3xl font-extrabold text-black">
                      {{ energy.title }}
                    </h2>
                  </div>
                  <div class="px-4 text-center">
                    <p class="font-bold md:text-xl text-lg text-gray-800">
                      {{ energy.text }}
                    </p>
                  </div>
                </div>
                <!-- Btn -->
                <div
                  class="w-2/3 mx-auto relative md:bottom-[15px] bottom-[25px]"
                >
                  <CTAButton />
                </div>
              </div>
            </div>
          </slide>
        </carousel-3d>
      </no-ssr>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    Title: () =>
      import(/* webpackChunkName: 'Title' */ "~/components/Title.vue"),
    CTAButton: () =>
      import(/* webpackChunkName: 'CTAButton' */ "~/components/CTAButton.vue"),
  },
  data: () => ({
    energies: [
      {
        name: "bull power-min.png",
        title: "Bull Power",
        text: "للحصول علي حجم اكبر !!",
      },
      {
        name: "golden chew-min.png",
        title: "Golden Chew",
        text: "أقوي محفز للرجال",
      },
      {
        name: "golden spray-min.png",
        title: "Golden spray",
        text: "سبراي الرجال للانتصاب القوي",
      },
      {
        name: "long night-min.png",
        title: "Long Night",
        text: "سبراي للرجال للحصول علي علاقة عاطفية اطول",
      },
      {
        name: "volt drops-min.png",
        title: "Volt Drops",
        text: "يعطيك الطاقة و الانتعاش اللازمتين قبل أي نشاط بدني",
      },
    ],
  }),
};
</script>

<style>

#best-of-energy .carousel-3d-container {
  height: 550px !important;
  overflow: visible !important;
}

#best-of-energy .carousel-3d-slide img {
  width: 100% !important;
  height: 100% !important;
}
#best-of-energy .carousel-3d-slide {
  width: 100% !important;
  height: unset !important;
  overflow: visible !important;
}
#best-of-energy .carousel-3d-slider {
  display: flex !important;
  justify-content: center !important;
}

@media only screen and (min-width: 320px) and (max-width: 480px) {
  #best-of-energy .carousel-3d-container {
    height: 500px !important;
  }
  #best-of-energy .carousel-3d-slide {
    width: 300px !important;
  }
  #best-of-energy .carousel-3d-slide img {
    width: 100% !important;
    height: 100% !important;
  }
}
</style>
