const searchReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SEARCH':
            console.log('search results >>>>>>>>>>>>>>>>>>>>>>', action.payload)
            return action.payload;
        default:
            return state;
    }
}
export default searchReducer