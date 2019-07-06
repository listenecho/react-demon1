const defaultState = {
    inputvalue: "写下你的日程",
    list: [
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
};
export default (state = defaultState, action) => {
    console.log(state,action) 
    var newState = JSON.parse(JSON.stringify(state))
    switch(action.type) {
        case  "INPUT_CHANGE": 
            newState.inputvalue = action.value
            return newState 
            break;

        case  "ADD_ITEM":
            newState.list.push(newState.inputvalue)
            newState.inputvalue = ''
            return newState
            break;
        case "DEL_ITEM":
            newState.list.splice(action.index, 1)
            return newState
        default:
            return state
    }
}