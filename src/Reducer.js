const myReducer=(state,action)=>{
    switch(action){
        case"click":
        return {num:state.num+10}
    }
}
export default myReducer