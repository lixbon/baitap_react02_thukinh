import React, { Component } from "react";
import { dataGlasses } from "./data/dataGlasses";
import Header_component from "./Header_component";
import Nguoi_mau_component from "./Nguoi_mau_component";
import Show_Kinh_Component from "./Show_Kinh_Component";

export default class Ex_ChonKinh extends Component {
  state = {
    glassesList: dataGlasses,
  };
  render() {
    return (
      <div>
        <Nguoi_mau_component glassesList={this.state.glassesList} />
        <Show_Kinh_Component glassesList={this.state.glassesList} />
      </div>
    );
  }
}
