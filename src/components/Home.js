import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 100,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'description',
    headerName: 'Issue Description',
    width: 300,
    headerAlign: 'center',
    align: 'left',
    flex: 1,
  },
  {
    field: 'location',
    headerName: 'Location',
    width: 150,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'type',
    headerName: 'Water or Sanitation',
    width: 200,
    headerAlign: 'center',
    align: 'center',
  },
];

function HomePage() {
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const jsonData = [
      { id: 1, description: 'Broken pipe', location: 'Street A', status: 'Pending', type: 'Water' },
      { id: 2, description: 'Overflowing sewage', location: 'Street B', status: 'In Progress', type: 'Sanitation' },
      { id: 3, description: 'Water contamination', location: 'Street C', status: 'Completed', type: 'Water' },
    ];
    setRows(jsonData);
  }, []);

  const handleRowClick = (id) => {
    console.log("Redirecting to individual page with ID:", id);
    navigate(`/individual/${id}`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ height: 400, width: '80%', maxWidth: '1000px' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          onRowClick={(rowData) => handleRowClick(rowData.id)}
          getCellClassName={(params) => {
            if (params.field === 'status') {
              return params.value === 'Pending' ? 'status-pending'
                : params.value === 'In Progress' ? 'status-inprogress'
                : 'status-complete';
            } else if (params.field === 'type') {
              return params.value === 'Water' ? 'type-water'
                : 'type-sanitation';
            }
            return '';
          }}
          sx={{
            '& .status-pending': {
              backgroundColor: '#ffcccc', // Light red for pending
            },
            '& .status-inprogress': {
              backgroundColor: '#ffff99', // Light yellow for in progress
            },
            '& .status-complete': {
              backgroundColor: '#ccffcc', // Light green for completed
            },
            '& .type-water': {
              backgroundColor: '#b3d9ff', // Light blue for water
            },
            '& .type-sanitation': {
              backgroundColor: '#ffcc99', // Light orange for sanitation
            },
            '& .MuiDataGrid-cell': {
              fontSize: '1.1rem',
            },
            '& .MuiDataGrid-columnHeaders': {
              fontSize: '1.2rem',
              backgroundColor: '#f5f5f5',
            },
            '& .MuiDataGrid-row': {
              height: 70,
            },
          }}
        />
      </div>
    </div>
  );
}

export default HomePage;
