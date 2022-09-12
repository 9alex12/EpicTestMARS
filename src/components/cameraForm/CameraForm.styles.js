import styled from "@emotion/styled";

export const ContainerCss = styled.div`
    height: 600px;
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    & button{
        width: 30%;
        margin: 0 auto;
    }

    & .buttonContainer {
        display: flex;
    }
`;