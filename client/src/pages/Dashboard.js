import {useEffect} from 'react';



const Dashboard = () => {


    const fetchData = async () => {

        // with the proxy
        // const response = await fetch('/')

        const response = await fetch(`http://localhost:5000/api/v1`)
        const data = await response.json();

        console.log(data)

    }

    useEffect(() => {
        fetchData()
    },[])


    return <h1>Dashboard a</h1>
}


export default Dashboard