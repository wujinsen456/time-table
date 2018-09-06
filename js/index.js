/**
 * Created by 三木 on 2018/9/6.
 */
    //获得当前页面第二个样式表文件
    let sheet=document.styleSheets[1];
    //获得sheet中三个keyframes
    let Skeyframes=sheet.cssRules[4];
    let Mkeyframes=sheet.cssRules[5];
    let Hkeyframes=sheet.cssRules[6];
    //获得三个keyframes下的内嵌rule
    let SStartRule=Skeyframes.cssRules[0];
    let SEndRule=Skeyframes.cssRules[1];
    let MStartRule=Mkeyframes.cssRules[0];
    let MEndRule=Mkeyframes.cssRules[1];
    let HStartRule=Hkeyframes.cssRules[0];
    let HEndRule=Hkeyframes.cssRules[1];
    //计算当前时间对应的三个指针的角度
    let now=new Date();
    let h=now.getHours();
    let m=now.getMinutes();
    let s=now.getSeconds();
    let hDeg=(h*3600+m*60+s)/(3600*12)*360;
    let mDeg=(m*60+s)/3600*360;
    let sDeg=360*s/60;

    //设置三个指针起始角度分别为sDeg,mDeg,hDeg
    SStartRule.style.transform= "rotate("+sDeg+"deg)";
    MStartRule.style.transform= "rotate("+mDeg+"deg)";
    HStartRule.style.transform= "rotate("+hDeg+"deg)";
    //设置三个指针的结束较为分别为其起始角度+360度
    SEndRule.style.transform= "rotate("+(sDeg+360)+"deg)";
    MEndRule.style.transform= "rotate("+(mDeg+360)+"deg)";
    HEndRule.style.transform= "rotate("+(hDeg+360)+"deg)";
