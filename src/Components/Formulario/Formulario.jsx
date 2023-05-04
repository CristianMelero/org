import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
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
				<CampoTexto
					title="Nombre"
					placeholder="Ingresar nombre"
					required
					value={nombre}
					actualizarValor={actualizarNombre}
				/>
				<CampoTexto
					title="Puesto"
					placeholder="Ingresar puesto"
					required
					value={puesto}
					actualizarValor={actualizarPuesto}
				/>
				<CampoTexto
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
				<CampoTexto
					title="Título"
					placeholder="Ingresar título"
					required
					value={titulo}
					actualizarValor={actualizarTitulo}
				/>
				<CampoTexto
					title="Color"
					placeholder="Ingresar el color en hex"
					required
					value={color}
					actualizarValor={actualizarColor}
				/>
				<Boton texto="Registrar equipo" />
			</form>
		</section>
	);
};

export default Formulario;
