<template>
  <div>
    <CallToAction />
    <Mission />
    <About />
    <BestOfEnergy />
    <BestOfLoss />
    <Products />
    <Contacts />
    <Footer />
  </div>
</template>
<script>
export default {
  components: {
    CallToAction: () =>
      import(
        /* webpackChunkName: 'CallToAction' */ "~/components/CallToAction.vue"
      ),
    Mission: () =>
      import(/* webpackChunkName: 'Mission' */ "~/components/Mission.vue"),
    About: () =>
      import(/* webpackChunkName: 'About' */ "~/components/About.vue"),
    BestOfEnergy: () =>
      import(
        /* webpackChunkName: 'BestOfEnergy' */ "~/components/BestOfEnergy.vue"
      ),
    BestOfLoss: () =>
      import(
        /* webpackChunkName: 'BestOfLoss' */ "~/components/BestOfLoss.vue"
      ),
    Products: () =>
      import(/* webpackChunkName: 'Products' */ "~/components/Products.vue"),
    Footer: () =>
      import(/* webpackChunkName: 'Footer' */ "~/components/Footer.vue"),
    Contacts: () =>
      import(/* webpackChunkName: 'Contacts' */ "~/components/Contacts.vue"),
  },
};
</script>
