import React from "react";
import { render } from "react-dom";
import { Button } from "react-bootstrap";
// import { IconComponent } from "../../components/Icons";
import { MdDelete } from "react-icons/md";
import Select from "react-select";
import { customStyles } from "../../helper/styles";

const officeowned = [
  {
    value: "option1",
    label: "Yes",
  },
  {
    value: "option2",
    label: "No",
  },
]
export default class OfficeDetails extends React.Component {
  state = {
    rows: [{}],
  };

  handleChange = (idx) => (e) => {
    const { name, value } = e.target;
    const rows = [...this.state.rows];
    rows[idx] = {
      [name]: value,
    };
    this.setState({
      rows,
    });
    console.log('rowadd', this.state.rows)
  };

  handleAddRow = () => {
    const item = {
      product: "",
      hsn: "",
      description: "",
      qty: "",
      rate: "",
      amount: "",
    };
    this.setState({
      rows: [...this.state.rows, item],
    });
    console.log('State', this.state.rows)
  };

  handleRemoveSpecificRow = (idx) => () => {
    let rowvalue = this.state.rows;
    if (rowvalue.length > 1) {
      const rows = [...this.state.rows];
      rows.splice(idx, 1);
      this.setState({ rows });
    }
  };
  render() {
    return (
      <div>
        <div className="m-2">
          <div className="row clearfix">
            <div className="col-md-12 column">
              <table
                className="table table-bordered table-hover"
                id="tab_logic"
              >
                <thead>
                  <tr>
                    <th className="text-center">S.No</th>
                    <th className="text-center">Plot Size(sqft)</th>
                    <th className="text-center">Constructed Area(sqft)</th>
                    <th className="text-center">Location</th>
                    <th className="text-center">Office Owned</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.rows.map((item, idx) => (
                    <tr id="addr0" key={idx}>
                      <td className="text-center">{idx}</td>
                      <td style={{ width: "170px" }}>
                        <input
                          type="text"
                          name="product"
                          value={this.state.rows[idx].product}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                      </td>
                      <td style={{ width: "170px" }}>
                        <input
                          type="text"
                          name="hsn"
                          value={this.state.rows[idx].hsn}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                      </td>
                      <td style={{ width: "170px" }}>
                        <input
                          type="text"
                          name="description"
                          value={this.state.rows[idx].description}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                      </td>
                      <td style={{ width: "120px" }}>
                        <Select
                          id="officeowned"
                          label="officeowned"
                          // className="col-10"
                          placeholder="Select"
                          options={officeowned}
                          name="officeowned"
                          // value={{ label: values.businesstype }}
                          styles={customStyles}
                          // onChange={(value) => {
                          //   setFieldValue("gender", value.label);
                          // }}
                        />
                      </td>
                      <td>
                        <div className="text-center">
                          {/* <div onClick={this.handleAddRow}>
                            <IconComponent
                              name="plusgreen"
                              fill="grey"
                              width={20}
                              height={20}
                            />
                          </div> */}
                          {/* &ensp; */}
                          <div onClick={this.handleRemoveSpecificRow(idx)}>
                            {/* <IconComponent
                              name="delete"
                              fill="grey"
                              width={20}
                              height={20}
                            /> */}
                            <MdDelete fontSize="24px" />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Button variant="success" onClick={this.handleAddRow}>
                Add
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
