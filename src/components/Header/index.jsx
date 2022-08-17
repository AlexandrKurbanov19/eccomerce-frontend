import { Container } from "react-bootstrap";
import styles from "./header.module.scss";
import Link from "next/link";
import {
  UserOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <Link href="/">
            <span className={styles.logo}>logo</span>
          </Link>
          <nav className={styles.navList}>
            <Link href="/dsad">
              <span className={styles.navItem}>шорты</span>
            </Link>
            <Link href="/dsad">
              <span className={styles.navItem}>шорты</span>
            </Link>
            <Link href="/dsad">
              <span className={styles.navItem}>шорты</span>
            </Link>
            <Link href="/dsad">
              <span className={styles.navItem}>шорты</span>
            </Link>
          </nav>
          <div className={styles.userActions}>
            <Link href="/">
              <UserOutlined className={styles.icon} />
            </Link>
            <Link href="/">
              <SearchOutlined className={styles.icon} />
            </Link>
            <Link href="/">
              <ShoppingCartOutlined className={styles.icon} />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Header;
