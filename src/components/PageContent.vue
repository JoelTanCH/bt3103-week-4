<template>
  <div>
      <ul id ="itemsList">
      <database></database>
        <li v-for="item in items" v-bind:key="item.name">
        <b id="itemName"> {{item.name}} </b> <br>
        <img id="img" :src="item.imageURL" > 
        <p id="price">${{ item.price }}</p> 
        <QtyCounter v-on:counter="onCounter" v-bind:item="item" class="counter"></QtyCounter>
      </li>
      </ul>
      <Basket v-bind:itemsSelected="itemsSelected" class="basket"></Basket>
  </div>
</template>

<script>
import database from '../firebase.js';
import QuantityCounterVue from './QuantityCounter.vue';
import BasketVue from './Basket.vue';
export default {
    data(){
    return{
      itemsSelected:[],
      items:[]
    }
     },
    methods: {
    fetchItems:function(){
      database.collection('menu').get().then((querySnapShot)=>{
        let item={}
        querySnapShot.forEach(doc=>{
            item=doc.data()
            item.show=false
            item.id=doc.id
            this.items.push(item) 
            })})    
        },
    onCounter: function (item, count) {
      if (this.itemsSelected.length === 0 && count > 0) {
        this.itemsSelected.push([item.name, count, item.price]);
        console.log(this.itemsSelected)
      } else {
        var contain = false;
        for (let i = 0; i < this.itemsSelected.length; i++) {
          const curr_item = this.itemsSelected[i];
          const item_name = curr_item[0];
          if(item_name === item.name && count > 0){
            this.itemsSelected.splice(i,1,[item.name,count,item.price]);
            contain = true;
          } else if(item_name === item.name && count == 0){
            this.itemsSelected.splice(i,1);
            contain = true;
          } 
        }
        //if the food is not contained in the list already
        if(!contain){
            this.itemsSelected.push([item.name,count,item.price])  
            console.log(this.itemsSelected)  
        }
      }
    }
  },   
      created(){
         this.fetchItems()    
      },
     components: {
        'QtyCounter': QuantityCounterVue,
        'Basket':BasketVue,
        'database':database,
    },
    }
</script>

<style>
#itemsList {
  color: "blue";
  width: 100%;
  max-width: 70%;
  margin: 0px;
  margin-top: 90px;
  padding:  5px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
}
img {
  width: 135px;
  height: 135px;
}

#price {
  font-size: 30px;
}

#itemName {
  font-size: 30px;
}

.basket {
  position: absolute;
  top: 23%;
  left: 78%;
}

</style>