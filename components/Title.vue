<template>
  <div class="mx-auto flex items-center mb-8" :class="parentClass">
    <div :class="`${classes} ${radius}`" class="p-1">
      <div :class="radius" class="h-full w-full bg-darkGold flex justify-center items-center">
        <h2
          class="text-white md:text-7xl text-3xl text-center font-extrabold bg-clip-text bg-gradient-to-r from-header to-yellow-700 lg:scale-x-125"
        >
        <slot />
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    parentClass: {
      Type: String,
      default: () => "justify-center",
    },
    classes: {
      Type: String,
      default: () => "",
    },
    radius: {
      Type: String,
      default: () => "md:rounded-[50px]",
    },
  },
};
</script>
