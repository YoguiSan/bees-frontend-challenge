import Styles from 'styled-components';

import Colors from '../../utils/Colors';

const Container:string = '#name-age-form-container';
const Form:string = '#name-age-form';
const SubmitButton:string = '#name-age-form__submit';

const {
  Yellow,
} = Colors;

export default Styles.main`
  background: ${Yellow};
  display: flex;
  height: 100%;

  ${Container} {
    height: fit-content;
    margin: auto;

    ${Form} {
      display: flex;
      flex-direction: column;
      justify-content: center;

      > * {
        margin-bottom: 1rem;
      }

      > button {
        margin: auto;
      }

      > label, > button {
        display: flex;
        flex-direction: column;

        &[for=isOfAge] {
          flex-direction: row;
        }

        > input {
          &[type=text] {
            padding: .5rem;
            margin: auto;
            width: 100%;
          }

          &[type=checkbox] {
            margin-right: .3rem;
          }
        }
      }
    }

    ${SubmitButton} {
      color: white;
      padding: .5rem;
      width: fit-content;
    }
  }
`;
