import React from "react";

export default function Home() {
    return (
        <div className="row">
            <div className="col-md-5">
                <img
                    id="anne"
                    src="./assets/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg"
                    alt="woman"
                />
            </div>
            <div
                className="text-highlight col-md-7"
                style={{ marginTop: "12%" }}
            >
                <h4 className="content-text" style={{ fontSize: "25px" }}>
                    Hi, my name is
                </h4>
                <h1 className="context-text" style={{ fontSize: "85px" }}>
                    <strong>Anne Sullivan</strong>
                </h1>
                <h2 className="content-text" style={{ fontSize: "35px" }}>
                    I build things for the web
                </h2>
                <a
                    className="btn btn-orange"
                    href="./contact.html"
                    role="button"
                >
                    Get In Touch
                </a>
            </div>
        </div>
    );
}
