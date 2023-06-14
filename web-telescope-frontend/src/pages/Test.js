import StandardHeader from "../components/StandardHeader";
import TestQuestion from "../components/TestQuestion";
import TestAnswer from "../components/TestAnswer";
import TestFeedback from "../components/TestFeedback";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Test() {
    const [paragraphs, setParagraphs] = useState([])
    const [test, setTest] = useState("")
    const [searchParams, setSearchParams] = useSearchParams();

    const fetchTestData = () => {
        fetch("http://127.0.0.1:8000/tests/" + searchParams.get("id") + "?format=json")
          .then(response => {
            return response.json()
          })
          .then(data => {
            setTest(data)
          }).catch(err => { const mute = err })
      }

    useEffect(() => {
        fetchTestData()
    }, [])

    return (
      <div className="Test">
        <StandardHeader title="TEST"/>
        {test && <TestQuestion data={test} sectionid={searchParams.get("dzial")} />}
      </div>
    );
  }
  
  export default Test;