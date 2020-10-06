import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: 300,
          width: 500,
          background: "#808080",
          borderRadius: 2,
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <img
            src={logo}
            alt="img"
            style={{
              height: 50,
              width: 50,
              border: "1px solid gray",
              borderRadius: 25,
              background: "green",
            }}
          />

          <div style={{ color: "#FFF", padding: 4 }}>
            LeagueX gaming pvt ltd
          </div>
          <div style={{ color: "#FFF", padding: 4 }}>
            The Ultimate Fantasy Sports
          </div>
        </div>

        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 10,
            right: 10,
            justifyContent: "flex-end",
          }}
        >
          <div style={{ color: "#FFF" }}>www.Leaguex.com</div>
        </div>
      </div>
    </div>
  );
}

export default App;
