const XSvg = (props) => (
	// <svg aria-hidden='true' viewBox='0 0 24 24' {...props}>
	// 	<path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
	// </svg>
	<svg aria-hidden='true' viewBox='0 0 24 24' {...props}>
    <path d='M3 3H7V21H3V3ZM9 3L15 12L21 3V21H17V8L11 21H9V3Z' fill='white' />
  </svg>
	  
);
export default XSvg;