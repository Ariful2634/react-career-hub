import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJob } from "../../Utilities/LocalStorages";
  

const JobDetails = () => {
    const jobs=useLoaderData();
    // console.log(load)
    const {id}=useParams()
    // console.log(id,jobs)
    const idInt=parseInt(id)
    const job=jobs.find(jobs=>jobs.id===idInt)
    // console.log(job)
    const btnHandle=()=>{
        saveJob(idInt)
            toast('You have applied successfully')
    }
     
    
    return (
        
        <div>
            <h2>Job Details</h2>
            <div className="flex">
                <div>
                        <p>Job Description: {job.job_description}</p>
                        <p>Job Responsibility: {job.job_responsibility}</p>
                </div>
                <div>
                        <button onClick={btnHandle} className="btn btn-primary">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;