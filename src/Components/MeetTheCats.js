import Cats from './Cats.js';

function MeetTheCats() {
    window.scrollTo(0, 0)
    const cat1 = {
        name: "Croissant",
        gender: "Female",
        age: "1 year"
    }
    const cat2 = {
        name: "Espresso",
        gender: "Male",
        age: "6 years"
    }
    const cat3 = {
        name: "Americano",
        gender: "Male",
        age: "1 year"
    }
    const cat4 = {
        name: "Latte",
        gender: "Female",
        age: "3 years"
    }
    const cat5 = {
        name: "Poseidon",
        gender: "Male",
        age: "8 months"
    }
    const cat6 = {
        name: "Hades",
        gender: "Male",
        age: "11 months"
    }
    const cat7 = {
        name: "Zeus",
        gender: "Male",
        age: "1 year"
    }
    const cat8 = {
        name: "Nut",
        gender: "Female",
        age: "5 years"
    }
    return(
        <div className="meetCats">
            <Cats cat1={cat1} cat2={cat2} 
            cat3={cat3} cat4={cat4} 
            cat5={cat5} cat6={cat6} 
            cat7={cat7} cat8={cat8}/>
        </div>
    );
}

export default MeetTheCats;