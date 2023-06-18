import React, { useState } from 'react'
import styled from 'styled-components'


export default function WelcomePage() {
    const [muscle, setMuscle] = useState("");
    const [exerciseName, setExerciseName] = useState("");
    const [type, setType] = useState("");
    

    

    const url = 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=caedio&muscle=biceps';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '506603775amsh214543087a55c35p14da82jsne9b628c15d1c',
            'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
        }
    };

    function getExercises() {
        try {
            const response = fetch(url, options);
            const result = response.json();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }
    
    return (
        <Container>
            <div>
                <input />
                <input />
                <button onClick={getExercises}>click</button>
            </div>
        </Container>
    )
}

const Container = styled.div`

`;
