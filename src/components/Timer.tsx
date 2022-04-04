import { useEffect, useState } from 'react';
import './Timer.css';
import { useDispatch, useSelector } from 'react-redux';
import { inputInterval, addMessage, addTimerId } from '../redux/actions';
import { RootState } from '../redux/types';

function Timer() {
    const dispatch = useDispatch();
    const [seconds, setSeconds] = useState(0);
    const [isActiveTimer, setIsActiveTimer] = useState(false);

    const interval = useSelector((state: RootState) => {
        const { inputReducer } = state;
        return inputReducer.interval;
    })

    const timerId = useSelector((state: RootState) => {
        const { addTimerIdReducer } = state;
        return addTimerIdReducer.timerId;
    })
    
    useEffect(() => {
        if (isActiveTimer) {
            setTimeout(() => setSeconds(seconds + 1), 1000);
        }
    }, [seconds, isActiveTimer]);

    const handlerTimer = (statusTimer: boolean) => {
        setIsActiveTimer(statusTimer);

        if (statusTimer) {
            const request = setInterval(() => {
                dispatch(addMessage('Сообщение!'))
            }, interval * 1000);

            dispatch(addTimerId(Number(request)));
        } else {
            clearInterval(timerId);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(inputInterval(Number(e.target.value)));
    }

    return (
      <div className='container'>
          <h1>Timer</h1>
          <h3>{ `Seconds: ${seconds}` }</h3>
          <div className='buttonsContainer'>
              <div>
                <input placeholder='Введите интервал в секундах' type="number" value={ interval } onChange={ handleChange } /> 
                <span>Секунд</span>
              </div>
              <div>
                <button onClick={ () => handlerTimer(!isActiveTimer) } className='button'>{ isActiveTimer ? 'Stop' : 'Start' }</button>
              </div>
          </div>
      </div>
    );
}

export default Timer;