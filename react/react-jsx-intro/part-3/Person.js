function Person(props) {
    return (
        <div>
            <p>Learn some information about this person</p>
            <p>Name: {props.name.length > 8 ? props.name.substring(0, 6) + "..." : props.name}</p>
            <p>Age: {props.age}</p>
            <h3>{props.age > 18 ? "please go vote!" : "you must be 18"}</h3>
            <ul>
                {props.hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
            </ul>
        </div>
    );
}
