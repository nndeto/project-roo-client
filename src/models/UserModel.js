const url = 'http://localhost:4000';

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
        return fetch(`${url}/${lister}`)
        .then((response) => {
            return response.json()
        })
        .catch((err) => {
            console.log(err)
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