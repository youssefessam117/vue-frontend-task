<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import {postData} from './utilities/api.js';
import {validateForm} from './utilities/validate.js';

const apiData = ref([])
const userData = ref({
  "arrivingArabicName":"",
  "arrivingEnglishName":"",
})
const validateError = ref([])
const token = `eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3VwZXJhZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjAwMDdjYWY1LWFjNjktNDViNi1hOTA1LWI1NjBlNTkxOWI4OSIsImRvY3RvcklkIjoiMCIsImV4cCI6MTY3ODE4MTUyMSwiaXNzIjoiQ2xpbml2aXNvciIsImF1ZCI6IkNsaW5pdmlzb3IifQ.WKlB0FL_bpEO-Dea0-YcbuKDXwSgCqRZ9-qlAf_OxeI`
const config = {
    headers: { Authorization: `Bearer ${token}` }
};
onMounted(async()=>{
  const {data} = await axios.get(`http://40.127.194.127:777/api/Emergency/GetAllArrivingMethods?first=0&page=0&rows=10`,config)
  return apiData.value = data.data;
})
const getInputValue=(event)=>{
    // let myUser= {...userData};
    // myUser[event.target.name]= event.target.value;
    // userData.value = myUser
    // console.log(myUser);
    // console.log(userData);
    userData.value[event.target.name] =event.target.value
  }
  const addData = async()=>{
    const validationRes = validateForm(userData.value)
    if (validationRes.error){
      validateError.value = validationRes.error.details
    }else{
      const data = await postData(userData.value)
      validateError.value =['']
    }
}
</script>

<template>
 <div class="container">
  <div class="row gy-4 justify-content-center align-items-center inbut_box mt-5 py-4 px-5">
    <h1>crud app</h1>
    <div v-for="error in validateError" class='alert alert-danger p-2'>{{ validateError?error:'done' }}</div>
    <div class="col-md-10 mx-auto">
      <input @keyup="getInputValue" name="arrivingArabicName" placeholder="Arabic Name" class="w-100 form-control" type="text">
    </div>
    <div class="col-md-10 mx-auto">
      <input @keyup="getInputValue" name="arrivingEnglishName" placeholder="English Name" class="w-100 form-control" type="text">
    </div>
    <button @click="addData" class=" btn btn-primary w-25"> Submit</button>
  </div>
  <div class="row mt-5 p-4 bg-gradient">
    <div class="col-md-3">Arabic Name</div>
    <div class="col-md-3">English Name</div>
  </div>
  <div v-for="data in apiData" class="row border border-secondary p-4">
    <div class="col-md-3">
      {{ data.arrivingArabicName }}
    </div>
    <div class="col-md-3">
      {{ data.arrivingEnglishName }}
    </div>
    <div class="col-md-3">
      <button class=" btn btn-sm btn-secondary"> Update </button>
    </div>
    <div class="col-md-3">
      <button class=" btn btn-sm btn-danger"> Delete </button> 
    </div>
  </div>
 </div>

</template>

<style lang="scss" scoped>
.inbut_box{
  background-color: dimgrey;
}
</style>
