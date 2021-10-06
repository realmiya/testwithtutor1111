/* eslint-disable no-sequences */
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./UpperNav.module.scss";
// import { RiAccountCircleLine } from "react-icons/ri";

interface headerProps {
  open: boolean
  // dateSTR:string;
}

function Header(props: headerProps) {

  const { open } = props;
  const [dateSTR, setDateSTR] = useState("");
  const getdate = () => {
    const monthNames: string[] = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    const newDate: Date = new Date();
    const date = newDate.getDate();
    const month = newDate.getMonth();
    const year = newDate.getFullYear();
    setDateSTR(`${date}th, ${monthNames[month]}, ${year}`);
    console.log(newDate);
    //Fri Sep 24 2021 12:59:05 GMT+1000 (Australian Eastern Standard Time)
    console.log(dateSTR);
    return dateSTR;
  };

  const [title, setTitle] = useState("Dashboard Overview");
  const gettitle = () => {
    return title;
  };
  const [name, setName] = useState("Name");
  const getname = () => {
    return name;
  };

  useEffect(() => {

    getdate(),
      gettitle(),
      getname();
    // void;
  }, []);



  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.wrapper__logopart}>
          <div className={open ? styles.logo : styles.logoclose}>
            {/* open有问题 */}
            <svg
              className={styles.logosvg}
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.2671 23.99C22.6246 23.9917 22.979 23.9229 23.3099 23.7875C23.6418 23.6517 23.9435 23.4517 24.1977 23.1989C24.452 22.9461 24.6538 22.6456 24.7915 22.3145C24.7976 22.2997 24.8036 22.2849 24.8095 22.27H25.0097C24.9788 22.5558 24.9172 22.8384 24.8252 23.1126C24.6389 23.6685 24.3326 24.1766 23.928 24.601C23.5235 25.0254 23.0306 25.3556 22.4843 25.5684C21.938 25.7812 21.3515 25.8712 20.7665 25.8322L20.7333 25.83H20.7C19.4753 25.83 18.6168 25.4894 17.9392 24.9621C17.2359 24.4147 16.6675 23.6195 16.1181 22.6114L15.7261 21.8923L14.9438 22.1349C14.0437 22.414 13.1077 22.5606 12.1653 22.57C6.46111 22.5676 1 18.1417 1 11.78C1 5.42394 6.44594 1 12.31 1C18.1701 1 23.5619 5.33717 23.4801 11.8775L23.48 11.8847L23.48 11.8919C23.483 13.5212 23.0879 15.1266 22.329 16.5684C21.5701 18.0102 20.4703 19.2448 19.1255 20.1646L18.3098 20.7225L18.858 21.5447C19.5702 22.6131 20.514 23.9885 22.2671 23.99ZM22.2671 23.99C22.2661 23.99 22.2652 23.99 22.2642 23.99L22.27 22.99M22.2671 23.99C22.2681 23.99 22.269 23.99 22.27 23.99V22.99M22.27 22.99C22.4967 22.9913 22.7215 22.9478 22.9313 22.862C23.1411 22.7761 23.3319 22.6496 23.4927 22.4898C23.6535 22.3299 23.7811 22.1399 23.8681 21.9305C23.9552 21.7212 24 21.4968 24 21.2701L22.27 22.99ZM17.86 18.82H19.59L18.9104 17.6401C19.3813 15.754 19.5967 13.8125 19.55 11.8678C19.5487 8.72809 19.0423 6.17035 17.8416 4.37218C16.5895 2.49694 14.6731 1.58 12.23 1.58C9.78362 1.58 7.8862 2.50252 6.65762 4.38463C5.48164 6.18616 5 8.74627 5 11.88C5 15.0087 5.46755 17.5696 6.64457 19.3677C7.87463 21.2468 9.78312 22.1527 12.2596 22.1401C12.9807 22.1587 13.7012 22.0863 14.4042 21.9245L15.6743 21.6324L15.0633 20.4812C14.4914 19.4039 13.8579 18.381 13.0808 17.6229C12.2852 16.8468 11.3052 16.3177 10.0866 16.3101C10.003 16.3062 9.91942 16.3053 9.83594 16.3073L9.79935 16.2158C10.5566 15.824 11.4056 15.6303 12.2662 15.6594L12.2904 15.6602L12.3146 15.6599C13.2607 15.6461 14.1933 15.8853 15.0159 16.3528C15.7109 16.7478 16.306 17.2937 16.7588 17.948L16.5214 18.82H17.83H17.86Z"
                fill="#DCE9FC"
                stroke="white"
                strokeWidth="2"
              />
            </svg>

            {open && (
              <div className={styles.logoname} style={{ color: "#3E8BFF" }}>
                Quantum
              </div>
            )}
          </div>
        </div>
        <div className={styles.rightbar}>
          <div className={styles.left}>
            <div className={styles.title}>
              <p>{title}</p>
            </div>

            <div className={styles.date}>
              <p>{dateSTR}</p>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.searchbox}>
              <button className={styles.searchbtn}>
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.44348 18.8876C4.21324 18.8876 0 14.6742 0 9.4438C0 4.21339 4.21324 0 9.44348 0C14.6737 0 18.887 4.21339 18.887 9.4438C18.887 14.6742 14.6737 18.8876 9.44348 18.8876ZM9.44348 1.45289C5.01231 1.45289 1.45284 5.01248 1.45284 9.4438C1.45284 13.8751 5.01231 17.4347 9.44348 17.4347C13.8746 17.4347 17.4341 13.8751 17.4341 9.4438C17.4341 5.01248 13.8746 1.45289 9.44348 1.45289Z"
                    fill="#666666"
                  />
                  <path
                    d="M16.4767 15.4493L23 21.9728L21.9728 23L15.4496 16.4765L16.4767 15.4493Z"
                    fill="#666666"
                  />
                </svg>
              </button>
              <input
                type="text"
                placeholder="Search"
                name="search"
                className={styles.searchinput}
              />
            </div>
            <div className={styles.alertsec}>
              <svg
                className={styles.alertsvg}
                width="29"
                height="31"
                viewBox="0 0 29 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >

                d="M13.5697 30.2072C14.1414 30.1941 14.6901 29.9791 15.1187 29.6004C15.5473 29.2217 15.8281 28.7036 15.9115 28.1378H11.1371C11.2229 28.7189 11.5168 29.2492 11.9643 29.6299C12.4117 30.0106 12.9822 30.2157 13.5697 30.2072Z"
                fill = "#666666"
        <path
                  d="M26.7399 24.3528C25.8647 23.5725 25.0984 22.678 24.4617 21.6933C23.7666 20.3341 23.35 18.8498 23.2363 17.3274V12.8435C23.2327 12.2989 23.1841 11.7554 23.0911 11.2188C22.3767 11.076 21.6901 10.8185 21.0579 10.4563C21.2989 11.2323 21.4213 12.0401 21.421 12.8526V17.3365C21.5323 19.1936 22.0431 21.0048 22.9187 22.6463C23.5453 23.6393 24.2889 24.5535 25.1334 25.3694H1.88795C2.73246 24.5535 3.47601 23.6393 4.10267 22.6463C4.97822 21.0048 5.48907 19.1936 5.60032 17.3365V12.8435C5.59554 11.7931 5.79802 10.752 6.19615 9.77987C6.59429 8.80778 7.18026 7.92376 7.92052 7.17844C8.66078 6.43312 9.54079 5.84114 10.5102 5.43639C11.4795 5.03165 12.5192 4.82209 13.5697 4.81971C15.107 4.82094 16.6099 5.27559 17.8902 6.12676C17.749 5.60846 17.6698 5.07527 17.6542 4.53833V3.9665C16.7064 3.50029 15.6883 3.19361 14.6407 3.05883V1.91517C14.6407 1.5938 14.513 1.28559 14.2858 1.05834C14.0586 0.831095 13.7503 0.70343 13.429 0.70343C13.1076 0.70343 12.7994 0.831095 12.5721 1.05834C12.3449 1.28559 12.2172 1.5938 12.2172 1.91517V3.10422C9.87156 3.43511 7.72479 4.60345 6.17326 6.39355C4.62173 8.18365 3.77021 10.4746 3.77591 12.8435V17.3274C3.66222 18.8498 3.24562 20.3341 2.55055 21.6933C1.92506 22.6757 1.17107 23.5701 0.308608 24.3528C0.211788 24.4378 0.134191 24.5425 0.0809799 24.6599C0.0277688 24.7773 0.000163196 24.9046 0 25.0335V26.2679C0 26.5087 0.0956292 26.7395 0.26585 26.9098C0.436071 27.08 0.666941 27.1756 0.90767 27.1756H26.1409C26.3816 27.1756 26.6125 27.08 26.7827 26.9098C26.9529 26.7395 27.0486 26.5087 27.0486 26.2679V25.0335C27.0484 24.9046 27.0208 24.7773 26.9676 24.6599C26.9144 24.5425 26.8368 24.4378 26.7399 24.3528Z"
                  fill="#666666"
                />

                <path
                  d="M24.4617 9.0767C26.9681 9.0767 29 7.04481 29 4.53835C29 2.03189 26.9681 0 24.4617 0C21.9552 0 19.9233 2.03189 19.9233 4.53835C19.9233 7.04481 21.9552 9.0767 24.4617 9.0767Z"
                  fill="#666666"
                />
              </svg>
            </div>

            <div className={styles.userheader}>
              {/* <R iAcco untCircl e Line size={3 0} style={{ color: "#666666 " }} /> */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="n o ne"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 1C7.7155 1 1 7.7155 1 16C1 24.2845 7.7155 31 16 31C24.2845 31 31 24.2845 31 16C31 7.7155 24.2845 1 16 1Z"
                  stroke="#666666"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.40649 25.519C4.40649 25.519 7.74999 21.25 16 21.25C24.25 21.25 27.595 25.519 27.595 25.519"
                  stroke="#666666"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 16C17.1935 16 18.3381 15.5259 19.182 14.682C20.0259 13.8381 20.5 12.6935 20.5 11.5C20.5 10.3065 20.0259 9.16193 19.182 8.31802C18.3381 7.47411 17.1935 7 16 7C14.8065 7 13.6619 7.47411 12.818 8.31802C11.9741 9.16193 11.5 10.3065 11.5 11.5C11.5 12.6935 11.9741 13.8381 12.818 14.682C13.6619 15.5259 14.8065 16 16 16V16Z"
                  stroke="#666666"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div className={styles.username}>{name} </div>
            </div>
          </div>
          {/* </div>   */}
          {/* open有问题 */}
        </div>
      </div>
    </>
  );
}

export default Header;
{/* // ReactDOM.render(< Header />, document.getElementById('root')); */ }