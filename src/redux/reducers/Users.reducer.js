const initialUser = {
    userid: null,
    email: null,
    firstname: null,
    lastname: null
}

export default (state=initialUser,action) => {
    switch(action.type){
        case 'SIGNUP_USER':
            return{
                ...state,
                firstname: action.user.firstname,
                lastname: action.user.lastname,
                email: action.user.email,
                userid: action.user.userid
            };
        case 'SIGNIN_USER':
            return{
                ...state,
                firstname: action.user.firstname,
                lastname: action.user.lastname,
                email: action.user.email,
                userid: action.user.userid
            }
        case 'SET_USER':
            return{
                ...state,
                firstname: action.user.firstname,
                lastname: action.user.lastname,
                email: action.user.email,
                userid: action.user.userid
            }
        case 'REMOVE_USER':
            return{
                ...state,
                firstname: null,
                lastname: null,
                email: null,
                userid: null
            }
        default:
            return state;
    }
}