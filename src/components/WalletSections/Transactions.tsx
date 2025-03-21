import { ChevronDown } from "lucide-react"
import port from "../../assets/icons/export.png";
import Table from "./Table";



const Transactions = () => {
  return (
    <div className="bg-white p-6 mt-8 rounded-2xl shadow-sm border border-gray-300">
        <div className="flex items-center lg:flex-row flex-col border-b border-b-gray-300 justify-between pb-3 w-full">
        <div>
          <h1 className="font-bold text-2xl text-gray-900">
          <span className="text-[#E16635] underline  ">Payroll</span>
            Transactions
          </h1>
          <p className="font-normal text-base text-gray-500">
          A list of all transactions of payroll initiated on system.
          </p>
        </div>
        <div className="flex space-x-5">
        <button className="flex items-center text-gray-700 gap-2 text-sm font-medium rounded-full border border-gray-300 shadow-sm px-3 py-1 cursor-pointer hover:bg-gray-100 transition duration-300">
          Export
          <img src={port} alt="" />
        </button>

        <button className="flex items-center text-gray-700 text-sm font-medium rounded-full border border-gray-300 shadow-sm px-3 py-1 cursor-pointer hover:bg-gray-100 transition duration-300">
           Date: <span className="text-[#E16635] text-sm font-base  "> 2024</span>
          <ChevronDown size={14} className="ml-2" />
        </button>
        </div>
      </div>

      <div className="flex items-center justify-between lg:flex-row flex-col gap-10 my-4  ">
            <div className='lg:border-r-[1px] lg:border-r-[#EAECF0] lg:w-[70%] w-full border-b-[1px] border-b-[#EAECF0] lg:border-b-[0px] '>
                <p className="text-[#908C9C] text-base font-normal ">Total Payroll Expense</p>
                
          <h2 className="text-[#3E1C96] text-[32px] font-bold ">₦ 61,894,004.22</h2>
          <p className="text-[#908C9C] text-base font-normal "><span className="text-[#1F9F7D] text-base font-normal ">+ 9.3% </span>increase vs last Year </p>
            </div>

            <div className='lg:border-r-[1px] lg:border-r-[#EAECF0] border-b-[1px] border-b-[#EAECF0] lg:border-b-[0px]  lg:w-[70%] w-full'>
                <p className="text-[#908C9C] text-base font-normal ">Highest Payroll Month</p>
                
          <h2 className="text-[#3E1C96] text-[32px] font-bold ">₦ 5,003,904</h2>
          <p className="text-[#908C9C] text-base font-normal ">April, 2024 </p>
            </div>

            <div className='lg:w-[80%] w-full '>
                <p className="text-[#908C9C] text-base font-normal "> Highest Payrolled Department</p>
                
          <h2 className="text-[#3E1C96] text-[32px] font-bold ">₦ 15,904,222</h2>
          <p className="text-[#908C9C] text-base font-normal ">Sales Department. + 38% increase vs Other </p>
            </div>


          </div>


          <Table />
          <div className="flex items-center justify-between">
            <p className="text-[#344054] font-medium text-sm ">Page 1 of 10</p>
            <div>
              <button className="bg-white border border-[#D0D5DD] shadow-xs shadow-[#1018280D] hover:shadow-md rounded-md p-[9px_17px] mr-3 ">Previous</button>
              <button className="bg-white border border-[#D0D5DD] shadow-xs shadow-[#1018280D] hover:shadow-md rounded-md p-[9px_17px] ">Next</button>
            </div>
          </div>

    </div>
  )
}

export default Transactions