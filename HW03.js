let fs = require('fs');

let fail = function(err) { 
  console.log("User error starts");
  console.log(err); };

let report = function(size) {
  console.log("Total size:", size);
}

let get_files = function(dir) {
  return new Promise(function(resolve, reject) {
    fs.readdir(dir, function(err, files) {
      console.log(dir);
      if (err) {
        reject(err);
        return;
      }
        f=[]
        files.forEach(function(element) {
          f.push(dir+'/'+element)
        });
      resolve(f);
    });
  });
}

let get_size = function(name) {
  return new Promise(function(resolve, reject) {
    fs.stat(name, function(err, stats) {
      if (err){
        reject(err);
        return;
      } 
      resolve(stats.size);
    });
  });
}

let is_file = function(name) {
  return new Promise(function(resolve, reject) {
    fs.stat(name, function(err, stats) {
      if (err) {
        reject(err);
        return;
      }
      if(stats.isDirectory()){
        resolve([name, "Dir"]);  
      }else{
        resolve([name, "File"]);  
      }
      
    });
  });
}

let detect = function(files) {
  let promises = []
  files.forEach( file => promises.push(is_file(file)));
  return Promise.all(promises);
}

let gather = function(files) {
  let promises = []
  files.forEach( function(info) {
    let name   = info[0];
    let Type = info[1];
    if (Type=="File") {
      promises.push(get_size(name));
    }else{
      promises.push(get_files(name).then(detect).then(gather).then(sum));
    }
  });
  return Promise.all(promises);
}

let sum = function(sizes) {
  return sizes.reduce((a,b) => a + b);
}

let print_it = function(items) {
  items.forEach( item => console.log(item))
}

let files = get_files('C:/Users/prash/Desktop/Studies/FSE/Homework 1 and 3/HW03_testcases/');

files.then(detect).then(gather).then(sum).then(report).catch(fail);
// files.then(print_it);
// files.then(detect).then(print_it);
 //files.then(detect).then(gather).then(print_it);