import React from "react";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import BallotIcon from "@mui/icons-material/Ballot";
import VerifiedIcon from "@mui/icons-material/Verified";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import LogoutIcon from "@mui/icons-material/Logout";

export const SidebarData = [
  {
    id: 1,
    name: "Dashboard",
    icon: <InsertChartIcon />,
    link: "/dashboard",
  },

  {
    id: 2,
    name: "Elections",
    icon: <BallotIcon />,
    link: "/elections",
  },

  {
    id: 3,
    name: "Verification",
    icon: <VerifiedIcon />,
    link: "/verification",
  },

  {
    id: 4,
    name: "Candidates",
    icon: <SensorOccupiedIcon />,
    link: "/candidates",
  },

  {
    id: 5,
    name: "Voters",
    icon: <HowToVoteIcon />,
    link: "/voters",
  },

  {
    id: 6,
    name: "Positions",
    icon: <PeopleAltIcon />,
    link: "/positions",
  },

  {
    id: 7,
    name: "Logout",
    icon: <LogoutIcon />,
    link: "/login",
  },
];
