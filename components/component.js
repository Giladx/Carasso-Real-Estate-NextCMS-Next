import React, { useState } from 'react'

import PropTypes from 'prop-types'

const AppComponent = (props) => {
  const [detailsisVisible1, setDetailsisVisible1] = useState(false)
  const [detailsisVisible2, setDetailsisVisible2] = useState(false)
  const [detailsisVisible3, setDetailsisVisible3] = useState(false)
  return (
    <>
      <div className="app-component-container">
        <div className="app-component-herourbanrenewal">
          <div className="app-component-container1">
            <img
              alt={props.vectorAlt}
              src={props.vectorSrc}
              className="app-component-vector"
            />
            <div className="app-component-leftcoloumn">
              <div className="app-component-content">
                <div className="app-component-frame144">
                  <img
                    alt={props.flagPennantAlt}
                    src={props.flagPennantSrc}
                    className="app-component-flag-pennant"
                  />
                  <span className="app-component-text">
                    <span>​​הערך המוסף שלנו</span>
                  </span>
                  <span className="app-component-text02">
                    <span>הידע והניסיון, המומחיות, והחשיבה החדשנית</span>
                  </span>
                  <div className="app-component-frame">
                    <div
                      onClick={() => setDetailsisVisible3(!detailsisVisible3)}
                      className="app-component-frame224"
                    >
                      <img
                        alt={props.caretDownAlt}
                        src={props.caretDownSrc}
                        className="app-component-caret-down"
                      />
                      <span className="app-component-text04">
                        <span>עוד פרטים</span>
                      </span>
                    </div>
                    {detailsisVisible3 && (
                      <div className="app-component-frame226">
                        <div className="app-component-frame125">
                          <span className="app-component-text06">
                            <span>
                              12 שנות פעילות בהן צברנו ידע וניסיון רב בתחום
                              ההתחדשות העירונית
                            </span>
                          </span>
                          <img
                            alt={props.arrow7StrokeAlt1}
                            src={props.arrow7StrokeSrc1}
                            className="app-component-arrow7-stroke"
                          />
                        </div>
                        <div className="app-component-frame128">
                          <span className="app-component-text08">
                            <span>מומחים בפרויקטים עירוניים מורכבים</span>
                          </span>
                          <img
                            alt={props.arrow7StrokeAlt2}
                            src={props.arrow7StrokeSrc2}
                            className="app-component-arrow7-stroke01"
                          />
                        </div>
                        <div className="app-component-frame129">
                          <span className="app-component-text10">
                            <span>גב פיננסי רחב ויציב</span>
                          </span>
                          <img
                            alt={props.arrow7StrokeAlt3}
                            src={props.arrow7StrokeSrc3}
                            className="app-component-arrow7-stroke02"
                          />
                        </div>
                        <div className="app-component-frame127">
                          <span className="app-component-text12">
                            <span>מערך שירות אישי</span>
                          </span>
                          <img
                            alt={props.arrow7StrokeAlt4}
                            src={props.arrow7StrokeSrc4}
                            className="app-component-arrow7-stroke03"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="app-component-frame145">
                  <img
                    alt={props.flagPennantAlt1}
                    src={props.flagPennantSrc1}
                    className="app-component-flag-pennant1"
                  />
                  <span className="app-component-text14">
                    <span>דואגים להכל</span>
                  </span>
                  <span className="app-component-text16">
                    <span>
                      מימון כל ההוצאות הנדרשות לקבלת שירותים מקצועיים הקשורים
                      לפרויקט
                    </span>
                  </span>
                  <div
                    onClick={() => setDetailsisVisible2(!detailsisVisible2)}
                    className="app-component-frame1"
                  >
                    <div className="app-component-frame2241">
                      <img
                        alt={props.caretDownAlt1}
                        src={props.caretDownSrc1}
                        className="app-component-caret-down1"
                      />
                      <span className="app-component-text18">
                        <span>עוד פרטים</span>
                      </span>
                    </div>
                    {detailsisVisible2 && (
                      <div className="app-component-frame2261">
                        <div className="app-component-frame1251">
                          <span className="app-component-text20">
                            <span>דמי שכירות מלאים לאורך כל הבנייה</span>
                          </span>
                          <img
                            alt={props.arrow7StrokeAlt5}
                            src={props.arrow7StrokeSrc5}
                            className="app-component-arrow7-stroke04"
                          />
                        </div>
                        <div className="app-component-frame1281">
                          <span className="app-component-text22">
                            <span>שירותי אריזה פינוי והובלות ללא עלות</span>
                          </span>
                          <img
                            alt={props.arrow7StrokeAlt6}
                            src={props.arrow7StrokeSrc6}
                            className="app-component-arrow7-stroke05"
                          />
                        </div>
                        <div className="app-component-frame1271">
                          <span className="app-component-text24">
                            <span>שירותי תיווך לאיתור דיור חלופי</span>
                          </span>
                          <img
                            alt={props.arrow7StrokeAlt7}
                            src={props.arrow7StrokeSrc7}
                            className="app-component-arrow7-stroke06"
                          />
                        </div>
                        <div className="app-component-frame1291">
                          <span className="app-component-text26">
                            <span>
                              ליווי צמוד ופתרונות מותאמים אישית של בעלי דירות
                              מבוגרים
                            </span>
                          </span>
                          <img
                            alt={props.arrow7StrokeAlt8}
                            src={props.arrow7StrokeSrc8}
                            className="app-component-arrow7-stroke07"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="app-component-frame146">
                  <img
                    alt={props.flagPennantAlt2}
                    src={props.flagPennantSrc2}
                    className="app-component-flag-pennant2"
                  />
                  <span className="app-component-text28">
                    <span>איתך בכל שלב</span>
                  </span>
                  <span className="app-component-text30">
                    <span>
                      נעמיד לרשותכם צוות שיהיה זמין לאורך כל הדרך ובכל שלב
                      בפרויקט
                    </span>
                  </span>
                  <div className="app-component-frame2">
                    <div
                      onClick={() => setDetailsisVisible1(!detailsisVisible1)}
                      className="app-component-frame2242"
                    >
                      <img
                        alt={props.caretDownAlt2}
                        src={props.caretDownSrc2}
                        className="app-component-caret-down2"
                      />
                      <span className="app-component-text32">
                        <span>עוד פרטים</span>
                      </span>
                    </div>
                    {detailsisVisible1 && (
                      <span className="app-component-text34">
                        <span className="app-component-text35">
                          אנחנו יודעים שפרויקט מורכב כזה דורש ליווי מסור לבעלי
                          הדירות ולדיירים ולכן נעמיד לרשותכם את הצוות הנדרש
                        </span>
                        <span>
                          <span>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <span>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                        <span>
                          מחתימת החוזה, דרך הבנייה ועד לטיפול בשינויים ובכל דבר
                          אחר שתצטרכו עם מסירת הדירה.
                        </span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="app-component-content1">
                <div className="app-component-container2">
                  <div className="app-component-frame1441">
                    <img
                      alt={props.flagPennantAlt}
                      src={props.flagPennantSrc}
                      className="app-component-flag-pennant3"
                    />
                    <span className="app-component-text40">
                      <span>​​הערך המוסף שלנו</span>
                    </span>
                    <span className="app-component-text42">
                      <span>הידע והניסיון, המומחיות, והחשיבה החדשנית</span>
                    </span>
                    <div className="app-component-frame3">
                      <div
                        onClick={() => setDetailsisVisible3(!detailsisVisible3)}
                        className="app-component-frame2243"
                      >
                        <img
                          alt={props.caretDownAlt}
                          src={props.caretDownSrc}
                          className="app-component-caret-down3"
                        />
                        <span className="app-component-text44">
                          <span>עוד פרטים</span>
                        </span>
                      </div>
                      {detailsisVisible3 && (
                        <div className="app-component-frame2262">
                          <div className="app-component-frame1252">
                            <span className="app-component-text46">
                              <span>
                                12 שנות פעילות בהן צברנו ידע וניסיון רב בתחום
                                ההתחדשות העירונית
                              </span>
                            </span>
                            <img
                              alt={props.arrow7StrokeAlt1}
                              src={props.arrow7StrokeSrc1}
                              className="app-component-arrow7-stroke08"
                            />
                          </div>
                          <div className="app-component-frame1282">
                            <span className="app-component-text48">
                              <span>מומחים בפרויקטים עירוניים מורכבים</span>
                            </span>
                            <img
                              alt={props.arrow7StrokeAlt2}
                              src={props.arrow7StrokeSrc2}
                              className="app-component-arrow7-stroke09"
                            />
                          </div>
                          <div className="app-component-frame1292">
                            <span className="app-component-text50">
                              <span>גב פיננסי רחב ויציב</span>
                            </span>
                            <img
                              alt={props.arrow7StrokeAlt3}
                              src={props.arrow7StrokeSrc3}
                              className="app-component-arrow7-stroke10"
                            />
                          </div>
                          <div className="app-component-frame1272">
                            <span className="app-component-text52">
                              <span>מערך שירות אישי</span>
                            </span>
                            <img
                              alt={props.arrow7StrokeAlt4}
                              src={props.arrow7StrokeSrc4}
                              className="app-component-arrow7-stroke11"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="app-component-frame147">
                    <button className="app-component-carassobutton">
                      <div className="app-component-frame123">
                        <img
                          alt={props.arrow7StrokeAlt}
                          src={props.arrow7StrokeSrc}
                          className="app-component-arrow7-stroke12"
                        />
                        <span className="app-component-text54">
                          <span>אשמח שתחדשו גם את הבניין שלי</span>
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="app-component-container3">
                  <div className="app-component-frame1461">
                    <img
                      alt={props.flagPennantAlt2}
                      src={props.flagPennantSrc2}
                      className="app-component-flag-pennant4"
                    />
                    <span className="app-component-text56">
                      <span>איתך בכל שלב</span>
                    </span>
                    <span className="app-component-text58">
                      <span>
                        נעמיד לרשותכם צוות שיהיה זמין לאורך כל הדרך ובכל שלב
                        בפרויקט
                      </span>
                    </span>
                    <div className="app-component-frame4">
                      <div
                        onClick={() => setDetailsisVisible1(!detailsisVisible1)}
                        className="app-component-frame2244"
                      >
                        <img
                          alt={props.caretDownAlt2}
                          src={props.caretDownSrc2}
                          className="app-component-caret-down4"
                        />
                        <span className="app-component-text60">
                          <span>עוד פרטים</span>
                        </span>
                      </div>
                      {detailsisVisible1 && (
                        <span className="app-component-text62">
                          <span className="app-component-text63">
                            אנחנו יודעים שפרויקט מורכב כזה דורש ליווי מסור לבעלי
                            הדירות ולדיירים ולכן נעמיד לרשותכם את הצוות הנדרש
                          </span>
                          <span>
                            <span>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <span>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                          </span>
                          <span>
                            מחתימת החוזה, דרך הבנייה ועד לטיפול בשינויים ובכל
                            דבר אחר שתצטרכו עם מסירת הדירה.
                          </span>
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="app-component-frame1451">
                    <img
                      alt={props.flagPennantAlt1}
                      src={props.flagPennantSrc1}
                      className="app-component-flag-pennant5"
                    />
                    <span className="app-component-text68">
                      <span>דואגים להכל</span>
                    </span>
                    <span className="app-component-text70">
                      <span>
                        מימון כל ההוצאות הנדרשות לקבלת שירותים מקצועיים הקשורים
                        לפרויקט
                      </span>
                    </span>
                    <div
                      onClick={() => setDetailsisVisible2(!detailsisVisible2)}
                      className="app-component-frame5"
                    >
                      <div className="app-component-frame2245">
                        <img
                          alt={props.caretDownAlt1}
                          src={props.caretDownSrc1}
                          className="app-component-caret-down5"
                        />
                        <span className="app-component-text72">
                          <span>עוד פרטים</span>
                        </span>
                      </div>
                      {detailsisVisible2 && (
                        <div className="app-component-frame2263">
                          <div className="app-component-frame1253">
                            <span className="app-component-text74">
                              <span>דמי שכירות מלאים לאורך כל הבנייה</span>
                            </span>
                            <img
                              alt={props.arrow7StrokeAlt5}
                              src={props.arrow7StrokeSrc5}
                              className="app-component-arrow7-stroke13"
                            />
                          </div>
                          <div className="app-component-frame1283">
                            <span className="app-component-text76">
                              <span>שירותי אריזה פינוי והובלות ללא עלות</span>
                            </span>
                            <img
                              alt={props.arrow7StrokeAlt6}
                              src={props.arrow7StrokeSrc6}
                              className="app-component-arrow7-stroke14"
                            />
                          </div>
                          <div className="app-component-frame1273">
                            <span className="app-component-text78">
                              <span>שירותי תיווך לאיתור דיור חלופי</span>
                            </span>
                            <img
                              alt={props.arrow7StrokeAlt7}
                              src={props.arrow7StrokeSrc7}
                              className="app-component-arrow7-stroke15"
                            />
                          </div>
                          <div className="app-component-frame1293">
                            <span className="app-component-text80">
                              <span>
                                ליווי צמוד ופתרונות מותאמים אישית של בעלי דירות
                                מבוגרים
                              </span>
                            </span>
                            <img
                              alt={props.arrow7StrokeAlt8}
                              src={props.arrow7StrokeSrc8}
                              className="app-component-arrow7-stroke16"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="app-component-rightcoloumn">
              <span className="app-component-text82">
                <span className="app-component-text83">
                  הפרטים הקטנים
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="app-component-text84">והחשובים</span>
              </span>
              <button className="app-component-carassobutton1">
                <div className="app-component-frame1231">
                  <img
                    alt={props.arrow7StrokeAlt}
                    src={props.arrow7StrokeSrc}
                    className="app-component-arrow7-stroke17"
                  />
                  <span className="app-component-text85">
                    <span>אשמח שתחדשו גם את הבניין שלי</span>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .app-component-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-sixunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: center;
            background-color: #ecf1ef;
          }
          .app-component-herourbanrenewal {
            gap: 50px;
            width: 1440px;
            height: auto;
            display: flex;
            padding: 70px 0;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(236, 241, 239, 1);
          }
          .app-component-container1 {
            display: flex;
            padding: 0 90px;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .app-component-vector {
            top: -13px;
            left: 1078px;
            width: 544px;
            height: 408px;
            position: absolute;
          }
          .app-component-leftcoloumn {
            gap: 20px;
            display: flex;
            z-index: 1;
            align-items: flex-start;
          }
          .app-component-content {
            gap: 60px;
            display: flex;
            align-items: flex-start;
          }
          .app-component-frame144 {
            gap: 28px;
            width: 273.3333435058594px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .app-component-flag-pennant {
            width: 64px;
            height: 64px;
          }
          .app-component-text {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-text02 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            font-size: 18px;
            align-self: stretch;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: bold;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-frame {
            gap: 16px;
            cursor: pointer;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .app-component-frame224 {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .app-component-caret-down {
            width: 12px;
            height: 12px;
          }
          .app-component-text04 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-frame226 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .app-component-frame125 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .app-component-text06 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-arrow7-stroke {
            width: 8px;
            height: 7px;
          }
          .app-component-frame128 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .app-component-text08 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-arrow7-stroke01 {
            width: 8px;
            height: 7px;
          }
          .app-component-frame129 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .app-component-text10 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-arrow7-stroke02 {
            width: 8px;
            height: 7px;
          }
          .app-component-frame127 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .app-component-text12 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-arrow7-stroke03 {
            width: 8px;
            height: 7px;
          }
          .app-component-frame145 {
            gap: 28px;
            width: 273.33331298828125px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .app-component-flag-pennant1 {
            width: 64px;
            height: 64px;
          }
          .app-component-text14 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-text16 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            font-size: 18px;
            align-self: stretch;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: bold;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-frame1 {
            gap: 16px;
            cursor: pointer;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .app-component-frame2241 {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .app-component-caret-down1 {
            width: 12px;
            height: 12px;
          }
          .app-component-text18 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-frame2261 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .app-component-frame1251 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .app-component-text20 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-arrow7-stroke04 {
            width: 8px;
            height: 7px;
          }
          .app-component-frame1281 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .app-component-text22 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-arrow7-stroke05 {
            width: 8px;
            height: 7px;
          }
          .app-component-frame1271 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .app-component-text24 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-arrow7-stroke06 {
            width: 8px;
            height: 7px;
          }
          .app-component-frame1291 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .app-component-text26 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-arrow7-stroke07 {
            width: 8px;
            height: 7px;
          }
          .app-component-frame146 {
            gap: 28px;
            width: 273.33331298828125px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .app-component-flag-pennant2 {
            width: 64px;
            height: 64px;
          }
          .app-component-text28 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-text30 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            font-size: 18px;
            align-self: stretch;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: bold;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-frame2 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .app-component-frame2242 {
            gap: 8px;
            cursor: pointer;
            display: flex;
            align-items: center;
          }
          .app-component-caret-down2 {
            width: 12px;
            height: 12px;
          }
          .app-component-text32 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-text34 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            font-size: 16px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-text35 {
            font-weight: 300;
          }
          .app-component-content1 {
            gap: 60px;
            display: none;
            align-items: flex-start;
          }
          .app-component-container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .app-component-frame1441 {
            gap: 28px;
            width: 273.33331298828125px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .app-component-flag-pennant3 {
            width: 64px;
            height: 64px;
          }
          .app-component-text40 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-text42 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: bold;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-frame3 {
            gap: 16px;
            cursor: pointer;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .app-component-frame2243 {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .app-component-caret-down3 {
            width: 12px;
            height: 12px;
          }
          .app-component-text44 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-frame2262 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .app-component-frame1252 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .app-component-text46 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-arrow7-stroke08 {
            width: 8px;
            height: 7px;
          }
          .app-component-frame1282 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .app-component-text48 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-arrow7-stroke09 {
            width: 8px;
            height: 7px;
          }
          .app-component-frame1292 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .app-component-text50 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-arrow7-stroke10 {
            width: 8px;
            height: 7px;
          }
          .app-component-frame1272 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .app-component-text52 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-arrow7-stroke11 {
            width: 8px;
            height: 7px;
          }
          .app-component-frame147 {
            gap: 28px;
            width: 273.3333435058594px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .app-component-carassobutton {
            gap: 12px;
            cursor: pointer;
            display: flex;
            padding: 0 0 12px;
            align-items: flex-start;
            border-color: rgba(42, 42, 42, 1);
            border-style: solid;
            border-width: 0 0 1px;
          }
          .app-component-frame123 {
            gap: 12px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .app-component-arrow7-stroke12 {
            width: 8px;
            height: 7px;
          }
          .app-component-text54 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .app-component-frame1461 {
            gap: 28px;
            width: 273.33331298828125px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .app-component-flag-pennant4 {
            width: 64px;
            height: 64px;
          }
          .app-component-text56 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-text58 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: bold;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-frame4 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .app-component-frame2244 {
            gap: 8px;
            cursor: pointer;
            display: flex;
            align-items: center;
          }
          .app-component-caret-down4 {
            width: 12px;
            height: 12px;
          }
          .app-component-text60 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-text62 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-text63 {
            font-weight: 300;
          }
          .app-component-frame1451 {
            gap: 28px;
            width: 273.33331298828125px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .app-component-flag-pennant5 {
            width: 64px;
            height: 64px;
          }
          .app-component-text68 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-text70 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: bold;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-frame5 {
            gap: 16px;
            cursor: pointer;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .app-component-frame2245 {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .app-component-caret-down5 {
            width: 12px;
            height: 12px;
          }
          .app-component-text72 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-frame2263 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .app-component-frame1253 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .app-component-text74 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-arrow7-stroke13 {
            width: 8px;
            height: 7px;
          }
          .app-component-frame1283 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .app-component-text76 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-arrow7-stroke14 {
            width: 8px;
            height: 7px;
          }
          .app-component-frame1273 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .app-component-text78 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-arrow7-stroke15 {
            width: 8px;
            height: 7px;
          }
          .app-component-frame1293 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .app-component-text80 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-arrow7-stroke16 {
            width: 8px;
            height: 7px;
          }
          .app-component-rightcoloumn {
            gap: 10px;
            display: flex;
            z-index: 2;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-between;
          }
          .app-component-text82 {
            color: var(--dl-color-carasso-primaryblack);
            width: 224px;
            height: auto;
            font-size: 32px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 300;
            line-height: 110%;
            font-stretch: normal;
            text-decoration: none;
          }
          .app-component-carassobutton1 {
            gap: 12px;
            cursor: pointer;
            display: flex;
            padding: 0 0 12px;
            align-items: flex-start;
            border-color: rgba(42, 42, 42, 1);
            border-style: solid;
            border-width: 0 0 1px;
          }
          .app-component-frame1231 {
            gap: 12px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .app-component-arrow7-stroke17 {
            width: 8px;
            height: 7px;
          }
          .app-component-text85 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Bold';
            font-weight: bold;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          @media (max-width: 1440px) {
            .app-component-herourbanrenewal {
              width: 100%;
              overflow: hidden;
            }
            .app-component-container1 {
              width: 100%;
            }
          }
          @media (max-width: 1200px) {
            .app-component-herourbanrenewal {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .app-component-container1 {
              gap: 20px;
              padding-left: 30px;
              padding-right: 30px;
            }
            .app-component-content {
              gap: 30px;
            }
            .app-component-text02 {
              font-weight: bold;
            }
            .app-component-text16 {
              font-weight: bold;
            }
            .app-component-text30 {
              font-weight: bold;
            }
            .app-component-content1 {
              display: none;
            }
            .app-component-text42 {
              font-weight: bold;
            }
            .app-component-text58 {
              font-weight: bold;
            }
            .app-component-text70 {
              font-weight: bold;
            }
          }
          @media (max-width: 991px) {
            .app-component-herourbanrenewal {
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
            }
            .app-component-container1 {
              align-self: center;
              align-items: center;
              flex-direction: column-reverse;
              justify-content: center;
            }
            .app-component-leftcoloumn {
              width: 100%;
              align-self: flex-end;
              flex-direction: row-reverse;
            }
            .app-component-content {
              display: none;
            }
            .app-component-content1 {
              width: 100%;
              display: flex;
              padding: var(--dl-space-space-fourunits);
              flex-direction: column-reverse;
            }
            .app-component-container2 {
              width: 100%;
              height: 266px;
              align-items: flex-start;
              flex-direction: row-reverse;
            }
            .app-component-frame1441 {
              width: 50%;
              height: 266px;
              padding: var(--dl-space-space-twounits);
            }
            .app-component-frame147 {
              width: 50%;
              height: 266px;
              padding: var(--dl-space-space-twounits);
              align-self: flex-end;
              justify-content: flex-end;
            }
            .app-component-text54 {
              font-family: Ploni ML v2 AAA Bold;
            }
            .app-component-container3 {
              width: auto;
              height: 266px;
              align-self: flex-end;
              flex-direction: row-reverse;
            }
            .app-component-frame1461 {
              width: 50%;
              height: 266px;
              padding: var(--dl-space-space-twounits);
            }
            .app-component-frame1451 {
              width: 50%;
              height: 266px;
              padding: var(--dl-space-space-twounits);
            }
            .app-component-rightcoloumn {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .app-component-text82 {
              color: var(--dl-color-carasso-primaryblack);
              width: 100%;
              font-size: 32px;
              text-align: right;
              font-family: Ploni ML v2 AAA;
              font-weight: 300;
              line-height: 110%;
              text-decoration: none;
            }
            .app-component-text83 {
              font-weight: 300;
            }
            .app-component-text84 {
              font-family: Ploni ML v2 AAA Bold;
              font-weight: 700;
            }
            .app-component-carassobutton1 {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .app-component-content1 {
              display: flex;
            }
            .app-component-container2 {
              gap: 0;
              height: auto;
              flex-direction: row-reverse;
            }
            .app-component-frame1441 {
              height: auto;
              justify-content: flex-start;
            }
            .app-component-frame147 {
              width: 50%;
              height: auto;
              padding-top: var(--dl-space-space-twounits);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .app-component-container3 {
              height: auto;
              align-items: flex-start;
            }
            .app-component-frame1461 {
              height: auto;
              justify-content: flex-start;
            }
            .app-component-frame1451 {
              height: auto;
              justify-content: flex-start;
            }
            .app-component-text82 {
              font-size: 36px;
              text-align: right;
            }
          }
          @media (max-width: 479px) {
            .app-component-content1 {
              padding: 0px;
            }
            .app-component-container2 {
              flex-direction: column;
            }
            .app-component-frame1441 {
              width: 100%;
              padding-right: 0px;
            }
            .app-component-text40 {
              font-family: Ploni ML v2 AAA Light;
            }
            .app-component-text42 {
              font-family: Ploni ML v2 AAA Bold;
            }
            .app-component-frame147 {
              width: 100%;
            }
            .app-component-container3 {
              flex-direction: column;
            }
            .app-component-frame1461 {
              width: 100%;
              padding-right: 0px;
            }
            .app-component-text56 {
              font-family: Ploni ML v2 AAA Light;
            }
            .app-component-text58 {
              font-family: Ploni ML v2 AAA Bold;
            }
            .app-component-frame1451 {
              width: 100%;
              padding-right: 0px;
            }
            .app-component-text68 {
              font-family: Ploni ML v2 AAA Light;
            }
            .app-component-text70 {
              font-family: Ploni ML v2 AAA Bold;
            }
            .app-component-text82 {
              color: var(--dl-color-carasso-primaryblack);
              font-size: 32px;
              align-self: center;
              font-family: Ploni ML v2 AAA;
              font-weight: 300;
              line-height: 110%;
              text-decoration: none;
            }
            .app-component-text83 {
              font-weight: 300;
            }
            .app-component-text84 {
              font-family: Ploni ML v2 AAA Bold;
              font-weight: 700;
            }
          }
        `}
      </style>
    </>
  )
}

AppComponent.defaultProps = {
  flagPennantAlt1: 'FlagPennant5030',
  flagPennantSrc: '/external/flagpennant5030-xo88.svg',
  arrow7StrokeAlt7: 'Arrow7Stroke5440',
  arrow7StrokeSrc5: '/external/arrow7stroke5440-fgxh.svg',
  arrow7StrokeSrc: '/external/arrow7stroke5030-rb9.svg',
  arrow7StrokeSrc2: '/external/arrow7stroke5030-1fkv.svg',
  caretDownSrc1: '/external/caretdown5030-99z.svg',
  caretDownAlt: 'CaretDown5030',
  arrow7StrokeSrc3: '/external/arrow7stroke5030-d4ds.svg',
  arrow7StrokeAlt6: 'Arrow7Stroke5440',
  arrow7StrokeSrc8: '/external/arrow7stroke5440-a4lh.svg',
  caretDownSrc2: '/external/caretdown5030-t6z9.svg',
  arrow7StrokeSrc1: '/external/arrow7stroke5030-irm.svg',
  arrow7StrokeSrc6: '/external/arrow7stroke5440-iyn.svg',
  arrow7StrokeSrc7: '/external/arrow7stroke5440-0apf.svg',
  arrow7StrokeAlt2: 'Arrow7Stroke5030',
  arrow7StrokeAlt4: 'Arrow7Stroke5030',
  arrow7StrokeAlt5: 'Arrow7Stroke5440',
  flagPennantAlt2: 'FlagPennant5030',
  arrow7StrokeAlt1: 'Arrow7Stroke5030',
  arrow7StrokeAlt: 'Arrow7Stroke5030',
  flagPennantAlt: 'FlagPennant5030',
  vectorAlt: 'Vector5030',
  arrow7StrokeAlt8: 'Arrow7Stroke5440',
  arrow7StrokeAlt3: 'Arrow7Stroke5030',
  flagPennantSrc1: '/external/flagpennant5030-hksf.svg',
  arrow7StrokeSrc4: '/external/arrow7stroke5030-0lnq.svg',
  caretDownAlt2: 'CaretDown5030',
  flagPennantSrc2: '/external/flagpennant5030-45fl.svg',
  vectorSrc: '/external/vector5030-uk5.svg',
  caretDownSrc: '/external/caretdown5030-fakf.svg',
  caretDownAlt1: 'CaretDown5030',
}

AppComponent.propTypes = {
  flagPennantAlt1: PropTypes.string,
  flagPennantSrc: PropTypes.string,
  arrow7StrokeAlt7: PropTypes.string,
  arrow7StrokeSrc5: PropTypes.string,
  arrow7StrokeSrc: PropTypes.string,
  arrow7StrokeSrc2: PropTypes.string,
  caretDownSrc1: PropTypes.string,
  caretDownAlt: PropTypes.string,
  arrow7StrokeSrc3: PropTypes.string,
  arrow7StrokeAlt6: PropTypes.string,
  arrow7StrokeSrc8: PropTypes.string,
  caretDownSrc2: PropTypes.string,
  arrow7StrokeSrc1: PropTypes.string,
  arrow7StrokeSrc6: PropTypes.string,
  arrow7StrokeSrc7: PropTypes.string,
  arrow7StrokeAlt2: PropTypes.string,
  arrow7StrokeAlt4: PropTypes.string,
  arrow7StrokeAlt5: PropTypes.string,
  flagPennantAlt2: PropTypes.string,
  arrow7StrokeAlt1: PropTypes.string,
  arrow7StrokeAlt: PropTypes.string,
  flagPennantAlt: PropTypes.string,
  vectorAlt: PropTypes.string,
  arrow7StrokeAlt8: PropTypes.string,
  arrow7StrokeAlt3: PropTypes.string,
  flagPennantSrc1: PropTypes.string,
  arrow7StrokeSrc4: PropTypes.string,
  caretDownAlt2: PropTypes.string,
  flagPennantSrc2: PropTypes.string,
  vectorSrc: PropTypes.string,
  caretDownSrc: PropTypes.string,
  caretDownAlt1: PropTypes.string,
}

export default AppComponent
