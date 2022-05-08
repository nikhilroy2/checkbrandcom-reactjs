import React from "react";
import { Link } from "react-router-dom";
import CollectionsCard from "../../Components/CollectionsCard/CollectionsCard";
function ExplorePage(props) {
  const tab_list_object = [
    {
      id: 1,
      name: "Top",
      link: "top",
      isActive: true,
    },
    {
      id: 2,
      name: "Collectibles",
      link: "collectibles",
      isActive: false,
    },
    {
      id: 3,
      name: "Brands",
      link: "brands",
      isActive: false,
    },
    {
      id: 4,
      name: "Persons",
      link: "persons",
      isActive: false,
    },
    {
      id: 5,
      name: "Options",
      link: "options",
      isActive: false,
    },
    {
      id: 6,
      name: "Bonds",
      link: "bonds",
      isActive: false,
    },
  ];
  const [tabName, setTabName] = React.useState(`${window.location.search}`);
  const handleTabActive = () => {
    //console.log(window.location.search)
    setTimeout(() => {
      let searchName = window.location.search;
      setTabName(searchName);
      console.log(searchName);
    }, 0);
  };

  const explore_collection_object = {
    top_collection: [
      {
        id: 1,
        link: "#",
        largeImg: require("../../Static/img/card_img/tamaki_apes.png"),
        smImg: require("../../Static/img/card_img/tamaki_apes.png"),
        cardName: "Tamaki Apes",
        isCardNameVerified: false,
        cardNameBy: "TamakiApesOfficial",
        cardNameByLink: "#",
        description:
          "A collection of 2222 Apes vibing on the Solana Blockchain.",
      },
      {
        id: 2,
        link: "#",
        largeImg: require("../../Static/img/card_img/tamaki_apes.png"),
        smImg: require("../../Static/img/card_img/tamaki_apes.png"),
        cardName: "Tamaki Apes",
        isCardNameVerified: false,
        cardNameBy: "TamakiApesOfficial",
        cardNameByLink: "#",
        description:
          "A collection of 2222 Apes vibing on the Solana Blockchainsdfsdfdsf.",
      },
    ],

    collectibles_collection: [
      {
        id: 1,
        link: "#",
        largeImg: require("../../Static/img/card_img/tamaki_apes.png"),
        smImg: require("../../Static/img/card_img/tamaki_apes.png"),
        cardName: "Tamaki Apes",
        isCardNameVerified: false,
        cardNameBy: "TamakiApesOfficial",
        cardNameByLink: "#",
        description:
          "A collection of 2222 Apes vibing on the Solana Blockchain.",
      },
      {
        id: 2,
        link: "#",
        largeImg: require("../../Static/img/card_img/tamaki_apes.png"),
        smImg: require("../../Static/img/card_img/tamaki_apes.png"),
        cardName: "Tamaki Apes",
        isCardNameVerified: false,
        cardNameBy: "TamakiApesOfficial",
        cardNameByLink: "#",
        description:
          "A collection of 2222 Apes vibing on the Solana Blockchainsdfsdfdsf.",
      },
    ],
  };

  return (
    <div id="ExplorePage">
      <section>
        <div className="container-fluid">
          <div className="col-12">
            <h2 className="section_title text-center text-white">
              Explore Collections
            </h2>
          </div>
        </div>
        <div className="custom_tab my-5 pt-4">
          <ul className="list-unstyled tab_list d-flex align-items-center justify-content-center">
            {tab_list_object.map((v) => {
              return (
                <li className="tab_list_item" key={v.id}>
                  <Link
                    onClick={() => handleTabActive()}
                    to={`/explore?tab=${v.link}`}
                    className={`tab_list_action p-3 text-white-50 h5 ${
                      tabName === `?tab=${v.link}` ? "tab_active" : ""
                    }`}
                  >
                    {v.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="container-fluid">
          {/* .................for Top collections ......................*/}
          <div className="row gy-4">
            {explore_collection_object.top_collection.map((v) => {
              return (
                <div className="col-sm-6 col-lg-4 col-xl-3" key={v.id}>
                  <div className="col_wrapper">
                    <Link to={v.link}>
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

          {/* .................for Top collections ......................End*/}
        </div>
      </section>
    </div>
  );
}

export default ExplorePage;
