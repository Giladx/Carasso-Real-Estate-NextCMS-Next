import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import brandsPageInitialPropsTqAzResource from '../../resources/brands-page-initial-props-tq_az'
import brandsPageInitialPathsTqI6Resource from '../../resources/brands-page-initial-paths-tq_i6'

const Brands = (props) => {
  return (
    <>
      <div className="brands-container">
        <Head>
          <title>Brands - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Brands - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(BrandsEntity) => (
            <>
              <div className="brands-header">
                <div className="brands-navigationbar">
                  <img
                    alt="Search6424"
                    src="/external/search6424-y08t.svg"
                    className="brands-search"
                  />
                  <img
                    alt="logo6424"
                    src="/external/logo6424-2tt.svg"
                    className="brands-logo"
                  />
                  <img
                    alt="hamburger6424"
                    src="/external/hamburger6424-8rmp.svg"
                    className="brands-hamburger"
                  />
                </div>
              </div>
              <div className="brands-hero">
                <div className="brands-bread">
                  <div className="brands-breadcrumps">
                    <span className="brands-text">מיקרו</span>
                    <div className="brands-frame120"></div>
                    <span className="brands-text001">
                      <span>פרויקטים למגורים</span>
                    </span>
                    <div className="brands-frame119"></div>
                    <img
                      alt="House6411"
                      src="/external/house6411-pnwk.svg"
                      className="brands-house"
                    />
                  </div>
                </div>
                <div className="brands-content">
                  <div className="brands-projectlogo">
                    <div className="brands-logocontainer">
                      <div className="brands-frame">
                        <img
                          alt="Layer16413"
                          src={BrandsEntity?.mainLogo?.url}
                          className="brands-layer1"
                        />
                        <img
                          alt="Line476413"
                          src="/external/line476413-2jyk.svg"
                          className="brands-line47"
                        />
                        <span className="brands-text003">
                          {BrandsEntity?.streetC}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="brands-container1"></div>
                <img
                  alt="image"
                  src={BrandsEntity?.heroImage?.url}
                  className="brands-image"
                />
              </div>
              <div className="brands-sidebar">
                <div className="brands-frame146">
                  <div className="brands-sidebar1">
                    <img
                      alt="Layer16413"
                      src={BrandsEntity?.sidebarLogo?.url}
                      className="brands-layer11"
                    />
                    <div className="brands-frame67">
                      <span className="brands-text004">הפרויקט</span>
                      <span className="brands-text005">הפונקציונליות</span>
                      <span className="brands-text006">הדירות</span>
                      <span className="brands-text007">הסביבה</span>
                      <span className="brands-text008">סטטוסהתקדמות</span>
                      <span className="brands-text009">יצירת קשר</span>
                    </div>
                  </div>
                  <div className="brands-projectstatus">
                    <span className="brands-text010">
                      {BrandsEntity?.projectStatus}
                    </span>
                    <img
                      alt="Vector6411"
                      src="/external/vector6411-hdb.svg"
                      className="brands-vector"
                    />
                  </div>
                </div>
              </div>
              <div className="brands-concept">
                <div className="brands-container2">
                  <div className="brands-leftcoloumn">
                    <img
                      alt="image"
                      src={BrandsEntity?.mainFeaturedImage?.url}
                      className="brands-image01"
                    />
                  </div>
                  <div className="brands-rightcoloumn">
                    <div className="brands-conceptdetails">
                      <div className="brands-content1">
                        <div className="brands-container3">
                          <span className="brands-text011">
                            {BrandsEntity?.mainTitle}
                          </span>
                          <span className="brands-text012">
                            {BrandsEntity?.mainTitleBold}
                          </span>
                        </div>
                        <span className="brands-text013">
                          לעירוניים בנשמה, שרוצים לחיות במרחב מפנק וקומפקטי בלב
                          העיר,במרחק הליכה מכל מה שחשוב.ME-CRO מציע סביבת מגורים
                          בגישת Micro Living:תכנון הדירות נותן מענה חכם ויעיל
                          לכל צורך יומיומי ומנצל באופן מושלם כל סנטימטר.במרחבים
                          המשותפים יש גינה, פינות עבודה וחדר כביסה,כדי לפנות
                          מקום בדירות ולאפשר מפגש שכנים למי שרוצה בכך.
                        </span>
                      </div>
                      <div className="brands-numbersandtags">
                        <div className="brands-projectnumbers">
                          <div className="brands-frame29">
                            <span className="brands-text014">
                              <span>4-5</span>
                            </span>
                            <span className="brands-text016">
                              <span>חדרים</span>
                            </span>
                          </div>
                          <div className="brands-frame28">
                            <span className="brands-text018">
                              <span>613</span>
                            </span>
                            <span className="brands-text020">
                              <span>דירות</span>
                            </span>
                          </div>
                          <div className="brands-frame27">
                            <span className="brands-text022">
                              <span>31</span>
                            </span>
                            <span className="brands-text024">
                              <span>קומות</span>
                            </span>
                          </div>
                          <div className="brands-frame26">
                            <span className="brands-text026">6</span>
                            <span className="brands-text027">
                              <span>בניינים</span>
                            </span>
                          </div>
                        </div>
                        <div className="brands-projecttags">
                          <div className="brands-frame18">
                            <span className="brands-text029">
                              <span>אירוח</span>
                            </span>
                          </div>
                          <div className="brands-frame16">
                            <span className="brands-text031">
                              <span>אוהבי בישול</span>
                            </span>
                          </div>
                          <div className="brands-frame15">
                            <span className="brands-text033">
                              <span>גינת ירק</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="brands-sidebarcoloumn"></div>
              </div>
              <div className="brands-tab7 main-container">
                <div className="brands-container4 tabs">
                  <div className="brands-tabs tab-titles">
                    <div className="brands-frame156 tab-title">
                      <span className="brands-text035">
                        <span>המרחב הציבורי</span>
                      </span>
                    </div>
                    <div className="brands-frame157 tab-title">
                      <span className="brands-text037">
                        <span>סגנונות הדירות</span>
                      </span>
                    </div>
                    <div className="brands-frame154 tab-title">
                      <span className="brands-text039">
                        <span>תכנון גמיש וחכם</span>
                      </span>
                    </div>
                  </div>
                  <div className="brands-bottomrow tab-contents">
                    <div className="brands-taball tab-content">
                      <div className="brands-leftcoloumn01">
                        <div className="brands-content2">
                          <span className="brands-text041">
                            <span>
                              נגרות אדריכלית מותאמת לחלל ופתרונות ריהוט חכמים
                            </span>
                          </span>
                          <span className="brands-text043">
                            <span>
                              מלאכת תכנון הפנים של הפרויקט הופקדה בידיהם סטודיו
                              XS, משרד אדריכלים המתמחה בתכנון קומפקטי. הדירות
                              משלבות כסטנדרט, את כל הנגרות האדריכלית כדי להעניק
                              לדיירים חווית מגורים נוחה וחכמה.
                            </span>
                          </span>
                        </div>
                        <div className="brands-image02">
                          <div className="brands-imageintersection">
                            <div className="brands-frame150">
                              <div className="brands-circle">
                                <img
                                  alt="image"
                                  src="/circle-400w.webp"
                                  className="brands-image03"
                                />
                              </div>
                            </div>
                            <div className="brands-circle01"></div>
                          </div>
                        </div>
                      </div>
                      <div className="brands-rightcoloumn01">
                        <div className="brands-image04">
                          <div className="brands-frame1261158163">
                            <img
                              alt="MinimalC1web26654"
                              sizes="(min-width: 768px) 800px, 480px"
                              src="/external/minimalc1web26654-1jsr-600w.webp"
                              srcSet="external//minimalc1web26654-1jsr-600w.webp 800w, external/minimalc1web26654-1jsr-mobile.webp 480w"
                              className="brands-minimal-c1web2"
                            />
                            <img
                              alt="Line486654"
                              src="/external/line486654-mjwq.svg"
                              className="brands-line48"
                            />
                            <img
                              alt="Line496654"
                              src="/external/line496654-9dec.svg"
                              className="brands-line49"
                            />
                            <img
                              alt="Line506654"
                              src="/external/line506654-3l3a.svg"
                              className="brands-line50"
                            />
                            <img
                              alt="Line516654"
                              src="/external/line516654-09rl.svg"
                              className="brands-line51"
                            />
                            <img
                              alt="Line526654"
                              src="/external/line526654-45d.svg"
                              className="brands-line52"
                            />
                            <img
                              alt="Line556654"
                              src="/external/line556654-z4qb.svg"
                              className="brands-line55"
                            />
                            <img
                              alt="Line616654"
                              src="/external/line616654-cmn.svg"
                              className="brands-line61"
                            />
                            <img
                              alt="Line626654"
                              src="/external/line626654-kqkm.svg"
                              className="brands-line62"
                            />
                            <img
                              alt="Line636654"
                              src="/external/line636654-5iml.svg"
                              className="brands-line63"
                            />
                            <img
                              alt="Line646654"
                              src="/external/line646654-3xhn.svg"
                              className="brands-line64"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="brands-taball1 tab-content">
                      <div className="brands-leftcoloumn02">
                        <div className="brands-content3">
                          <span className="brands-text045">
                            <span>
                              נגרות אדריכלית מותאמת לחלל ופתרונות ריהוט חכמים
                            </span>
                          </span>
                          <span className="brands-text047">
                            <span>
                              מלאכת תכנון הפנים של הפרויקט הופקדה בידיהם סטודיו
                              XS, משרד אדריכלים המתמחה בתכנון קומפקטי. הדירות
                              משלבות כסטנדרט, את כל הנגרות האדריכלית כדי להעניק
                              לדיירים חווית מגורים נוחה וחכמה.
                            </span>
                          </span>
                        </div>
                        <div className="brands-image05">
                          <div className="brands-imageintersection1">
                            <div className="brands-frame1501">
                              <div className="brands-circle02">
                                <img
                                  alt="image"
                                  src="/circle-400w.webp"
                                  className="brands-image06"
                                />
                              </div>
                            </div>
                            <div className="brands-circle03"></div>
                          </div>
                        </div>
                      </div>
                      <div className="brands-rightcoloumn02">
                        <div className="brands-image07">
                          <div className="brands-frame12611581631">
                            <img
                              alt="MinimalC1web26654"
                              sizes="(min-width: 768px) 800px, 480px"
                              src="/external/minimalc1web26654-1jsr-600w.webp"
                              srcSet="external//minimalc1web26654-1jsr-600w.webp 800w, external/minimalc1web26654-1jsr-mobile.webp 480w"
                              className="brands-minimal-c1web21"
                            />
                            <img
                              alt="Line486654"
                              src="/external/line486654-mjwq.svg"
                              className="brands-line481"
                            />
                            <img
                              alt="Line496654"
                              src="/external/line496654-9dec.svg"
                              className="brands-line491"
                            />
                            <img
                              alt="Line506654"
                              src="/external/line506654-3l3a.svg"
                              className="brands-line501"
                            />
                            <img
                              alt="Line516654"
                              src="/external/line516654-09rl.svg"
                              className="brands-line511"
                            />
                            <img
                              alt="Line526654"
                              src="/external/line526654-45d.svg"
                              className="brands-line521"
                            />
                            <img
                              alt="Line556654"
                              src="/external/line556654-z4qb.svg"
                              className="brands-line551"
                            />
                            <img
                              alt="Line616654"
                              src="/external/line616654-cmn.svg"
                              className="brands-line611"
                            />
                            <img
                              alt="Line626654"
                              src="/external/line626654-kqkm.svg"
                              className="brands-line621"
                            />
                            <img
                              alt="Line636654"
                              src="/external/line636654-5iml.svg"
                              className="brands-line631"
                            />
                            <img
                              alt="Line646654"
                              src="/external/line646654-3xhn.svg"
                              className="brands-line641"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="brands-taball2 tab-content">
                      <div className="brands-leftcoloumn03">
                        <div className="brands-content4">
                          <span className="brands-text049">
                            <span>
                              נגרות אדריכלית מותאמת לחלל ופתרונות ריהוט חכמים
                            </span>
                          </span>
                          <span className="brands-text051">
                            <span>
                              מלאכת תכנון הפנים של הפרויקט הופקדה בידיהם סטודיו
                              XS, משרד אדריכלים המתמחה בתכנון קומפקטי. הדירות
                              משלבות כסטנדרט, את כל הנגרות האדריכלית כדי להעניק
                              לדיירים חווית מגורים נוחה וחכמה.
                            </span>
                          </span>
                        </div>
                        <div className="brands-image08">
                          <div className="brands-imageintersection2">
                            <div className="brands-frame1502">
                              <div className="brands-circle04">
                                <img
                                  alt="image"
                                  src="/circle-400w.webp"
                                  className="brands-image09"
                                />
                              </div>
                            </div>
                            <div className="brands-circle05"></div>
                          </div>
                        </div>
                      </div>
                      <div className="brands-rightcoloumn03">
                        <div className="brands-image10">
                          <div className="brands-frame12611581632">
                            <img
                              alt="MinimalC1web26654"
                              sizes="(min-width: 768px) 800px, 480px"
                              src="/external/minimalc1web26654-gb1-600w.webp"
                              srcSet="external//minimalc1web26654-gb1-600w.webp 800w, external/minimalc1web26654-gb1-mobile.webp 480w"
                              className="brands-minimal-c1web22"
                            />
                            <img
                              alt="Line486654"
                              src="/external/line486654-mjwq.svg"
                              className="brands-line482"
                            />
                            <img
                              alt="Line496654"
                              src="/external/line496654-9dec.svg"
                              className="brands-line492"
                            />
                            <img
                              alt="Line506654"
                              src="/external/line506654-3l3a.svg"
                              className="brands-line502"
                            />
                            <img
                              alt="Line516654"
                              src="/external/line516654-09rl.svg"
                              className="brands-line512"
                            />
                            <img
                              alt="Line526654"
                              src="/external/line526654-45d.svg"
                              className="brands-line522"
                            />
                            <img
                              alt="Line556654"
                              src="/external/line556654-z4qb.svg"
                              className="brands-line552"
                            />
                            <img
                              alt="Line616654"
                              src="/external/line616654-cmn.svg"
                              className="brands-line612"
                            />
                            <img
                              alt="Line626654"
                              src="/external/line626654-kqkm.svg"
                              className="brands-line622"
                            />
                            <img
                              alt="Line636654"
                              src="/external/line636654-5iml.svg"
                              className="brands-line632"
                            />
                            <img
                              alt="Line646654"
                              src="/external/line646654-3xhn.svg"
                              className="brands-line642"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                <div className="brands-sidebarcoloumn1"></div>
              </div>
              <div className="brands-bottomrow1">
                <div className="brands-rightcoloumn04">
                  <img
                    alt="Arrow6965"
                    src="/external/arrow6965-wxm.svg"
                    className="brands-arrow"
                  />
                </div>
                <div className="brands-leftcoloumn04">
                  <div className="brands-content5">
                    <span className="brands-text053">text</span>
                    <span className="brands-text054">text</span>
                    <div className="brands-image11">
                      <div className="brands-imageintersection3">
                        <div className="brands-frame1503">
                          <div className="brands-circle06">
                            <img
                              alt="image"
                              src="https://play.teleporthq.io/static/svg/default-img.svg"
                              className="brands-image12"
                            />
                          </div>
                        </div>
                        <div className="brands-circle07"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="brands-rightcoloumn05">
                  <div className="brands-image13">
                    <img
                      alt="image"
                      src="https://play.teleporthq.io/static/svg/default-img.svg"
                      className="brands-image14"
                    />
                  </div>
                  <div className="brands-gallerydots">
                    <div className="brands-frame167"></div>
                    <div className="brands-frame165"></div>
                    <div className="brands-frame166"></div>
                  </div>
                </div>
                <div className="brands-rightcoloumn06">
                  <img
                    alt="Arrow6965"
                    src="/external/arrow6965-gbh8.svg"
                    className="brands-arrow1"
                  />
                </div>
              </div>
              <div className="brands-tab41920">
                <div className="brands-container5">
                  <div className="brands-toprow">
                    <div className="brands-tabs1">
                      <div className="brands-frame155">
                        <span className="brands-text055">
                          <span>האדריכלות</span>
                        </span>
                      </div>
                      <div className="brands-frame1561">
                        <span className="brands-text057">
                          <span>המטבחים</span>
                        </span>
                      </div>
                      <div className="brands-frame1541">
                        <span className="brands-text059">
                          <span>הפסיליטיז</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="brands-bottomrow2">
                    <div className="brands-rightcoloumn07">
                      <img
                        alt="Arrow3710"
                        src="/external/arrow3710-igif.svg"
                        className="brands-arrow2"
                      />
                    </div>
                    <div className="brands-leftcoloumn05">
                      <div className="brands-content6">
                        <span className="brands-text061">
                          <span>הכנה לגינת תבלינים פרטית</span>
                        </span>
                        <span className="brands-text063">
                          <span>
                            פארק פרטי המשתרע על פני כעשרים דונמים הכולל עצי פרי
                            לצד צמחי תבלין, חדר יינות עם תא פרטי לכל דירה וחדר
                            ציוד לאירוח המצוי בכל בניין וכולל שולחנות וכיסאות
                            אותם תוכלו לשאול לאירועים פרטיים במידת הצורך.
                          </span>
                        </span>
                      </div>
                      <div className="brands-image15">
                        <div className="brands-imageintersection4">
                          <div className="brands-frame1504">
                            <div className="brands-circle08"></div>
                          </div>
                          <div className="brands-circle09"></div>
                        </div>
                      </div>
                    </div>
                    <div className="brands-rightcoloumn08">
                      <div className="brands-image16"></div>
                      <div className="brands-gallerydots1">
                        <div className="brands-frame1571"></div>
                        <div className="brands-frame159"></div>
                        <div className="brands-frame160"></div>
                        <div className="brands-frame161"></div>
                        <div className="brands-frame158"></div>
                      </div>
                    </div>
                    <div className="brands-rightcoloumn09">
                      <img
                        alt="Arrow3712"
                        src="/external/arrow3712-4l4.svg"
                        className="brands-arrow3"
                      />
                    </div>
                  </div>
                </div>
                <div className="brands-sidebarcoloumn2"></div>
              </div>
              <div className="brands-header1 main-container">
                <span className="brands-text065">הדרך שלנו לאורך השנים</span>
                <div className="brands-container6 tabs">
                  <div className="brands-years tab-titles">
                    <div className="brands-frame292 tab-title">
                      <img
                        alt="Line293716"
                        src="/external/line293716-ned.svg"
                        className="brands-line29"
                      />
                      <span className="brands-text066">1933</span>
                    </div>
                    <div className="brands-frame303 tab-title">
                      <img
                        alt="Line303716"
                        src="/external/line303716-l4p.svg"
                        className="brands-line30"
                      />
                      <span className="brands-text067">1945</span>
                    </div>
                    <div className="brands-frame296 tab-title">
                      <img
                        alt="Line293716"
                        src="/external/line293716-ckak.svg"
                        className="brands-line291"
                      />
                      <span className="brands-text068">2009</span>
                    </div>
                    <div className="brands-frame298 tab-title">
                      <img
                        alt="Line303716"
                        src="/external/line303716-d1y.svg"
                        className="brands-line301"
                      />
                      <span className="brands-text069">
                        <span>2010</span>
                      </span>
                    </div>
                    <div className="brands-frame300 tab-title">
                      <img
                        alt="Line293716"
                        src="/external/line293716-aerm.svg"
                        className="brands-line292"
                      />
                      <span className="brands-text071">2011</span>
                    </div>
                    <div className="brands-frame302 tab-title">
                      <img
                        alt="Line293716"
                        src="/external/line293716-ely6.svg"
                        className="brands-line293"
                      />
                      <span className="brands-text072">2019</span>
                    </div>
                    <div className="brands-frame293 tab-title">
                      <img
                        alt="Line293716"
                        src="/external/line293716-kkr7.svg"
                        className="brands-line294"
                      />
                      <span className="brands-text073">2022</span>
                    </div>
                  </div>
                  <div className="brands-content7 tab-contents">
                    <div className="brands-content-tab tab-content">
                      <div className="brands-leftcoloumn06">
                        <div className="brands-frame321">
                          <div className="brands-frame318">
                            <img
                              alt="Vector3716"
                              src="/external/vector3716-4qw.svg"
                              className="brands-vector1"
                            />
                            <span className="brands-text074">
                              <span>1933</span>
                            </span>
                          </div>
                          <div className="brands-frame320">
                            <span className="brands-text076">
                              <span>קרסו, נעים להכיר</span>
                            </span>
                            <span className="brands-text078">
                              <span>
                                משפחת קרסו הגיעה מפיראוס בתחילת המאה ה-20 ומאז
                                ועד היום אנחנו יוזמים מפתחים ומקימים פרויקטים
                                מגוונים ברחבי הארץ.
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <img
                        alt="rightcoloumn3716"
                        src="/external/rightcoloumn3716-96j.svg"
                        className="brands-rightcoloumn10"
                      />
                    </div>
                    <div className="brands-content-tab1 tab-content">
                      <div className="brands-leftcoloumn07">
                        <div className="brands-frame3211">
                          <div className="brands-frame3181">
                            <img
                              alt="Vector3716"
                              src="/external/vector3716-4qw.svg"
                              className="brands-vector2"
                            />
                            <span className="brands-text080">1945</span>
                          </div>
                          <div className="brands-frame3201">
                            <span className="brands-text081">
                              <span>קרסו, נעים להכיר</span>
                            </span>
                            <span className="brands-text083">
                              <span>
                                משפחת קרסו הגיעה מפיראוס בתחילת המאה ה-20 ומאז
                                ועד היום אנחנו יוזמים מפתחים ומקימים פרויקטים
                                מגוונים ברחבי הארץ.
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <img
                        alt="rightcoloumn3716"
                        src="/external/rightcoloumn3716-96j.svg"
                        className="brands-rightcoloumn11"
                      />
                    </div>
                    <div className="brands-content-tab2 tab-content">
                      <div className="brands-leftcoloumn08">
                        <div className="brands-frame3212">
                          <div className="brands-frame3182">
                            <img
                              alt="Vector3716"
                              src="/external/vector3716-4qw.svg"
                              className="brands-vector3"
                            />
                            <span className="brands-text085">2009</span>
                          </div>
                          <div className="brands-frame3202">
                            <span className="brands-text086">
                              <span>קרסו, נעים להכיר</span>
                            </span>
                            <span className="brands-text088">
                              <span>
                                משפחת קרסו הגיעה מפיראוס בתחילת המאה ה-20 ומאז
                                ועד היום אנחנו יוזמים מפתחים ומקימים פרויקטים
                                מגוונים ברחבי הארץ.
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <img
                        alt="rightcoloumn3716"
                        src="/external/rightcoloumn3716-96j.svg"
                        className="brands-rightcoloumn12"
                      />
                    </div>
                    <div className="brands-content-tab3 tab-content">
                      <div className="brands-leftcoloumn09">
                        <div className="brands-frame3213">
                          <div className="brands-frame3183">
                            <img
                              alt="Vector3716"
                              src="/external/vector3716-4qw.svg"
                              className="brands-vector4"
                            />
                            <span className="brands-text090">2010</span>
                          </div>
                          <div className="brands-frame3203">
                            <span className="brands-text091">
                              <span>קרסו, נעים להכיר</span>
                            </span>
                            <span className="brands-text093">
                              <span>
                                משפחת קרסו הגיעה מפיראוס בתחילת המאה ה-20 ומאז
                                ועד היום אנחנו יוזמים מפתחים ומקימים פרויקטים
                                מגוונים ברחבי הארץ.
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <img
                        alt="rightcoloumn3716"
                        src="/external/rightcoloumn3716-96j.svg"
                        className="brands-rightcoloumn13"
                      />
                    </div>
                    <div className="brands-content-tab4 tab-content">
                      <div className="brands-leftcoloumn10">
                        <div className="brands-frame3214">
                          <div className="brands-frame3184">
                            <img
                              alt="Vector3716"
                              src="/external/vector3716-4qw.svg"
                              className="brands-vector5"
                            />
                            <span className="brands-text095">2011</span>
                          </div>
                          <div className="brands-frame3204">
                            <span className="brands-text096">
                              <span>קרסו, נעים להכיר</span>
                            </span>
                            <span className="brands-text098">
                              <span>
                                משפחת קרסו הגיעה מפיראוס בתחילת המאה ה-20 ומאז
                                ועד היום אנחנו יוזמים מפתחים ומקימים פרויקטים
                                מגוונים ברחבי הארץ.
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <img
                        alt="rightcoloumn3716"
                        src="/external/rightcoloumn3716-96j.svg"
                        className="brands-rightcoloumn14"
                      />
                    </div>
                    <div className="brands-content-tab5 tab-content">
                      <div className="brands-leftcoloumn11">
                        <div className="brands-frame3215">
                          <div className="brands-frame3185">
                            <img
                              alt="Vector3716"
                              src="/external/vector3716-4qw.svg"
                              className="brands-vector6"
                            />
                            <span className="brands-text100">2019</span>
                          </div>
                          <div className="brands-frame3205">
                            <span className="brands-text101">
                              <span>קרסו, נעים להכיר</span>
                            </span>
                            <span className="brands-text103">
                              <span>
                                משפחת קרסו הגיעה מפיראוס בתחילת המאה ה-20 ומאז
                                ועד היום אנחנו יוזמים מפתחים ומקימים פרויקטים
                                מגוונים ברחבי הארץ.
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <img
                        alt="rightcoloumn3716"
                        src="/external/rightcoloumn3716-96j.svg"
                        className="brands-rightcoloumn15"
                      />
                    </div>
                    <div className="brands-content-tab6 tab-content">
                      <div className="brands-leftcoloumn12">
                        <div className="brands-frame3216">
                          <div className="brands-frame3186">
                            <img
                              alt="Vector3716"
                              src="/external/vector3716-4qw.svg"
                              className="brands-vector7"
                            />
                            <span className="brands-text105">2022</span>
                          </div>
                          <div className="brands-frame3206">
                            <span className="brands-text106">
                              <span>קרסו, נעים להכיר</span>
                            </span>
                            <span className="brands-text108">
                              <span>
                                משפחת קרסו הגיעה מפיראוס בתחילת המאה ה-20 ומאז
                                ועד היום אנחנו יוזמים מפתחים ומקימים פרויקטים
                                מגוונים ברחבי הארץ.
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <img
                        alt="rightcoloumn3716"
                        src="/external/rightcoloumn3716-96j.svg"
                        className="brands-rightcoloumn16"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          initialData={props.brandsEntity}
          persistDataDuringLoading={true}
          key={props?.brandsEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .brands-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .brands-header {
            gap: 32px;
            width: 100%;
            display: flex;
            z-index: 100;
            position: fixed;
            align-items: center;
            flex-shrink: 0;
            padding-top: 20px;
            padding-left: 90px;
            padding-right: 90px;
            padding-bottom: 20px;
            justify-content: space-between;
          }
          .brands-navigationbar {
            gap: 526px;
            display: flex;
            padding: 15px 30px;
            flex-grow: 1;
            box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.05000000074505806);
            align-items: center;
            border-color: rgba(255, 255, 255, 0.800000011920929);
            border-style: solid;
            border-width: 1px;
            border-radius: 15px;
            justify-content: space-between;
            background-color: rgba(255, 255, 255, 0.699999988079071);
          }
          .brands-search {
            width: 36px;
            height: 36px;
          }
          .brands-logo {
            width: 80px;
            height: 40px;
          }
          .brands-hamburger {
            width: 36px;
            height: 36px;
          }
          .brands-hero {
            gap: 50px;
            width: 100%;
            height: 750px;
            display: flex;
            padding: 90px 0 20px;
            overflow: hidden;
            position: relative;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: space-between;
          }
          .brands-bread {
            display: flex;
            z-index: 5;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            padding-top: 20px;
            padding-left: 90px;
            padding-right: 90px;
            padding-bottom: 20px;
            justify-content: flex-end;
          }
          .brands-breadcrumps {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .brands-text {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-frame120 {
            width: 10px;
            height: 1px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-carasso-plainwhite);
          }
          .brands-text001 {
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
          .brands-frame119 {
            width: 10px;
            height: 1px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-carasso-plainwhite);
          }
          .brands-house {
            width: 24px;
            height: 24px;
          }
          .brands-content {
            display: flex;
            z-index: 5;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            padding-top: 0px;
            padding-left: 90px;
            padding-right: 90px;
            padding-bottom: 0px;
            justify-content: flex-end;
          }
          .brands-projectlogo {
            gap: 10px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            padding-top: 0 360px 0 0;
            padding-left: 0 360px 0 0;
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: 0 360px 0 0;
            justify-content: center;
          }
          .brands-logocontainer {
            gap: 10px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .brands-frame {
            gap: 39px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .brands-layer1 {
            width: 293px;
            height: 230px;
          }
          .brands-line47 {
            width: 88px;
            height: 1px;
          }
          .brands-text003 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 25px;
            font-style: DemiBold;
            text-align: center;
            font-family: 'Ploni ML v2 AAA D-Bold';
            font-weight: 400;
            line-height: 80.0000011920929%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-container1 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 1;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0.4) 0%,
              rgba(0, 0, 0, 0.6) 100%
            );
          }
          .brands-image {
            top: 0px;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .brands-sidebar {
            top: 200px;
            flex: 0 0 auto;
            right: 0;
            width: 200px;
            display: flex;
            z-index: 100;
            position: fixed;
            align-items: flex-start;
            flex-direction: column;
          }
          .brands-frame146 {
            gap: 16px;
            display: flex;
            z-index: 100;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
          }
          .brands-sidebar1 {
            gap: 40px;
            display: flex;
            padding: 30px;
            box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.05000000074505806);
            align-items: center;
            border-radius: 15px;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(255, 255, 255, 0.699999988079071);
          }
          .brands-layer11 {
            width: 80px;
            height: 63px;
            text-decoration: none;
          }
          .brands-frame67 {
            gap: 29px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
          }
          .brands-text004 {
            color: var(--dl-color-carasso-primaryblack);
            cursor: pointer;
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-text005 {
            color: var(--dl-color-carasso-primaryblack);
            cursor: pointer;
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-text006 {
            color: var(--dl-color-carasso-primaryblack);
            cursor: pointer;
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-text007 {
            color: var(--dl-color-carasso-primaryblack);
            cursor: pointer;
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-text008 {
            color: var(--dl-color-carasso-primaryblack);
            cursor: pointer;
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-text009 {
            color: var(--dl-color-carasso-primaryblack);
            cursor: pointer;
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-projectstatus {
            gap: 10px;
            width: 100%;
            display: flex;
            padding: 10px 30px;
            box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.05000000074505806);
            align-items: center;
            flex-shrink: 0;
            border-radius: 8px;
            justify-content: center;
            background-color: rgba(255, 255, 255, 0.699999988079071);
          }
          .brands-text010 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: 'Ploni ML v2 AAA D-Bold';
            font-weight: 500;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-vector {
            width: 13px;
            height: 12px;
          }
          .brands-concept {
            gap: 90px;
            width: 100%;
            height: auto;
            display: flex;
            z-index: 1;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .brands-container2 {
            gap: 90px;
            width: 100%;
            height: auto;
            display: flex;
            padding: 160px 0 60px;
            flex-grow: 1;
            align-items: center;
            justify-content: flex-end;
          }
          .brands-leftcoloumn {
            gap: 10px;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-radius: 0 20px 20px 0;
            flex-direction: column;
            justify-content: flex-end;
          }
          .brands-image01 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius4);
            border-top-left-radius: 0;
            border-top-right-radius: var(--dl-radius-radius-radius20);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: var(--dl-radius-radius-radius20);
          }
          .brands-rightcoloumn {
            display: flex;
            padding: 70px 0;
            align-self: stretch;
            align-items: center;
            padding-top: 70px 0;
            justify-content: flex-end;
          }
          .brands-conceptdetails {
            gap: 100px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
          }
          .brands-content1 {
            gap: 48px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-container3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row-reverse;
          }
          .brands-text011 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 50px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 105%;
            margin-left: var(--dl-space-space-unit);
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-text012 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 50px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Bold';
            font-weight: 300;
            line-height: 105%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-text013 {
            color: var(--dl-color-carasso-primaryblack);
            width: 407px;
            height: auto;
            direction: rtl;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-numbersandtags {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-projectnumbers {
            gap: 30px;
            display: flex;
            align-items: flex-start;
          }
          .brands-frame29 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-text014 {
            color: var(--dl-color-carasso-primaryblack);
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
          .brands-text016 {
            color: var(--dl-color-carasso-primaryblack);
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
          .brands-frame28 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-text018 {
            color: var(--dl-color-carasso-primaryblack);
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
          .brands-text020 {
            color: var(--dl-color-carasso-primaryblack);
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
          .brands-frame27 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-text022 {
            color: var(--dl-color-carasso-primaryblack);
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
          .brands-text024 {
            color: var(--dl-color-carasso-primaryblack);
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
          .brands-frame26 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-text026 {
            color: var(--dl-color-carasso-primaryblack);
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
          .brands-text027 {
            color: var(--dl-color-carasso-primaryblack);
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
          .brands-projecttags {
            gap: 8px;
            display: flex;
            align-items: flex-start;
          }
          .brands-frame18 {
            gap: 10px;
            display: flex;
            padding: 7px;
            overflow: hidden;
            box-shadow: 0px 2px 23px 0px rgba(39, 39, 39, 0.10000000149011612);
            align-items: center;
            border-radius: 5px;
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .brands-text029 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 14px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-frame16 {
            gap: 10px;
            display: flex;
            padding: 7px;
            overflow: hidden;
            box-shadow: 0px 2px 23px 0px rgba(39, 39, 39, 0.10000000149011612);
            align-items: center;
            border-radius: 5px;
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .brands-text031 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 14px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-frame15 {
            gap: 10px;
            display: flex;
            padding: 7px;
            overflow: hidden;
            box-shadow: 0px 2px 23px 0px rgba(39, 39, 39, 0.10000000149011612);
            align-items: center;
            border-radius: 5px;
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .brands-text033 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 14px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-sidebarcoloumn {
            width: 288px;
            height: 783px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .brands-tab7 {
            width: 100%;
            height: auto;
            display: flex;
            padding: 30px 0;
            z-index: 2;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .brands-container4 {
            gap: 40px;
            width: 80%;
            display: flex;
            padding: 30px 0 30px 90px;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .brands-tabs {
            gap: 10px;
            display: flex;
            overflow: hidden;
            direction: rtl;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            flex-direction: row-reverse;
            justify-content: flex-end;
          }
          .brands-frame156 {
            gap: 10px;
            cursor: pointer;
            display: flex;
            padding: 0 0 16px;
            align-items: center;
            justify-content: center;
          }
          .brands-text035 {
            color: var(--dl-color-carasso-darkergray);
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
          .brands-frame157 {
            gap: 10px;
            cursor: pointer;
            display: flex;
            padding: 0 0 16px;
            align-items: center;
            margin-left: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
          }
          .brands-text037 {
            color: var(--dl-color-carasso-darkergray);
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
          .brands-frame154 {
            gap: 10px;
            cursor: pointer;
            display: flex;
            padding: 0 0 16px;
            align-items: center;
            margin-left: var(--dl-space-space-oneandhalfunits);
            border-color: rgba(42, 42, 42, 1);
            border-style: solid;
            border-width: 0 0 1px;
            justify-content: center;
          }
          .brands-text039 {
            color: var(--dl-color-carasso-primaryblack);
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
          .brands-bottomrow {
            gap: 10px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
          }
          .brands-taball {
            gap: 10px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
          }
          .brands-leftcoloumn01 {
            gap: 10px;
            width: 50%;
            display: flex;
            padding: 30px;
            align-self: stretch;
            align-items: flex-end;
            border-radius: 0 20px 20px 0;
            flex-direction: column;
          }
          .brands-content2 {
            gap: 30px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-text041 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-text043 {
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
          .brands-image02 {
            gap: 9.128329277038574px;
            display: flex;
            position: relative;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-imageintersection {
            display: flex;
            position: relative;
            align-items: flex-start;
            border-radius: 18.25665855407715px;
            justify-content: flex-end;
          }
          .brands-frame150 {
            width: 687.3632202148438px;
            height: 418.0774841308594px;
            overflow: hidden;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(68, 132, 68, 1);
            border-style: solid;
            border-width: 0.9128329157829285px;
            border-radius: 18.25665855407715px;
          }
          .brands-circle {
            top: 30px;
            right: 0px;
            width: 363px;
            height: 298px;
            display: flex;
            position: absolute;
            flex-shrink: 0;
            border-radius: 0 0 0 18.25665855407715px;
            flex-direction: column;
          }
          .brands-image03 {
            width: 100%;
            height: 100%;
            align-self: flex-end;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
            border-top-left-radius: 0;
            border-top-right-radius: 18.25665855407715px;
            border-bottom-left-radius: 18.25665855407715px;
            border-bottom-right-radius: 0;
          }
          .brands-circle01 {
            top: 0px;
            right: -175px;
            width: 539.4842529296875px;
            height: 327.70703125px;
            display: flex;
            z-index: 100;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(68, 132, 68, 1);
            border-style: solid;
            border-width: 0.9128329157829285px;
            border-radius: 18.25665855407715px;
          }
          .brands-rightcoloumn01 {
            gap: 10px;
            width: 50%;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
          }
          .brands-image04 {
            gap: 10px;
            width: 100%;
            display: flex;
            z-index: 0;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            border-radius: 20px;
          }
          .brands-frame1261158163 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .brands-minimal-c1web2 {
            width: 100%;
            height: 100%;
          }
          .brands-line48 {
            top: 115px;
            left: 60px;
            height: 92px;
            position: absolute;
          }
          .brands-line49 {
            top: 115px;
            left: 195px;
            width: auto;
            height: 92px;
            position: absolute;
            transform: rotate(180deg);
          }
          .brands-line50 {
            top: 115px;
            left: 480px;
            width: auto;
            height: 400px;
            position: absolute;
          }
          .brands-line51 {
            top: 410px;
            left: 175px;
            width: 385px;
            position: absolute;
          }
          .brands-line52 {
            top: 205px;
            left: 0px;
            width: 565px;
            position: absolute;
          }
          .brands-line55 {
            top: 455.46160888671875px;
            left: 0px;
            width: 175px;
            height: auto;
            position: absolute;
          }
          .brands-line61 {
            top: 563px;
            left: 175px;
            width: auto;
            height: auto;
            position: absolute;
          }
          .brands-line62 {
            right: -24px;
            width: 245px;
            bottom: -34px;
            height: auto;
            z-index: 100;
            position: absolute;
          }
          .brands-line63 {
            top: 317.3908386230469px;
            left: 403.3269348144531px;
            width: 162px;
            height: 1px;
            position: absolute;
          }
          .brands-line64 {
            top: 359.213134765625px;
            left: 389.57733154296875px;
            width: 268px;
            height: 1px;
            position: absolute;
          }
          .brands-taball1 {
            gap: 10px;
            display: none;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
          }
          .brands-leftcoloumn02 {
            gap: 10px;
            width: 50%;
            display: flex;
            padding: 30px;
            align-self: stretch;
            align-items: flex-end;
            border-radius: 0 20px 20px 0;
            flex-direction: column;
          }
          .brands-content3 {
            gap: 30px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-text045 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-text047 {
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
          .brands-image05 {
            gap: 9.128329277038574px;
            display: flex;
            position: relative;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-imageintersection1 {
            display: flex;
            position: relative;
            align-items: flex-start;
            border-radius: 18.25665855407715px;
            justify-content: flex-end;
          }
          .brands-frame1501 {
            width: 687.3632202148438px;
            height: 418.0774841308594px;
            overflow: hidden;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(68, 132, 68, 1);
            border-style: solid;
            border-width: 0.9128329157829285px;
            border-radius: 18.25665855407715px;
          }
          .brands-circle02 {
            top: 30px;
            right: 0px;
            width: 363px;
            height: 298px;
            display: flex;
            position: absolute;
            flex-shrink: 0;
            border-radius: 0 0 0 18.25665855407715px;
            flex-direction: column;
          }
          .brands-image06 {
            width: 100%;
            height: 100%;
            align-self: flex-end;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
            border-top-left-radius: 0;
            border-top-right-radius: 18.25665855407715px;
            border-bottom-left-radius: 18.25665855407715px;
            border-bottom-right-radius: 0;
          }
          .brands-circle03 {
            top: 0px;
            right: -175px;
            width: 539.4842529296875px;
            height: 327.70703125px;
            display: flex;
            z-index: 100;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(68, 132, 68, 1);
            border-style: solid;
            border-width: 0.9128329157829285px;
            border-radius: 18.25665855407715px;
          }
          .brands-rightcoloumn02 {
            gap: 10px;
            width: 50%;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
          }
          .brands-image07 {
            gap: 10px;
            width: 100%;
            display: flex;
            z-index: 0;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            border-radius: 20px;
          }
          .brands-frame12611581631 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .brands-minimal-c1web21 {
            width: 100%;
            height: 100%;
          }
          .brands-line481 {
            top: 115px;
            left: 60px;
            height: 92px;
            position: absolute;
          }
          .brands-line491 {
            top: 115px;
            left: 195px;
            width: auto;
            height: 92px;
            position: absolute;
            transform: rotate(180deg);
          }
          .brands-line501 {
            top: 115px;
            left: 480px;
            width: auto;
            height: 400px;
            position: absolute;
          }
          .brands-line511 {
            top: 410px;
            left: 175px;
            width: 385px;
            position: absolute;
          }
          .brands-line521 {
            top: 205px;
            left: 0px;
            width: 565px;
            position: absolute;
          }
          .brands-line551 {
            top: 455.46160888671875px;
            left: 0px;
            width: 175px;
            height: auto;
            position: absolute;
          }
          .brands-line611 {
            top: 563px;
            left: 175px;
            width: auto;
            height: auto;
            position: absolute;
          }
          .brands-line621 {
            right: -24px;
            width: 245px;
            bottom: -34px;
            height: auto;
            z-index: 100;
            position: absolute;
          }
          .brands-line631 {
            top: 317.3908386230469px;
            left: 403.3269348144531px;
            width: 162px;
            height: 1px;
            position: absolute;
          }
          .brands-line641 {
            top: 359.213134765625px;
            left: 389.57733154296875px;
            width: 268px;
            height: 1px;
            position: absolute;
          }
          .brands-taball2 {
            gap: 10px;
            display: none;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
          }
          .brands-leftcoloumn03 {
            gap: 10px;
            width: 50%;
            display: flex;
            padding: 30px;
            align-self: stretch;
            align-items: flex-end;
            border-radius: 0 20px 20px 0;
            flex-direction: column;
          }
          .brands-content4 {
            gap: 30px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-text049 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-text051 {
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
          .brands-image08 {
            gap: 9.128329277038574px;
            display: flex;
            position: relative;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-imageintersection2 {
            display: flex;
            position: relative;
            align-items: flex-start;
            border-radius: 18.25665855407715px;
            justify-content: flex-end;
          }
          .brands-frame1502 {
            width: 687.3632202148438px;
            height: 418.0774841308594px;
            overflow: hidden;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(68, 132, 68, 1);
            border-style: solid;
            border-width: 0.9128329157829285px;
            border-radius: 18.25665855407715px;
          }
          .brands-circle04 {
            top: 30px;
            right: 0px;
            width: 363px;
            height: 298px;
            display: flex;
            position: absolute;
            flex-shrink: 0;
            border-radius: 0 0 0 18.25665855407715px;
            flex-direction: column;
          }
          .brands-image09 {
            width: 100%;
            height: 100%;
            align-self: flex-end;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
            border-top-left-radius: 0;
            border-top-right-radius: 18.25665855407715px;
            border-bottom-left-radius: 18.25665855407715px;
            border-bottom-right-radius: 0;
          }
          .brands-circle05 {
            top: 0px;
            right: -175px;
            width: 539.4842529296875px;
            height: 327.70703125px;
            display: flex;
            z-index: 100;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(68, 132, 68, 1);
            border-style: solid;
            border-width: 0.9128329157829285px;
            border-radius: 18.25665855407715px;
          }
          .brands-rightcoloumn03 {
            gap: 10px;
            width: 50%;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
          }
          .brands-image10 {
            gap: 10px;
            width: 100%;
            display: flex;
            z-index: 0;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            border-radius: 20px;
          }
          .brands-frame12611581632 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .brands-minimal-c1web22 {
            width: 100%;
            height: 100%;
          }
          .brands-line482 {
            top: 115px;
            left: 60px;
            height: 92px;
            position: absolute;
          }
          .brands-line492 {
            top: 115px;
            left: 195px;
            width: auto;
            height: 92px;
            position: absolute;
            transform: rotate(180deg);
          }
          .brands-line502 {
            top: 115px;
            left: 480px;
            width: auto;
            height: 400px;
            position: absolute;
          }
          .brands-line512 {
            top: 410px;
            left: 175px;
            width: 385px;
            position: absolute;
          }
          .brands-line522 {
            top: 205px;
            left: 0px;
            width: 565px;
            position: absolute;
          }
          .brands-line552 {
            top: 455.46160888671875px;
            left: 0px;
            width: 175px;
            height: auto;
            position: absolute;
          }
          .brands-line612 {
            top: 563px;
            left: 175px;
            width: auto;
            height: auto;
            position: absolute;
          }
          .brands-line622 {
            right: -24px;
            width: 245px;
            bottom: -34px;
            height: auto;
            z-index: 100;
            position: absolute;
          }
          .brands-line632 {
            top: 317.3908386230469px;
            left: 403.3269348144531px;
            width: 162px;
            height: 1px;
            position: absolute;
          }
          .brands-line642 {
            top: 359.213134765625px;
            left: 389.57733154296875px;
            width: 268px;
            height: 1px;
            position: absolute;
          }
          .brands-sidebarcoloumn1 {
            width: 288px;
            height: 783px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .brands-bottomrow1 {
            gap: 10px;
            display: flex;
            padding: 0 0 0 40px;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
          }
          .brands-rightcoloumn04 {
            gap: 10px;
            display: flex;
            padding: 10px;
            overflow: hidden;
            align-self: center;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: space-between;
          }
          .brands-arrow {
            width: 28px;
            height: 28px;
          }
          .brands-leftcoloumn04 {
            gap: 10px;
            width: 461px;
            display: flex;
            padding: 20px;
            align-self: stretch;
            align-items: flex-end;
            margin-right: var(--dl-space-space-halfunit);
            border-radius: 0 20px 20px 0;
            flex-direction: column;
          }
          .brands-content5 {
            gap: 30px;
            width: 392px;
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-text053 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: DemiBold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Bold';
            font-weight: 400;
            line-height: 120.00000476837158%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-text054 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-image11 {
            gap: 9.128329277038574px;
            display: flex;
            position: relative;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-imageintersection3 {
            display: flex;
            position: relative;
            border-radius: 18.25665855407715px;
            flex-direction: row;
          }
          .brands-frame1503 {
            width: 687.3632202148438px;
            height: 418.0774841308594px;
            overflow: hidden;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(68, 132, 68, 1);
            border-style: solid;
            border-width: 0.9128329157829285px;
            border-radius: 18.25665855407715px;
          }
          .brands-circle06 {
            top: 30px;
            right: 0px;
            width: 363px;
            height: 298px;
            display: flex;
            position: absolute;
            flex-shrink: 0;
            border-radius: 0 0 0 18.25665855407715px;
            flex-direction: column;
          }
          .brands-image12 {
            width: 100%;
            height: 100%;
            align-self: flex-end;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
            border-top-left-radius: 0;
            border-top-right-radius: 18.25665855407715px;
            border-bottom-left-radius: 18.25665855407715px;
            border-bottom-right-radius: 0;
          }
          .brands-circle07 {
            top: 0px;
            right: -175px;
            width: 539.4842529296875px;
            height: 327.70703125px;
            display: flex;
            z-index: 1;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(68, 132, 68, 1);
            border-style: solid;
            border-width: 0.9128329157829285px;
            border-radius: 18.25665855407715px;
          }
          .brands-rightcoloumn05 {
            gap: 10px;
            width: 453px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
            justify-content: flex-start;
          }
          .brands-image13 {
            gap: 10px;
            width: auto;
            display: flex;
            padding: 10px;
            align-self: stretch;
            align-items: flex-start;
          }
          .brands-image14 {
            width: 432px;
            height: 490px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .brands-gallerydots {
            gap: 8px;
            display: flex;
            padding: 4px 0;
            overflow: hidden;
            align-items: center;
            justify-content: center;
          }
          .brands-frame167 {
            width: 6px;
            height: 6px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 99px;
            background-color: var(--dl-color-carasso-graytextcolor);
          }
          .brands-frame165 {
            width: 6px;
            height: 6px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 99px;
            background-color: var(--dl-color-carasso-graytextcolor);
          }
          .brands-frame166 {
            width: 8px;
            height: 8px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 99px;
            background-color: var(--dl-color-carasso-primaryblack);
          }
          .brands-rightcoloumn06 {
            gap: 10px;
            display: flex;
            padding: 10px;
            overflow: hidden;
            align-self: center;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: space-between;
          }
          .brands-arrow1 {
            width: 28px;
            height: 28px;
          }
          .brands-tab41920 {
            gap: 90px;
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-carasso-backgroundcolor);
          }
          .brands-container5 {
            gap: 10px;
            width: 1600px;
            display: flex;
            padding: 30px 0;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .brands-toprow {
            gap: 10px;
            display: flex;
            padding: 0 0 30px;
            overflow: hidden;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .brands-tabs1 {
            gap: 40px;
            display: flex;
            align-items: flex-start;
          }
          .brands-frame155 {
            gap: 10px;
            display: flex;
            padding: 0 0 16px;
            align-items: center;
            justify-content: center;
          }
          .brands-text055 {
            color: var(--dl-color-carasso-darkergray);
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
          .brands-frame1561 {
            gap: 10px;
            display: flex;
            padding: 0 0 16px;
            align-items: center;
            justify-content: center;
          }
          .brands-text057 {
            color: var(--dl-color-carasso-darkergray);
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
          .brands-frame1541 {
            gap: 10px;
            display: flex;
            padding: 0 0 16px;
            align-items: center;
            border-color: rgba(42, 42, 42, 1);
            border-style: solid;
            border-width: 0 0 1px;
            justify-content: center;
          }
          .brands-text059 {
            color: var(--dl-color-carasso-primaryblack);
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
          .brands-bottomrow2 {
            gap: 10px;
            display: flex;
            padding: 0 0 0 40px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .brands-rightcoloumn07 {
            gap: 10px;
            height: 649px;
            display: flex;
            padding: 10px;
            overflow: hidden;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: space-between;
          }
          .brands-arrow2 {
            width: 28px;
            height: 28px;
          }
          .brands-leftcoloumn05 {
            gap: 10px;
            display: flex;
            padding: 30px;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            border-radius: 0 20px 20px 0;
            flex-direction: column;
          }
          .brands-content6 {
            gap: 30px;
            height: 121px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .brands-text061 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-text063 {
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
          .brands-image15 {
            gap: 10px;
            display: flex;
            position: relative;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-imageintersection4 {
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .brands-frame1504 {
            width: 799.3421020507812px;
            height: 486px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(199, 154, 121, 1);
            border-style: solid;
            border-width: 1.176755428314209px;
            border-radius: 21.31578826904297px;
          }
          .brands-circle08 {
            top: -85.26305389404297px;
            left: 529.697509765625px;
            width: 468px;
            height: 466.8157653808594px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(199, 154, 121, 1);
            border-style: solid;
            border-width: 1.0657894611358643px;
            border-radius: 1064.7237548828125px;
          }
          .brands-circle09 {
            width: 467.8815612792969px;
            height: 466.8157653808594px;
            display: flex;
            z-index: 1;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(199, 154, 121, 1);
            border-style: solid;
            border-width: 1.176755428314209px;
            border-radius: 1064.7237548828125px;
          }
          .brands-rightcoloumn08 {
            gap: 10px;
            height: 649px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .brands-image16 {
            gap: 10px;
            display: flex;
            padding: 10px;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            border-radius: 20px;
          }
          .brands-gallerydots1 {
            gap: 8px;
            display: flex;
            padding: 4px 0;
            overflow: hidden;
            align-items: center;
            justify-content: center;
          }
          .brands-frame1571 {
            width: 6px;
            height: 6px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 99px;
            background-color: var(--dl-color-carasso-graytextcolor);
          }
          .brands-frame159 {
            width: 6px;
            height: 6px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 99px;
            background-color: var(--dl-color-carasso-graytextcolor);
          }
          .brands-frame160 {
            width: 6px;
            height: 6px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 99px;
            background-color: var(--dl-color-carasso-graytextcolor);
          }
          .brands-frame161 {
            width: 6px;
            height: 6px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 99px;
            background-color: var(--dl-color-carasso-graytextcolor);
          }
          .brands-frame158 {
            width: 8px;
            height: 8px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 99px;
            background-color: var(--dl-color-carasso-primaryblack);
          }
          .brands-rightcoloumn09 {
            gap: 10px;
            height: 649px;
            display: flex;
            padding: 10px;
            overflow: hidden;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: space-between;
          }
          .brands-arrow3 {
            width: 28px;
            height: 28px;
          }
          .brands-sidebarcoloumn2 {
            height: 800px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .brands-header1 {
            gap: 80px;
            display: flex;
            align-self: stretch;
            flex-direction: column;
          }
          .brands-text065 {
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
          .brands-container6 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .brands-years {
            gap: 56.000003814697266px;
            display: flex;
            padding: 0 413.3333740234375px;
            direction: rtl;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .brands-frame292 {
            cursor: pointer;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            padding-top: 5px;
            flex-direction: column;
          }
          .brands-line29 {
            width: 20px;
            height: 1px;
          }
          .brands-text066 {
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
          .brands-frame303 {
            cursor: pointer;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            padding-top: 5px;
            flex-direction: column;
          }
          .brands-line30 {
            width: 7px;
            height: 1px;
          }
          .brands-text067 {
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
          .brands-frame296 {
            cursor: pointer;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            padding-top: 5px;
            flex-direction: column;
          }
          .brands-line291 {
            width: 7px;
            height: 1px;
          }
          .brands-text068 {
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
          .brands-frame298 {
            cursor: pointer;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            padding-top: 5px;
            flex-direction: column;
          }
          .brands-line301 {
            width: 7px;
            height: 1px;
          }
          .brands-text069 {
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
          .brands-frame300 {
            cursor: pointer;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            padding-top: 5px;
            flex-direction: column;
          }
          .brands-line292 {
            width: 7px;
            height: 1px;
          }
          .brands-text071 {
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
          .brands-frame302 {
            cursor: pointer;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            padding-top: 5px;
            flex-direction: column;
          }
          .brands-line293 {
            width: 7px;
            height: 1px;
          }
          .brands-text072 {
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
          .brands-frame293 {
            cursor: pointer;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            padding-top: 5px;
            flex-direction: column;
          }
          .brands-line294 {
            width: 7px;
            height: 1px;
          }
          .brands-text073 {
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
          .brands-content7 {
            display: flex;
            padding: 66.66667175292969px 13.333334922790527px 0;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            justify-content: center;
          }
          .brands-content-tab {
            display: flex;
            padding: 66.66667175292969px 13.333334922790527px 0;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            justify-content: center;
          }
          .brands-leftcoloumn06 {
            gap: 13.333334922790527px;
            height: 515.3333740234375px;
            display: flex;
            padding: 0 42.66667175292969px 0 0;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .brands-frame321 {
            gap: 53.33333969116211px;
            width: 472.0000305175781px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .brands-frame318 {
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
          .brands-vector1 {
            width: 23px;
            height: 25px;
          }
          .brands-text074 {
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
          .brands-frame320 {
            gap: 53.33333969116211px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-text076 {
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
          .brands-text078 {
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
          .brands-rightcoloumn10 {
            width: 493px;
            height: 440px;
          }
          .brands-content-tab1 {
            display: none;
            padding: 66.66667175292969px 13.333334922790527px 0;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            justify-content: center;
          }
          .brands-leftcoloumn07 {
            gap: 13.333334922790527px;
            height: 515.3333740234375px;
            display: flex;
            padding: 0 42.66667175292969px 0 0;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .brands-frame3211 {
            gap: 53.33333969116211px;
            width: 472.0000305175781px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .brands-frame3181 {
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
          .brands-vector2 {
            width: 23px;
            height: 25px;
          }
          .brands-text080 {
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
          .brands-frame3201 {
            gap: 53.33333969116211px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-text081 {
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
          .brands-text083 {
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
          .brands-rightcoloumn11 {
            width: 493px;
            height: 440px;
          }
          .brands-content-tab2 {
            display: none;
            padding: 66.66667175292969px 13.333334922790527px 0;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            justify-content: center;
          }
          .brands-leftcoloumn08 {
            gap: 13.333334922790527px;
            height: 515.3333740234375px;
            display: flex;
            padding: 0 42.66667175292969px 0 0;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .brands-frame3212 {
            gap: 53.33333969116211px;
            width: 472.0000305175781px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .brands-frame3182 {
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
          .brands-vector3 {
            width: 23px;
            height: 25px;
          }
          .brands-text085 {
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
          .brands-frame3202 {
            gap: 53.33333969116211px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-text086 {
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
          .brands-text088 {
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
          .brands-rightcoloumn12 {
            width: 493px;
            height: 440px;
          }
          .brands-content-tab3 {
            display: none;
            padding: 66.66667175292969px 13.333334922790527px 0;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            justify-content: center;
          }
          .brands-leftcoloumn09 {
            gap: 13.333334922790527px;
            height: 515.3333740234375px;
            display: flex;
            padding: 0 42.66667175292969px 0 0;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .brands-frame3213 {
            gap: 53.33333969116211px;
            width: 472.0000305175781px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .brands-frame3183 {
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
          .brands-vector4 {
            width: 23px;
            height: 25px;
          }
          .brands-text090 {
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
          .brands-frame3203 {
            gap: 53.33333969116211px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-text091 {
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
          .brands-text093 {
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
          .brands-rightcoloumn13 {
            width: 493px;
            height: 440px;
          }
          .brands-content-tab4 {
            display: none;
            padding: 66.66667175292969px 13.333334922790527px 0;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            justify-content: center;
          }
          .brands-leftcoloumn10 {
            gap: 13.333334922790527px;
            height: 515.3333740234375px;
            display: flex;
            padding: 0 42.66667175292969px 0 0;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .brands-frame3214 {
            gap: 53.33333969116211px;
            width: 472.0000305175781px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .brands-frame3184 {
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
          .brands-vector5 {
            width: 23px;
            height: 25px;
          }
          .brands-text095 {
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
          .brands-frame3204 {
            gap: 53.33333969116211px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-text096 {
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
          .brands-text098 {
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
          .brands-rightcoloumn14 {
            width: 493px;
            height: 440px;
          }
          .brands-content-tab5 {
            display: none;
            padding: 66.66667175292969px 13.333334922790527px 0;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            justify-content: center;
          }
          .brands-leftcoloumn11 {
            gap: 13.333334922790527px;
            height: 515.3333740234375px;
            display: flex;
            padding: 0 42.66667175292969px 0 0;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .brands-frame3215 {
            gap: 53.33333969116211px;
            width: 472.0000305175781px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .brands-frame3185 {
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
          .brands-vector6 {
            width: 23px;
            height: 25px;
          }
          .brands-text100 {
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
          .brands-frame3205 {
            gap: 53.33333969116211px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-text101 {
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
          .brands-text103 {
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
          .brands-rightcoloumn15 {
            width: 493px;
            height: 440px;
          }
          .brands-content-tab6 {
            display: none;
            padding: 66.66667175292969px 13.333334922790527px 0;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            justify-content: center;
          }
          .brands-leftcoloumn12 {
            gap: 13.333334922790527px;
            height: 515.3333740234375px;
            display: flex;
            padding: 0 42.66667175292969px 0 0;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .brands-frame3216 {
            gap: 53.33333969116211px;
            width: 472.0000305175781px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .brands-frame3186 {
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
          .brands-vector7 {
            width: 23px;
            height: 25px;
          }
          .brands-text105 {
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
          .brands-frame3206 {
            gap: 53.33333969116211px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-text106 {
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
          .brands-text108 {
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
          .brands-rightcoloumn16 {
            width: 493px;
            height: 440px;
          }
          @media (max-width: 1440px) {
            .brands-bottomrow1 {
              width: 1000px;
            }
            .brands-rightcoloumn05 {
              justify-content: flex-start;
            }
            .brands-image14 {
              align-self: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

Brands.defaultProps = {
  brandsEntity: [],
}

Brands.propTypes = {
  brandsEntity: PropTypes.array,
}

export default Brands

export async function getStaticProps(context) {
  try {
    const response = await brandsPageInitialPropsTqAzResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        brandsEntity: response?.data?.[0],
        ...response?.meta,
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

export async function getStaticPaths() {
  try {
    const response = await brandsPageInitialPathsTqI6Resource({
      content_type: 'brands',
      select: 'sys.id',
    })
    return {
      paths: (response?.data || []).map((item) => {
        return {
          params: {
            id: (item?.sys?.id).toString(),
          },
        }
      }),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}
