// In order to avoid multiple render, I have opted for a stateless function
/* eslint no-use-before-define: 0 */
import React from "react";
import { verifyImageUrl, capitalizeFirstLetter } from "../../helpers/tools";

type UserData = {
  password: String;
  address: String;
  email: String;
  firstname: String;
  gender: String;
  lastname: String;
  login: String;
  picture: String;
  title: String;
};

const processUsersList = (data: any) => {
  const tmpData: any = [];
  let xKey = 0;
  data.forEach((el: UserData) => {
    tmpData.push(
      // eslint-disable-next-line react/jsx-indent
      <div className="col-sm-4" key={xKey}>
        <div className="card">
          <div className="card-body">
            <img src={verifyImageUrl(el.picture)} className="img-rounded" />
            <h5 className="card-title">{capitalizeFirstLetter(el.title)} {capitalizeFirstLetter(el.firstname)} {capitalizeFirstLetter(el.lastname)}</h5>
            <p><span>Gender:</span> {el.gender}</p>
            <p><span>Login:</span> {el.login} / {el.password}</p>
            <p><span>Email: </span>{el.email}</p>
            <p><span>Address: </span>{el.address}</p>
          </div>
        </div>
      </div>
    );
    xKey += 1;
  });
  return tmpData;
};

// Array version
const processArrayList = (data: any) => {
  if (data) {
    return data.split(",");
  }
}
const processUsersArrayList = (data: any) => {
  const tmpData: any = [];
  let xKey = 0;
  data.forEach((el: UserData) => {
    const tmpArrSplit = processArrayList(el);

    const login = tmpArrSplit[0];
    const password = tmpArrSplit[1];
    const title = tmpArrSplit[2];
    const lastName = tmpArrSplit[3];
    const firstName = tmpArrSplit[4];
    const gender = tmpArrSplit[5];
    const email = tmpArrSplit[6];
    const picture = tmpArrSplit[7];
    const address = tmpArrSplit[8];

    tmpData.push(
      // eslint-disable-next-line react/jsx-indent
      <div className="col-sm-4" key={xKey}>
        <div className="card">
          <div className="card-body">
            <img src={verifyImageUrl(picture)} className="img-rounded" />
            <h5 className="card-title">{capitalizeFirstLetter(title)} {capitalizeFirstLetter(firstName)} {capitalizeFirstLetter(lastName)}</h5>
            <p><span>Gender:</span> {gender}</p>
            <p><span>Login:</span> {login} / {password}</p>
            <p><span>Email: </span>{email}</p>
            <p><span>Address: </span>{address}</p>
          </div>
        </div>
      </div>
    );
    xKey += 1;
  });
  return tmpData;
};

export const usersList = (data: any) => {
  try {
    return (
      <div>
        <h2>Users </h2>
        <div className="row">{processUsersList(data)}</div>
      </div>
    );
  } catch (e) {
    console.log(e);
  }
};

export const usersArrayList = (data: any) => {
  try {
    return (
      <div>
        <h2>Users JSON Array</h2>
        <div className="row">{processUsersArrayList(data)}</div>
      </div>
    );
  } catch (e) {
    console.log(e);
  }
};
