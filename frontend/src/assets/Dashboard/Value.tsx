import { CSSProperties } from 'react';

function Value({
	fillColor,
}: {
	fillColor: CSSProperties['color'];
}): JSX.Element {
	return (
		<svg
			width="30"
			height="30"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M9 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V9M9 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V9M9 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V9M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V9"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				fill={fillColor}
			/>
			<path
				d="M9.76562 15.6221C9.19922 15.6221 8.78906 15.3047 8.78906 14.6406V14.3818H6.58691C5.83984 14.3818 5.32227 13.9082 5.32227 13.2246C5.32227 12.8486 5.44922 12.4531 5.72266 11.9648C6.18164 11.1396 6.61621 10.4219 7.1582 9.57227C7.74414 8.64941 8.22266 8.33203 9.02832 8.33203C10.0586 8.33203 10.7422 8.90332 10.7422 9.76758V12.7949H10.9033C11.4453 12.7949 11.7041 13.1318 11.7041 13.5908C11.7041 14.0498 11.4404 14.3818 10.8984 14.3818H10.7422V14.6406C10.7422 15.3047 10.3271 15.6221 9.76562 15.6221ZM8.84766 12.8779V9.83594H8.80859C8.10059 10.8711 7.58789 11.6914 7.0166 12.8193V12.8779H8.84766ZM13.2959 15.5C12.6221 15.5 12.3291 15.124 12.3291 14.6064C12.3291 14.2256 12.5049 13.9326 12.8955 13.6055L14.834 11.9453C15.625 11.2666 15.8496 10.959 15.8496 10.5391C15.8496 10.0947 15.5078 9.78711 15.0049 9.78711C14.6338 9.78711 14.3799 9.95801 14.1162 10.3389C13.8428 10.7393 13.5938 10.8857 13.1982 10.8857C12.6709 10.8857 12.3486 10.5781 12.3486 10.0801C12.3486 9.91895 12.3779 9.76758 12.4414 9.62109C12.8125 8.78125 13.8037 8.25879 15.0342 8.25879C16.748 8.25879 17.8418 9.12305 17.8418 10.4023C17.8418 11.3496 17.3535 11.8428 16.2598 12.79L14.9756 13.8984V13.9375H17.2119C17.7295 13.9375 18.0225 14.2451 18.0225 14.7188C18.0225 15.1826 17.7295 15.5 17.2119 15.5H13.2959Z"
				fill={fillColor}
			/>
		</svg>
	);
}

export default Value;