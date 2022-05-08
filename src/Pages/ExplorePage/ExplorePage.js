import React from "react";
import { Link } from "react-router-dom";
import CollectionsCard from "../../Components/CollectionsCard/CollectionsCard";
function ExplorePage(props) {
  const tab_list_object = [
    {
      id: 1,
      name: "Top",
      link: "top",
    },
    {
      id: 2,
      name: "Collectibles",
      link: "collectibles",
    },
    {
      id: 3,
      name: "Brands",
      link: "brands",
    },
    {
      id: 4,
      name: "Persons",
      link: "persons",
    },
    {
      id: 5,
      name: "Options",
      link: "options",
    },
    {
      id: 6,
      name: "Bonds",
      link: "bonds",
    },
  ];
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
        <div className="custom_tab">
          <ul className="list-unstyled tab_list">
            {tab_list_object.map((v) => {
              return (
                <li className="tab_list_item" key={v.id}>
                  <Link
                    to={`/explore?tab=${v.link}`}
                    className="tab_list_action"
                  >
                    {v.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="col_wrapper">
                <a href="#" className="d-block text-white ">
                  <CollectionsCard></CollectionsCard>
                </a>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="col_wrapper">
                <a href="#" className="d-block text-white ">
                  <CollectionsCard></CollectionsCard>
                </a>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="col_wrapper">
                <a href="#" className="d-block text-white ">
                  <CollectionsCard></CollectionsCard>
                </a>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="col_wrapper">
                <a href="#" className="d-block text-white ">
                  <CollectionsCard></CollectionsCard>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ExplorePage;
