const {MongoClient} = require("mongodb");
//몽고디비 연결 주소
const uri = "mongodb+srv://chocoyujung7:yujung7!@cluster0.ykh8yfz.mongodb.net/test";

module.exports = function(callback){ //몽고디비 커넥션 연결 함수 반환
    return MongoClient.connect(uri, callback);
}