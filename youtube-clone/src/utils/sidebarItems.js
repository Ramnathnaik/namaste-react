import HomeIcon from "@mui/icons-material/Home";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import ScienceIcon from "@mui/icons-material/Science";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import PetsIcon from "@mui/icons-material/Pets";

export const SIDEBAR_ICON_TITLE_SECTION_1 = [
  {
    id: 1,
    icon: HomeIcon,
    title: "Home",
    to: "/",
    category: -1,
  },
  {
    id: 2,
    icon: GroupWorkIcon,
    title: "Films",
    to: "/category?categoryId=1",
    category: 1,
  },
  {
    id: 3,
    icon: PeopleAltIcon,
    title: "People",
    to: "/category?categoryId=22",
    category: 22,
  },
];

export const SIDEBAR_ICON_TITLE_SECTION_2 = [
  {
    id: 1,
    icon: TheaterComedyIcon,
    title: "Comedy",
    to: "/category?categoryId=23",
    category: 23,
  },
  {
    id: 2,
    icon: ScienceIcon,
    title: "Science",
    to: "/category?categoryId=28",
    category: 28,
  },
];

export const SIDEBAR_ICON_TITLE_SECTION_3 = [
  {
    id: 1,
    icon: WhatshotIcon,
    title: "Entertainment",
    to: "/category?categoryId=24",
    category: 24,
  },
  {
    id: 2,
    icon: TwoWheelerIcon,
    title: "Autos & Vehicles",
    to: "/category?categoryId=2",
    category: 2,
  },
  {
    id: 3,
    icon: PetsIcon,
    title: "Pets & Animals",
    to: "/category?categoryId=15",
    category: 15,
  },
  {
    id: 4,
    icon: MusicNoteIcon,
    title: "Music",
    to: "/category?categoryId=10",
    category: 10,
  },
  {
    id: 5,
    icon: LiveTvIcon,
    title: "Live",
    to: "/live",
    category: 11,
  },
  {
    id: 6,
    icon: SportsEsportsIcon,
    title: "Gaming",
    to: "/category?categoryId=20",
    category: 20,
  },
  {
    id: 7,
    icon: NewspaperIcon,
    title: "News",
    to: "/category?categoryId=25",
    category: 25,
  },
  {
    id: 8,
    icon: EmojiEventsIcon,
    title: "Sports",
    to: "/category?categoryId=17",
    category: 17,
  },
];
