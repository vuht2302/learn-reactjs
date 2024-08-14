import React, { useEffect, useState } from "react";

function LoveDayCounter() {
  const [currentDateTime, setCurrentDateTime] = useState("");

  // Hàm định dạng ngày và giờ hiện tại
  const getFormattedDate = () => {
    const date = new Date();

    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;
    hour = (hour < 10 ? "0" : "") + hour;
    min = (min < 10 ? "0" : "") + min;
    sec = (sec < 10 ? "0" : "") + sec;

    return `${day}/${month}/${date.getFullYear()}, ${hour}:${min}:${sec}`;
  };

  useEffect(() => {
    // Cập nhật thời gian mỗi giây
    const intervalId = setInterval(() => {
      setCurrentDateTime(getFormattedDate());
    }, 1000);

    // Hủy interval khi component bị unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <aside
        id="fh5co-aside"
        role="sidebar"
        className="text-center"
        style={{ backgroundImage: "url(images/img_bg_1_gradient.jpg)" }}
      >
        <h1 id="fh5co-logo">
          <a>Huy Vu ♥ Kim Dung</a>
        </h1>
      </aside>

      <div id="fh5co-main-content">
        <div className="dt js-dt">
          <div className="dtc js-dtc">
            <div
              className="simply-countdown-one animate-box"
              data-animate-effect="fadeInUp"
            ></div>

            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="fh5co-intro animate-box">
                      <h2>-------</h2>
                      <p>
                        Today is <span id="nuitime">{currentDateTime}</span>
                      </p>
                    </div>
                  </div>
                  <div>Album</div>
                  <div className="col-lg-12 animate-box">
                    <p>
                      &nbsp;
                      <br />
                      &nbsp;
                      <br />
                      &nbsp;
                      <br />
                      &nbsp;
                      <br />
                      &nbsp;
                      <br />
                      &nbsp;
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="fh5co-footer">
          <div className="row">
            <div className="col-md-6 fh5co-copyright"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoveDayCounter;
