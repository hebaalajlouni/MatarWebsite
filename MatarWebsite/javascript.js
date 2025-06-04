const contactUs = document.querySelector(".contactUS");
const ourStory = document.querySelector(".ourStories");
const addmission = document.querySelector(".linkForm");
const submitButton = document.querySelector(".submitButtom"); 
const originalTextContact = contactUs.innerHTML;
const originalTextOurStories = ourStory.innerHTML;
const originalTextAddmission = addmission.innerHTML;
const contactMessageIn = "You're going to click Contact Us";
const ourStoriesMessageIn = "You're going to click Our Story";
const addmissionMessageIn = "You're going to click Addmission";
const contactMessageOut = "You're going away from Contact Us";
const ourStoriesMessageOut = "You're going away from Our Story";
const addmissionMessageOut = "You're going away from Addmission";
let timeoutId;


const changeTitleWhenHover = function (title,message) {
    title.addEventListener("mouseover", () => {
        title.innerHTML = message;
        clearTimeout(timeoutId);
    });
}
changeTitleWhenHover(contactUs, contactMessageIn);
changeTitleWhenHover(ourStory, ourStoriesMessageIn);
changeTitleWhenHover(addmission, addmissionMessageIn);
const changeTitleWhenHoverOut = function (title, message, originalText) {
    title.addEventListener("mouseout", () => {
        title.innerHTML = message;
        timeoutId = setTimeout(() => {
            title.innerHTML = originalText;
        }, 1000);
    });
}
changeTitleWhenHoverOut(contactUs, contactMessageOut, originalTextContact);
changeTitleWhenHoverOut(ourStory, ourStoriesMessageOut, originalTextOurStories);
changeTitleWhenHoverOut(addmission, addmissionMessageOut, originalTextAddmission);

submitButton.addEventListener("click", function (event) {
    event.preventDefault(); 
    window.location.href = "Index.html"; 
});