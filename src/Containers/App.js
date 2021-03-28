import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import { Heroes } from './Heroes';
import logo from './MLBBLogo.svg';
import loading from './loading.svg';
import './app.css';

import { setSearchField  } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component {
    constructor() {
        super()
        this.state = {
            Heroes: Heroes,
            imageIsReady: true
        }
    }

    componentDidMount() {
        Promise.all(
            Array.from(document.images)
                .filter(img => !img.complete)
                .map(img => new Promise(
                    resolve => { img.onload = img.onerror = resolve; }
                )))
                .then(() => {
                    this.setState({ imageIsReady: false })
                });
    } 

    render() {
        const { searchField, onSearchChange } = this.props;
        const filteredHeroes = this.state.Heroes.filter(Heroes =>{
            return Heroes.heroname.toLowerCase().includes(searchField.toLowerCase());
        })
        return (
            <div className='font-mono text-center'>
                {
                    this.state.imageIsReady ?
                        <div className='inset-0 fixed flex justify-center z-20 w-full h-full bg-black bg-opacity-25 blur'>
                            <img src={loading} className='w-3/12' alt="load"/>
                        </div> :
                        <div className='hidden '>
                            <img src={loading} alt="load"/>
                        </div>
                }
                <header className='pt-2 h-1/3 flex flex-col items-center justify-center'>
                    <img src={logo} className='w-3/5 md:w-1/5' alt="MLBBlogo"/>
                    <h1 className='text-2xl text-gray-200 font-bold'>Fans Database</h1>
                </header>
                <SearchBox searchChange={onSearchChange} />
                <div className='overflow-y-auto h-plus md:h-96'>
                    <CardList Heroes={filteredHeroes} />
                </div>
                <footer>
                    <h1 className='pt-4 text-gray-200'>Build by Alfian Nahar</h1>
                </footer>
            </div>     
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);