const fs = require('fs');

// fs.readFile('babu.txt','utf-8',(data,err)=>{
//     if(err){
//         console.log(err) ;
//         return ;
//     }
//     console.log(data)
// }) ;

// fs.rename('babu.txt','sourav.txt',(err,data)=>{
//     if(err){
//         console.log(err) ;
//         return ;
//     }
//     console.log(data)
// })


// fs.mkdir('demo',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// })

// fs.opendir('demo',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// })

// fs.writeFile('babu.txt','Sourav is good boy',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// })

// fs.appendFile('babu.txt',' And he is a good boy',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// }) ;

// fs.copyFile('babu.txt','riju.txt',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// }) ;

// fs.access('babu.txt',(d)=>{
//     if(d){
//         console.log('File already Exists')
//     }else{
//         console.log('File not exists')
//     }
// })

// fs.watchFile('message.text',(prev,curr)=>{
//     console.log(`Previous Time is : ${prev.mtime}`)
//     console.log(`Current Time is : ${curr.mtime}`)
// })

fs.opendir('newfile',(err,data)=>{
    if(err){
        console.error('Error opening directory:', err);
        return;
    }
    (async function() {
        for await (const dirent of data) {
            console.log(dirent.name);
        }
        data.close((err) => {
            if (err) {
                console.error('Error closing directory:', err);
            }
        });
    })();
})