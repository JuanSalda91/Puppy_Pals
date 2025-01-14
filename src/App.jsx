import { useState } from 'react'
import { puppyList } from './data.js'; // Import puppyList from data.js
import './App.css';


function App() {
const [puppies, setPuppies] = useState(puppyList);
const [featPupId, setFeatPupId] = useState(null);


//click function//
function handleClick(puppyId) {
console.log("Puppy ID", puppyId);
setFeatPupId(puppyId);
}

//fin puppy with matching ID//
const featuredPup = puppies.find((pup) => pup.id ===featPupId)
console.log(featuredPup)

return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
        <p
        onClick={() => handleClick(puppy.id)} key={puppy.id}>
          {puppy.name}
        </p>
        );
      })}
      
      {featPupId && ( 
        <div> 
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
    //rendering list of puppies info//
 );
}

export default App;
