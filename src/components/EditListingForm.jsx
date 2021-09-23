import React from 'react';
import ListingModel from '../models/ListingModel';


class EditListingForm extends React.Component {
    state = {
        title: '',
        description: '',
        price: '',
        street_address: '',
        city: '',
        state: '',
        pictures:[]
    }


    componentDidMount() {
        let listingId = this.props.listingId

        ListingModel.showListings(listingId).then((data) => {
            // console.log(data)
            this.setState({
                title: data.title,
                description: data.description,
                price: data.price,
                street_address: data.street_address,
                city: data.city,
                state: data.state
            })
        })
    }
    //write a general function to handle input values
    //referenced react forms
    handleInputChange = (event) => {
        const target = event.target;
        // console.log(target.value)
        const value = target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    }

    onFormSubmit = (event) => {
        let listingId = this.props.listingId
        event.preventDefault();
        //creates a newListing we can pass our backend based off our form data
        let updatedListing = {
            title: this.state.title,
            description: this.state.description,
            price: this.state.price,
            street_address: this.state.street_address,
            city: this.state.city,
            state: this.state.state,
            pictures: this.state.pictures
        }
        this.props.updateListing(listingId, updatedListing)
        // this.props.createListing(newListing); change to update function
        // resets our form state after the form has been submitted
        this.setState({
            title: '',
            description: '',
            price: '',
            street_address: '',
            city: '',
            state: '',
            pictures:'',
            redirect: false,
        })

    }

    render() {
        return(
            <div>
                <form onSubmit = {this.onFormSubmit}>
                    <label>
                        Title:
                        <input
                            name = "title"
                            type = "text"
                            value = {this.state.title}
                            onChange = {this.handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        Description:
                        <textarea
                            name = "description"
                            value = {this.state.description}
                            onChange = {this.handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        Price:
                        <input
                            name = "price"
                            type = "number"
                            value = {this.state.price}
                            onChange = {this.handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        Street Address:
                        <input
                            name = "street_address"
                            type = "text"
                            value = {this.state.street_address}
                            onChange = {this.handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        City:
                        <input
                            name = "city"
                            type = "text"
                            value = {this.state.city}
                            onChange = {this.handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        State:
                        <input
                            name = "state"
                            type = "text"
                            value = {this.state.state}
                            onChange = {this.handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        Pictures:
                        <input
                            name = "pictures"
                            type = "text"
                            value = {this.state.pictures}
                            onChange = {this.handleInputChange}
                        />
                    </label>
                    <br />
                    <input type = 'submit' value = "Update"/>
                </form>
            </div>
        )
    }
}

export default EditListingForm