<template>
  <div class="container" ref="container">
    <section class="section1" ref="section1">
      <FallingToWater />
    </section>
    <section class="section2" ref="section2">
      <Board
        @yellow="changeToYellow"
        @green="changeToGreen"
        @brown="changeToBrown"
      />
    </section>
    <section class="section3" ref="section3">
      <h1>section3</h1>
    </section>
    <section class="section4" ref="section4">
      <h1>section4</h1>
    </section>
  </div>
</template>

<script>
import FallingToWater from '@/components/FallingToWater'
import Board from '@/components/Board'
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  components: {
    FallingToWater,
    Board
  },
  setup () {
    const container = ref()
    const section1 = ref()
    const section2 = ref()
    const section3 = ref()
    const section4 = ref()

    const changeToYellow = () => {
      gsap.to(section2.value, {
        background: '#f4ffb480',
        duration: 1,
        ease: 'none'
      })
    }
    const changeToGreen = () => {
      gsap.to(section2.value, {
        background: '#54dd5280',
        duration: 1,
        ease: 'none'
      })
    }
    const changeToBrown = () => {
      gsap.to(section2.value, {
        background: '#dab37980',
        duration: 1,
        ease: 'none'
      })
    }
    onMounted(() => {
      scrollTo(0, 0)
      ScrollTrigger.matchMedia({
        '(min-width: 767px)': function () {
          const SECTIONS = gsap.utils.toArray([section1.value, section2.value, section3.value, section4.value])
          gsap.to(SECTIONS, {
            xPercent: -100 * (SECTIONS.length - 1),
            ease: 'none',
            scrollTrigger: {
              trigger: container.value,
              end: () => '+=' + container.value.offsetWidth,
              pin: true,
              scrub: 0.1,
              snap: 1 / (SECTIONS.length - 1)
            }
          })
        }
      })
      ScrollTrigger.matchMedia({
        '(max-width: 766px)': function () {
          const SECTIONS = gsap.utils.toArray([section1.value, section2.value, section3.value, section4.value])
          gsap.to(SECTIONS, {
            yPercent: -100 * (SECTIONS.length - 1),
            ease: 'none',
            scrollTrigger: {
              trigger: container.value,
              end: () => '+=' + container.value.offsetHeight,
              pin: true,
              scrub: 0.1,
              snap: 1 / (SECTIONS.length - 1)
            }
          })
        }
      })
    })
    return {
      container,
      section1,
      section2,
      section3,
      section4,
      changeToYellow,
      changeToGreen,
      changeToBrown
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 400%;
  display: flex;
  overflow: hidden;
  section {
    overflow: hidden;
    width: 100%;
    height: 100vh;
    position: relative;
  }
  .section2 {
    background: #dab37980;
  }
  .section3 {
    background: firebrick;
  }
  .section4 {
    background: cornflowerblue;
  }
}
@media screen and (max-width: 768px) {
  .container {
    width: 100%;
    display: block;
  }
}
</style>
