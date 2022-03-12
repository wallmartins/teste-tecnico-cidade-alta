import styled from "styled-components";

export const StyledLoading = styled.div`
  height: 2px;
  background: black;
  overflow: hidden;
  max-width: 25%;
  margin: 15rem auto;

  ::after {
    content: "";
    display: block;
    width: 75%;
    height: 2px;
    background: white;
    animation: loading 0.5s linear forwards infinite;
  }

  @keyframes loading {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(125%);
    }
  }
`;
