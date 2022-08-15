import React, { Component } from "react";

export default class Show_Kinh_Component extends Component {
  handleChonKinh = (index, id) => {
    let currentGlass = this.props.glassesList[index];
    //xoa border
    let allborder = document.querySelectorAll(".kinh-img");
    allborder.forEach((item) => {
      item.style = "";
    });
    // them border item dang chon
    document.getElementById(id).style.border = "2px solid blue";
    document.getElementById("kinh-duoc-chon").style.display = "block";
    document.getElementById("kinh-duoc-chon").src = currentGlass.urlmodel;
    //show detail
    document.querySelector(".vglasses__info").style.display = "block";
    document.getElementById(
      "glassesInfo"
    ).innerHTML = `<h5>Glass Model:<span class="text-danger">${currentGlass.name}</span></h5>
    <p>${currentGlass.desc}</p>
    <div class="row ml-2 align-items-center justify-content-between">
    <p class="mb-0 text-danger">$${currentGlass.price}</p>
    <button class="btn btn-success mr-5">BUY</button>
    </div>
    
    `;
  };
  render() {
    return (
      <div className="container">
        <div className="show-kinh row m-auto">
          {this.props.glassesList.map((item, index) => {
            return (
              <div
                key={index.toString() + item.id}
                className="col-4 kinh"
              >
                <img
                  id={item.id}
                  src={item.urlitem}
                  alt=""
                  className="kinh-img"
                  onClick={() => {
                    this.handleChonKinh(index, item.id);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
