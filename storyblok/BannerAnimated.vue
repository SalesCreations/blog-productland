<template>
  <div v-editable="blok" class="bar py-20">
    <div class="bar_content">
      <div class="marquee-main">
        <div class="curve-marquee-wrapper ">
          <img
            src="~/assets/images/star-element.png"
            alt="Shape"
            width="33"
            height="33"
            class="autofit"
          />
          <div class="marquee-font-four">{{ blok.text }}</div>
        </div>
        <div class="curve-marquee-wrapper">
          <img
            src="~/assets/images/star-element.png"
            alt="Shape"
            width="33"
            height="33"
            class="autofit"
          />
          <div class="marquee-font-four">{{ blok.text }}</div>
        </div>
        <div class="curve-marquee-wrapper">
          <img
            src="~/assets/images/star-element.png"
            alt="Shape"
            width="33"
            height="33"
            class="autofit"
          />
          <div class="marquee-font-four">{{ blok.text }}</div>
        </div>
        <div class="curve-marquee-wrapper">
          <img
            src="~/assets/images/star-element.png"
            alt="Shape"
            width="33"
            height="33"
            class="autofit"
          />
          <div class="marquee-font-four">{{ blok.text }}</div>
        </div>
      </div>
      <div class="marquee-main">
        <div class="curve-marquee-wrapper ">
          <img
            src="~/assets/images/star-element.png"
            alt="Shape"
            width="33"
            height="33"
            class="autofit"
          />
          <div class="marquee-font-four">{{ blok.text }}</div>
        </div>
        <div class="curve-marquee-wrapper">
          <img
            src="~/assets/images/star-element.png"
            alt="Shape"
            width="33"
            height="33"
            class="autofit"
          />
          <div class="marquee-font-four">{{ blok.text }}</div>
        </div>
        <div class="curve-marquee-wrapper">
          <img
            src="~/assets/images/star-element.png"
            alt="Shape"
            width="33"
            height="33"
            class="autofit"
          />
          <div class="marquee-font-four">{{ blok.text }}</div>
        </div>
        <div class="curve-marquee-wrapper">
          <img
            src="~/assets/images/star-element.png"
            alt="Shape"
            width="33"
            height="33"
            class="autofit"
          />
          <div class="marquee-font-four">{{ blok.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>

<style lang="postcss" scoped>
.bar {
  @apply w-full overflow-x-hidden;
	--marquee-width: 100vw;
	--offset: 20vw;
	--move-initial: calc(-25% + var(--offset));
	--move-final: calc(-50% + var(--offset));
}

.marquee-main {
  @apply flex items-center flex-nowrap;
	animation-play-state: running;
	opacity: 1;
	transition-duration: 0.4s;
}

.curve-marquee-wrapper {
  @apply flex items-center flex-nowrap w-max
}

.curve-marquee-wrapper > img {
  @apply mx-3
}

.marquee-font-four {
  @apply font-display font-black text-5xl
}

.bar_content {
  @apply flex; 
  width: fit-content;
	transform: translate3d(var(--move-initial), 0, 0);
	animation: move 5s linear infinite;
	/* animation-play-state: paused; */
	/* opacity: 0; */
	transition: opacity 0.1s;
}

/* Create the animation */
@keyframes move {
	0% {
		transform: translate3d(var(--move-initial), 0, 0);
	}

	100% {
		transform: translate3d(var(--move-final), 0, 0);
	}
}
</style>
