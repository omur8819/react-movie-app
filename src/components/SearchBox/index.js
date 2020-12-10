import { useRef, useContext } from 'react';
import { StyledSearchBox, StyledSearchInput, StyledButton, StyledSearchButton } from "./SearchBox.style"

import { MovieContext } from '../../App';

export const SearchBox = () => {
    const inputRef = useRef();
    const { setSearchKeyword } = useContext(MovieContext);

    return (
        <StyledSearchBox>
           <StyledSearchInput ref={inputRef} />
           <StyledSearchButton 
                onClick = { () => setSearchKeyword(inputRef?.current) }>
                Search
            </StyledSearchButton> 
        </StyledSearchBox>
    );
};
