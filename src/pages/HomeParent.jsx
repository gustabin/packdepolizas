import React from "react";
import { withRouter } from "react-router-dom";
import Swiper from "swiper";
import smoothscroll from "smoothscroll-polyfill";
import Home from "../components/Home";
import { changeDevice } from "../funciones";
import "swiper/swiper-bundle.css";

smoothscroll.polyfill();
window.__forceSmoothScrollPolyfill__ = true;

class HomeParent extends React.Component {
  componentDidMount() {
    const { history } = this.props;
    let swiperH = null;
    if (changeDevice() === "mobile") {
      swiperH = new Swiper(".swiper-container-home", {
        spaceBetween: 50,
        resistanceRatio: 0.5,
      });

      document.querySelector(".goMenu").addEventListener(
        "click",
        () => {
          swiperH.slideNext();
        },
        false
      );

      swiperH.on("slideNextTransitionStart", () => {
        setTimeout(() => {
          history.push("/home/cubre");
        }, 500);
      });
    }
  }

  render() {
    return (
      <div className="overflow-y-hidden swiper-container swiper-container-h swiper-container-home">
        <div className="swiper-wrapper">
          <div className="swiper-home swiper-slide" data-hash="Home">
            <Home />
          </div>
          <div
            className="swiper-slide swiper-pagination-hidden"
            data-hash="Menu"
          />
        </div>
      </div>
    );
  }
}

export default withRouter(HomeParent);
