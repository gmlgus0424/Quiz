import React,{useState} from 'react'
import Progressbar from './Progressbar'
import Ques from '../questions'
const Quiz = () => {


// 답
const [UserAnswer,setUserAnswer]=useState([])

//질문
const Question=UserAnswer.length;



//질문끝 
const quizComplete= Question===Ques.length;




//보기 버튼 클릭했을때 전에 있던 값과 누를 값 담겨야함
//전에 골랐던 답도 넣어야 나중에 돌아갔을때 남아있음


function handleClick(selectedAnswer){
  setUserAnswer((prevUserAnswers)=>{
    return[...prevUserAnswers,selectedAnswer]

  })
}

if(quizComplete){
  return <div id="summary">
    <h2>퀴즈 끝</h2>
  </div>
}


//답 섞기
const randomAnswers= [...Ques[Question].answers]
randomAnswers.sort((a,b)=>Math.random() -0.5)

  // ui
  return (
    <div>
    //질문
    <Progressbar />
     <h2>{Ques[Question].text}</h2>
     //답변 랜덤
     <ul>
      {randomAnswers.map((answer)=>(
        <li key={answer} >
      <button onClick={()=>handleClick(answer)}>{answer} </button>
     
      </li>
      )

      )}
      
      </ul>   
       </div>
  )
}

export default Quiz
