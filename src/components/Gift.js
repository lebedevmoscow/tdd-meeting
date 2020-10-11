import React, { Component } from 'react'
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap'

class Gift extends Component {
    constructor() {
        super()
        this.state = { person: '', present: '' }
    }

    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <label>Person</label>
                        <FormControl
                            onChange={(e) =>
                                this.setState({ person: e.target.value })
                            }
                            className="input-person"></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <label>Present</label>
                        <FormControl
                            className="input-present"
                            onChange={(e) =>
                                this.setState({ present: e.target.value })
                            }
                        />
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default Gift
