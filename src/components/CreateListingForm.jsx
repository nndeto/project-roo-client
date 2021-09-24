import React from 'react'


class CreateListingForm extends React.Component {
    state = {
        lister: '',
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
                <form onSubmit = {this.onFormSubmit}>
                    <label>
                        Lister:
                        <input
                            name = "lister"
                            type = "text"
                            value = {this.state.lister}
                            onChange = {this.handleInputChange}
                        />
                    </label>
                    <br />
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
                    <input type = 'submit' value = "Submit"/>
                </form>
            </div>
        )
    }
}

export default CreateListingForm