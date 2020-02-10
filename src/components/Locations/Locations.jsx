import React from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

class Locations extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render = () => {
        return(
            <Container>
                <Row>
                    <Col md="6">
                        <h1>First Col</h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Locations;