import React from 'react';
import Location from './Location';
import styled from 'styled-components';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

const SpacedRow = styled(Row)`
    margin-top: 25px;
`

class Locations extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount = () => {
        
    }

    render = () => {
        return(
            <Container>
                <SpacedRow>
                    <Col md={{size: 4, offset: 1}}>
                        <Location name="Grace Watson Dining Hall" critical="69" noncritical="420" />
                    </Col>
                    <Col md={{size: 4, offset: 2}}>
                        <h1>Second Col</h1>
                    </Col>
                </SpacedRow>
            </Container>
        )
    }
}

export default Locations;