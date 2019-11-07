import React, { useEffect , useState }  from 'react';
import { connect } from 'react-redux';
import { getBadJoke } from './actions/Actions';
import SavedList from './SavedList';
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
padding: 10%;
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
        props.getBadJoke();
      }, []);


    return (
        <List>
        <Text>{props.jokes}</Text>
        <Button onClick={() => props.getBadJoke()} class='next'>Next Joke</Button>
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
      getBadJoke
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (JokeDisplay);