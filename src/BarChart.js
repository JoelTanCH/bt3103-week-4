import { Bar } from 'vue-chartjs'
import database from './firebase.js'

export default {
  extends: Bar,
  data: function () {
    return {
        data:{
            foodItems:["Sambal kangKung", "Mapo Tofu", "Pork Fried Rice", "Prawn Omelette", "Dry Beef Hor Fun","Cereal Prawn"],
            colors:[],
            orders: [],
            itemCount:[],
            SambalKankong:0,
            MapoTofu:0,
            PorkFriedRice:0,
            PrawnOmelette:0,
            DryBeefHorFun:0,
            CerealPrawn:0,
        },
        datacollection: {
            labels: [],
            datasets: [{
                labels: [],
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#3e95cd","#E8C332"],
                data: []
              }]
        },
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: "Total number of each dish"
            },
            responsive: true,
            maintainAspectRatio: false,
            scales:{
                yAxes:[{
                    ticks:{
                        min:0
                    }
                 }],
                 
            }
        }
    }
  },
  methods: {
    foodCounter: function(){
       for(let i=0; i<this.data.orders.length;i++){
           if (this.data.orders[i][0] == "Sambal kangKung"){
               this.data.SambalKankong += this.data.orders[i][1]
            }else if(this.data.orders[i][0] == "Prawn Omelette"){
            this.data.PrawnOmelette += this.data.orders[i][1]
            }else if(this.data.orders[i][0] == "Dry Beef Hor Fun"){
                this.data.DryBeefHorFun += this.data.orders[i][1]
            }else if(this.data.orders[i][0] == "Cereal Prawn"){
                this.data.CerealPrawn += this.data.orders[i][1]
            }else if(this.data.orders[i][0] == "Mapo Tofu"){
                this.data.MapoTofu += this.data.orders[i][1]
            }else if(this.data.orders[i][0] == "Pork Fried Rice"){
                this.data.PorkFriedRice += this.data.orders[i][1]
            }else{
                alert('something wrong')
            }
       }
    },
    populate:function(){
        for(let i=0; i<this.data.foodItems.length; i++){
            this.datacollection.labels.push(this.data.foodItems[i])
            this.datacollection.datasets[0].data.push(this.data.itemCount[i])
        }
    },
    accumulate:function(){
        this.data.itemCount.push(this.data.SambalKankong)
        this.data.itemCount.push(this.data.MapoTofu)
        this.data.itemCount.push(this.data.PorkFriedRice)
        this.data.itemCount.push(this.data.PrawnOmelette)
        this.data.itemCount.push(this.data.DryBeefHorFun)
        this.data.itemCount.push(this.data.CerealPrawn)
    },
    fetchItems: function () {
      database.collection('orders').get().then(querySnapShot => {
        querySnapShot.forEach(doc => { 
            this.data.orders.push([doc.data().name[0],doc.data().quantity[0]])
            this.data.orders.push([doc.data().name[1],doc.data().quantity[1]])
            this.data.orders.push([doc.data().name[2],doc.data().quantity[2]])
            this.data.orders.push([doc.data().name[3],doc.data().quantity[3]])
            this.data.orders.push([doc.data().name[4],doc.data().quantity[4]])
            this.data.orders.push([doc.data().name[5],doc.data().quantity[5]])
        })
        this.foodCounter()
        this.accumulate()
        this.populate()
        this.renderChart(this.datacollection, this.options)
      })
    }
  },
  created () {
    this.fetchItems()
  }
}

