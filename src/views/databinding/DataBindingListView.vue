<template>
    <div>
        <select name="" id="">
            <option value=""></option>
            <!--v-for를 통해 리스트를 반복문을통해 출력해볼 수 있다. -->
            <option :value="city.code" :key="city.code" v-for="city in cities">{{ city.title }}</option>
        </select>
    <div>
        <table>
            <thead>
                <tr>
                    <th>제품번호</th>
                    <th>제품명</th>
                    <th>제품가격</th>
                    <th>제품주문수량</th>
                    <th>합계</th>
                </tr>
            </thead>
            <!-- 자바스크립트를 쓰지않고 vue의 기능만으로 해당 코딩을할 수 있음.테이블 구조의 연산 리스트 -->
            <tbody>
                <tr :key="drink.drinkId" v-for="drink in drinkList">
                 <td>{{ drink.drinkId }}</td>
                 <td>{{ drink.drinkName }}</td>
                 <td>{{ drink.price }}</td>
                 <td><input type="number" name="" id="" v-model="drink.qty"></td>
                 <td>{{ drink.price * drink.qty }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      cities: [
        { title: '서울', code: '02' },
        { title: '부산', code: '051' },
        { title: '제주', code: '064' },
        { title: '고양', code: '072' }
      ],
      drinkList: [
        {
          drinkId: '1',
          drinkName: '코카콜라',
          price: 700,
          qty: 1
        },
        {
          drinkId: '2',
          drinkName: '환타',
          price: 666,
          qty: 155
        },
        {
          drinkId: '3',
          drinkName: '암바사',
          price: 1200,
          qty: 15
        },
        {
          drinkId: '4',
          drinkName: '코카콜라32',
          price: 56700,
          qty: 3
        },
        {
          drinkId: '5',
          drinkName: '코카콜라ㄷㄷ',
          price: 21231,
          qty: 6
        }
      ]
    }
  },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {}
}
</script>
