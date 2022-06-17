import Styles from 'styled-components';

const Loader:string = '#loader-container';

const LoaderAnimation:string = `
@keyframes Loading {
  0% {
    opacity: 1;
  }
  50% {
    opacity: .2;
  }
  100% {
    opacity: 1;
  }
}
`;

export default Styles.main`
  ${LoaderAnimation}
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 100px;

  ${Loader} {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    background: white;
    margin: 0;
    opacity: .9;

    img {
      animation-name: Loading;
      animation-duration: 1s;
      animation-iteration-count: infinite;
    }
  }
`;
