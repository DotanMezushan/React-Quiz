import quizCompleted from '../assets/quiz-complete.png';
import Question from '../questions.js';


export default function Summary({userAnswers}) {
    const skippedAnswers = userAnswers.filter(answer => answer === null);
    const correctAnswers = userAnswers.filter((answer, index) => answer === Question[index].answers[0]);
    const skippedAnswersShare = Math.round((skippedAnswers.length / correctAnswers.length) * 100);
    const correctAnswersShare = Math.round((correctAnswers.length / userAnswers.length) * 100);
    const wrongAnsweresShare = Math.round(100 - correctAnswersShare - skippedAnswersShare );
    return <div id="summary">
        <img src={quizCompleted} alt="Trophy icon" />
        <h2>Quiz is Completed</h2>

        <div id="summary-stats">
            <p>
                <span className='number' >{skippedAnswersShare}%</span>
                <span className='text' >skipped</span>
            </p>
            <p>
                <span className='number' >{correctAnswersShare}%</span>
                <span className='text' >answered correctly</span>
            </p>
            <p>
                <span className='number' >{wrongAnsweresShare}%</span>
                <span className='text' >answered incorrectly</span>
            </p>
        </div>
        <ol>
            {userAnswers.map((answer,index) => {
                let cssClass = 'user-answer';
                if(answer === null){
                    cssClass += ' skipped';
                }else if (answer === Question[index].answers[0]){
                    cssClass += ' correct';
                }
                else {
                    cssClass += ' wrong';
                }
                return <li key ={index}>
                <h3>{index + 1}</h3>
                <p className='question' >{Question[index].text}</p>
                <p className={cssClass} >{answer ?? 'Skipped'}</p>
            </li>
            })}
        </ol>
    </div>
}