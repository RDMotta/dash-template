import { Search } from '@mui/icons-material';
import { IconButton, InputBase } from '@mui/material';
import React from 'react';

interface SearchBarProps {
    placeHolder: string;
    setSearchClick: () => void;
}

const SearchBar = ({ placeHolder , setSearchClick }: SearchBarProps) => {

    return (
        <>
            <InputBase placeholder={ placeHolder }/>
            <IconButton>
              <Search onClick={() => setSearchClick()}/>
            </IconButton> 
        </>
    );
}

export default SearchBar;