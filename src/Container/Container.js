import React from 'react';
import Fetch from '../Components/Fetch';
import './Container.css'
import axios from 'axios';
import Display from '../Components/Display';

class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = { info: [], details: [] };
    }
    componentDidMount() {
        axios.get(`https://stream-restaurant-menu-svc.herokuapp.com/category`)
            .then(res => {
                const info = res.data;
                this.setState({ info });
            })
    }
    myfun = (inf) => {

        axios.get(`https://stream-restaurant-menu-svc.herokuapp.com/item?category=${inf}`)
            .then(res => {
                const details = res.data;
                this.setState({ details });
            })


    }

    render() {
        if (this.state.details.length !== 0) {
            return (<div className='container'>
                <Fetch state={this.state.info} myfun={this.myfun} />
                <Display state={this.state.details} />
            </div>)
        }
        return (
            <div className='container'>
                <Fetch state={this.state.info} myfun={this.myfun} />
            </div>

        );

    }

}
export default Container;