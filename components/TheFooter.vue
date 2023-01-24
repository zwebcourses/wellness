<template>
  <div class="w-full h-20 bg-darkGold flex justify-center items-center">
    <ul class="mx-auto w-2/3 flex justify-between items-center mt-0">
      <li
        class="clickable text-xs md:text-xl font-bold text-black hover:text-blue-400"
      >
        <nuxt-link :to="{ name: 'partners' }">شركائنا</nuxt-link>
      </li>
      <li
        class="clickable text-xs md:text-xl font-bold text-black hover:text-blue-400"
      >
        <nuxt-link :to="{ name: 'privacy' }">سياسة الخصوصية</nuxt-link>
      </li>
      <li
        class="clickable text-xs md:text-xl font-bold text-black hover:text-blue-400"
      >
        <nuxt-link :to="{ name: 'terms' }">الشروط والاحكام</nuxt-link>
      </li>
    </ul>
  </div>
</template>
