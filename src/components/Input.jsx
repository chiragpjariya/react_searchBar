import { TextField, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchInput , setSearchResults} from '../redux/searchSlice';


import { useMutation } from '@tanstack/react-query';
import { getRecipes } from '../api/api';
import {  useEffect } from 'react';

function Input() {

    const dispatch = useDispatch();
    const searchInput = useSelector(state => state.search.searchInput);

    const mutate = useMutation({
        mutationFn:(input) => getRecipes(input),
        onSuccess: (data) => {
           
            dispatch(setSearchResults(data));

        },
    });

    useEffect(() => {
        if (searchInput) {
            mutate.mutate(searchInput);
        }
    }, [searchInput]);


    // useEffect(() => {
    //     console.log('result data',searchResults);
    // }, [searchResults]);

    return (
        <Box sx={{ width: 500, margin: '20px auto' }}>
            <TextField
                label="Search"
                variant="outlined"
                fullWidth
                value={searchInput}
                onChange={(e) => dispatch(setSearchInput(e.target.value))}
            />
        </Box>
    );
}

export default Input;
