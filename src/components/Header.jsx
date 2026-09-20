import "./Header.css";
export default function Header({ onLogout }) {
  return (
    <>
      <div
        className="top-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          className="header-left"
          style={{ display: "flex", alignItems: "center", gap: "15px" }}
        >
          <img src="/favicon.svg" alt="Logo" style={{ width: "45px" }} />
          <div>
            <h2 className="co-quan">Quản Lý Sinh Viên</h2>
            <h1 className="ten-phan-mem">Phần mềm hỗ trợ quản lý</h1>
          </div>
        </div>
        <div className="header-right">
          <span style={{ marginRight: "15px", fontWeight: "bold" }}>
            Xin chào, Admin
          </span>
          <button
            onClick={onLogout}
            style={{
              padding: "6px 12px",
              cursor: "pointer",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            Đăng xuất
          </button>
        </div>
      </div>
      <div className="navbar">
        <button className="nav-item">TRANG CHỦ</button>
        <button className="nav-item">CHỦ ĐỀ</button>
        <button className="nav-item active">DANH MỤC</button>
        <button className="nav-item">QUẢN TRỊ</button>
      </div>
    </>
  );
}
