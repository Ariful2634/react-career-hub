/* eslint-disable react/prop-types */
import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";


const Job = ({job}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary}=job;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
        <figure><img src={logo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div>
            <button className="border px-3 py-2 rounded border-[#7E90FE] font-bold text-[#9873FF] mr-3">{remote_or_onsite}</button>
            <button className="border px-3 py-2 rounded border-[#7E90FE] font-bold text-[#9873FF] mr-3">{job_type}</button>
          </div>
          <div className="flex ">
            <h2 className="flex items-center gap-1 mr-4"><MdLocationOn className="text-2xl"></MdLocationOn>{location}</h2>
            <h2 className="flex items-center gap-1"><AiOutlineDollar className="text-2xl"></AiOutlineDollar>{salary}</h2>
          </div>
          <div className="card-actions ">
            <Link to={`/job/${id}`}><button className="btn btn-primary">View Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Job;