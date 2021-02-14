<template>
  <b-container>
    <b-row no-gutters cla>
      <b-col cols="8" class="mr-1">
        <b-row v-for="(row, index) in numberList"
               :key="index"
               no-gutters>
          <b-col v-for="(numObject, index2) in row" :key="index2"
                 class="button-col"
                 :cols="numObject.cols">
            <b-button v-if="numObject.num !== null"
                      :data-number="numObject.num"
                      block
                      :class="numObject.class"
                      @click="numObject.func($event, numObject.funcVars)"
                      :variant="numObject.variant"
                      squared
            >
              {{ numObject.num }}
            </b-button>
          </b-col>
        </b-row>
      </b-col>
      <b-col class="mr-1">
        <b-row v-for="(numObject, index) in operationsList"
               :key="index"
               no-gutters>
          <b-col class="button-col" :cols="numObject.cols">
            <b-button v-if="numObject.num !== null"
                      :data-number="numObject.num"
                      block
                      :class="numObject.class"
                      @click="numObject.func($event, numObject.funcVars)"
                      :variant="numObject.variant"
                      squared
            >
              {{ numObject.num }}
            </b-button>
          </b-col>
        </b-row>
      </b-col>
      <b-col>
        <b-row v-for="(numObject, index) in controlList"
               :key="index"
               no-gutters>
          <b-col class="button-col" :cols="numObject.cols">
            <b-button v-if="numObject.num !== null"
                      :data-number="numObject.num"
                      block
                      :class="numObject.class"
                      @click="numObject.func($event, numObject.funcVars)"
                      :variant="numObject.variant"
                      squared
            >
              {{ numObject.num }}
            </b-button>
          </b-col>
        </b-row>
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
      operationsList: null,
      controlList: null,
    }
  },
  methods: {
    onCalculate () {
      this.$emit('calculate')
    },

    emit ($event, args) {
      $event.preventDefault()
      this.$emit('event', ...args)
    },
  },
  mounted () {
    this.numberList = [
      [
        {
          num: 7,
          class: 'number-btn',
          func: this.emit,
          funcVars: ['click', 7],
        },
        {
          num: 8,
          class: 'number-btn',
          func: this.emit,
          funcVars: ['click', 8],
        },
        {
          num: 9,
          class: 'number-btn',
          func: this.emit,
          funcVars: ['click', 9],
        },

      ],
      [
        {
          num: 4,
          class: 'number-btn',
          func: this.emit,
          funcVars: ['click', 4],
        },
        {
          num: 5,
          class: 'number-btn',
          func: this.emit,
          funcVars: ['click', 5],
        },
        {
          num: 6,
          class: 'number-btn',
          func: this.emit,
          funcVars: ['click', 6],
        },

      ],
      [
        {
          num: 1,
          class: 'number-btn',
          func: this.emit,
          funcVars: ['click', 1],
        },
        {
          num: 2,
          class: 'number-btn',
          func: this.emit,
          funcVars: ['click', 2],
        },
        {
          num: 3,
          class: 'number-btn',
          func: this.emit,
          funcVars: ['click', 3],
        },

      ],
      [
        {
          num: 0,
          class: 'number-btn',
          func: this.emit,
          funcVars: ['click', 0],
          cols: 6,
        },

        {
          num: '.', class: 'decimal-btn', func: this.emit, funcVars:
              ['click', '.'],
        },

      ],
    ]
    this.operationsList = [
      {
        num: '/', class: 'operation-btn', func: this.emit, funcVars:
            ['click', '/'],
        variant: 'info',
      }, {
        num: '*', class: 'operation-btn', func: this.emit, funcVars:
            ['click', '*'],
        variant: 'info',
      }, {
        num: '-', class: 'operation-btn', func: this.emit, funcVars:
            ['click', '-'],
        variant: 'info',
      }, {
        num: '+', class: 'operation-btn', func: this.emit, funcVars:
            ['click', '+'],
        variant: 'info',
      },
    ]
    this.controlList = [
      {
        num: 'AC', class: 'clear-btn', func: this.emit, funcVars: ['clear'],
        variant: 'danger',
      }, {
        num: 'DEL', class: 'delete-btn', func: this.emit, funcVars: ['delete'],
        variant: 'primary',
      }, {
        num: 'ANS', class: 'last-answer-btn', func: this.emit, funcVars:
            ['last', ''],
        variant: 'primary',
      }, {
        num: '=',
        class: 'answer-btn',
        func: this.emit,
        funcVars: ['calculate'],
        variant: 'success',
      },
    ]
  },
}
</script>

<style scoped>
.button-col {
  margin-right: 1px;
  margin-bottom: 1px;
}
</style>
