import axios from "axios"
import Updatehotel from "./Updatehotel"
const BASE_URL="http://localhost:3000/admin/"
const token=sessionStorage.getItem("token")
console.log(token)
const header={
    Accept:"application/json",
    Authorization: sessionStorage.getItem("token")
}
export const BASE_URL_FILE="http://localhost:3000/"

class apiServices{

   addcity(data){
      const token=sessionStorage.getItem("token")
console.log(token)
const header={
    Accept:"application/json",
    Authorization: sessionStorage.getItem("token")
}
      return axios.post(BASE_URL+"addcity",data,{headers:header})
  }
  getcity(data) {
   const token = sessionStorage.getItem("token")
   console.log(token)
   const header = {
       Accept: "application/json",
       Authorization: sessionStorage.getItem("token")
   }
   // console.log(token)
   // console.log(header)
   return axios.post(BASE_URL + "getallcity", data, { headers: header })
}

  addhotel(data){
   const token=sessionStorage.getItem("token")
console.log(token)
const header={
 Accept:"application/json",
 Authorization: sessionStorage.getItem("token")
}
   return axios.post(BASE_URL+"addhotel",data,{headers:header})
}

gethotel(data){
   // console.log(token)
   // console.log(header)
   return axios.post(BASE_URL+"getallhotel",data,{headers:header})
}

addlocation(data){
   const token=sessionStorage.getItem("token")
console.log(token)
const header={
 Accept:"application/json",
 Authorization: sessionStorage.getItem("token")
}
   return axios.post(BASE_URL+"addlocation",data,{headers:header})
}
getlocation(data){
   // console.log(token)
   // console.log(header)
   return axios.post(BASE_URL+"getalllocation",data,{headers:header})
}


addpackage(data){
   const token=sessionStorage.getItem("token")
console.log(token)
const header={
 Accept:"application/json",
 Authorization: sessionStorage.getItem("token")
}
   return axios.post(BASE_URL+"addpackage",data,{headers:header})
}

getallpackage(data){
  
   const token=sessionStorage.getItem("token")
   console.log(token)
   const header={
   Accept:"application/json",
   Authorization: sessionStorage.getItem("token")
}
   return axios.post(BASE_URL+"getallpackage",data,{headers:header})
}

addtransport(data){
   const token=sessionStorage.getItem("token")
console.log(token)
const header={
 Accept:"application/json",
 Authorization: sessionStorage.getItem("token")
}
   return axios.post(BASE_URL+"addtransport",data,{headers:header})
}
gettransport(data){
   // console.log(token)
   // console.log(header)
   return axios.post(BASE_URL+"getalltransport",data,{headers:header})
}

register(data){
   return axios.post(BASE_URL+"register",data)
}
login(data){
   return axios.post(BASE_URL+"login",data)
}
dashboard(data){
   const token=sessionStorage.getItem("token")
console.log(token)
const header={
 Accept:"application/json",
 Authorization: sessionStorage.getItem("token")
}
   return axios.post(BASE_URL+ "admindashboard", data, {headers:header})
}

userdashboard(data){
   const token=sessionStorage.getItem("token")
console.log(token)
const header={
 Accept:"application/json",
 Authorization: sessionStorage.getItem("token")
}
   return axios.post(BASE_URL+ "userdashboard", data, {headers:header})
}

getsinglecity(_id){
   let data={
       _id:_id
   }
   const token = sessionStorage.getItem("token")
   console.log(token)
   const header = {
       Accept: "application/json",
       Authorization: sessionStorage.getItem("token")
   }
   return axios.post(BASE_URL+"singlecity",data,{headers:header})
}


updatecity(data){
   
   const token = sessionStorage.getItem("token")
   console.log(token)
   const header = {
       Accept: "application/json",
       Authorization: sessionStorage.getItem("token")
   }
   console.log(data)
   return axios.post(BASE_URL+"updatecity", data,{headers:header})
    }

  getsinglehotel(_id){
   let data={
       _id:_id
   }
   const token = sessionStorage.getItem("token")
   console.log(token)
   const header = {
       Accept: "application/json",
       Authorization: sessionStorage.getItem("token")
   }
   return axios.post(BASE_URL+"singlehotel",data,{headers:header})
}


  updatehotel(data){
   
   const token = sessionStorage.getItem("token")
   console.log(token)
   const header = {
       Accept: "application/json",
       Authorization: sessionStorage.getItem("token")
   }
   console.log(data)
   return axios.post(BASE_URL+"updatehotel", data,{headers:header})
    }

getsinglelocation(_id){
   let data={
       _id:_id
   }
   const token = sessionStorage.getItem("token")
   console.log(token)
   const header = {
       Accept: "application/json",
       Authorization: sessionStorage.getItem("token")
   }
   return axios.post(BASE_URL+"singlelocation",data,{headers:header})
}


  updatelocation(data){
   
   const token = sessionStorage.getItem("token")
   console.log(token)
   const header = {
       Accept: "application/json",
       Authorization: sessionStorage.getItem("token")
   }
   console.log(data)
   return axios.post(BASE_URL+"updatelocation", data,{headers:header})
    }

getsinglepackage(_id){
   let data={
       _id:_id
   }
   const token = sessionStorage.getItem("token")
   console.log(token)
   const header = {
       Accept: "application/json",
       Authorization: sessionStorage.getItem("token")
   }
   return axios.post(BASE_URL+"singlepackage",data,{headers:header})
}


  updatepackage(data){
   
   const token = sessionStorage.getItem("token")
   console.log(token)
   const header = {
       Accept: "application/json",
       Authorization: sessionStorage.getItem("token")
   }
   console.log(data)
   return axios.post(BASE_URL+"updatepackage", data,{headers:header})
    }

getsingletransport(_id){
   let data={
       _id:_id
   }
   const token = sessionStorage.getItem("token")
   console.log(token)
   const header = {
       Accept: "application/json",
       Authorization: sessionStorage.getItem("token")
   }
   return axios.post(BASE_URL+"singletransport",data,{headers:header})
}


  updatetransport(data){
   
   const token = sessionStorage.getItem("token")
   console.log(token)
   const header = {
       Accept: "application/json",
       Authorization: sessionStorage.getItem("token")
   }
   console.log(data)
   return axios.post(BASE_URL+"updatetransport", data,{headers:header})
    }
}


export default new apiServices()