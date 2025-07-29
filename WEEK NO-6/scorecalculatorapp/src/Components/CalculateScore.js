import './Stylesheets/mystyle.css';

function CalculateScore(props) {
  const average = props.total / props.goal;

  return (
    <div className="Name">
      <h2>Student Name: {props.Name}</h2>
      <h3>School: {props.School}</h3>
      <h3>Total Marks: {props.total}</h3>
      <h3>Goal: {props.goal}</h3>
      <h3>Average Score: {average}</h3>
    </div>
  );
}

export default CalculateScore;
