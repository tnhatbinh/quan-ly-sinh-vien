import { useState } from "react";
import Swal from "sweetalert2";
import "./Login.css";
import anhLogo from "../assets/favicon.svg";
export default function Login({ onLoginSuccess }) {
  const [taiKhoan, setTaiKhoan] = useState("");
  const [matKhau, setMatKhau] = useState("");

  function xuLyDangNhap(e) {
    e.preventDefault();
    if (taiKhoan === "admin" && matKhau === "123456") {
      onLoginSuccess();
      Swal.fire({
        icon: "success",
        title: "Thành công",
        text: "Chào mừng quay lại!",
        timer: 1500,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Thất bại",
        text: "Sai tài khoản hoặc mật khẩu!",
      });
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <img src={anhLogo} className="login-logo" alt="Logo" />
          <h2>ĐĂNG NHẬP HỆ THỐNG</h2>
          <p>Phần mềm hỗ trợ quản lý đào tạo</p>
        </div>
        <form onSubmit={xuLyDangNhap} className="login-form">
          <div className="form-group-login">
            <label>Tài khoản</label>
            <input
              type="text"
              placeholder="Nhập tài khoản (admin)"
              value={taiKhoan}
              onChange={(e) => setTaiKhoan(e.target.value)}
              required
            />
          </div>
          <div className="form-group-login">
            <label>Mật khẩu</label>
            <input
              type="password"
              placeholder="Nhập mật khẩu (123456)"
              value={matKhau}
              onChange={(e) => setMatKhau(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-login">
            ĐĂNG NHẬP
          </button>
        </form>
      </div>
    </div>
  );
}
