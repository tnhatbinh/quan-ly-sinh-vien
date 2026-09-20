import { useState } from "react";
import "./App.css";
import Swal from "sweetalert2";

import Login from "./components/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import StudentTable from "./components/StudentTable";
import StudentModal from "./components/StudentModal";

const duLieuGiaLap = [
  {
    id: "sv001",
    hoTen: "Nguyễn Văn A",
    diem: 8,
    ngaySinh: "2004-01-01",
    gioiTinh: "Nam",
    heDaoTao: "Đại học",
  },
  {
    id: "sv002",
    hoTen: "Nguyễn Văn B",
    diem: 9,
    ngaySinh: "2004-02-15",
    gioiTinh: "Nam",
    heDaoTao: "Đại học",
  },
  {
    id: "sv003",
    hoTen: "Trần Thị C",
    diem: 6.7,
    ngaySinh: "2004-05-20",
    gioiTinh: "Nữ",
    heDaoTao: "Cao đẳng",
  },
];

export default function App() {
  const [daDangNhap, setDaDangNhap] = useState(false);
  const [danhSach, setDanhSach] = useState(duLieuGiaLap);

  // Trạng thái quản lý dòng đang được chọn & tìm kiếm
  const [svDuocChon, setSvDuocChon] = useState(null);
  const [tuKhoa, setTuKhoa] = useState("");

  // Trạng thái quản lý Modal
  const [hienThiModal, setHienThiModal] = useState(false);
  const [svDangSua, setSvDangSua] = useState(null);

  // --- LOGIC XỬ LÝ NÚT BẤM TRÊN TOOLBAR ---
  function clickSua() {
    if (!svDuocChon) {
      Swal.fire(
        "Lưu ý",
        "Vui lòng click chọn một sinh viên dưới bảng trước khi sửa!",
        "info",
      );
      return;
    }
    const sv = danhSach.find((s) => s.id === svDuocChon);
    setSvDangSua(sv);
    setHienThiModal(true);
  }

  function clickXoa() {
    if (!svDuocChon) {
      Swal.fire(
        "Lưu ý",
        "Vui lòng click chọn một sinh viên dưới bảng trước khi xóa!",
        "info",
      );
      return;
    }
    Swal.fire({
      title: "Xác nhận xóa?",
      text: `Bạn muốn xóa sinh viên mã ${svDuocChon}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Đồng ý",
    }).then((result) => {
      if (result.isConfirmed) {
        setDanhSach(danhSach.filter((sv) => sv.id !== svDuocChon));
        setSvDuocChon(null); // Xóa xong thì bỏ chọn
        Swal.fire("Thành công!", "Đã xóa.", "success");
      }
    });
  }

  // --- LOGIC NHẬN DỮ LIỆU TỪ MODAL TRẢ VỀ ---
  function luuThongTin(svMoi) {
    if (svDangSua === null) {
      setDanhSach([...danhSach, svMoi]);
    } else {
      setDanhSach(danhSach.map((sv) => (sv.id === svDangSua.id ? svMoi : sv)));
    }
    setHienThiModal(false);
  }

  const danhSachHienThi = danhSach.filter(
    (sv) =>
      sv.hoTen.toLowerCase().includes(tuKhoa.toLowerCase()) ||
      sv.id.toLowerCase().includes(tuKhoa.toLowerCase()),
  );

  if (!daDangNhap) return <Login onLoginSuccess={() => setDaDangNhap(true)} />;

  return (
    <div className="admin-layout">
      <Header onLogout={() => setDaDangNhap(false)} />
      <div className="body-container">
        <Sidebar />
        <div className="main-content">
          <h3>DANH SÁCH QUẢN LÝ</h3>

          <div className="toolbar">
            <div className="toolbar-left">
              <button
                className="btn-them"
                onClick={() => {
                  setSvDangSua(null);
                  setHienThiModal(true);
                }}
              >
                + Thêm
              </button>
              <button onClick={clickSua} style={{ color: "#0056b3" }}>
                ✎ Sửa
              </button>
              <button onClick={clickXoa} style={{ color: "#d32f2f" }}>
                ✖ Xóa
              </button>
            </div>
            <div className="toolbar-right">
              <input
                type="text"
                placeholder="Tìm sinh viên..."
                value={tuKhoa}
                onChange={(e) => setTuKhoa(e.target.value)}
              />
            </div>
          </div>

          <StudentTable
            data={danhSachHienThi}
            selectedId={svDuocChon}
            onRowSelect={setSvDuocChon}
          />
        </div>
      </div>

      {hienThiModal && (
        <StudentModal
          studentToEdit={svDangSua}
          onSave={luuThongTin}
          onClose={() => setHienThiModal(false)}
        />
      )}
    </div>
  );
}
