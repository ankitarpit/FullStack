import React from 'react';

interface KlassProps {
    age: number;
}

interface KlassState {
    name: string;
    email: string;
}

class Klass extends React.Component<KlassProps, KlassState> {
    constructor(props: KlassProps) {
        super(props);
        this.state = {
            name: '',
            email: '',
        };

    }
    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        } as Pick<KlassState, keyof KlassState>);
    }
    render() {
        const { name, email } = this.state;
        const { age } = this.props;
        return (
            <div className="EmployeeDetails">
                <h1>State Class Component</h1>

                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleInputChange}
                    placeholder="Name"
                />
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleInputChange}
                    placeholder="Email"
                />
                <button onClick={() => alert(`Name: ${name}, Email: ${email}, Age : ${age}`)}>Show Details</button>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
            </div>
        );
    }
}

export default Klass;