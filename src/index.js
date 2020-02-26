import React from 'react';
import ReactDOM from 'react-dom';
import QuizContainer from './components/QuizContainer';
import "./styles/index.scss";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<QuizContainer />,
    document.getElementById('root'));

serviceWorker.register();
