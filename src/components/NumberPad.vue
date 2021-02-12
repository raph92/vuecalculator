<template>
  <b-container>
    <b-row>
<!--      <div :key="index" v-for="(col, index) in numberList">-->
<!--        <b-col :key="index" v-for="(num, index) in col">-->
<!--          <b-button class="number-btn"-->
<!--                    :data-number="num" block>-->
<!--            {{ num }}-->
<!--          </b-button>-->
<!--        </b-col>-->
<!--        <div class="w-100 mb-1"></div>-->
<!--      </div>-->
            <b-col>
              <b-button class="number-btn" @click="onClick(7)" data-number="7"
                        block>7
              </b-button>
            </b-col>
            <b-col>
              <b-button class="number-btn" @click="onClick(8)" data-number="8"
                        block>8
              </b-button>
            </b-col>
            <b-col>
              <b-button class="number-btn" @click="onClick(9)" data-number="9"
                        block>9
              </b-button>
            </b-col>

            <div class="w-100 mb-1"></div>
            <b-col>
              <b-button class="number-btn" @click="onClick(4)" data-number="4"
                        block>4
              </b-button>
            </b-col>
            <b-col>
              <b-button class="number-btn" @click="onClick(5)" data-number="5"
                        block>5
              </b-button>
            </b-col>
            <b-col>
              <b-button class="number-btn" @click="onClick(6)" data-number="6"
                        block>6
              </b-button>
            </b-col>

            <div class="w-100 mb-1"></div>
            <b-col>
              <b-button class="number-btn" @click="onClick(1)" data-number="1"
                        block>1
              </b-button>
            </b-col>
            <b-col>
              <b-button class="number-btn" @click="onClick(2)" data-number="2"
                        block>2
              </b-button>
            </b-col>
            <b-col>
              <b-button class="number-btn" @click="onClick(3)" data-number="3"
                        block>3
              </b-button>
            </b-col>

            <div class="w-100 mb-1"></div>
            <b-col>
              <b-button class="number-btn" @click="onClick(0)" data-number="0"
                        block>0
              </b-button>
            </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'NumberPad',
  data: function () {
    return {
      numberList: [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]],
    }
  },
  methods:{
    onClick(number) {
      this.$emit('pressed', number)
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
.number-btn {
  margin-bottom: 1px;
}
</style>
