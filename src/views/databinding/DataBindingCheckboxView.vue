<template>
    <div>
        <div>
            <input type="checkbox" name="" id="html" value="HTML" v-model="favoriteLang" />
            <label for="html">HTML</label>
        </div>
        <div>
            <input type="checkbox" name="" id="css" value="CSS" v-model="favoriteLang" />
            <label for="css">CSS</label>
        </div>
        <div>
            <input type="checkbox" name="" id="js" value="JS" v-model="favoriteLang" />
            <label for="js">JS</label>
        </div>

        <div>선택한 지역 : {{ favoriteLang }}</div> <!-- 데이터바인딩 v-model로 값을 표출했기때문에 한번에 묶여서 값을 가져옴 checked의 값을 배열안에넣어주는것임 -->
    </div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      favoriteLang: [] // checked는 여러값이기때문에 배열로 생성해야한다.
    }
  },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {}
}
</script>
