import React from 'react';
import AddNewProperty from '../addNew/AddNewProperty';

function EditProperty(props) {
  return (
    <AddNewProperty
      data={props.location.state}
      location={props.location.pathname}
    />
  );
}

export default EditProperty;
