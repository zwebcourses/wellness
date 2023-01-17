<template>
  <section
    class="w-full lg:h-screen md:h-[600px] overflow-hidden bg-wallpaper bg-cover bg-no-repeat">
    <TheHeader v-on:hideLabel="(status) => hideLabelFun(status)" />
    <!-- Header Text -->
    <div class="flex flex-col md:flex-row">
      <div class="w-full md:w-1/2 lg:h-screen h-[600px] flex justify-center items-end pb-24">
        <!-- Btn -->
        <div class="md:w-2/5 w-1/2 flex justify-center items-center">
          <div class="md:w-2/3 w-full">
            <CTAButton textColor="text-white" />
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 lg:h-screen h-[600px] flex justify-center items-center bg-green object object-cover rounded-r-[30px]">
        <div class="w-5/6 text-center">
          <h1 class="text-5xl font-extrbold text-gold mb-4">
            الثروة الأولى هي الصحّة
          </h1>
          <p class="text-3xl text-white font-extrbold">
            أعظم هدية يمكنك تقديمها لعائلتك والعالم هtو أنك بصحة جيدة
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    TheHeader: () =>
      import(/* webpackChunkName: 'TheHeader' */ "~/components/TheHeader.vue"),
    CTAButton: () =>
      import(/* webpackChunkName: 'CTAButton' */ "~/components/CTAButton.vue"),
  },
  data: () => ({
    showLabel: true,
  }),
  methods: {
    hideLabelFun(status) {
      this.showLabel = !status;
    },
  },
};
</script>
