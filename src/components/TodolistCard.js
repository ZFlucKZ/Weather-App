import '../styles/TodolistCard.css';

function TodolistCard(props) {
  // console.log(props);

  const handleDeleteList = (e) => {
    e.preventDefault();
    props.handleDelete(props.list, props.index);
  };

  return (
    <li className="item-card" data-index={props.index}>
      <p>{props.list}</p>
      <button onClick={handleDeleteList}>X</button>
    </li>
  );
}

export default TodolistCard;
