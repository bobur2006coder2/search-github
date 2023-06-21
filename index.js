let inp=document.querySelector("input")
let box=document.querySelector(".error-box")
   
      
  





const getUserData = async () => {
    let url = await `https://api.github.com/search/users?q=${inp.value}`
    
        await fetch(url)
        .then(res => res.json())
        .then((data) => {
            fetch(`https://api.github.com/users/${inp.value}/followers?per_page=100&page=1`)
            .then((res) => res.json())
            .then((follow) => {
                let item = data?.items[0]
                let box = document.querySelector(".error-box")
                box.innerHTML = `
                <div class="flex">
                <img src="${item?.avatar_url}" alt="" class="user-img">
                <div class="right">
                    <h3>${item?.login}</h3>
                    <ul class="list">
                        <li>
                            <span>${follow.length}</span>
                            Followers
                        </li>
                       
                    </ul>
                </div>
            </div>
                              `
            })
        })


}

inp.addEventListener("keyup",getUserData)
