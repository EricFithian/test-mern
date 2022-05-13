import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import People from '../pages/People';
import Show from '../pages/Show';

function Main(props) {
    const [people, setPeople] = useState(null)

    const URL = 'https://react-build-backend22.herokuapp.com/people/';

    const getPeople = () => {
        // fetching all people from our heroku URL
        fetch(URL)
        .then(response => response.json())
        .then(result => setPeople(result))
    }

    const createPeople = async (person) => {
        // make post request to create People
        await fetch(URL, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(person)
        })
    }

    const updatePeople = async (person, id) => {
        // make put request to create people
        await fetch(URL + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(person),
        })
        // update list of people
        getPeople()
    }

    const deletePeople = async id => {
        // make delete request to create people
        await fetch(URL + id, {
            method: "delete",
            })
        // update list of people
        getPeople()
    }

    useEffect(() => getPeople(), [])
    console.log(`people are ${people}`)
  return (
    <main>
        <Routes>
            <Route path='/' 
            element={<People 
                people={people}
                createPeople={createPeople}
            />} />
            <Route 
                path= '/people/:id'
                element={
                    <Show 
                        people={people}
                        updatePeople={updatePeople}
                        deletePeople={deletePeople}
                    />
                } />
        </Routes>
    </main>
  )
}

export default Main