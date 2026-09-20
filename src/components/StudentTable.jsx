import "./StudentTable.css";
export default function StudentTable({ data, selectedId, onRowSelect }) {
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>Mã SV</th>
          <th>Tên đầy đủ</th>
          <th>Giới tính</th>
          <th>Chuyên ngành</th>
          <th>Điểm số</th>
          <th>Ngày sinh</th>
        </tr>
      </thead>
      <tbody>
        {data.map(function (sv) {
          const ngaySinhFormat = sv.ngaySinh
            ? sv.ngaySinh.split("-").reverse().join("/")
            : "---";
          const isSelected = selectedId === sv.id;

          return (
            <tr
              key={sv.id}
              onClick={() => onRowSelect(sv.id)}
              style={{
                cursor: "pointer",
                backgroundColor: isSelected ? "#e6f7ff" : "transparent", // Đổi màu dòng đang chọn
              }}
            >
              <td>{sv.id}</td>
              <td style={{ fontWeight: isSelected ? "bold" : "normal" }}>
                {sv.hoTen}
              </td>
              <td>{sv.gioiTinh}</td>
              <td>{sv.heDaoTao}</td>
              <td>{sv.diem}</td>
              <td>{ngaySinhFormat}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
