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
}


export default UserModel