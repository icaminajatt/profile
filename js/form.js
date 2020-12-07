// Template

let formInfo = [{
    key: 0,
    name: "Percy Jackson",
    job: "Son of Poseidon",
    company: "Camp Half Blood",
    comment: "Where's the glory in repeating what others have done?",
    date: "1993-12-04",
},{
    key: 1,
    name: "Annabeth Chase",
    job: "Daughter of Athena",
    company: "Camp Half Blood",
    comment: "Even strength has to bow down to wisdom sometimes.",
    date: "1993-12-04",
},{
    key: 2,
    name: "Grover Underwood",
    job: "Satyr",
    company: "Camp Half Blood",
    comment: "That if you believe in something so much that you would search for it until the day you die, it is worth it.",
    date: "1993-06-05",
}]

var dataLength = localStorage.length;

if (dataLength === 0) {
    localStorage.setItem("data", JSON.stringify(formInfo))

    for(iterator=0; iterator<formInfo.length; iterator++){
        //logic
            const data = formInfo[iterator];
            // console.log(data);

            const temp = document.getElementsByTagName("template")[0];
            const item = temp.content.querySelector('.info');
            const newArticle = document.importNode(item, true);
        
            let name = newArticle.querySelector(".nameForm");
            name.textContent = data.name; 
        
            let job = newArticle.querySelector(".jobForm");
            job.textContent = data.job;
        
            let company = newArticle.querySelector(".companyForm");
            company.textContent = data.company;
        
            let comment = newArticle.querySelector(".commentForm");
            comment.textContent = data.comment;
        
            let date = newArticle.querySelector(".dateForm");
            date.textContent = data.date;

            button = newArticle.querySelector("btnEdit");
            button.id = data.key;

            button = newArticle.querySelector("#delete");
            button.id = data.key;

            document.getElementById("form").appendChild(newArticle);
        }
} else {
    let info = JSON.parse(localStorage.getItem("data"))

    for(iterator=0; iterator<info.length; iterator++){
        //logic
            const data = info[iterator];
            console.log(data);

            const temp = document.getElementsByTagName("template")[0];
            const item = temp.content.querySelector(".info");
            const newArticle = document.importNode(item, true);
        
            let name = newArticle.querySelector(".nameForm");
            name.textContent = data.name; 
        
            let job = newArticle.querySelector(".jobForm");
            job.textContent = data.job;
        
            let company = newArticle.querySelector(".companyForm");
            company.textContent = data.company;
        
            let comment = newArticle.querySelector(".commentForm");
            comment.textContent = data.comment;
        
            let date = newArticle.querySelector(".dateForm");
            date.textContent = data.date;

            button = newArticle.querySelector("#btnEdit");
            button.id = data.key;

            // button = newArticle.querySelector("#delete");
            // button.id = data.key;

            document.getElementById("form").appendChild(newArticle);
        }
}

const saveToLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("data"));
    console.log(data);

    const newKeyValue = data.length;
    // document.querySelector(".btn").value = newKeyValue;
    const newNameValue =  document.querySelector(".nameValue").value;
    const newJobValue =  document.querySelector(".jobValue").value;
    const newCompanyValue =  document.querySelector(".companyValue").value;
    const newCommentValue =  document.querySelector(".commentValue").value;
    const newDateValue =  document.querySelector(".dateValue").value;

    const newData = [
        ...data,
        {
            key: newKeyValue,
            name: newNameValue,
            job: newJobValue,
            company: newCompanyValue,
            comment: newCommentValue,
            date: newDateValue
        }
    ];

    console.log(newData);
    localStorage.setItem("data", JSON.stringify(newData));
};

// That if you believe in something so much that you would search for it until the day you die, it is worth it.

 function openForm(id) {
    document.getElementById("popupForm").style.display = "block";
    // alert(id)
    let inputData = JSON.parse(localStorage.getItem("data"));
    // button = document.getElementsByClassName("edit")[2].id;
    // button = document.getElementsByClassName("edit");
    // buttonO = document.getElementsByClassName("openButton");
    // console.log(button);
    // console.log(buttonO);
    // var arr = [].slice.call(HTMLCollection);
    // console.log(arr);
    for (var i = 0; i < inputData.length; i++) {
        // num = inputData[i].key;
        // numI =document.getElementById('2');
        // console.log(numI);
        button = document.getElementsByClassName("edit")[i].id;
        console.log(button);

        info = inputData[i].key;
        console.log(info);
        // console.log(button == info);
        if (info == id) {
            document.getElementById('keyInput').value = inputData[i].key;
            document.getElementById('nameInput').value = inputData[i].name; 
            document.getElementById('jobInput').value = inputData[i].job;
            document.getElementById('companyInput').value = inputData[i].company;  
            document.getElementById('commentInput').value = inputData[i].comment; 
            document.getElementById('dateInput').value = inputData[i].date; 
        }
        else {
            // console.log("oopss")
        }
    }
 }

function updateLocalStorage() {
    // alert(id);
    let inputData = JSON.parse(localStorage.getItem("data"));

    for (var i = 0; i < inputData.length; i++) {
        info = inputData[i].key;
        console.log(inputData[i])

        if (info == document.getElementById('keyInput').value) {
            inputData[i].name =  document.querySelector("#nameInput").value;
            inputData[i].job =  document.querySelector("#jobInput").value;
            inputData[i].company =  document.querySelector("#companyInput").value;
            inputData[i].comment =  document.querySelector("#commentInput").value;
            inputData[i].date =  document.querySelector("#dateInput").value;

            break;
        }
    }

    localStorage.setItem("data", JSON.stringify(inputData));
};

function deleteInfo() {
    // alert(id);
    let inputData = JSON.parse(localStorage.getItem("data"));

    for (var i = 0; i < inputData.length; i++) {
        info = inputData[i].key;
        console.log(inputData[i])

        if (info == document.getElementById('keyInput').value) {
            inputData.splice(i, 1);

            break;
        }
    }

    localStorage.setItem("data", JSON.stringify(inputData));
};

function openDeleteForm(id) {
    document.getElementById("deleteForm").style.display = "block";
    alert(id)
    let inputData = JSON.parse(localStorage.getItem("data"));
    for (var i = 0; i < inputData.length; i++) {
        // num = inputData[i].key;
        // numI =document.getElementById('2');
        // console.log(numI);
        button = document.getElementsByClassName("edit")[i].id;
        console.log(button);

        info = inputData[i].key;
        console.log(info);
        // console.log(button == info);
        if (info == id) {
            document.getElementById('keyInput').value = inputData[i].key;
            document.getElementById('nameInput').value = inputData[i].name; 
            document.getElementById('jobInput').value = inputData[i].job;
            document.getElementById('companyInput').value = inputData[i].company;  
            document.getElementById('commentInput').value = inputData[i].comment; 
            document.getElementById('dateInput').value = inputData[i].date; 
        }
        else {
            // console.log("oopss")
        }
    }
}

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}
