<template>
  <div class="gtm">
    <!-- Google Tag Manager script will be injected here -->
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.loadGtmScript();
  },
  methods: {
    loadGtmScript() {
      if (process.client) {
        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtm.js?id=${this.id}`;
        script.async = true;
        document.head.appendChild(script);
      }
    },
  },
};
</script>