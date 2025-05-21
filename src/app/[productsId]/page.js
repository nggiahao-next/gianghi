"use client";   
import Link from "next/link";
import { useEffect, useState } from "react";
import Quangcao from "../components/slider/quangcao";
import SimpleSlider from "../components/slider/slider";
import styles from "./chitietsanpham.module.css"
export default function ChiTietSanPham(params) {
    const [product, setProduct] = useState(null);
    const [productId, setProductId] = useState("");

    useEffect(() => {
        async function fetchProductId(params) {
            const { productId } = await params;
            setProductId(productId);
        }
        fetchProductId(params.params);
    }, [params]);
     
    useEffect(() => {
        async function fetchProduct(productId) {
            try {
                if (!productId) {
                    console.log("Product ID not null");
                    return;
                }
                const response = await fetch(`/api/products/${productId}`);
                const result = await response.json();
                if (response.ok) {
                    // console.log("Product:", result.data);
                    setProduct(result.data);
                } else {
                    console.error("Error fetching product:", result.error);
                }
            } catch (error) {
                console.error("Fetch error:", error);
            }
        }
        fetchProduct(productId);
    }, [productId]);
    return (
        <div className={styles.chitietsanpham}>
            {product && (
            <div className={styles.sanpham}>
                <div className={styles.hinhanh}>
                    <div className={styles.Img}>
                        <div className={styles.slider}><SimpleSlider/></div>
                    </div>
                        <div className={styles.giaodich}>
                            <div className={styles.giaban}>
                                <h3>{product?.productName}</h3>
                                <p>
                                    {(
                                        product.productPrice -
                                        (product.productPrice * product.discount) / 100
                                    )?.toLocaleString("vi-VN")}
                                    đ
                                    <span className={styles.giacu}>
                                        {product.productPrice?.toLocaleString("vi-VN")}đ    
                                    </span>
                                </p>
                            </div>
                            <div className={styles.khuyenmai}>
                                <div className={styles.quangcao}><Quangcao/></div>
                            </div>
                            <div className={styles.muangay}>
                                <div className={styles.nutmua}>
                                    <Link href="/giohang">Mua ngay</Link>
                                    <span className={styles.giaohang}>Giao tận nơi hoặc nhận tại cửa hàng</span>
                               </div>
                            </div>
                    </div> 
                </div>
                <div className={styles.mota}>
                    <div dangerouslySetInnerHTML={{ __html: product?.productDescription }}></div>
                </div>
            </div>   
            )} 
        </div>  
    );
}