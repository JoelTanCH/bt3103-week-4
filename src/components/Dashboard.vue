<template>
    <div >
        <p id="header">BarChart</p>
        <div id="chart">
            <Bar-Chart></Bar-chart>
        </div>
        <p id="header">LineChart</p>
        <div id="chart">
            <line-chart></line-chart>
        </div>
    </div>
</template>

<script>

import BarChart from '../BarChart.js'
import linechart from './callAPI.vue'

export default {
    components:{
        'Bar-Chart':BarChart,
        'line-chart':linechart
    }
    
}
</script>

<style>
#chart{
  height:50%;
  width:100%;
  float:center;
}
#axios{
  height:40%;
  width:100%;
  float:center;
}
#header{
height:10%;
width:100%;
font-size: 100px;
padding-left:1080px;
background:rgb(74, 192, 182);
border-style: solid;
border-color:goldenrod;
border-width: 2px;
font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>