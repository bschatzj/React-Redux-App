import React, { useEffect , useState }  from 'react';
import { connect } from 'react-redux';
import { saveJoke } from './actions/Actions'
import AddedJoke from './joker'
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

const SavedList = (props) => {
    console.log(props.savedJokes)


    return (
        <List>
        <Button onClick={() => props.saveJoke(props.jokes)} >Save Joke</Button>
        {props.savedJokes ? (
        <ul type="0">
          {props.savedJokes.map(jokes => (
            <AddedJoke jokes = {jokes}/>
          ))}
        </ul>
      ) : (
        <Text>Save Jokes Here</Text>
      )}
        </List>
    )
}

function mapStateToProps(state) {
    console.log(state)
    return {
        jokes: state.joke,
        savedJokes: state.savedJokes
    }
  }
  
  const mapDispatchToProps = {
      saveJoke
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (SavedList);