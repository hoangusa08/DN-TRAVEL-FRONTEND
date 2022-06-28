import React from "react";
import { Col, Row } from "react-bootstrap";
import MainLayout from "../../layout/MainLayout";
import "./Contact.scss";

const contact = [
  {
    img: "https://webaffiliatevn.com/wp-content/uploads/2020/08/IMGLOGO_Primary_CMYK_Blue_Rel_webready.jpg",
    title: "+ 7 triệu lượt khách",
    content: `Tổng lượt khách tham quan, du lịch đến Đà Nẵng ước cả năm 2018 là
    7.660.000 lượt khách, tăng 15,5% so với năm 2017, đạt 102,5 % kế
    hoạch. Web Du Lịch Đà Nẵng luôn đồng hành với quý khách khi đến với
    thành phố Đà Nẵng.`,
  },
  {
    img: "https://webaffiliatevn.com/wp-content/uploads/2020/08/IMGLOGO_Primary_CMYK_Blue_Rel_webready.jpg",
    title: "+ 40 điểm đến Đà Nẵng",
    content: `Ngoài những điểm du lịch nổi tiếng của Đà Nẵng như: Cầu Rồng, bán đảo Sơn Trà, 
    Bà Nà Hill, bãi biển Mỹ Khê… Vẫn còn hơn 30 điểm du lịch nổi tiếng tai Đà Nẵng mà bạn cần chuẩn bị tinh thần trước khi đến du lịch Đà Nẵng nhé`,
  },
  {
    img: "https://webaffiliatevn.com/wp-content/uploads/2020/08/IMGLOGO_Primary_CMYK_Blue_Rel_webready.jpg",
    title: "Hỗ trợ 24/7",
    content: `Với đội ngũ nhân viên chuyên nghiệp, trẻ trung, tận tình, WDLDN hỗ trợ tư vấn Free cho bạn 24/7. Nếu bạn đến Đà Nẵng cần sự tư vấn về khách sạn, điểm đến, tour du lịch, ẩm thực Đà Nẵng…WDLDN sẽ hỗ trợ cho bạn.`,
  },
  {
    img: "https://webaffiliatevn.com/wp-content/uploads/2020/08/IMGLOGO_Primary_CMYK_Blue_Rel_webready.jpg",
    title: "Hệ thống online",
    content: `Hiện tai hệ thống đã hỗ trợ cho bạn book tour trực tuyến qua email, điện thoại hoặc website. Chỉ cần đặt chỗ, sẽ được bộ phận tư vấn gọi lại cho bạn! Mọi thông tin vui lòng liên hệ 0934.579.759 hoặc Email: booking@webdulichdanang.com`,
  },
  {
    img: "https://webaffiliatevn.com/wp-content/uploads/2020/08/IMGLOGO_Primary_CMYK_Blue_Rel_webready.jpg",
    title: "Thổ địa Đà Thành",
    content: `Web Du Lịch Đà Nẵng tự hào là thương hiệu của thổ địa. Đội ngũ hướng dẫn viên chính hiệu bản xứ của chúng tôi không chỉ am hiểu tường tận mọi ngóc ngách, danh lam, thắng cảnh tại Đà Nẵng, Hội An, Huế và Miền Trung mà còn là những người thiết kế đích thực cho từng hành trình khám phá của bạn.`,
  },
  {
    img: "https://webaffiliatevn.com/wp-content/uploads/2020/08/IMGLOGO_Primary_CMYK_Blue_Rel_webready.jpg",
    title: "Dịch vụ trực tiếp",
    content: `Các dịch vụ của Web Du Lịch Đà Nẵng đơn giản là dịch vụ trực tiếp, chúng tôi cung cấp cho bạn những cập nhật mới nhất cũng như nhanh chóng truy cập vào các giao dịch tốt nhất, nhanh nhất và hiệu quả nhất tại Miền Trung, Việt Nam.`,
  },
];
export default function Contact() {
  return (
    <MainLayout>
      <div className="contact">
        <div className="contact-header">
          <h1>WEB DU LỊCH ĐÀ NẴNG</h1>
          <div className="content">
            Là đơn vị chuyên tổ chức tour du lịch, team building, du lịch kết
            hợp team builng hàng đầu tại Đà Nẵng, với các sản phẩm du lịch được
            thiết kế tỉ mỉ và chọn lọc nhằm hướng đến giá trị đích thực của một
            kỳ nghỉ với phương châm mỗi hành trình là một trải nghiệm độc đáo
          </div>
        </div>
        <Row>
          <Col>
            <Item contact={contact[0]} />
          </Col>
          <Col>
            <Item contact={contact[1]} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Item contact={contact[2]} />
          </Col>
          <Col>
            <Item contact={contact[3]} />
          </Col>
        </Row>
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
