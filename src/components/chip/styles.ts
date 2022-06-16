import Styles from 'styled-components';

import Colors from '../../utils/Colors';

const {
  Yellow,
} = Colors;

export default Styles.div`
background: ${Yellow};
border-radius: 99px;
display: flex;
padding: 10px;
width: fit-content;

margin: 1rem;

img {
  margin-right: .5rem;
}

input {
  width: 60%;
}
`;
