import React, { Component } from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
interface bsStyle {
    value: string;
  }


export default class ButtonSample extends Component {
    render() {
        return (
            <div>
                <h2>Buttons</h2>
                <ButtonToolbar>
                    <Button>Default</Button>
                    <Button variant="primary">Primary</Button>
                    <Button variant="success">Success</Button>
                    <Button variant="info">Info</Button>
                    <Button variant="warning">Warning</Button>
                    <Button variant="danger">Danger</Button>
                    <Button variant="link">Link</Button>
                </ButtonToolbar>
           </div>
        );
    }
}