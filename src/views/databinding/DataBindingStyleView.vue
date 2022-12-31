<template>
    <div>
        <!-- 오브젝트형으로 스타일제어도 v-bind로 처리가능하다. -->
        <div :style="style1">
            스타일 바인딩 : 글씨는 red, 폰트크기: 30px
        </div>
        <button @click="style1.color='blue'">zz</button>
    </div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      style1: {
        color: 'green',
        fontSize: '60px'
      }
    }
  },
  setup () { },
  created () { },
  mounted () { },
  unmounted () { },
  methods: {}
}
</script>
