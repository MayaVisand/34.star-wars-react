import './../App.css';
import './contacts.module.css';

import React, {Component} from 'react';
import {base_url, period} from '../utils/constants';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {planets: ['wait...']}
    }

    componentDidMount() {
        const planets = JSON.parse(localStorage.getItem('planets'))
        if(!planets || (Date.now() - planets.time) > period)
        {
            fetch(`${base_url}planets`)
                .then(responce => responce.json())
                .then(data => data.map(item => item.name))
                .then(planets => {

                    this.setState({planets})
                    let info =
                        {
                        listPlanets: planets,
                            time: Date.now()
                    }
                    localStorage.setItem('planets', JSON.stringify(info))
        })
        }
        else
            this.setState({planets: planets.listPlanets})
    }

    render() {
        return (
            <div className='container'>
                <form onSubmit={event => event.preventDefault()} action="action_page.php">

                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>

                    <label htmlFor="country">Planet</label>
                    <select id="planet" name="country">
                        {this.state.planets.map((item, index) =>
                            <option value={item} key={index}>{item}</option>)}
                    </select>

                    <label htmlFor="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.."
                    ></textarea>

                    <input type="submit" value="Submit"></input>

                </form>
            </div>
        );
    }
}

export default Contact;
//
// const Contact = () => {
//     return (
//
//     );
// };
//
// export default Contact;