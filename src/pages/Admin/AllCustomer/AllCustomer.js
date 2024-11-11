import Headings from "../../../components/Heading/Headings"

const AllCustomer=()=>{
    return(
        <>
       <div className="mt-4 container createagent">
      <Headings navigtepath="/adminhome" headingname=" All tickets" />
      <div className="data-table-outer-layer">
        {/* <DataTable
          //title="Arnold Schwarzenegger Movies"
          columns={columns}
          // data={data}
          data={allTicketsData?.allTicketsData}
          //   pagination
        /> */}
      </div>
    </div>
        </>
    )
}
export default AllCustomer