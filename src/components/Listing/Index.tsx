/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable no-console */
import React from "react";
import { settings, ISettings } from "../../helpers/config";
import {
  dataFormats,
  handleDataPagination,
  handleTotalPages,
  handleJSONDataFix,
} from "../../helpers/tools";
import { usersList, usersArrayList } from "../Users/Index";

const config = settings;

type IState = {
  currentPage: number;
  flag: Boolean;
  remoteData: [];
  remoteSecondData: string;
};

type IProps = {};

export default class DataListing extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      currentPage: 0,
      flag: false,
      remoteData: [],
      remoteSecondData: "",
    };

    this.handleRemoteJSONLoad = this.handleRemoteJSONLoad.bind(this);
    this.handleRemoteCSVLoad = this.handleRemoteCSVLoad.bind(this);
    this.handleUserListing = this.handleUserListing.bind(this);
  }

  componentDidMount() {
    try {
      if (config.load) {
        // Implement a Switch here to cater for multiple load approach
        switch (config.format) {
          case dataFormats.json:
            this.handleRemoteJSONLoad();
            break;
          case dataFormats.csv:
            this.handleRemoteCSVLoad();
            break;
          default:
            this.handleRemoteCSVLoad();
        }
      }

      //  Notify user is load is false
    } catch (e) {
      // Notify user
      console.log(e);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  handleRemoteJSONLoad() {
    const { json } = settings.remote;
    console.log(" In JSON Folder");
    fetch(json)
      .then(response => response.json())
      .then(data => {
        // console.log(JSON.stringify(data));
        const tmpData: any = JSON.parse(JSON.stringify(data));

        this.setState({
          remoteSecondData: handleJSONDataFix(tmpData),
        });
        // console.log(handleJSONDataFix(tmpData));
      })
      .catch(error => console.error(error));
  }

  handleRemoteCSVLoad() {
    const { csv } = settings.remote;
    fetch(csv)
      .then(response => response.json())
      .then(data => {
        this.setState({
          flag: false,
          remoteData: data,
        });
      })
      .catch(error => {
        this.setState({
          flag: false,
        });
        console.error(" Could not process => ", error);
      });
  }

  handleUserListing() {
    const localSettings: ISettings = settings;
    const pageConfig: any = localSettings.pagination;
    const { rows } = pageConfig;
    const { remoteData, currentPage } = this.state;
    const pages: number = handleTotalPages(remoteData, rows);
    if (pages > 0) {
      // get number of pages
      const pageData = handleDataPagination(remoteData, currentPage, rows);
      return (
        <div>
          {usersList(pageData)}
          <br />
          {this.generatePaginationFooter(pages)}
        </div>
      );
    }

    return (
      <div>
        <h2>Hello universe, any data :(</h2>
      </div>
    );
    // No data case
  }
  // To be included only when dealing with JSON

  handleUserArrayListing() {
    const localSettings: ISettings = settings;
    const pageConfig: any = localSettings.pagination;
    const { rows } = pageConfig;
    const { remoteSecondData, currentPage } = this.state;
    const pages: number = handleTotalPages(remoteSecondData, rows);
    if (pages > 0) {
      // get number of pages
      const pageData = handleDataPagination(
        remoteSecondData,
        currentPage,
        rows
      );
      return (
        <div>
          {usersArrayList(pageData)}
          <br />
          {this.generatePaginationFooter(pages)}
        </div>
      );
    }

    return (
      <div>
        <h2>Hello universe, any data :(</h2>
      </div>
    );
    // No data case
  }

  handlePageSwitch(key: number) {
    this.setState({
      currentPage: key,
    });
  }

  generatePaginationFooter(pages: number) {
    const pageList: any = [];
    let xKey = 0;

    // eslint-disable-next-line no-plusplus
    for (let x = 0; x < pages; x++) {
      xKey = x + 1;
      pageList.push(
        <li
          className="page-item"
          key={x} onClick = {()=>this.handlePageSwitch(x)}
        >
          <a className="page-link" >{xKey}</a>
        </li>
      );
    }

    return (
      <nav>
        <ul className="pagination">
          {pageList}
        </ul>
    </nav>)
  }

  render() {
    return (
      <div>
        <h1>OAT Recruitment</h1>
        <br />
        {this.handleUserListing()}
      </div>
    );
  }
}
