import React, {Component} from 'react';
import {base_url, period} from '../utils/constants';
import './aboutMe.module.css';
class AboutMe extends Component
{
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount()
    {
        let hero = JSON.parse(localStorage.getItem('hero'))
        if(!hero || (Date.now() - hero.time) > period)
        {
            fetch(`${base_url}/peoples/1`)
                .then(response => response.json())
                .then(data =>
                {
                    let info =
                        {
                            name: data.name,
                            gender: data.gender,
                            skin_color: data.skin_color,
                            hair_color: data.hair_color,
                            height: data.height,
                            eye_color: data.eye_color,
                            mass: data.mass,
                            birth_year: data.birth_year
                        }
                    this.setState({hero: info})
                    hero =
                        {
                            info,
                            time: Date.now()
                        }
                    localStorage.setItem('hero', JSON.stringify(hero))
                })
        }
        else
            this.setState({hero: hero.info})
    }

    render() {
        if(this.state.hero)
        {
            return (

                <div className='aboutHero'>
                    <img src="" alt=""/>
                    <p>Name:   {this.state.hero.name}</p>
                    <p>Height:   {this.state.hero.height}</p>
                    <p>Birth year:   {this.state.hero.birth_year}</p>
                    <p>Gender:   {this.state.hero.gender}</p>
                    <p>Mass:   {this.state.hero.mass}</p>
                    <p>Hair colour:   {this.state.hero.hair_color}</p>
                    <p>Skin color:   {this.state.hero.skin_color}</p>
                    <p>Eye color:   {this.state.hero.eye_color}</p>
                </div>
            );
        }
        else
            return (
                <div></div>
            )

    }
}

export default AboutMe;