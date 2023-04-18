import styled from "@emotion/styled"

export const AsideText = styled.span`
  color: var(--tx-sub-dark);
  transition: 0.3s;
  cursor: pointer;
  padding: 10px 0;
  word-break: keep-all;
  font-size: 25px;
  font-weight: 600;
  &:hover {
    color: var(--tx-accent-light);
  }
`

export const AsideChildText = styled.div`
  color: var(--tx-sub-dark);
  transition: 0.3s;
  cursor: pointer;
  padding: 10px 0 10px 15px;
  word-break: keep-all;
  font-size: 14px;
  &:hover {
    color: var(--tx-accent);
  }
`