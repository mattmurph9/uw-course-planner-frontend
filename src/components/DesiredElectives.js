import React, { Component } from 'react';

class DesiredElectives extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            courses: []
        }
    }

    handleTextChange = (event) => {
        this.setState({ input: event.target.value });
    }

    addCourses = () => {
        let input = this.state.input;
        input = input.replace(/\r?\n|\r/g, ''); // remove newlines
        input = input.replace(/ /g, ''); // remove spaces
        const newCourses = input.split(";");
        const courses = [...this.state.courses, ...newCourses];
        this.setState({ courses, input: '' });
        this.props.addElectives(courses);
    }

    renderCourses = () => {
        return (
            this.state.courses.map(course => (
                <p key={course}>{course}</p>
            ))
        );
    }

    render() {
        const { courses } = this.state;
        return (
            <div>
                <h3>Desired Electives</h3>
                <div className="FormArea">
                    <p>Enter courses you want to take some time in the future, but don't know which term.</p>
                    <textarea value={this.state.input} onChange={this.handleTextChange} />
                    <button className="add" onClick={this.addCourses}>
                        Add
                    </button>
                    <button className="clear" onClick={() => this.setState({courses: []})}>
                        Clear
                    </button>
                    { courses.length !== 0 &&
                        this.renderCourses()
                    }
                </div>
            </div>
        );
    }
}

export default DesiredElectives;