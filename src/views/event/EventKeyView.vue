<template>
    <div>
        <!--엔터키 누를때 조회버튼눌리게하는 기능-->
        <!-- <input type="search" name="" id="" @keyup="checkEnter($event)" v-model="searchText" />
        <button @click="doSearch">조회</button> -->

        <!-- @keyup기능중에 enter라는 메서드가 있어서 굳이 위에처럼 기능을 만들필요가없다.  -->
        <!-- 그외에도 주요키에대해서 @keyup 이벤트내에서 다양히 있다. esc,delete 등-->

        <input type="search" name="" id="" @keyup.enter="doSearch" v-model="searchText" />
        <button @click="doSearch">조회</button>
    </div>
</template>
<script>
// .enter, .tab, .delete, .esc, .right 등
export default {
  components: {},
  data () {
    return {
      sampleData: ''
    }
  },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {
    doSearch () {
      console.log(this.searchText)
    },
    checkEnter (event) { // 엔터키누를때 액션적용되게 처리하는 로직
      if (event.keyCode === 13) {
        this.doSearch()
      }
    }
  }
}
</script>
