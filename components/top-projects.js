import React, { useState } from 'react'

import PropTypes from 'prop-types'

const TopProjects = (props) => {
  const [slider1isVisible, setSlider1isVisible] = useState(true)
  const [slider2isVisible, setSlider2isVisible] = useState(true)
  return (
    <>
      <div className="top-projects-top-projects">
        <div className="top-projects-backgroundelipse"></div>
        <div className="top-projects-content">
          <div className="top-projects-projectsandheaders">
            <span className="top-projects-text">
              <span className="top-projects-text01">הפרויקטים</span>
              <span className="top-projects-text02">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="top-projects-text03">הנבחרים שלנו</span>
            </span>
            <div className="top-projects-tabs">
              {!slider1isVisible && (
                <div
                  onClick={() => {
                    setSlider2isVisible(!slider2isVisible)
                    setSlider1isVisible(!slider1isVisible)
                  }}
                  className="top-projects-frame156"
                >
                  <span className="top-projects-text04">
                    <span>תמ״א 38/2</span>
                  </span>
                </div>
              )}
              {!slider2isVisible && (
                <div
                  onClick={() => {
                    setSlider1isVisible(!slider1isVisible)
                    setSlider2isVisible(!slider2isVisible)
                  }}
                  className="top-projects-frame154"
                >
                  <span className="top-projects-text06">
                    <span>פינוי בינוי</span>
                  </span>
                </div>
              )}
              {slider2isVisible && (
                <div
                  onClick={() => {
                    setSlider2isVisible(!slider2isVisible)
                    setSlider1isVisible(!slider1isVisible)
                  }}
                  className="top-projects-frame1561"
                >
                  <span className="top-projects-text08">
                    <span>תמ״א 38/2</span>
                  </span>
                </div>
              )}
              {slider1isVisible && (
                <div
                  onClick={() => {
                    setSlider1isVisible(!slider1isVisible)
                    setSlider2isVisible(!slider2isVisible)
                  }}
                  className="top-projects-frame1541"
                >
                  <span className="top-projects-text10">
                    <span>פינוי בינוי</span>
                  </span>
                </div>
              )}
            </div>
            {slider1isVisible && (
              <div className="top-projects-urbanrenewalprojects">
                <div
                  data-thq="slider"
                  data-navigation="true"
                  data-pagination="false"
                  className="top-projects-slider swiper"
                >
                  <div data-thq="slider-wrapper" className="swiper-wrapper">
                    <div
                      data-thq="slider-slide"
                      className="top-projects-slider-slide swiper-slide"
                    >
                      <div className="top-projects-leftcoloumn">
                        <div className="top-projects-projectimageandtags">
                          <div className="top-projects-frame33">
                            <div className="top-projects-projectdetails">
                              <div className="top-projects-projectdetails01">
                                <div className="top-projects-container">
                                  <div className="top-projects-projectnamelocation">
                                    <span className="top-projects-text12">
                                      <span>ירושלים</span>
                                    </span>
                                    <span className="top-projects-text14">
                                      <span>דרך חברון התנופה</span>
                                    </span>
                                  </div>
                                  <span className="top-projects-text16">
                                    פרויקט פינוי בינוי בדרך חברון, הממוקם בשכונת
                                    תלפיות, סמוך לאזור התעשייה הידוע, ממערב לדרך
                                    חברון. התכנית כוללת הריסת 136 יחידות דיור
                                    והקמת 450 יח״ד ב-4 מגדלים הכוללים קומת מסחר,
                                    ושטחי ציבור.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <img
                            alt={props.imageAlt}
                            sizes="(min-width: 768px) 800px, 480px"
                            src="/external/1fff79fb16c5cb75fb3cfda99ba4dc3b-700w-700w.webp"
                            srcSet="external//1fff79fb16c5cb75fb3cfda99ba4dc3b-700w-700w.webp 800w, external/1fff79fb16c5cb75fb3cfda99ba4dc3b-700w-mobile.webp 480w"
                            className="top-projects-image"
                          />
                          <div className="top-projects-container01"></div>
                        </div>
                      </div>
                      <div className="top-projects-rightcoloumn">
                        <div className="top-projects-projectimageandtags01">
                          <div className="top-projects-frame3301">
                            <div className="top-projects-projectdetails02">
                              <div className="top-projects-projectdetails03">
                                <div className="top-projects-projectnamelocation01">
                                  <span className="top-projects-text17">
                                    <span>ירושלים</span>
                                  </span>
                                  <span className="top-projects-text19">
                                    <span>קריית היובל</span>
                                  </span>
                                </div>
                                <span className="top-projects-text21">
                                  <span>
                                    קרית יובל: השכונה האהובה, מתחדשת והופכת
                                    למתחם עירוני מעורר השראה. המתחם, המתפרס
                                    לאורך חלקו הצפוני של רחוב טהון, מהווה מרחב
                                    עירוני פורץ דרך ומעניק את החוויה האורבנית
                                    המושלמת. בליבו מתחם פנאי, קניות ובילוי חי
                                    ותוסס לאורך כל שעות היום.
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <img
                            alt={props.imageAlt1}
                            src="/external/7bf6c9d4a441e73511f0390b6b541a6b-1300w-500h-500h.webp"
                            className="top-projects-image01"
                          />
                          <div className="top-projects-container02"></div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-thq="slider-slide"
                      className="top-projects-slider-slide1 swiper-slide"
                    >
                      <div className="top-projects-leftcoloumn1">
                        <div className="top-projects-projectimageandtags02">
                          <div className="top-projects-frame3302">
                            <div className="top-projects-projectdetails04">
                              <div className="top-projects-projectdetails05">
                                <div className="top-projects-container03">
                                  <div className="top-projects-projectnamelocation02">
                                    <span className="top-projects-text23">
                                      <span>ירושלים</span>
                                    </span>
                                    <span className="top-projects-text25">
                                      <span>דרך חברון התנופה</span>
                                    </span>
                                  </div>
                                  <span className="top-projects-text27">
                                    פרויקט פינוי בינוי בדרך חברון, הממוקם בשכונת
                                    תלפיות, סמוך לאזור התעשייה הידוע, ממערב לדרך
                                    חברון. התכנית כוללת הריסת 136 יחידות דיור
                                    והקמת 450 יח״ד ב-4 מגדלים הכוללים קומת מסחר,
                                    ושטחי ציבור.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <img
                            alt={props.imageAlt}
                            sizes="(min-width: 768px) 800px, 480px"
                            src="/external/1fff79fb16c5cb75fb3cfda99ba4dc3b-700w-700w.webp"
                            srcSet="external//1fff79fb16c5cb75fb3cfda99ba4dc3b-700w-700w.webp 800w, external/1fff79fb16c5cb75fb3cfda99ba4dc3b-700w-mobile.webp 480w"
                            className="top-projects-image02"
                          />
                          <div className="top-projects-container04"></div>
                        </div>
                      </div>
                      <div className="top-projects-rightcoloumn1">
                        <div className="top-projects-projectimageandtags03">
                          <div className="top-projects-frame3303">
                            <div className="top-projects-projectdetails06">
                              <div className="top-projects-projectdetails07">
                                <div className="top-projects-projectnamelocation03">
                                  <span className="top-projects-text28">
                                    <span>ירושלים</span>
                                  </span>
                                  <span className="top-projects-text30">
                                    <span>קריית היובל</span>
                                  </span>
                                </div>
                                <span className="top-projects-text32">
                                  <span>
                                    קרית יובל: השכונה האהובה, מתחדשת והופכת
                                    למתחם עירוני מעורר השראה. המתחם, המתפרס
                                    לאורך חלקו הצפוני של רחוב טהון, מהווה מרחב
                                    עירוני פורץ דרך ומעניק את החוויה האורבנית
                                    המושלמת. בליבו מתחם פנאי, קניות ובילוי חי
                                    ותוסס לאורך כל שעות היום.
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <img
                            alt={props.imageAlt1}
                            src="/external/7bf6c9d4a441e73511f0390b6b541a6b-1300w-500h-500h.webp"
                            className="top-projects-image03"
                          />
                          <div className="top-projects-container05"></div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-thq="slider-slide"
                      className="top-projects-slider-slide2 swiper-slide"
                    >
                      <div className="top-projects-leftcoloumn2">
                        <div className="top-projects-projectimageandtags04">
                          <div className="top-projects-frame3304">
                            <div className="top-projects-projectdetails08">
                              <div className="top-projects-projectdetails09">
                                <div className="top-projects-container06">
                                  <div className="top-projects-projectnamelocation04">
                                    <span className="top-projects-text34">
                                      <span>ירושלים</span>
                                    </span>
                                    <span className="top-projects-text36">
                                      <span>דרך חברון התנופה</span>
                                    </span>
                                  </div>
                                  <span className="top-projects-text38">
                                    פרויקט פינוי בינוי בדרך חברון, הממוקם בשכונת
                                    תלפיות, סמוך לאזור התעשייה הידוע, ממערב לדרך
                                    חברון. התכנית כוללת הריסת 136 יחידות דיור
                                    והקמת 450 יח״ד ב-4 מגדלים הכוללים קומת מסחר,
                                    ושטחי ציבור.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <img
                            alt={props.imageAlt}
                            sizes="(min-width: 768px) 800px, 480px"
                            src="/external/1fff79fb16c5cb75fb3cfda99ba4dc3b-700w-700w.webp"
                            srcSet="external//1fff79fb16c5cb75fb3cfda99ba4dc3b-700w-700w.webp 800w, external/1fff79fb16c5cb75fb3cfda99ba4dc3b-700w-mobile.webp 480w"
                            className="top-projects-image04"
                          />
                          <div className="top-projects-container07"></div>
                        </div>
                      </div>
                      <div className="top-projects-rightcoloumn2">
                        <div className="top-projects-projectimageandtags05">
                          <div className="top-projects-frame3305">
                            <div className="top-projects-projectdetails10">
                              <div className="top-projects-projectdetails11">
                                <div className="top-projects-projectnamelocation05">
                                  <span className="top-projects-text39">
                                    <span>ירושלים</span>
                                  </span>
                                  <span className="top-projects-text41">
                                    <span>קריית היובל</span>
                                  </span>
                                </div>
                                <span className="top-projects-text43">
                                  <span>
                                    קרית יובל: השכונה האהובה, מתחדשת והופכת
                                    למתחם עירוני מעורר השראה. המתחם, המתפרס
                                    לאורך חלקו הצפוני של רחוב טהון, מהווה מרחב
                                    עירוני פורץ דרך ומעניק את החוויה האורבנית
                                    המושלמת. בליבו מתחם פנאי, קניות ובילוי חי
                                    ותוסס לאורך כל שעות היום.
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <img
                            alt={props.imageAlt1}
                            src="/external/7bf6c9d4a441e73511f0390b6b541a6b-1300w-500h-500h.webp"
                            className="top-projects-image05"
                          />
                          <div className="top-projects-container08"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-thq="slider-pagination"
                    className="top-projects-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
                  >
                    <div
                      data-thq="slider-pagination-bullet"
                      className="top-projects-slider-pagination-bullet swiper-pagination-bullet"
                    ></div>
                    <div
                      data-thq="slider-pagination-bullet"
                      className="swiper-pagination-bullet"
                    ></div>
                    <div
                      data-thq="slider-pagination-bullet"
                      className="swiper-pagination-bullet"
                    ></div>
                  </div>
                  <div
                    data-thq="slider-button-prev"
                    className="top-projects-slider-button-prev swiper-button-prev"
                  ></div>
                  <div
                    data-thq="slider-button-next"
                    className="top-projects-slider-button-next swiper-button-next"
                  ></div>
                </div>
              </div>
            )}
            {!slider2isVisible && (
              <div className="top-projects-urbanrenewalprojects1">
                <div
                  data-thq="slider"
                  data-navigation="true"
                  data-pagination="false"
                  className="top-projects-slider1 swiper"
                >
                  <div data-thq="slider-wrapper" className="swiper-wrapper">
                    <div
                      data-thq="slider-slide"
                      className="top-projects-slider-slide3 swiper-slide"
                    >
                      <div className="top-projects-leftcoloumn3">
                        <div className="top-projects-projectimageandtags06">
                          <div className="top-projects-frame3306">
                            <div className="top-projects-projectdetails12">
                              <div className="top-projects-projectdetails13">
                                <div className="top-projects-container09">
                                  <div className="top-projects-projectnamelocation06">
                                    <span className="top-projects-text45">
                                      <span>ירושלים</span>
                                    </span>
                                    <span className="top-projects-text47">
                                      <span>דרך חברון התנופה</span>
                                    </span>
                                  </div>
                                  <span className="top-projects-text49">
                                    פרויקט פינוי בינוי בדרך חברון, הממוקם בשכונת
                                    תלפיות, סמוך לאזור התעשייה הידוע, ממערב לדרך
                                    חברון. התכנית כוללת הריסת 136 יחידות דיור
                                    והקמת 450 יח״ד ב-4 מגדלים הכוללים קומת מסחר,
                                    ושטחי ציבור.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <img
                            alt={props.imageAlt}
                            sizes="(min-width: 768px) 800px, 480px"
                            src="/external/1fff79fb16c5cb75fb3cfda99ba4dc3b-700w-700w.webp"
                            srcSet="external//1fff79fb16c5cb75fb3cfda99ba4dc3b-700w-700w.webp 800w, external/1fff79fb16c5cb75fb3cfda99ba4dc3b-700w-mobile.webp 480w"
                            className="top-projects-image06"
                          />
                          <div className="top-projects-container10"></div>
                        </div>
                      </div>
                      <div className="top-projects-rightcoloumn3">
                        <div className="top-projects-projectimageandtags07">
                          <div className="top-projects-frame3307">
                            <div className="top-projects-projectdetails14">
                              <div className="top-projects-projectdetails15">
                                <div className="top-projects-projectnamelocation07">
                                  <span className="top-projects-text50">
                                    <span>ירושלים</span>
                                  </span>
                                  <span className="top-projects-text52">
                                    <span>קריית היובל</span>
                                  </span>
                                </div>
                                <span className="top-projects-text54">
                                  <span>
                                    קרית יובל: השכונה האהובה, מתחדשת והופכת
                                    למתחם עירוני מעורר השראה. המתחם, המתפרס
                                    לאורך חלקו הצפוני של רחוב טהון, מהווה מרחב
                                    עירוני פורץ דרך ומעניק את החוויה האורבנית
                                    המושלמת. בליבו מתחם פנאי, קניות ובילוי חי
                                    ותוסס לאורך כל שעות היום.
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <img
                            alt={props.imageAlt1}
                            src="/external/7bf6c9d4a441e73511f0390b6b541a6b-1300w-500h-500h.webp"
                            className="top-projects-image07"
                          />
                          <div className="top-projects-container11"></div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-thq="slider-slide"
                      className="top-projects-slider-slide4 swiper-slide"
                    >
                      <div className="top-projects-leftcoloumn4">
                        <div className="top-projects-projectimageandtags08">
                          <div className="top-projects-frame3308">
                            <div className="top-projects-projectdetails16">
                              <div className="top-projects-projectdetails17">
                                <div className="top-projects-container12">
                                  <div className="top-projects-projectnamelocation08">
                                    <span className="top-projects-text56">
                                      <span>ירושלים</span>
                                    </span>
                                    <span className="top-projects-text58">
                                      <span>דרך חברון התנופה</span>
                                    </span>
                                  </div>
                                  <span className="top-projects-text60">
                                    פרויקט פינוי בינוי בדרך חברון, הממוקם בשכונת
                                    תלפיות, סמוך לאזור התעשייה הידוע, ממערב לדרך
                                    חברון. התכנית כוללת הריסת 136 יחידות דיור
                                    והקמת 450 יח״ד ב-4 מגדלים הכוללים קומת מסחר,
                                    ושטחי ציבור.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <img
                            alt={props.imageAlt}
                            sizes="(min-width: 768px) 800px, 480px"
                            src="/external/1fff79fb16c5cb75fb3cfda99ba4dc3b-700w-700w.webp"
                            srcSet="external//1fff79fb16c5cb75fb3cfda99ba4dc3b-700w-700w.webp 800w, external/1fff79fb16c5cb75fb3cfda99ba4dc3b-700w-mobile.webp 480w"
                            className="top-projects-image08"
                          />
                          <div className="top-projects-container13"></div>
                        </div>
                      </div>
                      <div className="top-projects-rightcoloumn4">
                        <div className="top-projects-projectimageandtags09">
                          <div className="top-projects-frame3309">
                            <div className="top-projects-projectdetails18">
                              <div className="top-projects-projectdetails19">
                                <div className="top-projects-projectnamelocation09">
                                  <span className="top-projects-text61">
                                    <span>ירושלים</span>
                                  </span>
                                  <span className="top-projects-text63">
                                    <span>קריית היובל</span>
                                  </span>
                                </div>
                                <span className="top-projects-text65">
                                  <span>
                                    קרית יובל: השכונה האהובה, מתחדשת והופכת
                                    למתחם עירוני מעורר השראה. המתחם, המתפרס
                                    לאורך חלקו הצפוני של רחוב טהון, מהווה מרחב
                                    עירוני פורץ דרך ומעניק את החוויה האורבנית
                                    המושלמת. בליבו מתחם פנאי, קניות ובילוי חי
                                    ותוסס לאורך כל שעות היום.
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <img
                            alt={props.imageAlt1}
                            src="/external/7bf6c9d4a441e73511f0390b6b541a6b-1300w-500h-500h.webp"
                            className="top-projects-image09"
                          />
                          <div className="top-projects-container14"></div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-thq="slider-slide"
                      className="top-projects-slider-slide5 swiper-slide"
                    >
                      <div className="top-projects-leftcoloumn5">
                        <div className="top-projects-projectimageandtags10">
                          <div className="top-projects-frame3310">
                            <div className="top-projects-projectdetails20">
                              <div className="top-projects-projectdetails21">
                                <div className="top-projects-container15">
                                  <div className="top-projects-projectnamelocation10">
                                    <span className="top-projects-text67">
                                      <span>ירושלים</span>
                                    </span>
                                    <span className="top-projects-text69">
                                      <span>דרך חברון התנופה</span>
                                    </span>
                                  </div>
                                  <span className="top-projects-text71">
                                    פרויקט פינוי בינוי בדרך חברון, הממוקם בשכונת
                                    תלפיות, סמוך לאזור התעשייה הידוע, ממערב לדרך
                                    חברון. התכנית כוללת הריסת 136 יחידות דיור
                                    והקמת 450 יח״ד ב-4 מגדלים הכוללים קומת מסחר,
                                    ושטחי ציבור.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <img
                            alt={props.imageAlt}
                            sizes="(min-width: 768px) 800px, 480px"
                            src="/external/1fff79fb16c5cb75fb3cfda99ba4dc3b-700w-700w.webp"
                            srcSet="external//1fff79fb16c5cb75fb3cfda99ba4dc3b-700w-700w.webp 800w, external/1fff79fb16c5cb75fb3cfda99ba4dc3b-700w-mobile.webp 480w"
                            className="top-projects-image10"
                          />
                          <div className="top-projects-container16"></div>
                        </div>
                      </div>
                      <div className="top-projects-rightcoloumn5">
                        <div className="top-projects-projectimageandtags11">
                          <div className="top-projects-frame3311">
                            <div className="top-projects-projectdetails22">
                              <div className="top-projects-projectdetails23">
                                <div className="top-projects-projectnamelocation11">
                                  <span className="top-projects-text72">
                                    <span>ירושלים</span>
                                  </span>
                                  <span className="top-projects-text74">
                                    <span>קריית היובל</span>
                                  </span>
                                </div>
                                <span className="top-projects-text76">
                                  <span>
                                    קרית יובל: השכונה האהובה, מתחדשת והופכת
                                    למתחם עירוני מעורר השראה. המתחם, המתפרס
                                    לאורך חלקו הצפוני של רחוב טהון, מהווה מרחב
                                    עירוני פורץ דרך ומעניק את החוויה האורבנית
                                    המושלמת. בליבו מתחם פנאי, קניות ובילוי חי
                                    ותוסס לאורך כל שעות היום.
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <img
                            alt={props.imageAlt1}
                            src="/external/7bf6c9d4a441e73511f0390b6b541a6b-1300w-500h-500h.webp"
                            className="top-projects-image11"
                          />
                          <div className="top-projects-container17"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-thq="slider-pagination"
                    className="top-projects-slider-pagination1 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
                  >
                    <div
                      data-thq="slider-pagination-bullet"
                      className="swiper-pagination-bullet"
                    ></div>
                    <div
                      data-thq="slider-pagination-bullet"
                      className="swiper-pagination-bullet"
                    ></div>
                    <div
                      data-thq="slider-pagination-bullet"
                      className="swiper-pagination-bullet"
                    ></div>
                  </div>
                  <div
                    data-thq="slider-button-prev"
                    className="top-projects-slider-button-prev1 swiper-button-prev"
                  ></div>
                  <div
                    data-thq="slider-button-next"
                    className="top-projects-slider-button-next1 swiper-button-next"
                  ></div>
                </div>
              </div>
            )}
          </div>
          <div className="top-projects-bottomrow">
            <div className="top-projects-leftrightarrows">
              <img
                alt={props.arrowAlt}
                src={props.arrowSrc}
                className="top-projects-arrow"
              />
              <img
                alt={props.arrowAlt1}
                src={props.arrowSrc1}
                className="top-projects-arrow1"
              />
            </div>
            <div className="top-projects-gallerydots">
              <div className="top-projects-frame162"></div>
              <div className="top-projects-frame167"></div>
              <div className="top-projects-frame166"></div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .top-projects-top-projects {
            width: auto;
            height: auto;
            display: flex;
            padding: 0 90px;
            z-index: 1;
            position: relative;
            align-self: center;
            align-items: center;
            flex-shrink: 0;
            margin-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .top-projects-backgroundelipse {
            gap: 10px;
            top: 120px;
            left: -200px;
            width: 637px;
            height: 637px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-color: var(--dl-color-carasso-green);
            border-style: solid;
            border-width: 1px;
            border-radius: 999px;
          }
          .top-projects-content {
            gap: 28px;
            width: 1260px;
            display: flex;
            z-index: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .top-projects-projectsandheaders {
            gap: 44px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .top-projects-text {
            color: var(--dl-color-carasso-primaryblack);
            width: 100%;
            height: auto;
            font-size: 50px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 300;
            line-height: 110%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text01 {
            font-family: 'Ploni ML v2 AAA Light';
          }
          .top-projects-text02 {
            font-weight: 700;
          }
          .top-projects-text03 {
            font-family: 'Ploni ML v2 AAA Bold';
            font-weight: 700;
          }
          .top-projects-tabs {
            gap: 40px;
            display: flex;
            align-self: stretch;
            flex-shrink: 0;
            padding-left: var(--dl-space-space-twounits);
            justify-content: flex-end;
          }
          .top-projects-frame156 {
            gap: 10px;
            cursor: pointer;
            display: flex;
            padding: 0 0 12px;
            align-items: center;
            border-color: var(--dl-color-carasso-green);
            border-width: 1px;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .top-projects-text04 {
            fill: var(--dl-color-carasso-green);
            color: var(--dl-color-carasso-green);
            height: auto;
            font-size: 24px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-frame154 {
            gap: 10px;
            cursor: pointer;
            display: flex;
            padding: 0 0 12px;
            align-items: center;
            justify-content: center;
          }
          .top-projects-text06 {
            fill: var(--dl-color-carasso-darkergray);
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 24px;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-frame1561 {
            gap: 10px;
            cursor: pointer;
            display: flex;
            padding: 0 0 12px;
            align-items: center;
            justify-content: center;
          }
          .top-projects-text08 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 24px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-frame1541 {
            gap: 10px;
            cursor: pointer;
            display: flex;
            padding: 0 0 12px;
            align-items: center;
            border-color: rgba(0, 177, 64, 1);
            border-style: solid;
            border-width: 0 0 1px;
            justify-content: center;
          }
          .top-projects-text10 {
            color: var(--dl-color-carasso-green);
            height: auto;
            font-size: 24px;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-urbanrenewalprojects {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .top-projects-slider {
            width: 100%;
            height: 100%;
            display: inline-block;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .top-projects-slider-slide {
            display: flex;
          }
          .top-projects-leftcoloumn {
            width: 45%;
            height: 450px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            overflow: hidden;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectimageandtags {
            height: auto;
            display: flex;
            padding: 30px;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10000000149011612);
            align-items: flex-end;
            border-radius: 20px;
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/external/1fff79fb16c5cb75fb3cfda99ba4dc3b-700w-700w.webp');
          }
          .top-projects-frame33 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectdetails {
            gap: 108px;
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectdetails01 {
            gap: 30px;
            width: 100%;
            display: flex;
            z-index: 100;
            position: relative;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .top-projects-container {
            gap: 30px;
            top: 300px;
            flex: 0 0 auto;
            right: 0px;
            cursor: pointer;
            display: flex;
            position: absolute;
            transition: 0.3s;
            align-items: flex-end;
            flex-direction: column;
          }
          .top-projects-container:hover {
            top: 170px;
          }
          .top-projects-projectnamelocation {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .top-projects-text12 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 16px;
            font-style: Bold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 700;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text14 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text16 {
            color: var(--dl-color-carasso-plainwhite);
            width: 513px;
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 500;
            line-height: 140%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-image {
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .top-projects-container01 {
            top: 0px;
            flex: 0 0 auto;
            right: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius20);
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0.42) 0%,
              rgba(0, 0, 0, 0.3) 49%,
              rgba(0, 0, 0, 0.42) 100%
            );
          }
          .top-projects-rightcoloumn {
            width: 45%;
            height: 450px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            overflow: hidden;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectimageandtags01 {
            display: flex;
            padding: 30px;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10000000149011612);
            align-items: flex-end;
            border-radius: 20px;
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/external/7bf6c9d4a441e73511f0390b6b541a6b-1300w-500h-500h.webp');
          }
          .top-projects-frame3301 {
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectdetails02 {
            gap: 108px;
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectdetails03 {
            gap: 30px;
            top: 300px;
            left: 0px;
            width: 100%;
            cursor: pointer;
            display: flex;
            z-index: 100;
            position: absolute;
            flex-grow: 1;
            transition: 0.3s;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .top-projects-projectdetails03:hover {
            top: 170px;
          }
          .top-projects-projectnamelocation01 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .top-projects-text17 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 16px;
            font-style: Bold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 700;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text19 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text21 {
            color: var(--dl-color-carasso-plainwhite);
            width: 513px;
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-image01 {
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .top-projects-container02 {
            top: 0px;
            flex: 0 0 auto;
            right: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius20);
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0.42) 0%,
              rgba(0, 0, 0, 0.3) 49%,
              rgba(0, 0, 0, 0.42) 100%
            );
          }
          .top-projects-slider-slide1 {
            display: flex;
            background-size: 100%;
          }
          .top-projects-leftcoloumn1 {
            width: 45%;
            height: 450px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            overflow: hidden;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectimageandtags02 {
            height: auto;
            display: flex;
            padding: 30px;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10000000149011612);
            align-items: flex-end;
            border-radius: 20px;
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/external/1fff79fb16c5cb75fb3cfda99ba4dc3b-700w-700w.webp');
          }
          .top-projects-frame3302 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectdetails04 {
            gap: 108px;
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectdetails05 {
            gap: 30px;
            width: 100%;
            display: flex;
            z-index: 100;
            position: relative;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .top-projects-container03 {
            gap: 30px;
            top: 300px;
            flex: 0 0 auto;
            right: 0px;
            cursor: pointer;
            display: flex;
            position: absolute;
            transition: 0.3s;
            align-items: flex-end;
            flex-direction: column;
          }
          .top-projects-container03:hover {
            top: 170px;
          }
          .top-projects-projectnamelocation02 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .top-projects-text23 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 16px;
            font-style: Bold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 700;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text25 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text27 {
            color: var(--dl-color-carasso-plainwhite);
            width: 513px;
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 500;
            line-height: 140%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-image02 {
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .top-projects-container04 {
            top: 0px;
            flex: 0 0 auto;
            right: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius20);
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0.42) 0%,
              rgba(0, 0, 0, 0.3) 49%,
              rgba(0, 0, 0, 0.42) 100%
            );
          }
          .top-projects-rightcoloumn1 {
            width: 45%;
            height: 450px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            overflow: hidden;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectimageandtags03 {
            display: flex;
            padding: 30px;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10000000149011612);
            align-items: flex-end;
            border-radius: 20px;
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/external/7bf6c9d4a441e73511f0390b6b541a6b-1300w-500h-500h.webp');
          }
          .top-projects-frame3303 {
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectdetails06 {
            gap: 108px;
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectdetails07 {
            gap: 30px;
            top: 300px;
            left: 0px;
            width: 100%;
            cursor: pointer;
            display: flex;
            z-index: 100;
            position: absolute;
            flex-grow: 1;
            transition: 0.3s;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .top-projects-projectdetails07:hover {
            top: 170px;
          }
          .top-projects-projectnamelocation03 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .top-projects-text28 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 16px;
            font-style: Bold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 700;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text30 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text32 {
            color: var(--dl-color-carasso-plainwhite);
            width: 513px;
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-image03 {
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .top-projects-container05 {
            top: 0px;
            flex: 0 0 auto;
            right: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius20);
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0.42) 0%,
              rgba(0, 0, 0, 0.3) 49%,
              rgba(0, 0, 0, 0.42) 100%
            );
          }
          .top-projects-slider-slide2 {
            display: flex;
            background-size: 100%;
          }
          .top-projects-leftcoloumn2 {
            width: 45%;
            height: 450px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            overflow: hidden;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectimageandtags04 {
            height: auto;
            display: flex;
            padding: 30px;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10000000149011612);
            align-items: flex-end;
            border-radius: 20px;
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/external/1fff79fb16c5cb75fb3cfda99ba4dc3b-700w-700w.webp');
          }
          .top-projects-frame3304 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectdetails08 {
            gap: 108px;
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectdetails09 {
            gap: 30px;
            width: 100%;
            display: flex;
            z-index: 100;
            position: relative;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .top-projects-container06 {
            gap: 30px;
            top: 300px;
            flex: 0 0 auto;
            right: 0px;
            cursor: pointer;
            display: flex;
            position: absolute;
            transition: 0.3s;
            align-items: flex-end;
            flex-direction: column;
          }
          .top-projects-container06:hover {
            top: 170px;
          }
          .top-projects-projectnamelocation04 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .top-projects-text34 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 16px;
            font-style: Bold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 700;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text36 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text38 {
            color: var(--dl-color-carasso-plainwhite);
            width: 513px;
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 500;
            line-height: 140%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-image04 {
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .top-projects-container07 {
            top: 0px;
            flex: 0 0 auto;
            right: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius20);
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0.42) 0%,
              rgba(0, 0, 0, 0.3) 49%,
              rgba(0, 0, 0, 0.42) 100%
            );
          }
          .top-projects-rightcoloumn2 {
            width: 45%;
            height: 450px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            overflow: hidden;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectimageandtags05 {
            display: flex;
            padding: 30px;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10000000149011612);
            align-items: flex-end;
            border-radius: 20px;
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/external/7bf6c9d4a441e73511f0390b6b541a6b-1300w-500h-500h.webp');
          }
          .top-projects-frame3305 {
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectdetails10 {
            gap: 108px;
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectdetails11 {
            gap: 30px;
            top: 300px;
            left: 0px;
            width: 100%;
            cursor: pointer;
            display: flex;
            z-index: 100;
            position: absolute;
            flex-grow: 1;
            transition: 0.3s;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .top-projects-projectdetails11:hover {
            top: 170px;
          }
          .top-projects-projectnamelocation05 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .top-projects-text39 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 16px;
            font-style: Bold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 700;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text41 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text43 {
            color: var(--dl-color-carasso-plainwhite);
            width: 513px;
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-image05 {
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .top-projects-container08 {
            top: 0px;
            flex: 0 0 auto;
            right: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius20);
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0.42) 0%,
              rgba(0, 0, 0, 0.3) 49%,
              rgba(0, 0, 0, 0.42) 100%
            );
          }
          .top-projects-slider-pagination {
            display: block;
            align-items: center;
          }
          .top-projects-slider-pagination-bullet {
            width: 6px;
            height: 6px;
            background: black;
          }
          .top-projects-slider-button-prev {
            top: 500px;
            color: #000000;
            z-index: 5;
            position: absolute;
          }
          .top-projects-slider-button-next {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
          }
          .top-projects-urbanrenewalprojects1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .top-projects-slider1 {
            width: 100%;
            height: 100%;
            display: inline-block;
          }
          .top-projects-slider-slide3 {
            display: flex;
            background-size: 100%;
          }
          .top-projects-leftcoloumn3 {
            width: 45%;
            height: 450px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            overflow: hidden;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectimageandtags06 {
            height: auto;
            display: flex;
            padding: 30px;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10000000149011612);
            align-items: flex-end;
            border-radius: 20px;
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/external/1fff79fb16c5cb75fb3cfda99ba4dc3b-700w-700w.webp');
          }
          .top-projects-frame3306 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectdetails12 {
            gap: 108px;
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectdetails13 {
            gap: 30px;
            width: 100%;
            display: flex;
            z-index: 100;
            position: relative;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .top-projects-container09 {
            gap: 30px;
            top: 300px;
            flex: 0 0 auto;
            right: 0px;
            cursor: pointer;
            display: flex;
            position: absolute;
            transition: 0.3s;
            align-items: flex-end;
            flex-direction: column;
          }
          .top-projects-container09:hover {
            top: 170px;
          }
          .top-projects-projectnamelocation06 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .top-projects-text45 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 16px;
            font-style: Bold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 700;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text47 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text49 {
            color: var(--dl-color-carasso-plainwhite);
            width: 513px;
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 500;
            line-height: 140%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-image06 {
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .top-projects-container10 {
            top: 0px;
            flex: 0 0 auto;
            right: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius20);
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0.42) 0%,
              rgba(0, 0, 0, 0.3) 49%,
              rgba(0, 0, 0, 0.42) 100%
            );
          }
          .top-projects-rightcoloumn3 {
            width: 45%;
            height: 450px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            overflow: hidden;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectimageandtags07 {
            display: flex;
            padding: 30px;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10000000149011612);
            align-items: flex-end;
            border-radius: 20px;
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/external/7bf6c9d4a441e73511f0390b6b541a6b-1300w-500h-500h.webp');
          }
          .top-projects-frame3307 {
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectdetails14 {
            gap: 108px;
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectdetails15 {
            gap: 30px;
            top: 300px;
            left: 0px;
            width: 100%;
            cursor: pointer;
            display: flex;
            z-index: 100;
            position: absolute;
            flex-grow: 1;
            transition: 0.3s;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .top-projects-projectdetails15:hover {
            top: 170px;
          }
          .top-projects-projectnamelocation07 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .top-projects-text50 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 16px;
            font-style: Bold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 700;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text52 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text54 {
            color: var(--dl-color-carasso-plainwhite);
            width: 513px;
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-image07 {
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .top-projects-container11 {
            top: 0px;
            flex: 0 0 auto;
            right: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius20);
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0.42) 0%,
              rgba(0, 0, 0, 0.3) 49%,
              rgba(0, 0, 0, 0.42) 100%
            );
          }
          .top-projects-slider-slide4 {
            display: flex;
            background-size: 100%;
          }
          .top-projects-leftcoloumn4 {
            width: 45%;
            height: 450px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            overflow: hidden;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectimageandtags08 {
            height: auto;
            display: flex;
            padding: 30px;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10000000149011612);
            align-items: flex-end;
            border-radius: 20px;
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/external/1fff79fb16c5cb75fb3cfda99ba4dc3b-700w-700w.webp');
          }
          .top-projects-frame3308 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectdetails16 {
            gap: 108px;
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectdetails17 {
            gap: 30px;
            width: 100%;
            display: flex;
            z-index: 100;
            position: relative;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .top-projects-container12 {
            gap: 30px;
            top: 300px;
            flex: 0 0 auto;
            right: 0px;
            cursor: pointer;
            display: flex;
            position: absolute;
            transition: 0.3s;
            align-items: flex-end;
            flex-direction: column;
          }
          .top-projects-container12:hover {
            top: 170px;
          }
          .top-projects-projectnamelocation08 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .top-projects-text56 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 16px;
            font-style: Bold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 700;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text58 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text60 {
            color: var(--dl-color-carasso-plainwhite);
            width: 513px;
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 500;
            line-height: 140%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-image08 {
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .top-projects-container13 {
            top: 0px;
            flex: 0 0 auto;
            right: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius20);
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0.42) 0%,
              rgba(0, 0, 0, 0.3) 49%,
              rgba(0, 0, 0, 0.42) 100%
            );
          }
          .top-projects-rightcoloumn4 {
            width: 45%;
            height: 450px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            overflow: hidden;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectimageandtags09 {
            display: flex;
            padding: 30px;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10000000149011612);
            align-items: flex-end;
            border-radius: 20px;
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/external/7bf6c9d4a441e73511f0390b6b541a6b-1300w-500h-500h.webp');
          }
          .top-projects-frame3309 {
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectdetails18 {
            gap: 108px;
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectdetails19 {
            gap: 30px;
            top: 300px;
            left: 0px;
            width: 100%;
            cursor: pointer;
            display: flex;
            z-index: 100;
            position: absolute;
            flex-grow: 1;
            transition: 0.3s;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .top-projects-projectdetails19:hover {
            top: 170px;
          }
          .top-projects-projectnamelocation09 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .top-projects-text61 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 16px;
            font-style: Bold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 700;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text63 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text65 {
            color: var(--dl-color-carasso-plainwhite);
            width: 513px;
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-image09 {
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .top-projects-container14 {
            top: 0px;
            flex: 0 0 auto;
            right: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius20);
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0.42) 0%,
              rgba(0, 0, 0, 0.3) 49%,
              rgba(0, 0, 0, 0.42) 100%
            );
          }
          .top-projects-slider-slide5 {
            display: flex;
            background-size: 100%;
          }
          .top-projects-leftcoloumn5 {
            width: 45%;
            height: 450px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            overflow: hidden;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectimageandtags10 {
            height: auto;
            display: flex;
            padding: 30px;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10000000149011612);
            align-items: flex-end;
            border-radius: 20px;
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/external/1fff79fb16c5cb75fb3cfda99ba4dc3b-700w-700w.webp');
          }
          .top-projects-frame3310 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectdetails20 {
            gap: 108px;
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectdetails21 {
            gap: 30px;
            width: 100%;
            display: flex;
            z-index: 100;
            position: relative;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .top-projects-container15 {
            gap: 30px;
            top: 300px;
            flex: 0 0 auto;
            right: 0px;
            cursor: pointer;
            display: flex;
            position: absolute;
            transition: 0.3s;
            align-items: flex-end;
            flex-direction: column;
          }
          .top-projects-container15:hover {
            top: 170px;
          }
          .top-projects-projectnamelocation10 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .top-projects-text67 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 16px;
            font-style: Bold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 700;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text69 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text71 {
            color: var(--dl-color-carasso-plainwhite);
            width: 513px;
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 500;
            line-height: 140%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-image10 {
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .top-projects-container16 {
            top: 0px;
            flex: 0 0 auto;
            right: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius20);
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0.42) 0%,
              rgba(0, 0, 0, 0.3) 49%,
              rgba(0, 0, 0, 0.42) 100%
            );
          }
          .top-projects-rightcoloumn5 {
            width: 45%;
            height: 450px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            overflow: hidden;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectimageandtags11 {
            display: flex;
            padding: 30px;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10000000149011612);
            align-items: flex-end;
            border-radius: 20px;
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/external/7bf6c9d4a441e73511f0390b6b541a6b-1300w-500h-500h.webp');
          }
          .top-projects-frame3311 {
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectdetails22 {
            gap: 108px;
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectdetails23 {
            gap: 30px;
            top: 300px;
            left: 0px;
            width: 100%;
            cursor: pointer;
            display: flex;
            z-index: 100;
            position: absolute;
            flex-grow: 1;
            transition: 0.3s;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .top-projects-projectdetails23:hover {
            top: 170px;
          }
          .top-projects-projectnamelocation11 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .top-projects-text72 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 16px;
            font-style: Bold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 700;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text74 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text76 {
            color: var(--dl-color-carasso-plainwhite);
            width: 513px;
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-image11 {
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .top-projects-container17 {
            top: 0px;
            flex: 0 0 auto;
            right: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius20);
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0.42) 0%,
              rgba(0, 0, 0, 0.3) 49%,
              rgba(0, 0, 0, 0.42) 100%
            );
          }
          .top-projects-slider-pagination1 {
            display: none;
          }
          .top-projects-slider-button-prev1 {
            color: var(--dl-color-theme-secondary1);
          }
          .top-projects-slider-button-next1 {
            color: var(--dl-color-theme-secondary1);
          }
          .top-projects-bottomrow {
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: space-between;
          }
          .top-projects-leftrightarrows {
            gap: 15px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
          }
          .top-projects-arrow {
            width: 28px;
            height: 28px;
          }
          .top-projects-arrow1 {
            width: 28px;
            height: 28px;
          }
          .top-projects-gallerydots {
            gap: 8px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .top-projects-frame162 {
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
          .top-projects-frame167 {
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
          .top-projects-frame166 {
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
          @media (max-width: 1440px) {
            .top-projects-text {
              color: var(--dl-color-carasso-primaryblack);
              font-size: 50px;
              font-family: Ploni ML v2 AAA;
              font-weight: 300;
              line-height: 110%;
              text-decoration: none;
            }
            .top-projects-text01 {
              font-weight: 300;
            }
            .top-projects-text02 {
              font-weight: 300;
            }
            .top-projects-text03 {
              font-weight: 700;
            }
            .top-projects-text12 {
              font-family: Ploni ML v2 AAA Bold;
            }
            .top-projects-text17 {
              font-family: Ploni ML v2 AAA Bold;
            }
            .top-projects-text23 {
              font-family: Ploni ML v2 AAA Bold;
            }
            .top-projects-text28 {
              font-family: Ploni ML v2 AAA Bold;
            }
            .top-projects-text34 {
              font-family: Ploni ML v2 AAA Bold;
            }
            .top-projects-text39 {
              font-family: Ploni ML v2 AAA Bold;
            }
            .top-projects-text45 {
              font-family: Ploni ML v2 AAA Bold;
            }
            .top-projects-text50 {
              font-family: Ploni ML v2 AAA Bold;
            }
            .top-projects-text56 {
              font-family: Ploni ML v2 AAA Bold;
            }
            .top-projects-text61 {
              font-family: Ploni ML v2 AAA Bold;
            }
            .top-projects-text67 {
              font-family: Ploni ML v2 AAA Bold;
            }
            .top-projects-text72 {
              font-family: Ploni ML v2 AAA Bold;
            }
          }
          @media (max-width: 1200px) {
            .top-projects-top-projects {
              width: 100%;
            }
            .top-projects-content {
              width: 100%;
            }
            .top-projects-urbanrenewalprojects {
              width: 100%;
              height: 100%;
              flex-direction: column;
            }
            .top-projects-leftcoloumn {
              width: auto;
            }
            .top-projects-container01 {
              top: 0px;
              left: 0px;
              background-image: radial-gradient(
                circle at center,
                rgba(0, 0, 0, 0.42) 0%,
                rgba(0, 0, 0, 0.3) 36%,
                rgba(0, 0, 0, 0.42) 62%,
                rgba(0, 0, 0, 0.42) 100%
              );
            }
            .top-projects-rightcoloumn {
              width: auto;
            }
            .top-projects-container02 {
              width: 100%;
            }
            .top-projects-leftcoloumn1 {
              width: auto;
            }
            .top-projects-container04 {
              top: 0px;
              left: 0px;
              background-image: radial-gradient(
                circle at center,
                rgba(0, 0, 0, 0.42) 0%,
                rgba(0, 0, 0, 0.3) 36%,
                rgba(0, 0, 0, 0.42) 62%,
                rgba(0, 0, 0, 0.42) 100%
              );
            }
            .top-projects-rightcoloumn1 {
              width: auto;
            }
            .top-projects-container05 {
              width: 100%;
            }
            .top-projects-leftcoloumn2 {
              width: auto;
            }
            .top-projects-container07 {
              top: 0px;
              left: 0px;
              background-image: radial-gradient(
                circle at center,
                rgba(0, 0, 0, 0.42) 0%,
                rgba(0, 0, 0, 0.3) 36%,
                rgba(0, 0, 0, 0.42) 62%,
                rgba(0, 0, 0, 0.42) 100%
              );
            }
            .top-projects-rightcoloumn2 {
              width: auto;
            }
            .top-projects-container08 {
              width: 100%;
            }
            .top-projects-urbanrenewalprojects1 {
              width: 100%;
              height: 100%;
              flex-direction: column;
            }
            .top-projects-leftcoloumn3 {
              width: auto;
            }
            .top-projects-container10 {
              top: 0px;
              left: 0px;
              background-image: radial-gradient(
                circle at center,
                rgba(0, 0, 0, 0.42) 0%,
                rgba(0, 0, 0, 0.3) 36%,
                rgba(0, 0, 0, 0.42) 62%,
                rgba(0, 0, 0, 0.42) 100%
              );
            }
            .top-projects-rightcoloumn3 {
              width: auto;
            }
            .top-projects-container11 {
              width: 100%;
            }
            .top-projects-leftcoloumn4 {
              width: auto;
            }
            .top-projects-container13 {
              top: 0px;
              left: 0px;
              background-image: radial-gradient(
                circle at center,
                rgba(0, 0, 0, 0.42) 0%,
                rgba(0, 0, 0, 0.3) 36%,
                rgba(0, 0, 0, 0.42) 62%,
                rgba(0, 0, 0, 0.42) 100%
              );
            }
            .top-projects-rightcoloumn4 {
              width: auto;
            }
            .top-projects-container14 {
              width: 100%;
            }
            .top-projects-leftcoloumn5 {
              width: auto;
            }
            .top-projects-container16 {
              top: 0px;
              left: 0px;
              background-image: radial-gradient(
                circle at center,
                rgba(0, 0, 0, 0.42) 0%,
                rgba(0, 0, 0, 0.3) 36%,
                rgba(0, 0, 0, 0.42) 62%,
                rgba(0, 0, 0, 0.42) 100%
              );
            }
            .top-projects-rightcoloumn5 {
              width: auto;
            }
            .top-projects-container17 {
              width: 100%;
            }
          }
          @media (max-width: 991px) {
            .top-projects-top-projects {
              padding-left: 40px;
              padding-right: 40px;
            }
          }
          @media (max-width: 767px) {
            .top-projects-top-projects {
              padding-left: 20px;
              padding-right: 20px;
            }
            .top-projects-slider-slide {
              flex-direction: column-reverse;
            }
            .top-projects-projectimageandtags {
              width: 100%;
            }
            .top-projects-projectdetails01 {
              width: 100%;
            }
            .top-projects-projectimageandtags01 {
              width: 100%;
            }
            .top-projects-projectdetails03 {
              width: 100%;
            }
            .top-projects-projectimageandtags02 {
              width: 100%;
            }
            .top-projects-projectdetails05 {
              width: 100%;
            }
            .top-projects-projectimageandtags03 {
              width: 100%;
            }
            .top-projects-projectdetails07 {
              width: 100%;
            }
            .top-projects-projectimageandtags04 {
              width: 100%;
            }
            .top-projects-projectdetails09 {
              width: 100%;
            }
            .top-projects-projectimageandtags05 {
              width: 100%;
            }
            .top-projects-projectdetails11 {
              width: 100%;
            }
            .top-projects-projectimageandtags06 {
              width: 100%;
            }
            .top-projects-projectdetails13 {
              width: 100%;
            }
            .top-projects-projectimageandtags07 {
              width: 100%;
            }
            .top-projects-projectdetails15 {
              width: 100%;
            }
            .top-projects-projectimageandtags08 {
              width: 100%;
            }
            .top-projects-projectdetails17 {
              width: 100%;
            }
            .top-projects-projectimageandtags09 {
              width: 100%;
            }
            .top-projects-projectdetails19 {
              width: 100%;
            }
            .top-projects-projectimageandtags10 {
              width: 100%;
            }
            .top-projects-projectdetails21 {
              width: 100%;
            }
            .top-projects-projectimageandtags11 {
              width: 100%;
            }
            .top-projects-projectdetails23 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .top-projects-top-projects {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .top-projects-backgroundelipse {
              left: -350px;
            }
            .top-projects-text {
              padding-left: var(--dl-space-space-fourunits);
            }
            .top-projects-projectdetails01 {
              width: 100%;
            }
            .top-projects-text16 {
              width: 100%;
            }
            .top-projects-projectdetails03 {
              width: 100%;
            }
            .top-projects-text21 {
              width: auto;
            }
            .top-projects-projectdetails05 {
              width: 100%;
            }
            .top-projects-text27 {
              width: 100%;
            }
            .top-projects-projectdetails07 {
              width: 100%;
            }
            .top-projects-text32 {
              width: auto;
            }
            .top-projects-projectdetails09 {
              width: 100%;
            }
            .top-projects-text38 {
              width: 100%;
            }
            .top-projects-projectdetails11 {
              width: 100%;
            }
            .top-projects-text43 {
              width: auto;
            }
            .top-projects-projectdetails13 {
              width: 100%;
            }
            .top-projects-text49 {
              width: 100%;
            }
            .top-projects-projectdetails15 {
              width: 100%;
            }
            .top-projects-text54 {
              width: auto;
            }
            .top-projects-projectdetails17 {
              width: 100%;
            }
            .top-projects-text60 {
              width: 100%;
            }
            .top-projects-projectdetails19 {
              width: 100%;
            }
            .top-projects-text65 {
              width: auto;
            }
            .top-projects-projectdetails21 {
              width: 100%;
            }
            .top-projects-text71 {
              width: 100%;
            }
            .top-projects-projectdetails23 {
              width: 100%;
            }
            .top-projects-text76 {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

TopProjects.defaultProps = {
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  arrowSrc1: '/external/arrow5030-w72a.svg',
  imageAlt: 'image',
  arrowSrc: '/external/arrow5030-f3zn.svg',
  imageAlt1: 'image',
  imageSrc1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  arrowAlt1: 'Arrow5030',
  arrowAlt: 'Arrow5030',
}

TopProjects.propTypes = {
  imageSrc: PropTypes.string,
  arrowSrc1: PropTypes.string,
  imageAlt: PropTypes.string,
  arrowSrc: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc1: PropTypes.string,
  arrowAlt1: PropTypes.string,
  arrowAlt: PropTypes.string,
}

export default TopProjects
