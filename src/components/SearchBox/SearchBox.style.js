import styled from "styled-components";

export const StyledButton = styled.button`
    border-radius: 0.2rem;
    border-width: 3px;
`;

export const StyledSearchButton = styled(StyledButton)`
    cursor: pointer;
`;

export const StyledSearchInput = styled.input`
    color: red;
    border-radius: 0.3rem;
    margin-right: 0.5rem;
    border-width: 3px;
`;

export const StyledSearchBox = styled.div`
    margin: 2rem;

    ${StyledSearchInput} {
        color: gray;
    }
`;
