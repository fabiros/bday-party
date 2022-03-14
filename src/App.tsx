import React from 'react';
import Navbar from './components/Navbar';

const propTypes = {};
const defaultProps = {};

const App = () => {
    return (
        <>
            <Navbar />
        </>
    );
};

App.displayName = App.name;
App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
