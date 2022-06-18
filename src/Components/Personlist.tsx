type Personlistprops = {
  names: {
    first: string;
    last: string;
  }[];
};

export const Personlist = (props: Personlistprops) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2 key={name.first}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};
