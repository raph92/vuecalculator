<template>
  <b-container>
    <b-form-input id="numberInput" v-model="display" type="text" class="mb-3"
                  readonly></b-form-input>
    <KeyPad v-on:pressed="numberPressed" v-on:calculate="onCalculate"/>
  </b-container>

</template>

<script>
import KeyPad from '@/components/KeyPad'

export default {
  name: 'Calculator',
  components: { KeyPad },
  data () {
    return {
      display: '',
    }
  },
  methods: {
    numberPressed (e) {
      this.display += '' + e
    },
    onCalculate () {
      console.log(Function(this.display()))
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
