//localStorage
let like = localStorage.getItem("like")
if (like === null) localStorage.setItem("like", 1)
else localStorage.setItem("like", ++like)
alert(localStorage.getItem("like"))
 

// sessionStorage
let liked = sessionStorage.getItem("liked");
if (liked === null) sessionStorage.setItem("liked", 1);
else sessionStorage.setItem("liked", ++liked);
alert(sessionStorage.getItem("liked"));