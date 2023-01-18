<template>
  <section
    class="w-full lg:h-screen overflow-hidden">
    <TheHeader v-on:hideLabel="(status) => hideLabelFun(status)" />
    <!-- Header Text -->
    <div class="flex flex-col md:flex-row">
      <div class="w-full md:w-1/2 md:h-screen h-[470px] bg-mobile bg-cover bg-no-repeat flex justify-center items-end pb-24">
        <!-- Btn -->
        <div class="md:w-2/5 w-1/2 flex justify-center items-center">
          <div class="md:w-2/3 w-full">
            <CTAButton textColor="text-white" />
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 md:h-screen h-[470px] flex justify-center items-center bg-green rounded-r-[30px]" style="box-shadow: 7px 8px 20px 5px #000;">
        <div class="w-full text-center p-4">
          <h1 class="md:text-5xl text-3xl font-extrbold text-gold mb-4">
            الثروة الأولى هي الصحّة
          </h1>
          <p class="md:text-3xl text-xl text-white font-extrbold">
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
