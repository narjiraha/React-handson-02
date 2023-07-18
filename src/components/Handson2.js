import React, { Component } from 'react';

class Handson2 extends Component {
    state = {
        name: '',
        department: '',
        rating: '',
        submissions: [],
    };

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value,
        });
    };

    handleDepartmentChange = (event) => {
        this.setState({
            department: event.target.value,
        });
    };

    handleRatingChange = (event) => {
        this.setState({
            rating: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const { name, department, rating, submissions } = this.state;
        const newSubmission = {
            name,
            department,
            rating,
        };

        this.setState((prevState) => ({
            submissions: [...prevState.submissions, newSubmission],
            name: '',
            department: '',
            rating: '',
        }));
    };

    render() {
        const { name, department, rating, submissions } = this.state;

        return (
            <>
                <h1>Employee Feedback Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input
                            className="name"
                            type="text"
                            value={name}
                            onChange={this.handleNameChange}
                            required
                        />
                    </label>
                    <br />

                    <label>
                        Department:
                        <input
                            className="department"
                            type="text"
                            value={department}
                            onChange={this.handleDepartmentChange}
                            required
                        />
                    </label>
                    <br />

                    <label>
                        Rating:
                        <input
                            className="rating"
                            type="text"
                            value={rating}
                            onChange={this.handleRatingChange}
                            required
                        />
                    </label>
                    <br />

                    <button className="submit" type="submit">
                        Submit
                    </button>
                </form>

                <div className="container">
                    {submissions.map((submission, index) => (
                        <div className="submission" key={index}>
                            <p>Name: {submission.name} || </p>
                            <p>Department: {submission.department} || </p>
                            <p>Rating: {submission.rating}</p>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}

export default Handson2;
