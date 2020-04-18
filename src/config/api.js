/*
封装fetch
params:
method:请求方式 String 必填 GET POST PUT DELETE
url:地址 String 必填
data:数据  对象
 */
import {SUCCESS,HOSTNAME} from './base';
function api(method,url,data) {
    method=method.toUpperCase().trim();


    let headers={
        token:sessionStorage.getItem('token')
    };
    let option={
        method,
        headers
    };
    //1.api(get,'')
    //1.api(get,'',{})
    //1.api(get,'',{page:10})   api/cate?page=10
    // GET DELETE =>headers
    if (method==='GET'&&data &&Object.keys(data).length){
        let str='?';
        for (let i in data){
            str+=`${i}=${data[i]}&`;
        }
        str=str.slice(0,-1);
        url+=str;
    }
    url=HOSTNAME+url;
    //POST PUT=>headers+body
    //api(POST,'',{})
  if (method=='POST'||method=='PUT'){
      let body=JSON.stringify(data);
      headers['Content-type'] = 'application/json';
      option.body = body;

  }
  option.headers=headers;
    fetch(url,{
        method:method,
    })
  let promise=new Promise((resolve, reject) => {
      fetch(url,option).then(res=>res.json()).then(data=>{
          let {code}=data;
            if (code==SUCCESS){
                resolve(data);
            }else {
                reject(data);
            }
      })
  });
  return promise;
}

export {api};