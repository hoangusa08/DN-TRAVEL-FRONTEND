import { Table } from "react-bootstrap";
import TopBarMenu from "../../../components/TopBarMenu/TopBarMenu";
import UserNavigation from "../Component/UserNavigation";
import "./TourFuture.scss";

export default function TourFuture() {
  return (
    <div>
      <TopBarMenu />
      <div className="tour-future-ctn">
        <UserNavigation />
        <div style={{ width: "100%", minHeight: "90vh", marginTop: "20px", padding:"10px"}}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Stt</th>
                <th>Tour</th>
                <th>Nha Cung Cap</th>
                <th>Tinh Trang</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
