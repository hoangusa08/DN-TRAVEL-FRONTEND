import React from 'react'
import { Table } from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import TopBarMenu from '../../../components/TopBarMenu/TopBarMenu'
import UserNavigation from '../Component/UserNavigation'
import "./TourHistory.scss"

export default function TourHistory() {

  const history = useHistory();

  const handleRate = () => {
    history.push("/rateTour")
  }
  return (
    <div>
      <TopBarMenu />
      <div className="tour-history-ctn">
        <UserNavigation />
        <div style={{ width: "100%", minHeight: "90vh", marginTop: "20px" , padding:"10px"}}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Stt</th>
                <th>Tour</th>
                <th>Nha Cung Cap</th>
                <th>Tinh Trang</th>
                <th>Danh gia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td><button onClick={()=> handleRate()}>Danh Gia</button></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td><button>Danh Gia</button></td>
              </tr>
              <tr>
                <td>3</td>
                <td >Larry the Bird</td>
                <td>@twitter</td>
                <td>Thornton</td>
                <td><button>Danh Gia</button></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
   
  )
}
