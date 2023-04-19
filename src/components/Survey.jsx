import React, { useEffect, useState } from 'react'
import './style.css';
import { useNavigate } from 'react-router-dom';

export default function Survey() {
  const navigate = useNavigate()
  var qustions = [{
    id: "1",
    Question: 'How satisfied are you with our products?',
    ratings: 0,
    type: "rating"
  },
  {
    id: "2",
    Question: 'How fair are the prices compared to similar retailers?',
    ratings: 0,
    type: "rating"
  },
  {
    id: "3",
    Question: 'How satisfied are you with the value for money of your purchase?',
    ratings: 0,
    type: "rating"
  },
  {
    id: "4",
    Question: 'On a scale of 1-10 how would you recommend us to your friends and family?',
    ratings: 0,
    type: "rating"
  },
  {
    id: "5",
    Question: 'What could we do to improve our service?',
    ratings: "",
    type: "text"
  }]

  const [data, setData] = useState(qustions);
  const [page, setPage] = useState(0);
  const [res, setRes] = useState('');
  
  useEffect(()=>{
   if(localStorage.getItem("Data")){    
    setData( JSON.parse(localStorage.getItem("Data")))
    setRes(JSON.parse(localStorage.getItem("Data"))[0].ratings)    
  }
  },[])
  const pre = () => {
    setRes(data[page-1].ratings)
    setPage(page => {
      if (page === 0) {
        return page;
      } else {
        return page - 1;
      }
    })
  }
  const next = (id) => {
    
    if(res!==""){
      setData((data) => {
        const returnData = data.map((each) => {
          if (each.id === id) {
            each.ratings = res;
          }
          return each
        })
        localStorage.setItem("Data", JSON.stringify(returnData));
        return returnData;
      })
    }
    setRes(data[page+1].ratings);
    setPage(page => {
      if (page === data.length - 1) {
        return page;
      } else {
        return page + 1;
      }
    })

  }
  const submit = (id) => {
    setData((data) => {
      const returnData = data.map((each) => {
        if (each.id === id) {
          each.ratings = res;
        }
        return each
      })
      localStorage.setItem("Data", JSON.stringify(returnData));
      return returnData;
    })
    setRes('');
    
    const confirm = window.confirm("Are you sure you want to submit the survey");
    if(confirm){
      localStorage.setItem("flag", "Completed")
      navigate('/thanks')
    }
    
    console.log(data);
  }
  console.log(res);
  return (
    <div className='main-S'>      
      <div className="container-S">
      <h3>Customer Survey</h3>
        <p>{`${data[page].id}/ ${data.length}`}</p>
      <div className='ques-S'>{`${data[page].id}. ${data[page].Question}`}</div>
      <div className='btnmain-S'>
        {data[page].type === "rating" &&
          <div className='btns-S'>
            <button className={`${res==="1" && "active"}`} onClick={() => { setRes("1") }}>1</button>
            <button className={`${res==="2" && "active"}`} onClick={() => { setRes("2") }}>2</button>
            <button className={`${res==="3" && "active"}`} onClick={() => { setRes("3") }}>3</button>
            <button className={`${res==="4" && "active"}`} onClick={() => { setRes("4") }}>4</button>
            <button className={`${res==="5" && "active"}`} onClick={() => { setRes("5") }}>5</button>
          </div>
        }
        {data[page].type === "text" &&
          <div>
            <textarea onChange={(e) => { setRes(e.target.value) }} name="" id="" cols="35" rows="5" value={res}></textarea>
          </div>
        }

      </div>
      <div className='btn-S'>
      <button onClick={pre}>Prev</button>
      {page === data.length - 1 ? <button onClick={() => submit(data[page].id)} >Submit</button> : <button onClick={() => { next(data[page].id) }}>Next</button>}
      </div>
      </div>
    </div>
  )
}
