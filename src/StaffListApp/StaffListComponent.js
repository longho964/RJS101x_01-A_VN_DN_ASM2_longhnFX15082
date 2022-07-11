import React, { Component } from "react";
import { STAFFS } from "./staffs";
import "../App";
import { Route, Routes, useParams } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";
import StaffInfor from "./StaffInfor";
import Departments from "./department";
import Payroll from "./payroll";
import Liststaff from "./staffList";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      STAFFS,
      choosenStaff: null,
    };
  }

  showInfo(item) {
    this.setState({ choosenStaff: item });
  }

  render() {
    console.log("this.state.STAFFS", this.state.STAFFS);

    // const staffcompany = this.state.STAFFS.map((item) => {
    //   return (
    //     <div key={item.id} className="liInfor">
    //       <Media tag="li" onClick={() => this.showInfo(item)}>
    //         {" "}
    //         <Link exact to={`/nhanvien/${item.id} `}>
    //           <Media body className="ml-5">
    //             <img src={item.image}></img>
    //             <Media heading>{item.name}</Media>
    //           </Media>{" "}
    //         </Link>
    //       </Media>
    //     </div>
    //   );
    // });

    const StaffDetail = (props) => {
      let { idNhanVien } = useParams();
      console.log("id nhan vien:", idNhanVien);
      return (
        <StaffInfor
          staff={
            this.state.STAFFS.filter(
              (staff) => staff.id === parseInt(idNhanVien, 10)
            )[0]
          }
        />
      );
    };

    return (
      <div className="container">
        <h1 className="application"> FUNIX REACT COMPANY</h1>
        <Header />

        <Routes>
          <Route exact path="/nhanvien" element={<Liststaff />} />
          <Route path="/nhanvien/:idNhanVien" element={<StaffDetail />} />

          <Route exact path="/phongban" element={<Departments />} />
          <Route exact path="/bangluong/*" element={<Payroll />} />
        </Routes>

        {/* <div>
          <Media list className="row">
            {staffcompany}
          </Media>
        </div> */}
        <Footer />
      </div>
    );
  }
}

export default StaffList;
