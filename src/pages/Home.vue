<template>
  <SideBar v-show="sideBarData"
    @section1="moveToSection1"
    @section2="moveToSection2"
    @section3="moveToSection3"
    @section4="moveToSection4"
  />
  <div class="container" ref="container">
    <section class="section1" ref="section1">
      <FallingToWater
        @side="showSideBar"
      />
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
      <!-- 브랜드 이야기 -->
    </section>
    <section class="section4" ref="section4">
      <h1>section4</h1>
      <!-- 상품 판매 -->
    </section>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar'
import FallingToWater from '@/components/FallingToWater'
import Board from '@/components/Board'
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default {
  components: {
    SideBar,
    FallingToWater,
    Board
  },
  setup () {
    const container = ref()
    const section1 = ref()
    const section2 = ref()
    const section3 = ref()
    const section4 = ref()
    const sideBarData = ref(false)

    const moveToSection1 = () => {
      scrollTo(0, 0)
    }
    const moveToSection2 = () => {
      const outerW = outerWidth
      const outerH = outerHeight
      if (matchMedia('(max-width: 800px)').matches) {
        gsap.to(window, { duration: 2, scrollTo: { y: outerW / 3.3 } })
      } else {
        gsap.to(window, { duration: 2, scrollTo: { y: outerH * 1.82 } })
      }
    }
    const moveToSection3 = () => {
      const outerW = outerWidth
      const outerH = outerHeight
      if (matchMedia('(max-width: 800px)').matches) {
        gsap.to(window, { duration: 2, scrollTo: { y: outerW / 1.66 } })
      } else {
        gsap.to(window, { duration: 2, scrollTo: { y: outerH * 4.7 } })
      }
    }
    const moveToSection4 = () => {
      gsap.to(window, { duration: 1, scrollTo: 'max' })
    }
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
    const showSideBar = () => {
      sideBarData.value = true
    }
    onMounted(() => {
      scrollTo(0, 0)
      ScrollTrigger.matchMedia({
        '(min-width: 799px)': function () {
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
        '(max-width: 800px)': function () {
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
      sideBarData,
      moveToSection1,
      moveToSection2,
      moveToSection3,
      moveToSection4,
      changeToYellow,
      changeToGreen,
      changeToBrown,
      showSideBar
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
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100vh;
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
@media screen and (max-width: 800px) {
  .container {
    width: 100%;
    height: 100%;
    display: block;
  }
}
</style>
