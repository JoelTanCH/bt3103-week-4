import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Line,
  data: function () {
    return {
        results:[],
        datacollection: {
            labels:[],
            datasets: [{ 
                data:[],
                label: 'west',
                borderColor:"red",
                fill:false
            },{
              data:[],
              label: 'national',
              borderColor:"#3e95cd",
              fill:false
            },{
              data:[],
              label:'east',
              borderColor:"#8e5ea2",
              fill:false
            },{
              data:[],
              label:'central',
              borderColor:"#3cba9f",
              fill:false
            },{
              data:[],
              label:'south',
              borderColor:"#e8c3b9",
              fill:false
            },{
              data:[],
              label:'north',
              borderColor:"#E8C332",
              fill:false
            }
              ]
        },
        options: {
            legend: { display: true },
            title: {
              display: true,
              text: "PSI Twenty Four Hourly (By Region)"
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  methods: {
    fetchItems: function () {
        axios.get(`https://api.data.gov.sg/v1/environment/psi?date=2021-02-23`).then(response=>{
            var info = response.data.items
            console.log(info[0].readings.psi_twenty_four_hourly)
            //console.log(response.data.items[0].readings)
            for(let i = 0; i< info.length;i++){
                var temp_timestamp = info[i].update_timestamp
                var psi_west = info[i].readings.psi_twenty_four_hourly.west
                var psi_national = info[i].readings.psi_twenty_four_hourly.national
                var psi_east = info[i].readings.psi_twenty_four_hourly.east
                var psi_central = info[i].readings.psi_twenty_four_hourly.central
                var psi_south = info[i].readings.psi_twenty_four_hourly.south
                var psi_north = info[i].readings.psi_twenty_four_hourly.north
               // var temp_readings = info[i].readings.psi_twenty_four_hourly
                this.datacollection.labels.push(temp_timestamp)
                this.datacollection.datasets[0].data.push(psi_west)
                this.datacollection.datasets[1].data.push(psi_national)
                this.datacollection.datasets[2].data.push(psi_east)
                this.datacollection.datasets[3].data.push(psi_central)
                this.datacollection.datasets[4].data.push(psi_south)
                this.datacollection.datasets[5].data.push(psi_north)
            }
            this.renderChart(this.datacollection, this.options)
            })
            console.log(this.datacollection.datasets[0].data)
            console.log(this.datacollection.datasets[2].data)
            console.log(this.datacollection.datasets[2].data)
        }
    },
  created () {
    this.fetchItems()
  }
}