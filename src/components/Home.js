import React from 'react';
import Hero from "./Hero";
import Friends from "./Friends";
import FarGalaxy from "./FarGalaxy";

const Home = () => {
    return (
        <div>
            <main className="clearfix">
                <Hero/>
                <Friends/>
                <FarGalaxy/>
            </main>
        </div>
    );
};

export default Home;