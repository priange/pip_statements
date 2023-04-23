//Give an array and return the array using .foreach method
// function returned(arr){
    function myDetails(names,age){
        if(names==="Omara Emmanuel Etuk" && age===60){
            console.log("You are " + names + ", aged " + age)
        }
        else{
            console.log("I don't recognise you at all.")
        }
    }
    myDetails("Omara Emmanuel Etuk", 60)
    myDetails("Anabo Ann Jane",45)
  



    function graded(name,int){
        // let int=55
        // const writeItHere=parseInt("Enter your class grade here:")
        if(int<50){
            console.log(name + "Double your efforts")
        }
        if(int>=55){
            console.log("Congatulations, " + name + "you have passed your exams.")
        }
    }
    graded("Ityaku Priscila Evangelin",80)
    



    //if...statement
function giving(grade){
    // const said=parseInt(prompt("Enter your grade here: "))
    if(grade<50){
        console.log("Sorry you failed your exam")
    }
    if(grade>=50){
        console.log("Well done,you have passed your exam!")
    }
}
giving(70)
// giving(02)


//if...else...if statement
function grading(grades){
// const grades=90
if (grades<=45){
    console.log("Bad performance")
}
else if(grades>=75){
    console.log("You have done well.")
}
else if(grades==100){
    console.log("Congraculations,you did quite well.")

}
else if(grades>100){
    console.log("Invalid marks")
}
else{
    console.log("You didn't do a thing.")
}
}
grading(23)




//if...else statement
function reply(){
    let time=10
    if(time<15){
        console.log("Good morning")
    }
    else if(time>=15){
        console.log("Good evening")
    }
    else{
        console.log("It is night already.")
    }
}
reply()

