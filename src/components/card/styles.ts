import Styles from 'styled-components';
import TrashIcon from '../../assets/img/icons/Trash.svg';

const Header = '.card-header';
const DeleteButton = '.card-header_delete-button';
const ChipContainer = '.card-body_chip-container';

export default Styles.div`
border: 1px solid black;
margin-bottom: 1rem;
padding: 1rem;
width: 382px;
height: 282px;

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
`;
