import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Article = styled.article`
  min-height: 200px;
`

export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 80%;
  margin: 0 auto;
  margin-top: 2em;
`

export const Img = styled.img`
  ${fadeIn({ time: '2s' })}
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

export const Button = styled.button`
  padding-top: 8px;
  display: flex;
  align-items: center;
  padding-top: 8px;
  width: 80%;
  margin: 0 auto;
  & svg {
    margin-right: 4px;
  }
`