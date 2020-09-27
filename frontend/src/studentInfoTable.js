import React, { useState, useEffect } from "react"; 

// import "./styles.css"; 
import MaterialTable from "material-table"; 
import {getApi} from "./Api";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { forwardRef } from 'react';
export default function StudentTable() { 

   const [tdata, setData] = useState([]);

   useEffect(() => {
	getApi('/users').then(res => setData(res));
}, []);

const tableIcons = {
	Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
	Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
	Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
	Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
	DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
	Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
	Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
	Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
	FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
	LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
	NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
	PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
	ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
	Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
	SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
	ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
	ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

const handleRowUpdate = (newData, oldData, resolve) => {
	// //validation
	// .....
	// if(errorList.length < 1){
	//   api.patch("/users/"+newData.id, newData)
	// 	.then(res => {
	// 	  const dataUpdate = [...data];
	// 	  const index = oldData.tableData.id;
	// 	  dataUpdate[index] = newData;
	// 	  setData([...dataUpdate]);
	// 	  resolve()
	// 	  setIserror(false)
	// 	  setErrorMessages([])
	// 	})
	// 	.catch(error => {
	// 	  setErrorMessages(["Update failed! Server error"])
	// 	  setIserror(true)
	// 	  resolve()
	//   })
	// }else{
	//   setErrorMessages(errorList)
	//   setIserror(true)
	//   resolve()
	// }
  }

   return ( 
      <div className="App"> 
        {/* <h1>Student Information</h1>  */}
        <div style={{ maxWidth: "100%" }}>
          <MaterialTable 
            columns={[
            //   { 
            //     title: "Name", 
			// 	field: "",
			// 	render: rowData => 
			// 	<Avatar maxInitials={1} size={40} round={true} 
			// 	name={rowData === undefined ? " " : rowData.first_name} />
            //   },
              { 
                title: "Student ID",
				field: "studentId",
				editable: 'never'
              }, 
              { 
                title: "Skills", 
				field: "skills",
				editable: 'never'
                // type: "numeric"
			  },
			  {
				  title: "Topic",
				  field: "topic",
				  editable: 'never'
			  },
			  {
				  title: "Group No.",
				  field: "group"
			  },
			  {
				  title: "Role",
				  field: "role"
			  }
            ]}
			data={tdata}
			icons={tableIcons}
			title="Student Information" 
			editable={{
				onRowUpdate: (newData, oldData) =>
				  new Promise((resolve) => {
					handleRowUpdate(newData, oldData, resolve);
			  }),
			 
			  }}
          />
       </div> 
     </div> 
   ); 
}