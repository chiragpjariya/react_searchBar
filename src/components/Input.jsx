import { TextField, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchInput, setSearchResults } from '../redux/searchSlice';
import { useMutation } from '@tanstack/react-query';
import { getRecipes } from '../api/api';
import { useEffect } from 'react';

function Input() {
    const dispatch = useDispatch();
    const searchInput = useSelector(state => state.search.searchInput);

    const mutate = useMutation({
        mutationFn: (input) => getRecipes(input),
        onSuccess: (data) => {
            dispatch(setSearchResults(data));
        },
    });

    useEffect(() => {
        if (searchInput) {
            mutate.mutate(searchInput);
        }
    }, [searchInput]);

    return (
        <Box 
            sx={{
                width: { xs: '100%', sm: '90%', md: 500 },
                margin: '20px auto',
                paddingX: { xs: 2, sm: 0 }
            }}
        >
            <TextField
                label="Search"
                variant="outlined"
                fullWidth
                value={searchInput}
                onChange={(e) => dispatch(setSearchInput(e.target.value))}
                sx={{
                    '& .MuiInputBase-root': {
                        borderRadius: '8px',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'gray.300',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'gray.500',
                    },
                    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'red',
                    },
                }}
            />
        </Box>
    );
}

export default Input;
