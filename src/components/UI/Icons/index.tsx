import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export {
  KeyboardBackspaceIcon,
  OpenInNewIcon,
  SearchIcon,
  PersonOutlinedIcon,
  NotificationsNoneOutlinedIcon,
  VerifiedUserOutlinedIcon,
  KeyboardArrowLeftIcon,
  ManageAccountsIcon,
  LogoutIcon,
  GroupsOutlinedIcon,
  HomeOutlinedIcon,
  VolunteerActivismOutlinedIcon,
  ContentPasteSearchOutlinedIcon,
  PhoneOutlinedIcon,
  EmailOutlinedIcon,
  CommentOutlinedIcon,
  GroupAddOutlinedIcon,
  ExpandMoreIcon,
  EditIcon,
  CloseIcon,
  MenuIcon,
  LocalMallIcon,
  PersonOutlineOutlinedIcon,
};

export type IconKey =
  | "KeyboardBackspaceIcon"
  | "OpenInNewIcon"
  | "SearchIcon"
  | "PersonOutlinedIcon"
  | "NotificationsNoneOutlinedIcon"
  | "KeyboardArrowLeftIcon"
  | "ManageAccountsIcon"
  | "LogoutIcon"
  | "GroupsOutlinedIcon"
  | "HomeOutlinedIcon"
  | "VolunteerActivismOutlinedIcon"
  | "ContentPasteSearchOutlinedIcon"
  | "PhoneOutlinedIcon"
  | "EmailOutlinedIcon"
  | "CommentOutlinedIcon"
  | "GroupAddOutlinedIcon"
  | "ExpandMoreIcon"
  | "EditIcon"
  | "CloseIcon"
  | "MenuIcon"
  | "LocalMallIcon"
  | "PersonOutlineOutlinedIcon"
  | "VerifiedUserOutlinedIcon";

interface Props {
  icon: IconKey;
}

const Icon: React.FC<Props> = ({ icon }) => {
  if (icon === "KeyboardBackspaceIcon")
    return <KeyboardBackspaceIcon color="inherit" fontSize="small" />;
  if (icon === "OpenInNewIcon")
    return <OpenInNewIcon color="inherit" fontSize="small" />;
  if (icon === "SearchIcon")
    return <SearchIcon color="inherit" fontSize="small" />;
  if (icon === "PersonOutlinedIcon")
    return <PersonOutlinedIcon color="inherit" fontSize="small" />;
  if (icon === "NotificationsNoneOutlinedIcon")
    return <NotificationsNoneOutlinedIcon color="inherit" fontSize="small" />;
  if (icon === "VerifiedUserOutlinedIcon")
    return <VerifiedUserOutlinedIcon color="inherit" fontSize="small" />;
  if (icon === "KeyboardArrowLeftIcon")
    return <KeyboardArrowLeftIcon color="inherit" fontSize="small" />;
  if (icon === "ManageAccountsIcon")
    return <ManageAccountsIcon color="inherit" fontSize="small" />;
  if (icon === "LogoutIcon")
    return <LogoutIcon color="inherit" fontSize="small" />;
  if (icon === "GroupsOutlinedIcon")
    return <GroupsOutlinedIcon color="inherit" fontSize="small" />;
  if (icon === "HomeOutlinedIcon")
    return <HomeOutlinedIcon color="inherit" fontSize="small" />;
  if (icon === "VolunteerActivismOutlinedIcon")
    return <VolunteerActivismOutlinedIcon color="inherit" fontSize="small" />;
  if (icon === "ContentPasteSearchOutlinedIcon")
    return <ContentPasteSearchOutlinedIcon color="inherit" fontSize="small" />;
  if (icon === "PhoneOutlinedIcon")
    return <PhoneOutlinedIcon color="inherit" fontSize="small" />;
  if (icon === "EmailOutlinedIcon")
    return <EmailOutlinedIcon color="inherit" fontSize="small" />;
  if (icon === "CommentOutlinedIcon")
    return <CommentOutlinedIcon color="inherit" fontSize="small" />;
  if (icon === "GroupAddOutlinedIcon")
    return <GroupAddOutlinedIcon color="inherit" fontSize="small" />;
  return null;
};

export default Icon;
