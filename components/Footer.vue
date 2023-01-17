<template>
  <div>
    <footer id="footer" class="bg-green grid grid-cols-2">
      <div class="w-full bg-green flex flex-col justify-center items-center p-8">
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
      <div
        class="w-full bg-side bg-cover bg-no-repeat flex justify-center items-end"
      >
        <div class="mx-auto w-full">
          <nuxt-img
            format="webp"
            src="img/footer/hands.png"
            alt="hands"
            style="pointer-events: none"
            onContextMenu="return false;"
            class="relative md:left-[100px] left-[11px]"
          />
        </div>
      </div>
    </footer>
    <div class="w-full h-20 bg-gold"></div>
  </div>
</template>
