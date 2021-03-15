<template>
  <div>
		<header>
			<h1> {{msg}} </h1>
      <p>
        <router-link to="/" exact id="box1">     Home    </router-link> 
        <router-link to="/orders" exact id="box2">     Orders     </router-link>
        <router-link to="/Dashboard" exact id="box3">     Dashboard     </router-link>
      </p>
		</header>
  </div>
</template>

<script>
export default {
	data(){
		return{
			msg : " Joel's zhi char store "
		}
	}
}
</script>

<style scoped>
header{
	background:rgb(75, 116, 177);
  border-style: solid;
  border-color:black;
  border-width: 2px;
  height: 60px;
  width: 100%;
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
h1{
  color:white
}
#box1 {
  border-style: solid;
  border-color:black;
  width:30%;
  font-size: 40px;
  color: "blue";
  margin-top: 60px;
  box-sizing: border-box;
  border-width: 1.5px;
  position:relative;
}
#box2 {
  border-style: solid;
  border-color:black;
  width:30%;
  font-size: 40px;
  color: "blue";
  margin-top: -65px;
  margin-left: 470px;
  box-sizing: border-box;
  border-width: 1.5px;
  position:relative;
}
#box3{
  border-style: solid;
  border-color:black;
  width:30%;
  font-size: 40px;
  color: "blue";
  margin-top: -65px;
  margin-left: 300px;
  box-sizing: border-box;
  border-width: 1.5px;
  position:relative;
}
</style>