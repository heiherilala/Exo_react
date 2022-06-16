import React from 'react';
import { MDBDataTable } from 'mdbreact';
import DonnerTable from './DonnerTable';

const DatatablePage = (numberDonner) => {
  const donner = DonnerTable();
  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Position',
        field: 'position',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Office',
        field: 'office',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Age',
        field: 'age',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Start date',
        field: 'date',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Salary',
        field: 'salary',
        sort: 'asc',
        width: 100
      }
    ],
    rows: []
  };
  for (let i = 0; i < numberDonner; i++) {
    data.rows.push(DonnerTable());
  }
  
  return (
    <MDBDataTable
      striped
      bordered
      //hover
      small
      data={data}
    />
  );
}

export default DatatablePage;