import React from "react";

export default function contact() {
    return (
        <div className="row" style={{ marginBottom: "0%" }}>
            <div className="col-md-5 img-banner">
                <div className="img-banner">
                    <div className="layer">
                        <img
                            src="./assets/img/logo-ALTA-v2@2x.png"
                            id="alterra"
                            alt="alterra"
                        />
                    </div>
                </div>
            </div>
            <div className="col-md-7 forms-a">
                <h3 style={{ fontSize: "28px" }}>Contact Us</h3>
                <form id="form1" className="needs-validation" noValidate>
                    <label
                        htmlFor="fullname"
                        className="form-text-a form-label"
                    >
                        Full Name<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="text"
                        className="form-input-a form-control"
                        id="fullname"
                        placeholder="Your Full Name Here..."
                        required
                    />
                    <div className="invalid-feedback">
                        Full name cannot be empty
                    </div>
                    <label htmlFor="email" className="form-text-a form-label">
                        Email Address<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="email"
                        className="form-input-a form-control"
                        name="email"
                        id="email"
                        placeholder="example@domail.com"
                        required
                    />
                    <div className="invalid-feedback">
                        Email address cannot be empty
                    </div>
                    <label htmlFor="phone" className="form-text-a form-label">
                        Phone Number<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="number"
                        className="form-input-a form-control"
                        id="phone"
                        placeholder="08573890xxxxx"
                        required
                    />
                    <div className="invalid-feedback">
                        Phone number cannot be empty
                    </div>
                    <label
                        htmlFor="nationality"
                        className="form-text-a form-label"
                    >
                        Nationality
                    </label>
                    <select
                        name="nationality"
                        id="nationality"
                        className="form-select"
                        style={{ height: 40 }}
                    >
                        <option value disabled selected hidden>
                            Selected
                        </option>
                        <option value="Indonesian">Indonesian</option>
                        <option value="Malaysian">Malaysian</option>
                        <option value="Singaporean">Singaporean</option>
                    </select>
                    <label htmlFor="message" className="form-text-a form-label">
                        Message
                    </label>
                    <textarea
                        name="message"
                        className="form-input-a form-control"
                        id="message"
                        style={{ height: "112px" }}
                        placeholder="Your Full Name Here..."
                        defaultValue={""}
                    />
                    {/* <button class="btn btn-primary btn-orange" type="submit" onclick="submitForm(event)">Submit</button> */}
                    {/* <a class="btn btn-primary btn-orange" role="button" onclick="submitForm()">Submit</a> */}
                    <a
                        className="btn btn-primary btn-orange"
                        href="./review_message.html"
                        role="button"
                        type="submit"
                        onclick="submitForm(event)"
                    >
                        Submit
                    </a>
                </form>
            </div>
        </div>
    );
}
