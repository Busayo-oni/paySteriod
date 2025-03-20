import { useState } from "react";
import todoList from "../../assets/icons/todoList.png";
import user from "../../assets/icons/user.png";
import profile from "../../assets/icons/profile.png";
import search from "../../assets/icons/no-file.png";
import { Calendar, CircleAlert } from "lucide-react";
import NoResult from "./NoResult";
import '@mantine/charts/styles.css';
import { LineChart } from '@mantine/charts';

const Employee = () => {
  const data = [
  {
    date: 'Jan 1',
    Employee: 700,
  },
  {
    date: 'Jan 2',
    Employee: 900,
  },
  {
    date: 'Jan 3', 
    Employee: 850,
  },
  {
    date: 'Jan 4',
    Employee: 820,
  },
  {
    date: 'Jan 5',
    Employee: 1000,
  },
  {
    date: 'Jan 6',
    Employee: 600,
  },
  {
    date: 'Jan 7',
    Employee: 700,
  },
  {
    date: 'Jan 8',
    Employee: 800,
  },
  {
    date: 'Jan 9',
    Employee: 900,
  },
  {
    date: 'Jan 10',
    Employee: 400,
  },
];

  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-white my-4 p-6 rounded-2xl shadow-sm border border-gray-300">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center items-start justify-between px-4 w-full">
        <div className="lg:text-left text-center">
          <h1 className="font-bold lg:text-2xl text-lg  text-gray-900">
            Employee Compositions
          </h1>
          <p className="font-normal text-base text-gray-500">
            A composition and distribution of your employees across specific
            parameters.
          </p>
        </div>
        <button className="flex items-center text-gray-700 text-sm font-medium rounded-full border border-gray-300 shadow-sm px-3 py-1 cursor-pointer hover:bg-gray-100 transition duration-300">
          Date:
          <Calendar size={14} className="ml-2" />
        </button>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 mt-4">
        {/* Left Card: Overview */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-300">
          <div className="flex items-center gap-2">
            <img src={user} alt="icon" />
            <h3 className="font-medium text-gray-900 text-lg">Overview</h3>
          </div>

          {/* Employee Count */}
          <div className="flex items-start gap-4 rounded-2xl bg-gray-100 border border-gray-300 shadow-sm px-4 py-3 my-4">
            <img src={profile} alt="" />
            <div>
              <p className="text-gray-700 text-base font-normal">
                Total Employees
              </p>
              <h2 className="text-indigo-600 text-3xl font-bold">0</h2>
            </div>
          </div>

          {/* Employee Details */}
          <div>
            <p className="flex items-center gap-2 text-gray-500 text-base font-normal">
              <CircleAlert size={14} /> Other Details
            </p>
            <div className="flex items-center justify-between my-3">
              <p className="text-gray-600 text-base">Active Employees:</p>
              <p className="text-green-600 text-base font-bold">0 personnel</p>
            </div>
            <div className="flex items-center justify-between my-3">
              <p className="text-gray-600 text-base">Inactive Employees:</p>
              <p className="text-red-500 text-base font-bold">0 personnel</p>
            </div>
            <div className="flex items-center justify-between my-3">
              <p className="text-gray-600 text-base">Paysteriod App:</p>
              <p className="text-orange-500 text-base font-bold">0 personnel</p>
            </div>
          </div>
        </div>

        {/* Right Card: Department Distribution */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-300">
          <div className="flex items-center gap-2">
            <img src={todoList} alt="icon" />
            <h3 className="font-medium text-gray-900 text-lg">
              Department Distribution
            </h3>
          </div>

          {!showMore ? (
            <NoResult
              img={search}
              main="No"
              sub="Data"
              desc="So sorry, no data to display here now. Create Department to get Started"
              btn="Create Department"
              onClick={() => setShowMore(true)}
            />
          ) : (
            <>
            <div className="flex items-center gap-3">
    <p className="[writing-mode:vertical-lr]">Number of Employee</p>
            <LineChart
      h={300}
      data={data}
      dataKey="date"
      series={[
        { name: 'Employee', color: 'orange.8' },
   
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

export default Employee;
