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

    //this will be my show route for a single listing
    //making it a longer route so that i don't hit my locations route accidentally
    static showListings(listingId){
        return fetch(`${url}/city/${listingId}`)
            .then((response) => {
                return response.json()
            })
            .catch((err) => {
                console.log(err)
            })
    }
    
    static newListing(listing){
        return fetch(url, {
            method:'POST',
            mode: 'cors',
            body: JSON.stringify(listing),
            headers: {
                'Content-Type': 'application/json',
              }
        }).then((response)=>{
            console.log(response.json)
            return response.json()
        })
        .catch((err)=>{
            console.log(err)
        })
    }


}

export default ListingModel;