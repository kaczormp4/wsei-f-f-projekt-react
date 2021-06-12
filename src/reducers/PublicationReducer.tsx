const publications = (state = ['ss'], action:any) => {
    switch(action.type) {
        case 'TEST':
            return [];
        case 'GET_PHOTO':
            return [];
        default:
            return state;
        }
    }

export default publications