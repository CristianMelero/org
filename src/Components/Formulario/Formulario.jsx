import "./Formulario.css";
import Campo from "../Campo/Campo";
import ListaOpciones from "../ListaOpciones/ListaOciones";
import Boton from "../Boton/Boton";
import { useState } from "react";

const Formulario = (props) => {
	const [nombre, actualizarNombre] = useState("");
	const [puesto, actualizarPuesto] = useState("");
	const [foto, actualizarFoto] = useState("");
	const [equipo, actualizarEquipo] = useState("");
	const [titulo, actualizarTitulo] = useState("");
	const [color, actualizarColor] = useState("");
	const { registrarColaborador, registrarEquipo } = props;

	const manejarEnvio = (e) => {
		e.preventDefault();
		const datosAEnviar = {
			nombre,
			puesto,
			foto,
			equipo,
		};
		registrarColaborador(datosAEnviar);
	};

	const manejarEnvioEquipos = (e) => {
		e.preventDefault();
		registrarEquipo({titulo, colorPrimario: color});
	};

	return (
		<section className="formulario">
			<form onSubmit={manejarEnvio}>
				<h2>Rellena el formulario para crear el colaborador.</h2>
				<Campo
					title="Nombre"
					placeholder="Ingresar nombre"
					required
					value={nombre}
					actualizarValor={actualizarNombre}
				/>
				<Campo
					title="Puesto"
					placeholder="Ingresar puesto"
					required
					value={puesto}
					actualizarValor={actualizarPuesto}
				/>
				<Campo
					title="Foto"
					placeholder="Ingresar enlace de foto"
					required
					value={foto}
					actualizarValor={actualizarFoto}
				/>
				<ListaOpciones
					title="Equipo"
					value={equipo}
					actualizarValor={actualizarEquipo}
					equipos={props.equipos}
				/>
				<Boton texto="Crear" />
			</form>
			<form onSubmit={manejarEnvioEquipos}>
				<h2>Rellena el formulario para crear el colaborador.</h2>
				<Campo
					title="Título"
					placeholder="Ingresar título"
					required
					value={titulo}
					actualizarValor={actualizarTitulo}
				/>
				<Campo
					title="Color"
					placeholder="Ingresar el color en hex"
					required
					value={color}
					actualizarValor={actualizarColor}
					type="color"
				/>
				<Boton texto="Registrar equipo" />
			</form>
		</section>
	);
};

export default Formulario;
