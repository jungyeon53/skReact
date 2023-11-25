
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// import React, {useEffect, useState} from 'react';
import Header from './components/Header/Header.jsx'
import MainBanner from './components/MainBanner/MainBanner.jsx'
import CardCustom from './components/Card/CardCustom.jsx';
import Sale from './components/Product/Sale.jsx'
import Items from './components/Product/Items.jsx'
// import axios from 'axios';

function App() {
//    const [hello, setHello] = useState('')
//     useEffect(() => {
//         axios.get('')
//         .then(response => setHello(response.data))
//         .catch(error => console.log(error))
//     }, []);

    return (
        <div>
            <Header />
            <MainBanner />
            <CardCustom />
            <Items />
            <Sale />
        </div>
    );
}

export default App;