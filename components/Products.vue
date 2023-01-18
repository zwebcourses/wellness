<template>
  <section
    id="products"
    class="block object object-cover bg-pattern bg-cover bg-center bg-green float-none py-12"
  >
    <div class="text-right">
      <Title
        parentClass="text-right"
        classes="h-16 md:h-24 w-3/4 md:w-1/3"
        radius="rounded-[10px]"
      >
        <h2
          class="text-white md:text-4xl text-3xl text-center font-extrabold lg:scale-x-125"
        >
          العناية بالبشرة
        </h2>
      </Title>
    </div>
    <div class="w-full flex md:flex-row flex-col justify-between items-center px-12">
      <div
        class="md:w-2/5 w-full mb-12 md:mb-0"
        v-for="(product, i) in products"
        :key="i"
        :index="i"
      >
        <div class="relative bg-frame bg-cover rounded-tl-[50px] rounded-br-[50px]">
          <div class="mx-auto w-full relative">
            <nuxt-img
              format="webp"
              :src="`img/products/${product.name}`"
              :alt="product.alt"
              style="pointer-events: none"
              onContextMenu="return false;"
            />
            <div class="p-2 text-center">
              <h2 class="md:text-6xl text-3xl font-extrabold text-black">
                {{ product.title }}
              </h2>
            </div>
            <div class="px-4 text-center">
              <p class="font-bold text-lg text-gray-800">
                {{ product.text }}
              </p>
            </div>
            <!-- Btn -->
            <div class="w-2/3 mx-auto relative top-[25px]">
              <CTAButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    CTAButton: () =>
      import(/* webpackChunkName: 'CTAButton' */ "~/components/CTAButton.vue"),
  },
  data: () => ({
    products: [
      {
        name: "golden.png",
        title: "golden",
        text: "golden",
      },
      {
        name: "instant whitening.png",
        title: "instant whitening",
        text: "instant whitening",
      },
    ],
  }),
};
</script>
