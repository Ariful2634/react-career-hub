import { useEffect, useState } from "react";
import Job from "../job/Job";


const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([])
    const [dataLength,setDataLength]=useState(4)

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data=>setJobs(data))
    },[])

    return (
        <div >
            <h2 className="text-4xl text-center">Featured Jobs: {jobs.length}</h2>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-5">
                {
                    jobs.slice(0,dataLength).map(jobs=><Job key={jobs.id} job={jobs}></Job>)
                }
            </div>
            <div  className={dataLength===jobs.length ? 'hidden ' : ''}>
                <button onClick={()=> setDataLength(jobs.length)} className="btn btn-primary " >Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;