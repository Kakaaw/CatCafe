import { Component } from "react";

export class Booking extends Component {
    state = {
        numberPpl: "",
        date: "",
        time: "",
        name: "",
        desc: ""
    }
    nextNumberOfPeople = () =>{
        document.getElementsByClassName('info')[0].style.display = 'none';
        document.getElementsByClassName('numPeople')[0].style.display = 'block';
    }
    nextCalendar = e =>{
        document.getElementsByClassName('numPeople')[0].style.display = 'none';
        document.getElementsByClassName('calendar')[0].style.display = 'block';
        this.state.numberPpl = e.target.value;
    }
    nextTimeline=()=>{
        let date = document.getElementById('date').value;
        if (date != "") {
            document.getElementsByClassName('calendar')[0].style.display = 'none';
            document.getElementsByClassName('timeline')[0].style.display = 'flex';
            this.state.date = document.getElementById('date').value;
        } 
        else {
            alert("Please pick a date!");
        }
    }
    nextPerson = e =>{
        document.getElementsByClassName('timeline')[0].style.display = 'none';
        document.getElementsByClassName('aboutPerson')[0].style.display = 'flex';
        this.state.time = e.target.value;
    }
    onSubmit = e =>{
        e.preventDefault();
        let name = document.getElementById('name').value;
        let desc = document.getElementById('desc').value;
        if (name != "" && desc != "") {
            document.getElementsByClassName('aboutPerson')[0].style.display = 'none';
            document.getElementsByClassName('booked')[0].style.display = 'flex';
            this.state.name = name;
            this.state.desc = desc;
            document.getElementById('nameBooked').innerHTML = "<b>Name:</b> " + this.state.name;
            document.getElementById('dateBooked').innerHTML = "<b>Date:</b> " + this.state.date;
            document.getElementById('timeBooked').innerHTML = "<b>Time:</b> " + this.state.time;
            document.getElementById('numberPplBooked').innerHTML = "<b>Number of People:</b> " + this.state.numberPpl;
            document.getElementById('descBooked').innerHTML = "<b>Additional notes:</b> " + this.state.desc;
        }
        else if (name != "" && desc == "") {
            document.getElementsByClassName('aboutPerson')[0].style.display = 'none';
            document.getElementsByClassName('booked')[0].style.display = 'flex';
            this.state.name = name;
            document.getElementById('nameBooked').innerHTML = "<b>Name:</b> " + this.state.name;
            document.getElementById('dateBooked').innerHTML = "<b>Date:</b> " + this.state.date;
            document.getElementById('timeBooked').innerHTML = "<b>Time:</b> " + this.state.time;
            document.getElementById('numberPplBooked').innerHTML = "<b>Number of People:</b> " + this.state.numberPpl;
            document.getElementById('descBooked').innerHTML = "<b>Additional notes:</b> none";
        }
        else {
            alert("Please input your name!");
        }
    }
    render() {
        return (
            <div className="booking flex">
                <p className="title">Book a Visit</p>
                <div className="info">
                    <p>Prices include unlimited hot and cold drinks!</p>
                    <p><b>Please</b> note our child friendly hours are: <br/> 
                        10:00am - 12:00pm (Monday - Saturday) <br/> 
                        11:00am - 1:00pm on Sundays.</p>
                    <p></p>
                    <p>All children must be accompanied by an adult. 
                        All children must be included in your party number, 
                        there is no concession for child tickets. Children under 
                        4 are not permitted at any time. </p>
                    <p>When would you like to visit us?</p>
                    <p className="subtitle"><b>Opening times:</b></p>
                    <table>
                        <tr>
                            <td>Monday</td>
                            <td>10am - 6pm</td>
                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td>10am - 6pm</td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td>10am - 6pm</td>
                        </tr>
                        <tr>
                            <td>Thursday</td>
                            <td>10am - 6pm</td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td>10am - 6pm</td>
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td>10am - 6pm</td>
                        </tr>
                        <tr>
                            <td>Sunday</td>
                            <td>10am - 6pm</td>
                        </tr>
                    </table>
                    <br/>
                    <button onClick={()=>this.nextNumberOfPeople()}>BOOK</button>
                </div>
                <div className="numPeople">
                    <p>How many people will be visiting us?</p>
                    <input type="submit" onClick={e=>this.nextCalendar(e)} value="1"></input>
                    <input type="submit" onClick={e=>this.nextCalendar(e)} value="2"></input>
                    <input type="submit" onClick={e=>this.nextCalendar(e)} value="3"></input>
                    <input type="submit" onClick={e=>this.nextCalendar(e)} value="4"></input>
                    <input type="submit" onClick={e=>this.nextCalendar(e)} value="5"></input>
                    <input type="submit" onClick={e=>this.nextCalendar(e)} value="6"></input>
                    <input type="submit" onClick={e=>this.nextCalendar(e)} value="7"></input>
                    <input type="submit" onClick={e=>this.nextCalendar(e)} value="8"></input>
                    <input type="submit" onClick={e=>this.nextCalendar(e)} value="9"></input>
                    <input type="submit" onClick={e=>this.nextCalendar(e)} value="10"></input>
                </div>
                <div className="calendar">
                    <p>When would you like to visit us?</p>
                    <input type="date" id="date"></input>
                    <br/>
                    <br/>
                    <button onClick={()=>this.nextTimeline()}>Next</button>
                </div>
                <div className="timeline">
                    <p>Please select an available time</p>
                    <input type="submit" onClick={e=>this.nextPerson(e)} value="10:00 AM"></input>
                    <input type="submit" onClick={e=>this.nextPerson(e)} value="10:30 AM"></input>
                    <input type="submit" onClick={e=>this.nextPerson(e)} value="11:00 AM"></input>
                    <input type="submit" onClick={e=>this.nextPerson(e)} value="11:30 PM"></input>
                    <input type="submit" onClick={e=>this.nextPerson(e)} value="12:00 PM"></input>
                    <input type="submit" onClick={e=>this.nextPerson(e)} value="12:30 PM"></input>
                    <input type="submit" onClick={e=>this.nextPerson(e)} value="1:00 PM"></input>
                    <input type="submit" onClick={e=>this.nextPerson(e)} value="1:30 PM"></input>
                    <input type="submit" onClick={e=>this.nextPerson(e)} value="2:00 PM"></input>
                    <input type="submit" onClick={e=>this.nextPerson(e)} value="2:30 PM"></input>
                    <input type="submit" onClick={e=>this.nextPerson(e)} value="3:00 PM"></input>
                    <input type="submit" onClick={e=>this.nextPerson(e)} value="3:30 PM"></input>
                    <input type="submit" onClick={e=>this.nextPerson(e)} value="4:00 PM"></input>
                    <input type="submit" onClick={e=>this.nextPerson(e)} value="4:30 PM"></input>
                    <input type="submit" onClick={e=>this.nextPerson(e)} value="5:00 PM"></input>
                </div>
                <div className="aboutPerson">
                    <p>What name shall we book under?</p>
                    <input type="text" placeholder="Your name" id="name"></input>
                    <textarea placeholder="Additional Note or Special Request:" rows={5} id="desc"></textarea>
                    <button onClick={e=>this.onSubmit(e)}>SUBMIT</button>
                </div>
                <div className="booked">
                    <p className="title">BOOKED!</p>
                    <p id="nameBooked"></p>
                    <p id="dateBooked"></p>
                    <p id="timeBooked"></p>
                    <p id="numberPplBooked"></p>
                    <p id="descBooked"></p>
                </div>
            </div>
        );
    }
}

export default Booking;