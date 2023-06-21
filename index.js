function searchProfile() {
    const profileName = document.getElementById("profileName").value;
    const profileDetails = document.getElementById("profileDetails");
  
    fetch(`https://api.github.com/users/${profileName}`)
      .then(response => response.json())
      .then(data => {
        const profileImage = `<img src="${data?.avatar_url}" alt="${profileName}'s GitHub profile image">`;
        const profileFollowers = `<p>Followers: <strong>${data?.followers}</strong></p>`;
        const profileSubscriptions = `<p>Subscriptions: <strong>${data?.subscriptions_count}</strong></p>`;
        profileDetails.innerHTML = profileImage + profileFollowers + profileSubscriptions;
      })
      .catch(error => {
        profileDetails.innerHTML = `<p>Error: ${error.message}</p>`;
      });
  }