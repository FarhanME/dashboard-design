import React, { useState } from "react";
import {
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
  IconButton,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// import { TablePagination, IconButton } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  // const useStyles = makeStyles({
  tableContainer: {
    marginTop: "20px",
    borderRadius: "10px",
    // marginTop: theme.spacing(2),
    overflowX: "auto",
    maxWidth: "100%",
  },
  tableHeader: {
    backgroundColor: "#EEF0F4",
    fontWeight: "bold",
  },
  greyBackground: {
    backgroundColor: "#F9F9FB",
  },
  whiteRow: {
    backgroundColor: "#FFFFFF",
  },
  redSpan: {
    background: "#FEE2E2",
    padding: "2px 10px",
    borderRadius: "10px",
  },
  greenSpan: {
    background: "#DCFCE7",
    padding: "2px 10px",
    borderRadius: "10px",
  },
  orangeSpan: {
    background: "#FFEDD5",
    padding: "2px 10px",
    borderRadius: "10px",
  },

  paginationRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    //   borderTop: `1px solid ${theme.palette.divider}`,
    //   padding: theme.spacing(1),
    // },
    // paginationButton: {
    //   marginLeft: theme.spacing(2),
  },

  // tableContainer: {
  //   marginTop: theme.spacing(2),
  //   overflowX: "auto",
  //   maxWidth: "100%",
  // },
  table: {
    minWidth: 800,
  },
  whiteSpace: {
    whiteSpace: "nowrap",
  },
  doubleArrow: {
    marginRight: 0,
  },
  paginationButton: {
    // Other styles...
    cursor: "pointer",
    // backgroundColor: "none",
    border: "none",
    background: "none",
  },
}));

const DataTable = () => {
  const classes = useStyles();
  const [selectedRows, setSelectedRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRowSelection = (event, row) => {
    if (event.target.checked) {
      setSelectedRows([...selectedRows, row]);
    } else {
      setSelectedRows(
        selectedRows.filter((selectedRow) => selectedRow.NO !== row.NO)
      );
    }
  };

  const handleSelectAllRows = (event) => {
    if (event.target.checked) {
      setSelectedRows(rows);
    } else {
      setSelectedRows([]);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const rows = [
    {
      NO: 1,
      기존유형: "소득적격",
      신청유형: "개인전문",
      제출서류: "보기",
      신청일시: "2023-01-10 09:00:00",
      승인여부: "승인대기",
      "승인거부 사유":
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      승인일시: "2023-01-10 09:00:00",
    },
    {
      NO: 2,
      기존유형: "소득적격",
      신청유형: "개인전문",
      제출서류: "보기",
      신청일시: "2023-01-10 09:00:00",
      승인여부: "승인대기",
      "승인거부 사유":
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      승인일시: "2023-01-10 09:00:00",
    },
    {
      NO: 3,
      기존유형: "소득적격",
      신청유형: "개인전문",
      제출서류: "보기",
      신청일시: "2023-01-10 09:00:00",
      승인여부: "승인대기",
      "승인거부 사유":
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      승인일시: "2023-01-10 09:00:00",
    },
    {
      NO: 4,
      기존유형: "소득적격",
      신청유형: "개인전문",
      제출서류: "보기",
      신청일시: "2023-01-10 09:00:00",
      승인여부: "승인대기",
      "승인거부 사유":
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      승인일시: "2023-01-10 09:00:00",
    },
    {
      NO: 5,
      기존유형: "소득적격",
      신청유형: "개인전문",
      제출서류: "보기",
      신청일시: "2023-01-10 09:00:00",
      승인여부: "승인대기",
      "승인거부 사유":
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      승인일시: "2023-01-10 09:00:00",
    },
    {
      NO: 6,
      기존유형: "소득적격",
      신청유형: "개인전문",
      제출서류: "보기",
      신청일시: "2023-01-10 09:00:00",
      승인여부: "승인대기",
      "승인거부 사유":
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      승인일시: "2023-01-10 09:00:00",
    },

    // Add more rows here...
  ];

  const paginatedRows = rows.slice(
    page * rowsPerPage,
    (page + 1) * rowsPerPage
  );

  const renderPaginationActions = () => (
    <div className={classes.paginationRoot}>
      <button
        className={classes.paginationButton}
        disabled={page === 0}
        onClick={() => handleChangePage(null, 0)}
      >
        <Typography variant="h6" style={{ fontSize: "1.5rem", marginRight: 0 }}>
          &lt;&lt;
        </Typography>
      </button>
      <button
        className={classes.paginationButton}
        disabled={page === 0}
        onClick={() => handleChangePage(null, page - 1)}
      >
        <Typography variant="h6" style={{ fontSize: "1.5rem", marginRight: 0 }}>
          &lt;
        </Typography>
      </button>
      {[...Array(Math.ceil(rows.length / rowsPerPage)).keys()].map(
        (pageNum) => (
          <Typography
            key={pageNum}
            style={{
              padding: "0px 10px",
              cursor: "pointer",
              borderRadius: "5px",
              color: pageNum === page ? "#FFFFFF" : undefined,
              backgroundColor: pageNum === page ? "#2A3958" : undefined,
            }}
            // variant="body2"
            // className={pageNum === page ? classes.currentPage : undefined}
            onClick={() => handleChangePage(null, pageNum)}
          >
            {pageNum + 1}
          </Typography>
        )
      )}

      <button
        className={classes.paginationButton}
        disabled={page >= Math.ceil(rows.length / rowsPerPage) - 1}
        onClick={() => handleChangePage(null, page + 1)}
      >
        <Typography
          variant="h6"
          style={{ fontSize: "1.5rem", marginLeft: 0, cursor: "pointer" }}
        >
          &gt;
        </Typography>
      </button>
      <button
        className={classes.paginationButton}
        disabled={page >= Math.ceil(rows.length / rowsPerPage) - 1}
        onClick={() =>
          handleChangePage(null, Math.ceil(rows.length / rowsPerPage) - 1)
        }
      >
        <Typography
          variant="h6"
          style={{ fontSize: "1.5rem", marginLeft: 0, cursor: "pointer" }}
        >
          &gt;&gt;
        </Typography>
      </button>
    </div>
  );

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.tableHeader}>
            <TableCell padding="checkbox">
              <Checkbox
                style={{ color: "#2A3958" }}
                checked={selectedRows.length === rows.length}
                onChange={handleSelectAllRows}
              />
            </TableCell>
            <TableCell>NO</TableCell>
            <TableCell>기존유형</TableCell>
            <TableCell>신청유형</TableCell>
            <TableCell>제출서류</TableCell>
            <TableCell>신청일시</TableCell>
            <TableCell>승인여부</TableCell>
            <TableCell>승인거부 사유</TableCell>
            <TableCell>승인일시</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedRows.map((row, index) => (
            <TableRow
              key={row.NO}
              className={
                index % 2 === 0 ? classes.whiteRow : classes.greyBackground
              }
            >
              <TableCell padding="checkbox">
                <Checkbox
                  style={{ color: "#2A3958" }}
                  checked={selectedRows.some(
                    (selectedRow) => selectedRow.NO === row.NO
                  )}
                  onChange={(event) => handleRowSelection(event, row)}
                />
              </TableCell>
              <TableCell className={classes.whiteSpace}>{row.NO}</TableCell>
              <TableCell className={classes.whiteSpace}>
                {row.기존유형}
              </TableCell>
              <TableCell className={classes.whiteSpace}>
                {row.신청유형}
              </TableCell>
              <TableCell className={classes.whiteSpace}>
                <span
                  style={{
                    background: "#D7D8DA",
                    padding: "7px 18px",
                    borderRadius: "8px",
                  }}
                >
                  {row.제출서류}
                </span>
              </TableCell>
              <TableCell className={classes.whiteSpace}>
                {row.신청일시}
              </TableCell>
              <TableCell className={classes.whiteSpace}>
                <span
                  // className={
                  //   index % 2 === 0 ? classes.orangeSpan : classes.greenSpan
                  // }
                  className={
                    index % 6 === 0
                      ? classes.redSpan
                      : index % 6 === 1
                      ? classes.greenSpan
                      : index % 6 === 2
                      ? classes.orangeSpan
                      : index % 6 === 3
                      ? classes.redSpan
                      : index % 6 === 4
                      ? classes.greenSpan
                      : classes.orangeSpan
                  }
                >
                  {row.승인여부}
                </span>
              </TableCell>
              <TableCell>{row["승인거부 사유"]}</TableCell>
              <TableCell className={classes.whiteSpace}>
                {row.승인일시}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component={renderPaginationActions}
        rowsPerPageOptions={[5, 10, 25]}
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default DataTable;
