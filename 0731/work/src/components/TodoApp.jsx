import Todoitem from"./Todoitem"
const TodoApp =() =>{
const todos =[
    {id:1,tittle:'learn react',completed:false},
    {id:2,tittle:'fall asleep',completed:false},
    {id:3,tittle:'wake up',completed:false},
];

return <div>
    <h1>To do list</h1>
    {todos.map((todo)=>(
        <Todoitem key={todo.id} tittle={todo.tittle} completed={todo.completed}/>
    ))}
</div>
}
export default TodoApp

