export const Task = (props) => {
  return (
    <div className="task">
      <h1>props.taskName</h1>
      <button onClick={() => deleteTask(props.id)}>X</button>
    </div>
  );
};
