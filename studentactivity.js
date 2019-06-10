var courseArray=[];
//on load event will occur when the object has been loaded. And will call init function in our case.
window.onload=init;

//created the function add course which will add course on the click of button register.
function addCourse(){
    //getting theinput value from user so defining it in the array by creating objects.
    var course={
        studentName:document.getElementById("studentName").value,
        name:document.getElementById("courseName").value,
        number:document.getElementById("courseNumber").value,
        room:document.getElementById("room").value

    };

    //if the user inputs every field and none of them is null than the if condition occurs.
    if(course.studentName!==""&&course.name!==""&&course.number!==""&&course.room!=="")
    {
            //getting the value from the key course
            courseArray=JSON.parse(localStorage.getItem("course"))|| [];
            //if user has input any value it adds the data using the keyword push in the course array
            courseArray.push(course);
            //set the item and convert it into string as it stores the data in JSON format
            localStorage.setItem("course",JSON.stringify(courseArray));

            courseArray=localStorage.getItem("course");

            courseArray=JSON.parse(courseArray);
            //setting the retrived data in a row format.
            for(i=0;i<courseArray.length;i++){
                var row= enrolled.insertRow(0);

                var cell1=row.insertCell(0);

                var cell2=row.insertCell(1);

                var cell3=row.insertCell(2);

                var cell4=row.insertCell(3);
                //innerHTML will reading and replacing everything within given element.
                cell1.innerHTML= courseArray[i].studentName;
                cell2.innerHTML= courseArray[i].name;
                cell3.innerHTML=courseArray[i].number;
                cell4.innerHTML=courseArray[i].room;
            }

            //helps preventing the data from repeating in the next line
            //and as its set true the page is always reloaded from the server, ignoring the browser cache.
            window.location.reload(true);

        }
        else{
            alert("Please fill out the fields");
        }
}
    //clearing the data function it just clears the data from the local storage.
    function clearData(){

        var secretPassword=prompt("You need password to clear the Data!");
        if(secretPassword=="password")
        {
                localStorage.clear();
                window.location.reload(true);
        }

        else{
            alert("Incorrect Password");
        }

    
    }

    
        function createSchedule(course){
                var table=document.getElementById("enrolled");
                var row=document.createElement("tr");
               
                var cell1=document.createElement("td");
                var cell2=document.createElement("td");

                var cell3=document.createElement("td");

                var cell4=document.createElement("td");

//innerHTML will read and replacing everything within given element
                cell1.innerHTML=course.studentName;
                cell2.innerHTML=course.name;
                cell3.innerHTML=course.number;
                cell4.innerHTML=course.room;
        //append the data from the cell to the row basically adding but at the end.
                row.appendChild(cell1);
    
                row.appendChild(cell2);
                row.appendChild(cell3);
                row.appendChild(cell4);

                table.appendChild(row);
                //query selector return the first element that matches the specified selector.
                document.querySelector('.welcome #title').innerHTML=course.studentName + "`s";
                document.querySelector('.welcome #title').style.color="red";

                document.querySelector('.welcome #classy').innerHTML= course.name  + "class" ;
                document.querySelector('.welcome #classy').style.color="blue";

                

        }
        
    

    
        function getCourseArray(){
            return JSON.parse(localStorage.getItem ('course'));        
        }
           

           
        



     function init(){
        var courseArray=getCourseArray();

         for( i=0; i <courseArray.length;i++)
         {
             var course=courseArray[i];
            createSchedule(course);

         }
       
     }
