import "./CampoTexto.css";

const CampoTexto = (props) => {
	const manejarCambio = (e) => {
		props.actualizarValor(e.target.value);
	};

	const placeholderModificado = `${props.placeholder}...`;
	return (
		<div className="campo-texto">
			<label htmlFor="">{props.title}</label>
			<input
				placeholder={placeholderModificado}
				type="text"
				required={props.required}
				defaultValue={props.valor}
				onChange={manejarCambio}
			/>
		</div>
	);
};

export default CampoTexto;
