import WorkSans from './WorkSans[wght].ttf';
import WorkSansItalic from './WorkSans-Italic[wght].ttf';

const Fonts:string = `
@font-face {
  font-family: 'Work Sans';
  src: url(${WorkSans}) format('truetype');
}

@font-face {
  font-family: 'Work Sans Italic';
  src: url(${WorkSansItalic}) format('truetype');
}
`;

export default Fonts;
