import React from 'react';
import ListingModel from '../models/ListingModel';
import '../css/ListingForms.scss'

class EditListingForm extends React.Component {
    state = {
        lister: '',
        lister_pic: '',
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
                lister: data.lister,
                lister_pic: data.lister_pic,
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
            lister: this.state.lister,
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
            lister: '',
            lister_pic: '',
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
                        Lister
                        <br />
                        <input
                            name = "lister"
                            type = "text"
                            className = "list-input"
                            value = {this.state.lister}
                            onChange = {this.handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        Lister Pic
                        <br />
                        <input
                            name = "lister_pic"
                            type = "text"
                            className = "list-input"
                            placeholder = "Optional"
                            value = {this.state.lister_pic}
                            onChange = {this.handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        Title
                        <br />
                        <input
                            name = "title"
                            type = "text"
                            className = "list-input"
                            value = {this.state.title}
                            onChange = {this.handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        Description
                        <br />
                        <textarea
                            name = "description"
                            value = {this.state.description}
                            className = "list-input list-text"
                            onChange = {this.handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        Price
                        <br />
                        <input
                            name = "price"
                            type = "number"
                            className = "list-input"
                            value = {this.state.price}
                            onChange = {this.handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        Street Address
                        <br />
                        <input
                            name = "street_address"
                            type = "text"
                            className = "list-input"
                            value = {this.state.street_address}
                            onChange = {this.handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        City
                        <br />
                        <input
                            name = "city"
                            type = "text"
                            className = "list-input"
                            value = {this.state.city}
                            onChange = {this.handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        State
                        <br />
                        <input
                            name = "state"
                            type = "text"
                            className = "list-input"
                            value = {this.state.state}
                            onChange = {this.handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        Pictures
                        <br />
                        <input
                            name = "pictures"
                            type = "text"
                            className = "list-input"
                            placeholder = "Add Another Here"
                            value = {this.state.pictures}
                            onChange = {this.handleInputChange}
                        />
                    </label>
                    <br />
                    <input type = 'submit' value = "Update" className = "list-button"/>
                </form>
            </div>
        )
    }
}

export default EditListingForm