 const initialstate={
    res:[]
}

const reducerData = (state =initialstate ,action)=>{  
    switch(action.type)  
   {
       case 'GET_DATA':   
       console.log("reducer",action.payload)       
       return {          
           ...state,              
          res: action.payload        
       }            
   default :
       return state;
    }
}


export default reducerData;