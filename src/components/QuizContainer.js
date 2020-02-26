import React from 'react';
import "./QuizContainer.scss";
import quiz from '../resources/quiz.json';

export default class QuizContainer extends React.Component {
    constructor(props) {
        super(props);
        this.showAll = this.showAll.bind(this);
        this.hideAll = this.hideAll.bind(this);
    }

    showAll() {
        [...document.getElementsByClassName("answer-container")].forEach(e => {
            e.style.display = "block";
        });
    }

    hideAll() {
        [...document.getElementsByClassName("answer-container")].forEach(e => {
            e.style.display = "none";
        });
    }

    render() {
        const quizQuestions = quiz.quiz.filter(q => q.question !== "" || q.hidden);
        quizQuestions.sort((a, b) => {
            var aSection = a.section || "z";
            var bSection = b.section || "z";
            var compareSections = aSection.localeCompare(bSection);
            return compareSections !== 0
                ? compareSections
                : a.question.localeCompare(b.question);
        });

        const listItems = quizQuestions.map((item, i) =>
            <QuestionContainer key={i} i={i} item={item} />
        );

        return (
            <div>
                <button onClick={this.showAll}>
                    Show all
                </button>
                <button onClick={this.hideAll}>
                    Hide all
                </button>
                <br />
                <br />
                {listItems}
            </div>
        );
    }
}

class QuestionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // isDisplayed: false
            isDisplayed: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(oldState => ({
            isDisplayed: !oldState.isDisplayed
        }));
    }

    render() {
        const i = this.props.i;
        const item = this.props.item;

        return (
            <div
                className="question-container"
                onClick={this.handleClick}>
                <Question
                    key={`q${i}`}
                    question={`${item.section ? `${item.section} - ` : ""}${item.question}`} />
                <Answer
                    key={`a${i}`}
                    answer={item.answer}
                    isDisplayed={this.state.isDisplayed}
                    image={item.image}
                    sources={item.sources} />
            </div>
        );
    }
}

class Question extends React.Component {
    render() {
        return (
            <div className="question">
                {this.props.question}
            </div>
        )
    }
}

class Answer extends React.Component {
    render() {
        return (
            <div
                className="answer-container"
                style={this.props.isDisplayed ? {} : { display: "none" }}>
                {this.props.answer[0]
                    ? this.props.answer.map((a, i) => {
                        return (
                            <div key={`a-${i}`} className="answer">
                                {a}
                            </div>
                        );
                    })
                    : <div style={{ color: "red" }}>Answer this!</div>
                }
                {this.props.image && <img src={this.props.image} />}
                <div>
                    {this.props.sources && this.props.sources.map((a, i) => {
                        return (
                        <a href={a}>{a}</a>
                        );
                    })}
                </div>
            </div>
        );
    }
}