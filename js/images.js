//设置英雄机图片宽度
var heroWidth=62;
//设置英雄机图片高度
var heroHeight=55;
//设置敌飞机1图片宽度
var enemy1Width=57;
//设置敌飞机1图片高度
var enemy1Height=51;
//设置敌飞机2图片宽度
var enemy2Width=68;
//设置敌飞机2图片高度
var enemy2Height=66;
//设置敌飞机3图片宽度
var enemy3Width=165;
//设置敌飞机3图片高度
var enemy3Height=160;
//敌飞机1子弹宽度
var ENEMYBULLETWIDTH_1=6;
//敌飞机1子弹高度
var ENEMYBULLETHEIGHT_1=14;
//敌飞机2子弹宽度
var ENEMYBULLETWIDTH_2=6;
//敌飞机2子弹高度
var ENEMYBULLETHEIGHT_2=15;
//敌飞机3子弹宽度
var ENEMYBULLETWIDTH_3=10;
//敌飞机3子弹高度
var ENEMYBULLETHEIGHT_3=33;

//初始天空背景图片
var background = new Image();
background.src = "images/background.png";

//创建数组存储所有小型敌机的图片
var e1 = [];
e1[0] = new Image();
e1[0].src = "images/enemy1.png";
e1[1] = new Image();
e1[1].src = "images/enemy1_down1.png";
e1[2] = new Image();
e1[2].src = "images/enemy1_down2.png";
e1[3] = new Image();
e1[3].src = "images/enemy1_down3.png";
e1[4] = new Image();
e1[4].src = "images/enemy1_down4.png";

//创建数组存储所有中型敌机的图片
var e2 = [];
e2[0] = new Image();
e2[0].src = "images/enemy2.png";
e2[1] = new Image();
e2[1].src = "images/enemy2_down1.png";
e2[2] = new Image();
e2[2].src = "images/enemy2_down2.png";
e2[3] = new Image();
e2[3].src = "images/enemy2_down3.png";
e2[4] = new Image();
e2[4].src = "images/enemy2_down4.png";

//创建数组存储所有大型敌机的图片
var e3 = [];
e3[0] = new Image();
e3[0].src = "images/enemy3_n1.png";
e3[1] = new Image();
e3[1].src = "images/enemy3_n2.png";
e3[2] = new Image();
e3[2].src = "images/enemy3_down1.png";
e3[3] = new Image();
e3[3].src = "images/enemy3_down2.png";
e3[4] = new Image();
e3[4].src = "images/enemy3_down3.png";
e3[5] = new Image();
e3[5].src = "images/enemy3_down4.png";
e3[6] = new Image();
e3[6].src = "images/enemy3_down5.png";
e3[7] = new Image();
e3[7].src = "images/enemy3_down6.png";

//创建数组存储所有英雄机的图片
var h = [];
h[0] = new Image();
h[0].src = "images/hero1.png";
h[1] = new Image();
h[1].src = "images/hero2.png";
h[2] = new Image();
h[2].src = "images/hero_blowup_n1.png";
h[3] = new Image();
h[3].src = "images/hero_blowup_n2.png";
h[4] = new Image();
h[4].src = "images/hero_blowup_n3.png";
h[5] = new Image();
h[5].src = "images/hero_blowup_n4.png";


//创建数组存储所有的英雄子弹图片
var b = [];
b[0] = new Image();
b[0].src = "images/bullet1.png";
b[1] = new Image();
b[1].src = "images/bullet2.png";
var b1 = [];
b1[0] = new Image();
b1[0].src = "images/bullet11.png";
b1[1] = new Image();
b1[1].src = "images/bullet21.png";
var b2 = [];
b2[0] = new Image();
b2[0].src = "images/bullet12.png";
b2[1] = new Image();
b2[1].src = "images/bullet22.png";
var b3 = [];
b3[0] = new Image();
b3[0].src = "images/bullet13.png";
b3[1] = new Image();
b3[1].src = "images/bullet23.png";
var b4 = [];
b4[0] = new Image();
b4[0].src = "images/bullet14.png";
b4[1] = new Image();
b4[1].src = "images/bullet24.png";
var b5 = [];
b5[0] = new Image();
b5[0].src = "images/bullet15.png";
b5[1] = new Image();
b5[1].src = "images/bullet25.png";

//创建数组存储所有的敌机子弹图片
var bb1 = [];
bb1[0] = new Image();
bb1[0].src = "images/enemy_bullet11.png";
bb1[1] = new Image();
bb1[1].src = "images/enemy_bullet12.png";
var bb2 = [];
bb2[0] = new Image();
bb2[0].src = "images/enemy_bullet21.png";
bb2[1] = new Image();
bb2[1].src = "images/enemy_bullet22.png";
var bb3 = [];
bb3[0] = new Image();
bb3[0].src = "images/enemy_bullet31.png";
bb3[1] = new Image();
bb3[1].src = "images/enemy_bullet32.png";

//加载版权和暂停、结束图片
var copyright = new Image();
copyright.src = "images/shoot_copyright.png";
var pause = new Image();
pause.src = "images/game_pause_nor.png";
var start = new Image();
start.src = "images/game_start_nor.png";
var gameover=new Image();
gameover.src = "images/gameover.png";

//创建图片对象，存储ufo图片
var u = [];
u[0] = new Image();
u[0].src = "images/ufo1.png";


//存储盾牌图像
var s=[];
s[0]=new Image();
s[0].src="images/shield.png";

//存储桃心图像
var l=[];
l[0] = new Image();
l[0].src = "images/life.png";

//存储有盾牌的英雄机图片
var sH=[];
sH[0]=new Image();
sH[0].src="images/hero1_protect1.png";
sH[1]=new Image();
sH[1].src="images/hero1_protect2.png";
sH[2]=new Image();
sH[2].src="images/hero_protect_disappear_n1.png";
sH[3]=new Image();
sH[3].src="images/hero_protect_disappear_n2.png";
sH[4]=new Image();
sH[4].src="images/hero_protect_disappear_n3.png";

//创建图片对象，存储桃心图片
var heart = new Image();
heart.src = "images/heart.png";	
