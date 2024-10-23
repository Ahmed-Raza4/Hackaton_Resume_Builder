function buildResume() {
    var _a;
    var username = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var dob = document.getElementById("dob").value;
    var nationality = document.getElementById("nationality").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Handle profile picture
    var profilePicInput = document.getElementById("profilePic");
    var resumePic = document.createElement("img");
    resumePic.style.width = "150px";
    resumePic.style.height = "auto";
    resumePic.style.borderRadius = "50%";
    resumePic.style.marginBottom = "10px";
    resumePic.style.objectFit = "cover";
    if (profilePicInput.files && profilePicInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            resumePic.src = e.target.result;
            document.getElementById("resume").prepend(resumePic);
        };
        reader.readAsDataURL(profilePicInput.files[0]);
    }
    else {
        resumePic.style.display = "none";
    }
    var resumeHTML = "\n    <h2>".concat(username, "</h2>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Phone:</strong> ").concat(phone, "</p>\n    <p><strong>Address:</strong> ").concat(address, "</p>\n    <p><strong>Date of Birth:</strong> ").concat(dob, "</p>\n    <p><strong>Nationality:</strong> ").concat(nationality, "</p>\n    <p><strong>Gender:</strong> ").concat(gender, "</p>\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n  ");
    document.getElementById("resume").innerHTML = resumeHTML;
    //Download PDF
    (_a = document.getElementById("downloadPDF")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        var _a;
        // Get the element for resume
        var resume = document.getElementById("resume");
        // Ensure TypeScript knows the element isn't null
        if (resume) {
            var textContent = ((_a = resume.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || "";
            // Check if the resume contains any visible text before trying to download
            if (textContent === "") {
                alert("Please generate the resume first!");
            }
            else {
                // Use html2pdf library to generate the PDF
                html2pdf().from(resume).save("".concat(username, " Resume.pdf"));
            }
        }
        else {
            console.error("Resume element not found");
        }
    });
}
