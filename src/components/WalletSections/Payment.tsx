import todoList from "../../assets/icons/todoList.png";
import add from "../../assets/icons/add.png";
import eyes from "../../assets/icons/eyes.png";
import money from "../../assets/icons/money.png";
import money1 from "../../assets/icons/money1.png";
import money2 from "../../assets/icons/money2.png";
import bank from "../../assets/icons/bank.png";
import master from "../../assets/icons/master.png";
import stripe from "../../assets/icons/stripe.png";
import { ArrowUpRight, Copy } from "lucide-react";
import { ChevronRight } from "lucide-react";



const Payment = () => {
 


  return (
    <section>
      
      <div className="flex lg:flex-row flex-col w-full gap-6 mt-4">
        {/* Left Card: Overview */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border w-full border-gray-300">
          <div className='flex items-center justify-between'>
              <div className="flex items-center gap-2">
                <img src={todoList} alt="icon" />
                <h3 className="font-medium text-gray-900 text-base lg:text-lg">SBSC WALLET</h3>
              </div>
          <button className="flex items-center gap-1 text-gray-700 text-sm font-medium rounded-full border border-gray-300 shadow-sm px-3 py-1 cursor-pointer hover:bg-gray-100 transition duration-300">
                    Add Money
                    <img src={add} alt="icon" />
                    
                  </button> 
                  </div>
                  <div className="flex items-center gap-2 py-5  border-b border-b-gray-300 ">
                    <h2 className="text-[#3E1C96] font-black lg:text-[48px] text-2xl ">₦ 32,904,904.33</h2>
                    <img src={eyes} alt="icon" />
                  </div>

                <div className='flex flex-col gap-4 py-4'>
                  <div className="flex items-center gap-3">
                  <img src={money} alt="icon" />
                  <p className="text-[#6C6975] font-normal text-[16px] ">₦ 50,000,000 was added in the last 20 days</p>
                  </div>

                  <div className="flex items-center gap-3">
                  <img src={money1} alt="icon" />
                  <p className="text-[#6C6975] font-normal text-[16px] ">3 payroll initiated over the last 20 days at ₦ 10,240,943 each</p>
                  </div>

                  <div className="flex items-center gap-3">
                  <img src={money2} alt="icon" />
                  <p className="text-[#6C6975] font-normal text-[16px] ">payroll increased by <span className="text-[#1F9F7D]">+ 12.6%</span> vs last month</p>
                  </div>


                </div>

              <div className="flex p-4 mt-5 bg-[#F2F4F7] rounded-lg shadow-sm border border-[#EAECF0] items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={bank} alt="icon" />
                  <p className="text-[#6C6975] font-normal text-[16px] ">Providus Bank <span className="text-[#1F9F7D]">(0069000591) ~ SBSC UK LTD</span> vs last month</p>
                  </div>
                  <Copy className="cursor-pointer text-[#6C6975] text-base" size={14} />
              </div>


        </div>

        {/* Right Card: Department Distribution */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border lg:w-[70%] w-full border-gray-300">
        <div className="flex items-center gap-2">
                <img src={todoList} alt="icon" />
                <h3 className="font-medium text-gray-900 text-lg">Payment Method</h3>
              </div>



              <div className="flex p-4 my-5 bg-white rounded-lg shadow-sm shadow-[#1018280D] border border-[#D0D5DD] items-center justify-between">
                <div className="flex gap-3">
                  <img src={master} alt="icon" />
                  <div>
                  <p className="text-[#6C6975] font-bold text-[16px] ">Access Bank *7844</p>
                  <p className="text-[#908C9C] font-normal text-[14px] ">Expiry 06/2024</p>

                  </div>
                  </div>
                  <ChevronRight  className="cursor-pointer text-[#6C6975] text-base" size={14} />
              </div>

              <div className="flex p-4 my-5 bg-white rounded-lg shadow-sm shadow-[#1018280D] border border-[#D0D5DD] items-center justify-between">
                <div className="flex gap-3">
                  <img src={stripe} alt="icon" />
                  <div>
                  <p className="text-[#6C6975] font-bold text-[16px] ">Access Bank *7844</p>
                  <p className="text-[#908C9C] font-normal text-[14px] ">Expiry 06/2024</p>

                  </div>
                  </div>
                  <ChevronRight  className="cursor-pointer text-[#6C6975] text-base" size={14} />
              </div>

              <div className="flex p-4 my-5 bg-white rounded-lg shadow-sm shadow-[#1018280D] border border-[#D0D5DD] items-center justify-between">
                <div className="flex gap-3">
                  <img src={stripe} alt="icon" />
                  <div>
                  <p className="text-[#6C6975] font-bold text-[16px] ">Access Bank *7844</p>
                  <p className="text-[#908C9C] font-normal text-[14px] ">Expiry 06/2024</p>

                  </div>
                  </div>
                  <ChevronRight  className="cursor-pointer text-[#6C6975] text-base" size={14} />
              </div>

              <div className='flex items-center justify-between'>
              <div className="flex items-center gap-2">
                <img src={money} alt="icon" />
                <p className="font-normal text-[#908C9C] text-base">+ 3 other options</p>
              </div>
          <button className="flex items-center gap-1 text-[#344054] text-sm font-medium rounded-full border border-gray-300 shadow-sm px-3 py-1 cursor-pointer hover:bg-gray-100 transition duration-300">
                    Manage
                    <ArrowUpRight size={15} />
                    
                  </button> 
                  </div>
        </div>
          
        </div>
    </section>
  );
};

export default Payment;
