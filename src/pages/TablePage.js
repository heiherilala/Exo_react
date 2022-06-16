import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatatablePage from '../components/DatatablePage';

const TablePage = () => {
    return (
        <>
         <h1 className="mt-4">Tables</h1>
        <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
            <li className="breadcrumb-item active">Tables</li>
        </ol>
        <div className="card mb-4">
            <div className="card-body">
                DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the &nbsp;
                <a target="_blank" href="https://datatables.net/">official DataTables documentation</a>
                .
            </div>
        </div>
        <div className="card mb-4">
            <div className="card-header">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-table" viewBox="0 0 16 16">
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"/>
                </svg>
                &nbsp; DataTable Example
            </div>
            <div className="margeDiv">
                {DatatablePage(600)}
            </div>
        </div>
        </>


    );
};

export default TablePage;