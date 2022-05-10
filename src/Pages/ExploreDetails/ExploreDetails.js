import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ExploreDetails.css";
import CollectionsCard from "../../Components/CollectionsCard/CollectionsCard";
function ExploreDetails(props) {
  const [isExpandDesc, setIsExpandDesc] = useState(false);
  return (
    <div id="ExploreDetails">
      <section>
        <div className="header">
          <div className="header_banner">
            <img
              src={require("../../Static/img/user_banner/user_banner.jpg")}
              alt="img"
            />
          </div>
          <h1 className="section_title text-center my-4">Explore Brands</h1>
        </div>
        <div className="body border_bottom pb-3">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-6">
                <p className="section_description text_white_75 text-center mt-4 mb-3">
                  {isExpandDesc
                    ? ` An online communityAn online communityAn online communityAn
                  online An online communityAn online communityAn online
                  communityAn online An online communityAn online communityAn
                  communityAn online An online communityAn online communityAn
                  communityAn online An online communityAn online communityAn
                  communityAn online An online communityAn online communityAn
                  communityAn online An online communityAn online communityAn
                  online co
                  communityAn online communityAn online An online communityAn`
                    : ` An online communityAn online communityAn online communityAn
                  online An online An An online communityAn online communityAn online communityAn
                  online An online An`}
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              className="btn btn-muted p-0"
              onClick={() => setIsExpandDesc(!isExpandDesc)}
            >
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                height={"32px"}
                fill="var(--text-white-50)"
                data-testid="ArrowDropDownIcon"
                style={{
                  transform: `${isExpandDesc ? "scaleY(-1)" : "scaleY(1)"}`,
                }}
              >
                <path d="m7 10 5 5 5-5z" />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <TrendingsCard></TrendingsCard>
    </div>
  );
}

export default ExploreDetails;

const TrendingsCard = () => {
  const trendings_card_object = [
    {
      id: 1,
      link: "#",
      largeImg: require("../../Static/img/card_img/tamaki_apes.png"),
      smImg: require("../../Static/img/card_img/tamaki_apes.png"),
      cardName: "Tamaki Apes",
      isCardNameVerified: false,
      cardNameBy: "TamakiApesOfficial",
      cardNameByLink: "#",
      description: "A collection of 2222 Apes vibing on the Solana Blockchain.",
    },
    {
      id: 2,
      link: "#",
      largeImg: require("../../Static/img/card_img/yaku.png"),
      smImg: require("../../Static/img/card_img/yaku.png"),
      cardName: "YAKU X",
      isCardNameVerified: false,
      cardNameBy: "9292Zv",
      cardNameByLink: "#",
      description: "Explore the YAKU X collection",
    },
    {
      id: 3,
      link: "#",
      largeImg: require("../../Static/img/card_img/yaku.png"),
      smImg: require("../../Static/img/card_img/yaku.png"),
      cardName: "YAKU X",
      isCardNameVerified: false,
      cardNameBy: "9292Zv",
      cardNameByLink: "#",
      description: "Explore the YAKU X collection",
    },
    {
      id: 4,
      link: "#",
      largeImg: require("../../Static/img/card_img/yaku.png"),
      smImg: require("../../Static/img/card_img/yaku.png"),
      cardName: "YAKU X",
      isCardNameVerified: false,
      cardNameBy: "9292Zv",
      cardNameByLink: "#",
      description: "Explore the YAKU X collection",
    },
    {
      id: 5,
      link: "#",
      largeImg: require("../../Static/img/card_img/yaku.png"),
      smImg: require("../../Static/img/card_img/yaku.png"),
      cardName: "YAKU X",
      isCardNameVerified: false,
      cardNameBy: "9292Zv",
      cardNameByLink: "#",
      description: "Explore the YAKU X collection",
    },
    {
      id: 6,
      link: "#",
      largeImg: require("../../Static/img/card_img/yaku.png"),
      smImg: require("../../Static/img/card_img/yaku.png"),
      cardName: "YAKU X",
      isCardNameVerified: false,
      cardNameBy: "9292Zv",
      cardNameByLink: "#",
      description: "Explore the YAKU X collection",
    },
    {
      id: 7,
      link: "#",
      largeImg: require("../../Static/img/card_img/yaku.png"),
      smImg: require("../../Static/img/card_img/yaku.png"),
      cardName: "YAKU X",
      isCardNameVerified: false,
      cardNameBy: "9292Zv",
      cardNameByLink: "#",
      description: "Explore the YAKU X collection",
    },
    {
      id: 8,
      link: "#",
      largeImg: require("../../Static/img/card_img/yaku.png"),
      smImg: require("../../Static/img/card_img/yaku.png"),
      cardName: "YAKU X",
      isCardNameVerified: false,
      cardNameBy: "9292Zv",
      cardNameByLink: "#",
      description: "Explore the YAKU X collection",
    },
    {
      id: 9,
      link: "#",
      largeImg: require("../../Static/img/card_img/yaku.png"),
      smImg: require("../../Static/img/card_img/yaku.png"),
      cardName: "YAKU X",
      isCardNameVerified: false,
      cardNameBy: "9292Zv",
      cardNameByLink: "#",
      description: "Explore the YAKU X collection",
    },
    {
      id: 10,
      link: "#",
      largeImg: require("../../Static/img/card_img/yaku.png"),
      smImg: require("../../Static/img/card_img/yaku.png"),
      cardName: "YAKU X",
      isCardNameVerified: false,
      cardNameBy: "9292Zv",
      cardNameByLink: "#",
      description: "Explore the YAKU X collection",
    },
    {
      id: 11,
      link: "#",
      largeImg: require("../../Static/img/card_img/yaku.png"),
      smImg: require("../../Static/img/card_img/yaku.png"),
      cardName: "YAKU X",
      isCardNameVerified: false,
      cardNameBy: "9292Zv",
      cardNameByLink: "#",
      description: "Explore the YAKU X collection",
    },
    {
      id: 12,
      link: "#",
      largeImg: require("../../Static/img/card_img/yaku.png"),
      smImg: require("../../Static/img/card_img/yaku.png"),
      cardName: "YAKU X",
      isCardNameVerified: false,
      cardNameBy: "9292Zv",
      cardNameByLink: "#",
      description: "Explore the YAKU X collection",
    },
  ];
  return (
    <section className="my-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="col_wrapper">
              <h3 className="text-center mb-4 mb-md-5">Trending in Brands</h3>
            </div>
          </div>
        </div>

        <div className="row gy-4">
          {trendings_card_object.map((v) => {
            return (
              <div className="col-sm-6 col-lg-4 col-xl-3 h-auto" key={v.id}>
                <div className="col_wrapper h-100">
                  <Link to={v.link} className="h-100">
                    <CollectionsCard
                      largeImg={v.largeImg}
                      smImg={v.smImg}
                      cardName={v.cardName}
                      isCardNameVerified={v.isCardNameVerified}
                      cardNameBy={v.cardNameBy}
                      cardNameByLink={v.cardNameByLink}
                      description={v.description}
                    ></CollectionsCard>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
