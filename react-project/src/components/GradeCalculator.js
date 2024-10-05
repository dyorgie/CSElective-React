import React, {useState} from "react";
import './GradeCalculator.css';

export default function GradeCalculator() {
    const [quiz, setQuiz] = useState(0);
    const [lab, setLab] = useState(0);
    const [exam, setExam] = useState(0);
    const [overall, setOverall] = useState(0);
    const [final, setFinal] = useState(0);

    const overallGrade = () => {
        setOverall((parseFloat(quiz*0.30) + parseFloat(lab*0.30) + parseFloat(exam*0.40)));

        if (overall >= 50 && overall <= 74.5) {
            setFinal("0");
        }

        if (overall >= 74.51 && overall <= 76.5) {
            setFinal("1");
        }

        if (overall >= 76.51 && overall <= 78.5) {
            setFinal("1.25");
        }

        if (overall >= 78.51 && overall <= 80.5) {
            setFinal("1.5");
        }

        if (overall >= 80.51 && overall <= 82.5) {
            setFinal("1.75");
        }

        if (overall >= 82.51 && overall <= 84.5) {
            setFinal("2");
        }

        if (overall >= 84.51 && overall <= 86.5) {
            setFinal("2.25");
        }

        if (overall >= 86.51 && overall <= 88.5) {
            setFinal("2.5");
        }

        if (overall >= 88.51 && overall <= 90.5) {
            setFinal("2.75");
        }

        if (overall >= 90.51 && overall <= 92.5) {
            setFinal("3");
        }

        if (overall >= 92.51 && overall <= 94.5) {
            setFinal("3.25");
        }

        if (overall >= 94.51 && overall <= 96.5) {
            setFinal("3.5");
        }

        if (overall >= 96.51 && overall <= 98.5) {
            setFinal("3.75");
        }

        if (overall >= 98.51 && overall <= 100) {
            setFinal("4");
        }
    }



    return (
        <>

        <div className="container">
        <h1>Grade Calculator</h1>

        Quiz <br></br><input type="number" value={quiz} onChange={(e) => setQuiz(e.target.value)}></input>
        <br></br>
        Lab <br></br><input type="number" value={lab} onChange={(e) => setLab(e.target.value)}></input>
        <br></br>
        Exam <br></br><input type="number" value={exam} onChange={(e) => setExam(e.target.value)}></input>
        <br></br>

        <button onClick={overallGrade} className="calcButton">Submit</button>

        <p>Overall Grade: {parseInt(overall)}</p>
        <p>Final Grade: {parseFloat(final)}</p>

        </div>

        



        </>
    );
}