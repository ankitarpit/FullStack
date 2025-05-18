interface TCProps {
    city: string;
    state: string;
}

interface TCState {
    id: number;
    name: string;
    age: number;
}
import React from 'react';

class TestComponent extends React.Component<TCProps, TCState> {
    constructor(props: TCProps) {
        super(props);
        this.state = ({
            id: 1,
            name: "Ankit",
            age: 25,
        } as Pick<TCState, keyof TCState>);
    }

    render() {
        return (
            <div>
                <h2>Test Component State</h2>
                <p>ID: {this.state.id}</p>
                <p>Name: {this.state.name}</p>
                <p>Age: {this.state.age}</p>
                <h2> Test Components Props</h2>
                <p>City: {this.props.city}</p>
                <p>State: {this.props.state}</p>
            </div>
        );
    }
}

export default TestComponent;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <TestComponent city='Gaya' state='Bihar' />
// );