import React from 'react';
import {navigation} from './components'

const Home = () => {
	let history = navigation.useHistory()
	const go = () =>{
		history.push("/contact");
  	}
    return (
        <div>
            <button onClick={go}>click</button>
        </div>
    );
}

export default Home;
