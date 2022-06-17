import Styles from 'styled-components';

import Colors from '../../utils/Colors';

const { Yellow } = Colors;

const GoBackButton = '#header__go-back-button';
const Name = '#header-name';

export default Styles.header`
background: ${Yellow};
display: flex;
justify-content: space-between;
padding: 1rem;

${GoBackButton} {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;

  img {
    margin-right: 1rem;
  }

  span {
    display: block;
    margin: auto;
    font-size: 2rem;
  }
}

${Name} {
  font-size: 2rem; 
}
`;
