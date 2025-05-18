import React from 'react';
import Klass from './Klass';
import TestComponent from './TestComponent';
import Footer from './Footer';
import Header from './Header';
import Timer from './Timer';

class Page extends React.Component {

    render(): React.ReactNode {
        return (
            <div>
                <Header />
                <TestComponent city='Gaya' state='Bihar' />
                <Klass age={20} />
                <Timer />
                <Footer />
            </div >
        );
    }
}

export default Page
