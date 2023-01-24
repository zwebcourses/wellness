<template>
  <section
    id="best-of-loss"
    class="block bg-green bg-center md:py-24 py-12 relative overflow-hidden"
  >
    <div class="text-right">
      <Title
        parentClass="text-right"
        classes="h-16 md:h-24 w-3/5 md:w-1/3"
        radius="rounded-[10px]"
      >
        <h2
          class="text-white md:text-4xl text-xl text-center font-extrabold lg:scale-x-125"
        >
          منتجات التخسيس
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
            v-for="(loss, i) in losses"
            :key="i"
            :index="i"
          >
          <div
              class="relative bg-frame bg-contain bg-center bg-no-repeat rounded-tl-[50px] rounded-br-[50px]"
            >
              <div class="mx-auto w-full">
                <nuxt-img
                  format="webp"
                  :src="`img/bestOf/loss/${loss.name}`"
                  :alt="loss.alt"
                  style="pointer-events: none"
                  onContextMenu="return false;"
                  class="relative top-[-35px]"
                />
                <div class="h-40 relative top-[-15px]">
                  <div class="p-2 text-center">
                    <h2 class="md:text-5xl text-3xl font-extrabold text-black">
                      {{ loss.title }}
                    </h2>
                  </div>
                  <div class="px-4 text-center">
                    <p class="font-bold md:text-xl text-lg text-gray-800">
                      {{ loss.text }}
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
    losses: [
      {
        name: "garcinia-min.png",
        title: "Garcinia Cambogia",
        text: "مستخلص مادة الجارسينيا لنقص الوزن بشكل طبيعي",
      },
      {
        name: "raspberry-min.png",
        title: "Raspberry Ketone",
        text: "لخسارة ١٥ كيلو خلال شهر",
      },
      {
        name: "ultimate keto-min.png",
        title: "Ultimate keto",
        text: "للحصول علي الوزن المثالي بشكل آمن",
      },
    ],
  }),
};
</script>

<style>
#best-of-loss .carousel-3d-container {
  height: 550px !important;
  overflow: visible !important;
}

#best-of-loss .carousel-3d-slide img {
  width: 100% !important;
  height: 100% !important;
}
#best-of-loss .Next slide span {
  font-size: 180px;
  color: #fff;
}
#best-of-loss .carousel-3d-container .next span {
  font-size: 180px;
  color: #fff;
}
#best-of-loss .carousel-3d-container .prev span {
  font-size: 180px;
  color: #fff;
}

#best-of-loss .carousel-3d-container a.prev {
  width: 50px !important;
}
#best-of-loss .carousel-3d-slide {
  width: 100% !important; /*400px*/
  height: unset !important;
  overflow: visible !important;
}
#best-of-loss .carousel-3d-slider {
  display: flex !important;
  justify-content: center !important;
}
@media only screen and (min-width: 320px) and (max-width: 480px) {
  #best-of-loss .carousel-3d-container {
    height: 500px !important;
  }
  #best-of-loss .carousel-3d-slide {
    width: 300px !important;
  }
  #best-of-loss .carousel-3d-slide img {
    width: 100% !important;
    height: 100% !important;
  }
}
</style>
