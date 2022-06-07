import React from "react";
import StarRatings from "react-star-ratings";
import "./Rated.scss";

const reviews = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
export default function Rated() {
  return (
    <div className="Rated">
      <div className="star-ctn">
        <StarRatings
          starRatedColor="#f79321"
          numberOfStars={5}
          rating={5}
          starDimension="20px"
        />
        <h6 className="mota">/{5}</h6>
        <h6 className="numberReview">| 14 danh gia </h6>
      </div>
      {reviews.map((review) => (
        <RateItem></RateItem>
      ))}
    </div>
  );
}

function RateItem(props) {
  return (
    <div className="item">
      <div className="top">
        <h4>User</h4>
        <div>
          <StarRatings
            starRatedColor="#f79321"
            numberOfStars={5}
            rating={5}
            starDimension="20px"
          />
        </div>
      </div>
      <div className="body-rate-item">
        Riêng với môn Ngữ văn, cần chấm dứt học theo văn mẫu, bài mẫu, dẫn tới
        triệt tiêu sự sáng tạo của thầy và trò" (*). Đó là tuyên bố của Bộ
        trưởng Bộ Giáo dục và Đào tạo Nguyễn Kim Sơn tại Hội nghị tổng kết năm
        học 2020-2021 và triển khai năm học mới 2021-2022. Như vậy Bộ trưởng đã
        nhận ra “triệt tiêu sự sáng tạo” là một căn bệnh nặng trong việc dạy học
        ngữ văn ở nhà trường phổ thông hiện nay. Nhưng bốc bài thuốc “chấm dứt
        học theo văn mẫu, bài mẫu” liệu có ổn? Tiếc là Bộ trưởng không giải
        thích rõ “mẫu” trong “văn mẫu, bài mẫu” là gì. Theo nghĩa thông thường
        “mẫu” là mẫu mực, chuẩn, “cái theo đó có thể tạo ra hàng loạt những cái
        khác”, “cái có thể cho người ta hiểu biết về hàng loạt những cái khác
        cùng một kiểu” (**). Chắc Bộ Trưởng không dùng nghĩa phổ biến ấy, nhưng
        cách nói như trên có dẫn đến hiểu lầm, từ cực đoan này chạy sang cực
        đoan khác, chữa ngọn không chữa gốc hay không? Xin nêu một số ý kiến sau
        đây:
      </div>
    </div>
  );
}
