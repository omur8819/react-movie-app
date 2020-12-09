import { StyledSearchBox, StyledSearchInput, StyledButton, StyledSearchButton } from "./SearchBox.style"

export const SearchBox = () => {
    return (
        <StyledSearchBox>
           <StyledSearchInput />
           <StyledSearchButton onClick = { () => {} }>Search</StyledSearchButton> 
        </StyledSearchBox>
    );
};
