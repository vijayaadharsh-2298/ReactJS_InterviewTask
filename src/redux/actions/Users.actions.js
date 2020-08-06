const createUser = (user) => {
    return{
        type: 'SIGNUP_USER',
        user
    }
};

const loginUser = (user) => {
    return{
        type: 'SIGNIN_USER',
        user
    }
}

const setUser = (user) => {
    return{
        type: 'SET_USER',
        user
    }
}

export { createUser, loginUser, setUser }