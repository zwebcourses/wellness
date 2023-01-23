<template>
  <div>
    <footer id="footer" class="bg-green flex flex-col md:flex-row">
      <div class="md:w-1/2 w-full bg-green flex flex-col justify-center items-center p-8">
        <nuxt-img
          format="webp"
          src="img/footer/logo.png"
          alt="logo"
          style="pointer-events: none"
          onContextMenu="return false;"
          class="md:w-2/3 w-1/2"
        />
        <div class="mt-12">
          <p class="md:text-6xl text-3xl text-white text-center">اختيارك الأول</p>
          <p class="md:text-6xl text-3xl text-white text-center">لمنتجات الصحة</p>
          <p class="md:text-6xl text-3xl text-white text-center">والجمال</p>
        </div>
      </div>
      <div
        class="md:w-2/3 w-full flex justify-center items-end"
      >
        <div class="mx-auto w-full">
          <nuxt-img
            format="webp"
            src="img/footer/hands.png"
            alt="hands"
            style="pointer-events: none"
            onContextMenu="return false;"
            class="relative left-[11px]"
          />
        </div>
      </div>
    </footer>
    <div class="w-full h-20 bg-gold"></div>
  </div>
</template>
