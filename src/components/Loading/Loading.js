import React, { Component } from 'react';
import PropTypes from 'prop-types';

let styles = {
    content: {
        textAlign: 'center',
        fontSize: '35px'
    }
};

export default class Loading extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: props.text
        }
    }

    componentDidMount() {
        let stopper = this.props.text + '...';
        this.interval = window.setInterval(() => {
            if (this.state.text === stopper){
                this.setState({text: this.props.text});
            }
            else{
                this.setState((prevState) => {
                    return {
                        text: prevState.text + '.'
                    }
                });
            }
        }, this.props.speed);
    }

    componentWillUnmount() {
        window.clearInterval(this.interval);
    }

    render() {
        return (
            <p style={styles.content}>
                {this.state.text}
            </p>
        );
    }
}

Loading.propTypes = {
    text: PropTypes.string.isRequired
}

Loading.defaultProps = {
    text: 'Loading',
    speed: 300
};