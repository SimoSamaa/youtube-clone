"use strict";
const startContainer = document.querySelector(".start");
const nav = document.querySelector("nav");
const navHeader = document.querySelector(".nav-header");
const Copyright = document.querySelector(".Copyright");
const inputSearch = document.querySelector("input");
const btnSearch = document.querySelector(".search-btn");
const btnRemoveValue_search = document.querySelector(".remove-value_search");
const btnAddInput_search = document.querySelector(".btn-add_input-search");
const btnBackInput_search = document.querySelector(".btn-back_input-search");
const videoPlayer = document.querySelector(".video-player");
const popUp = document.querySelector(".pop-up");
const video = document.querySelector("video");
const btnPlayPause = document.querySelector(".btn-play-pause");
const btnTheater = document.querySelector(".btn-theater");
const btnfullScreen = document.querySelector(".btn-full-screen");
const btnMiniPlayer = document.querySelector(".btn-mini-player");
const btnVolumeLvl = document.querySelector(".btn-volume-level");
const lineProgressRange = document.querySelector(".line-progress");
const volumeRange = document.querySelector("[type='range']");
const htmlEelementInherit = `<!-- menu -->
<button class="menu">
    <svg viewBox="0 0 24 24">
        <g class="style-scope yt-icon">
            <path d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z" class="style-scope yt-icon">
            </path>
        </g>
    </svg>
</button>

<!-- logo app -->
<a href="https://www.youtube.com" class="logo">
    <svg viewBox="0 0 90 20" class="yt-icon">
        <g viewBox="0 0 90 20">
            <g class="style-scope yt-icon">
                <path
                    d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z"
                    fill="#FF0000" class="style-scope yt-icon"></path>
                <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white"
                    class="style-scope yt-icon"></path>
            </g>
            <g class="style-scope yt-icon">
                <g id="youtube-paths" class="style-scope yt-icon">
                    <path
                        d="M34.6024 13.0036L31.3945 1.41846H34.1932L35.3174 6.6701C35.6043 7.96361 35.8136 9.06662 35.95 9.97913H36.0323C36.1264 9.32532 36.3381 8.22937 36.665 6.68892L37.8291 1.41846H40.6278L37.3799 13.0036V18.561H34.6001V13.0036H34.6024Z"
                        class="style-scope yt-icon"></path>
                    <path
                        d="M41.4697 18.1937C40.9053 17.8127 40.5031 17.22 40.2632 16.4157C40.0257 15.6114 39.9058 14.5437 39.9058 13.2078V11.3898C39.9058 10.0422 40.0422 8.95805 40.315 8.14196C40.5878 7.32588 41.0135 6.72851 41.592 6.35457C42.1706 5.98063 42.9302 5.79248 43.871 5.79248C44.7976 5.79248 45.5384 5.98298 46.0981 6.36398C46.6555 6.74497 47.0647 7.34234 47.3234 8.15137C47.5821 8.96275 47.7115 10.0422 47.7115 11.3898V13.2078C47.7115 14.5437 47.5845 15.6161 47.3329 16.4251C47.0812 17.2365 46.672 17.8292 46.1075 18.2031C45.5431 18.5771 44.7764 18.7652 43.8098 18.7652C42.8126 18.7675 42.0342 18.5747 41.4697 18.1937ZM44.6353 16.2323C44.7905 15.8231 44.8705 15.1575 44.8705 14.2309V10.3292C44.8705 9.43077 44.7929 8.77225 44.6353 8.35833C44.4777 7.94206 44.2026 7.7351 43.8074 7.7351C43.4265 7.7351 43.156 7.94206 43.0008 8.35833C42.8432 8.77461 42.7656 9.43077 42.7656 10.3292V14.2309C42.7656 15.1575 42.8408 15.8254 42.9914 16.2323C43.1419 16.6415 43.4123 16.8461 43.8074 16.8461C44.2026 16.8461 44.4777 16.6415 44.6353 16.2323Z"
                        class="style-scope yt-icon"></path>
                    <path
                        d="M56.8154 18.5634H54.6094L54.3648 17.03H54.3037C53.7039 18.1871 52.8055 18.7656 51.6061 18.7656C50.7759 18.7656 50.1621 18.4928 49.767 17.9496C49.3719 17.4039 49.1743 16.5526 49.1743 15.3955V6.03751H51.9942V15.2308C51.9942 15.7906 52.0553 16.188 52.1776 16.4256C52.2999 16.6631 52.5045 16.783 52.7914 16.783C53.036 16.783 53.2712 16.7078 53.497 16.5573C53.7228 16.4067 53.8874 16.2162 53.9979 15.9858V6.03516H56.8154V18.5634Z"
                        class="style-scope yt-icon"></path>
                    <path
                        d="M64.4755 3.68758H61.6768V18.5629H58.9181V3.68758H56.1194V1.42041H64.4755V3.68758Z"
                        class="style-scope yt-icon"></path>
                    <path
                        d="M71.2768 18.5634H69.0708L68.8262 17.03H68.7651C68.1654 18.1871 67.267 18.7656 66.0675 18.7656C65.2373 18.7656 64.6235 18.4928 64.2284 17.9496C63.8333 17.4039 63.6357 16.5526 63.6357 15.3955V6.03751H66.4556V15.2308C66.4556 15.7906 66.5167 16.188 66.639 16.4256C66.7613 16.6631 66.9659 16.783 67.2529 16.783C67.4974 16.783 67.7326 16.7078 67.9584 16.5573C68.1842 16.4067 68.3488 16.2162 68.4593 15.9858V6.03516H71.2768V18.5634Z"
                        class="style-scope yt-icon"></path>
                    <path
                        d="M80.609 8.0387C80.4373 7.24849 80.1621 6.67699 79.7812 6.32186C79.4002 5.96674 78.8757 5.79035 78.2078 5.79035C77.6904 5.79035 77.2059 5.93616 76.7567 6.23014C76.3075 6.52412 75.9594 6.90747 75.7148 7.38489H75.6937V0.785645H72.9773V18.5608H75.3056L75.5925 17.3755H75.6537C75.8724 17.7988 76.1993 18.1304 76.6344 18.3774C77.0695 18.622 77.554 18.7443 78.0855 18.7443C79.038 18.7443 79.7412 18.3045 80.1904 17.4272C80.6396 16.5476 80.8653 15.1765 80.8653 13.3092V11.3266C80.8653 9.92722 80.7783 8.82892 80.609 8.0387ZM78.0243 13.1492C78.0243 14.0617 77.9867 14.7767 77.9114 15.2941C77.8362 15.8115 77.7115 16.1808 77.5328 16.3971C77.3564 16.6158 77.1165 16.724 76.8178 16.724C76.585 16.724 76.371 16.6699 76.1734 16.5594C75.9759 16.4512 75.816 16.2866 75.6937 16.0702V8.96062C75.7877 8.6196 75.9524 8.34209 76.1852 8.12337C76.4157 7.90465 76.6697 7.79646 76.9401 7.79646C77.2271 7.79646 77.4481 7.90935 77.6034 8.13278C77.7609 8.35855 77.8691 8.73485 77.9303 9.26636C77.9914 9.79787 78.022 10.5528 78.022 11.5335V13.1492H78.0243Z"
                        class="style-scope yt-icon"></path>
                    <path
                        d="M84.8657 13.8712C84.8657 14.6755 84.8892 15.2776 84.9363 15.6798C84.9833 16.0819 85.0821 16.3736 85.2326 16.5594C85.3831 16.7428 85.6136 16.8345 85.9264 16.8345C86.3474 16.8345 86.639 16.6699 86.7942 16.343C86.9518 16.0161 87.0365 15.4705 87.0506 14.7085L89.4824 14.8519C89.4965 14.9601 89.5035 15.1106 89.5035 15.3011C89.5035 16.4582 89.186 17.3237 88.5534 17.8952C87.9208 18.4667 87.0247 18.7536 85.8676 18.7536C84.4777 18.7536 83.504 18.3185 82.9466 17.446C82.3869 16.5735 82.1094 15.2259 82.1094 13.4008V11.2136C82.1094 9.33452 82.3987 7.96105 82.9772 7.09558C83.5558 6.2301 84.5459 5.79736 85.9499 5.79736C86.9165 5.79736 87.6597 5.97375 88.1771 6.32888C88.6945 6.684 89.059 7.23433 89.2707 7.98457C89.4824 8.7348 89.5882 9.76961 89.5882 11.0913V13.2362H84.8657V13.8712ZM85.2232 7.96811C85.0797 8.14449 84.9857 8.43377 84.9363 8.83593C84.8892 9.2381 84.8657 9.84722 84.8657 10.6657V11.5641H86.9283V10.6657C86.9283 9.86133 86.9001 9.25221 86.846 8.83593C86.7919 8.41966 86.6931 8.12803 86.5496 7.95635C86.4062 7.78702 86.1851 7.7 85.8864 7.7C85.5854 7.70235 85.3643 7.79172 85.2232 7.96811Z"
                        class="style-scope yt-icon"></path>
                </g>
            </g>
        </g>
    </svg>
</a>`;
startContainer.innerHTML = htmlEelementInherit;
navHeader.innerHTML = htmlEelementInherit;
;
[...navHeader.children].forEach((el, index) => {
    if (index == 0)
        el.setAttribute("tabindex", "0");
    if (index == 1)
        el.setAttribute("tabindex", "0");
});
startContainer.children[0].addEventListener("click", () => {
    nav.classList.add("active-nav");
    nav.addEventListener("click", (e) => {
        if (e.target != e.currentTarget)
            return;
        nav.classList.remove("active-nav");
        document.body.style.overflowY = "scroll";
        videoPlayer.style.zIndex = "1";
    });
    navHeader.children[0].addEventListener("click", () => {
        nav.classList.remove("active-nav");
        document.body.style.overflowY = "scroll";
        videoPlayer.style.zIndex = "1";
    });
    if (nav.classList.contains("active-nav")) {
        document.body.style.overflowY = "hidden";
        videoPlayer.style.zIndex = "-1";
    }
});
let years = new Date();
Copyright.innerHTML = `&copy ${years.getFullYear()} Google LLC`;
let urlLink = "https://www.youtube.com/results?search_query=";
btnSearch.addEventListener("click", buttonSearch);
function buttonSearch() {
    if (inputSearch.value != "") {
        window.location.href = urlLink + inputSearch.value;
        inputSearch.value = "";
    }
}
;
window.addEventListener('keyup', (e) => {
    if (e.key.includes("Enter"))
        return buttonSearch();
});
inputSearch.addEventListener("input", (e) => {
    if (e.target.value == "") {
        btnRemoveValue_search.style.display = "none";
    }
    else if (e.target.value != "") {
        btnRemoveValue_search.style.display = "block";
    }
    btnRemoveValue_search.onclick = () => {
        e.target.value = "";
        btnRemoveValue_search.style.display = "none";
    };
    document.removeEventListener("keyup", KeyboardControleVideoPlayer);
    e.target.onblur = () => document.addEventListener("keyup", KeyboardControleVideoPlayer);
});
btnAddInput_search.style.display = "none";
btnBackInput_search.style.display = "none";
btnAddInput_search.addEventListener("click", (e) => {
    let searchElement = inputSearch.closest(".search-element");
    let searchSection = searchElement.closest('.search-section');
    e.currentTarget.classList.add("search-toggle");
    btnBackInput_search.classList.add("search-toggle");
    searchSection.classList.add("add");
    searchElement.classList.add("show-input");
    function removeClasses() {
        searchSection.classList.remove("add");
        searchElement.classList.remove("show-input");
        btnBackInput_search.classList.remove("search-toggle");
        btnAddInput_search.classList.remove("search-toggle");
        ;
        [...startContainer.children].forEach(el => el.removeAttribute("tabindex"));
    }
    document.body.addEventListener("click", (e) => {
        let blur = e.target.matches(".blur");
        if (blur == false)
            removeClasses();
    });
    btnBackInput_search.onclick = (() => removeClasses());
    ;
    [...startContainer.children].forEach(el => el.setAttribute("tabindex", "-1"));
});
const navBarLists = document.querySelectorAll(".option li");
let links = [
    "https://www.youtube.com/",
    "https://www.youtube.com/shorts/wBQwKQetqLI",
    "https://www.youtube.com/feed/subscriptions",
    "https://www.youtube.com/feed/library",
    "https://www.youtube.com/feed/history",
    "https://www.youtube.com/",
    "https://www.youtube.com/",
    "https://www.youtube.com/",
    "https://www.youtube.com/feed/trending?bp=6gQJRkVleHBsb3Jl",
    "https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ",
    "https://www.youtube.com/gaming",
    "https://www.youtube.com/channel/UCEgdi0XIXXZ-qJOFPf4JSKw",
    "https://www.youtube.com/",
    "https://www.youtubekids.com/?source=youtube_web",
    "https://www.youtube.com/account",
    "https://www.youtube.com/reporthistory",
    "https://www.youtube.com/",
    "https://www.youtube.com/",
];
navBarLists.forEach((list, index) => {
    list.addEventListener("click", () => {
        for (let i = 0; i < links.length; i++) {
            if (index == i) {
                window.location.href = links[i];
            }
        }
    });
});
let skipL, skipR;
document.addEventListener("keyup", KeyboardControleVideoPlayer);
function KeyboardControleVideoPlayer(e) {
    var _a;
    const tagName = (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.tagName.toLowerCase();
    switch (e.key.toLowerCase()) {
        case ' ':
        case 'k':
            {
                if (tagName === "button")
                    return;
                palyPaudseVideoToggle();
                break;
            }
            ;
        case 't':
            {
                theaterModeToggle(null);
                break;
            }
            ;
        case 'f':
            {
                fullScreenModeToggle();
                break;
            }
            ;
        case 'i':
            {
                miniPlayerModeToggle();
                break;
            }
            ;
        case 'm':
            {
                volumeLevelToggle();
                shortcutKeyVolume();
                break;
            }
            ;
        case 'arrowright':
        case 'l':
            {
                skipCurrentTime(5);
                clearInterval(skipR);
                skipPopUpRight();
                break;
            }
            ;
        case 'arrowleft':
        case 'j':
            {
                skipCurrentTime(-5);
                clearInterval(skipL);
                skipPopUpLeft();
                break;
            }
            ;
        case 'c':
            {
                captionSubTitleModeToggle();
                break;
            }
            ;
    }
}
video.addEventListener("click", palyPaudseVideoToggle);
btnPlayPause.addEventListener("click", palyPaudseVideoToggle);
function palyPaudseVideoToggle() {
    if (video.paused) {
        video.play();
        popUp.innerHTML = `
        <svg viewBox="0 0 36 36">
            <path  fill="#fff" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path>
        </svg>
        `;
    }
    else {
        video.pause();
        popUp.innerHTML = `
        <svg viewBox="0 0 36 36">
            <path fill="#fff" d=" M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path>
        </svg>
        `;
    }
    popUpVideo();
}
;
function popUpVideo() {
    popUp.classList.add("add-pop-up");
    popUp.addEventListener("animationend", () => {
        popUp.classList.remove("add-pop-up");
    });
}
;
video.addEventListener('play', () => {
    videoPlayer.classList.remove("paused");
});
video.addEventListener('pause', () => {
    videoPlayer.classList.add("paused");
});
btnTheater.addEventListener("click", () => theaterModeToggle(null));
const mainContainer = videoPlayer.closest(".main-container");
function theaterModeToggle(theaterObj) {
    videoPlayer.classList.toggle("theater");
    mainContainer.classList.toggle("theater");
    theaterObj = {
        theaterplayer: videoPlayer.className,
        theatermain: mainContainer.className,
    };
    localStorage.setItem("theater-mode", JSON.stringify(theaterObj));
}
;
btnfullScreen.addEventListener("click", fullScreenModeToggle);
function fullScreenModeToggle() {
    videoPlayer.classList.toggle("full-screen");
    if (document.fullscreenElement == null) {
        videoPlayer.requestFullscreen();
    }
    else {
        document.exitFullscreen();
    }
}
;
btnMiniPlayer.addEventListener("click", miniPlayerModeToggle);
function miniPlayerModeToggle() {
    videoPlayer.classList.toggle("mini-player");
    if (videoPlayer.classList.contains("mini-player")) {
        video.requestPictureInPicture();
    }
    else {
        document.exitPictureInPicture();
    }
}
;
let volumeLevel;
btnVolumeLvl.addEventListener("click", volumeLevelToggle);
volumeRange.addEventListener("input", (e) => {
    video.volume = e.target.value;
    video.muted = e.target.value === 0;
    let progressValue = e.target.value * 100 + "%";
    lineProgressRange.style.width = progressValue;
});
function disabledControleVideo() {
    volumeRange.onfocus = () => {
        document.removeEventListener("keyup", KeyboardControleVideoPlayer);
    };
    volumeRange.onblur = () => {
        document.addEventListener("keyup", KeyboardControleVideoPlayer);
    };
}
;
disabledControleVideo();
function volumeLevelToggle() {
    video.muted = !video.muted;
    if ((video.volume && video.muted) == false) {
        video.muted = volumeRange.value === "1";
        video.volume = 1;
    }
    else {
        video.muted = volumeRange.value === "0";
        video.volume = 0;
    }
    if (video.muted || video.volume == 0) {
        lineProgressRange.style.width = "0";
    }
    else {
        lineProgressRange.style.width = "100%";
    }
}
;
let volumePr = document.createElement("div");
function volumePercent(percent) {
    volumePr.className = "volume-percent";
    volumePr.textContent = percent;
    videoPlayer.appendChild(volumePr);
    setTimeout(() => volumePr.remove(), 500);
}
;
;
video.addEventListener("volumechange", (e) => videoVolumeInfo(e, null));
function videoVolumeInfo(e, arrayVolume) {
    let videoVolume = e.target.volume;
    volumeRange.value = video.volume.toString();
    let volumeObj = {
        volumeLvl: volumeLevel,
        volumeVal: volumeRange.value,
        volumeLin: lineProgressRange.style.width,
    };
    arrayVolume = [];
    arrayVolume.push(volumeObj);
    arrayVolume.forEach(element => {
        if (video.muted || videoVolume == 0) {
            volumeRange.value = "0";
            element.volumeLvl = "muted";
        }
        else if (videoVolume >= .5) {
            element.volumeLvl = "high";
        }
        else {
            element.volumeLvl = "low";
        }
        videoPlayer.dataset.volumeLevel = element.volumeLvl;
    });
    localStorage.setItem("data-volume", JSON.stringify(arrayVolume));
}
;
function shortcutKeyVolume() {
    if (video.volume == 0) {
        popUp.innerHTML = `
        <svg viewBox="0 0 36 36" >
            <path fill="#fff"
                d="m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 
                .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,
                .86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,
                -0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z">
            </path>
        </svg>`;
        volumePercent("0%");
    }
    else {
        popUp.innerHTML = `
        <svg viewBox="0 0 36 36">
            <path fill="#fff"
                d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,
                14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,
                12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z">
            </path>
        </svg>`;
        volumePercent("100%");
    }
    popUpVideo();
}
;
const totalTime = document.querySelector(".total-time");
const currentTime = document.querySelector(".current-time");
video.addEventListener("loadeddata", (e) => {
    totalTime.textContent = formatDuration(e.target.duration);
});
;
let timeLineProgress;
const timeLineContainer = document.querySelector(".timeline-container");
video.addEventListener("timeupdate", (e) => {
    currentTime.textContent = formatDuration(e.target.currentTime);
    const percent = video.currentTime / video.duration;
    timeLineContainer.style.setProperty("--progress-position", percent.toFixed(2));
    timeLineProgress = {
        lineporcent: percent.toFixed(2),
        videoct: video.currentTime.toFixed(2),
    };
    localStorage.setItem("data-time", JSON.stringify(timeLineProgress));
});
function formatDuration(time) {
    let seconds = Math.floor(time % 60);
    let minuts = Math.floor(time / 60);
    let hours = Math.floor(time / 3600);
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    if (video.currentTime == video.duration) {
        videoPlayer.classList.add("rel");
        btnPlayPause.onclick = () => {
            if (videoPlayer.classList.contains("rel")) {
                videoPlayer.classList.remove("rel");
                video.addEventListener("pause", () => {
                    videoPlayer.classList.remove("paused");
                    video.play();
                });
                video.play();
            }
        };
    }
    else {
        videoPlayer.classList.remove("rel");
    }
    if (hours === 0) {
        return `${minuts}:${seconds} `;
    }
    else {
        return `${hours}:${minuts}:${seconds} `;
    }
}
;
function skipCurrentTime(durationSkip) {
    video.currentTime += durationSkip;
}
;
let skiRight = document.createElement("div");
let skipLeft = document.createElement("div");
skiRight.className = "skip-time skip-right";
skipLeft.className = "skip-time skip-left";
let skipIcon = `
    <div class='seconds'>
        <div class='skip-icon'>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <p style='text-align: center; color: var(--clr-white);'>5 seconds</p>
    </div>
`;
const skipPopUpRight = () => {
    var _a;
    skiRight.innerHTML = skipIcon;
    let arrowDirLeft = (_a = skiRight.firstElementChild) === null || _a === void 0 ? void 0 : _a.children[0];
    arrowDirLeft === null || arrowDirLeft === void 0 ? void 0 : arrowDirLeft.classList.add("arrowDirLeft");
    videoPlayer.appendChild(skiRight);
    skipR = setTimeout(() => skiRight.remove(), 1000);
    if (video.currentTime == video.duration)
        skiRight.remove();
};
const skipPopUpLeft = () => {
    var _a;
    skipLeft.innerHTML = skipIcon;
    let arrowDirRight = (_a = skipLeft.firstElementChild) === null || _a === void 0 ? void 0 : _a.children[0];
    arrowDirRight === null || arrowDirRight === void 0 ? void 0 : arrowDirRight.classList.add("arrowDirRight");
    videoPlayer.appendChild(skipLeft);
    skipL = setTimeout(() => skipLeft.remove(), 1000);
    if (video.currentTime == 0)
        skipLeft.remove();
    if (videoPlayer.classList.contains("rel"))
        video.play();
};
const brnCaption = document.querySelector(".btn-caption");
brnCaption.addEventListener("click", captionSubTitleModeToggle);
let captionMode = video.textTracks[0];
captionMode.mode = "hidden";
function captionSubTitleModeToggle() {
    const isCaption = captionMode.mode === "hidden";
    captionMode.mode = isCaption ? "showing" : "hidden";
    videoPlayer.classList.toggle("caption");
}
;
const brnSpeed = document.querySelector(".btn-speed");
brnSpeed.addEventListener("click", speedVideoToggle);
function speedVideoToggle() {
    let newPlaybackRate = video.playbackRate + .25;
    if (newPlaybackRate > 2) {
        newPlaybackRate = .25;
    }
    video.playbackRate = newPlaybackRate;
    brnSpeed.textContent = `${newPlaybackRate}x`;
}
;
;
const likeBtn = document.querySelector(".btn-like");
likeBtn.addEventListener("click", (e) => {
    e.target.classList.toggle("liked");
    const liked = !e.target.classList.contains("liked");
    liked ? likeBtn.lastChild.textContent = "1" : likeBtn.lastChild.textContent = "0";
    let dataLike = {
        likeicon: e.target.className,
        likenum: likeBtn.lastChild.textContent,
    };
    removeLiked();
    localStorage.setItem("data-like", JSON.stringify(dataLike));
});
const removeLiked = () => {
    if (!likeBtn.classList.contains("liked")) {
        dislikeBtn.onclick = () => {
            likeBtn.classList.add("liked");
            likeBtn.lastChild.textContent = "0";
            localStorage.removeItem("data-like");
        };
    }
};
const dislikeBtn = document.querySelector(".btn-dislike");
dislikeBtn.addEventListener("click", (e) => {
    e.target.classList.toggle("disliked");
    removeDisliked();
    localStorage.setItem("data-dislike", e.target.className);
});
const removeDisliked = () => {
    if (!dislikeBtn.classList.contains("disliked")) {
        likeBtn.onclick = () => {
            dislikeBtn.classList.add("disliked");
            localStorage.removeItem("data-dislike");
        };
    }
};
const descriptionToggle = document.querySelector(".description-container");
const date = descriptionToggle.firstElementChild.children[0];
descriptionToggle.addEventListener("click", (e) => {
    let showMore = e.target.matches(".show-more");
    let showMoreChange;
    if (showMore == true) {
        let description = e.currentTarget.classList.toggle("description");
        description = description ? showMoreChange = "Mar 15,2023" : showMoreChange = "8 days ago";
    }
    else {
        e.currentTarget.classList.add("description");
        showMoreChange = "Mar 15,2023";
    }
    date.textContent = showMoreChange;
});
const previewContainer = document.querySelector(".preview-container");
const previewImg = document.querySelector(".preview-img");
const thumbnailImg = document.querySelector(".thumbnail-img");
timeLineContainer.addEventListener("mousemove", handleTimeLineUpdate);
timeLineContainer.addEventListener("pointerdown", (e) => {
    timeLineContainer.setPointerCapture(e.pointerId);
    toggleScrubbing(e);
    timeLineContainer.addEventListener("pointermove", toggleScrubbing);
    timeLineContainer.addEventListener("pointerup", () => {
        timeLineContainer.removeEventListener("pointermove", toggleScrubbing);
    }, { once: true });
});
function handleTimeLineUpdate(e) {
    const rect = timeLineContainer.getBoundingClientRect();
    const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width;
    const previewImgNumber = Math.max(1, Math.floor((percent * video.duration / 10)));
    previewImg.src = `./assets/previewImgs/preview${previewImgNumber}.jpg`;
    timeLineContainer.style.setProperty("--preview-position", percent.toFixed(2));
    let previewImgPercent = percent;
    if (previewImgPercent >= 0.11) {
        previewContainer.style.setProperty("--previewimg-pos", "calc(var(--preview-position) * 100%)");
        previewContainer.style.transform = "translate(-50%, -100%)";
    }
    else {
        previewContainer.style.transform = "translate(0, -100%)";
        previewContainer.style.setProperty("--previewimg-pos", "0");
    }
    if (previewImgPercent >= 0.88) {
        previewContainer.style.setProperty("--previewimg-pos", "90%");
    }
    let previewTimeProgress = (e.offsetX / rect.width) * video.duration;
    let timeLine = previewTimeProgress <= 0 ? +0 : previewTimeProgress;
    let timeLineProgressNumber;
    if (video.currentTime == video.duration) {
        timeLineProgressNumber = formatDuration(video.duration);
    }
    else {
        timeLineProgressNumber = formatDuration(timeLine);
    }
    previewContainer.dataset.previewTime = timeLineProgressNumber;
}
;
let stopTouchMobile;
function toggleScrubbing(e) {
    const rect = timeLineContainer.getBoundingClientRect();
    const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width;
    timeLineContainer.style.setProperty("--progress-position", percent.toFixed(2));
    video.currentTime = percent * video.duration;
    clearInterval(stopTouchMobile);
    handleTimeLineUpdate(e);
    e.preventDefault();
}
;
function getDataFromLocalStorage(arrayVolume, theaterObj, dataLike) {
    if (localStorage.getItem("theater-mode")) {
        theaterObj = JSON.parse(localStorage["theater-mode"]);
        videoPlayer.className = theaterObj.theaterplayer;
        mainContainer.className = theaterObj.theatermain;
        videoPlayer.classList.add("paused");
    }
    if (localStorage.getItem("data-like")) {
        dataLike = JSON.parse(localStorage["data-like"]);
        likeBtn.className = dataLike.likeicon;
        likeBtn.lastChild.textContent = dataLike.likenum;
        removeLiked();
    }
    if (localStorage.getItem("data-dislike")) {
        dislikeBtn.className = localStorage["data-dislike"];
        removeDisliked();
    }
    if (localStorage.getItem("data-volume")) {
        arrayVolume = JSON.parse(localStorage["data-volume"]);
        videoPlayer.dataset.volumeLevel = arrayVolume[0].volumeLvl;
        lineProgressRange.style.width = arrayVolume[0].volumeLin;
        volumeRange.value = arrayVolume[0].volumeVal;
        video.volume = +volumeRange.value;
    }
    if (localStorage.getItem("data-time")) {
        timeLineProgress = JSON.parse(localStorage['data-time']);
        timeLineContainer.style.setProperty("--progress-position", timeLineProgress.lineporcent);
        video.currentTime = +timeLineProgress.videoct;
    }
}
;
getDataFromLocalStorage(null, null, null);
const videoPlayList = document.querySelector(".play-list-video");
fetch("./src/video-list.json")
    .then((videoListData) => {
    let data = videoListData.json();
    return data;
}).then((myData) => {
    for (let i = 0; i < myData.length; i++) {
        let videoListContainer = document.createElement("div");
        videoListContainer.className = "video-container-list";
        videoListContainer.innerHTML = `
                <div class="main-video-list">
                    <img src ='${myData[i].videoimg}'>
                    <span class='video-list-time'>${myData[i].videotime}</span>
                </div>

                <div class="info-video-list">
                    <strong class="main-video-list_title" style="display: block; margin-bottom: 4px;">${myData[i].title}</strong>
                    <p>${myData[i].channelname}</p>
                    <div class="video-views-years">
                        <span>${myData[i].views}</span>
                        <span>${myData[i].years}</span>
                    </div>
                <div>
            `;
        videoListContainer.onclick = () => location.href = myData[i].videolink;
        videoPlayList.append(videoListContainer);
    }
}).catch(() => console.error("json path not unavailable"));
let mobileSize = 550;
const theaterModeMediaQuery = window.matchMedia(`(max-width:${mobileSize}px)`);
const fullScreenModeMediaQuery = window.matchMedia('(max-device-width: 896px) and (orientation: landscape)');
const orientationPortrait = window.matchMedia(`(max-device-width: ${mobileSize}px) and (orientation: portrait)`);
function handleTheatermode(e) {
    const theaterModeOn = e.matches;
    if (theaterModeOn) {
        videoPlayer.classList.add("theater");
        mainContainer.classList.add("theater");
    }
    else {
        videoPlayer.classList.remove("theater");
        mainContainer.classList.remove("theater");
    }
}
;
function videoFullscreenLandscape(e) {
    const fullScreen_landscape = e.matches;
    if (fullScreen_landscape) {
        videoPlayer.classList.add("video-fullscreen-landscape");
        document.body.style.overflow = "hidden";
    }
    else {
        videoPlayer.classList.remove("video-fullscreen-landscape");
        document.body.style.overflow = "visible";
    }
}
;
videoFullscreenLandscape(fullScreenModeMediaQuery);
fullScreenModeMediaQuery.addListener(videoFullscreenLandscape);
const videoControlContainer = document.querySelector(".video-controls-container");
function mobileTouchVideo(e) {
    const videoSection = document.querySelector(".video-section");
    if (e.matches) {
        videoPlayer.onpointerenter = () => {
            stopTouchMobile = setTimeout(() => {
                videoControlContainer.style.visibility = "hidden";
            }, 3000);
            if (videoControlContainer.style.visibility == "hidden") {
                videoControlContainer.style.visibility = "visible";
                clearInterval(stopTouchMobile);
            }
        };
        window.onscroll = function () {
            if (this.scrollY) {
                videoSection.classList.add('video-mobile-device');
            }
            else {
                videoSection.classList.remove('video-mobile-device');
            }
        };
        handleTheatermode(theaterModeMediaQuery);
        theaterModeMediaQuery.addListener(handleTheatermode);
    }
    else {
        videoSection.classList.remove('video-mobile-device');
    }
}
;
mobileTouchVideo(orientationPortrait);
orientationPortrait.addListener(mobileTouchVideo);
//# sourceMappingURL=main-script.js.map