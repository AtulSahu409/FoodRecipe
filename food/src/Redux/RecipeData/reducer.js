import * as types from "./actiontype"

const initialState={
    
    recipe:[],
    singlerecipe:[],
    isLoading:false,
    IsError:false,
};

const reducer=(state=initialState,action)=>{
    const {type,payload}=action
    switch(type){
        


            case types.GET_getdata_REQUEST:
                return{
                    ...state,
                    isLoading:true,
                };
            case types.GET_getdata_SUCCESS:
                return{
                    ...state,
                    isLoading:false,
                    recipe:payload
    
                };
            case types.GET_getdata_FAILURE:
                return{
                    ...state,
                    IsError:true,
    
                };
        case types.GET_getsingledata_REQUEST:
                return{
                    ...state,
                    isLoading:true,
                };
            case types.GET_getsingledata_SUCCESS:
                return{
                    ...state,
                    isLoading:false,
                    singlerecipe:payload
    
                };
            case types.GET_getsingledata_FAILURE:
                return{
                    ...state,
                    IsError:true,
    
                };




        default:
            return state    

    }
}
export {reducer}