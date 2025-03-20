import { useState } from 'react'
import todoList from "../../assets/icons/todoList.png";
import NoResult from './NoResult';
import search from "../../assets/icons/no-file.png";
import { BarChart } from '@mantine/charts'



const Expense = () => {
      const [showMore, setShowMore] = useState(false);

      const data = [
        { month: 'Jan', Payroll: 800, },
        { month: 'Feb', Payroll: 950, },
        { month: 'Sales', Payroll: 400, },
        { month: 'Mangt', Payroll: 700, },
        { month: 'Product', Payroll: 800, },
        { month: 'Jun', Payroll: 750,  },
        { month: 'Market', Payroll: 850,  },
        { month: 'Aug', Payroll: 950, },
        { month: 'Fin', Payroll: 700, },
        { month: 'Sals', Payroll: 600,},
        { month: 'Nov', Payroll: 800,},
        { month: 'Comp', Payroll: 900,  },      ];

  return (
    <section className="bg-white my-4 p-6 rounded-2xl shadow-sm border border-gray-300">
        <div className="flex items-center mb-5 gap-2">
            <img src={todoList} alt="icon" />
            <h3 className="font-medium text-gray-900 text-lg">
            Payroll Expense Distribution
            </h3>
          </div>
          <div className="flex items-center justify-between lg:flex-row flex-col gap-10  bg-white my-4 p-2 lg:p-6 rounded-2xl shadow-sm border border-gray-300">
            <div className='lg:border-r-[1px] lg:border-r-[#EAECF0] lg:w-[70%] w-full border-b-[1px] border-b-[#EAECF0] lg:border-b-[0px] '>
                <p className="text-[#908C9C] text-base font-normal ">Total Payroll Expense</p>
                
          <h2 className="text-[#3E1C96] text-[32px] font-bold ">₦ 0</h2>
          <p className="text-[#908C9C] text-base font-normal "><span className="text-[#1F9F7D] text-base font-normal ">0 %</span>increase vs last Year </p>
            </div>

            <div className='lg:border-r-[1px] lg:border-r-[#EAECF0] border-b-[1px] border-b-[#EAECF0] lg:border-b-[0px]  lg:w-[70%] w-full'>
                <p className="text-[#908C9C] text-base font-normal ">Highest Payroll Month</p>
                
          <h2 className="text-[#3E1C96] text-[32px] font-bold ">₦ 0</h2>
          <p className="text-[#908C9C] text-base font-normal ">No Data </p>
            </div>

            <div className='lg:w-[70%] w-full '>
                <p className="text-[#908C9C] text-base font-normal "> Highest Payrolled Department</p>
                
          <h2 className="text-[#3E1C96] text-[32px] font-bold ">₦ 0</h2>
          <p className="text-[#908C9C] text-base font-normal ">No Data </p>
            </div>


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
            <BarChart
            
      h={300}
      data={data}
      dataKey="month"
      series={[{ name: 'Payroll', color: '#D8D2EA' }]}
    />
    </div>
    <p className="text-center">Month </p>
            </>
          )}

    </section>
  )
}

export default Expense