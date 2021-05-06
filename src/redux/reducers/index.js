const defaultUser = { email: "", username: ""};

export default function userReducer( user = defaultUser, action) {
    switch (action.type) {
        case "SET_USER":
            return { ...action.payload}
    
        default:
            return user;
    }
}