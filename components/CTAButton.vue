<template>
  <div class="rounded-full bg-bottom bg-cover h-16" style="box-shadow: 4px 4px 8px 0px #393030">
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
