<template>
  <section
    id="about-us"
    class="block bg-pattern bg-green bg-blend-overlay bg-cover bg-center py-24 relative overflow-hidden"
  >
    <Title classes="h-20 md:h-[150px] w-5/6 md:w-3/5" radius="rounded-full">
      <h2
        class="text-white md:text-5xl text-2xl text-center font-extrabold lg:scale-x-125"
      >
        نبذة عن التيميت ويلنس
      </h2>
    </Title>
    <div class="mx-auto mt-24 w-full">
      <no-ssr placeholder="Loading...">
        <carousel-3d
          :autoplay="false"
          :autoplay-timeout="3000"
          :controls-visible="true"
          :controls-prev-html="'&#x203A; '"
          :controls-next-html="'&#x2039; '"
          :controls-width="10"
          :controls-height="30"
          :clickable="true"
        >
          <slide
            v-for="(about, i) in abouts"
            :key="i"
            :index="i"
          >
            <div class="bg-white relative h-[345px] rounded-[50px]">
              <div
                class="mx-auto bg-gold rounded-full w-[80px] relative top-[-50px]"
              >
                <nuxt-img
                  format="webp"
                  :src="`img/about/${about.icon}`"
                  :alt="about.alt"
                  style="pointer-events: none"
                  onContextMenu="return false;"
                  class="w-[80px]"
                />
              </div>
              <div class="p-2 text-center">
                <h6 class="text-4xl font-extrabold text-black">
                  {{ about.title }}
                </h6>
              </div>
              <div class="px-4 text-center h-60">
                <p class="text-xl font-bold text-gray-800">
                  {{ about.text }}
                </p>
              </div>
            </div>
          </slide>
        </carousel-3d>
      </no-ssr>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    Title: () =>
      import(/* webpackChunkName: 'Title' */ "~/components/Title.vue"),
  },
  data: () => ({
    abouts: [
      {
        icon: "lined-global-ccl@3x.webp",
        title: "أكثر من 30 دولة",
        text: "نوصل منتجات الصحة والعافية للجميع حول العالم بـ 5 لغة، و20 عملة، و6 خيار دفع.",
      },
      {
        icon: "lined-trial@3x.webp",
        title: "ما يزيد عن ٣٠ منتج",
        text: "نقدم نفس العلامات التجارية الشهيرة الموجودة في المتاجر الوطنية الكبيرة.",
      },
      {
        icon: "lined-star@3x.webp",
        title: "ما يزيد عن 20000 تقييم موثوق",
        text: "نسمح فقط بكتابة التقييمات بعد طلب العملاء للمنتج المحدد من Ultimate Wellness وهكذا يمكنك الشراء بطريقة أكثر ذكاءً.",
      },
      {
        icon: "lined-guarantee@3x.webp",
        title: "ما يزيد عن ١٠٠،٠٠٠ عميل نشط",
        text: "يعاود ما يزيد عن ١٠٠،٠٠٠ عميل زيارتنا للحصول على صفقات ومنتجات ومكافآت.",
      },
      {
        icon: "lined-global-ccl@3x.webp",
        title: "ما يزيد عن ١٠٠ موظف في فريقنا",
        text: "إننا بالفعل شركة عالمية وأعضاء فريقنا ينتشرون حول العالم.",
      },
      {
        icon: "centers.svg",
        title: "٢ مراكز معالجة",
        text: "مراكز المعالجة والمخازن الخاصة بنا مكيفة الهواء ومتوافقة مع ممارسات التصنيع الجيدة أو معايير أيزو للحفاظ على سلامة ونضارة المنتجات.",
      },
    ],
  }),
};
</script>

<style>
#about-us .carousel-3d-container {
  height: 345px !important;
  overflow: visible !important;
}
#about-us .carousel-3d-slide {
  height: unset !important;
  overflow: visible !important;
}
#about-us .carousel-3d-slide img {
  width: 80px !important;
  height: 80px !important;
}

#about-us .carousel-3d-slide {
  width: 345px !important;
  border-radius: 50px !important;
  background-color: #fff !important;
}
#about-us .carousel-3d-slider {
  display: flex !important;
  justify-content: center !important;
}

@media only screen and (min-width : 320px) and (max-width : 480px) {
  #about-us .carousel-3d-container {
    height: 310px !important;
  }
  #about-us .carousel-3d-slide {
    width: 300px !important;
  }
  #about-us .carousel-3d-slide img {
    width: 100% !important;
    height: 100% !important;
  }
}
</style>
