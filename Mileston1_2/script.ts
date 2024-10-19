const toggleSkillsButton = document.getElementById("toggleSkillsButton");
const skillsSection = document.getElementById("skillsSection");
const toggleExperienceButton = document.getElementById("toggleExperienceButton")
const experienceSection = document.getElementById("experienceSection");


toggleExperienceButton?.addEventListener("click", ()=>{
  if (experienceSection?.style.display == "none"){
    experienceSection.style.display = "block";
  }else{
    experienceSection.style.display = "none";
  }
})
toggleSkillsButton?.addEventListener("click", () => {
  if (skillsSection?.style.display === "none") {
    skillsSection.style.display = "block";
  } else {
    skillsSection.style.display = "none";
  }
});
