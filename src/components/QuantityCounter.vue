<template>
  <div>
    <button v-on:click="decrement()" >-</button>
    <span class="counter"> {{counter}} </span>
    <button v-on:click="increment()">+</button>
  </div>
</template>

<script>
export default {
  name:'QuantityCounter',
  props:{
      item:{
        type:Object, 
      }
  },
    data(){ 
    return{
        counter:0,
        }
     },
     methods:{
       decrement: function(){
         if (this.counter ==0 ){
           this.counter =0;
         }else{
           this.counter --;
          }
          this.$emit('counter', this.item, this.counter);
        },
         increment: function(){
           if(this.counter >=10){
            alert("You cannot buy more than 10 items.");
            this.counter =10;
           }else{
             this.counter ++;
           }
           this.$emit('counter', this.item, this.counter);
         }
    }
}
</script>

<style scoped>
  button{
    font-size: 25px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;  
    text-align: center;
    color:black;
    background-color:rgb(105, 126, 219);
    border-radius: 10px;
    border-width: 3px;
  }

  .counter{
    font-size: 25px;
  }
</style>