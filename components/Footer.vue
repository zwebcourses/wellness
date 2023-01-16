<template>
  <section id="footer" class="bg-green flex md:flex-row flex-col justify-between">
    <div class="md:w-1/2 w-full bg-green flex flex-col justify-center items-center">
      <nuxt-img
        format="webp"
        src="img/footer/logo.png"
        alt="logo"
        style="pointer-events: none"
        onContextMenu="return false;"
        class="w-2/3"
      />
      <div class="mt-12">
        <p class="text-7xl text-white text-center">اختيارك الأول</p>
        <p class="text-7xl text-white text-center">لمنتجات الصحة</p>
        <p class="text-7xl text-white text-center">والجمال</p>
      </div>
    </div>
    <div class="h-[1200px] md:w-1/2 w-full bg-side bg-cover md:bg-contain bg-no-repeat flex justify-center items-end">
      <div class="mx-auto w-full">
        <nuxt-img
          format="webp"
          src="img/footer/hands.png"
          alt="hands"
          style="pointer-events: none"
          onContextMenu="return false;"
          class="md:mb-[20px] mb-[11px] relative md:left-[100px] left-[11px]"
        />
      </div>
    </div>
  </section>
</template>
