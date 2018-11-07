import React, {Component} from 'react'
import {v4} from "uuid"
import Button from './Button'
import Input from './Input'


const INITIAL_STATE = {
    id: v4(),
    name: '',
    title: '',
    imageUrl: '',
    author: '',
    text: '',
    comments: '',
};

export default class AddArticlesForm extends Component {

    state = {...INITIAL_STATE};

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onClickSubmit(this.state);

        this.setState({...INITIAL_STATE});

        this.props.onClickClose()
    };

    handleClear = e => {
        e.preventDefault();
        this.setState({...INITIAL_STATE});
    }

    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    };

    render() {

        const {isOpen, onClickClose} = this.props
        const {name, title, imageUrl, author, text, comments} = this.state

        return (

            isOpen === false ? null :

                <form style={{display:'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Input name="name" type="text" required onChange={this.handleInputChange} value={name} />
                    <Input name="title" type="text" required onChange={this.handleInputChange} value={title} />
                    <Input name="imageUrl" type="text" required onChange={this.handleInputChange} value={imageUrl}/>
                    <Input name="author" type="text" required onChange={this.handleInputChange} value={author}/>
                    <Input name="text" type="text" required onChange={this.handleInputChange} value={text}/>
                    <Input name="comments" type="text" required onChange={this.handleInputChange} value={comments}/>
                    <div>
                        <Button onClick={onClickClose} text="close AddArticlesForm"/>
                        <Button onClick={this.handleClear} text="reset" type="reset"/>
                        <Button onClick={this.handleSubmit} text="submit" type="submit"/>
                    </div>

                </form>

        )
    }


}

