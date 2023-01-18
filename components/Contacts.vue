<template>
  <section
    id="contacts"
    class="h-[600px] bg-pattern-contacts bg-green bg-no-repeat bg-cover flex justify-center items-end py-12"
  >
    <div class="w-full text-center">
      <h2 class="text-white text-4xl font-extrabold">معلومات الاتصال</h2>
      <p class="mt-4 text-white text-2xl font-extrabold">+1222334488765</p>
      <p class="mt-4 text-white text-2xl font-extrabold">
        info@ultimateweliness.com
      </p>
      <p class="mt-4 text-white text-2xl font-extrabold">
        العنوان : جدة / المملكة العربية السعودية
      </p>
      <div class="w-1/2 mx-auto mt-8 flex justify-center items-center">
        <div
          class="flex flex-row justify-center items-center"
          v-for="(social, i) in socials"
          :key="i"
          :index="i"
        >
          <div class="mx-auto w-1/2 bg-gold rounded-full p-4">
            <nuxt-img
              format="webp"
              :src="`img/contacts/${social}.png`"
              :alt="social"
              style="pointer-events: none"
              onContextMenu="return false;"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    socials: ["linkedin", "twitter", "instagram", "facebook"],
  }),
};
</script>
