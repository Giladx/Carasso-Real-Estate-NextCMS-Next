import React, { useState } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

const Timelinesection1920 = (props) => {
  const [isVisible, setIsVisible] = useState(true)
  const [red, setRed] = useState(false)
  return (
    <>
      <div className="timelinesection1920-timelinesection1920">
        <div className="timelinesection1920-container">
          <div className="timelinesection1920-center">
            <div className="timelinesection1920-header main-container">
              <span className="timelinesection1920-text">{props.text}</span>
              <div className="timelinesection1920-container1 tabs">
                <div className="timelinesection1920-years tab-titles">
                  <div className="timelinesection1920-frame292 tab-title">
                    <img
                      alt={props.line29Alt}
                      src={props.line29Src}
                      className="timelinesection1920-line29"
                    />
                    <span className="timelinesection1920-text01">
                      {props.text1}
                    </span>
                  </div>
                  <div className="timelinesection1920-frame303 tab-title">
                    <img
                      alt={props.line30Alt}
                      src={props.line30Src}
                      className="timelinesection1920-line30"
                    />
                    <span className="timelinesection1920-text02">
                      {props.text2}
                    </span>
                  </div>
                  <div className="timelinesection1920-frame296 tab-title">
                    <img
                      alt={props.line29Alt1}
                      src={props.line29Src1}
                      className="timelinesection1920-line291"
                    />
                    <span className="timelinesection1920-text03">
                      {props.text3}
                    </span>
                  </div>
                  <div className="timelinesection1920-frame298 tab-title">
                    <img
                      alt={props.line30Alt1}
                      src={props.line30Src1}
                      className="timelinesection1920-line301"
                    />
                    <span className="timelinesection1920-text04">
                      <span>2010</span>
                    </span>
                  </div>
                  <div className="timelinesection1920-frame300 tab-title">
                    <img
                      alt={props.line29Alt2}
                      src={props.line29Src2}
                      className="timelinesection1920-line292"
                    />
                    <span className="timelinesection1920-text06">
                      {props.text4}
                    </span>
                  </div>
                  <div className="timelinesection1920-frame302 tab-title">
                    <img
                      alt={props.line29Alt3}
                      src={props.line29Src3}
                      className="timelinesection1920-line293"
                    />
                    <span className="timelinesection1920-text07">
                      {props.text5}
                    </span>
                  </div>
                  <div className="timelinesection1920-frame293 tab-title">
                    <img
                      alt={props.line29Alt4}
                      src={props.line29Src4}
                      className="timelinesection1920-line294"
                    />
                    <span
                      onSelect={() => setRed(true)}
                      className="timelinesection1920-text08"
                    >
                      {props.text6}
                    </span>
                  </div>
                </div>
                <div className="timelinesection1920-content tab-contents">
                  <div className="timelinesection1920-content-tab tab-content">
                    <div className="timelinesection1920-leftcoloumn">
                      <div className="timelinesection1920-frame321">
                        <div className="timelinesection1920-frame318">
                          <img
                            alt={props.vectorAlt}
                            src={props.vectorSrc}
                            className="timelinesection1920-vector"
                          />
                          <span className="timelinesection1920-text09">
                            <span>1933</span>
                          </span>
                        </div>
                        <div className="timelinesection1920-frame320">
                          <span className="timelinesection1920-text11">
                            <span>קרסו, נעים להכיר</span>
                          </span>
                          <span className="timelinesection1920-text13">
                            <span>
                              משפחת קרסו הגיעה מפיראוס בתחילת המאה ה-20 ומאז ועד
                              היום אנחנו יוזמים מפתחים ומקימים פרויקטים מגוונים
                              ברחבי הארץ.
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <img
                      alt={props.rightcoloumnAlt}
                      src={props.rightcoloumnSrc}
                      className="timelinesection1920-rightcoloumn"
                    />
                  </div>
                  <div className="timelinesection1920-content-tab1 tab-content">
                    <div className="timelinesection1920-leftcoloumn1">
                      <div className="timelinesection1920-frame3211">
                        <div className="timelinesection1920-frame3181">
                          <img
                            alt={props.vectorAlt1}
                            src={props.vectorSrc1}
                            className="timelinesection1920-vector1"
                          />
                          <span className="timelinesection1920-text15">
                            {props.text7}
                          </span>
                        </div>
                        <div className="timelinesection1920-frame3201">
                          <span className="timelinesection1920-text16">
                            <span>קרסו, נעים להכיר</span>
                          </span>
                          <span className="timelinesection1920-text18">
                            <span>
                              משפחת קרסו הגיעה מפיראוס בתחילת המאה ה-20 ומאז ועד
                              היום אנחנו יוזמים מפתחים ומקימים פרויקטים מגוונים
                              ברחבי הארץ.
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <img
                      alt={props.rightcoloumnAlt1}
                      src={props.rightcoloumnSrc1}
                      className="timelinesection1920-rightcoloumn1"
                    />
                  </div>
                  <div className="timelinesection1920-content-tab2 tab-content">
                    <div className="timelinesection1920-leftcoloumn2">
                      <div className="timelinesection1920-frame3212">
                        <div className="timelinesection1920-frame3182">
                          <img
                            alt={props.vectorAlt2}
                            src={props.vectorSrc2}
                            className="timelinesection1920-vector2"
                          />
                          <span className="timelinesection1920-text20">
                            {props.text8}
                          </span>
                        </div>
                        <div className="timelinesection1920-frame3202">
                          <span className="timelinesection1920-text21">
                            <span>קרסו, נעים להכיר</span>
                          </span>
                          <span className="timelinesection1920-text23">
                            <span>
                              משפחת קרסו הגיעה מפיראוס בתחילת המאה ה-20 ומאז ועד
                              היום אנחנו יוזמים מפתחים ומקימים פרויקטים מגוונים
                              ברחבי הארץ.
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <img
                      alt={props.rightcoloumnAlt2}
                      src={props.rightcoloumnSrc2}
                      className="timelinesection1920-rightcoloumn2"
                    />
                  </div>
                  <div className="timelinesection1920-content-tab3 tab-content">
                    <div className="timelinesection1920-leftcoloumn3">
                      <div className="timelinesection1920-frame3213">
                        <div className="timelinesection1920-frame3183">
                          <img
                            alt={props.vectorAlt3}
                            src={props.vectorSrc3}
                            className="timelinesection1920-vector3"
                          />
                          <span className="timelinesection1920-text25">
                            {props.text9}
                          </span>
                        </div>
                        <div className="timelinesection1920-frame3203">
                          <span className="timelinesection1920-text26">
                            <span>קרסו, נעים להכיר</span>
                          </span>
                          <span className="timelinesection1920-text28">
                            <span>
                              משפחת קרסו הגיעה מפיראוס בתחילת המאה ה-20 ומאז ועד
                              היום אנחנו יוזמים מפתחים ומקימים פרויקטים מגוונים
                              ברחבי הארץ.
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <img
                      alt={props.rightcoloumnAlt3}
                      src={props.rightcoloumnSrc3}
                      className="timelinesection1920-rightcoloumn3"
                    />
                  </div>
                  <div className="timelinesection1920-content-tab4 tab-content">
                    <div className="timelinesection1920-leftcoloumn4">
                      <div className="timelinesection1920-frame3214">
                        <div className="timelinesection1920-frame3184">
                          <img
                            alt={props.vectorAlt4}
                            src={props.vectorSrc4}
                            className="timelinesection1920-vector4"
                          />
                          <span className="timelinesection1920-text30">
                            {props.text10}
                          </span>
                        </div>
                        <div className="timelinesection1920-frame3204">
                          <span className="timelinesection1920-text31">
                            <span>קרסו, נעים להכיר</span>
                          </span>
                          <span className="timelinesection1920-text33">
                            <span>
                              משפחת קרסו הגיעה מפיראוס בתחילת המאה ה-20 ומאז ועד
                              היום אנחנו יוזמים מפתחים ומקימים פרויקטים מגוונים
                              ברחבי הארץ.
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <img
                      alt={props.rightcoloumnAlt4}
                      src={props.rightcoloumnSrc4}
                      className="timelinesection1920-rightcoloumn4"
                    />
                  </div>
                  <div className="timelinesection1920-content-tab5 tab-content">
                    <div className="timelinesection1920-leftcoloumn5">
                      <div className="timelinesection1920-frame3215">
                        <div className="timelinesection1920-frame3185">
                          <img
                            alt={props.vectorAlt5}
                            src={props.vectorSrc5}
                            className="timelinesection1920-vector5"
                          />
                          <span className="timelinesection1920-text35">
                            {props.text11}
                          </span>
                        </div>
                        <div className="timelinesection1920-frame3205">
                          <span className="timelinesection1920-text36">
                            <span>קרסו, נעים להכיר</span>
                          </span>
                          <span className="timelinesection1920-text38">
                            <span>
                              משפחת קרסו הגיעה מפיראוס בתחילת המאה ה-20 ומאז ועד
                              היום אנחנו יוזמים מפתחים ומקימים פרויקטים מגוונים
                              ברחבי הארץ.
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <img
                      alt={props.rightcoloumnAlt5}
                      src={props.rightcoloumnSrc5}
                      className="timelinesection1920-rightcoloumn5"
                    />
                  </div>
                  <div className="timelinesection1920-content-tab6 tab-content">
                    <div className="timelinesection1920-leftcoloumn6">
                      <div className="timelinesection1920-frame3216">
                        <div className="timelinesection1920-frame3186">
                          <img
                            alt={props.vectorAlt6}
                            src={props.vectorSrc6}
                            className="timelinesection1920-vector6"
                          />
                          <span className="timelinesection1920-text40">
                            {props.text12}
                          </span>
                        </div>
                        <div className="timelinesection1920-frame3206">
                          <span className="timelinesection1920-text41">
                            <span>קרסו, נעים להכיר</span>
                          </span>
                          <span className="timelinesection1920-text43">
                            <span>
                              משפחת קרסו הגיעה מפיראוס בתחילת המאה ה-20 ומאז ועד
                              היום אנחנו יוזמים מפתחים ומקימים פרויקטים מגוונים
                              ברחבי הארץ.
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <img
                      alt={props.rightcoloumnAlt6}
                      src={props.rightcoloumnSrc6}
                      className="timelinesection1920-rightcoloumn6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="timelinesection1920-container3">
                <Script
                  html={`<script>
  function initTabs() {
    // find all tabs containers
    const tabsContainers = document.getElementsByClassName("tabs");

    function selectContainer(tabContents, id) {
      Array.from(tabContents).forEach((tabContent, index) => {
        tabContent.style.display = id === index ? "flex" : "none";
      });
    }

    function selectTabTitle(tabTitles, id) {
      Array.from(tabTitles).forEach((tabTitle, index) => {
        tabTitle.classList.remove("tab-title-selected");
        // set the first tab content vile selected by default
        if (id === index) {
          tabTitle.classList.add("tab-title-selected");
        }
      });
    }

    // init state and events for each tabs system
    Array.from(tabsContainers).forEach((tabsContainer) => {
      // initialisation flag
      if (tabsContainer.classList.contains("initialised")) {
        return;
      }

      tabsContainer.classList.add("initialised");

      const tabTitles = tabsContainer.getElementsByClassName("tab-title");
      const tabContents = tabsContainer.getElementsByClassName("tab-content");

      // set the first tab content selected by default
      selectContainer(tabsContainer, 0);

      // set the first tabTitle selected by default
      selectTabTitle(tabTitles, 0);

      // add events
      Array.from(tabTitles).forEach((tabTitle, index) => {
        // show corresponding content on click
        tabTitle.addEventListener("click", () => {
          selectContainer(tabContents, index);
          selectTabTitle(tabTitles, index);
        });
      });
    });
  }

  initTabs();
</script>
`}
                ></Script>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .timelinesection1920-timelinesection1920 {
            gap: 66.66667175292969px;
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(240, 240, 240, 1);
          }
          .timelinesection1920-container {
            display: flex;
            padding: 0 120.00001525878906px;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            justify-content: center;
          }
          .timelinesection1920-center {
            gap: 40px;
            display: flex;
            padding: 150px 0 0;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .timelinesection1920-header {
            gap: 80px;
            display: flex;
            align-self: stretch;
            flex-direction: column;
          }
          .timelinesection1920-text {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 42.66667175292969px;
            font-style: Light;
            text-align: center;
            font-family: 'Ploni ML v2 AAA Bold';
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timelinesection1920-years {
            gap: 56.000003814697266px;
            display: flex;
            padding: 0 413.3333740234375px;
            direction: rtl;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .timelinesection1920-frame292 {
            cursor: pointer;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            padding-top: 5px;
            flex-direction: column;
          }
          .timelinesection1920-line29 {
            width: 20px;
            height: 1px;
          }
          .timelinesection1920-text01 {
            fill: var(--dl-color-carasso-darkergray);
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 24px;
            font-style: Medium;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 500;
            line-height: 110%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-frame303 {
            cursor: pointer;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            padding-top: 5px;
            flex-direction: column;
          }
          .timelinesection1920-line30 {
            width: 7px;
            height: 1px;
          }
          .timelinesection1920-text02 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 24px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 110%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-frame296 {
            cursor: pointer;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            padding-top: 5px;
            flex-direction: column;
          }
          .timelinesection1920-line291 {
            width: 7px;
            height: 1px;
          }
          .timelinesection1920-text03 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 24px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 110%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-frame298 {
            cursor: pointer;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            padding-top: 5px;
            flex-direction: column;
          }
          .timelinesection1920-line301 {
            width: 7px;
            height: 1px;
          }
          .timelinesection1920-text04 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 24.000001907348633px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-frame300 {
            cursor: pointer;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            padding-top: 5px;
            flex-direction: column;
          }
          .timelinesection1920-line292 {
            width: 7px;
            height: 1px;
          }
          .timelinesection1920-text06 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 24px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 110%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-frame302 {
            cursor: pointer;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            padding-top: 5px;
            flex-direction: column;
          }
          .timelinesection1920-line293 {
            width: 7px;
            height: 1px;
          }
          .timelinesection1920-text07 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 24px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-frame293 {
            cursor: pointer;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            padding-top: 5px;
            flex-direction: column;
          }
          .timelinesection1920-line294 {
            width: 7px;
            height: 1px;
          }
          .timelinesection1920-text08 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 24px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-content {
            display: flex;
            padding: 66.66667175292969px 13.333334922790527px 0;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            justify-content: center;
          }
          .timelinesection1920-content-tab {
            display: flex;
            padding: 66.66667175292969px 13.333334922790527px 0;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            justify-content: center;
          }
          .timelinesection1920-leftcoloumn {
            gap: 13.333334922790527px;
            height: 515.3333740234375px;
            display: flex;
            padding: 0 42.66667175292969px 0 0;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .timelinesection1920-frame321 {
            gap: 53.33333969116211px;
            width: 472.0000305175781px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .timelinesection1920-frame318 {
            gap: 273.3333740234375px;
            display: flex;
            padding: 0 0 40px;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            border-color: rgba(255, 82, 61, 1);
            border-style: solid;
            border-width: 0 0 0.6666667461395264px;
            justify-content: space-between;
          }
          .timelinesection1920-vector {
            width: 23px;
            height: 25px;
          }
          .timelinesection1920-text09 {
            color: var(--dl-color-carasso-red);
            height: auto;
            font-size: 42.66667175292969px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA D-Bold';
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-frame320 {
            gap: 53.33333969116211px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .timelinesection1920-text11 {
            color: var(--dl-color-carasso-primaryblack);
            width: 368px;
            height: auto;
            font-size: 42.66667175292969px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-text13 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24.000001907348633px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 129.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-rightcoloumn {
            width: 493px;
            height: 440px;
          }
          .timelinesection1920-content-tab1 {
            display: none;
            padding: 66.66667175292969px 13.333334922790527px 0;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            justify-content: center;
          }
          .timelinesection1920-leftcoloumn1 {
            gap: 13.333334922790527px;
            height: 515.3333740234375px;
            display: flex;
            padding: 0 42.66667175292969px 0 0;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .timelinesection1920-frame3211 {
            gap: 53.33333969116211px;
            width: 472.0000305175781px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .timelinesection1920-frame3181 {
            gap: 273.3333740234375px;
            display: flex;
            padding: 0 0 40px;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            border-color: rgba(255, 82, 61, 1);
            border-style: solid;
            border-width: 0 0 0.6666667461395264px;
            justify-content: space-between;
          }
          .timelinesection1920-vector1 {
            width: 23px;
            height: 25px;
          }
          .timelinesection1920-text15 {
            color: var(--dl-color-carasso-red);
            height: auto;
            font-size: 42.6667px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA D-Bold';
            font-weight: 300;
            line-height: 110%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-frame3201 {
            gap: 53.33333969116211px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .timelinesection1920-text16 {
            color: var(--dl-color-carasso-primaryblack);
            width: 368px;
            height: auto;
            font-size: 42.66667175292969px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-text18 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24.000001907348633px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 129.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-rightcoloumn1 {
            width: 493px;
            height: 440px;
          }
          .timelinesection1920-content-tab2 {
            display: none;
            padding: 66.66667175292969px 13.333334922790527px 0;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            justify-content: center;
          }
          .timelinesection1920-leftcoloumn2 {
            gap: 13.333334922790527px;
            height: 515.3333740234375px;
            display: flex;
            padding: 0 42.66667175292969px 0 0;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .timelinesection1920-frame3212 {
            gap: 53.33333969116211px;
            width: 472.0000305175781px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .timelinesection1920-frame3182 {
            gap: 273.3333740234375px;
            display: flex;
            padding: 0 0 40px;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            border-color: rgba(255, 82, 61, 1);
            border-style: solid;
            border-width: 0 0 0.6666667461395264px;
            justify-content: space-between;
          }
          .timelinesection1920-vector2 {
            width: 23px;
            height: 25px;
          }
          .timelinesection1920-text20 {
            color: var(--dl-color-carasso-red);
            height: auto;
            font-size: 42.6667px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA D-Bold';
            font-weight: 300;
            line-height: 110%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-frame3202 {
            gap: 53.33333969116211px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .timelinesection1920-text21 {
            color: var(--dl-color-carasso-primaryblack);
            width: 368px;
            height: auto;
            font-size: 42.66667175292969px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-text23 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24.000001907348633px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 129.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-rightcoloumn2 {
            width: 493px;
            height: 440px;
          }
          .timelinesection1920-content-tab3 {
            display: none;
            padding: 66.66667175292969px 13.333334922790527px 0;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            justify-content: center;
          }
          .timelinesection1920-leftcoloumn3 {
            gap: 13.333334922790527px;
            height: 515.3333740234375px;
            display: flex;
            padding: 0 42.66667175292969px 0 0;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .timelinesection1920-frame3213 {
            gap: 53.33333969116211px;
            width: 472.0000305175781px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .timelinesection1920-frame3183 {
            gap: 273.3333740234375px;
            display: flex;
            padding: 0 0 40px;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            border-color: rgba(255, 82, 61, 1);
            border-style: solid;
            border-width: 0 0 0.6666667461395264px;
            justify-content: space-between;
          }
          .timelinesection1920-vector3 {
            width: 23px;
            height: 25px;
          }
          .timelinesection1920-text25 {
            color: var(--dl-color-carasso-red);
            height: auto;
            font-size: 42.6667px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA D-Bold';
            font-weight: 300;
            line-height: 110%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-frame3203 {
            gap: 53.33333969116211px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .timelinesection1920-text26 {
            color: var(--dl-color-carasso-primaryblack);
            width: 368px;
            height: auto;
            font-size: 42.66667175292969px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-text28 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24.000001907348633px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 129.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-rightcoloumn3 {
            width: 493px;
            height: 440px;
          }
          .timelinesection1920-content-tab4 {
            display: none;
            padding: 66.66667175292969px 13.333334922790527px 0;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            justify-content: center;
          }
          .timelinesection1920-leftcoloumn4 {
            gap: 13.333334922790527px;
            height: 515.3333740234375px;
            display: flex;
            padding: 0 42.66667175292969px 0 0;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .timelinesection1920-frame3214 {
            gap: 53.33333969116211px;
            width: 472.0000305175781px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .timelinesection1920-frame3184 {
            gap: 273.3333740234375px;
            display: flex;
            padding: 0 0 40px;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            border-color: rgba(255, 82, 61, 1);
            border-style: solid;
            border-width: 0 0 0.6666667461395264px;
            justify-content: space-between;
          }
          .timelinesection1920-vector4 {
            width: 23px;
            height: 25px;
          }
          .timelinesection1920-text30 {
            color: var(--dl-color-carasso-red);
            height: auto;
            font-size: 42.6667px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA D-Bold';
            font-weight: 300;
            line-height: 110%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-frame3204 {
            gap: 53.33333969116211px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .timelinesection1920-text31 {
            color: var(--dl-color-carasso-primaryblack);
            width: 368px;
            height: auto;
            font-size: 42.66667175292969px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-text33 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24.000001907348633px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 129.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-rightcoloumn4 {
            width: 493px;
            height: 440px;
          }
          .timelinesection1920-content-tab5 {
            display: none;
            padding: 66.66667175292969px 13.333334922790527px 0;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            justify-content: center;
          }
          .timelinesection1920-leftcoloumn5 {
            gap: 13.333334922790527px;
            height: 515.3333740234375px;
            display: flex;
            padding: 0 42.66667175292969px 0 0;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .timelinesection1920-frame3215 {
            gap: 53.33333969116211px;
            width: 472.0000305175781px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .timelinesection1920-frame3185 {
            gap: 273.3333740234375px;
            display: flex;
            padding: 0 0 40px;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            border-color: rgba(255, 82, 61, 1);
            border-style: solid;
            border-width: 0 0 0.6666667461395264px;
            justify-content: space-between;
          }
          .timelinesection1920-vector5 {
            width: 23px;
            height: 25px;
          }
          .timelinesection1920-text35 {
            color: var(--dl-color-carasso-red);
            height: auto;
            font-size: 42.6667px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA D-Bold';
            font-weight: 300;
            line-height: 110%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-frame3205 {
            gap: 53.33333969116211px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .timelinesection1920-text36 {
            color: var(--dl-color-carasso-primaryblack);
            width: 368px;
            height: auto;
            font-size: 42.66667175292969px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-text38 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24.000001907348633px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 129.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-rightcoloumn5 {
            width: 493px;
            height: 440px;
          }
          .timelinesection1920-content-tab6 {
            display: none;
            padding: 66.66667175292969px 13.333334922790527px 0;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            justify-content: center;
          }
          .timelinesection1920-leftcoloumn6 {
            gap: 13.333334922790527px;
            height: 515.3333740234375px;
            display: flex;
            padding: 0 42.66667175292969px 0 0;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .timelinesection1920-frame3216 {
            gap: 53.33333969116211px;
            width: 472.0000305175781px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .timelinesection1920-frame3186 {
            gap: 273.3333740234375px;
            display: flex;
            padding: 0 0 40px;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            border-color: rgba(255, 82, 61, 1);
            border-style: solid;
            border-width: 0 0 0.6666667461395264px;
            justify-content: space-between;
          }
          .timelinesection1920-vector6 {
            width: 23px;
            height: 25px;
          }
          .timelinesection1920-text40 {
            color: var(--dl-color-carasso-red);
            height: auto;
            font-size: 42.6667px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA D-Bold';
            font-weight: 300;
            line-height: 110%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-frame3206 {
            gap: 53.33333969116211px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .timelinesection1920-text41 {
            color: var(--dl-color-carasso-primaryblack);
            width: 368px;
            height: auto;
            font-size: 42.66667175292969px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-text43 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24.000001907348633px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 129.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-rightcoloumn6 {
            width: 493px;
            height: 440px;
          }
          .timelinesection1920-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

Timelinesection1920.defaultProps = {
  rightcoloumnSrc2: '/external/rightcoloumn3716-96j.svg',
  line30Src: '/external/line303716-l4p.svg',
  vectorAlt3: 'Vector3716',
  line29Alt2: 'Line293716',
  text1: '1933',
  rightcoloumnAlt4: 'rightcoloumn3716',
  text10: '2011',
  vectorSrc1: '/external/vector3716-4qw.svg',
  rightcoloumnAlt5: 'rightcoloumn3716',
  text9: '2010',
  rightcoloumnAlt2: 'rightcoloumn3716',
  vectorAlt: 'Vector3716',
  line29Src2: '/external/line293716-aerm.svg',
  line29Alt4: 'Line293716',
  vectorSrc3: '/external/vector3716-4qw.svg',
  rightcoloumnSrc5: '/external/rightcoloumn3716-96j.svg',
  text5: '2019',
  line30Src1: '/external/line303716-d1y.svg',
  vectorSrc: '/external/vector3716-4qw.svg',
  text8: '2009',
  vectorAlt2: 'Vector3716',
  vectorAlt4: 'Vector3716',
  line29Src1: '/external/line293716-ckak.svg',
  text2: '1945',
  rightcoloumnAlt6: 'rightcoloumn3716',
  line29Src4: '/external/line293716-kkr7.svg',
  line30Alt1: 'Line303716',
  line29Alt: 'Line293716',
  rightcoloumnAlt: 'rightcoloumn3716',
  text: 'הדרך שלנו לאורך השנים',
  vectorAlt1: 'Vector3716',
  line29Alt1: 'Line293716',
  rightcoloumnAlt3: 'rightcoloumn3716',
  vectorAlt6: 'Vector3716',
  vectorSrc6: '/external/vector3716-4qw.svg',
  rightcoloumnSrc6: '/external/rightcoloumn3716-96j.svg',
  rightcoloumnAlt1: 'rightcoloumn3716',
  rightcoloumnSrc1: '/external/rightcoloumn3716-96j.svg',
  rightcoloumnSrc3: '/external/rightcoloumn3716-96j.svg',
  text7: '1945',
  line29Src3: '/external/line293716-ely6.svg',
  text4: '2011',
  text12: '2022',
  vectorSrc5: '/external/vector3716-4qw.svg',
  rightcoloumnSrc: '/external/rightcoloumn3716-96j.svg',
  vectorSrc4: '/external/vector3716-4qw.svg',
  text6: '2022',
  vectorAlt5: 'Vector3716',
  rightcoloumnSrc4: '/external/rightcoloumn3716-96j.svg',
  text11: '2019',
  line29Src: '/external/line293716-ned.svg',
  vectorSrc2: '/external/vector3716-4qw.svg',
  text3: '2009',
  line29Alt3: 'Line293716',
  line30Alt: 'Line303716',
}

Timelinesection1920.propTypes = {
  rightcoloumnSrc2: PropTypes.string,
  line30Src: PropTypes.string,
  vectorAlt3: PropTypes.string,
  line29Alt2: PropTypes.string,
  text1: PropTypes.string,
  rightcoloumnAlt4: PropTypes.string,
  text10: PropTypes.string,
  vectorSrc1: PropTypes.string,
  rightcoloumnAlt5: PropTypes.string,
  text9: PropTypes.string,
  rightcoloumnAlt2: PropTypes.string,
  vectorAlt: PropTypes.string,
  line29Src2: PropTypes.string,
  line29Alt4: PropTypes.string,
  vectorSrc3: PropTypes.string,
  rightcoloumnSrc5: PropTypes.string,
  text5: PropTypes.string,
  line30Src1: PropTypes.string,
  vectorSrc: PropTypes.string,
  text8: PropTypes.string,
  vectorAlt2: PropTypes.string,
  vectorAlt4: PropTypes.string,
  line29Src1: PropTypes.string,
  text2: PropTypes.string,
  rightcoloumnAlt6: PropTypes.string,
  line29Src4: PropTypes.string,
  line30Alt1: PropTypes.string,
  line29Alt: PropTypes.string,
  rightcoloumnAlt: PropTypes.string,
  text: PropTypes.string,
  vectorAlt1: PropTypes.string,
  line29Alt1: PropTypes.string,
  rightcoloumnAlt3: PropTypes.string,
  vectorAlt6: PropTypes.string,
  vectorSrc6: PropTypes.string,
  rightcoloumnSrc6: PropTypes.string,
  rightcoloumnAlt1: PropTypes.string,
  rightcoloumnSrc1: PropTypes.string,
  rightcoloumnSrc3: PropTypes.string,
  text7: PropTypes.string,
  line29Src3: PropTypes.string,
  text4: PropTypes.string,
  text12: PropTypes.string,
  vectorSrc5: PropTypes.string,
  rightcoloumnSrc: PropTypes.string,
  vectorSrc4: PropTypes.string,
  text6: PropTypes.string,
  vectorAlt5: PropTypes.string,
  rightcoloumnSrc4: PropTypes.string,
  text11: PropTypes.string,
  line29Src: PropTypes.string,
  vectorSrc2: PropTypes.string,
  text3: PropTypes.string,
  line29Alt3: PropTypes.string,
  line30Alt: PropTypes.string,
}

export default Timelinesection1920
