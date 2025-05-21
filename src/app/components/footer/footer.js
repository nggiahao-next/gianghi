import styles from "./footer.module.css"
import Image from "next/image"
export function Footer() {
    return (
        <div className={styles.footerItem}>
        <footer className={styles.footer}>    
          <section className={styles.footerSection}>
            <div className={styles.footerContent}>
              <strong>Tổng Đài Hỗ Trợ</strong>
              <ul>
                <li>
                  <span>Gọi Mua:</span>
                  <a href="#"> 1800.1060 </a>
                    (8h00 - 22h00)
                </li>
                <li>
                <span>Khiếu Nại:</span>
                  <a href="#"> 1800.1060 </a>
                    (8h00 - 22h00)
                </li>
                <li>
                <span>Bảo Hành:</span>
                  <a href="#"> 1800.1060 </a>
                    (8h00 - 22h00)
                </li>
              </ul>
            </div>
            <div className={styles.footerContent}>
              <strong>Về Công Ty</strong>
                <ul>
                  <li>Giới thiệu công ty (MWG.vn)</li>
                  <li>Tuyến dụng</li>
                  <li>Gửi góp ý, khiếu nại</li>
                  <li>Tìm siêu thị (2961 shop)</li>
                </ul>
            </div>
            <div className={styles.footerContent}>
              <strong>Thông Tin Khác</strong>
              <ul>
                  <li>Tích điểm Quà tặng VIP</li>
                  <li>Lịch sử mua hàng</li>
                  <li>Đăng ký bán hàng CTV chiết khấu cao</li>
                  <li>Tìm hiểu về mua trả chậm</li>
                  <li>Xem thêm</li>
                </ul>
            </div>
            <div className={styles.footerContent}>
              <strong>Website Cùng Tập Đoàn</strong>
              <ul className={styles.website}>
                  <li className={styles.dienmayxanh}></li>
                  <li className={styles.topzona}></li>
                  <li className={styles.bachhoaxanh}></li>
                  <li className={styles.ankhang}></li>
                  <li className={styles.avakids}></li>
                  <li className={styles.vieclam}></li>
                  <li className={styles.erablue}></li>
                  <li className={styles.kfarm}></li>
                </ul>
            </div>
          </section>
          <div className={styles.copyright}> 
            <p>© 2018. Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở KH &amp; ĐT TP.HCM cấp ngày 02/01/2007. GPMXH: 21/GP-BTTTT do Bộ Thông Tin và Truyền Thông cấp ngày 11/01/2021.</p>
            <p>Địa chỉ: 128 Trần Quang Khải, P.Tân Định, Q.1, TP.Hồ Chí Minh. Địa chỉ liên hệ và gửi chứng từ: Lô T2-1.2, Đường D1, Đ. D1, P.Tân Phú, TP.Thủ Đức, TP.Hồ Chí Minh. Điện thoại: 028 38125960.</p>
            <p>Email: cskh@thegioididong.com. Chịu trách nhiệm nội dung: Huỳnh Văn Tốt. Email:  hotrotmdt@thegioididong.com. <a rel="nofollow" href="/thoa-thuan-su-dung-trang-mxh">Xem chính sách sử dụng</a></p>
          </div>
        </footer>
      </div>
    )
}
