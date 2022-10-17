import React, { Component } from 'react'

export class Notification extends Component {
    render() {
        return (
            <div className='notif'>{this.props.text}</div>
        )
    }
}

export default Notification