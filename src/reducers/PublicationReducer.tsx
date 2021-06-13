const publications = (state = ['ss'], action:any) => {

    switch(action.type) {
        case 'GET_PHOTO':
            return [
                ...state,
                ['example']
            ];
        default:
            return state;
        }
    }

export default publications