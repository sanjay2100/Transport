import React from "react";
import './Location.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';




const Location = ({State}) => {
    const sample = [
        ['Saran Associates', 'Thambaram,Chennai', 'Chennai', 24, 4.0],
        ['Saran Associates',  'Thambaram,Chennai', 'Chennai', 37, 4.3],
        ['Saran Associates',  'Thambaram,Chennai', 'Chennai', 24, 6.0],
        ['Saran Associates',  'Thambaram,Chennai', 'Chennai', 67, 4.3],
        ['Saran Associates',  'Thambaram,Chennai', 'Chennai', 49, 3.9],
    ];

    function createData(SNO, distributer, Address, City, Km, protein) {
        return { SNO, distributer, Address, City, Km, protein };
    }

    const columns = [
        {
            width: 20,
            label: 'S.no',
            dataKey: 'SNO',
        },
        {
            width: 180,
            label: 'Disrtibuter Name',
            dataKey: 'distributer',
        },
        {
            width: 120,
            label: 'Address',
            dataKey: 'Address',
        },
        {
            width: 120,
            label: 'City',
            dataKey: 'City',
        },
        {
            width: 120,
            label: 'Km Allocated',
            dataKey: 'Km',
            numeric: true,
        },
        {
            width: 120,
            label: 'Action',
            dataKey: 'Action',
            numeric: true,
        },
    ];

    const rows = Array.from({ length: sample.length }, (_, index) => {
        const randomSelection = sample[Math.floor(Math.random() * sample.length)];
        return createData(index, ...randomSelection);
    });

    const VirtuosoTableComponents = {
        Scroller: React.forwardRef((props, ref) => (
            <TableContainer component={Paper} {...props} ref={ref} />
        )),
        Table: (props) => (
            <Table {...props} sx={{ borderCollapse: 'collapse', tableLayout:'auto' }} />
        ),
        TableHead,
        TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
        TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
    };
    function fixedHeaderContent() {
        return (
            <TableRow>
                {columns.map((column) => (
                    <TableCell
                        key={column.dataKey}
                        variant="head"
                        align={column.numeric || false ? 'right' : 'left'}
                        style={{ width: column.width }}
                        sx={{
                            backgroundColor: '#ECF0F1',
                        }}
                    >
                        {column.label}
                    </TableCell>
                ))}
            </TableRow>
        );
    }

    function rowContent(_index, row) {
        return (
            <React.Fragment>
                {columns.map((column) => (
                    <TableCell
                        key={column.dataKey}
                        align={column.numeric || false ? 'right' : 'left'}
                    >
                        {row[column.dataKey]}
                    </TableCell>
                ))}
            </React.Fragment>
        );
    }

    if(State===2){
        return (
            <div className="LocationTable_outer_div">
                <div className="LocationTable_sec1">
                    <h4>Location Table</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="LocatiomTable_sec2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="9" stroke="#808B96" />
                        <path d="M12 15L12 9" stroke="#808B96" stroke-linecap="square" />
                        <path d="M15 12L9 12" stroke="#808B96" stroke-linecap="square" />
                    </svg>
                    <div className="Search_block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="11" cy="11" r="7" stroke="#33363F" stroke-width="2" />
                            <path d="M11 8C10.606 8 10.2159 8.0776 9.85195 8.22836C9.48797 8.37913 9.15726 8.6001 8.87868 8.87868C8.6001 9.15726 8.37913 9.48797 8.22836 9.85195C8.0776 10.2159 8 10.606 8 11" stroke="#33363F" stroke-width="2" stroke-linecap="round" />
                            <path d="M20 20L17 17" stroke="#33363F" stroke-width="2" stroke-linecap="round" />
                        </svg>
                        <input className="Srch_inpt_box" />
                    </div>
                </div>
                <div className="Location_Sec3">
                <Paper style={{ height: 400, width: '100%' }}>
                    <TableVirtuoso
                        data={rows}
                        components={VirtuosoTableComponents}
                        fixedHeaderContent={fixedHeaderContent}
                        itemContent={rowContent}
                    />
                </Paper>
                </div>
    
            </div>
        )
    }

    else return null

    
}

export default Location