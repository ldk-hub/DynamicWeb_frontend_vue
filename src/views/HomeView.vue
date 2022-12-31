<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div v-html="htmlString"></div>
    <input type="text" v-model="userId"/>
    <button @click="myFunction">클릭</button>
    <button @click="changeData">변경</button>
    <br>
    <input type="text" v-model="num1" /> +
    <input type="text" v-model="num2" /> =
    <span>{{ num1 + num2 }}</span>
    <br>
    <input type="text" v-model.number="num3" /> +
    <input type="text" v-model.number="num4" /> =
    <span>{{ num3 + num4 }}</span>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data () { // 여기는 화면에 표출되는 모든데이타를 여기서
    return {
      userId: 'test',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0
    }
  },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: { // 여기는 메서드 호출시 버튼클릭이벤트를
    myFunction () {
      console.log(this.userId)
    },
    changeData () { // 값을 바꿔주는 기능능
      this.userId = '값 바뀜ㅋ'
    }
  }
}
</script>
