import Card from './Card'
import rating from '../assets/rating.png'
import wheater from '../assets/wheater.png'
import todo from '../assets/todo.png'

function Project() {
    return (
        <div className="container project-section" id='projects'>
            <div className="section-title">
                <h1>Projetos</h1>
            </div>
            <div className="projects-cards">
                <div className="rating-project">
                    <Card title="Weather.io" desc="Uma aplicação de previsão do tempo. Planeje seu dia com confiança e esteja preparado para qualquer condição climática!" image={rating} />    
                </div>
                <div className="weather-project">
                    <Card title="Rating Component" desc="Um componente de avaliação que permite que os usuários compartilhem suas opiniões e classifiquem suas experiências." image={wheater} />    
                </div>
                <div className="todo-list-project">
                    <Card title="to-do-list" desc="Organize sua vida com facilidade! A to-do list é a solução perfeita para você planejar, priorizar e conquistar todas as suas tarefas." image={todo}/>    
                </div>
            </div>
        </div>
    )
}

export default Project