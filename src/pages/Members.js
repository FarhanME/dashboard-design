import React, { useState } from "react";
import {
  Avatar,
  Button,
  Checkbox,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@material-ui/core";
import { useStyles } from "../styles";
import {
  ChevronLeftOutlined,
  ChevronRightOutlined,
  CloudDownloadOutlined,
  DeleteOutline,
  FileCopyOutlined,
  KeyboardArrowDown,
  Notifications,
} from "@material-ui/icons";
import DataTable from "../components/DataTable";
import PageNavbar from "../components/pageNavbar";

const Members = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainCont}>
      <PageNavbar />
      <DataTable />
    </div>
  );
};

export default Members;
