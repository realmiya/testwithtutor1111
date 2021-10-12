/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styles from "./SideNav.module.scss";
import SideListDiv from "./components/Sidelistdiv";

interface sideProps {
    unfolded: boolean;
    collapse: () => void;
}

const Sidebar: React.FC<sideProps> = ({ unfolded, collapse }: sideProps) => (
    <>
        <nav
            className={unfolded ? styles.sidebar : styles["sidebar--collapsed"]}
        >
            <div
                className={
                    unfolded
                        ? styles.sideWrapper
                        : styles["sideWrapper--collapsed"]
                }
            >
                <div
                    className={
                        unfolded
                            ? styles.sideWrapper__navBtn
                            : styles["sideWrapper__navBtn--collapsed"]
                    }
                >
                    {unfolded && (
                        <button
                            type="button"
                            className={styles.sideWrapper__navBtn__arrowBtn}
                            onClick={() => {
                                collapse();
                            }}
                        >
                            <FiChevronLeft />
                            Hide
                        </button>
                    )}
                    {!unfolded && (
                        <button
                            type="button"
                            className={styles.sideWrapper__navBtn__arrowBtn}
                            onClick={() => {
                                collapse();
                            }}
                        >
                            <FiChevronRight />
                            Show
                        </button>
                    )}
                </div>
                <ul
                    className={
                        unfolded
                            ? styles.sideMenu
                            : styles["sideMenu--collapsed"]
                    }
                >
                    <SideListDiv unfolded={unfolded} />
                </ul>
            </div>
        </nav>
    </>
);
export default Sidebar;
