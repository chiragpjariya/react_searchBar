import React, { useEffect } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';

import { useDispatch, useSelector } from 'react-redux';
import { setAllData, setSearchInput } from '../redux/searchSlice';
import { useMutation } from '@tanstack/react-query';
import api from '../api/api';



function Lists() {

    const dispatch = useDispatch();

    const searchResults = useSelector(state => state.search.searchResults);
    const searchInput = useSelector(state => state.search.searchInput);
    const allData = useSelector(state => state.search.allData);

    const getAllResepiece = useMutation({
        mutationFn: () => api.get(),
        onSuccess: (data) => {
            console.log('data', data);
            dispatch(setAllData(data?.data?.recipes));
        },
    })

    useEffect(() => {
        getAllResepiece.mutate();
    }, [])

    if (!searchInput) {
        return <List sx={{ width: '100%', maxWidth: 500, height: 'inherit', bgcolor: 'background.paper', paddingLeft: 1 , overflowY:'scroll'}}>
            {allData?.map((value) => (

                <ListItem
                    key={value.name}
                    disableGutters
                    onClick={() => dispatch(setSearchInput(value?.name))}
                    sx={{ cursor: 'pointer', '&:hover': { bgcolor: 'grey.200' } }}
                >
                    <ListItemText primary={value?.name} />
                </ListItem>
            ))}
        </List>
    }


    return (
        <List sx={{ width: '100%', maxWidth: 500, height: 'inherit', bgcolor: 'background.paper', paddingLeft: 1 , overflowY:'scroll'}}>
            {searchResults.length > 0 &&searchResults?.map((value) => (

                <ListItem
                    key={value.name}
                    disableGutters
                    onClick={() => dispatch(setSearchInput(value?.name))}
                    sx={{ cursor: 'pointer', '&:hover': { bgcolor: 'grey.200' } }}
                >
                    <ListItemText primary={value?.name} />
                </ListItem>
            ))}
        </List>
    );
}

export default Lists