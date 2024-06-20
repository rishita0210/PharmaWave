// components/ProductCard.tsx
import React from 'react';
import { Product } from '@/Constant/product'
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const images = product.Images ? product.Images.split(',') : [];

  return (
    <div className={styles.productCard}>
      {images.length > 0 && (
        <img src={images[0]} alt={product.Medicine_Name} className={styles.productImage} />
      )}
      <div className={styles.productInfo}>
        <h2 className={styles.productName}>{product.Medicine_Name}</h2>
        <p className={styles.productManufacturer}>{product.Manufacturer}</p>
        <p className={styles.productDescription}>{product.Description_AI}</p>
        <p className={styles.productPrice}>${product.Discounted_Price}</p>
        <a href={product.Medicine_Link} className={styles.productLink} target="_blank" rel="noopener noreferrer">
          View Product
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
