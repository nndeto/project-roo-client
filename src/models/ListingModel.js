const url = 'https://localhost:4000/listings';

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


}

export default ListingModel