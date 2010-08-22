
var i = 0

function go() {
  if( i < 1000) {
    console.log(i)
    i++
    setTimeout(go, 1000)
  } else {
    process.exit(0) 
  }
}


go()
