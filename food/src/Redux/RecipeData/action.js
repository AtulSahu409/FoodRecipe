import * as types from "./actiontype"
import axios from "axios"


const getdata =(search)=>(dispatch)=> {
 dispatch({type:types.GET_getdata_REQUEST})
  return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
  .then((r) => {
      dispatch({type:types.GET_getdata_SUCCESS, payload:r.data})
      console.log(r.data)
     
  })
  .catch((e) =>{dispatch({type: types.GET_getdata_FAILURE})
      console.log(e) })

  
}

const getsingledata =(search)=>(dispatch)=> {
    dispatch({type:types.GET_getsingledata_REQUEST})
     return axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`)
     .then((r) => {
         dispatch({type:types.GET_getsingledata_SUCCESS, payload:r.data})
         console.log(r)
        
     })
     .catch((e) =>{dispatch({type: types.GET_getsingledata_FAILURE})
         console.log(e) })
   
     
   }


// const Adddata=(payload)=>(dispatch)=> {
//     // const navigate=useNavigate()
//     dispatch({type:types.GET_ADD_REQUEST})
//       return axios.post('http://localhost:3002/admin/post',payload)
//       .then((r) => {
//           dispatch({type:types.GET_ADD_SUCCESS})
//           console.log(r)
//           alert("ADD DATA SUCCESSFULLY")
          
//           // navigate("/admin")
//       })
//       .catch((e) =>{dispatch({type: types.GET_ADD_FAILURE})
//           console.log(e) })
// }


// const remove =(id)=>(dispatch)=>{
//     dispatch({type:types.GET_delete_REQUEST})
//      return axios.delete(`http://localhost:3002/admin/delete/${id}`)
//      .then((r) => {
//          dispatch({type:types.GET_delete_SUCCESS})
//          console.log(r)
//          // navigate("/admin")
//      })
//      .catch((e) =>{dispatch({type: types.GET_delete_FAILURE})
//          console.log(e) })
   
     
//    }
                

export {getdata,getsingledata};