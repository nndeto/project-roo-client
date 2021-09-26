import React from 'react'


class CreateListingForm extends React.Component {
    state = {
        lister: '' || `${this.props.currentName}`,
        lister_pic: '',
        title: '',
        description: '',
        price: '',
        street_address: '',
        city: '',
        state: '',
        pictures:[]
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
        event.preventDefault();
        //creates a newListing we can pass our backend based off our form data
        let newListing = {
            lister: this.state.lister,
            lister_pic: this.state.lister_pic,
            title: this.state.title,
            description: this.state.description,
            price: this.state.price,
            street_address: this.state.street_address,
            city: this.state.city,
            state: this.state.state,
            pictures: this.state.pictures
        }
        this.props.createListing(newListing);
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
            pictures:''
        })

    }

    //when this updates here we'll edit it and call the create post props
    render() {
        return(
            <div>
                <form onSubmit = {this.onFormSubmit} className = "list-form">
                    <label>
                        Lister
                        <br />
                        <input
                            name = "lister"
                            type = "text"
                            className = "list-input"
                            placeholder = "What do we call you?"
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
                            placeholder = "Optional"
                            className = "list-input"
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
                            placeholder = "What do we call your listing?"
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
                            className = " list-input list-text"
                            value = {this.state.description}
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
                            placeholder = "No $ needed."
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
                            placeholder = "One pic at a time, please!"
                            className = "list-input"
                            value = {this.state.pictures}
                            onChange = {this.handleInputChange}
                        />
                    </label>
                    <br />
                    <input type = 'submit' value = "Submit" className = "list-button"/>
                </form>
            </div>
        )
    }
}

export default CreateListingForm