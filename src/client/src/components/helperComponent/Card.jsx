import React, { Component } from "react";
import styles from "./card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCheckCircle, faWifi, faCarBattery } from "@fortawesome/free-solid-svg-icons";

export default class Card extends Component {
  render() {
    return (
      <div class="card mt-5  ">
        <div class="row no-gutters" id={styles.imgContainer}>
          <div class="col-md-4">
            <img src="/images/bed.webp" class="card-img" alt="..." id={styles.imageFit} />
          </div>
          <div className="col-1 d-flex flex-column justify-content-center">
            <img src="/images/bed.webp" class="card-img p-1 h-25" alt="" />
            <img src="/images/bed.webp" class="card-img p-1 h-25" alt="" />
            <img src="/images/bed.webp" class="card-img p-1 h-25" alt="" />
            <img src="/images/bed.webp" class="card-img p-1 h-25" alt="" />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h5 class="card-title m-0" id={styles.cardTitle}>
                OYO Flagship 74641 Delightful Stay Em Byepass
              </h5>
              <div id={styles.location}> kolkata , kolkata </div>
              <div className="mt-3">
                <div className="col-4 p-0" id={styles.ratingContainer}>
                  <span id={styles.rating}>
                    <span className="text-white">4.7</span>
                    <span>
                      <FontAwesomeIcon icon={faStar} color="#fff" size="sm" />
                    </span>
                  </span>
                  <span>(32 Rating)</span>
                  <span>Excellent</span>
                </div>
              </div>
              <div className="col-12 d-flex p-0 mt-2 " id={styles.amenity}>
                <div id={styles.amenityWrapper}>
                  <span>
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </span>
                  <span>Recptions</span>
                </div>
                <div id={styles.amenityWrapper}>
                  <span>
                    <FontAwesomeIcon icon={faWifi} />
                  </span>
                  <span>Wifi</span>
                </div>
                <div id={styles.amenityWrapper}>
                  <span>
                    <FontAwesomeIcon icon={faCarBattery} />
                  </span>
                  <span>Power backup</span>
                </div>
                <div>+ 11 more</div>
              </div>
              <div id={styles.facility}>
                <span>Included BreakFast</span>
                <span>santised stay</span>
                <span>operated by Eyo</span>
              </div>
              <div className="d-flex justify-content-between mt-3 ">
                <div>
                  <div>
                    <span id={styles.price}>$ 915</span>
                    <span id={styles.slashPrice}>$ 915</span>
                    <span id={styles.percentage}>40 % off</span>
                  </div>
                  <div id={styles.pernight}>per room per night</div>
                </div>
                <div>
                  <button id={styles.whilteButton}>View details</button>
                  <button id={styles.greenButton}>Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}