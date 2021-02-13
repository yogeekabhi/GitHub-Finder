//Init Github
const github = new Github();
//Init UI
const ui = new UI();

const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", (e) => {
  const userText = e.target.value;

  if (userText !== "") {
    //make http request
    github.getUser(userText).then((data) => {
      //Display the UI

      if (data.profile.message === "Not Found") {
        //show Alert
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);

      }
    });
  }
});
