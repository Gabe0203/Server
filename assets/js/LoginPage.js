function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));}

async function goIn() {
    const login_box = document.getElementById("login-box");
    const background = document.getElementById("backgroundID");
    const welcome = document.getElementById("t1");
    const to = document.getElementById("t2");
    const gabe = document.getElementById("t3");
    const synch = document.getElementById("t4");

    if (login_box) {
        login_box.classList.add("fade-out-login-button");
        background.classList.add("fade-out-background");

        to.style.opacity = "0";
        gabe.style.opacity = "0";
        synch.style.opacity = "0";

        login_box.style.display = "none";
        welcome.classList.add("in-slide-up");

        await sleep(2000);
        welcome.classList.remove("in-slide-up");
        welcome.classList.add("out-slide-up");
        to.classList.add("in-slide-up");

        await sleep(1500);
        to.classList.remove("in-slide-up");
        to.classList.add("out-slide-up");
        gabe.classList.add("in-slide-up");

        await sleep(2000);
        gabe.classList.remove("in-slide-up");
        gabe.style.opacity = "1";
        gabe.classList.add("in-gabe");
        synch.classList.add("in-slide-up-easeinout");

        await sleep(4500);
        synch.classList.remove("in-slide-up-easeinout");
        synch.style.opacity = "1";
        synch.classList.add("out-slide-up-easeinout");
        gabe.classList.remove("in-gabe");
        gabe.classList.add("out-gabe");
        
    }

}