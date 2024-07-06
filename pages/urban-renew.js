import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Numbersurbanrenewal from '../components/numbersurbanrenewal'
import AppComponent from '../components/component'
import TopProjects from '../components/top-projects'

const UrbanRenew = (props) => {
  return (
    <>
      <div className="urban-renew-container">
        <Head>
          <title>Urban-Renew - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta
            property="og:title"
            content="Urban-Renew - Carasso Real Estate"
          />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <div className="urban-renew-herourbanrenewal">
          <div className="urban-renew-container01">
            <div className="urban-renew-leftcoloumn">
              <div className="urban-renew-content">
                <span className="urban-renew-text">
                  <span className="urban-renew-text01">
                    עיר היא יצור חי, פועם,
                  </span>
                  <br className="urban-renew-text02"></br>
                  <span className="urban-renew-text03">משתנה ומתחדש.</span>
                  <br className="urban-renew-text04"></br>
                  <span className="urban-renew-text05">אנחנו נענים לאתגר</span>
                </span>
                <div className="urban-renew-formcontact">
                  <img
                    alt="Arrow7Stroke5030"
                    src="/external/arrow7stroke5030-x7t.svg"
                    className="urban-renew-arrow7-stroke"
                  />
                  <span className="urban-renew-text06">
                    <span>אשמח שתחדשו גם את הבניין שלי</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="urban-renew-rightcoloumn">
              <div className="urban-renew-image">
                <div className="urban-renew-imageintersection">
                  <div className="urban-renew-frame150">
                    <div className="urban-renew-circle">
                      <img
                        alt="image"
                        sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                        src="/75bbe7f7259b95ad890795dc4fc5cd86-1500w.webp"
                        srcSet="/75bbe7f7259b95ad890795dc4fc5cd86-1500w.webp 1200w, /75bbe7f7259b95ad890795dc4fc5cd86-tablet.webp 800w, /75bbe7f7259b95ad890795dc4fc5cd86-mobile.webp 480w"
                        className="urban-renew-image1"
                      />
                    </div>
                    <div className="urban-renew-frame153">
                      <img
                        alt="Arrow7Stroke5030"
                        src="/external/arrow7stroke5030-5j1h.svg"
                        className="urban-renew-arrow7-stroke1"
                      />
                      <span className="urban-renew-text08">
                        <span>אנחנו בונים את זה</span>
                      </span>
                    </div>
                  </div>
                  <div className="urban-renew-circle1"></div>
                </div>
              </div>
            </div>
          </div>
          <img
            alt="image"
            sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
            src="/812a157e5f534744427495eac1964d6c-1500w.webp"
            srcSet="/812a157e5f534744427495eac1964d6c-1500w.webp 1200w, /812a157e5f534744427495eac1964d6c-tablet.webp 800w, /812a157e5f534744427495eac1964d6c-mobile.webp 480w"
            className="urban-renew-image2"
          />
          <div className="urban-renew-container02"></div>
        </div>
        <div className="urban-renew-header">
          <div className="urban-renew-navigationbar">
            <img
              alt="Search5030"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="urban-renew-search"
            />
            <img
              alt="logo5030"
              src="/external/logo5030-cc9b.svg"
              className="urban-renew-logo"
            />
            <img
              alt="hamburger5030"
              src="/external/hamburger5030-mc5d.svg"
              className="urban-renew-hamburger"
            />
          </div>
        </div>
        <Numbersurbanrenewal></Numbersurbanrenewal>
        <AppComponent></AppComponent>
        <TopProjects></TopProjects>
        <div className="urban-renew-container03">
          <img
            alt="Vector5030"
            src="/external/vector5030-p63.svg"
            className="urban-renew-vector"
          />
          <div className="urban-renew-content1">
            <div className="urban-renew-frame222">
              <span className="urban-renew-text10">
                <span className="urban-renew-text11">
                  הצוות
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="urban-renew-text12">שלנו</span>
              </span>
            </div>
            <div className="urban-renew-team">
              <div className="urban-renew-memberblock">
                <div className="urban-renew-topimage"></div>
                <div className="urban-renew-bottomtext">
                  <div className="urban-renew-frame280">
                    <span className="urban-renew-text13">
                      <span>אתל מלכא</span>
                    </span>
                    <span className="urban-renew-text15">
                      <span>רכזת התחדשות עירונית</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="urban-renew-memberblock1">
                <div className="urban-renew-topimage1"></div>
                <div className="urban-renew-bottomtext1">
                  <div className="urban-renew-frame2801">
                    <span className="urban-renew-text17">
                      <span>בועז שיקלר</span>
                    </span>
                    <span className="urban-renew-text19">
                      <span>מנהל פרויקטים</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="urban-renew-memberblock2">
                <div className="urban-renew-topimage2"></div>
                <div className="urban-renew-bottomtext2">
                  <div className="urban-renew-frame279">
                    <span className="urban-renew-text21">
                      <span>עידן קניג</span>
                    </span>
                    <span className="urban-renew-text23">
                      <span>מנהל ייזום עסקי</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="urban-renew-memberblock3">
                <div className="urban-renew-topimage3"></div>
                <div className="urban-renew-bottomtext3">
                  <div className="urban-renew-frame2791">
                    <span className="urban-renew-text25">
                      <span>אברהם שמש</span>
                    </span>
                    <span className="urban-renew-text27">
                      <span>מנהל תחום התחדשות עירונית</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="urban-renew-content2">
            <div className="urban-renew-frame1261158166">
              <span className="urban-renew-text29">
                <span>מובילים בדירוג</span>
              </span>
              <span className="urban-renew-text31">
                <span>
                  קרסו מובילה בדירוגים החשובים ביותר בתחום הבנייה בכלל ובהתחדשות
                  עירונית בפרט
                </span>
              </span>
            </div>
            <div className="urban-renew-frame218">
              <img
                alt="image185030"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bd438ef8-05f7-4c29-9c01-eea7ae17edea/fee89d70-8251-49a2-9a59-0c68094a00a1?org_if_sml=111614&amp;force_format=original"
                className="urban-renew-image18"
              />
              <div className="urban-renew-frame219">
                <img
                  alt="image165030"
                  src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/e6d869ac-5e69-4dae-a864-fa816f5ebf6c/3954f6e2-ec40-4408-b752-f1a3fed73773?org_if_sml=11919&amp;force_format=original"
                  className="urban-renew-image16"
                />
              </div>
              <img
                alt="image175030"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bd438ef8-05f7-4c29-9c01-eea7ae17edea/a7e830ed-b715-4db0-8117-d60af823da43?org_if_sml=13899&amp;force_format=original"
                className="urban-renew-image17"
              />
            </div>
          </div>
        </div>
        <div className="urban-renew-herourbanrenewal1">
          <div className="urban-renew-container04">
            <img
              alt="image"
              src="/external/room.svg"
              className="urban-renew-image3"
            />
            <span className="urban-renew-text33">
              <span className="urban-renew-text34">
                מה צפוי בתהליך
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>התחדשות עירונית</span>
            </span>
            <div className="urban-renew-steps">
              <div className="urban-renew-frame136">
                <div className="urban-renew-frame1261158169">
                  <div className="urban-renew-frame1361">
                    <span className="urban-renew-text36">
                      <span>אנחנו כאן בשבילכם</span>
                    </span>
                    <span className="urban-renew-text38">
                      <span>תקופת בדק</span>
                      <br></br>
                      <span>ואחריות</span>
                    </span>
                  </div>
                  <span className="urban-renew-text42">7</span>
                </div>
              </div>
              <div className="urban-renew-frame142">
                <div className="urban-renew-frame1261158168">
                  <div className="urban-renew-frame1362">
                    <span className="urban-renew-text43">
                      <span>מסירת הדירות</span>
                    </span>
                    <span className="urban-renew-text45">
                      <span>בשעה טובה :)</span>
                      <br></br>
                      <span>נכנסים הביתה ורושמים</span>
                      <br></br>
                      <span>את הבית המשותף</span>
                    </span>
                  </div>
                  <span className="urban-renew-text51">6</span>
                </div>
              </div>
              <div className="urban-renew-frame141">
                <div className="urban-renew-container05">
                  <div className="urban-renew-frame1363">
                    <span className="urban-renew-text52">
                      <span>בנייה</span>
                    </span>
                    <span className="urban-renew-text54">
                      <span>מהקומה העליונה כבר</span>
                      <br></br>
                      <span>רואים את הסוף</span>
                      <br></br>
                      <span>כ-36 חודשים</span>
                    </span>
                  </div>
                  <span className="urban-renew-text60">5</span>
                </div>
              </div>
              <div className="urban-renew-frame140">
                <div className="urban-renew-container06">
                  <div className="urban-renew-frame1364">
                    <span className="urban-renew-text61">
                      <span>עוד בירוקרטיה</span>
                    </span>
                    <span className="urban-renew-text63">
                      <span>רישוי וקבלת היתר בנייה</span>
                      <br></br>
                      <span>כ-24 חודשים מקליטת הבקשה</span>
                    </span>
                  </div>
                  <span className="urban-renew-text67">4</span>
                </div>
              </div>
              <div className="urban-renew-frame138">
                <div className="urban-renew-container07">
                  <div className="urban-renew-frame1365">
                    <span className="urban-renew-text68">
                      <span>בירוקרטיה</span>
                    </span>
                    <span className="urban-renew-text70">
                      <span>תכנון ואישור תב״ע</span>
                      <br></br>
                      <span>כ-36 חודשים</span>
                    </span>
                  </div>
                  <span className="urban-renew-text74">3</span>
                </div>
              </div>
              <div className="urban-renew-frame139">
                <div className="urban-renew-container08">
                  <div className="urban-renew-frame1366">
                    <span className="urban-renew-text75">
                      <span>שותפות</span>
                    </span>
                    <span className="urban-renew-text77">
                      <span>בחירת יזם וחתימה</span>
                      <br></br>
                      <span>על הסכם</span>
                    </span>
                  </div>
                  <span className="urban-renew-text81">2</span>
                </div>
              </div>
              <div className="urban-renew-frame137">
                <div className="urban-renew-container09">
                  <div className="urban-renew-frame135">
                    <span className="urban-renew-text82">
                      <span>התנעה</span>
                    </span>
                    <span className="urban-renew-text84">
                      <span>מינוי נציגות דיירים, עו״ד ומפקח</span>
                    </span>
                  </div>
                  <span className="urban-renew-text86">1</span>
                </div>
              </div>
            </div>
            <div>
              <div className="urban-renew-container11">
                <Script
                  html={`<style>
svg .svg-elem-1 {
  stroke-dashoffset: 20370.94921875px;
  stroke-dasharray: 20370.94921875px;
  -webkit-transition: stroke-dashoffset 5s cubic-bezier(0.47, 0, 0.745, 0.715) 0s;
          transition: stroke-dashoffset 5s cubic-bezier(0.47, 0, 0.745, 0.715) 0s;
}

svg.active .svg-elem-1 {
  stroke-dashoffset: 0;
}
</style>`}
                ></Script>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .urban-renew-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .urban-renew-herourbanrenewal {
            gap: 50px;
            width: 100%;
            height: 750px;
            display: flex;
            padding: 130px 0 30px;
            overflow: hidden;
            position: relative;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .urban-renew-container01 {
            gap: 70px;
            display: flex;
            z-index: 1;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
          }
          .urban-renew-leftcoloumn {
            gap: 20px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            justify-content: flex-end;
          }
          .urban-renew-content {
            gap: 50px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .urban-renew-text {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            direction: rtl;
            font-size: 64px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 300;
            line-height: 110%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text01 {
            font-family: 'Ploni ML v2 AAA Light';
          }
          .urban-renew-text02 {
            font-family: 'Ploni ML v2 AAA Light';
          }
          .urban-renew-text03 {
            font-family: 'Ploni ML v2 AAA Light';
          }
          .urban-renew-text04 {
            font-family: 'Ploni ML v2 AAA Light';
          }
          .urban-renew-text05 {
            font-family: 'Ploni ML v2 AAA Bold';
          }
          .urban-renew-formcontact {
            gap: 8px;
            cursor: pointer;
            display: flex;
            padding: 13px 16px;
            align-items: center;
            border-radius: 7px;
            background-color: rgba(33, 182, 96, 1);
          }
          .urban-renew-arrow7-stroke {
            width: 10px;
            height: 9px;
          }
          .urban-renew-text06 {
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
          .urban-renew-rightcoloumn {
            gap: 10px;
            display: flex;
            padding: 0 90px 0 0;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
          }
          .urban-renew-image {
            gap: 10px;
            width: 600px;
            height: 530px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .urban-renew-imageintersection {
            width: 600px;
            height: 530px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .urban-renew-frame150 {
            gap: 10px;
            width: 100%;
            height: 530px;
            display: flex;
            padding: 90px 20px;
            overflow: hidden;
            position: relative;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 20px;
            flex-direction: column;
          }
          .urban-renew-circle {
            top: 100px;
            left: 100px;
            width: 100%;
            bottom: -4px;
            height: 100%;
            display: flex;
            z-index: 0;
            position: absolute;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 0px;
            border-radius: 20px;
          }
          .urban-renew-image1 {
            width: 100%;
            height: auto;
            object-fit: cover;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .urban-renew-frame153 {
            gap: 10px;
            display: flex;
            padding: 9px 11px;
            z-index: 1;
            overflow: hidden;
            align-items: center;
            border-radius: 5px;
            justify-content: center;
            background-color: rgba(255, 255, 255, 0.800000011920929);
          }
          .urban-renew-arrow7-stroke1 {
            width: 8px;
            height: 7px;
          }
          .urban-renew-text08 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-circle1 {
            top: 101px;
            left: 101px;
            width: 100%;
            bottom: -4px;
            height: 100%;
            display: flex;
            z-index: 0;
            position: absolute;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 20px;
          }
          .urban-renew-image2 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .urban-renew-container02 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-image: linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.24) 0%,
              rgba(0, 0, 0, 0.3) 49%,
              rgba(0, 0, 0, 0.24) 100%
            );
          }
          .urban-renew-header {
            gap: 32px;
            width: 1440px;
            display: none;
            padding: 0 90px;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-shrink: 0;
            margin-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .urban-renew-navigationbar {
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
          .urban-renew-search {
            width: 36px;
            filter: invert();
            height: 36px;
          }
          .urban-renew-logo {
            width: 80px;
            height: 40px;
          }
          .urban-renew-hamburger {
            width: 36px;
            height: 36px;
          }
          .urban-renew-container03 {
            gap: 60px;
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: stretch;
            align-items: center;
            padding-top: 0 90px;
            padding-left: 180px;
            margin-bottom: var(--dl-space-space-sixunits);
            padding-right: 180px;
            flex-direction: column;
            padding-bottom: 0 90px;
            justify-content: center;
          }
          .urban-renew-vector {
            top: 340px;
            right: -100px;
            width: 457px;
            height: 546px;
            position: absolute;
          }
          .urban-renew-content1 {
            gap: 60px;
            display: flex;
            z-index: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .urban-renew-frame222 {
            gap: 40px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .urban-renew-text10 {
            color: rgba(0, 177, 64, 1);
            height: auto;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-team {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .urban-renew-memberblock {
            width: 300px;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(166, 196, 177, 1);
            border-style: solid;
            border-width: 0.5px;
            border-radius: 20px;
            flex-direction: column;
            background-color: var(--dl-color-carasso-backgroundcolor);
          }
          .urban-renew-topimage {
            gap: 10px;
            width: 100%;
            height: 347px;
            display: flex;
            padding: 10px;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            background-size: cover;
            background-image: url('/external/top-image-400h-1500w.webp');
          }
          .urban-renew-bottomtext {
            display: flex;
            padding: 22px 24px 20px;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .urban-renew-frame280 {
            gap: 16px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .urban-renew-text13 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text15 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-memberblock1 {
            width: 300px;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(166, 196, 177, 1);
            border-style: solid;
            border-width: 0.5px;
            border-radius: 20px;
            flex-direction: column;
            background-color: var(--dl-color-carasso-backgroundcolor);
          }
          .urban-renew-topimage1 {
            gap: 10px;
            height: 347px;
            display: flex;
            padding: 10px;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            background-size: cover;
            background-image: url('/external/top-image%20(1)1-400h-1500w.webp');
          }
          .urban-renew-bottomtext1 {
            display: flex;
            padding: 22px 24px 20px;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .urban-renew-frame2801 {
            gap: 16px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .urban-renew-text17 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text19 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-memberblock2 {
            width: 300px;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(166, 196, 177, 1);
            border-style: solid;
            border-width: 0.5px;
            border-radius: 20px;
            flex-direction: column;
            background-color: var(--dl-color-carasso-backgroundcolor);
          }
          .urban-renew-topimage2 {
            gap: 10px;
            height: 347px;
            display: flex;
            padding: 10px;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            background-size: cover;
            background-image: url('/external/top-image-400h-1500w.webp');
          }
          .urban-renew-bottomtext2 {
            display: flex;
            padding: 22px 24px 20px;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .urban-renew-frame279 {
            gap: 16px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .urban-renew-text21 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text23 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-memberblock3 {
            width: 300px;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(166, 196, 177, 1);
            border-style: solid;
            border-width: 0.5px;
            border-radius: 20px;
            flex-direction: column;
            background-color: var(--dl-color-carasso-backgroundcolor);
          }
          .urban-renew-topimage3 {
            gap: 10px;
            height: 347px;
            display: flex;
            padding: 10px;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            background-size: cover;
            background-image: url('/external/top-image%20(1)1-400h-1500w.webp');
          }
          .urban-renew-bottomtext3 {
            display: flex;
            padding: 22px 24px 20px;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .urban-renew-frame2791 {
            gap: 16px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .urban-renew-text25 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text27 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-content2 {
            gap: 40px;
            display: flex;
            z-index: 2;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .urban-renew-frame1261158166 {
            gap: 30px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .urban-renew-text29 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 32px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 129.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text31 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 129.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-frame218 {
            gap: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .urban-renew-image18 {
            width: 81px;
            height: 84px;
          }
          .urban-renew-frame219 {
            gap: 14.51128101348877px;
            display: flex;
            padding: 0 0 5.804512023925781px;
            align-items: center;
            justify-content: center;
          }
          .urban-renew-image16 {
            width: 82px;
            height: 82px;
          }
          .urban-renew-image17 {
            width: 61px;
            height: 51px;
          }
          .urban-renew-herourbanrenewal1 {
            gap: 50px;
            width: 100%;
            height: 1076px;
            display: flex;
            padding: 120px 0 0;
            overflow: hidden;
            align-items: center;
            flex-shrink: 0;
            padding-top: 45px;
            flex-direction: column;
            background-size: contain;
            justify-content: center;
            background-color: rgba(236, 241, 239, 1);
            background-position: center;
          }
          .urban-renew-container04 {
            gap: 60px;
            display: flex;
            padding: 0 90px;
            z-index: 1;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-between;
          }
          .urban-renew-image3 {
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .urban-renew-text33 {
            color: rgb(20, 103, 50);
            height: auto;
            z-index: 100;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 300;
            line-height: 110%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text34 {
            font-weight: 300;
          }
          .urban-renew-steps {
            gap: 30px;
            display: flex;
            z-index: 5;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            justify-content: space-between;
          }
          .urban-renew-frame136 {
            gap: 12px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            margin-bottom: 40%;
            justify-content: flex-end;
          }
          .urban-renew-frame1261158169 {
            gap: 12px;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
          }
          .urban-renew-frame1361 {
            gap: 12px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .urban-renew-text36 {
            color: rgba(19, 103, 49, 1);
            height: auto;
            font-size: 18px;
            font-style: Bold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text38 {
            color: rgb(19, 103, 49);
            width: 100%;
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 400;
            line-height: 19px;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text42 {
            color: rgba(19, 103, 49, 1);
            height: auto;
            font-size: 80px;
            font-style: Light;
            text-align: left;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-frame142 {
            gap: 12px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            margin-bottom: 35%;
            justify-content: flex-end;
          }
          .urban-renew-frame1261158168 {
            gap: 12px;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
          }
          .urban-renew-frame1362 {
            gap: 12px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .urban-renew-text43 {
            color: rgba(19, 103, 49, 1);
            height: auto;
            font-size: 18px;
            font-style: Bold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text45 {
            color: rgb(19, 103, 49);
            width: 100%;
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 400;
            line-height: 19px;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text51 {
            color: rgba(19, 103, 49, 1);
            height: auto;
            font-size: 80px;
            font-style: Light;
            text-align: left;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-frame141 {
            gap: 12px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            margin-bottom: 25%;
            justify-content: flex-end;
          }
          .urban-renew-container05 {
            gap: 12px;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
          }
          .urban-renew-frame1363 {
            gap: 12px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .urban-renew-text52 {
            color: rgba(19, 103, 49, 1);
            height: auto;
            font-size: 18px;
            font-style: Bold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text54 {
            color: rgb(19, 103, 49);
            width: 100%;
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 400;
            line-height: 19px;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text60 {
            color: rgba(19, 103, 49, 1);
            height: auto;
            font-size: 80px;
            font-style: Light;
            text-align: left;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-frame140 {
            gap: 12px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            margin-bottom: 20%;
            justify-content: flex-end;
          }
          .urban-renew-container06 {
            gap: 12px;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
          }
          .urban-renew-frame1364 {
            gap: 12px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .urban-renew-text61 {
            color: rgba(19, 103, 49, 1);
            height: auto;
            font-size: 18px;
            font-style: Bold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text63 {
            color: rgb(19, 103, 49);
            width: 100%;
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 400;
            line-height: 19px;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text67 {
            color: rgba(19, 103, 49, 1);
            height: auto;
            font-size: 80px;
            font-style: Light;
            text-align: left;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-frame138 {
            gap: 12px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            margin-bottom: 18%;
            justify-content: flex-end;
          }
          .urban-renew-container07 {
            gap: 12px;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
          }
          .urban-renew-frame1365 {
            gap: 12px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .urban-renew-text68 {
            color: rgba(19, 103, 49, 1);
            height: auto;
            font-size: 18px;
            font-style: Bold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text70 {
            color: rgb(19, 103, 49);
            width: 100%;
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 400;
            line-height: 19px;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text74 {
            color: rgba(19, 103, 49, 1);
            height: auto;
            font-size: 80px;
            font-style: Light;
            text-align: left;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-frame139 {
            gap: 12px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            margin-bottom: 10%;
            justify-content: flex-end;
          }
          .urban-renew-container08 {
            gap: 12px;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
          }
          .urban-renew-frame1366 {
            gap: 12px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .urban-renew-text75 {
            color: rgba(19, 103, 49, 1);
            height: auto;
            font-size: 18px;
            font-style: Bold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text77 {
            color: rgb(19, 103, 49);
            width: 100%;
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 400;
            line-height: 19px;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text81 {
            color: rgba(19, 103, 49, 1);
            height: auto;
            font-size: 80px;
            font-style: Light;
            text-align: left;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-frame137 {
            gap: 12px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            margin-bottom: 5%;
            justify-content: flex-end;
          }
          .urban-renew-container09 {
            gap: 12px;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
          }
          .urban-renew-frame135 {
            gap: 12px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .urban-renew-text82 {
            color: rgba(19, 103, 49, 1);
            height: auto;
            font-size: 18px;
            font-style: Bold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text84 {
            color: rgba(19, 103, 49, 1);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 19px;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text86 {
            color: rgba(19, 103, 49, 1);
            height: auto;
            font-size: 80px;
            font-style: Light;
            text-align: left;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-container11 {
            display: contents;
          }
          @media (max-width: 1440px) {
            .urban-renew-container03 {
              position: relative;
              padding-left: 90px;
              padding-right: 90px;
            }
            .urban-renew-vector {
              top: 0px;
              left: 492px;
              position: absolute;
            }
            .urban-renew-container04 {
              width: 100%;
              height: 100%;
            }
            .urban-renew-steps {
              width: 100%;
              height: 100%;
              flex-direction: column;
            }
            .urban-renew-frame136 {
              margin-bottom: 0px;
              padding-right: 80%;
            }
            .urban-renew-frame142 {
              margin-bottom: 0px;
              padding-right: 70%;
            }
            .urban-renew-frame141 {
              margin-bottom: 0px;
              padding-right: 60%;
            }
            .urban-renew-frame140 {
              margin-bottom: 0px;
              padding-right: 45%;
            }
            .urban-renew-frame138 {
              margin-bottom: 0px;
              padding-right: 30%;
            }
            .urban-renew-frame139 {
              margin-bottom: 0px;
              padding-right: 20%;
            }
          }
          @media (max-width: 1200px) {
            .urban-renew-container03 {
              padding-left: var(--dl-space-space-sixunits);
              padding-right: var(--dl-space-space-sixunits);
            }
            .urban-renew-text10 {
              color: rgb(0, 177, 64);
              font-size: 50px;
              font-family: Ploni ML v2 AAA;
              font-weight: 300;
              line-height: 110%;
              text-decoration: none;
            }
            .urban-renew-text11 {
              font-weight: 300;
            }
            .urban-renew-text12 {
              font-weight: 700;
            }
            .urban-renew-team {
              display: grid;
              align-self: center;
              flex-direction: column;
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 991px) {
            .urban-renew-container01 {
              gap: 10px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              flex-direction: row-reverse;
            }
            .urban-renew-text {
              color: var(--dl-color-carasso-plainwhite);
            }
            .urban-renew-text05 {
              font-weight: 700;
            }
            .urban-renew-rightcoloumn {
              width: 50%;
              padding-right: 0px;
            }
            .urban-renew-image {
              width: 100%;
              height: 100%;
            }
            .urban-renew-imageintersection {
              width: 100%;
              flex-direction: row-reverse;
            }
            .urban-renew-frame150 {
              width: 430px;
              height: 430px;
            }
            .urban-renew-circle {
              left: -100px;
              flex-direction: row-reverse;
            }
            .urban-renew-image1 {
              width: 100%;
              height: 100%;
            }
            .urban-renew-circle1 {
              left: -100px;
              width: 100%;
              height: 100%;
            }
            .urban-renew-container03 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .urban-renew-container04 {
              padding-left: 30px;
              padding-right: 30px;
            }
            .urban-renew-image3 {
              right: 0px;
              bottom: 0px;
            }
            .urban-renew-steps {
              width: auto;
              flex-direction: column;
            }
            .urban-renew-frame136 {
              padding-right: 0px;
              flex-direction: row;
            }
            .urban-renew-frame142 {
              padding-right: 0px;
              flex-direction: row;
            }
            .urban-renew-frame141 {
              padding-right: 0px;
              flex-direction: row;
              padding-bottom: 0px;
            }
            .urban-renew-frame140 {
              padding-right: 0px;
            }
            .urban-renew-frame138 {
              padding-right: 0px;
            }
            .urban-renew-container07 {
              flex-direction: row;
            }
            .urban-renew-frame139 {
              padding-right: 0px;
              flex-direction: row;
            }
            .urban-renew-frame137 {
              flex-direction: row;
            }
          }
          @media (max-width: 767px) {
            .urban-renew-herourbanrenewal {
              height: auto;
            }
            .urban-renew-container01 {
              height: auto;
              flex-direction: column-reverse;
            }
            .urban-renew-rightcoloumn {
              width: 100%;
              height: auto;
            }
            .urban-renew-image {
              height: auto;
            }
            .urban-renew-frame150 {
              width: 530px;
              height: 530px;
            }
            .urban-renew-team {
              width: 100%;
              padding-top: var(--dl-space-space-fourunits);
              border-color: var(--dl-color-theme-neutral-dark);
              border-width: 1px;
              padding-left: var(--dl-space-space-sixunits);
              padding-right: var(--dl-space-space-sixunits);
              padding-bottom: var(--dl-space-space-fourunits);
              grid-template-columns: repeat(1, 1fr);
            }
            .urban-renew-memberblock {
              width: 100%;
            }
            .urban-renew-topimage {
              width: auto;
            }
            .urban-renew-bottomtext {
              width: 100%;
            }
            .urban-renew-memberblock1 {
              width: 100%;
            }
            .urban-renew-memberblock2 {
              width: 100%;
            }
            .urban-renew-memberblock3 {
              width: 100%;
            }
            .urban-renew-steps {
              gap: 0;
            }
          }
          @media (max-width: 479px) {
            .urban-renew-container01 {
              height: auto;
            }
            .urban-renew-content {
              height: auto;
              margin-top: var(--dl-space-space-fiveunits);
            }
            .urban-renew-text {
              font-size: 50px;
            }
            .urban-renew-rightcoloumn {
              height: auto;
            }
            .urban-renew-imageintersection {
              height: auto;
            }
            .urban-renew-frame150 {
              width: 370px;
              height: 370px;
            }
            .urban-renew-circle {
              top: 50px;
              left: -50px;
            }
            .urban-renew-circle1 {
              top: 50px;
              left: -50px;
            }
            .urban-renew-container02 {
              height: 100%;
              padding-bottom: 0px;
            }
            .urban-renew-team {
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .urban-renew-text31 {
              text-align: center;
            }
            .urban-renew-image3 {
              right: 0px;
              bottom: 250px;
            }
          }
        `}
      </style>
    </>
  )
}

export default UrbanRenew
