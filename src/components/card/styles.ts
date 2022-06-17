import Styles from 'styled-components';

import Breakpoints from '../../utils/Breakpoints';

import TrashIcon from '../../assets/img/icons/Trash.svg';

interface Props {
  windowWidth?: number | undefined;
}

const Header:string = '.card-header';
const DeleteButton:string = '.card-header_delete-button';
const ChipContainer:string = '.card-body_chip-container';

const Mobile:string = `
@media all and (max-width: ${Breakpoints.medium}px) {
  width: 100%;
}
`;

export default Styles.div<Props>`
border: 1px solid black;
box-sizing: border-box;
padding: 1rem;
margin: 1rem;
min-height: 282px;
width: ${
  ({
    windowWidth,
  }:Props):string => (
    windowWidth <= Breakpoints.medium ? '100%' : '30%'
  )};

${Header} {
  display: flex;
  justify-content: space-between;

  h3 {
    margin-top: 0;
    font-size: 20px;
  }

  ${DeleteButton} {
    background: url(${TrashIcon}) no-repeat;
    cursor: pointer;
    border: none;
    width: 14px;
    height: 16px;
  }
}

${ChipContainer} {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

${Mobile}
`;
