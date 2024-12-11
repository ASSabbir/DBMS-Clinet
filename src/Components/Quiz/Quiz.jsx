import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Quiz = () => {
  const [quiz,setQuiz]=useState([])
  useEffect(() => {

    fetch('http://localhost:5000/quizs')
        .then(res => res.json())
        .then(data => {
            setQuiz(data)
        })
        .catch(error => {
            console.log("Error fetching data:", error);  
            
        });
}, []); 
const navg = useNavigate()
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 1000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});
  const handelsubmit=()=>{
    Toast.fire({
      icon: "success",
      title: `Submitted SuccessFull `
    });
    navg(location.state ? location.state : '/')
  }


    const questions = [
        {
          id: 1,
          question: "Which field involves creating and maintaining websites?",
          options: ["Graphic Design", "Web Development", "Marketing", "Human Resources"],
          answer: "Web Development",
        },
        {
          id: 2,
          question: "What is a common task in Digital Marketing?",
          options: ["Recruitment", "Search Engine Optimization (SEO)", "Inventory Management", "Customer Support"],
          answer: "Search Engine Optimization (SEO)",
        },
        {
          id: 3,
          question: "Which career involves managing employees and organizational culture?",
          options: ["Project Management", "Human Resources", "Sales", "Software Development"],
          answer: "Human Resources",
        },
        {
          id: 4,
          question: "What is a primary skill needed for Graphic Design?",
          options: ["Adobe Photoshop", "JavaScript", "Accounting", "Negotiation"],
          answer: "Adobe Photoshop",
        },
        {
          id: 5,
          question: "Which field focuses on customer interaction and resolving inquiries?",
          options: ["Customer Service", "Data Analysis", "Software Engineering", "Product Design"],
          answer: "Customer Service",
        },
      ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showScore, setShowScore] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption("");
    } else {
      setShowScore(true);
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xl p-8 bg-white rounded-lg shadow-md">
        {!showScore ? (
          <>
            <h2 className="text-lg font-semibold text-gray-700">
              Question {currentQuestion + 1}/{questions.length}
            </h2>
            <p className="mt-4 text-xl font-bold text-gray-800">
              {questions[currentQuestion].question}
            </p>
            <div className="mt-6 space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  className={`w-full px-4 py-2 text-left border rounded-md ${
                    selectedOption === option
                      ? "bg-primary text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              onClick={handleNext}
              disabled={!selectedOption}
              className="w-full px-4 py-2 mt-6 text-white bg-primary rounded-md hover:bg-primary-dark disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {currentQuestion + 1 === questions.length ? "Finish" : "Next"}
            </button>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-700">Quiz Completed!</h2>
            <p className="mt-4 text-lg text-gray-600">
              Your score: <span className="font-bold">{score}</span> out of{" "}
              {questions.length}
            </p>
            <div>
              {
                score>=3 ?
                <button onClick={handelsubmit} className='bg-secondary mt-5 hover:bg-primary duration-200 px-5 py-2 font-inter rounded-lg text-white'>Submit</button>
                :
                <h1 className='text-red-500'>Try Again</h1>
              }
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
