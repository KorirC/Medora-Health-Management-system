import React, { useState } from "react";
import {
  Grid,
  Row,
  Column,
  Form,
  TextInput,
  Select,
  SelectItem,
  Button,
} from "carbon-components-react";
import styles from "./registration.scss";

const PatientRegistration = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [id, setId] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  //   console.log(name, age, gender, id, phonenumber);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = JSON.stringify({
      name: `${name}`,
      gender: `${gender}`,
      age: `${age}`,
      nationalID: `${id}`,
      phonenumber: `${phonenumber}`,
    });
    console.log(data);
  };

  return (
    <div>
      <Grid narrow className={styles.grid} style={{ marginTop: "10%" }}>
        <Row>
          <Column lg={3}></Column>
          <Column lg={6}>
            <Form onSubmit={handleSubmit}>
              <TextInput
                name="name"
                id="name"
                labelText="Name"
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
              ></TextInput>
              <br />
              <TextInput
                name="age"
                id="age"
                labelText="Age"
                placeholder="Enter Age"
                onChange={(e) => setAge(e.target.value)}
              ></TextInput>
              <br />
              <Select onChange={(e) => setGender(e.target.value)}>
                {" "}
                <SelectItem value="female" text="Female" />
                <SelectItem value="male" text="Male" />
              </Select>
              <br />
              <TextInput
                name="idnumber"
                id="idnumber"
                labelText="ID Number"
                placeholder="Enter National ID Number"
                onChange={(e) => setId(e.target.value)}
              ></TextInput>
              <br />
              <TextInput
                name="phoneNumber"
                id="phoneNumber"
                labelText="Phone Number"
                placeholder="Enter Phone Number"
                onChange={(e) => setPhoneNumber(e.target.value)}
              ></TextInput>
              <br />
              <Button kind="secondary" type="submit">
                Save
              </Button>
            </Form>
          </Column>
          <Column lg={3}></Column>
        </Row>
      </Grid>
    </div>
  );
};
export default PatientRegistration;
