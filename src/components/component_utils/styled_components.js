import styled from "styled-components";

export let FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export let ParaWrapper = styled.p`
  font-size: ${(props) => props.fontSize || "0.7rem"};
  color: ${(props) => props.color || "white"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  padding: ${(props) => props.padding || "0 0"};
  background-color: ${(props) => props.backgroundColor || ""};
`;

export let H1Wrapper = styled.h1`
  font-size: ${(props) => props.fontSize || "1.2rem"};
  color: ${(props) => props.color || "white"};
  padding: ${(props) => props.padding || "0 0"};
`;

export let SpanWrapper = styled.span`
  font-size: ${(props) => props.fontSize || "0.7rem"};
  color: ${(props) => props.color || "white"};
  padding: ${(props) => props.padding || "0 0"};
  padding-left: ${(props) => props.paddingLeft || 0};
`;
