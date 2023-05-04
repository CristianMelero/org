import "./Colaborador.css";
import {AiFillCloseCircle} from "react-icons/ai"

const Colaborador = (props) => {
	const { nombre, puesto, foto, equipo, id } = props.datos;
	const { eliminarColaborador } = props;

	return (
		<div className="colaborador">
			<AiFillCloseCircle onClick={()=> eliminarColaborador(id)} className="eliminar"/>
			<div
				className="encabezado"
				style={{ backgroundColor: props.fondo }}>
				<img src={foto} alt={nombre} />
				<div className="info">
					<h4>{nombre}</h4>
					<h5>{puesto}</h5>
				</div>
			</div>
		</div>
	);
};

export default Colaborador;
