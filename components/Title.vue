<template>
  <div class="mx-auto flex items-center mb-8" :class="parentClass">
    <div :class="`${classes} ${radius}`" class="p-1">
      <div
        :class="radius"
        class="h-full w-full bg-darkGold flex justify-center items-center"
      >
        <slot />
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
