const getValue = ()=>{
    const storedJob = localStorage.getItem("job-application");
    if(storedJob){
        return JSON.parse(storedJob)
    }
    return []
}


const saveJob = id=>{
    const storedJob = getValue();
    const exists = storedJob.find(jobId=>jobId===id);
    if(!exists){
        storedJob.push(id)
        localStorage.setItem('job-application', JSON.stringify(storedJob))
    }
}



export {getValue,saveJob}