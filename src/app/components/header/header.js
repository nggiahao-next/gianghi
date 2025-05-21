import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";

export function Header() {
    return (
        <div className="header">
            <header className={styles.header}>
        <navbar className={styles.navbar}>
          <ul>
            <li><Link href="/">Trang chủ</Link></li>
            <li><Link href="/gioithieu">Giới thiệu</Link></li>
            <li><Link href="/chitietsanpham">Chi tiết</Link></li>
          
            <li><Link href="/lienhe">Liên Hệ</Link></li>
          </ul>
        </navbar>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="hellu" width={100} height={100} priority/>
            <div className={styles.name}>
              {/* <h1 className={styles.h1}>hellu</h1> */}
            </div>
        </div>
      </header>
        </div>
    );
}