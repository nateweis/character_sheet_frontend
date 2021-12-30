class Auth{
    static saveToken(token){
        localStorage.setItem('token', token)
    }

    static getToken(){
        return localStorage.getItem('token')
    }

    static removeToken(){
        localStorage.removeItem('token')
    }
}

export default Auth