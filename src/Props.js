


import React from 'react';
import PropTypes from 'prop-types';


class Props extends React.Component {
 
    render() {
        return (
            <>
                 <p>Name: {this.props.name}</p>
                 <p>age: {this.props.age}</p>
                 <p>city: {this.props.city}</p>
                 <p>gender: {this.props.gender}</p>
            </>
        );
    }
}

Props.propTypes ={
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    city: PropTypes.string,
    gender: PropTypes.oneOf(["female", "male", "other"]),
}

Props.defaultTypes ={
   
    gender:"female",
}




export default Props;