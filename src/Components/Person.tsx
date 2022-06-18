type Personprops = {
  name: {
     first: string;
    last: string;
  };
};

export const Person = (props: Personprops) => {
  return (
    <div>
      <h1>
        {props.name.first}
        {props.name.last}
      </h1>
    </div>
  );
};
export default Person;
