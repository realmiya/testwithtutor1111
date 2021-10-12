import { IconType } from "react-icons";
import { FiFileText, FiTruck, FiArchive, FiCalendar } from "react-icons/fi";
import { RiAccountCircleLine } from "react-icons/ri";

interface ISideListContent {
    id: number;
    menuIcon: IconType;
    menuName: string;
}

const navigationContent: ISideListContent[] = [
    { id: 0, menuIcon: FiFileText, menuName: "Dashboard" },
    { id: 1, menuIcon: FiTruck, menuName: "Inventory" },
    { id: 2, menuIcon: FiArchive, menuName: "Order History" },
    { id: 3, menuIcon: FiCalendar, menuName: "Calendar" },
    { id: 4, menuIcon: RiAccountCircleLine, menuName: "User Profile" },
];

export default navigationContent;
