var toggleSkillsButton = document.getElementById("toggleSkillsButton");
var skillsSection = document.getElementById("skillsSection");
var toggleExperienceButton = document.getElementById("toggleExperienceButton");
var experienceSection = document.getElementById("experienceSection");
toggleExperienceButton === null || toggleExperienceButton === void 0 ? void 0 : toggleExperienceButton.addEventListener("click", function () {
    if ((experienceSection === null || experienceSection === void 0 ? void 0 : experienceSection.style.display) == "none") {
        experienceSection.style.display = "block";
    }
    else {
        experienceSection.style.display = "none";
    }
});
toggleSkillsButton === null || toggleSkillsButton === void 0 ? void 0 : toggleSkillsButton.addEventListener("click", function () {
    if ((skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.style.display) === "none") {
        skillsSection.style.display = "block";
    }
    else {
        skillsSection.style.display = "none";
    }
});
