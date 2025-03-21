import { useState } from 'react'
import { AppShell } from '@mantine/core';
import '@mantine/core/styles.css';
import Logo from '../assets/PaySteriodLogo.png'
import lock from '../assets/icons/lock.png'
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router'



interface Navbar {
    id: string;
    
    
}

const Navbar = () => {

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);


  const toggleDropdown = (menu: string) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };
  
  const menuItemClasses = 
    "flex flex-row items-center gap-3 cursor-pointer hover:bg-[#E16635] p-1 rounded-md transition-all duration-300 focus:bg-[#E16635] focus:outline-none";
    
  return (
    
    
    <AppShell navbar={{ width: 300, breakpoint: 'sm' }} withBorder={false}> 
    <AppShell.Navbar style={{backgroundColor: '#3E1C96'}}>
        <div>
        <div className='flex flex-row items-center space-x-3 px-4 py-5 '>
            <img src={Logo} alt="" />
            <h1 className='font-bold font-Satoshi text-[18px] text-white '>Paysteriod</h1>
        </div>
        <p className='px-4 text-white font-normal text-sm mb-2'>MAIN MENU</p>
        <div className='flex flex-col  w-[90%]  '>

        <ul className="flex flex-col ml-5 font-Inter text-[14px] w-[90%] text-white">
      <li className={menuItemClasses} tabIndex={0}>
        <img src={lock} alt="lock icon" /> <Link to="/home">Dashboard{" "}</Link>
      </li>

      <li 
        className={menuItemClasses} 
        onClick={() => toggleDropdown("employeeManagement")} 
        aria-expanded={openDropdown === "employeeManagement"}
        tabIndex={0}
      >
        <div className='flex flex-row w-full justify-between'>
        <div className="flex flex-row items-center gap-3">
          <img src={lock} alt="lock icon" /> Employee Management
        </div>
        <ChevronDown />
        </div>
      </li>
      {openDropdown === "employeeManagement" && (
        <ul className="ml-8 text-white">
          <li className="p-1 hover:bg-[#2D1470] rounded-md">Add Employee</li>
          <li className="p-1 hover:bg-[#2D1470] rounded-md">View Employees</li>
        </ul>
      )}

      <li 
        className={menuItemClasses} 
        onClick={() => toggleDropdown("payrollManagement")} 
        aria-expanded={openDropdown === "payrollManagement"}
        tabIndex={0}
      >
        <div className='flex flex-row w-full justify-between'>
        <div className="flex flex-row items-center gap-3">
          <img src={lock} alt="lock icon" /> Payroll Management
        </div>
        <ChevronDown />
        </div>
      </li>
      {openDropdown === "payrollManagement" && (
        <ul className="ml-8 text-white">
          <li className="p-1 hover:bg-[#2D1470] rounded-md">Salary Report</li>
          <li className="p-1 hover:bg-[#2D1470] rounded-md">Deductions</li>
        </ul>
      )}

      <li className={menuItemClasses} tabIndex={0}>
        <img src={lock} alt="lock icon" /> <Link to="/wallet">Wallet Management{" "}</Link>
      </li>

      <li 
        className={menuItemClasses} 
        onClick={() => toggleDropdown("leaveManagement")} 
        aria-expanded={openDropdown === "leaveManagement"}
        tabIndex={0}
      >
        <div className='flex flex-row w-full justify-between'>
        <div className="flex flex-row items-center gap-3">
          <img src={lock} alt="lock icon" /> Leave Management
        </div>
        <ChevronDown />
        </div>
      </li>
      {openDropdown === "leaveManagement" && (
        <ul className="ml-8 text-white">
          <li className="p-1 hover:bg-[#2D1470] rounded-md">Request Leave</li>
          <li className="p-1 hover:bg-[#2D1470] rounded-md">Leave History</li>
        </ul>
      )}

      <li 
        className={menuItemClasses} 
        onClick={() => toggleDropdown("actionApproval")} 
        aria-expanded={openDropdown === "actionApproval"}
        tabIndex={0}
      >
        <div className='flex flex-row w-full justify-between'>
        <div className="flex flex-row items-center gap-3">
          <img src={lock} alt="lock icon" /> Action Approval
        </div>
        <ChevronDown />
        </div>
      </li>
      {openDropdown === "actionApproval" && (
        <ul className="ml-8 text-white">
          <li className="p-1 hover:bg-[#2D1470] rounded-md">Pending Actions</li>
          <li className="p-1 hover:bg-[#2D1470] rounded-md">Approved Actions</li>
        </ul>
      )}

      <li className={menuItemClasses} tabIndex={0}>
        <img src={lock} alt="lock icon" /> Report
      </li>
    </ul>
    </div>

    <p className='px-4 pt-7 text-white font-normal text-sm mb-2'>MAIN MENU</p>
    <div className='flex flex-col  w-[90%]  '>
            
            <ul className='flex flex-col ml-5  font-Inter text-[14px] w-[90%] text-white font-'>
            <li className={menuItemClasses} tabIndex={0}>
        <img src={lock} alt="lock icon" /> User Management
      </li>
      <li className={menuItemClasses} tabIndex={0}>
        <img src={lock} alt="lock icon" /> My Subscription
      </li>
      <li className={menuItemClasses} tabIndex={0}>
        <img src={lock} alt="lock icon" /> Audit Trail
      </li>
      <li className={menuItemClasses} tabIndex={0}>
        <img src={lock} alt="lock icon" /> Settings
      </li>
      <li className={menuItemClasses} tabIndex={0}>
        <img src={lock} alt="lock icon" /> Support Center
      </li>
      <li className={menuItemClasses} tabIndex={0}>
        <img src={lock} alt="lock icon" /> Logout
      </li>

            </ul>
        </div>

        </div>
      </AppShell.Navbar>
    </AppShell>
  )
}

export default Navbar