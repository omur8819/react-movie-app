import { useRef } from 'react';
import { StyledSearchBox, StyledSearchInput, StyledButton, StyledSearchButton } from "./SearchBox.style"

export const SearchBox = ({ setSearchKeyword }) => {
    const inputRef = useRef();

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
