const http = require("http");
const fs = require("fs");
//const qsg = require("querystring");
//const { report } = require("process");
const sendResponse = (filename, statusCode, response) =>{
  fs.readFile(`./${filename}`, (error, data) =>{
    if (error) {  // 判斷readfile 有無錯誤
      response,statusCode = 500;  // 報錯碼 設定 500 
      
      response.setHeader("Content-Type","text/plain");
      response.end("Error 404");  //報錯訊息
      
    } else {
      response.statusCode = statusCode;
      response.setHeader("Content-Type","text/plain");
      response.end(data);
    }
  });
};
const server = http.createServer((request, response) => {
  console.log(request.url, request.methon);
  const method = request.methon;
  const url = request.url;
  if (request.method === "GET") {
    if (url === "/") {
      sendResponse("app.html", 200, response);
    }
  } else {

  }
  console.log(error);
  //response.end("777");
});

const port = 3000;
const ip = "127.0.0.1";
server.listen(port, ip, () => {
  console.log(`Server is running at http://${ip}:${port}`);
});