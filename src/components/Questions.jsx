function Questions(props) {   //inside() we can write what do we want to see: (title, description), then we delete props from string 5
    return (
      <li>
        <p>
          <strong>{props.title}</strong>{props.description}
        </p>
      </li>
    )
  }

  export default Questions