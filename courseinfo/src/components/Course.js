const Header = ({ name }) => <h1>{name}</h1>;

const Total = ({ sum }) => <p>Total of {sum} exercises</p>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </>
  );
};

const Course = ({ course }) => {
  const parts = course.parts;
  return (
    <>
      <Header name={course.name} />
      <Content parts={parts} />
      {/* {Content(course.parts)} */}
      <Total sum={parts.reduce((sum, part) => sum + part.exercises, 0)} />
    </>
  );
};

export default Course;