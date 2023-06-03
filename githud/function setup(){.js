function setup(){
    angleMode(DEGREES)
    step=25
    c=0
    w=min(innerWidth,innerHeight )
    r =  w/2
        p=[]
    for(let i=0;i<1000;i+=step){
        p.push([int(sin(i)*r),int(cos(i)*r)])
    }
    t=[]
    for(let i = 0;i<1000/step;i++){
     for(let j = 0;j<1000/step;j++){
      for(let k = 0;k<1000/step;k++){
      if(i!=j && j!=k && k!=i){
        t.push([p[i][0],p[i][1],p[j][0],p[j][1],p[k][0],p[k][1]])}
    }    
    }  
    }
    createCanvas(w,w)
    background(200)
    stroke(0,0,0,250)
    color(100,60,40,6)
  // t=shuffle(t) 
    
    
 }   
function draw(){

fill(240,240,240,5)
translate(w /2,w /2)


    triangle(t[c][0],t[c][1],t[c][2],t[c][3],t[c][4],t[c][5])

  c++ 
  if (c>1090 ){
      fill(0,250,250,3)
      stroke(0,250,250,250)
      for (let i = 1;i<=12;i++){
      // your code goes here
          let c =int(Math.atan(2*PI/24)*w/2)
          //die 12 Radien sind gesucht
          circle(0,0,c)
      }
         noLoop()
  }
   
   if(c>2000){
       noLoop()
       stroke(0,0,0,250)
   }
 }