console.log(process.argv.slice(2).reduce((i,j) => {return parseInt(i)+parseInt(j);}));