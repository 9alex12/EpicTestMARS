import React, { useEffect, useState } from 'react';
import { TextField, Button } from "@material-ui/core";
import Alert from '@mui/material/Alert';
import DynamicTable from '../dynamicTable';
import { Container, WrapperTable } from './ListWithSearch.styles';


const ListWithSearch = ({ data, columns, filters, onEdit, onDelete, onAdd }) => {

    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        setFilteredData(data)
    }, [data])

    const handleChange = (e) => {
        const searchValue = e.target.value
        const filter = searchValue.length ?
            data.filter((row) =>
                filters.find(key => row[key].toLowerCase().includes(searchValue.toLowerCase()))
            ) : data
        setFilteredData(filter)
    }

    return (
        <>
            <Container>
                <TextField label="Search" variant="standard" type="search" onChange={handleChange} />
                <Button variant="contained" color="primary" onClick={onAdd}>Add</Button>
            </Container>
            <WrapperTable>
                {
                    data.length ?
                        (filteredData.length
                            ? <DynamicTable
                                data={filteredData}
                                columns={columns}
                                onEdit={onEdit}
                                onDelete={onDelete}
                            /> : <Alert variant="outlined" severity="info">
                                Nothing found with your search.
                            </Alert>) :
                        <Alert variant="outlined" severity="info">
                            Empty, you can create one in the <b>ADD</b> button.
                        </Alert>
                }
            </WrapperTable>
        </>
    )
}

export default ListWithSearch;