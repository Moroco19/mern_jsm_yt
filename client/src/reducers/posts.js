export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.state;
        case 'CREATE':
            return action.state;
        default:
            return posts;;
    }
}