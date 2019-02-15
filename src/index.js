import React, { Component } from 'react';
import './css/carbon.css';

class carbonAds extends Component {
    constructor(props) {
        super(props)
        this.state = {
            customClass: this.props.customClass,
            carbonUrl: this.props.carbonUrl,
            aSync: true
        };
    }

    componentDidMount() {
        const carbon_wrapper = document.querySelector(`.${this.state.carbonWrapper ? this.state.carbonWrapper : 'carbon-adds-wrapper'}`);
        const script = document.createElement("script");
        script.src = this.state.carbonUrl;
        script.async = this.state.aSync;
        script.id = "_carbonads_js"
        carbon_wrapper.appendChild(script);
    }

    render() {
        return (
            <div className={`carbon-adds-wrapper ${this.state.customClass}`}></div>
        );
    }
}

export default carbonAds;