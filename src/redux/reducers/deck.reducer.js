const deckReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_DECK':
            console.log('deck results >>>>>>>>>>>>>>>>>>>>>>', action.payload)
            return action.payload;
        default:
            return state;
    }
}
export default deckReducer