import Styles from 'styled-components';
import TrashIcon from '../../assets/img/icons/Trash.svg';

const Header = '.card-header';
const DeleteButton = '.card-header_delete-button';

export default Styles.div`
border: 1px solid black;
margin-bottom: 1rem;
padding: 1rem;
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
    border: none;
    width: 14px;
    height: 16px;
  }
}
`;
