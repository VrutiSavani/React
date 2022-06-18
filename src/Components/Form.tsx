import React, { useState } from "react";

function Form() {
  const [Data, setData] = useState<string>("");
  function getData(val: {
    target: { value: React.SetStateAction<string> };
    currentTarget: { value: any };
  }) {
    setData(val.target.value);
    console.log(val.currentTarget.value);
  }
  return (
    <>
      <div className="App">
        <h2>First name:</h2>
        <input type="text" onChange={getData} />
      </div>
      <div className="App1">
        <h2>Last Name:</h2>
        <input type="text" onChange={getData} />
      </div>.
      <div className="App2">
        <h2>Gender:</h2>
        <input
          type="radio"
          name="gender"
          value="Male"
          id="Male"
          onChange={getData}
        />{" "}
        Male
        <input
          type="radio"
          name="gender"
          value="Female"
          id="Female"
          onChange={getData}
        />{" "}
        Female
        <input
          type="radio"
          name="gender"
          value="other"
          id="other"
          onChange={getData}
        />{" "}
        Other
      </div>
      <div className="App3">
        <h2>Hobbies:</h2>
        <input
          type="checkbox"
          name="singing"
          value="singing"
          id="singing"
          onChange={getData}
        />{" "}
        Singing
        <input
          type="checkbox"
          name="Dancing"
          value="Dancing"
          id="Dancing"
          onChange={getData}
        />{" "}
        Dancing
        <input
          type="checkbox"
          name="Swimming"
          value="Swimming"
          id="Swimming"
          onChange={getData}
        />{" "}
        Swimming
        <input
          type="checkbox"
          name="Reading"
          value="Reading"
          id="Reading"
          onChange={getData}
        />{" "}
        Reading
        <input
          type="checkbox"
          name="writing"
          value="writing"
          id="writing"
          onChange={getData}
        />{" "}
        writing
      </div>
      <div className="App4">
        <h2>City:</h2>
        <select onChange={getData}>
          <option value="Surat">Surat</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="vadodara">vadodara</option>
          <option value="Jaipur">Jaipur</option>
          <option value="Chennai">Chennai</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Varanasi">Varanasi</option>
          <option value="Kochi">Kochi</option>
          <option value="Agra">Agra</option>
          <option value="Banglore">Banglore</option>
          <option value="Hydrabad">Hydrabad</option>
        </select>
      </div>
      <div className="App5">
        <h2>Address:</h2>
        <input type="textarea" name="textvalue" onChange={getData} />
      </div>
    </>
  );
}

export default Form;