import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
	@font-face {
    font-family: 'ImcreSoojin';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.3/ImcreSoojin.woff') format('woff');
    font-weight: normal;
    font-style: normal;
	}

	font-family: 'ImcreSoojin', sans-serif;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

h1, h2, h3, h4, h5, h6, p, span {
	line-height: normal
}

a {
  color: black;
  text-decoration: none;
}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
	background-color: #F4976C;
	font-family: 'ImcreSoojin', sans-serif;
}

ol, ul {
	list-style: none;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  appearance: none;
  margin: 0;
}

input,textarea, select {
	outline: none;
}

button {
	border: none;
  outline:none;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

export default GlobalStyle;
