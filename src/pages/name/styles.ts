import Styles from 'styled-components';

import Colors from '../../utils/Colors';

const Container:string = '#name-age-form-container';
const Form:string = '#name-age-form';
const SubmitButton:string = '#name-age-form__submit';
const BeeLogo:string = '#bee-logo';

const {
  Blue,
  DarkGray,
  Gray,
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
            border: solid 1px ${Gray};
            border-radius: 4px;
            padding: 10px;
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
      background: ${Blue};
      border: none;
      border-radius: 4px;
      color: white;
      cursor: pointer;
      font-size: 1rem;
      padding: .5rem 1rem;
      width: fit-content;

      &:disabled {
        background: ${DarkGray};
      }
    }
  }

  ${BeeLogo} {
    position: absolute;
    left: 1rem;
    bottom: 1rem;
  }
`;
