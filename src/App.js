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
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginTop: 60,
          }}
        >
          <div
            style={{
              height: 50,
              width: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 25,
              background: "#9f6060",
            }}
          >
            <img src={logo} alt="img" style={{ height: 50, width: 50 }}></img>
          </div>

          <div>LeagueX gaming pvt ltd</div>
          <div>The Ultimate Fantasy Sports</div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: 110,
            marginRight: 16,
          }}
        >
          <div>www.Leaguex.com</div>
        </div>
      </div>
    </div>
  );
}

export default App;
