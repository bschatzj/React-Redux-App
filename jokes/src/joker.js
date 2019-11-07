import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
font-size: 1.2rem
padding: 2%;
text-align: center;
`

const AddedJoke = props => {
  return (
    <li>
        <Text>{props.jokes}</Text>
    </li>
  );
};

export default AddedJoke;