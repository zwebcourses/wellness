<template>
  <div class="rounded-xl bg-gold h-16" style="box-shadow: 7px 8px 20px 5px #000;">
    <div class="h-full flex justify-center items-center" :class="textColor">
      <a href="#form" class="text-3xl font-extrabold">أعرف المزيد</a>
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
