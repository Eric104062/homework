const Todoitem = (props) =>{
    const {tittle,completed}=props
    return <div>
        <h2>
            {tittle}
        </h2>
        <p>
            {completed ? "finish":"undo"}
        </p>
      </div>
}
export default Todoitem