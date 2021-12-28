import styled from "styled-components";

export const StickyStyle = styled.div`
  position: sticky;
  top: 0;
  background: white;
  height: 100px;
  z-index: 1; /* this is optional and should be different for every project */
`;

export const Wrapper = styled.div<{ isSticky: boolean }>`
  background: gray;
  height: 100px;
  padding: 25px 10px;
  margin: 10px 0px;
  position: ${(props) => (props.isSticky ? "sticky" : "relative")};
`;
