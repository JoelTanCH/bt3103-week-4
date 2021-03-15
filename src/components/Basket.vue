<template>
  <div>
		<ul>
			<h1>Menu</h1>
			<li v-for="item in itemsSelected" v-bind:key="item.name">
				{{item[0]}} x {{item[1]}}
			</li>
		</ul>
		<button v-on:click="chosen(); total(); sendOrder()"> Calculate Total </button>
		<p v-show= "this.clicked == true">
			SubTotal: ${{this.subtotal}} <br> 
			Grand Total: ${{totalPrice}}
		</p>
		<database></database> 
	</div>
</template>

<script>
import database from '../firebase.js';
export default {
  props:{
    itemsSelected:{
      type:Array,
    }
  },

data(){
    return{
		clicked: false,
		subtotal: 0,
        orders:{
			name:[],
			price:[],
			quantity:[],
		}
		}},
methods:{
    chosen:function(){
			this.clicked = true;
		},
	total:function(){
		console.log(this.clicked)
		var localsubtotal = 0;
		for (let i = 0; i < this.itemsSelected.length; i++){
			const qty = this.itemsSelected[i][1];
			const price = this.itemsSelected[i][2];
			localsubtotal += qty*price;
			this.orders.name.push(this.itemsSelected[i][0])
			this.orders.price.push(this.itemsSelected[i][2])
			this.orders.quantity.push(this.itemsSelected[i][1])

		}
		this.subtotal = localsubtotal
		console.log(this.subtotal)
	
	},
	sendOrder:function(){
		database.collection("orders").add(this.orders).then(() => {location.reload()})
		alert(this.orders)
      }},
computed:{
		totalPrice:function(){
			return (this.subtotal*1.07).toFixed(2);
		}
	},
components: {
        'database':database,
    },
}
</script>


<style scoped>
h1{
	font-size: 30px;
	padding-left: 45px;
	font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
}

li {
	font-size: 25px;
}

button{
	margin-bottom: 10px;
	font-size: 25px;
	margin-left:30px;
	background-color: rgb(95, 168, 211);
	border-radius: 25px;
	border-width: 5px;
}

p {
	padding-left: 20px;
	font-size: 25px;
}

</style>