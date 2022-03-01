<template>
  <span>
    <div class="wrapper">
      <div class="info">
        <p>영양 정보</p>
        <p>500ML</p>
      </div>
      <div class="nutritionWrap">
        <div class="nutrition">
          <p>단백질</p>
          <div>
            <span ref="counter1">0</span>
            <span>g</span>
          </div>
        </div>
        <div class="nutrition">
          <p>탄수화물</p>
          <div>
            <span ref="counter2">0</span>
            <span>g</span>
          </div>
        </div>
        <div class="nutrition">
          <p>지방</p>
          <div>
            <span>0</span>
            <span>g</span>
          </div>
        </div>
        <div class="nutrition">
          <p>포화지방</p>
          <div>
            <span>0</span>
            <span>g</span>
          </div>
        </div>
        <div class="nutrition">
          <p>칼슘</p>
          <div>
            <span ref="counter3">0</span>
            <span>mg</span>
          </div>
        </div>
        <div class="nutrition">
          <p>킬로줄</p>
          <div>
            <span ref="counter4">0</span>
            <span>kj</span>
          </div>
        </div>
        <div class="nutrition">
          <p>칼로리</p>
          <div>
            <span ref="counter5">0</span>
            <span>kcal</span>
          </div>
        </div>
        <div class="nutrition">
          <p>설탕</p>
          <div>
            <span>0</span>
            <span>g</span>
          </div>
        </div>
      </div>
      <p class="warning">경고 : 지나친 음주는 뇌졸중, 기억력 손상이나 치매를 유발합니다. 임신 중 음주는 기형아 출생 위험을 높입니다.</p>
    </div>
  </span>
</template>

<script>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
export default {
  setup () {
    const counter1 = ref()
    const counter2 = ref()
    const counter3 = ref()
    const counter4 = ref()
    const counter5 = ref()
    const Cont1 = { val1: 0 }
    const NewVal1 = 3
    const Cont2 = { val2: 0 }
    const NewVal2 = 28
    const Cont3 = { val3: 0 }
    const NewVal3 = 10
    const Cont4 = { val4: 0 }
    const NewVal4 = 360
    const Cont5 = { val5: 0 }
    const NewVal5 = 210
    onMounted(() => {
      gsap.to(Cont1, {
        val1: NewVal1,
        duration: 2,
        roundProps: 'val1',
        onUpdate: function () {
          counter1.value.innerHTML = Cont1.val1
        }
      })
      gsap.to(Cont2, {
        val2: NewVal2,
        duration: 3,
        roundProps: 'val2',
        onUpdate: function () {
          counter2.value.innerHTML = Cont2.val2
        }
      })
      gsap.to(Cont3, {
        val3: NewVal3,
        duration: 3,
        roundProps: 'val3',
        onUpdate: function () {
          counter3.value.innerHTML = Cont3.val3
        }
      })
      gsap.to(Cont4, {
        val4: NewVal4,
        duration: 4,
        roundProps: 'val4',
        onUpdate: function () {
          counter4.value.innerHTML = Cont4.val4
        }
      })
      gsap.to(Cont5, {
        val5: NewVal5,
        duration: 4,
        roundProps: 'val5',
        onUpdate: function () {
          counter5.value.innerHTML = Cont5.val5
        }
      })
    })
    return {
      counter1,
      counter2,
      counter3,
      counter4,
      counter5
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),  url('~@/assets/beerBack.png');
  background-size: cover;
  background-position: center;
  color: white;
  .info {
    margin: 8% 0 5% 0;
    font-size: 1.5rem;
    font-weight: 600;
  }
  p {
    margin: 0;
  }
  .nutritionWrap {
    position: relative;
    transform: translate(-50%);
    left: 50%;
    display: flex;
    flex-flow: wrap;
    max-width: 60rem;
    .nutrition {
      padding: 10px;
      margin: 10px;
      width: calc(50% - 40px);
      display: flex;
      font-size: 1.2rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      background: rgb(50, 54, 50);
      p {
        text-align: left;
        width: 50%;
      }
      div {
        font-weight: 600;
        text-align: right;
        width: 50%;
      }
    }
  }
  .warning {
    margin: 3% 0 3% 0;
    font-size: 0.8rem;
    word-break: keep-all;
  }
}
@media screen and (max-width: 800px) {
  .dd {
    .info {
      margin: 6% 0 3% 0;
      font-size: 1.3rem;
      font-weight: 600;
    }
    .nutritionWrap {
      .nutrition {
        position: relative;
        transform: translate(-50%);
        margin: 5px 0 5px 0;
        font-size: 1rem;
        left: 50%;
        width: 90%;
      }
    }
  }
}
</style>
