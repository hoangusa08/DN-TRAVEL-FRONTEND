import React from "react";
import { Col, Row } from "react-bootstrap";
import MainLayout from "../../layout/MainLayout";
import "./Contact.scss";
import I1 from "../../assets/image/1.jpg";
import I2 from "../../assets/image/2.jpg";
import I3 from "../../assets/image/3.png";
import I4 from "../../assets/image/4.jpg";
import I5 from "../../assets/image/5.jpg";
import I6 from "../../assets/image/6.jpg";

const contact = [
  {
    img: I1,
    title: "+ 7 triệu lượt khách",
    content: `Tổng lượt khách tham quan, du lịch đến Việt Nam ước cả năm 2018 là 7.660.000 lượt khách, tăng 15,5% so với năm 2017, đạt 102,5 % kế hoạch. Viet Travel luôn đồng hành với quý khách khi đến với Việt Nam.`,
  },
  {
    img: I2,
    title: "+ Điểm đến Việt Nam",
    content: `Đất nước Việt Nam cong cong hình chữ S có nhiều danh thắng mang vẻ đẹp tự nhiên, cùng nền văn hoá đặc sắc là điểm đến tuyệt vời trong mắt du khách. Miền Bắc có Sapa, Hà Giang, Ninh Bình, Hạ Long. Miền Trung có Huế, Quảng Bình, Đà Nẵng. Miền Nam có Hồ Chí Minh, Phú Quốc, đồng bằng sông Cửu Long`,
  },
  {
    img: I3,
    title: "Hỗ trợ 24/7",
    content: `Với đội ngũ nhân viên chuyên nghiệp, trẻ trung, tận tình, Viet Travel hỗ trợ tư vấn Free cho bạn 24/7. Nếu bạn cần sự tư vấn Viet Travel sẽ hỗ trợ cho bạn.`,
  },
  {
    img: I4,
    title: "Hệ thống online",
    content: `Hiện tai hệ thống đã hỗ trợ cho bạn book tour trực tuyến qua email, điện thoại hoặc website. Chỉ cần đặt chỗ, sẽ được bộ phận tư vấn gọi lại cho bạn! Mọi thông tin vui lòng liên hệ 0934.579.759 hoặc Email: viettravel@gmail.com`,
  },
  {
    img: I5,
    title: "Dịch vụ cao cấp.",
    content: `Viet Travel tự hào là thương hiệu của thổ địa. Đội ngũ nhân viên đầy kinh nghiệm, chúng tôi sẽ cung cấp cho bạn những dịch vụ tuyệt với nhất.`,
  },
  {
    img: I6,
    title: "Dịch vụ trực tiếp",
    content: `Các dịch vụ của Viet Travel đơn giản là dịch vụ trực tiếp, chúng tôi cung cấp cho bạn những cập nhật mới nhất cũng như nhanh chóng truy cập vào các giao dịch tốt nhất, nhanh nhất và hiệu quả nhất tại Việt Nam.`,
  },
];
const magrin = { marginBottom: "20px" };
export default function Contact() {
  return (
    <MainLayout>
      <div className="contact">
        <div className="contact-header">
          <h1>WEB VIET TRAVEL</h1>
          <div className="content">
            Là đơn vị chuyên cung cấp tour du lịch, team building, du lịch kết
            hợp team building hàng đầu tại Việt Nam, với các sản phẩm du lịch
            được thiết kế tỉ mỉ và chọn lọc nhằm hướng đến giá trị đích thực của
            một kỳ nghỉ với phương châm mỗi hành trình là một trải nghiệm độc
            đáo
          </div>
        </div>
        <div style={magrin}></div>
        <Row>
          <Col>
            <Item contact={contact[0]} />
          </Col>
          <Col>
            <Item contact={contact[1]} />
          </Col>
        </Row>
        <div style={magrin}></div>
        <Row>
          <Col>
            <Item contact={contact[2]} />
          </Col>
          <Col>
            <Item contact={contact[3]} />
          </Col>
        </Row>
        <div style={magrin}></div>
        <Row>
          <Col>
            <Item contact={contact[4]} />
          </Col>
          <Col>
            <Item contact={contact[5]} />
          </Col>
        </Row>
      </div>
    </MainLayout>
  );
}

const Item = ({ contact }) => {
  return (
    <div className="contact-block">
      <div className="left">
        <img src={contact?.img} alt="" />
      </div>
      <div className="right">
        <h3 className="title">{contact?.title.toUpperCase()}</h3>
        <div className="content">{contact.content}</div>
      </div>
    </div>
  );
};
