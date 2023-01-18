<template>
  <nav
    class="w-full mx-auto md:flex md:items-center md:px-12 bg-transparent absolute"
  >
    <div class="flex items-center justify-between p-4">
      <router-link to="/">
        <nuxt-img
          format="webp"
          class="w-[80px] md:w-[80px]"
          src="/img/header/logo.png"
          alt="Golden_Collagen"
          style="pointer-events: none"
          onContextMenu="return false;"
        />
      </router-link>
      <!-- Mobile menu button -->
      <div @click="toggleMenu" class="flex md:hidden">
        <button
          type="button"
          class="text-gold focus:outline-none focus:text-gold"
        >
          <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
            <path
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
    <ul
      :class="showMenu ? 'flex' : 'hidden'"
      class="flex-col md:mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
    >
    <li>
        <a
          href="#home"
          class="text-gold md:text-2xl text-lg inline-block clickable mt-0 hover:text-header px-4 py-2 rounded hover:bg-black mr-2"
        >
          الرئيسية
        </a>
      </li>
      <li>
        <a
          href="#about-us"
          class="text-gold md:text-2xl text-lg inline-block clickable mt-0 hover:text-header px-4 py-2 rounded hover:bg-black mr-2"
        >
          نبذه عنا
        </a>
      </li>
      <li>
        <a
          href="#products"
          class="text-gold md:text-2xl text-lg inline-block clickable mt-0 hover:text-header px-4 py-2 rounded hover:bg-black mr-2"
        >
          منتجات
        </a>
      </li>
      <li>
        <a
          href="#contact-us"
          class="text-gold md:text-2xl text-lg inline-block clickable mt-0 hover:text-header px-4 py-2 rounded hover:bg-black mr-2"
        >
          تواصل معنا
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data: () => ({
    showMenu: false,
  }),
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
      this.$emit("hideLabel", this.showMenu);
    },
  },
};
</script>
