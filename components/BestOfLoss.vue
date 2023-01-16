<template>
  <section
    id="best-of-loss"
    class="block bg-green bg-center pt-8 pb-4 relative overflow-hidden"
  >
    <div class="text-right">
      <Title
        parentClass="text-right"
        classes="h-16 md:h-24 w-3/4 md:w-1/3"
        radius="rounded-none"
      >
        <h2
          class="text-white md:text-4xl text-3xl text-center font-extrabold bg-clip-text bg-gradient-to-r from-header to-yellow-700 lg:scale-x-125"
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
            <div class="relative h-[550px] bg-frame bg-cover">
              <div class="mx-auto w-full relative top-[-105px]">
                <nuxt-img
                  format="webp"
                  :src="`img/bestOf/weight/${loss.name}`"
                  :alt="loss.alt"
                  style="pointer-events: none"
                  onContextMenu="return false;"
                />
                <div class="p-2 text-center">
                  <h2 class="text-6xl font-extrabold text-black">
                    {{ loss.title }}
                  </h2>
                </div>
                <div class="px-4 text-center">
                  <p class="font-bold text-2xl text-gray-800">
                    {{ loss.text }}
                  </p>
                </div>
                <!-- Btn -->
                <div class="w-2/3 mx-auto relative bottom-[-140px]">
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
        name: "garcinia.png",
        title: "garcinia",
        text: "garcinia",
      },
      {
        name: "raspberry.png",
        title: "raspberry",
        text: "raspberry",
      },
      {
        name: "ultimate keto.png",
        title: "ultimate keto",
        text: "ultimate keto",
      },
    ],
  }),
};
</script>

<style>
#best-of-loss .carousel-3d-container {
  height: 550px !important;
}
@media (min-width: 320px) {
  #best-of-loss .carousel-3d-container {
    height: 550px !important;
    overflow: visible !important;
  }
  #best-of-loss .carousel-3d-slide img {
    width: 100% !important;
    height: 100% !important;
  }
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
  /* box-shadow: black 0px 0px 16px 14px !important;
  border-radius: 0.75rem !important;
  background-color: #fff !important; */
  height: unset !important;
  overflow: visible !important;
}
#best-of-loss .carousel-3d-slider {
  display: flex !important;
  justify-content: center !important;
}
</style>
