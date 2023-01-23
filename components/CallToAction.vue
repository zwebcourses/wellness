<template>
  <section
    class="w-full bg-header bg-cover bg-center bg-no-repeat overflow-hidden"
  >
    <TheHeader v-on:hideLabel="(status) => hideLabelFun(status)" />
    <div class="flex justify-center items-end md:h-screen h-[400px]">
      <!-- Header Text -->
      <div class="lg:w-2/5 md:3/5 w-11/12 flex flex-col justify-center items-center">
        <div class="w-full text-center p-4">
          <h1 class="md:text-5xl text-xl font-extrbold text-gold mb-4">
            الثروة الأولى هي الصحّة
          </h1>
          <p class="md:text-3xl text-xl text-white font-extrbold">
            أعظم هدية يمكنك تقديمها لعائلتك والعالم هtو أنك بصحة جيدة
          </p>
        </div>
        <div class="md:w-2/3 w-1/3 md:mb-8">
          <CTAButton textColor="text-white" />
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
