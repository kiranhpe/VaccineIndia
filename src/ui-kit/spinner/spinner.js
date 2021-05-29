import React, { Component } from 'react'

export default class Spinner extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <span><i className={this.props.show ?'fa fa-spinner fa-spin': ''}></i></span>
        )
    }
}
