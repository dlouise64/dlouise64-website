import styled from "@emotion/styled"

export const List = styled.ul`
  list-style: ${props => props.styled ? 'disc' : 'none'};
  margin: 0;
  li {
    display: ${props => props.inline ? 'inline-block' : 'block'};
    margin-left: 1rem;
  }
`
