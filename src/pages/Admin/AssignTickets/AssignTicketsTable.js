import { Link } from "react-router-dom";
import Headings from "../../../components/Heading/Headings";
import DataTable from 'react-data-table-component'

const AssignTicketsTable = () => {
// Sample data
const data = [
    { id: 1, customer_Name: 'John Doe', status: 'resolved', date: '2024-10-01', visit: 'First' },
    { id: 2, customer_Name: 'Jane Smith', status: 'pending', date: '2024-10-03', visit: 'Second' },
    { id: 3, customer_Name: 'Michael Johnson', status: 'solved', date: '2024-10-05', visit: 'First' },
    { id: 4, customer_Name: 'Emily Davis', status: 'hold', date: '2024-10-06', visit: 'Third' },
    { id: 5, customer_Name: 'David Wilson', status: 'resolved', date: '2024-10-08', visit: 'First' },
    { id: 6, customer_Name: 'Sophia Martinez', status: 'pending', date: '2024-10-09', visit: 'Second' },
    { id: 7, customer_Name: 'James Brown', status: 'solved', date: '2024-10-10', visit: 'First' },
    { id: 8, customer_Name: 'Olivia Garcia', status: 'hold', date: '2024-10-11', visit: 'Third' },
    { id: 9, customer_Name: 'Liam White', status: 'resolved', date: '2024-10-12', visit: 'First' },
    { id: 10, customer_Name: 'Emma Harris', status: 'pending', date: '2024-10-13', visit: 'Second' }
  ];
  
  
  // Define columns
  const columns = [
    {
      name: 'Customers',
      selector: row => row.customer_Name,
    //   sortable: true,
    },
    {
      name: 'status',
      selector: row => row.status,
    //   sortable: true,
    },
    {
      name: 'date',
      selector: row => row.date,
    //   sortable: true,
    },
    {
      name: 'View/Action',
      selector: row => (<p className="m-0"><Link to="/ticketmanger">view/action</Link></p>),
    //   sortable: true,
    },
  ]
  return (
    <div className="mt-4 container createagent">
      <Headings navigtepath="/adminhome" headingname=" Number of tickets raised" />
     <div className="data-table-outer-layer">
      <DataTable
    //title="Arnold Schwarzenegger Movies"
      columns={columns}
      data={data}
    //   pagination
    />
    </div>
    </div>
  );
};
export default AssignTicketsTable;
