import React from 'react';

const EditEmployee = ({match}) => {

    return ( 
        <div>
            <h1>Edit Employee {match.params.id}</h1>
        </div>
    );
}
 
export default EditEmployee;