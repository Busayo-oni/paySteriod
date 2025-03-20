import { useState } from "react";
import todoList from "../../assets/icons/todoList.png";
import bullet from "../../assets/icons/bullet.png";
import search from "../../assets/icons/no-search.png";
import { Progress } from "@mantine/core";
import { ArrowUpRight, ChevronRight, CircleCheck } from "lucide-react";
import NoResult from "./NoResult";

const Todo = () => {
  const [showMore, setShowMore] = useState(false);

  const items = [
    { id: 1, title: "Complete Company Profile", completed: true },
    { id: 2, title: "Complete Payment Integration for Payroll", completed: false },
    { id: 3, title: "Create and Manage Approval Workflow", completed: true },
    { id: 4, title: "Setup Paysteriod Wallet for Payroll Processing", completed: true },
  ];
  const items2 = [
    { id: 1, title: "Initiate Payroll Today !!", completed: false }, 

    { id: 2, title: "Add / Upload to Create new employee", completed: false },
    { id: 3, title: "Add a New Adminstrator", completed: false },
    { id: 4, title: "Add Money to Paysteriod Wallet", completed: false },
    { id: 5, title: "Another Quick action from Settings", completed: false },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {/* Left Section - To-do List */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#D0D5DD]">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={todoList} alt="icon" />
            <h3 className="font-medium text-[#2B2A2F] text-lg">Things to do</h3>
          </div>
          <h3 className="font-medium text-[#D92D20] underline text-lg cursor-pointer">
            Dismiss
          </h3>
        </div>

        {/* Progress Bar */}
        <div className="mt-5">
          <Progress color="orange" value={10} />
          <p className="text-[#908C9C] font-medium text-[13.7px]">
            Setup is 5% completed. Complete it to enjoy more benefits in Paysteriod!
          </p>
        </div>

        {/* To-Do List */}
        <ul className="mt-4 space-y-2">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex flex-row items-center justify-between gap-6 cursor-pointer bg-white px-2 py-4 rounded-sm border border-[#eaecf0] shadow-xs transition-all duration-300 hover:shadow-md focus:outline-none"
            >
              <div className="flex flex-row w-full justify-between">
                <div className="flex flex-row items-center gap-3">
                  <img src={bullet} alt="bullet" />
                  <span className={`text-md font-medium ${item.completed ? "text-[#3E1C96]" : "text-[#6C6975]"}`}>
                    {item.title}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {!item.completed && (
                    <ChevronRight
                      className="text-[#908C9C] cursor-pointer"
                      onClick={() => setShowMore(!showMore)}
                    />
                  )}
                  {item.completed && <CircleCheck className="text-[#12B76A]" />}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section - Quick Actions */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#D0D5DD]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={todoList} alt="icon" />
            <h3 className="font-medium text-[#2B2A2F] text-lg">Quick Action</h3>
          </div>
          <h3
            className="font-medium flex items-center text-[#6C6975] text-lg cursor-pointer"
            onClick={() => setShowMore(true)}
          >
            Manage Setup <ArrowUpRight />
          </h3>
        </div>

        {!showMore ? (
          <NoResult
            img={search}
            main="No Quick"
            sub="Action"
            desc="So sorry, you currently do not have any quick action setup available. Add a Quick Action option for a one-step process."
            btn="Add Quick Action"
            onClick={() => setShowMore(true)}
          />
        ) : (
          <ul className="mt-4 space-y-2">
          {items2.map((item) => (
            <li
              key={item.id}
              className="flex flex-row items-center justify-between gap-6 cursor-pointer bg-white px-2 py-4 rounded-sm border border-[#eaecf0] shadow-xs transition-all duration-300 hover:shadow-md focus:outline-none"
            >
              <div className="flex flex-row w-full justify-between">
                <div className="flex flex-row items-center gap-3">
                  <img src={bullet} alt="bullet" />
                  <span className={`text-md font-medium ${item.completed ? "text-[#3E1C96]" : "text-[#6C6975]"}`}>
                    {item.title}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {!item.completed && (
                    <ChevronRight
                      className="text-[#908C9C] cursor-pointer"
                      
                    />
                  )}
                  {item.completed && <CircleCheck className="text-[#12B76A]" />}
                </div>
              </div>
            </li>
          ))}
        </ul>
        )}
      </div>
    </div>
  );
};

export default Todo;
