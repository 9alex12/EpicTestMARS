import React from 'react';
import {
    Paper,
    Table,
    TableHead,
    TableContainer,
    TableRow,
    TableCell,
    TableBody,
    Button,
    ButtonGroup,
} from "@material-ui/core";
import { Delete as DeleteIcon, Edit as EditIcon } from '@material-ui/icons';

const DynamicTable = ({ data, columns, onEdit, onDelete }) => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="Data table">
                <TableHead>
                    <TableRow>
                        {columns.map(({ title }) => (
                            <TableCell key={title}>{title}</TableCell>
                        ))}
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id}>
                            {columns.map(({ key }) => (
                                <TableCell key={key} component="th" scope="row">
                                    {row[key]}
                                </TableCell>
                            ))}

                            <TableCell component="th" scope="row">
                                <ButtonGroup
                                    color="primary"
                                    aria-label="outlined primary button group"
                                >
                                    <Button onClick={() => onEdit(row)}>
                                        <EditIcon />
                                    </Button>
                                    <Button
                                        color="secondary"
                                        onClick={() => onDelete(row)}
                                    >
                                        <DeleteIcon />
                                    </Button>
                                </ButtonGroup>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default DynamicTable;