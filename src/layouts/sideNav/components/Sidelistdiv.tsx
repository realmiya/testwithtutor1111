import React from "react";
import styles from "../SideNav.module.scss";
import navigationContent from "./Sidelistcontent";

interface SideListDivUnfolded {
    unfolded: boolean;
}
const SideListDiv: React.FC<SideListDivUnfolded> = ({ unfolded }) => (
    <>
        {navigationContent.map((value) => (
            <li className={styles.menuItem} key={value.id}>
                <div className={styles.menuIcon}>
                    <div className="icon">
                        <value.menuIcon size={20} />
                    </div>
                </div>
                {unfolded && (
                    <div className={styles.menuName}>{value.menuName}</div>
                )}
            </li>
        ))}
    </>
);
export default SideListDiv;
