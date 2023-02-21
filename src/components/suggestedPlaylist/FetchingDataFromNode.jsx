import React, { useState, useEffect} from 'react'



function FetchingDataFromNode() {

    const [message, setmessage] = useState("");

    useEffect(() => {

        fetch("http://localhost:8000/message").then((res) => res.json()).then((data) => setmessage(data.message))
        console.log(message)
    }, [])


    return (
        <>
        <div>
            <h1>{message}</h1>
        </div>
        </>
    )
}

export default FetchingDataFromNode