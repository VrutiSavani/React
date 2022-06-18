type Greetprops = {
  name: string;
  age?: number;
  login: boolean;
};

export const Greet = (props: Greetprops) => {
  return (
    <div>
      {props.login
        ? `My name is ${props.name} and my age is ${props.age}!`
        : "welcome guest"}
      <h1>
        My name is {props.name} savani and my age is {props.age}.
      </h1>
    </div>
  );
};

export default Greet;