import { useState } from 'react'
import NoResult from './NoResult'
import search from "../../assets/icons/no-search.png";
import RequestProps from './RequestProps';



const Request = () => {
    const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-white my-4 p-6 rounded-2xl shadow-sm border border-gray-300">
      <div>
        <p className='font-bold text-2xl text-[#2B2A2F] '>Request: <span className='font-bold text-2xl text-#F04438] '>Urgent Task</span></p>
        <p className='font-normal text-base text-[#908C9C] '>Stay in tune with and don’t miss out on the most pressing</p>

      </div>
      {!showMore ? (
            <NoResult
              img={search}
              main="No Urgent"
              sub="Task"
              desc="So sorry, you currently do not have urgent / pending task that need your action. Setup workflow to get started."
              btn="Setup Workflow"
              onClick={() => setShowMore(true)}
            />
          ) : (
            <>
            <div className='grid grid-cols-1 gap-x-6  justify-center   md:grid-cols-2'>
              <RequestProps
              disc='Payroll Approval'
              sub='+ 3 payroll process await your approval'
              />
              <RequestProps
              disc='Recruitment'
              sub='+ 30 new application received'
              />
              
              <RequestProps
              disc='Leave Approval'
              sub='+ 6 new leave await your approval'
              />

              <RequestProps
              disc='Performance Management'
              sub='+ 3 performance appraisal pending'
              />
          
            </div>
            </>
          )}
    </div>
         
  )
}

export default Request