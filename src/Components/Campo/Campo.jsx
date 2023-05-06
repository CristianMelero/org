import "./Campo.css";

const Campo = (props) => {
	const manejarCambio = (e) => {
		props.actualizarValor(e.target.value);
	};

	const placeholderModificado = `${props.placeholder}...`;

	const {type = "text"} = props

	return (
		<div className={`campo campo-${type}`}>
			<label htmlFor="">{props.title}</label>
			<input
				placeholder={placeholderModificado}
				required={props.required}
				defaultValue={props.valor}
				onChange={manejarCambio}
				type={type}
			/>
		</div>
	);
};

export default Campo;
