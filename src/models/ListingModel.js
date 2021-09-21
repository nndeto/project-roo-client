const url = 'http://localhost:4000/listings';

class ListingModel {
    static all() {
        //this is going to grab our listings data at our server
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

    //should make a call to /listings and a route that has a find parameter
    //wont mix up a show route or anything since we're not altering the url
    static cityGroup(cityName){
        return fetch(`${url}/${cityName}`)
            .then((response) => {
                return response.json()
            })
            .catch((err) => {
                console.log(err)
            })
    }
    


}

export default ListingModel;