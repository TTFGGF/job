"use strict";

const HOST = 'https://gw.api.walkclass.com';
const LOGIN = HOST + '/md/user/login.json?';

const User = {
  userId : '',
  userName : '',
  avatarImgUrl : '',
  gender : '',
  email : '',
  birthDay : '',
  tel : '',
  empStatus : '',
  accessToken : ''
};

let user = User;

class ApiClient{
  login(name, pwd){
    //console.log('1111');
    let url = LOGIN + 'userName=' + name + '&pwd=' + pwd + '&appId=1103881651&appKey=puGSHwus3WVPSuPV';
    fetch(url)
    .then((response) => {
      const json = JSON.parse(response._bodyInit);
      Object.assign(user,json);
      console.log(user);
    })
    .then((response) => {

    });
  }
}

const apiClient = new ApiClient();

module.exports = apiClient;
