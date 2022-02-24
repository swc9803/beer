<template>
  <transition name="modalFade">
    <div v-show="ageModal" class="ageModal">
      <div class="modalWrap">
        <p>만 19세 미만은 음주가 불가능합니다.</p>
        <div @click="closeModal" class="modalBtn">
          확인
        </div>
      </div>
    </div>
  </transition>
  <div class="waterWrap" @mousemove="cursorMove">
    <p ref="fallingText" class="fallingText">만 19세 이상입니까?</p>
    <div ref="btn" class="btnWrap">
      <div @click="fall">네</div>
      <div @click="showModal">아니요</div>
    </div>
    <span v-for="line in 40" :key="line" class="velocity" />
    <div class="background" ref="background">
      <div class="clip" ref="clip" />
    </div>
    <p ref="movingText" class="movingText">Enjoy Sung Beer</p>
    <p ref="scroll" class="scroll">Please Keep Scrolling🔽</p>
    <svg v-for="bubble in 25" :key="bubble" class="bubbles" :ref="bubbleRef"
      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 248 248">
      <g filter="url(#bubble_f_11_2)">
        <mask id="path-1-inside-1_11_2" fill="#fff">
          <path d="M244 124a120 120 0 1 1-240 0 120 120 0 0 1 240 0Z"/>
        </mask>
        <path fill="url(#bubble_radial_11_2)" d="M244 124a120 120 0 1 1-240 0 120 120 0 0 1 240 0Z"/>
        <path stroke="#fff" stroke-width="2" d="M244 124a120 120 0 1 1-240 0 120 120 0 0 1 240 0Z" mask="url(#path-1-inside-1_11_2)"/>
      </g>
      <defs>
        <filter id="bubble_f_11_2" width="248" height="248" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur result="effect1_foregroundBlur_11_2" stdDeviation="2"/>
        </filter>
        <radialGradient id="bubble_radial_11_2" cx="0" cy="0" r="1" gradientTransform="rotate(55.7 -32.7 133) scale(62.9623)" gradientUnits="userSpaceOnUse">
          <stop stop-color="#fff" stop-opacity=".6"/>
          <stop offset="1" stop-color="#fff" stop-opacity=".2"/>
        </radialGradient>
      </defs>
    </svg>
  </div><div />
</template>

<script>
import gsap from 'gsap'
import { onMounted, ref } from 'vue'

export default {
  setup () {
    const ageModal = ref(false)
    const fallingText = ref()
    const btn = ref()
    const background = ref()
    const scroll = ref()
    const clip = ref()
    const bubbleArray = ref([])
    const bubbleRef = (el) => bubbleArray.value.push(el)
    const movingText = ref()
    const windowW = outerWidth / 2
    const windowH = outerHeight / 2

    const cursorMove = (e) => {
      const x = e.pageX - windowW
      const y = e.pageY - windowH
      movingText.value.style.transform = 'translate(' + x / -10 + 'px,' + y / -10 + 'px) rotateY(' + (x / 20) + 'deg) rotateX(' + (y / 10) + 'deg)'
    }

    const fall = () => {
      gsap.to(fallingText.value, {
        top: '-100%',
        scaleY: 6,
        transformOrigin: 'bottom',
        duration: 3,
        ease: 'expo.in'
      })
      gsap.to(btn.value, {
        top: '-100%',
        scaleY: 3,
        transformOrigin: 'bottom',
        pointerEvents: 'none',
        duration: 3,
        ease: 'expo.in'
      }, '<')
      gsap.set('.velocity', {
        top: '150%',
        left: 'random(0, 100)%'
      })
      gsap.to('.velocity', {
        top: '-100%',
        scaleY: 5,
        opacity: 1,
        transformOrigin: 'bottom',
        duration: 2,
        delay: 'random(3, 5)',
        ease: 'expo'
      }, '<')
      gsap.to(clip.value, {
        top: '-100%',
        duration: 0.4,
        ease: 'none',
        delay: 5.5
      })
      gsap.to(background.value, {
        top: 0,
        duration: 0.3,
        ease: 'none',
        delay: 5.2
      })
      gsap.from(background.value, {
        background: '#7572ff',
        duration: 15,
        ease: 'none'
      }, '<')
      createBubble()
      gsap.to(movingText.value, {
        opacity: 1,
        duration: 2,
        delay: 7,
        onStart () {
          document.querySelector('#app').style.overflow = 'visible'
          scroll.value.style.opacity = '1'
          gsap.to('.velocity', {
            display: 'none'
          })
        }
      })
    }
    const showModal = () => {
      ageModal.value = true
    }
    const closeModal = () => {
      ageModal.value = false
    }

    const createBubble = () => {
      const setRandomPosition = () => {
        for (var i = 0; i < 25; i++) {
          gsap.set(bubbleArray.value[i], {
            left: 'random(5, 95)%',
            scale: gsap.utils.random(0.6, 1.2)
          })
        }
      }
      setTimeout(() => {
        for (var i = 0; i < 25; i++) {
          setRandomPosition()
          gsap.to(bubbleArray.value[i], {
            top: '-50%',
            duration: 'random(10, 15)',
            delay: 'random(1, 15)',
            ease: 'none',
            repeat: -1
          })
          gsap.to(bubbleArray.value[i], {
            xPercent: 'random(-100, 100)',
            duration: 'random(4, 5)',
            yoyo: true,
            ease: 'none',
            repeat: -1
          })
        }
      }, 6000)
    }
    onMounted(() => {
      gsap.to(movingText.value, {
        backgroundPosition: 0,
        yoyo: true,
        ease: 'none',
        repeat: -1,
        repeatDelay: 3
      })
      gsap.fromTo(scroll.value, { yPercent: -200 }, {
        yPercent: 200,
        yoyo: true,
        duration: 3,
        ease: 'none',
        repeat: -1
      })
    })
    return {
      ageModal,
      closeModal,
      bubbleArray,
      bubbleRef,
      fallingText,
      btn,
      scroll,
      clip,
      background,
      movingText,
      cursorMove,
      fall,
      showModal,
      createBubble
    }
  }
}
</script>

<style lang="scss">
$mainFont: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
#app {
  overflow: hidden;
}
.waterWrap {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  overflow: hidden;
  .fallingText {
    position: relative;
    top: 30%;
    display: inline-block;
    font-family: $mainFont;
    font-size: 4rem;
    font-weight: 800;
    margin: 0 3% 0 3%;
    color: #2d70ff;
    letter-spacing: 3px;
    word-break: keep-all;
  }
  .btnWrap {
    position: relative;
    display: flex;
    justify-content: center;
    top: 50%;
    z-index: 3;
    div {
      cursor: pointer;
      border-radius: 0.5em;
      width: 100px;
      border: 2px black solid;
      padding: 20px;
      margin: 0 50px 0 50px;
      transition: .5s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .velocity {
    opacity: 0;
    position: absolute;
    width: 2px;
    height: 30px;
    background: rgba(0, 0, 0, 0.8);
  }
  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 110%;
    background: #2926db;
    .clip {
      position: absolute;
      transform: translate(-50%);
      top: 0;
      left: 50%;
      width: 150%;
      height: 50%;
      clip-path: ellipse(50% 70% at 50% 30%);
      background: white;
    }
  }
  .movingText {
    position: relative;
    top: 20%;
    font-family: $mainFont;
    font-size: 5rem;
    font-weight: 800;
    margin: 0;
    color: rgb(190, 220, 255);
    opacity: 0;
    z-index: 1;
    letter-spacing: 3px;
    background-clip: text;
    color: transparent;
    background-image: linear-gradient(18deg, rgba(208,206,43,1) 46%, rgba(255,255,255,1) 63%);
    background-size: 300%;
    animation: fillText 3s linear infinite;
  }
  @keyframes fillText {
    0% {
      background-position: 0% 100%;
    }
    50% {
      background-position: 100% 0;
    }
    100% {
      background-position: 0% 100%;
    }
  }
  .scroll {
    position: absolute;
    transform: translate(-50%);
    left: 50%;
    bottom: 20%;
    opacity: 0;
    cursor: pointer;
    font-style: oblique;
    font-size: 1.5rem;
    transition: 2s;
    color: rgb(255, 255, 255);
  }
  .bubbles {
    position: absolute;
    width: 7%;
    top: 110%;
    z-index: 2;
    transition: scale 2s ease-out;
    &:hover {
      scale: 1.2;
    }
  }
}
.ageModal {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 4;
  background: rgba(0, 0, 0, 0.8);
  text-align: center;
  .modalWrap {
    margin: 0;
    position: relative;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 500px;
    height: 350px;
    background: white;
    border-radius: 1rem;
    p {
      position: relative;
      transform: translate(0, 400%);
      font-weight: 600;
      color: rgb(160, 0, 0);
      font-size: 1.5rem;
      margin: 0;
    }
    .modalBtn {
      position: relative;
      transform: translate(0, 500%);
      display: inline-block;
      padding: 10px;
      border: 1px solid black;
      border-radius: 0.5rem;
      cursor: pointer;
    }
  }
}
.modalFade-enter-from,
.modalFade-leave-to {
  opacity: 0;
}
.modalFade-enter-active,
.modalFade-leave-active {
  transition: .3s ease
}
@media screen and (max-width: 1500px) {
  .waterWrap {
    .movingText {
      top: 10%;
      font-size: 4rem;
    }
    .btnWrap {
      div {
        padding: 10px;
      }
    }
  }
}
@media screen and (max-width: 574px) {
  .waterWrap {
    .fallingText {
      top: 20%;
    }
    .btnWrap {
      top: 35%;
      div {
        padding: 15px 5px 15px 5px;
      }
    }
    .movingText {
      top: 0;
      font-size: 2rem;
    }
  }
  .ageModal {
    .modalWrap {
      width: 90%;
      height: 200px;
      p {
        transform: translate(0, 200%);
        font-size: 1rem;
      }
      .modalBtn {
        transform: translate(0, 250%);
      }
    }
  }
}
</style>
