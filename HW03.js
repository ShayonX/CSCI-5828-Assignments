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
    }else if(Type=="Dir"){
      promises.push(get_files(name).then(detect).then(gather).then(sum));
    }
  });
  return Promise.all(promises);
}

let sum = function(sizes) {
  if(sizes.length==0){
    return 0;
  }
  return sizes.reduce((a,b) => a + b);
}

let print_it = function(items) {
  items.forEach( item => console.log(item))
}

let input = process.argv[2]
let files = get_files(input);

files.then(detect).then(gather).then(sum).then(report).catch(fail);
// files.then(print_it);
// files.then(detect).then(print_it);
 //files.then(detect).then(gather).then(print_it);
