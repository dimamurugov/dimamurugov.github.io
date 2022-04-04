import { useSelector } from 'react-redux';
import { RootState } from '../redux/types';
import './Message.css';

export function Message() {
    const interval = useSelector((state: RootState) => {
        const { inputReducer } = state;
        return inputReducer.interval;
    })

    const messages = useSelector((state: RootState) => {
        const { messageReducer } = state;
        return messageReducer.messages;
    })

    return (
        <div className='messageContainer'>
            <h3>{ `Интервал: ${interval} сек` }</h3>
            <div className='messageContent'>
                { messages }
            </div>
        </div>
    );
}
