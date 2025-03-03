import React, { useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
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
            dispatch(setAllData(data?.data?.recipes));
        },
    });

    useEffect(() => {
        getAllResepiece.mutate();
    }, []);

    const listStyles = {
        width: '100%',
        maxWidth: { xs: '90%', sm: 500 },
        maxHeight: { xs: '50vh', sm: 'inherit' },
        height: 'inherit',
        bgcolor: 'background.paper',
        paddingLeft: 1,
        overflowY: 'auto',
    };

    const listItemStyles = {
        cursor: 'pointer',
        padding: '8px',
        transition: 'background-color 0.3s ease',
        '&:hover': { bgcolor: 'grey.200' },
    };

    if (!searchInput) {
        return (
            <List sx={listStyles}>
                {allData?.map((value) => (
                    <ListItem
                        key={value.name}
                        disableGutters
                        onClick={() => dispatch(setSearchInput(value?.name))}
                        sx={listItemStyles}
                    >
                        <ListItemText primary={value?.name} />
                    </ListItem>
                ))}
            </List>
        );
    }

    return (
        <List sx={listStyles}>
            {searchResults.length > 0 &&
                searchResults?.map((value) => (
                    <ListItem
                        key={value.name}
                        disableGutters
                        onClick={() => dispatch(setSearchInput(value?.name))}
                        sx={listItemStyles}
                    >
                        <ListItemText primary={value?.name} />
                    </ListItem>
                ))}
        </List>
    );
}

export default Lists;
