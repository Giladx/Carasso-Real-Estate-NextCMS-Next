import React, { useState } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

const Header1 = (props) => {
  const [pBgImage3, setPBgImage3] = useState(true)
  const [navisVisible2, setNavisVisible2] = useState(false)
  const [pBgImage2, setPBgImage2] = useState(true)
  const [isText, setIsText] = useState('newState')
  const [navisVisible5, setNavisVisible5] = useState(false)
  const [pBgImage1, setPBgImage1] = useState(true)
  const [navisVisible4, setNavisVisible4] = useState(false)
  const [pBgImage4, setPBgImage4] = useState(true)
  const [navisVisible1, setNavisVisible1] = useState(false)
  const [navisVisible3, setNavisVisible3] = useState(false)
  const [navisVisible6, setNavisVisible6] = useState(false)
  return (
    <>
      <div className="header-1-header-1">
        <header data-thq="thq-navbar" className="header-1-navbar-interactive">
          <div className="header-1-search">
            <img
              alt={props.pastedImageAlt1}
              src={props.pastedImageSrc1}
              className="header-1-pasted-image"
            />
          </div>
          <div className="header-1-logo">
            <img
              id="logo"
              alt={props.imageAlt1}
              src={props.imageSrc1}
              className="header-1-image"
            />
          </div>
          <div data-thq="thq-navbar-nav" className="header-1-desktop-menu">
            <nav className="header-1-links">
              <span>{props.text}</span>
              <span className="header-1-text001">{props.text1}</span>
              <span className="header-1-text002">{props.text2}</span>
              <span className="header-1-text003">{props.text3}</span>
              <span className="header-1-text004">{props.text4}</span>
            </nav>
            <div className="header-1-buttons">
              <button className="header-1-login button">{props.login}</button>
              <button className="button">{props.register}</button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="header-1-burger-menu">
            <img
              id="navmenu"
              alt={props.imageAlt2}
              src={props.imageSrc2}
              className="header-1-image1"
            />
            <svg viewBox="0 0 1024 1024" className="header-1-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="header-1-mobile-menu">
            <div className="header-1-leftcoloumn">
              <video
                src={props.videoSrc}
                loop="true"
                muted="true"
                poster="/external/left-coloumn1-1400w-1400w.webp"
                preload="auto"
                autoPlay="true"
                playsInline="true"
                className="header-1-home-video"
              ></video>
              {navisVisible1 && (
                <video
                  src={props.videoSrc}
                  loop="true"
                  muted="true"
                  poster="/external/left-coloumn1-1400w-1400w.webp"
                  preload="auto"
                  autoPlay="true"
                  playsInline="true"
                  className="header-1-home-video1"
                ></video>
              )}
              {navisVisible2 && (
                <div className="header-1-about">
                  <div className="header-1-theprojectintheimage">
                    <img
                      alt="Bank3836"
                      src="/external/bank3836-9r9m.svg"
                      className="header-1-bank"
                    />
                    <span className="header-1-text005">
                      <span>הפרויקט שבתמונה</span>
                    </span>
                    <div className="header-1-projectname">
                      <span className="header-1-text007">
                        <span>1936</span>
                      </span>
                      <img
                        alt="Line563836"
                        src="/external/line563836-b0ar.svg"
                        className="header-1-line56"
                      />
                      <span className="header-1-text009">
                        <span>המכון לארכיאולוגיה, האוניברסיטה העברית</span>
                      </span>
                    </div>
                  </div>
                  <div className="header-1-container"></div>
                  <img
                    alt={props.imageAlt4}
                    src={props.imageSrc4}
                    className="header-1-image2"
                  />
                </div>
              )}
              {!navisVisible3 && (
                <div className="header-1-projects">
                  <div className="header-1-titles">
                    <div className="header-1-projecttabscontainer">
                      <div className="header-1-projecttabs">
                        <div
                          onMouseEnter={() => {
                            setPBgImage2(false)
                            setPBgImage1(true)
                          }}
                          className="header-1-frame117"
                        >
                          <img
                            alt="Arrow113836"
                            src="/external/arrow113836-4n4.svg"
                            className="header-1-arrow11"
                          />
                          <span className="header-1-text011">
                            <span>מגורים</span>
                          </span>
                        </div>
                        <div
                          onMouseEnter={() => {
                            setPBgImage1(false)
                            setPBgImage3(false)
                            setPBgImage2(true)
                          }}
                          className="header-1-frame118"
                        >
                          <span className="header-1-text013">
                            <span>מרכזי קניות</span>
                          </span>
                        </div>
                        <div
                          onMouseEnter={() => {
                            setPBgImage2(false)
                            setPBgImage3(true)
                            setPBgImage4(false)
                          }}
                          className="header-1-frame119"
                        >
                          <span className="header-1-text015">
                            <span>משרדים והייטק</span>
                          </span>
                        </div>
                        <div
                          onMouseEnter={() => {
                            setPBgImage4(true)
                            setNavisVisible3(false)
                          }}
                          className="header-1-frame120"
                        >
                          <span className="header-1-text017">
                            <span>סיפורי הצלחה</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="header-1-theprojectintheimage1">
                      <img
                        alt="Buildings3836"
                        src="/external/buildings3836-081.svg"
                        className="header-1-buildings"
                      />
                      <span className="header-1-text019">
                        <span>הפרויקט שבתמונה</span>
                      </span>
                      <div className="header-1-projectname1">
                        <span className="header-1-text021">
                          <span>קריית אונו</span>
                        </span>
                        <img
                          alt="Line563836"
                          src="/external/line563836-ssks.svg"
                          className="header-1-line561"
                        />
                        <span className="header-1-text023">
                          <span>אומאמי</span>
                        </span>
                      </div>
                    </div>
                    <div className="header-1-theprojectintheimage2">
                      <img
                        alt="ShoppingBagOpen3836"
                        src="/external/shoppingbagopen3836-o769.svg"
                        className="header-1-shopping-bag-open"
                      />
                      <span className="header-1-text025">
                        <span>הפרויקט שבתמונה</span>
                      </span>
                      <div className="header-1-projectname2">
                        <span className="header-1-text027">
                          <span>יבנה הירוקה</span>
                        </span>
                        <img
                          alt="Line563836"
                          src="/external/line563836-9i4c.svg"
                          className="header-1-line562"
                        />
                        <span className="header-1-text029">
                          <span>מרכז קניות גן ראובן</span>
                        </span>
                      </div>
                    </div>
                    <div className="header-1-theprojectintheimage3">
                      <img
                        alt="Briefcase3836"
                        src="/external/briefcase3836-sgh.svg"
                        className="header-1-briefcase"
                      />
                      <span className="header-1-text031">
                        <span>הפרויקט שבתמונה</span>
                      </span>
                      <div className="header-1-projectname3">
                        <span className="header-1-text033">
                          <span>קריית אריה, פתח תקווה</span>
                        </span>
                        <img
                          alt="Line563836"
                          src="/external/line563836-7pv.svg"
                          className="header-1-line563"
                        />
                        <span className="header-1-text035">
                          <span>פארק VICA</span>
                        </span>
                      </div>
                    </div>
                    <div className="header-1-theprojectintheimage4">
                      <img
                        alt="Buildings3836"
                        src="/external/buildings3836-b77.svg"
                        className="header-1-buildings1"
                      />
                      <span className="header-1-text037">
                        <span>הפרויקט שבתמונה</span>
                      </span>
                      <div className="header-1-projectname4">
                        <span className="header-1-text039">
                          <span>גבעתיים</span>
                        </span>
                        <img
                          alt="Line563836"
                          src="/external/line563836-aqd5.svg"
                          className="header-1-line564"
                        />
                        <span className="header-1-text041">
                          <span>הכנסת 32</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  {pBgImage1 && (
                    <div className="header-1-bg-image1">
                      <img
                        alt={props.imageAlt5}
                        src={props.imageSrc5}
                        className="header-1-image3"
                      />
                      <div className="header-1-overlay"></div>
                    </div>
                  )}
                  {!pBgImage2 && (
                    <div className="header-1-bg-image2">
                      <img
                        alt={props.imageAlt5}
                        src={props.imageSrc6}
                        className="header-1-image4"
                      />
                      <div className="header-1-overlay1"></div>
                    </div>
                  )}
                  {!pBgImage3 && (
                    <div className="header-1-bg-image3">
                      <img
                        alt={props.imageAlt5}
                        src={props.imageSrc7}
                        className="header-1-image5"
                      />
                      <div className="header-1-overlay2"></div>
                    </div>
                  )}
                  {!pBgImage4 && (
                    <div className="header-1-bg-image4">
                      <img
                        alt={props.imageAlt5}
                        src={props.imageSrc8}
                        className="header-1-image6"
                      />
                      <div className="header-1-overlay3"></div>
                    </div>
                  )}
                </div>
              )}
              {navisVisible4 && (
                <div className="header-1-renew">
                  <div className="header-1-navlinkpreview">
                    <div className="header-1-frame1261158147">
                      <span className="header-1-text043">
                        <span className="header-1-text044">
                          אנחנו מהראשונים לפעול בתחום ההתחדשות העירונית,
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span>ומובילים בדירוגים החשובים בענף </span>
                      </span>
                      <div className="header-1-frame218">
                        <img
                          alt="image184826"
                          src="/external/image184826-24hr-200w.webp"
                          className="header-1-image18"
                        />
                        <div className="header-1-frame219">
                          <img
                            alt="image164826"
                            src="/external/image164826-a25-200h.webp"
                            className="header-1-image16"
                          />
                        </div>
                        <img
                          alt="image174826"
                          src="/external/image174826-d05i-200h.webp"
                          className="header-1-image17"
                        />
                      </div>
                    </div>
                    <div className="header-1-theprojectintheimage5">
                      <img
                        alt="Buildings4826"
                        src="/external/buildings4826-uy6t.svg"
                        className="header-1-buildings2"
                      />
                      <span className="header-1-text046">
                        <span>הפרויקט שבתמונה</span>
                      </span>
                      <div className="header-1-projectname5">
                        <span className="header-1-text048">
                          <span>ירושלים</span>
                        </span>
                        <img
                          alt="Line564826"
                          src="/external/line564826-s4f9.svg"
                          className="header-1-line565"
                        />
                        <span className="header-1-text050">
                          <span>דרך חברון התנופה</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="header-1-container1"></div>
                  <img
                    alt={props.imageAlt5}
                    sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                    src="/1fff79fb16c5cb75fb3cfda99ba4dc3b-1400w.webp"
                    srcSet="/1fff79fb16c5cb75fb3cfda99ba4dc3b-1400w.webp 1200w, /1fff79fb16c5cb75fb3cfda99ba4dc3b-tablet.webp 800w, /1fff79fb16c5cb75fb3cfda99ba4dc3b-mobile.webp 480w"
                    className="header-1-image7"
                  />
                </div>
              )}
              {navisVisible5 && (
                <div className="header-1-news">
                  <div className="header-1-navlinkpreview1">
                    <div className="header-1-frame143">
                      <div className="header-1-frame129">
                        <span className="header-1-text052">
                          <span>18 לינואר, 2023</span>
                        </span>
                        <span className="header-1-text054">
                          <span>עיצוב אדמתי לחלל הבית</span>
                        </span>
                        <span className="header-1-text056">
                          <span>
                            בשנים האחרונות משקיעה החברה את מיטב המשאבים בפיתוח,
                            תכנון והקמה של מגוון פרויקטים מתקדמים המשקפים בשנים.
                          </span>
                        </span>
                      </div>
                      <button className="header-1-carassobutton">
                        <div className="header-1-frame123">
                          <img
                            alt="Arrow7Stroke4783"
                            src="/external/arrow7stroke4783-xw2l.svg"
                            className="header-1-arrow7-stroke"
                          />
                          <span className="header-1-text058">
                            <span>להמשך הקריאה</span>
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="header-1-container2"></div>
                  <img
                    alt={props.imageAlt5}
                    sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                    src="/c6d4bb51424431f6d2b8962e3bd010d5-1400w.webp"
                    srcSet="/c6d4bb51424431f6d2b8962e3bd010d5-1400w.webp 1200w, /c6d4bb51424431f6d2b8962e3bd010d5-tablet.webp 800w, /c6d4bb51424431f6d2b8962e3bd010d5-mobile.webp 480w"
                    className="header-1-image8"
                  />
                </div>
              )}
              {navisVisible6 && (
                <div className="header-1-contact">
                  <div className="header-1-formcontent">
                    <div className="header-1-formheader">
                      <img
                        alt="formclose5058"
                        src="/external/formclose5058-5gun.svg"
                        className="header-1-formclose"
                      />
                      <div className="header-1-formheaders">
                        <span className="header-1-text060">
                          <span>אנחנו כאן בשבילך</span>
                        </span>
                        <span className="header-1-text062">
                          <span>באיזה נושא הפנייה?</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="header-1-forminputs">
                    <div className="header-1-frame23">
                      <span className="header-1-text064">
                        <span>אחר</span>
                      </span>
                    </div>
                    <div className="header-1-frame28">
                      <span className="header-1-text066">
                        <span>שיתופי פעולה</span>
                      </span>
                    </div>
                    <div className="header-1-frame33">
                      <span className="header-1-text068">
                        <span>התחדשות עירונית</span>
                      </span>
                    </div>
                    <div className="header-1-frame24">
                      <span className="header-1-text070">
                        <span>שירות לקוחות</span>
                      </span>
                    </div>
                    <div className="header-1-frame32">
                      <span className="header-1-text072">
                        <span>השכרת נכסים</span>
                      </span>
                    </div>
                    <div className="header-1-frame31">
                      <span className="header-1-text074">
                        <span>רכישת דירה</span>
                      </span>
                    </div>
                  </div>
                  <div className="header-1-formstatus">
                    <div className="header-1-formnextback">
                      <div className="header-1-frame124">
                        <img
                          alt="Arrow7Stroke5058"
                          src="/external/arrow7stroke5058-a0d3.svg"
                          className="header-1-arrow7-stroke1"
                        />
                        <span className="header-1-text076">
                          <span>הבא</span>
                        </span>
                      </div>
                      <span className="header-1-text078">
                        <span>חזור</span>
                      </span>
                    </div>
                    <div className="header-1-formstages">
                      <div className="header-1-stage"></div>
                      <div className="header-1-stage1"></div>
                      <div className="header-1-stage2"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="header-1-rightcoloumn">
              <img
                alt={props.vectorAlt}
                src={props.vectorSrc}
                className="header-1-vector"
              />
              <div className="header-1-navigationbarmenuopen">
                <img
                  alt={props.searchAlt}
                  src={props.searchSrc}
                  className="header-1-search1"
                />
                <img
                  alt={props.logoAlt}
                  src={props.logoSrc}
                  className="header-1-logo1"
                />
                <div className="header-1-nav">
                  <div
                    data-thq="thq-close-menu"
                    className="header-1-close-menu"
                  >
                    <img
                      alt={props.hamburgerAlt}
                      src={props.hamburgerSrc}
                      className="header-1-hamburger"
                    />
                  </div>
                </div>
              </div>
              <div className="header-1-navcontent">
                <div className="header-1-navlinks">
                  <div
                    onMouseEnter={() => {
                      setNavisVisible2(false)
                      setNavisVisible1(true)
                    }}
                    className="header-1-frame139"
                  >
                    <img
                      alt={props.arrow11Alt}
                      src={props.arrow11Src}
                      className="header-1-arrow111"
                    />
                    {navisVisible1 && (
                      <svg viewBox="0 0 1024 1024" className="header-1-icon02">
                        <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                      </svg>
                    )}
                    <span className="header-1-text080">
                      <span>דף הבית</span>
                    </span>
                  </div>
                  <div
                    onMouseEnter={() => {
                      setNavisVisible3(false)
                      setNavisVisible1(false)
                      setNavisVisible2(true)
                    }}
                    className="header-1-frame138"
                  >
                    {navisVisible2 && (
                      <svg viewBox="0 0 1024 1024" className="header-1-icon04">
                        <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                      </svg>
                    )}
                    <span className="header-1-text082">
                      <span>הסיפור שלנו</span>
                    </span>
                  </div>
                  <div
                    onMouseEnter={() => {
                      setNavisVisible3(true)
                      setNavisVisible6(false)
                      setNavisVisible4(false)
                      setNavisVisible2(false)
                    }}
                    className="header-1-frame137"
                  >
                    <img
                      alt={props.vectorAlt1}
                      src={props.vectorSrc1}
                      className="header-1-vector1"
                    />
                    <svg viewBox="0 0 1024 1024" className="header-1-icon06">
                      <path d="M670.165 737.835l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-256 256c-16.683 16.683-16.683 43.691 0 60.331l256 256c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                    </svg>
                    <span className="header-1-text084">
                      <span>פרויקטים</span>
                    </span>
                  </div>
                  <div
                    onMouseEnter={() => {
                      setNavisVisible5(false)
                      setNavisVisible4(true)
                      setNavisVisible3(false)
                    }}
                    className="header-1-frame140"
                  >
                    {navisVisible4 && (
                      <svg viewBox="0 0 1024 1024" className="header-1-icon08">
                        <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                      </svg>
                    )}
                    <span className="header-1-text086">
                      <span>התחדשות עירונית</span>
                    </span>
                  </div>
                  <div
                    onMouseEnter={() => {
                      setNavisVisible4(false)
                      setNavisVisible6(false)
                      setNavisVisible5(true)
                    }}
                    className="header-1-frame141"
                  >
                    {navisVisible5 && (
                      <svg viewBox="0 0 1024 1024" className="header-1-icon10">
                        <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                      </svg>
                    )}
                    <span className="header-1-text088">
                      <span>חדשות ועידכונים</span>
                    </span>
                  </div>
                  <div
                    onMouseEnter={() => {
                      setNavisVisible5(false)
                      setNavisVisible6(true)
                    }}
                    className="header-1-frame142"
                  >
                    <img
                      alt={props.vectorAlt2}
                      src={props.vectorSrc2}
                      className="header-1-vector2"
                    />
                    <svg viewBox="0 0 1024 1024" className="header-1-icon12">
                      <path d="M670.165 737.835l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-256 256c-16.683 16.683-16.683 43.691 0 60.331l256 256c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                    </svg>
                    <span className="header-1-text090">
                      <span>יצירת קשר</span>
                    </span>
                  </div>
                </div>
                <div className="header-1-bottomdetails">
                  <div className="header-1-personalareacontainer">
                    <div className="header-1-personalarea">
                      <span className="header-1-text092">
                        <span>אזור אישי</span>
                      </span>
                      <img
                        alt={props.userCircleAlt}
                        src={props.userCircleSrc}
                        className="header-1-user-circle"
                      />
                    </div>
                  </div>
                  <div className="header-1-contactdetails">
                    <div className="header-1-frame1231">
                      <img
                        alt={props.instagramLogoAlt}
                        src={props.instagramLogoSrc}
                        className="header-1-instagram-logo"
                      />
                      <img
                        alt={props.linkedinLogoAlt}
                        src={props.linkedinLogoSrc}
                        className="header-1-linkedin-logo"
                      />
                      <img
                        alt={props.facebookLogoAlt}
                        src={props.facebookLogoSrc}
                        className="header-1-facebook-logo"
                      />
                    </div>
                    <div className="header-1-frame133">
                      <span className="header-1-text094">
                        <span>+972 050 123 1234</span>
                      </span>
                      <span className="header-1-text096">
                        <span>ריב״ל 24, תל אביב-יפו</span>
                      </span>
                      <span className="header-1-text098">
                        <span>info@carasso-nadlan.com</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="header-1-container4">
              <Script
                html={`<style>
header.inverted {
  background-color: rgba(255,255,255,0.8);
  box-shadow: 0 3px 5px 0.3px rgba(0, 0, 0, 0.1);
}
header.inverted a {
  color: #0e436b;
}
</style>

<script>
var className = "inverted";
var scrollTrigger = 60;

window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
  }
};

// Nav Elements
window.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var content = document.getElementById('navsearch');
        if (window.pageYOffset >= content.offsetTop + 60) {
            content.style.filter = 'invert(1)';
        } else {
            content.style.filter = 'invert(0)';
        }
    });
});

window.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
      var content = document.getElementById('navmenu');
      if (window.pageYOffset >= content.offsetTop + 60) {
          content.style.filter = 'invert(1)';
      } else {
          content.style.filter = 'invert(0)';
      }
  });
});

window.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
      var content = document.getElementById('logo');
      if (window.pageYOffset >= content.offsetTop + 60) {
          content.style.filter = 'invert(1)';
      } else {
          content.style.filter = 'invert(0)';
      }
  });
});
</script>`}
              ></Script>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .header-1-header-1 {
            top: 0;
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            z-index: 999;
            position: fixed;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .header-1-navbar-interactive {
            width: 90%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-threeunits);
            border-radius: 15px;
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .header-1-search {
            flex: 0 0 auto;
            width: 5%;
            height: 40px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .header-1-pasted-image {
            width: 24px;
            cursor: pointer;
            filter: invert(1);
            object-fit: cover;
          }
          .header-1-logo {
            flex: 0 0 auto;
            width: 90%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .header-1-image {
            fill: var(--dl-color-carasso-primaryblack);
            cursor: pointer;
            filter: invert(1);
            height: auto;
            align-self: center;
            text-decoration: none;
          }
          .header-1-desktop-menu {
            display: none;
            justify-content: space-between;
          }
          .header-1-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .header-1-text001 {
            margin-left: var(--dl-space-space-twounits);
          }
          .header-1-text002 {
            margin-left: var(--dl-space-space-twounits);
          }
          .header-1-text003 {
            margin-left: var(--dl-space-space-twounits);
          }
          .header-1-text004 {
            margin-left: var(--dl-space-space-twounits);
          }
          .header-1-buttons {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-1-login {
            border-width: 0px;
            margin-right: var(--dl-space-space-twounits);
          }
          .header-1-burger-menu {
            width: 5%;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .header-1-image1 {
            fill: var(--dl-color-carasso-primaryblack);
            width: auto;
            cursor: pointer;
            filter: invert(1);
            height: 10px;
            object-fit: cover;
          }
          .header-1-icon {
            fill: #d9d9d9;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: none;
          }
          .header-1-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            z-index: 999;
            overflow: hidden;
            position: absolute;
            transform: translateX(100%);
            transition: 0.5s;
            padding-right: var(--dl-space-space-sixunits);
            flex-direction: row;
            justify-content: space-between;
            background-color: var(--dl-color-carasso-plainwhite);
          }
          .header-1-leftcoloumn {
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
          }
          .header-1-home-video {
            top: 0px;
            left: 0px;
            display: none;
            position: absolute;
          }
          .header-1-home-video1 {
            top: 0px;
            left: 0px;
            position: absolute;
          }
          .header-1-about {
            gap: 220px;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-end;
            padding-top: 160px;
            padding-right: 50px;
            flex-direction: column;
            padding-bottom: 40px;
            justify-content: flex-end;
          }
          .header-1-theprojectintheimage {
            gap: 12px;
            width: 100%;
            height: auto;
            display: flex;
            z-index: 100;
            align-items: flex-end;
            flex-direction: column;
          }
          .header-1-bank {
            width: 28px;
            height: 28px;
          }
          .header-1-text005 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-projectname {
            gap: 10px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .header-1-text007 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-line56 {
            width: 20px;
            height: 1px;
          }
          .header-1-text009 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-container {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 1;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0.18) 0%,
              rgba(0, 0, 0, 0.18) 40%,
              rgba(0, 0, 0, 0.8) 100%
            );
          }
          .header-1-image2 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            position: absolute;
            transform: scale(1.3);
            object-fit: cover;
          }
          .header-1-projects {
            gap: 220px;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            flex-grow: 1;
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-between;
          }
          .header-1-titles {
            gap: 220px;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            flex-grow: 1;
            align-items: flex-end;
            padding-top: 160px;
            padding-right: 50px;
            flex-direction: column;
            padding-bottom: 40px;
            justify-content: space-between;
          }
          .header-1-projecttabscontainer {
            gap: 85px;
            display: flex;
            z-index: 5;
            align-items: flex-end;
            flex-direction: column;
          }
          .header-1-projecttabs {
            gap: 30px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .header-1-frame117 {
            gap: 9px;
            cursor: pointer;
            display: flex;
            align-items: center;
          }
          .header-1-arrow11 {
            width: 15px;
            height: 1px;
          }
          .header-1-text011 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 25px;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-frame118 {
            gap: 9px;
            cursor: pointer;
            display: flex;
            align-items: center;
          }
          .header-1-text013 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 25px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-frame119 {
            gap: 9px;
            cursor: pointer;
            display: flex;
            align-items: center;
          }
          .header-1-text015 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 25px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-frame120 {
            gap: 9px;
            cursor: pointer;
            display: flex;
            align-items: center;
          }
          .header-1-text017 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 25px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-theprojectintheimage1 {
            gap: 12px;
            display: none;
            z-index: 100;
            align-items: flex-end;
            flex-direction: column;
          }
          .header-1-buildings {
            width: 28px;
            height: 28px;
          }
          .header-1-text019 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-projectname1 {
            gap: 10px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .header-1-text021 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-line561 {
            width: 20px;
            height: 1px;
          }
          .header-1-text023 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-theprojectintheimage2 {
            gap: 12px;
            width: 100%;
            height: auto;
            display: none;
            z-index: 5;
            align-items: flex-end;
            flex-direction: column;
          }
          .header-1-shopping-bag-open {
            width: 28px;
            height: 28px;
          }
          .header-1-text025 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-projectname2 {
            gap: 10px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .header-1-text027 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-line562 {
            width: 20px;
            height: 1px;
          }
          .header-1-text029 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-theprojectintheimage3 {
            gap: 12px;
            width: 100%;
            height: auto;
            display: none;
            z-index: 5;
            align-items: flex-end;
            flex-direction: column;
          }
          .header-1-briefcase {
            width: 28px;
            height: 28px;
          }
          .header-1-text031 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-projectname3 {
            gap: 10px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .header-1-text033 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-line563 {
            width: 20px;
            height: 1px;
          }
          .header-1-text035 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-theprojectintheimage4 {
            gap: 12px;
            width: 100%;
            height: auto;
            display: none;
            z-index: 5;
            align-items: flex-end;
            flex-direction: column;
          }
          .header-1-buildings1 {
            width: 28px;
            height: 28px;
          }
          .header-1-text037 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-projectname4 {
            gap: 10px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .header-1-text039 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-line564 {
            width: 20px;
            height: 1px;
          }
          .header-1-text041 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-bg-image1 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-1-image3 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            z-index: 0;
            position: absolute;
            object-fit: cover;
          }
          .header-1-overlay {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 1;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0.18) 0%,
              rgba(0, 0, 0, 0.18) 40%,
              rgba(0, 0, 0, 0.8) 100%
            );
          }
          .header-1-bg-image2 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-1-image4 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            z-index: 0;
            position: absolute;
            object-fit: cover;
          }
          .header-1-overlay1 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 1;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0.18) 0%,
              rgba(0, 0, 0, 0.18) 40%,
              rgba(0, 0, 0, 0.8) 100%
            );
          }
          .header-1-bg-image3 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-1-image5 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            z-index: 0;
            position: absolute;
            object-fit: cover;
          }
          .header-1-overlay2 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 1;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0.18) 0%,
              rgba(0, 0, 0, 0.18) 40%,
              rgba(0, 0, 0, 0.8) 100%
            );
          }
          .header-1-bg-image4 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-1-image6 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            z-index: 0;
            position: absolute;
            object-fit: cover;
          }
          .header-1-overlay3 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 1;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0.18) 0%,
              rgba(0, 0, 0, 0.18) 40%,
              rgba(0, 0, 0, 0.8) 100%
            );
          }
          .header-1-renew {
            gap: 10px;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            padding: 160.0500030517578px 50px 40px;
            overflow: hidden;
            position: absolute;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .header-1-navlinkpreview {
            gap: 40px;
            display: flex;
            z-index: 100;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-between;
          }
          .header-1-frame1261158147 {
            gap: 40px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .header-1-text043 {
            color: var(--dl-color-carasso-plainwhite);
            width: 316px;
            height: auto;
            font-size: 24px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 129.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-text044 {
            font-weight: 300;
          }
          .header-1-frame218 {
            gap: 27.903398513793945px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .header-1-image18 {
            width: 61px;
            height: 64px;
          }
          .header-1-frame219 {
            gap: 11.076070785522461px;
            display: flex;
            padding: 0 0 4.4304280281066895px;
            align-items: center;
            justify-content: center;
          }
          .header-1-image16 {
            width: 62px;
            height: 62px;
          }
          .header-1-image17 {
            width: 46px;
            height: 39px;
          }
          .header-1-theprojectintheimage5 {
            gap: 12px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .header-1-buildings2 {
            width: 28px;
            height: 28px;
          }
          .header-1-text046 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-projectname5 {
            gap: 10px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .header-1-text048 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-line565 {
            width: 20px;
            height: 1px;
          }
          .header-1-text050 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-container1 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 1;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0.18) 0%,
              rgba(0, 0, 0, 0.18) 40%,
              rgba(0, 0, 0, 0.8) 100%
            );
          }
          .header-1-image7 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            z-index: 0;
            position: absolute;
            object-fit: cover;
          }
          .header-1-news {
            gap: 10px;
            width: 100%;
            height: auto;
            display: flex;
            padding: 160.0500030517578px 50px 40px 10px;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .header-1-navlinkpreview1 {
            gap: 220px;
            display: flex;
            z-index: 5;
            flex-grow: 1;
            align-items: flex-end;
            flex-direction: column;
          }
          .header-1-frame143 {
            gap: 100px;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-between;
          }
          .header-1-frame129 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .header-1-text052 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-text054 {
            color: var(--dl-color-carasso-plainwhite);
            width: 305px;
            height: auto;
            font-size: 24px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-text056 {
            color: var(--dl-color-carasso-plainwhite);
            width: 450px;
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 129.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-carassobutton {
            gap: 12px;
            display: flex;
            padding: 0 0 12px;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 0 0 1px;
          }
          .header-1-frame123 {
            gap: 12px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .header-1-arrow7-stroke {
            width: 8px;
            height: 7px;
          }
          .header-1-text058 {
            color: var(--dl-color-carasso-plainwhite);
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
          .header-1-container2 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 1;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0.18) 0%,
              rgba(0, 0, 0, 0.18) 40%,
              rgba(0, 0, 0, 0.8) 100%
            );
          }
          .header-1-image8 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            z-index: 0;
            position: absolute;
            object-fit: cover;
          }
          .header-1-contact {
            gap: 60px;
            width: 100%;
            height: auto;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            padding-top: 40px;
            padding-left: 50px;
            padding-right: 50px;
            flex-direction: column;
            padding-bottom: 40px;
            justify-content: space-between;
          }
          .header-1-formcontent {
            gap: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .header-1-formheader {
            gap: 678px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .header-1-formclose {
            width: 20px;
            height: 20px;
          }
          .header-1-formheaders {
            gap: 40px;
            display: flex;
            direction: rtl;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-1-text060 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 32px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 120.00000476837158%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-text062 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 20px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-forminputs {
            gap: 16px;
            width: auto;
            display: flex;
            flex-wrap: wrap;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .header-1-frame23 {
            gap: 10px;
            display: flex;
            padding: 32px;
            overflow: hidden;
            align-items: center;
            border-radius: 5px;
            justify-content: center;
            background-color: var(--dl-color-carasso-lightblue);
          }
          .header-1-text064 {
            color: var(--dl-color-carasso-tagselected);
            height: auto;
            font-size: 18px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-frame28 {
            gap: 10px;
            display: flex;
            padding: 32px;
            overflow: hidden;
            align-items: center;
            border-radius: 5px;
            justify-content: center;
            background-color: var(--dl-color-carasso-lightblue);
          }
          .header-1-text066 {
            color: var(--dl-color-carasso-tagselected);
            height: auto;
            font-size: 18px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-frame33 {
            gap: 10px;
            display: flex;
            padding: 32px;
            overflow: hidden;
            align-items: center;
            border-radius: 5px;
            justify-content: center;
            background-color: var(--dl-color-carasso-lightblue);
          }
          .header-1-text068 {
            color: var(--dl-color-carasso-tagselected);
            height: auto;
            font-size: 18px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-frame24 {
            gap: 10px;
            display: flex;
            padding: 32px;
            overflow: hidden;
            align-items: center;
            border-radius: 5px;
            justify-content: center;
            background-color: var(--dl-color-carasso-lightblue);
          }
          .header-1-text070 {
            color: var(--dl-color-carasso-tagselected);
            height: auto;
            font-size: 18px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-frame32 {
            gap: 10px;
            display: flex;
            padding: 32px;
            overflow: hidden;
            align-items: center;
            border-radius: 5px;
            justify-content: center;
            background-color: var(--dl-color-carasso-lightblue);
          }
          .header-1-text072 {
            color: var(--dl-color-carasso-tagselected);
            height: auto;
            font-size: 18px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-frame31 {
            gap: 6px;
            display: flex;
            padding: 32px;
            overflow: hidden;
            align-items: center;
            border-radius: 5px;
            justify-content: center;
            background-color: var(--dl-color-carasso-lightblue);
          }
          .header-1-text074 {
            color: var(--dl-color-carasso-tagselected);
            height: auto;
            font-size: 18px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-formstatus {
            gap: 850px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .header-1-formnextback {
            gap: 30px;
            display: flex;
            align-items: flex-start;
          }
          .header-1-frame124 {
            gap: 8px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .header-1-arrow7-stroke1 {
            width: 8px;
            height: 7px;
          }
          .header-1-text076 {
            color: var(--dl-color-carasso-darkergray);
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
          .header-1-text078 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 18px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-formstages {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .header-1-stage {
            gap: 10px;
            display: flex;
            padding: 10px;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            border-radius: 99px;
            background-color: var(--dl-color-carasso-graytextcolor);
          }
          .header-1-stage1 {
            gap: 10px;
            display: flex;
            padding: 10px;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            border-radius: 99px;
            background-color: var(--dl-color-carasso-graytextcolor);
          }
          .header-1-stage2 {
            gap: 10px;
            display: flex;
            padding: 10px;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            border-radius: 99px;
            background-color: var(--dl-color-carasso-primaryblack);
          }
          .header-1-rightcoloumn {
            gap: 60px;
            height: 100%;
            display: flex;
            padding: 20px 0 40px 50px;
            align-self: flex-end;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .header-1-vector {
            right: -30px;
            width: 529px;
            bottom: 0px;
            height: 595px;
            position: absolute;
          }
          .header-1-navigationbarmenuopen {
            gap: 120px;
            display: flex;
            padding: 20px 0;
            z-index: 1;
            align-self: flex-end;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(187, 188, 191, 1);
            border-style: solid;
            border-width: 0 0 1px;
          }
          .header-1-search1 {
            width: 36px;
            cursor: pointer;
            height: 36px;
          }
          .header-1-logo1 {
            width: 80px;
            height: 40px;
          }
          .header-1-nav {
            width: 100%;
            display: flex;
            align-self: flex-end;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-1-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .header-1-hamburger {
            width: 36px;
            cursor: pointer;
            height: 36px;
          }
          .header-1-navcontent {
            gap: 80px;
            display: flex;
            z-index: 2;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-between;
          }
          .header-1-navlinks {
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .header-1-frame139 {
            gap: 16px;
            fill: var(--dl-color-carasso-graytextcolor);
            color: var(--dl-color-carasso-graytextcolor);
            cursor: pointer;
            display: flex;
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            flex-shrink: 0;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: flex-end;
            text-decoration: none;
          }
          .header-1-frame139:hover {
            fill: var(--dl-color-carasso-primaryblack);
            color: var(--dl-color-carasso-primaryblack);
          }
          .header-1-frame139:active {
            fill: var(--dl-color-carasso-primaryblack);
            color: var(--dl-color-carasso-primaryblack);
          }
          .header-1-arrow111 {
            width: 20px;
            display: none;
          }
          .header-1-icon02 {
            width: 48px;
            height: 20px;
            transition: 0.3s;
          }
          .header-1-icon02:hover {
            fill: var(--dl-color-carasso-primaryblack);
          }
          .header-1-text080 {
            height: auto;
            font-size: 32px;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-frame138 {
            gap: 16px;
            color: var(--dl-color-carasso-graytextcolor);
            cursor: pointer;
            display: flex;
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            flex-shrink: 0;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: flex-end;
            text-decoration: none;
          }
          .header-1-frame138:hover {
            color: var(--dl-color-carasso-primaryblack);
          }
          .header-1-frame138:active {
            fill: var(--dl-color-carasso-primaryblack);
            color: var(--dl-color-carasso-primaryblack);
          }
          .header-1-icon04 {
            width: 48px;
            height: 20px;
            transition: 0.3s;
          }
          .header-1-icon04:hover {
            fill: var(--dl-color-carasso-primaryblack);
          }
          .header-1-text082 {
            height: auto;
            font-size: 32px;
            font-style: Light;
            text-align: right;
            transition: 0.3s;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }

          .header-1-frame137 {
            gap: 16px;
            fill: var(--dl-color-carasso-graytextcolor);
            color: var(--dl-color-carasso-graytextcolor);
            cursor: pointer;
            display: flex;
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            flex-shrink: 0;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: flex-end;
            text-decoration: none;
          }
          .header-1-frame137:hover {
            fill: var(--dl-color-carasso-primaryblack);
            color: var(--dl-color-carasso-primaryblack);
          }
          .header-1-frame137:active {
            fill: var(--dl-color-carasso-primaryblack);
            color: var(--dl-color-carasso-primaryblack);
          }
          .header-1-vector1 {
            width: 10px;
            display: none;
            transition: 0.3s;
          }
          .header-1-vector1:hover {
            color: var(--dl-color-carasso-primaryblack);
          }
          .header-1-icon06 {
            width: 24px;
            height: 24px;
            transition: 0.3s;
          }
          .header-1-icon06:hover {
            fill: var(--dl-color-carasso-primaryblack);
          }
          .header-1-text084 {
            height: auto;
            font-size: 32px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-frame140 {
            gap: 16px;
            color: var(--dl-color-carasso-graytextcolor);
            cursor: pointer;
            display: flex;
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            flex-shrink: 0;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: flex-end;
            text-decoration: none;
          }
          .header-1-frame140:hover {
            color: var(--dl-color-carasso-primaryblack);
          }
          .header-1-frame140:active {
            fill: var(--dl-color-carasso-primaryblack);
            color: var(--dl-color-carasso-primaryblack);
          }
          .header-1-icon08 {
            width: 48px;
            height: 20px;
            transition: 0.3s;
          }
          .header-1-icon08:hover {
            fill: var(--dl-color-carasso-primaryblack);
          }
          .header-1-text086 {
            height: auto;
            font-size: 32px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-text086:hover {
            color: var(--dl-color-carasso-primaryblack);
          }
          .header-1-frame141 {
            gap: 16px;
            color: var(--dl-color-carasso-graytextcolor);
            cursor: pointer;
            display: flex;
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            flex-shrink: 0;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: flex-end;
            text-decoration: none;
          }
          .header-1-frame141:hover {
            color: var(--dl-color-carasso-primaryblack);
          }
          .header-1-frame141:active {
            fill: var(--dl-color-carasso-primaryblack);
            color: var(--dl-color-carasso-primaryblack);
          }
          .header-1-icon10 {
            width: 48px;
            height: 20px;
            transition: 0.3s;
          }
          .header-1-icon10:hover {
            fill: var(--dl-color-carasso-primaryblack);
          }
          .header-1-text088 {
            height: auto;
            font-size: 32px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-frame142 {
            gap: 16px;
            fill: var(--dl-color-carasso-graytextcolor);
            color: var(--dl-color-carasso-graytextcolor);
            cursor: pointer;
            display: flex;
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            flex-shrink: 0;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: flex-end;
            text-decoration: none;
          }
          .header-1-frame142:hover {
            fill: var(--dl-color-carasso-primaryblack);
            color: var(--dl-color-carasso-primaryblack);
          }
          .header-1-frame142:active {
            fill: var(--dl-color-carasso-primaryblack);
            color: var(--dl-color-carasso-primaryblack);
          }
          .header-1-vector2 {
            width: 10px;
            display: none;
          }
          .header-1-icon12 {
            width: 24px;
            height: 24px;
            transition: 0.3s;
          }
          .header-1-icon12:hover {
            fill: var(--dl-color-carasso-primaryblack);
          }
          .header-1-text090 {
            height: auto;
            font-size: 32px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-bottomdetails {
            gap: 25px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .header-1-personalareacontainer {
            gap: 16px;
            display: flex;
            padding: 0 0 16px;
            align-self: stretch;
            align-items: flex-end;
            border-color: rgba(187, 188, 191, 1);
            border-style: solid;
            border-width: 0 0 0.699999988079071px;
            flex-direction: column;
          }
          .header-1-personalarea {
            gap: 6px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .header-1-text092 {
            color: var(--dl-color-carasso-graytextcolor);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-user-circle {
            width: 18px;
            height: 18px;
          }
          .header-1-contactdetails {
            gap: 176px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .header-1-frame1231 {
            gap: 8px;
            height: 76px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .header-1-instagram-logo {
            width: 20px;
            height: 20px;
          }
          .header-1-linkedin-logo {
            width: 20px;
            height: 20px;
          }
          .header-1-facebook-logo {
            width: 20px;
            height: 20px;
          }
          .header-1-frame133 {
            gap: 18px;
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .header-1-text094 {
            color: var(--dl-color-carasso-graytextcolor);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Medium';
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-text096 {
            color: var(--dl-color-carasso-graytextcolor);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Medium';
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-text098 {
            color: var(--dl-color-carasso-graytextcolor);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Medium';
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-1-container4 {
            display: contents;
          }
          @media (max-width: 1920px) {
            .header-1-desktop-menu {
              display: none;
            }
            .header-1-burger-menu {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .header-1-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .header-1-burger-menu {
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .header-1-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .header-1-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

Header1.defaultProps = {
  imageAlt1: 'logo',
  pastedImageSrc1: '/external/pastedimage-ar59.svg',
  text4: 'Blog',
  imageSrc4: '/a4155ea025aa2f95caf38425360a0067-1400w.webp',
  vectorAlt: 'Vector3836',
  imageAlt3: 'image',
  facebookLogoAlt: 'FacebookLogo3836',
  imageAlt5: 'image',
  hamburgerSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/e6d869ac-5e69-4dae-a864-fa816f5ebf6c/e5444063-b502-481c-ae2f-dd620d4f4997?org_if_sml=1240&force_format=original',
  vectorSrc2: '/external/vector5058-kcx.svg',
  logoAlt: 'logo3836',
  pastedImageAlt1: 'pastedImage',
  pastedImageAlt: 'pastedImage',
  imageSrc1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/e6d869ac-5e69-4dae-a864-fa816f5ebf6c/a69350fc-54e2-4d13-a035-98a86204e363?org_if_sml=11779&force_format=original',
  text1: 'Features',
  register: 'Register',
  instagramLogoAlt: 'InstagramLogo3836',
  vectorAlt2: 'Vector5058',
  imageSrc5: '/824d0c2137cb905341761b2e68e150d3%20(1)-1400w.webp',
  vectorSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/e6d869ac-5e69-4dae-a864-fa816f5ebf6c/7871b403-a319-4e4e-8b89-56d403f363db?org_if_sml=1416&force_format=original',
  imageSrc7: '/d983137c846a48267e759ec07a7da8c2-1400w.webp',
  searchAlt: 'Search3836',
  text2: 'Pricing',
  linkedinLogoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/e6d869ac-5e69-4dae-a864-fa816f5ebf6c/a70aef75-f2a9-462e-8d84-809d90176bf1?org_if_sml=11253&force_format=original',
  login: 'Login',
  imageAlt: 'image',
  imageAlt2: 'image',
  imageSrc6: '/d8ac7f2b7f7f5f00715d11c783e06cef-1400w.webp',
  vectorSrc1: '/external/vector4783-cfjx.svg',
  vectorAlt1: 'Vector4783',
  pastedImageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/e6d869ac-5e69-4dae-a864-fa816f5ebf6c/86fcb820-c661-4eee-b4fe-f43b5be51848?org_if_sml=1&q=801179964&force_format=original',
  imageSrc3: 'df3a2509-130a-467a-9c0b-1d3ef385506b',
  imageSrc: '25f15c73-c5a9-4387-a82c-c04308c022a3',
  searchSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/e6d869ac-5e69-4dae-a864-fa816f5ebf6c/fd7dc06a-6b42-4999-a1d4-239d1cb6379b?org_if_sml=1752&force_format=original',
  text3: 'Team',
  imageSrc2: '/external/cmenu-200h-200h.webp',
  hamburgerAlt: 'hamburger3836',
  videoSrc:
    'https://ik.imagekit.io/tosee/carassocompressed_Rzu68mstAH.mp4?updatedAt=1709743496164',
  logoSrc: '/external/logo3836-62nj.svg',
  facebookLogoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/e6d869ac-5e69-4dae-a864-fa816f5ebf6c/7ba27e81-13e2-4bdb-abf8-105d24ba6ee1?org_if_sml=1796&force_format=original',
  text: 'About',
  instagramLogoSrc: '/external/instagramlogo3836-7zpr.svg',
  linkedinLogoAlt: 'LinkedinLogo3836',
  arrow11Alt: 'Arrow113836',
  imageSrc8: '/05ca705391fa671987255fec1f5e1c92-1400w.webp',
  arrow11Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/e6d869ac-5e69-4dae-a864-fa816f5ebf6c/58870096-53c7-4343-9f3e-c3f53eab99dc?org_if_sml=1566&force_format=original',
  userCircleSrc: '/external/usercircle3836-orxy.svg',
  imageAlt4: 'image',
  userCircleAlt: 'UserCircle3836',
}

Header1.propTypes = {
  imageAlt1: PropTypes.string,
  pastedImageSrc1: PropTypes.string,
  text4: PropTypes.string,
  imageSrc4: PropTypes.string,
  vectorAlt: PropTypes.string,
  imageAlt3: PropTypes.string,
  facebookLogoAlt: PropTypes.string,
  imageAlt5: PropTypes.string,
  hamburgerSrc: PropTypes.string,
  vectorSrc2: PropTypes.string,
  logoAlt: PropTypes.string,
  pastedImageAlt1: PropTypes.string,
  pastedImageAlt: PropTypes.string,
  imageSrc1: PropTypes.string,
  text1: PropTypes.string,
  register: PropTypes.string,
  instagramLogoAlt: PropTypes.string,
  vectorAlt2: PropTypes.string,
  imageSrc5: PropTypes.string,
  vectorSrc: PropTypes.string,
  imageSrc7: PropTypes.string,
  searchAlt: PropTypes.string,
  text2: PropTypes.string,
  linkedinLogoSrc: PropTypes.string,
  login: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageSrc6: PropTypes.string,
  vectorSrc1: PropTypes.string,
  vectorAlt1: PropTypes.string,
  pastedImageSrc: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageSrc: PropTypes.string,
  searchSrc: PropTypes.string,
  text3: PropTypes.string,
  imageSrc2: PropTypes.string,
  hamburgerAlt: PropTypes.string,
  videoSrc: PropTypes.string,
  logoSrc: PropTypes.string,
  facebookLogoSrc: PropTypes.string,
  text: PropTypes.string,
  instagramLogoSrc: PropTypes.string,
  linkedinLogoAlt: PropTypes.string,
  arrow11Alt: PropTypes.string,
  imageSrc8: PropTypes.string,
  arrow11Src: PropTypes.string,
  userCircleSrc: PropTypes.string,
  imageAlt4: PropTypes.string,
  userCircleAlt: PropTypes.string,
}

export default Header1
