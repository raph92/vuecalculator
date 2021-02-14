<template>
  <b-container id="calculate">
    <Keypress key-event="keydown" :key-code="13" @success="calculate"/>
    <b-row no-gutters>
      <b-col cols="10">
        <b-form-input id="numberInput" v-model="input" type="text"
                      class="mb-3"
                      trim
                      :state="state"
                      autofocus
                      @keydown="numberInputKeyPress()"
        ></b-form-input>
      </b-col>
      <b-col>
        <b-form-input id="answer" v-model="answer"
                      type="text"
                      class="mb-3 text-success font-weight-bold"
                      readonly></b-form-input>
      </b-col>


    </b-row>
    <b-row>
      <KeyPad v-on:pressed="numberPressed" v-on:calculate="calculate"
              v-on:event="onEvent"/>
    </b-row>

  </b-container>

</template>

<script>
import KeyPad from '@/components/KeyPad'

export default {
  name: 'Calculator',
  components: { KeyPad, Keypress: () => import('vue-keypress') },
  data () {
    return {
      input: '',
      answer: '',
      lastAnswer: '',
      clear: false,
      state: null,
    }
  },
  methods: {
    numberPressed (e) {
      if (!this.clear)
        this.input += '' + e
      else {
        this.input = ''
        if ('/*+-'.includes(e) && !!this.lastAnswer) {
          this.input += this.lastAnswer
        }
        this.input += e
        this.clear = false
      }
    },
    calculate () {
      try {
        this.answer = Function('return ' + this.input)()
        this.answer= Number(this.answer.toPrecision(3))
        this.clear = true
        this.lastAnswer = this.answer
      } catch (e) {
        console.log('invalid input: ', this.input)
        this.state = false
      }
    },
    onEvent (type, value) {
      this.state = null
      switch (type) {
        case 'clear':
          this.input = ''
          this.answer = ''
          break
        case 'delete':
          this.input = this.input.slice(0, -1)
          break
        case 'click':
          this.numberPressed(value)
          break
        case 'calculate':
          this.calculate()
          break
        case 'last':
          this.input += this.lastAnswer
          break
      }
    },
    numberInputKeyPress () {
      this.state = null
      if (this.clear) {
        this.input = ''
        this.clear = false
      }
    },
  },
}
</script>

<style scoped>
/*.grid {*/
/*  display: flex; !* establish flex container *!*/
/*  flex-direction: row-reverse;*/
/*  flex-wrap: wrap; !* enable flex items to wrap *!*/
/*  justify-content: space-around;*/

/*}*/

.number-button {
  flex: 0 0 33%; /* don't grow, don't shrink, width */
  height: 50px;
  margin-bottom: 5px;
}

.operators {
  display: flex;
  flex-direction: column;
}

</style>
