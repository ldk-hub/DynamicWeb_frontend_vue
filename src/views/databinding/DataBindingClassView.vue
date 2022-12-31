<template>
    <div>
        <!-- 대쉬가 들어갈경우 싱글쿼터로 감싸줘야함 text-red  -->
        <!-- 아래와 같이 동적 데이터바인딩 처리가 가능하다-->
        <div :class="{'text-red': hasError, active: isActive}">클래스 바인딩</div>
        <div :class="class2">클래스바딩인2</div>
    </div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      isActive: false,
      hasError: false,
      class2: ['active', 'hasError']
    }
  },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {}
}
</script>
<!-- style scoped <<<스코프가 중요함 -->
<style scoped>
.active {
    background-color: greenyellow;
    font-weight: bold;
}

.text-red{
   color:red;
}
</style>
