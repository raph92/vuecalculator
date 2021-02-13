<template>
  <b-container>
    <b-row v-for="(row, index) in numberList" :key="index">
      <b-col v-for="(numObject, index2) in row" :key="index2" class="mb-1"
             :cols="numObject.cols">
        <b-button v-if="numObject.num !== null"
                  :data-number="numObject.num"
                  block
                  :class="numObject.class"
                  @click="numObject.func(numObject.funcVar)"
                  :variant="numObject.variant"
        >
          {{ numObject.num }}
        </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'KeyPad',
  data: function () {
    return {
      numberList: null,
    }
  },
  methods: {
    onClick (number) {
      this.$emit('pressed', number)
    },
    onCalculate () {
      this.$emit('calculate')
    },
  },
  mounted () {
    this.numberList = [
      [
        { num: 7, class: 'number-btn', func: this.onClick, funcVar: 7 },
        { num: 8, class: 'number-btn', func: this.onClick, funcVar: 8 },
        { num: 9, class: 'number-btn', func: this.onClick, funcVar: 9 },
        {
          num: '/', class: 'operation-btn', func: this.onClick, funcVar: '/',
          variant: 'info',
        },
      ],
      [
        { num: 4, class: 'number-btn', func: this.onClick, funcVar: 4 },
        { num: 5, class: 'number-btn', func: this.onClick, funcVar: 5 },
        { num: 6, class: 'number-btn', func: this.onClick, funcVar: 6 },
        {
          num: '*', class: 'operation-btn', func: this.onClick, funcVar: '*',
          variant: 'info',
        },
      ],
      [
        { num: 1, class: 'number-btn', func: this.onClick, funcVar: 1 },
        { num: 2, class: 'number-btn', func: this.onClick, funcVar: 2 },
        { num: 3, class: 'number-btn', func: this.onClick, funcVar: 3 },
        {
          num: '-', class: 'operation-btn', func: this.onClick, funcVar: '-',
          variant: 'info',
        },

      ],
      [
        {
          num: 0,
          class: 'number-btn',
          func: this.onClick,
          funcVar: 0,
          cols: 6,
        },

        { num: '.', class: 'decimal-btn', func: this.onClick, funcVar: '.' },
        {
          num: '+', class: 'operation-btn', func: this.onClick, funcVar: '+',
          variant: 'info',
        },
      ],
      [
        {
          num: '=',
          class: 'answer-btn',
          func: this.onCalculate,
          funcVar: '',
          variant: 'success',
        },
      ],
    ]
  },
}
</script>

<style scoped>
.number-btn {
  margin-bottom: 1px;
}
</style>
