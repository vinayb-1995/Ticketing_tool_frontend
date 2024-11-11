import { useSelector } from "react-redux";
import Headings from "../../../components/Heading/Headings";
import SecondaryHeader from "../../../components/Heading/SecondaryHeader";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";

const AllAgents = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token); // Access the token
  const [getAllgents, setAllagents] = useState();
  const itAgents = getAllgents?.filter(agent => agent?.department === "IT");
  const sapAgents = getAllgents?.filter(agent => agent?.department === "SAP");
  //   console.log("ALL AGENTS DATA", getAllgents);
  const handelNavigate = (id) => [navigate(`/agentbyidadmin/:${id}`)];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/admin/allagentsdata`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch itid"); // Handle HTTP errors
        }
        const data = await response.json(); // Parse the JSON response
        setAllagents(data);
      } catch (err) {
        console.error(err.message); // Set error in case of a failure
      }
    };
    fetchData();
  }, [token]);
  /* table data */
  const columns = [
    {
      name: "Agent ID",
      selector: (row) => (
        <div>
          <p
            className="mb-0 fw-medium"
            onClick={() => handelNavigate(row?.user_unique_ID)}
          >
            {row?.user_unique_ID}
          </p>
        </div>
      ),

      //sortable: true,
    },
    {
      name: "Agent Name/Mail ID",
      selector: (row) => (
        <>
          <p className="mb-0 fw-medium">{row?.fullname}</p>
          <p className="mb-0">/{row?.email}</p>
        </>
      ),
      //selector: (row) => row?.customer_Name,
      //sortable: true,
    },
    // {
    //   name: "status",
    //   selector: (row) => row?.status,
    //   width: "100px",
    //   //   sortable: true,
    // },
    {
      name: "Department",
      selector: (row) => (
        <div>
          <p>{row?.department}</p>
        </div>
      ),
      //sortable: true,
    },
    {
      name: "group",
      selector: (row) => row?.group,
      //sortable: true,
    },
  ];
  return (
    <>
      <div className="mt-4 container createagent">
        <Headings navigtepath="/adminhome" headingname="All Agents Table" />
        <div className="pt-2 pb-2">
          <SecondaryHeader header="Tabel IT Agents" />
          <div className="data-table-outer-layer mt-2">
            <DataTable
              //title="Arnold Schwarzenegger Movies"
              columns={columns}
              // data={data}
              data={itAgents}
              //   pagination
            />
          </div>
        </div>

        <div className="pt-2">
          <SecondaryHeader header="Tabel SAP Agents" />
          <div className="data-table-outer-layer mt-2">
                <DataTable
              //title="Arnold Schwarzenegger Movies"
              columns={columns}
              // data={data}
              data={sapAgents}
              //   pagination
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default AllAgents;
