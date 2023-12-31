import styled from "styled-components";

export const SubHeader = styled.h2`
    margin: 0;
    font-size: 30px;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.textprimary};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 18px;
        letter-spacing: 0.9px;
    }
`;