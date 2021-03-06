const url = 'https://roo-server.herokuapp.com';

class UserModel{
    static userLogin(username, password){
        return fetch(`${url}/login`, {
            method:'POST',
            mode: 'cors',
            body: JSON.stringify({
                username: username, 
                password: password
            }),
            headers: {
                'Content-Type': 'application/json',
              }
        }).then((response)=>{
            return response.json()
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    static userSignup(newUser){
        console.log(newUser)
        return fetch(`${url}/signup`, {
            method:'POST',
            mode: 'cors',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json',
              }
        }).then((response)=>{
            return response.json()
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    static findProfile(lister){
        return fetch(`${url}/profile/${lister}`)
        .then((response) => {
            return response.json()
        })
        .catch((err) => {
            console.log(err)
        })
    }

    static findAll(){
        return fetch(url) 
        .then((response) => {
            //converts data into something we can use
            return response.json()
        })
        //error handling
        .catch((err) => {
            console.log(err);
        })
    }

    static logMeOut() {
        return fetch(`${url}/logout`)
            //error handling
            .catch((err) => {
                console.log(err);
            })
    }
}

export default UserModel