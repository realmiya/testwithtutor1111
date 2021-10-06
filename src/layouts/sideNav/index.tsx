/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "./index.module.scss"
// import styled from "styled-components";
// import { RiAccountCircleLine } from "react-icons/ri";
// import { GrScorecard } from "react-icons/fi"
import {
  FiFileText,
  FiTruck,
  FiArchive,
  FiCalendar,
  FiUser,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
const feather = require("feather-icons");

function Sidebar(props:{ open: boolean; showhide:()=>void}) {
  // const { open, hideNav, showNav } = props;
  return (
    <>
      <nav className={open() ? {styles.sidebar} : {styles.sidebar}}>
        <div className={open() ? "sidewrapper" : "sidewrapperClose"}>
          {open && (
            <div className={styles.navbtn}>
              <div
                className={styles.arrowbtn}
                onClick={() => {
                  // open() ? hideNav() : showNav();
                  showhide()
                }}
              >
                <FiChevronLeft />
                Hide
              </div>
            </div>
          )}
          {!open && (
            <div className={styles.navbtn}>
              <div
                className={styles.arrowbtnShow}
                onClick={() => {
                  // open() ? hideNav() : showNav();
                  showhide()
                }}
              >
                <FiChevronRight />
                Show
              </div>
            </div>
          )}
          {open() && (
            <ul className={styles.sidemenu}>
              <li className={styles.menuitem}>
                <div className={styles.menuicon}>
                  <FiFileText size={20} />
                </div>
                <div className={styles.menuname}>Dashboard</div>
              </li>

              <li className={styles.menuitem}>
                <div className={styles.menuicon}>
                  <FiTruck size={20} />
                </div>

                <div className={styles.menuname}>Inventory</div>
              </li>

              <li className={styles.menuitem}>
                <div className={styles.menuicon}>
                  <FiArchive size={20} />
                </div>

                <div className={styles.menuname}>Order History</div>
              </li>

              <li className={styles.menuitem}>
                <div className={styles.menuicon}>
                  <FiCalendar size={20} />
                </div>
                <div className={styles.menuname}>Calendar</div>
              </li>

              <li className={styles.menuitem}>
                {/* <RiAccountCircleLine /> */}
                <div className={styles.menuicon}>
                  <FiUser
                    size={20}
                    style={{ borderRadius: "50%", border: "1px solid grey" }}
                  />
                </div>
                <div className={styles.menuname}>User Profile</div>
              </li>
            </ul>
          )}

          {!open && (
            <ul className={styles.sideMenuClose}>
              <li className={styles.menuitem}>
                <div className={styles.menuiconClose}>
                  <FiFileText size={20} />
                </div>
              </li>

              <li className={styles.menuitem}>
                <div className={styles.menuiconClose}>
                  <FiTruck size={20} />
                </div>
              </li>

              <li className={styles.menuitem}>
                <div className={styles.menuiconClose}>
                  <FiArchive size={20} />
                </div>
              </li>

              <li className={styles.menuitem}>
                <div className={styles.menuiconClose}>
                  <FiCalendar size={20} />
                </div>
              </li>

              <li className={styles.menuitem}>
                <div className={styles.menuiconClose}>
                  <FiUser
                    style={{ borderRadius: "50%", border: "1px solid" }}
                    size={20}
                  />
                </div>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
// ReactDOM.render(< Sidebar />, document.getElementById('root'));
