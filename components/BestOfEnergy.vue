<template>
  <section
    id="best-of-energy"
    class="block bg-green bg-pattern-products bg-pattern bg-blend-overlay bg-cover object object-cover bg-center py-24 relative overflow-hidden"
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
                <div class="w-2/3 mx-auto relative md:bottom-[15px] bottom-[25px]">
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
        name: "bull power.png",
        title: "bull power",
        text: "للحصول علي حجم اكبر !!",
      },
      {
        name: "golden chew.png",
        title: "golden chew",
        text: "أقوي محفز للرجال",
      },
      {
        name: "golden spray.png",
        title: "golden spray",
        text: "golden spray",
      },
      {
        name: "long night.png",
        title: "long night",
        text: "للحصول علي علاقة عاطفية اطول",
      },
      {
        name: "volt drops.png",
        title: "volt drops",
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
#best-of-energy .Next slide span {
  font-size: 180px;
  color: #fff;
}
#best-of-energy .carousel-3d-container .next span {
  font-size: 180px;
  color: #fff;
}
#best-of-energy .carousel-3d-container .prev span {
  font-size: 180px;
  color: #fff;
}

#best-of-energy .carousel-3d-container a.prev {
  width: 50px !important;
}
#best-of-energy .carousel-3d-slide {
  width: 100% !important; /*400px*/
  /* box-shadow: black 0px 0px 16px 14px !important;
  border-radius: 0.75rem !important;
  background-color: #fff !important; */
  height: unset !important;
  overflow: visible !important;
}

.carousel-3d-slide:not(.current) {
  filter: grayscale(1) !important;
}
.carousel-3d-slide {
  border-radius: 50px 0px !important;
  background-color: unset !important;
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
