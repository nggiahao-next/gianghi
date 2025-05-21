import Image from "next/image";       
import styles from "./product.module.css";  
import Link from "next/link";

export default function Product(props) {    
    const {product} = props;

    return (
        // <div className={styles.mainContent}> 
        <div className={styles.product}>
            <Link href={`/${product._id}`}>
            <div className={styles.imgproduct}>
                <div className={styles.productImg}>
                    <Image 
                        src={`/${product.productImg}`}
                        alt="" 
                        width={180} 
                        height={150}
                        />
                </div>
                <div className={styles.productName}>
                    <h3>{product.productName}</h3>
                </div>
                <div className={styles.productPrice}>
                    <strong className={styles.price}>
                        {(
                            product.productPrice -
                            (product.productPrice * product.discount) / 100
                            ).toLocaleString("vi-VN")}
                            ₫
                    </strong>
                    <span className={styles.discount}>
                        <label className={styles.oldPrice}>
                        {product.productPrice.toLocaleString("vi-VN")}₫
                        </label>
                        <small className={styles.percent}>
                        -{product.discount}%
                        </small>
                    </span>
                </div>
                <div className={styles.productRemain}>
                    <Image 
                        src="/flash-sale.png" 
                        alt="sale" 
                        width={20} 
                        height={20}
                    />
                    <span>Còn {product.productRemain}/{product.productTotal} suất</span>
                </div>
            </div>
            </Link>
            <div className={styles.btnproduct}>
                <Link href="/giohang">Mua ngay</Link>
            </div>
            
            </div>
        // </div>
    );
}