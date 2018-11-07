import React, {Component} from 'react';
import {connect} from 'react-redux'
import {addOne, getAll} from "./redux/actions/articlesActions"
import AddArticlesForm from './components/shared/AddArticlesForm'
import Button from './components/shared/Button'
import AppBar from './components/shared/appbar/appbar'
import './App.css';


class App extends Component {

    state = {
        isOpenAddArticlesForm: false,
    };

    handleOpenAddArticlesForm = () => this.setState({isOpenAddArticlesForm: true});

    handleClosAddArticlesForm = () => this.setState({isOpenAddArticlesForm: false});

    componentDidMount(){
        this.props.getAll()
    }


    render() {
        const {articles, addOne} = this.props
        const {isOpenAddArticlesForm} = this.state

        //console.log(this.props)
        return (
            <div className="App">
                <AppBar>
                    <Button className="addArticleBtn" type="button" text="Add article" onClick={this.handleOpenAddArticlesForm}/>
                </AppBar>
                <h1>Articles App</h1>
                <AddArticlesForm isOpen={isOpenAddArticlesForm}
                                 onClickClose={this.handleClosAddArticlesForm} onClickSubmit={addOne}/>
                <ul style={{listStyleType: 'none'}}>
                    {articles.map(curr =>
                        <li key={curr._id}>
                            <h3>{curr.title}</h3>
                            <div style={{display:'flex',flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                                <img src={curr.imageUrl} alt={curr.name}/>
                                <p><span><b><em>{curr.name}</em></b></span>{curr.text}</p>
                            </div>
                            <p>Author: <b>{curr.author}</b><p>{curr.comments}</p></p>
                            <Button type="button" text="DELETE ARTICLE"/>
                            <hr/>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = dispatch => ({
    addOne: article => dispatch(addOne(article)),
    getAll: ()=> dispatch(getAll())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
