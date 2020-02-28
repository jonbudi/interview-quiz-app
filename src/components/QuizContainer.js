import React from 'react';
import "./QuizContainer.scss";
import quiz from '../resources/quiz.json';
import cSharpQuiz from '../resources/cSharpQuiz';

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
        const quizArray = quiz.quiz;
        quizArray.concat(cSharpQuiz.quiz);

        const quizQuestions = quizArray.filter(q => q.question !== "");
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
                <h1>
                    Get a job, dude.
                </h1>
                <a href="https://jonbudi.github.io/interview-quiz-app/" target="_blank" rel="noopener noreferrer">https://jonbudi.github.io/interview-quiz-app/</a>
                <br />
                <br />
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
                    sources={item.sources}
                    type={item.type} />
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
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.stopPropagation();
    }

    render() {
        const hasSources = this.props.sources && this.props.sources.length > 0;

        return (
            <div>
                <div
                    className="answer-container"
                    onClick={this.handleClick}
                    style={this.props.isDisplayed ? {} : { display: "none" }}>
                    {this.props.answer && this.props.answer[0]
                        ? this.props.answer.map((a, i) => {
                            if (this.props.type === "code") {
                                return (
                                    <div key={`a-${i}`} className="answer answer--code">
                                        <code>
                                            {a}
                                        </code>
                                    </div>
                                );
                            }
                            else if (this.props.type === "list") {
                                return (
                                    <ul>
                                        <li key={`a-${i}`} className="answer">
                                            {a}
                                        </li>
                                    </ul>
                                );
                            }
                            else {
                                return (
                                    <div key={`a-${i}`} className="answer">
                                        {a}
                                    </div>
                                );
                            }
                        })
                        : <div style={{ color: "red" }}>Answer this!</div>
                    }
                    {this.props.image && <img src={this.props.image} alt={this.props.image} />}
                </div>
                <div className="sources">
                    {hasSources ? "Source(s):" : ""}
                    {hasSources && this.props.sources.map((a, i) => {
                        return (
                            <div>
                                <a href={a} target="_blank" rel="noopener noreferrer">{a}</a>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}