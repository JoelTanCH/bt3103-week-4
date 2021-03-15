<template>
 <div>
		<ul id="display">
			<li v-for="item in orders.data" v-bind:key=item>
				{{item.name[0]}}: {{item.quantity[0]}} <br>
        {{item.name[1]}}: {{item.quantity[1]}} <br>
        {{item.name[2]}}: {{item.quantity[2]}} <br>
        {{item.name[3]}}: {{item.quantity[3]}} <br>
        {{item.name[4]}}: {{item.quantity[4]}} <br>
        {{item.name[5]}}: {{item.quantity[5]}} <br>
        <button v-on:click="remove()">delete</button>
        <button>modify</button>
			</li>
		</ul>
    <database></database> 
	</div>
</template>

<script>
import database from '../firebase.js';
export default {
    data(){
        return{
            orders:{
              id:[],
              data:[]
            },
            id:[],
            documents:[],
            counter:0
        }
    },
    methods:{
      increment: function(){
           this.counter++
           },
        fetchItems:function(){
          database.collection("orders").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.orders.id.push(doc.id),
              this.orders.data.push(doc.data());
              this.id.push(doc.id)
            });
            });
            console.log(this.orders)
            },
        remove:function(){
          database.collection("orders").doc(this.orders.id[this.counter]).delete().then(() => {
                console.log("Document successfully deleted!");
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
        }
    },
    components: {
        'database':database,
        },
    created(){
         this.fetchItems(),
         this.counter=0 
         
      },
}
</script>

<style>
#display{
  padding-top:100px;
}
.ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding-top: 50px;
}
.li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 60px;
  border: 1px solid #222;
  margin: 10px;
}

.button {
  width: 65px;
  height: 30px;
  background-color: #f7cac9;
  border-radius: 10px;
  border-width: 1px;
}
</style>