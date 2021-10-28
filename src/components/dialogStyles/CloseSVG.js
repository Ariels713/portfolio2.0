import "./dialogStyles.css"

function ERemove({close}) {
	

	return (
		<svg aria-hidden onClick={close}  className="dialog_exit" height="18" width="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<title>Close</title>
	<g fill="#212121">
		<path d="M16.06 1.94a1.5 1.5 0 0 0-2.12 0l-4.94 4.94-4.94-4.94a1.5 1.5 0 0 0-2.12 2.12l4.94 4.94-4.94 4.94a1.5 1.5 0 1 0 2.12 2.12l4.94-4.94 4.94 4.94a1.5 1.5 0 0 0 2.12-2.12l-4.94-4.94 4.94-4.94a1.5 1.5 0 0 0 0-2.12z" fill="#212121"/>
	</g>
</svg>
	);
};

export default ERemove;