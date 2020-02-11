import React from 'react';
import styled from 'styled-components';
import {
    Badge
} from 'reactstrap';

const DiningImageContainer = styled.div`
    overflow: hidden;
`

const DiningImage = styled.img`
    transition: .15s;
`

const LocationContainer = styled.div`
    overflow: hidden;
    border-radius: 10px;
    
    &:hover ${DiningImage} {
        transform: scale(1.15);
    }

    &:hover {
        cursor: pointer;
    }
`

const LowerDesc = styled.div`
    width:100%;
    background-color: #ecf0f1;
    padding: 12px;
`

class Location extends React.Component {
    render = () => {
        return(
            <LocationContainer>
                <DiningImageContainer>
                    <DiningImage src="https://www.rit.edu/fa/diningservices/sites/rit.edu.fa.diningservices/files/styles/juicebox_large/public/IMG_6519_Edit.jpg?itok=zKqG0hAS" width="100%"/>
                </DiningImageContainer>
                <LowerDesc>
                    <h4>{this.props.name}</h4>
                    <Badge color="danger">{this.props.critical} Critical</Badge>&nbsp;&nbsp;
                    <Badge color="warning">{this.props.noncritical} Noncritical</Badge>
                </LowerDesc>
            </LocationContainer>
        );
    }
}

export default Location;