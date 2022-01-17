import React from "react";
import {
  Grid,
  Row,
  Column,
  Form,
  TextInput,
  Select,
  SelectItem,
} from "carbon-components-react";
import styles from "./registration.scss";

const PatientRegistration = () => {
  return (
    <div>
      <Grid narrow className={styles.grid} style={{ marginTop: "10%" }}>
        <Row>
          <Column lg={3}></Column>
          <Column lg={6}>
            <Form>
              <TextInput
                name="name"
                id="name"
                labelText="Name"
                placeholder="Enter Name"
                // onChange={}
              ></TextInput>
              <br />
              <TextInput
                name="age"
                id="age"
                labelText="Age"
                placeholder="Enter Age"
              ></TextInput>
              <br />
              <Select>
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
              ></TextInput>
              <br />
              <TextInput
                name="phoneNumber"
                id="phoneNumber"
                labelText="Phone Number"
                placeholder="Enter Phone Number"
              ></TextInput>
            </Form>
          </Column>
          <Column lg={3}></Column>
        </Row>
      </Grid>
    </div>
  );
};
export default PatientRegistration;
