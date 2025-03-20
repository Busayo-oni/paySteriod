import React from 'react'
import Todo from './sections/TodoList'
import Employee from './sections/Employee'
import Employment from './sections/Employment'
import Request from './sections/Request'
import Payroll from './sections/Payroll'
import Expense from './sections/Expense'


const Main = () => {
  return (
    <section className='p-5 bg-[#F7F6FB]'>
        <Todo />
        <Employee />
        <Employment />
        <Request />
        <Payroll />
        <Expense />

      

    </section>
  )
}

export default Main