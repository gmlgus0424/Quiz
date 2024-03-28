import React from 'react'
import {useRef,useState} from 'react'
import '../../src/index.css'

const Progressbar = () => {
  const [currentProgress,setCurrentProgress]=useState(1)
  const progressBar = useRef();
  const circle= useRef(1)
 const  progressArr=[2,3,4]


  //dom요소에 직접 접근해야하기때문에 ref사용 

  //전 단계 현재와 전꺼랑 
  const prevSteps=(e)=>{
    const progressCount= Number(circle.current.childNodes[currentProgress-2].textContent)
    setCurrentProgress(currentProgress-1)
    if (currentProgress === progressCount) { 
      circle.current.childNodes[progressCount].classList.remove('active');
  }


  //다음단계 
  const NextSteps=(e)=>{
    const progressCount= Number(circle.current.childNodes[currentProgress-1].textContent)
    setCurrentProgress(currentProgress-1)
    if (currentProgress === progressCount) { 
      circle.current.childNodes[progressCount].classList.add('active');
  }
  return (
<>
<div className="steps" ref={circle}>
    <span class Name= "circle active">1</span>{
    progressArr.map((i)=>(
      <span className="circle">{i}</span> 
      ))
  }
  <div className="progress-bar">
      <span ref={progressBar} className="indicator"></span>
  </div>
</div>
<div className="buttons">

  <button id="prev" disabled={currentProgress === 1 ? true : false} onClick={(() => {prevSteps()})}> 이전 </button>

  <button id="next" disabled={currentProgress === 4 ? true : false} onClick={() => {NextSteps()}}>다음 </button>
</div>
   

</>
  )
}
  }
}
export default Progressbar;
