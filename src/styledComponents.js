import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  justify-content: ${props => (props.between ? 'space-between' : 'center')};
  align-items: center;
  background-color: ${props => (props.dark ? '#212121' : '#ffffff')};
  color: ${props => (props.dark ? '#ffffff' : '#212121')} !important;
  height: ${props => props.height};
  width: ${props => props.width};
  padding: 30px;
  min-height: ${props => props.minHeight && '90vh'};
`
export const ConCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 10px;
  color: ${props => (props.dark ? '#ffffff' : '#212121')};
  background-color: ${props => (props.dark ? '#212121' : '#ffffff')};
  box-shadow: ${props => (props.dark ? '' : '0px 4px 16px 0px #bfbfbf')};
  width: 600px;
  @media (max-width: 768px) {
    width: 80%;
  }
`
export const Btn = styled.button`
  height: 40px;
  background-color: ${props => (props.outline ? 'transparent' : '#3b82f6')};
  border: ${props => (props.dark ? '2px solid #ffffff' : '2px solid #3b82f6')};
  border-radius: 7px;
  outline: none;
  color: ${props => (props.outline ? '#3b82f6' : '#ffffff')};
  width: ${props => props.width};
  color: ${props => props.dark && '#ffffff'};
  cursor: pointer;
  font-size: 17px;
  font-weight: 600;
`
export const TransBtn = styled.button`
  outline: none;
  border-width: 0;
  background-color: transparent;
  cursor: pointer;
  align-self: center;
  color: ${props => (props.color ? '#2563eb' : '#64748b')};
  font-weight: ${props => (props.color ? 'bold' : 'normal')};
`
export const ModalCon = styled.div`
  height: 200px;
  width: 400px;
  background-color: ${props => (props.dark ? '#212121' : '#ffffff')};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => (props.dark ? '#ffffff' : '#212121')};
  @media (max-width: 768px) {
    width: 80%;
  }
`
export const HCon = styled.div`
  display: flex;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
  color: ${props => (props.dark ? '#f9f9f9' : '#181818')};
`
export const PaddingCon = styled.div`
  display: ${props => (props.no ? '' : 'flex')};
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  justify-content: center;
  align-items: center;
  margin-left: 20%;
  min-height: 89vh;
  width: 80%;
  margin-top: 100px;
  padding: ${props => props.padding};
  background-color: ${props => (props.dark ? props.color : '#f9f9f9')};
  color: ${props => (props.dark ? '#f9f9f9' : '#0f0f0f')} !important;
`
export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  padding: 30px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #000000;
`
export const UnOrder = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-inline-start: 0;
  width: 100%;
  flex-wrap: wrap;
  padding: 50px;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
`
