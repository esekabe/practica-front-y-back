import { useParams, Link } from "react-router-dom";

const tareasEjemplo = [
    { id:1, titulo: 'Aprender HTML' },
    { id:2, titulo: 'Practicar CSS' },
    { id:3, titulo: 'Dominar React' },
];

export default function TaskDetail(){
    const {id} = useParams();
    const tarea = tareasEjemplo.find((t)=>t.id === Number(id));

    if(!tarea) return(
        <div style={{padding: '20px'}}>
            <h2>Tarea no encontrada</h2>
            <Link to="/tasks">← Volver a tareas</Link>
        </div>
    );

    return (
        <div style={{padding:'20 px'}}>
            <h1>Tarea #{id}: {tarea.titulo}</h1>
            <Link to="/tasks">← Volver a tareas</Link>
        </div>
    );
}