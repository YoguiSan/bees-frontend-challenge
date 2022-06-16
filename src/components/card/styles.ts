import Styles from 'styled-components';

import Breakpoints from '../../utils/Breakpoints';

import TrashIcon from '../../assets/img/icons/Trash.svg';

const Header = '.card-header';
const DeleteButton = '.card-header_delete-button';
const ChipContainer = '.card-body_chip-container';

const Mobile = `
@media (max-width: ${Breakpoints.medium}px) {
  width: 100%;
}
`;

export default Styles.div`
border: 1px solid black;
box-sizing: border-box;
padding: 1rem;
margin: 1rem;
min-height: 282px;
width: 30%;

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
