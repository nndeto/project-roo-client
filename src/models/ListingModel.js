const url = 'https://roo-server.herokuapp.com/listings';

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
    

    //create route that passes a new listing and passes it back to my backend
    static newListing(listing){
        return fetch(url, {
            method:'POST',
            mode: 'cors',
            body: JSON.stringify(listing),
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


    static revisedListing(listingId, updatedListing){
        return fetch(`${url}/${listingId}`, {
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify(updatedListing),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            return response.json()
        }).catch((err)=> {
            console.log(err)
        })
    }


    //do i need to do a response call??
    static deleteListing(listingId){
        return fetch(`${url}/${listingId}`, {
            method: `DELETE`,
            mode: `cors`,
            headers: {
                'Content-Type': 'application/json',
              }
        }).then((response) => {
            return response.json()
        }).catch((err) => {
            console.log(err)
        })
    }

}

export default ListingModel;