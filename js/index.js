// if scores are from less than 60 then no schools , please repeat the class.
// if scores are from 70-80 then private school like maradian .
// if scores are from 80-90 you can get  into top schools of your State .
// if scores are from 90-100 you can get into top american schools like UT fun

function Check () {
 {
    var marks=document.getElementById("marks").value;
    console.log(marks)
    if (marks>=90) {
        document.getElementById("output").innerHTML="You can get into any top american schools (Example: UT)"
    }
    if (marks>=80 & marks<90) {
            document.getElementById("output").innerHTML="You can get into  a few private schools. (Example: Riverdale Country school)"
    }
    if (marks>=70 & marks <80) {
        document.getElementById("output").innerHTML="You can get into  top state schools. "
}
}
if (marks<70 ) {
    document.getElementById("output").innerHTML=" Please redo this college class/course. "

    }
}