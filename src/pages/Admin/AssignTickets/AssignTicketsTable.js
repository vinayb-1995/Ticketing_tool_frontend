import Headings from "../../../components/Heading/Headings";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AssignTicketsTable = () => {
  const navigate = useNavigate();

  const allTicketsData = useSelector((state) => state.alltickets);
  console.log("allTicketsData in table>>", allTicketsData);
  // console.log("allTicketsData name",allTicketsData.allTicketsData[0]?.customerName)
  // Define columns
  const handelNavigate = (id) => {
    navigate(`/ticketmanger/:${id}`);
  };
  const columns = [
    {
      name: "Ticket ID",
      selector: (row) => (
        <div>
          <p
            className="mb-0 fw-medium"
            onClick={() => handelNavigate(row?.uniqueticketID)}
          >
            {row?.uniqueticketID}
          </p>
        </div>
      ),

      //sortable: true,
    },
    {
      name: "Customers ID/Name",
      selector: (row) => (
        <>
          <p className="mb-0 fw-medium">{row?.customerID}</p>
          <p className="mb-0">/{row?.customerName}</p>
        </>
      ),
      //selector: (row) => row?.customer_Name,
      //sortable: true,
    },
    {
      name: "status",
      selector: (row) => row?.status,
      width: "100px",
      //   sortable: true,
    },
    {
      name: "Discription",
      selector: (row) => row?.description,
      //sortable: true,
    },
    {
      name: "date",
      selector: (row) => row?.updatedAt,
      //sortable: true,
    },
  ];
  return (
    <div className="mt-4 container createagent">
      <Headings navigtepath="/adminhome" headingname=" All tickets" />
      <div className="data-table-outer-layer">
        <DataTable
          //title="Arnold Schwarzenegger Movies"
          columns={columns}
          // data={data}
          data={allTicketsData?.allTicketsData}
          //   pagination
        />
      </div>
    </div>
  );
};
export default AssignTicketsTable;
