import styled, { css } from 'styled-components'
import { bounceDown } from '../../styles/animation'
export const ListContainer = styled.div`
  overflow: hidden;
  min-height: 125px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  ${(props) =>
    props.fixed &&
    css`
       {
        background: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        left: 0;
        margin: 0 auto;
        width: 500px;
        padding: 5px;
        position: fixed;
        right: 0;
        top: -20px;
        transform: scale(0.5);
        z-index: 1;
        overflow-y: auto;
        ${bounceDown({ time: '1s' })}
      }
    `};
`
export const List = styled.ul`
  display: flex;
  overflow: auto;
  width: 100%;
  padding: 0;
`

export const Item = styled.li`
  padding: 0 8px;
  list-style: none;
  margin: 0 auto;
`
