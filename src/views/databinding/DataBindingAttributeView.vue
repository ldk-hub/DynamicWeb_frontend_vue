<template>
    <div>
        <input type="text" name="" id="" v-bind:value="userId" readonly /><!-- 단방향방식의 데이터바인딩 할때 사용 -->
        <input type="text" name="" id="" :value="userId" readonly /><!-- v-bind는 : 이표기로 생략이 가능하다. -->
        <br>
        <img :src="img" alt="" style="width:100px; heght:auto;" /><!-- 이미지 경로 -->
        <br>
        <input type="search" name="" id=""  v-model="txt1" /><!-- v-model, v-bind:disabled ="txt1" 조건시 -->
        <button :disabled="txt1 === ''">조회</button><!-- 값을 입력했야만 버튼활성화시키는 disabled v-bind 기능 -->
    </div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      userId: 'sds',
      img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbTEr82%2Fbtq4o9fRN1a%2F9XCJfERkhUAk3O5PiEmFCK%2Fimg.jpg',
      txt1: ''
    }
  },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {}
}
</script>
