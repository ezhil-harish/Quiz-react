import React, {useRef, useState } from 'react'
import './Quiz.css'
import {Data} from '../Assests/Data'

const Quiz = () => {
    let [index,setindex]=useState(0);
    let [quest,setques]=useState(Data[index]);
    let [lock,setlock]=useState(false);
    let [result, setresult]=useState(false);
    let [score,setscore]=useState(0);
    let Option1=useRef(null);
    let Option2=useRef(null);
    let Option3=useRef(null);
    let Option4=useRef(null);
    let arro=[Option1,Option2,Option3,Option4];
    const checkans=(e,ans)=>{
        if(lock===false){
            e.target.classList.add("selected");
            setlock(true);

            if(quest.ans===ans){
                setscore(prev=>prev+1);
                console.log(score);
                
            }
        }
    }
    const next=()=>{
        if(lock===true){
            if(index===Data.length-1){
                setresult(true);
                return 0;
            }
            setindex(++index);
            setques(Data[index]);
            setlock(false);
            arro.map((option)=>{
                option.current.classList.remove("selected");
                return null;
        })
    }
    }
    const reset=()=>{
        setindex(0);
        setques(Data[0]);
        setscore(0);
        setlock(false);
        setresult(false);
    }
  return (
    <div className='main'>
        <div className="container">
            <h2>Quiz</h2>
            <hr />
            {result?<></>:<>
            <span>{quest.q}</span>
            <ul>
                <li ref={Option1} onClick={(e)=>{checkans(e,1)}}>{quest.option1}</li>
                <li ref={Option2} onClick={(e)=>{checkans(e,2)}}>{quest.option2}</li>
                <li ref={Option3} onClick={(e)=>{checkans(e,3)}}>{quest.option3}</li>
                <li ref={Option4} onClick={(e)=>{checkans(e,4)}}>{quest.option4}</li>
            </ul>
            <div className="but">
                <button onClick={next}>Next</button>
            </div>
            <div className="index">{index+1} out of {Data.length} Questions</div>
            </>
            }{result?<><span>Your Score: {score}</span>
            <button onClick={reset}>Reset</button></>:<></>}
        </div>
    </div>
  )
}

export default Quiz