import React, { useState } from "react";
import { Button, Modal, Typography, Fade, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const ExampleModal = ({ label }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
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
              padding: "1rem",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              width: "400px",
              height: "150px",
              transition: "transform 0.3s ease",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="2"
                  width="30"
                  height="30"
                  rx="15"
                  fill="#FEF0C7"
                />
                <path
                  d="M15.5166 17.6853C15.5736 18.2785 15.6702 18.7194 15.803 19.0102C15.9376 19.3002 16.1764 19.4448 16.5212 19.4448C16.5856 19.4448 16.6433 19.4347 16.7005 19.423C16.7591 19.4347 16.8165 19.4448 16.8814 19.4448C17.2252 19.4448 17.4648 19.3002 17.5986 19.0102C17.7322 18.7194 17.8271 18.2785 17.8852 17.6853L18.1913 13.1052C18.2483 12.2124 18.2773 11.5719 18.2773 11.183C18.2773 10.6538 18.1393 10.2409 17.8623 9.94437C17.5843 9.64789 17.2191 9.5 16.7668 9.5C16.7427 9.5 16.7246 9.50539 16.7009 9.50633C16.6784 9.50539 16.6599 9.5 16.6365 9.5C16.1832 9.5 15.8187 9.64789 15.5412 9.94437C15.264 10.2413 15.125 10.6545 15.125 11.1833C15.125 11.5721 15.1534 12.2127 15.2113 13.1054L15.5166 17.6853ZM16.7124 21.1189C16.2732 21.1189 15.9001 21.2574 15.5902 21.5345C15.2806 21.8117 15.1255 22.1483 15.1255 22.5434C15.1255 22.9895 15.2825 23.3405 15.5942 23.5955C15.9073 23.8505 16.2725 23.978 16.6899 23.978C17.1148 23.978 17.4854 23.8524 17.8023 23.6005C18.1187 23.3492 18.2769 22.9962 18.2769 22.5439C18.2769 22.1487 18.1255 21.8122 17.8227 21.5349C17.5198 21.2574 17.1498 21.1189 16.7117 21.1189"
                  fill="#D46B08"
                />
                <rect
                  x="2"
                  y="2"
                  width="30"
                  height="30"
                  rx="15"
                  stroke="#FFFAEB"
                  stroke-width="4"
                />
              </svg>

              <IconButton onClick={handleClose}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 1L1 13M1 1L13 13"
                    stroke="#667085"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </IconButton>
            </div>
            {/* <Typography variant="h5">Modal Title</Typography> */}
            <Typography variant="body1">선택된 신청건이 없습니다.</Typography>
            <Button
              variant="contained"
              style={{
                background: "#2A3958",
                borderRadius: "10px",
                color: "#FFFFFF",
                marginTop: "1rem",
                marginLeft: "auto",
                marginRight: "auto",
                display: "block",
                width: "170px",
                padding: "auto 16px",
              }}
            >
              확인
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ExampleModal;
