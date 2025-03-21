import viewmore from "../../assets/icons/viewmore.png";

const StatusPill = ({ status }: { status: string }) => {
  const getStatusStyles = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'partial completion':
        return 'bg-orange-100 text-[#B54708]';
      case 'fail':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyles(status)}`}>
      {status}
    </span>
  );
};

// Sample data array
const data = [
  {
    col1: 'Year-End Payroll',
    col2: 'Tunde Olawale', 
    col3: 'Tunde Olawale',
    col4: '₦ 11,500,000',
    status: 'Completed',
    date: "March 15, 2025",
    ident: 'Identifier: 94021'
  },
  {
    col1: 'Mid-Year Payroll',
    col2: 'Kola Adebayo',
    col3: 'Kola Adebayo', 
    col4: '₦ 13,000,000',
    date: "August 25, 2024",
    date2: "August 21, 2025",
    ident: 'Identifier: 91872',
    status: 'Partial Completion',
  },
  {
    col1: 'Year-End Payroll',
    col2: 'Oluwaseun Adebayo',
    col3: 'Sola Adewale',
    date: "February 14, 2025",
    date2: 'November 5, 2025',
    col4: '₦ 11,500,000', 
    status: 'Completed',
    ident: 'Identifier: 94021'

  },
  {
    col1: 'Mid-Year Payroll',
    col2: 'Femi Alabi',
    col3: 'Femi Jimoh',
    date: "July 15, 2024",
    date2: 'February 14, 2025',
    col4: '₦ 13,000,000', 
    status: 'Fail',
    ident: 'Identifier: 91872'

  },
  {
    col1: 'Year-End Payroll',
    col2: 'Chijioke Nwosu',
    col3: 'Chijioke Adewale',
    date: "November 30, 2025",
    date2: 'September 30, 2025',
    col4: '₦ 11,500,000', 
    status: 'Completed',
    ident: 'Identifier: 94021'

  },
  {
    col1: 'Mid-Year Payroll',
    col2: 'Tayo Ogunleye',
    col3: 'Ola Jimoh',
    date: "September 10, 2024",
    date2: 'December 1, 2025',
    col4: '₦ 13,000,000', 
    status: 'Fail',
    ident: 'Identifier: 91872'

  },
  {
    col1: 'Year-End Payroll',
    col2: 'Emeka Okafor',
    col3: 'Niyi Adewale',
    date: "January 1, 2025",
    date2: 'April 10, 2025',
    col4: '₦ 11,500,000', 
    status: 'Completed',
    ident: 'Identifier: 94021'

  },

]

const Table = () => {
  return (
   
<table className="w-full border-collapse">
  <thead>
    <tr className="bg-gray-50 text-[#667085] text-xs font-medium ">
      <th className="p-3 text-left ">Payroll Name</th>
      <th className="p-3 text-left ">Initiated by</th>
      <th className="p-3 text-left ">Initiated by</th>
      <th className="p-3 text-left ">Total Payroll Value</th>
      <th className="p-3 text-left ">Status</th>
      <th className="p-3 text-left text-gray-100 ">Header 6</th>
    </tr>
  </thead>
  <tbody>
    {data.map((item, index) => (
      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
        <td className="p-3 ">
        <div className="flex flex-col">
            <span className="text-[#101828] text-sm font-medium ">{item.col1}</span>
            <span className="text-[#667085] text-sm font-normal ">{item.ident}</span>
        </div>
            </td>

        <td className="p-3 ">
        <div className="flex flex-col">
            <span className="text-[#101828] text-sm font-medium ">{item.col2}</span>
            <span className="text-[#667085] text-sm font-normal ">{item.date}</span>
        </div>
        </td>

        <td className="p-3 ">
        <div className="flex flex-col">
            <span className="text-[#101828] text-sm font-medium ">{item.col3}</span>
            <span className="text-[#667085] text-sm font-normal ">{item.date || (item.date2)}</span>
        </div>
        </td>

        <td className="text-[#101828] text-sm font-medium p-3">{item.col4}
        </td>

        <td className="text-[#101828] text-sm font-medium p-3">
    <StatusPill status={item.status || 'Completed'} />
  
</td>
        <td className="p-3 ">
          <div className="flex items-center gap-2">
            <img 
              src={viewmore} 
              alt="expand" />
            
          </div>
        </td>
      </tr>
    ))}
  </tbody>
</table>
  )
}

export default Table
