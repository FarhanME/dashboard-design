import React, { useState } from "react";
import {
  Button,
  Modal,
  Typography,
  Fade,
  IconButton,
  TextField,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const AttachmentModal = ({ label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [hovered, setHovered] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };


  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };


  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div style={{ background: "white" }}>
      <Button
        variant="contained"
        onClick={handleOpen}
        style={{
          background: "#2A3958",
          borderRadius: "10px",
          color: "#FFFFFF",
          position: "relative",
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        {label}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "#2A3958",
            opacity: 0.5,
            transform: isOpen ? "scale(3)" : "scale(0)",
            transformOrigin: "center center",
            transition: "transform 0.3s ease",
          }}
        />
      </Button>
      <Modal
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition // Enable smooth closing transition
      >
        <Fade in={isOpen} timeout={300}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: isOpen
                ? "translate(-50%, -50%) scale(1)"
                : "translate(-50%, -50%) scale(0)",
              background: "white",
              paddingBottom: "1rem",
              borderRadius: "12px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              width: "800px",
              height: "464px",
              transition: "transform 0.3s ease",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "1rem",
                height: "72px",
              }}
            >
              <Typography
                style={{
                  fontFamily: "Pretendard",
                  fontWeight: "600",
                  padding: "1rem",
                  fontSize: "18px",
                }}
              >
                투자유형 변경
              </Typography>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </div>
            <hr style={{ width: "798px", marginBottom: "1rem" }} />
            <div
              style={{
                width: "752px",
                height: "200px",
                border: "1px solid #D7D8DA",
                margin: "1rem",
                marginLeft: "24px",
                borderRadius: "2px",
              }}
            >
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: "160px",
                    height: "200px",
                    background: "#EEF0F4",
                    borderRadius: "4px",
                  }}
                >
                  <div
                    style={{
                      height: "50px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderBottom: "1px solid white",
                    }}
                  >
                    회원번호
                  </div>
                  <div
                    style={{
                      height: "50px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderBottom: "1px solid white",
                    }}
                  >
                    회원명/법인명
                  </div>
                  <div
                    style={{
                      height: "50px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderBottom: "1px solid white",
                    }}
                  >
                    투자유형
                  </div>
                  <div
                    style={{
                      height: "50px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderBottom: "1px solid white",
                    }}
                  >
                    서류첨부
                  </div>
                </div>
                <div
                  style={{
                    width: "592px",
                    height: "200px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      height: "50px",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      borderBottom: "1px solid lightgrey",
                    }}
                  >
                    <span style={{ marginLeft: "1rem" }}>abc111</span>
                  </div>
                  <div
                    style={{
                      height: "50px",
                      width: "100%",

                      display: "flex",
                      alignItems: "center",
                      borderBottom: "1px solid lightgrey",
                    }}
                  >
                    <span style={{ marginLeft: "1rem" }}>김길동</span>
                  </div>
                  <div
                    style={{
                      height: "50px",
                      width: "100%",

                      display: "flex",
                      alignItems: "center",
                      borderBottom: "1px solid lightgrey",
                    }}
                  >
                    <select
                      style={{
                        borderRadius: "5px",
                        padding: "6px",
                        marginLeft: "1rem",
                        marginRight: "10px",
                      }}
                    >
                      <option value="option1">일반개인</option>
                      <option value="option2">소득적격</option>
                      <option value="option3">개인전문</option>
                      <option value="option3">법인</option>
                      <option value="option3">여신금융</option>
                      <option value="option3">P2P온투</option>
                    </select>
                  </div>
                  <div
                    style={{
                      height: "50px",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <label
                      htmlFor="upload-button"
                      style={{ marginLeft: "1rem" }}
                    >
                      <Button
                        variant="contained"
                        component="span"
                        style={{ background: "rgb(238, 240, 244)" }}
                      >
                        파일 선택
                      </Button>
                    </label>
                    <input
                      id="upload-button"
                      type="file"
                      style={{ display: "none" }}
                      accept=".jpg, .jpeg, .gif, .png, .pdf"
                      onChange={handleFileUpload}
                    />
                    {selectedFile && (
                      <div style={{ marginLeft: "0.5rem" , textDecoration: "underline", color: "#5A616A"}}>
                        <span>{selectedFile.name}</span>
                        <IconButton
                          variant="outlined"
                          size="small"
                          onClick={handleRemoveFile}
                          style={{ marginLeft: "0.5rem" }}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0 7.5C0 5.51088 0.790176 3.60322 2.1967 2.1967C3.60322 0.790176 5.51088 0 7.5 0C9.48912 0 11.3968 0.790176 12.8033 2.1967C14.2098 3.60322 15 5.51088 15 7.5C15 9.48912 14.2098 11.3968 12.8033 12.8033C11.3968 14.2098 9.48912 15 7.5 15C5.51088 15 3.60322 14.2098 2.1967 12.8033C0.790176 11.3968 0 9.48912 0 7.5ZM10.146 10.854L7.5 8.207L4.854 10.854L4.146 10.147L6.793 7.5L4.146 4.854L4.854 4.146L7.5 6.793L10.146 4.146L10.854 4.854L8.207 7.5L10.854 10.146L10.147 10.854H10.146Z"
                              fill="#DDE0E6"
                            />
                            <path
                              fill="#2A3958"
                              d="M10.146 10.854L7.5 8.207L4.854 10.854L4.146 10.147L6.793 7.5L4.146 4.854L4.854 4.146L7.5 6.793L10.146 4.146L10.854 4.854L8.207 7.5L10.854 10.146L10.147 10.854H10.146Z"
                              opacity={hovered ? "1" : "0"}
                            />
                          </svg>
                        </IconButton>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div style={{ margin: "auto 0.5rem" }}>
              <ul style={{ fontSize: "14px" }}>
                <li>파일 형식은 jpg, jpeg, gif, png, pdf만 가능합니다.</li>
                <li>최대 10개,100MB까지 등록이 가능합니다.</li>
              </ul>
            </div>
            <hr style={{ width: "798px", marginBottom: "1rem" }} />
            <div
              style={{
                height: "92px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                style={{
                  background: "#2A3958",
                  borderRadius: "10px",
                  color: "#FFFFFF",
                  marginRight: "1rem",
                }}
              >
                저장
              </Button>
              <Button
                variant="outlined"
                style={{
                  borderRadius: "10px",
                }}
              >
                취소
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default AttachmentModal;
