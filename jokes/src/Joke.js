import React, { useEffect , useState }  from 'react';
import { connect } from 'react-redux';
import { getJoke } from './actions/Actions'
import SavedList from './SavedList'
import styled from 'styled-components';

const List = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 80%;
margin: auto;
`

const Text = styled.p`
font-size: 2.4rem
text-align: center;
`
const Button = styled.button`
width: 180px;
font-size: 2rem;
height: 80px;
background: black;
color: grey;
border: none;
margin: 2%;
border-radius: 45%;
`

const JokeDisplay = (props) => {

    useEffect(() => {
        props.getJoke();
      }, []);


    return (
        <List>
        <Text>{props.jokes}</Text>
        <Button onClick={() => props.getJoke()} class='next'>Next Joke</Button>
        </List>
    )
}

function mapStateToProps(state) {
    console.log(state)
    return {
        jokes: state.joke
    }
  }
  
  const mapDispatchToProps = {
      getJoke
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (JokeDisplay);
  