import React, { Component } from "react";

export default class Nguoi_mau_component extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-between model-container">
          <div className="model-thukinh" id="model-showkinh">
            <img src="" alt="" id="kinh-duoc-chon" />
            <div id="glassesInfo" class="vglasses__info"></div>
          </div>
          <div className="model-thukinh"></div>
        </div>
      </div>
    );
  }
}
