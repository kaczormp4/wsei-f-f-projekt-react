const publications = (state = ['ss'], action:any) => {
    switch(action.type) {
        case 'TEST':
            return [];
        default:
            return state;
        }
    }

export default publications