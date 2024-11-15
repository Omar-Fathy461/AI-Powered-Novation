<<<<<<< HEAD
import { useDispatch, useSelector } from 'react-redux';
import { setQuestion, getAnswer, addPreviousQuestion, newChat } from '../../store/slices/aiSlice';
import './aiChat.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const AiChat = () => {
    const dispatch = useDispatch();
    const { question, answer, loading, error, previousQuestions } = useSelector((state) => state.ai);

    const handleQuestionChange = (e) => {
        dispatch(setQuestion(e.target.value));
    };

    const handleGenerateAnswer = () => {
        if (question.trim()) {
            dispatch(addPreviousQuestion(question));
            dispatch(getAnswer(question));
            dispatch(setQuestion(''));  // تفريغ الـ input بعد إرسال السؤال
        }
    };

    const handleNewChat = () => {
        dispatch(newChat());
    };

    const customDarkTheme = {
        ...dark,
        'pre[class*="language-"]': {
            backgroundColor: '#1a1818',
            padding: '20px',
            borderRadius: '5px',
        }
    };

    return (
        <div className='aiChat'>
            <div className="container">
                <h1 className='text-center'>AI Chat Bot</h1>
                <p>Power up your website with our advanced chat bot that offers image and video tools</p>
                <div className="aiModal">
                    <div className="aiHeading d-flex justify-content-between align-items-center">
                        <p>How Can I Help You?</p>
                        <button onClick={handleNewChat} className='newChatBtn'>New Chat +</button>
                    </div>
                    <div className="aiContent">
                        {previousQuestions.map((q, index) => (
                            <p key={index} className='question text-end'><span>{q}</span></p>
                        ))}
                        {answer && (
                            <p className='answer text-start'>
                                <ReactMarkdown
                                    className="aiContent"
                                    components={{
                                        h2: ({ node, ...props }) => <h2 style={{ color: 'white', fontSize: '2rem', fontWeight: '600' }} {...props} />,
                                        p: ({ node, ...props }) => <p style={{ color: 'white' }} {...props} />,
                                        code: ({ node, inline, className, children, ...props }) => {
                                            const match = /language-(\w+)/.exec(className || '');
                                            return !inline && match ? (
                                                <SyntaxHighlighter
                                                    style={customDarkTheme}
                                                    language={match[1]}
                                                    PreTag="div"
                                                    {...props}
                                                >
                                                    {String(children).replace(/\n$/, '')}
                                                </SyntaxHighlighter>
                                            ) : (
                                                <code className={className} {...props}>
                                                    {children}
                                                </code>
                                            );
                                        }
                                    }}
                                >
                                    {answer}
                                </ReactMarkdown>
                            </p>
                        )}
                    </div>
                    <div className="aiInput">
                        <div className="aiBox d-flex justify-content-between align-items-center">
                            <input type="text" value={question} onChange={handleQuestionChange} placeholder='Send a message' />
                            <button onClick={handleGenerateAnswer} className="sendBtn">
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
=======
import './aiChat.scss';

const AiChat = () => {

    return (
        <div><h1 className='text-center'>AI Chat</h1></div>
>>>>>>> eb3cb1c82b0560254ab20d29ac2a2b4b7b17a669
    );
}

export default AiChat;
