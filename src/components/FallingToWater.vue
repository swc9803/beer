<template>
  <span>
    <div class="container" @mousemove="cursorMove">
      <p ref="fallingText" class="fallingText">Wanna Cool?</p>
      <div ref="btn" class="btnWrap">
        <div @click="fall" class="yes">네!</div>
        <div @click="disappear" ref="reject">아니요...</div>
      </div>
      <span v-for="line in 40" :key="line" class="velocity" />
      <div class="background" ref="background">
        <div class="clip" />
      </div>
      <p ref="movingText" class="movingText">Enjoy Sung Beer</p>
      <svg v-for="bubble in 20" :key="bubble" class="bubbles" :ref="bubbleRef"
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
  </span>
</template>

<script>
import gsap from 'gsap'
import { ref } from 'vue'

export default {
  setup (props, { emit }) {
    const fallingText = ref()
    const btn = ref()
    const reject = ref()
    const background = ref()
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
        scaleY: 5,
        transformOrigin: 'bottom',
        duration: 3,
        ease: 'expo.in'
      })
      gsap.to(btn.value, {
        top: '-100%',
        scaleY: 2,
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
      gsap.to('.clip', {
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
          gsap.to('.velocity', {
            display: 'none'
          })
        }
      })
    }
    const disappear = () => {
      gsap.to(reject.value, {
        opacity: 0,
        yPercent: -20,
        duration: 0.5,
        ease: 'none',
        cursor: 'auto'
      })
    }

    const createBubble = () => {
      const setRandomPosition = () => {
        for (var i = 0; i < 20; i++) {
          gsap.set(bubbleArray.value[i], {
            left: 'random(5, 95)%',
            scale: gsap.utils.random(0.6, 1.2)
          })
        }
      }
      setTimeout(() => {
        for (var i = 0; i < 20; i++) {
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
    return {
      bubbleArray,
      bubbleRef,
      fallingText,
      btn,
      reject,
      background,
      movingText,
      cursorMove,
      fall,
      disappear,
      createBubble
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  overflow: hidden;
  .fallingText {
    position: relative;
    top: 30%;
    display: inline-block;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 5rem;
    font-weight: 800;
    margin: 0 3% 0 3%;
    color: #2d70ff;
    letter-spacing: 3px;
  }
  .btnWrap {
    position: relative;
    display: flex;
    justify-content: center;
    top: 50%;
    z-index: 7;
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
    background: #0300c0;
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
  .bigBubbles {
    position: absolute;
    width: 7%;
    top: 110%;
    z-index: 5;
  }
  .movingText {
    position: relative;
    top: 20%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 5rem;
    font-weight: 800;
    margin: 0;
    color: rgb(190, 220, 255);
    opacity: 0;
    z-index: 4;
    letter-spacing: 3px;
    text-shadow: 1px 1px 1px #bed2ff,
    1px 2px 1px #78a3ff,
    1px 3px 1px #719eff,
    1px 4px 1px #7da6ff,
    1px 5px 1px #4d85ff,
    1px 6px 1px #4d85ff,
    1px 7px 1px #4d85ff,
    1px 8px 1px #4d85ff,
    1px 9px 1px #4d85ff,
    1px 18px 6px rgba(16,16,16,0.3),
    1px 25px 35px rgba(16,16,16,0.1),
    1px 30px 60px rgba(16,16,16,0.3);
  }
  .bubbles {
    position: absolute;
    width: 7%;
    top: 110%;
    z-index: 5;
    transition: scale 2s ease-out;
    &:hover {
      scale: 1.2;
    }
  }
  .bigBubbles {
    position: absolute;
    width: 7%;
    top: 110%;
    z-index: 5;
  }
}
@media screen and (max-width: 1500px) {
  .container {
    .movingText {
      top: 10%;
      font-size: 4rem;
    }
  }
}
@media screen and (max-width: 574px) {
  .container {
    .fallingText {
      top: 20%;
    }
    .btnWrap {
      top: 35%;
    }
    .movingText {
      top: 0;
      font-size: 2rem;
    }
  }
}
</style>
