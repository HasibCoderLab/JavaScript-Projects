gsap.to('.box',{
x:130,
duration:3,
delay:1,
backgroundColor:'red',
rotate:360,
borderRadius:'50%',
scale:0.5,
repeat:5
}) 

// gsap.from('.box',{
//     x:130,
//     duration:3,
//     delay:1,
//     backgroundColor:'red',
//     rotate:360,
//     borderRadius:'50%',
//     scale:0.5
//     }) 

gsap.from('h1',{
y:40,
duration:1,
opacity:0,
delay:1,
stagger:1,
repeat:-1,
yoyo:true


})

gsap.to('.circle',{
x:400,
borderRadius:'10px',
duration:3,
delay:1,
rotate:360,
repeat:-1,
yoyo:true


})

var tl = gsap.timeline()

tl.to('#box1',{
    x:300,
    duration:2.5,
    delay:1
})



tl.to('#box2',{
    x:300,
    rotate:360,
    duration:2.5,
    
})




tl.to('#box3',{
    x:300,
    rotate:-360,
    duration:3,
    
})

