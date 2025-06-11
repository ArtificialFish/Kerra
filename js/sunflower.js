const wait = ms => new Promise(res => setTimeout(res, ms));

const play = async () => {
    var play = document.getElementsByClassName("play")[0];

    document.getElementById("note").style.display = "none";
    play.style.background = "#c97314";
    play.disabled = "disabled";
    
    var music = new Audio("./assets/sunflower.mp3");
    music.play(); // 0

    play.style.animation = "fadeOut 5.1s 1.3s linear forwards"; // ends at 6.4s

    await wait(6700); // 6.7

    var s1 = document.getElementById("s1");
    s1.style.animation = "drop 0.6s linear forwards"; // ends at 7.3 *
    
    await wait(1800); // 8.5
    
    s1.style.opacity = "1";
    s1.style.animation = "fadeOut 2s linear forwards"; // ends at 10.5
    
    await wait(3000); // 11.5

    var s2 = document.getElementById("s2");
    s2.style.animation = "fadeIn 2s linear forwards"; // ends at 13.5 *

    await wait(6000); // 17.5
    
    s2.style.opacity = "1";
    s2.style.animation = "fadeOut 2s linear forwards"; // ends at 19.5
    
    await wait(3000); // 20.5

    var s3 = document.getElementById("s3");
    s3.style.animation = "fadeIn 2s linear forwards"; // ends at 22.5 *

    await wait(6500); // 27

    s3.style.opacity = "1";
    s3.style.animation = "fadeOut 2s linear forwards"; // ends at 29
    
    await wait(3000); // 30

    var s4 = document.getElementById("s4");
    s4.style.animation = "fadeIn 2s linear forwards"; // ends at 32 *

    await wait(8500); // 39.5

    s4.style.opacity = "1";
    s4.style.animation = "fadeOut 2s linear forwards"; // ends at 41.5
    
    await wait(3000); // 42.5

    var s5 = document.getElementById("s5");
    s5.style.animation = "fadeIn 2s linear forwards"; // ends at 44.5 *

    await wait(3500); // 46

    s5.style.opacity = "1";
    s5.style.animation = "fadeOut 2s linear forwards"; // ends at 48
    
    await wait(3000); // 49

    var s6 = document.getElementById("s6");
    s6.style.animation = "fadeIn 2s linear forwards"; // ends at 51 *
    
    await wait(5500); // 54.5

    s6.style.opacity = "1";
    s6.style.animation = "fadeOut 2s linear forwards"; // ends at 56.5
    
    await wait(3000); // 57.5

    var s7 = document.getElementById("s7");
    s7.style.animation = "fadeIn 2s linear forwards"; // ends at 59.5 *
    
    
    await wait(9500); // 67

    s7.style.opacity = "1";
    s7.style.animation = "fadeOut 2s linear forwards"; // ends at 69
    
    await wait(3000); // 70
    
    var s8 = document.getElementById("s8");
    s8.style.animation = "fadeIn 2s linear forwards"; // ends at 72 *
    
    await wait(9500); // 79.5

    s8.style.opacity = "1";
    s8.style.animation = "fadeOut 2s linear forwards"; // ends at 81.5
    
    await wait(3000); // 82.5

    var s9 = document.getElementById("s9");
    s9.style.animation = "fadeIn 2s linear forwards"; // ends at 84.5 *
    
    await wait(9000); // 91.5

    s9.style.opacity = "1";
    s9.style.animation = "fadeOut 2s linear forwards"; // ends at 93.5
    
    await wait(3000); // 94.5

    var s10 = document.getElementById("s10");
    s10.style.animation = "fadeIn 2s linear forwards"; // ends at 96.5 *
    
    await wait(9500); // 104

    s10.style.opacity = "1";
    s10.style.animation = "fadeOut 2s linear forwards"; // ends at 106
    
    await wait(3000); // 107

    var s11 = document.getElementById("s11");
    s11.style.animation = "fadeIn 2s linear forwards"; // ends at 109 *
    
    await wait(9500); // 116.5

    s11.style.opacity = "1";
    s11.style.animation = "fadeOut 2s linear forwards"; // ends at 118.5
    
    await wait(3000); // 119.5

    var s12 = document.getElementById("s12");
    s12.style.animation = "fadeIn 2s linear forwards"; // ends at 121.5 *
    
    await wait(3000); // 122.5

    s12.style.opacity = "1";
    s12.style.animation = "fadeOut 2s linear forwards"; // ends at 124.5
    
    await wait(3000); // 125.5

    var s13 = document.getElementById("s13");
    s13.style.animation = "fadeIn 2s linear forwards"; // ends at 127.5 *
    
    await wait(3000); // 128.5

    s13.style.opacity = "1";
    s13.style.animation = "fadeOut 2s linear forwards"; // ends at 130.5
    
    await wait(3000); // 131.5

    var s14 = document.getElementById("s14");
    s14.style.animation = "fadeIn 2s linear forwards"; // ends at 133.5 *
    
    await wait(3500); // 135

    s14.style.opacity = "1";
    s14.style.animation = "fadeOut 2s linear forwards"; // ends at 137
    
    await wait(3000); // 138

    var s15 = document.getElementById("s15");
    s15.style.animation = "fadeIn 2s linear forwards"; // ends at 140 *
    
    await wait(6000); // 144

    s15.style.opacity = "1";
    s15.style.animation = "fadeOut 2s linear forwards"; // ends at 146
    
    await wait(3000); // 147

    var s16 = document.getElementById("s16");
    s16.style.animation = "fadeIn 2s linear forwards"; // ends at 149 *
    
    await wait(9500); // 156.5

    s16.style.opacity = "1";
    s16.style.animation = "fadeOut 2s linear forwards"; // ends at 158.5
    
    await wait(3000); // 159.5

    var s17 = document.getElementById("s17");
    s17.style.animation = "fadeIn 2s linear forwards"; // ends at 161.5 *
};

// 7.3      1 Happy Birthday!
// 13.5     2 I love you so much!
// 22.5        3 I hope your day is amazing
// 32       4 because mine are always brighter with you!
// 44.5     5 You make me so happy
// 51       6 You make me want to be better
// 59.5     7 You are everything to me!
// 72       8 I promise to love you forever
// 84.5     9 We will be so happy together
// 96.5     10 It's just you and me
// 109      11 I can't wait to always be by your side
// 121.5    12 All I picture
// 127.5    13 is the life we will have together
// 133.5    14 Whenever I am with you
// 140      15 everything just feels right!
// 149      16 I can't wait to spend the rest of my life with you!
// 161.5    17 I love you!