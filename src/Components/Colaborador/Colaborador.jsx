import "./Colaborador.css";
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai"

const Colaborador = (props) => {
	const { nombre, puesto, foto, equipo, id, fav } = props.datos;
	const { eliminarColaborador, like } = props;

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
				{fav===true?<AiFillHeart color="red" onClick={()=> like(id)}/>:<AiOutlineHeart onClick={()=> like(id)}/>}
				</div>
			</div>
		</div>
	);
};

export default Colaborador;
