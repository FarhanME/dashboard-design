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
import ExampleModal from "../components/modal";
import AttachmentModal from "../components/attachmentModal";

const PageNavbar = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.headingContainer}>
        <Typography className={classes.heading}>회원상세</Typography>
        <Typography className={classes.requiredLabel}>필수항목</Typography>
      </div>
      <hr className={classes.horizontalLine} />

      <div className={classes.horizontalMenu}>
        <div className={classes.horizontalMenuItem}>기본정보 관리</div>
        <div className={classes.horizontalMenuItem}>투자유형 관리</div>
        <div className={classes.horizontalMenuItem}>입출금내역 조회</div>
        <div className={classes.horizontalMenuItem}>영업내역 조회</div>
        <div className={classes.horizontalMenuItem}>투자내역 조회</div>
        <div className={classes.horizontalMenuItem}>채권내역 조회</div>
        <div className={classes.horizontalMenuItem}>SMS 관리</div>
        <div className={classes.horizontalMenuItem}>상담내역 관리</div>
        <div className={classes.horizontalMenuItem}>문의내역 조회</div>
      </div>

      {/* <h2 className={classes.headingLeft}>신청 목록(총 100명 | 승인대기 1건)</h2> */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className={classes.headingContainer}>
          <Typography
            style={{
              fontFamily: "Pretendard",
              fontWeight: "700",
              fontSize: "20px",
            }}
          >
            신청 목록
          </Typography>
          <Typography
            style={{
              top: "16px",
              fontFamily: "Pretendard",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "14px",
              color: "#5A616A",
              margin: "6px 0px",
            }}
          >
            (총 100명 | 승인대기 1건)
          </Typography>
        </div>
        <div>
          {/* <div className={classes.horizontalMenuRight}> */}

          <select
            style={{
              borderRadius: "5px",
              margin: "14px 10px 0px 0px",
              padding: "6px",
            }}
          >
            <option>승인여부 전체</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <select
            style={{
              borderRadius: "5px",
              margin: "14px 10px 0px 0px",
              padding: "6px",
            }}
          >
            <option>신청일시순</option>
            <option>Option A</option>
            <option>Option B</option>
            <option>Option C</option>
          </select>
          <select
            style={{
              borderRadius: "5px",
              margin: "14px 0px 0px 0px",
              padding: "6px",
            }}
          >
            <option>승인상태 변경</option>
            <option>Choice X</option>
            <option>Choice Y</option>
            <option>Choice Z</option>
          </select>
        </div>
      </div>
      <hr className={classes.horizontalLine} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          {/* <Button
            style={{
              background: "#2A3958",
              borderRadius: "10px",
              color: "#FFFFFF",
            }}
          >
            등록
          </Button> */}
          <ExampleModal label="등록" />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              fontFamily: "Pretendard",
              fontWeight: "500",
              fontSize: "14px",
              marginRight: "10px",
              color: "#5A616A",
            }}
          >
            선택한 0건
          </div>
          <select
            style={{
              borderRadius: "5px",
              padding: "6px",
              marginRight: "10px",
            }}
          >
            <option>승인상태 변경</option>
            <option>승인대기</option>
            <option>승인완료</option>
            <option>승인거부</option>
          </select>
          {/* <Button
            style={{
              borderRadius: "5px",
              padding: "6px",
            // }}
            // style={{
              background: "#2A3958",
              borderRadius: "10px",
              color: "#FFFFFF",
            }}
          >
            저장
          </Button> */}
          <AttachmentModal label="저장" />
        </div>
      </div>
    </div>
  );
};

export default PageNavbar;
