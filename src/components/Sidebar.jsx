import "./Sidebar.css";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="side-menu">
        <li>Khoa Công nghệ thông tin</li>
        <li className="active-side">Ngành CNTT</li>
        <li>Hệ Đào tạo chính quy</li>
        <li>Quản lý Lớp học</li>
        <li>Thống kê điểm số</li>
      </ul>
    </div>
  );
}
