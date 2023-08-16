function Card({nombre,color}) {
  return (
    <div>    
      <h3 className="card"> {nombre} elegiste el color: {color}</h3>     
    </div>
  );
}

export default Card;