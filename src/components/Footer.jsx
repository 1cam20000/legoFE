import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footerConTent">
        <div className="footer1">
          <div id="logo" style={{ color: "white", fontSize: "20px" }}>
            <AiOutlineShoppingCart size={60} color="black"/>
            <span id="cheap">Your Logo</span>
          </div>
          <br />
          <p>Hộ Kinh Doanh Cửa Hàng Tiện Ích </p>
          <br />
          <p>Mã số HKD : 26A8048722 </p>
          <p>Do Phòng Tài Chính Kế Hoạch cấp ngày 25/06/2024</p>
        </div>
        <div className="footer2">
          <div>
            <CiLocationOn size={25} />
            <span>
              136 Phạm Vấn, Phường Đông Vệ, Thành phố Thanh Hóa, Việt Nam
            </span>
            <br />
            Thứ 2 - Chủ nhật: 6:00-20:00
          </div>
        </div>
        <div className="footer3">
          <h3>Chính sách mua hàng</h3>
          <br />
          <NavLink to="/chinh-sach-bao-mat">
            {" "}
            &lt;&gt; Chính sách bảo mật
          </NavLink>
          <NavLink to="/chinh-sach-thanh-toan">
            {" "}
            &lt;&gt; Chính sách thanh toán
          </NavLink>
          <NavLink to="/chinh-sach-hoan-tra">
            &lt;&gt; Chính sách hoàn hàng, khiếu nại, bảo hành
          </NavLink>
        </div>
        <div className="footer4">
          <h3>Hỗ trợ khách hàng</h3>
          <br />
          <div>
            <BsFillTelephoneFill />
            <span style={{ fontSize: "20px" }}> 0790999998</span>
          </div>
          <p>Thứ 2 - Thứ 7: 8:00 - 21:30</p>
          <div id="mail">
            <IoIosMail size={20} />
            <span style={{ fontSize: "20px" }}> abcdef@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
