<template>
  <div class="h-24 bg-bottun bg-contain bg-center bg-no-repeat">
    <div class="h-full w-full flex justify-center items-center" :class="textColor">
      <a href="#form" class="md:text-3xl text-lg font-extrabold">أعرف المزيد</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    textColor: {
      type: String,
      default: 'text-black'
    }
  }
}
</script>
