const intailSate = [
{ id:1, name:"ragu", email:"raguuiux@gmail.com", number:"909876513"},
{ id:2, name:"ragu3", email:"raguuiux3@gmail.com", number:"909876516"},
{ id:3, name:"ragu56", email:"raguuiux2@gmail.com", number:"909876510"},
]
const ContReducer = (state = intailSate, action) =>{
    switch (action.type) {
        case "ADD_CONTACT":
        state = [...state, action.payload]  
        return state

        case "UPDATE_CONTACT":
        state = [...state, action.payload]  
        return state

        case "DELETE_CONTACT":
        const deleteDatd = state.filter((data) => data.id !== action.payload)
        state = deleteDatd  
        return state

        default:
        return state
    }
}
export default ContReducer