<template>
  <div>
    <Header> </Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue';
//import PageContent from './components/PageContent.vue';

export default {
  data(){
    return{
    }
  },

  components:{
  // 'QtyCounter': QuantityCounterVue,
   // 'pageContent':PageContent,
    'Header':Header,
  },

}
</script>
<style>
#bc {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
