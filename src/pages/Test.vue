<template>
  <div ref="dd">hi</div>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
  setup () {
    const dd = ref()
    onMounted(() => {
      console.log(dd.value)
    })
    return {
      dd
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
