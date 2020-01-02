"use strict";
const atob = require('atob');

const url = "http://localhost:8080/api/v1/user/login";

module.exports = {
  handle(token){
      this.set(token)
  },
  set(token){
    localStorage.setItem('_token', token)
  },
  get(){
    localStorage.getItem('_token')
  },
  remove(){
      localStorage.removeItem('_token')
  },
  isValid(){
      const token = this.get();

      if(token)
      {
          const payLoad = token.split('.')[1];

          if(payLoad)
          {
              let payLoadItem = null;

              try
              {
                   payLoadItem = JSON.parse(atob(payLoad));
              }
              catch (e) {
                  return false
              }

              return payLoadItem.iss === url;
          }
      }

      return false;
  }
};
