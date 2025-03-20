import React, { useState } from 'react'
import user from "../../assets/icons/user.png";
import todoList from "../../assets/icons/todoList.png";
import info from "../../assets/icons/info.png";
import { PieChart } from '@mantine/charts'
import NoResult from './noResult';
import search from "../../assets/icons/no-file.png";
import { BarChart } from '@mantine/charts'




const Employment = () => {
     const [showMore, setShowMore] = useState(false);
    const data = [
        { name: 'Part Time', value: 40, color: '#E16635' },
        { name: 'Full Time', value: 10, color: '#3E1C96' },
        { name: 'Temporary', value: 50, color: '#5E42A7' },
        { name: 'Contract', value: 20, color: '#1F9F7D' },
      ];

      const data2 = [
        { day: 'Mon', Remote: 342, Hybrid: 876, Onsite: 123 },
        { day: 'Tue', Remote: 567, Hybrid: 234, Onsite: 789 },
        { day: 'Wed', Remote: 1000, Hybrid: 456, Onsite: 321 },
        { day: 'Thu', Remote: 234, Hybrid: 789, Onsite: 567 },
        { day: 'Fri', Remote: 678, Hybrid: 345, Onsite: 901 },
        { day: 'Sat', Remote: 432, Hybrid: 876, Onsite: 543 },
        { day: 'Sun', Remote: 765, Hybrid: 432, Onsite: 198 },
      ];
      
  return (
    <section className="bg-white my-4 p-6 rounded-2xl shadow-sm border border-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-300">
            <div className="flex items-center mb-5 gap-2">
            <img src={user} alt="icon" />
            <h3 className="font-medium text-gray-900 text-lg">Employment Type</h3>
          </div>
          <div className="flex items-center h-[90%] justify-between gap-2">
            <section className='flex flex-col justify-between gap-10'>
          <div>

            <div className='flex items-center gap-2'>
                <div className='h-[14px] bg-[#3E1C96] border-[2px] border-[#3E1C96] '></div>
                <p className='text-sm text-[#908C9C] font-normal'>Full Time</p>
            </div>
            <p className='font-md text-2xl'>0</p>
          </div>

          <div>
            <div className='flex items-center gap-2'>
                <div className='h-[14px] bg-[#E16635] border-[2px] border-[#E16635] '></div>
                <p className='text-sm text-[#908C9C] font-normal'>Part Time</p>
            </div>
            <p className='font-md text-2xl'>0</p>
          </div>

          <div>
            <div className='flex items-center gap-2'>
                <div className='h-[14px] bg-[#1F9F7D] border-[2px] border-[#1F9F7D] '></div>
                <p className='text-sm text-[#908C9C] font-normal'>Contract</p>
            </div>
            <p className='font-md text-2xl'>0</p>
          </div>

          <div>
            <div className='flex items-center gap-2'>
                <div className='h-[14px] bg-[#5E42A7] border-[2px] border-[#5E42A7] '></div>
                <p className='text-sm text-[#908C9C] font-normal'>Temporary</p>
            </div>
            <p className='font-md text-2xl'>0</p>
          </div>

            </section>
            <PieChart withLabelsLine labelsPosition="inside" labelsType="percent" withLabels data={data} />
            </div>
            
            </div>



            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-300">
            <div className="flex items-center mb-5 gap-2">
            <img src={todoList} alt="icon" />
            <h3 className="font-medium text-gray-900 text-lg">
              Working Type
            </h3>
          </div>
          <section className='flex flex-row justify-between'>
          <div>

            <div className='flex items-center gap-2'>
                <div className='h-[14px] bg-[#F0B29A] border-[2px] border-[#F0B29A] '></div>
                <p className='text-sm text-[#908C9C] font-normal'>Remote</p>
            </div>
            <p className='font-md text-2xl'>0</p>
          </div>

          <div>
            <div className='flex items-center gap-2'>
                <div className='h-[14px] bg-[#E68057] border-[2px] border-[#E68057] '></div>
                <p className='text-sm text-[#908C9C] font-normal'>Hybrid</p>
            </div>
            <p className='font-md text-2xl'>0</p>
          </div>

          <div>
            <div className='flex items-center gap-2'>
                <div className='h-[14px] bg-[#964423] border-[2px] border-[#964423] '></div>
                <p className='text-sm text-[#908C9C] font-normal'>Onsite</p>
            </div>
            <p className='font-md text-2xl'>0</p>
          </div>

            </section>
          {!showMore ? (
            <NoResult
              img={search}
              main="No Quick"
              sub="Action"
              desc="So sorry, no data to display here now. Create an employee to get Started"
              btn="Create Employee"
              onClick={() => setShowMore(true)}
            />
          ) : (
            <>
            <BarChart
      h={300}
      data={data2}
      dataKey="day"
      
      series={[
        { name: 'Remote', color: '#F0B29A', stackId: 'a' },
        { name: 'Hybrid', color: '#E68057', stackId: 'b' },
        { name: 'Onsite', color: '#964423', stackId: 'b' },
      ]}
    />
            </>
            )}
            </div>

        </div>
        <section className="bg-white my-4 lg:p-6 p-2 rounded-2xl shadow-sm border border-gray-300">
        <div className="flex items-center my-4 gap-2">
            <img src={user} alt="icon" />
            <h3 className="font-medium text-gray-900 text-lg">Gender Distribution </h3>
          </div>
          <div className='grid grid-cols-3'>
            <div className='bg-[#3E1C96] rounded-[4px] h-10 relative left-1 '> <p className='text-white  font-normal lg:text-2xl text-center '>Male (1000)</p></div>
            <div className='bg-[#9E8DCA] rounded-[4px] h-10 '> <p className='text-white text-center font-normal lg:text-2xl '>Female (600)</p></div>
            <div className='bg-[#D8D2EA] rounded-[4px] h-10 relative right-1  '> <p className='text-[#3E1C96] lg:text-2xl text-center '>Others (10)</p></div>
 
          </div>
          <div className='flex items-start gap-2 my-4'>
            <img src={info} alt="" />
            <p className='text-[#48464E] font-normal text-base '>Representing 62.3% of the total workforce, males constitute the majority in the company.</p>
          </div>

          <div className='flex items-start gap-2 my-4'>
            <img src={info} alt="" />
            <p className='text-[#48464E] font-normal text-base '>Accounting for 37.4%, females form a significant proportion of the workforce.</p>
          </div>

          <div className='flex items-start gap-2 my-4'>
            <img src={info} alt="" />
            <p className='text-[#48464E] font-normal text-base '>Representing 0.3%, this category highlights the presence of employees who identify outside the traditional binary gender classifications.</p>
          </div>
          </section>

    </section>
  )
}

export default Employment