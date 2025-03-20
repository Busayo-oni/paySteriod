import React, { useState } from "react";
import todoList from "../../assets/icons/todoList.png";
import user from "../../assets/icons/user.png";
import profile from "../../assets/icons/profile.png";
import search from "../../assets/icons/no-file.png";
import { Calendar, ChevronDown, CircleAlert } from "lucide-react";
import NoResult from "./noResult";
import '@mantine/charts/styles.css';
import { LineChart, PieChart } from '@mantine/charts';

const Payroll = () => {
  const data = [
    {
      date: 'Eng',
      Processed: 2890,
      Pending: 2338,
      Error: 2052,
    },
    {
      date: 'Sales',
      Processed: 2756,
      Pending: 2103,
      Error: 1702,
    },
    {
      date: 'product',
      Processed: 3322,
      Pending: 2986,
      Error: 1821,
    },
    {
      date: 'Market',
      Processed: 3470,
      Pending: 3108,
      Error: 2809,
    },
    {
      date: 'Fin',
      Processed: 3129,
      Pending: 2726,
      Error: 2290,
    },
    {
      date: 'Comp',
      Processed: 3250,
      Pending: 2850,
      Error: 2100,
    },
    {
      date: 'Mar 28',
      Processed: 3400,
      Pending: 3000,
      Error: 2400,
    },
    {
      date: 'Mar 29',
      Processed: 3600,
      Pending: 3200,
      Error: 2600,
    },
    {
      date: 'Mar 30',
      Processed: 3800,
      Pending: 3400,
      Error: 2800,
    },
    {
      date: 'Mar 31',
      Processed: 4000,
      Pending: 3600,
      Error: 3000,
    },
    {
      date: 'Apr 1',
      Processed: 4200,
      Pending: 3800,
      Error: 3200,
    },
    {
      date: 'Apr 2',
      Processed: 4400,
      Pending: 4000,
      Error: 3400,
    },
    {
      date: 'Apr 3',
      Processed: 4600,
      Pending: 4200,
      Error: 3600,
    },
    {
      date: 'Apr 4',
      Processed: 4800,
      Pending: 4400,
      Error: 3800,
    },
    {
      date: 'Apr 5',
      Processed: 5000,
      Pending: 4600,
      Error: 4000,
    },
  ];

const data2 = [
  { name: 'Proceed', value: 200, color: '#1F9F7D' },
  { name: 'Pending', value: 250, color: '#FAD61A' },
  { name: 'Error', value: 50, color: '#F04438' },
];

  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-white my-4 p-6 rounded-2xl shadow-sm border border-gray-300">
      {/* Header */}
      <div className="flex items-center lg:flex-row flex-col justify-between px-4 w-full">
        <div>
          <h1 className="font-bold text-2xl text-gray-900">
            Payroll Processing
          </h1>
          <p className="font-normal text-base text-gray-500">
          An insight into payroll process across the organisation
          </p>
        </div>
        <div className="flex space-x-5">
        <button className="flex items-center text-gray-700 text-sm font-medium rounded-full border border-gray-300 shadow-sm px-3 py-1 cursor-pointer hover:bg-gray-100 transition duration-300">
          Department: <span className="text-[#E16635] text-sm font-base lg:block hidden ">Select Option</span>
          <ChevronDown className="ml-2" />
        </button>

        <button className="flex items-center text-gray-700 text-sm font-medium rounded-full border border-gray-300 shadow-sm px-3 py-1 cursor-pointer hover:bg-gray-100 transition duration-300">
          Date:
          <Calendar size={14} className="ml-2" />
        </button>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 mt-4">
        {/* Left Card: Overview */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-300">
          <div className="flex items-center gap-2">
            <img src={todoList} alt="icon" />
            <h3 className="font-medium text-gray-900 text-lg">Overview</h3>
          </div>

          

          {/* Employee Details */}
          <div className="flex items-center lg:h-[90%] justify-between mt-7 gap-2">
            <section className='flex flex-col h-full justify-between gap-10'>
          <div>

            <div className='flex items-center gap-2'>
                <div className='h-[14px] bg-[#1F9F7D] border-[2px] border-[#1F9F7D] '></div>
                <p className='text-sm text-[#908C9C] font-normal'>Processed</p>
            </div>
            <p className='font-md text-2xl'>0</p>
          </div>

          <div>
            <div className='flex items-center gap-2'>
                <div className='h-[14px] bg-[#FAD61A] border-[2px] border-[#FAD61A] '></div>
                <p className='text-sm text-[#908C9C] font-normal'>Pending</p>
            </div>
            <p className='font-md text-2xl'>0</p>
          </div>

          <div>
            <div className='flex items-center gap-2'>
                <div className='h-[14px] bg-[#F04438] border-[2px] border-[#F04438] '></div>
                <p className='text-sm text-[#908C9C] font-normal'>Error</p>
            </div>
            <p className='font-md text-2xl'>0</p>
          </div>

          

            </section>
            <PieChart withLabelsLine labelsPosition="inside" labelsType="percent" withLabels data={data2} />
            </div>
            
            </div>

        {/* Right Card: Department Distribution */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-300">
          <div className="flex items-center gap-2">
            <img src={todoList} alt="icon" />
            <h3 className="font-medium text-gray-900 text-lg">
              Payroll Distribution
            </h3>
            
          </div>
          <div>
          <p className="text-[#2B2A2F] text-base font-bold mt-6 ">Highest Grossing Department ~ <span className="text-[#E16635] text-base font-bold ">Select Option</span></p>
          <h2 className="text-[#3E1C96] text-[32px] font-bold ">₦ 0</h2>
          </div>

          {!showMore ? (
            <NoResult
              img={search}
              main="No"
              sub="Data"
              desc="So sorry, no data to display here now. Setup payroll to get Started"
              btn="Setup Payroll"
              onClick={() => setShowMore(true)}
            />
          ) : (
            <>
            <div className="flex items-center gap-3">
    <p className="[writing-mode:vertical-lr]">Amount (NGN)</p>
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      series={[
        { name: 'Processed', color: '#1F9F7D' },
        { name: 'Error', color: '#F04438' },
        { name: 'Pending', color: '#FAD61A' },
      ]}
      curveType="natural"
    />
    </div>
    <p className="text-center">Department </p>
    </>

          )}
        </div>
      </div>
    </section>
  );
};

export default Payroll;
