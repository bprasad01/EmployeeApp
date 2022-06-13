import React from 'react';

const EditEmployee = ({match, props}) => {
    console.log(props);
    // const { empData } = props;
    // console.log(empData);
    return ( 
        <div>
            <h1>Edit Employee {match.params.id}</h1>
        </div>
    );
}
 
export default EditEmployee;