import "./ListaOpciones.css";

const ListaOpciones = (props) => {
	// equipos.map((equipo, index) => {});

	const manejarCambio = (e) => {
		props.actualizarValor(e.target.value);
	};

	return (
		<div className="lista-opciones">
			<label>{props.title}</label>
			<select
				value={props.valor}
				onChange={manejarCambio}
				defaultValue="Seleccione un equipo...">
				<option className="disabled" disabled hidden>
					Seleccione un equipo...
				</option>
				{props.equipos.map((equipo, index) => (
					<option key={index} value={equipo}>
						{equipo}
					</option>
				))}
			</select>
		</div>
	);
};

export default ListaOpciones;
