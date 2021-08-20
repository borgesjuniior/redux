import { useState } from "react";
import './styles.css';

function SideBar() {
  const [ modules, setModules ] = useState([
    {
      id: 1,
      title: 'Iniciando com redux',
      lessons: [
        {id: 1, title: 'Primeira aula'},
        {id: 2, title: 'Segunda aula'}
      ]
    },
    {
      id: 2,
      title: 'Curso de testes automátizados',
      lessons: [
        {id: 1, title: 'Primeira aula'},
        {id: 2, title: 'Segunda aula'}
      ]
    }
  ])
  
  return (
    <aside className="side-bar">
      {modules.map(module => (
        <div key={module.id} className="content">
          <strong>{module.title}</strong>
          <ul>
            {module.lessons.map(lesson => <li key={lesson.id}>{lesson.title}</li>)}
          </ul>
        </div>
      ))}
    </aside>
  );
}

export default SideBar;
