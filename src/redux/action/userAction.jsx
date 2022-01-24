import axios from "axios"
 export const Submit = (value) => async dispatch => {
    let res = await axios.post('http://localhost:3000/register', value);
    if(res=201)
  
    if(res===200){
    let data = res;
    console.log(data);  
    dispatch({     
      type: 'GET_DATA',
      payload: data,
    }    
    )
  }
}
    
   

  
//const response = await axios.post("localhost:3000/register")
  // if (response.status == 200) {
  //   const respon=response.data
  //   console.log(respon)
  //   dispatch({     
  //     type: 'GET_DATA',
  //     payload: respon,
  //   }    
  //   )
  
  //  console.log("Action",value)
  //  const respon= value       

     
 
