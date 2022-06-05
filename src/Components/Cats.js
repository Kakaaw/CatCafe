import Croissant from './images/croissant.jpg';
import Espresso from './images/espresso.jpg';
import Latte from './images/latte.jpg';
import Americano from './images/americano.jpg';
import Poseidon from './images/poseidon.jpg';
import Hades from './images/hades.jpg';
import Zeus from './images/zeus.jpg';
import Nut from './images/nut.jpg';

function Cats({cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8}) {
    return(
        <div className="cats">
            <p className="title">MEET THE CATS</p>
            <div className="card-container grid">
                <div className="card">
                    <div className="card-image">
                        <img src={Croissant} />
                    </div>
                    <div className="card-context">
                        <p className="name">{cat1.name}</p>
                        <p>Gender: {cat1.gender}</p>
                        <p>Age: {cat1.age}</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src={Espresso} />
                    </div>
                    <div className="card-context">
                        <p className="name">{cat2.name}</p>
                        <p>Gender: {cat2.gender}</p>
                        <p>Age: {cat2.age}</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src={Americano} />
                    </div>
                    <div className="card-context">
                        <p className="name">{cat3.name}</p>
                        <p>Gender: {cat3.gender}</p>
                        <p>Age: {cat3.age}</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src={Latte} />
                    </div>
                    <div className="card-context">
                        <p className="name">{cat4.name}</p>
                        <p>Gender: {cat4.gender}</p>
                        <p>Age: {cat4.age}</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src={Poseidon} />
                    </div>
                    <div className="card-context">
                        <p className="name">{cat5.name}</p>
                        <p>Gender: {cat5.gender}</p>
                        <p>Age: {cat5.age}</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src={Hades} />
                    </div>
                    <div className="card-context">
                        <p className="name">{cat6.name}</p>
                        <p>Gender: {cat6.gender}</p>
                        <p>Age: {cat6.age}</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src={Zeus} />
                    </div>
                    <div className="card-context">
                        <p className="name">{cat7.name}</p>
                        <p>Gender: {cat7.gender}</p>
                        <p>Age: {cat7.age}</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src={Nut} />
                    </div>
                    <div className="card-context">
                        <p className="name">{cat8.name}</p>
                        <p>Gender: {cat8.gender}</p>
                        <p>Age: {cat8.age}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cats;