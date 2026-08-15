import {useNavigate, Link} from 'react-router-dom';
import { useState } from 'react';

const tareasEjemplo = [
    { id: 1, titulo: 'Aprender HTML' },
    { id: 2, titulo: 'Practicar CSS'},
    { id: 3, titulo: 'Dominar React'},
];

export default function Tasks(){
    const navigate = useNavigate();
    const [titulo, setTitulo] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!titulo.trim()) return;
        console.log('Tarea creada:', titulo);
        navigate('/');
    }

    return(
        <div style={{padding:'20px'}}>
            <h1>Tareas</h1>
            <ul>
                {tareasEjemplo.map((t)=> (
                    <li key={t.id}>
                        <Link to={`/tasks/${t.id}`}>{t.titulo}</Link>
                    </li>
                ))}
            </ul>
            <h2>Nueva Tarea</h2>
            <form onSubmit={handleSubmit}>
                <input value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder='Nombre de la tarea'/>
                <button type="submit">Crear y volver al inicio</button>
            </form>
            <button onClick={()=>navigate(-1)}>← Atrás</button>
        </div>
    );
}