import styled from "styled-components";

const StyledNotFound = styled.div`
  width: 100%;
  max-width: 750px;
  margin: auto;
  padding: 50px;
  text-align: center;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 700px;
`;

const NotFoundPage = () => {
  return (
    <StyledNotFound>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </StyledNotFound>
  );
};

export default NotFoundPage;
