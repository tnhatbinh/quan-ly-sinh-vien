import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "./StudentModal.css";

export default function StudentModal({ studentToEdit, onSave, onClose }) {
  // Trạng thái cục bộ của riêng form này
  const [maSV, setMa] = useState("");
  const [hoTen, setTen] = useState("");
  const [diem, setDiem] = useState("");
  const [ngaySinh, setNgaySinh] = useState("");
  const [gioiTinh, setGioiTinh] = useState("Nam");
  const [heDaoTao, setHeDaoTao] = useState("CNTT");

  // useEffect này sẽ tự động chạy khi mở form Sửa: Đổ dữ liệu cũ vào các ô input
  useEffect(() => {
    if (studentToEdit) {
      setMa(studentToEdit.id);
      setTen(studentToEdit.hoTen);
      setDiem(studentToEdit.diem);
      setNgaySinh(studentToEdit.ngaySinh || "");
      setGioiTinh(studentToEdit.gioiTinh || "Nam");
      setHeDaoTao(studentToEdit.heDaoTao || "CNTT");
    }
  }, [studentToEdit]);

  function handleLuu() {
    if (maSV === "" || hoTen === "") {
      Swal.fire({
        icon: "error",
        title: "Lỗi",
        text: "Hãy nhập đủ các trường có dấu (*)",
      });
      return;
    }
    // Đóng gói dữ liệu gửi ngược lại cho App.jsx xử lý
    onSave({
      id: maSV,
      hoTen,
      diem: Number(diem),
      ngaySinh,
      gioiTinh,
      heDaoTao,
    });
  }

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-header">
          <h4>{studentToEdit ? "CẬP NHẬT THÔNG TIN" : "THÊM MỚI SINH VIÊN"}</h4>
          <button className="btn-close" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-body">
          <p className="note">Các trường có dấu * yêu cầu phải nhập.</p>
          <div className="form-group">
            <label>Mã sinh viên (*)</label>
            <input
              type="text"
              value={maSV}
              onChange={(e) => setMa(e.target.value)}
              disabled={studentToEdit !== null}
            />
          </div>
          <div className="form-group">
            <label>Tên đầy đủ (*)</label>
            <input
              type="text"
              value={hoTen}
              onChange={(e) => setTen(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Điểm số (*)</label>
            <input
              type="text"
              value={diem}
              onChange={(e) => setDiem(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Ngày sinh</label>
            <input
              type="date"
              value={ngaySinh}
              onChange={(e) => setNgaySinh(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Chuyên ngành</label>
            <select
              value={heDaoTao}
              onChange={(e) => setHeDaoTao(e.target.value)}
              style={{ flex: 1, padding: "6px" }}
            >
              <option value="CNTT">CNTT</option>
              <option value="Hệ thống thông tin">Hệ thống thông tin</option>
              <option value="Khoa học máy tính">Khoa học máy tính</option>
            </select>
          </div>
          <div className="form-group">
            <label>Giới tính</label>
            <div style={{ flex: 1, display: "flex", gap: "15px" }}>
              <label>
                <input
                  type="radio"
                  name="gioiTinh"
                  value="Nam"
                  checked={gioiTinh === "Nam"}
                  onChange={(e) => setGioiTinh(e.target.value)}
                />{" "}
                Nam
              </label>
              <label>
                <input
                  type="radio"
                  name="gioiTinh"
                  value="Nữ"
                  checked={gioiTinh === "Nữ"}
                  onChange={(e) => setGioiTinh(e.target.value)}
                />{" "}
                Nữ
              </label>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn-save" onClick={handleLuu}>
            ✔ Lưu & Đóng
          </button>
          <button className="btn-cancel" onClick={onClose}>
            ✖ Hủy
          </button>
        </div>
      </div>
    </div>
  );
}
