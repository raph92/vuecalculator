<template>
  <b-container>
    <b-form-input id="numberInput" v-model="display" type="text" class="mb-3"
                   readonly></b-form-input>
    <b-row>
      <b-col cols="10">
      <NumberPad v-on:pressed="numberPressed"/>
      </b-col>
      <b-col class="operators">
        <b-button class="add-btn mb-1" variant="success">+</b-button>
        <b-button class="subtract-btn mb-1" variant="success">-</b-button>
        <b-button class="multiply-btn mb-1" variant="success">*</b-button>
        <b-button class="divide-btn" variant="success">/</b-button>
      </b-col>
    </b-row>

  </b-container>

</template>

<script>
import NumberPad from '@/components/NumberPad'
export default {
  name: 'Calculator',
  components: { NumberPad },
  data(){
    return {
      display: ''
    }
  },
  methods:{
    numberPressed(e){
      this.display += '' + e
    }
  }
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
