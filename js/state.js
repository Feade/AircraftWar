//定义状态变量
var START = 1;
var RUNNING = 2;
var PAUSE = 3;
var GAME_OVER = 4;
var LEVEL_PAUSE = 5;
var state = START;

//设置掉落方式，默认true为随机掉落，否为打掉敌飞机概率掉落
var randomMode=true;
//设置ufo开关
var ufoSwitch=true;
//设置盾牌开关
var shieldSwitch=true;
//设置桃心开关
var heartSwitch=true;
//设置敌飞机火力开关
var enemyFireSwitch=false;

//添加score表示游戏初始分数
var score = 0;
//添加heroes表示游戏初始生命值
var heroes = 3;
//设置heroes最大生命值
var MAX_HEROES=102;
//设置复活英雄机无敌时间（毫秒*10）
var NEW_HERO_SUPER_TIME_UNIT=100;
//设置子弹射击间隔（毫秒）
var SHOOT_INTERVAL=300;

//设置图片帧/打印间隔（毫秒）
var paintLastTime = 0;
var paintInterval = 40;	
//设置敌飞机出场间隔（毫秒）
var lastTime = 0;
var interval = 1200;

//定义关卡级别
var level=1;
//暂存等级
var levelTemp=level;
//不同等级相应分数
var scoreLevel=[-1,100,1000,10000,100000,1000000];

//设置天空背景移动频率（毫秒）
var SKY_INTERVAL=100;
//设置敌飞机飞行速度（像素/10毫秒）
var ENEMY_SPEED=0.6;
//设置敌飞机子弹速度（像素/10毫秒）
var ENEMY_FIRE_SPEED=0.8;

//设置敌飞机生命值
var enemyLife_1=3;
//设置打掉一个敌飞机的得分
var enemyScore_1=10;
//设置敌飞机子弹射击间隔（毫秒）
var ENEMY_SHOOT_INTERVAL_1=4200;
//设置打掉敌飞机1掉落的概率
var RANDOM_ENMEY_1=5;

var enemyLife_2=5;
var enemyScore_2=5;
var ENEMY_SHOOT_INTERVAL_2=3800;
//设置打掉敌飞机2掉落的概率
var RANDOM_ENMEY_2=2;

var enemyLife_3=20;
var enemyScore_3=20;
var ENEMY_SHOOT_INTERVAL_3=3500;
//设置打掉敌飞机3掉落的概率
var RANDOM_ENMEY_3=1;

//设置UFO送的子弹数
var UFO_FIRE_UNIT=5;
//设置UFO出现频率
//随机掉落概率
var UFO_RANDOM_INTERVAL=5;
//打掉敌机掉落的概率
var UFO_RANDOM_INTERVAL_1=3;
//设置页面最多同时出现的UFO个数
var MAX_UFO=3;

//设置英雄机无敌时间时长（100约3秒）
var SUPER_TIME_UNIT =100;
//设置盾牌掉落频率
var SHIELD_RANDOM_INTERVAL=4;
var SHIELD_RANDOM_INTERVAL_1=8;
//设置页面最多同时出现的盾牌个数
var MAX_SHIELD=3;

//设置桃心数
var HEART_NUMBER = 1;
//设置桃心掉落频率
var HEART_RANDOM_INTERVAL=5;
var HEART_RANDOM_INTERVAL_1=10;
//设置页面最多同时出现的桃心数
var MAX_HEARTS=3;

function checkLevel(){
	for(var i=0;i<scoreLevel.length;i++){
		if(score<scoreLevel[i]){
			level=i;
			break;
		}
	}
	if(levelTemp!=level){
		levelTemp=level;
		state=LEVEL_PAUSE;
		background.src = "images/background"+(level-1)+".png";
		switch(level){
			case 2:
				//设置敌飞机生命值
				enemyLife_1=2;
				enemyLife_2=5;
				enemyLife_3=25;
				//设置打掉一个敌飞机的得分
				enemyScore_1=5;
				enemyScore_2=8;
				enemyScore_3=30;

				MAX_HEROES=102;
				//设置UFO送的子弹数
				UFO_FIRE_UNIT=8;
				//设置英雄机无敌时间时长（100约3秒）
				SUPER_TIME_UNIT =150;
				//设置复活英雄机无敌时间（毫秒*10）
				NEW_HERO_SUPER_TIME_UNIT=200;

				//设置掉落方式，默认true为随机掉落，否为打掉敌飞机概率掉落
				randomMode=true;
				//设置ufo开关
				ufoSwitch=true;
				//设置盾牌开关
				shieldSwitch=true;
				//设置桃心开关
				heartSwitch=true;
				//设置敌飞机火力开关
				enemyFireSwitch=false;

				//设置图片帧/打印间隔（毫秒）
				paintLastTime = 0;
				paintInterval = 40;	
				//设置敌飞机出场间隔（毫秒）
				interval = 500;
				//设置子弹射击间隔（毫秒）
				SHOOT_INTERVAL=300;
				//设置敌飞机子弹射击间隔（毫秒）
				ENEMY_SHOOT_INTERVAL_1=4200;
				ENEMY_SHOOT_INTERVAL_2=3800;
				ENEMY_SHOOT_INTERVAL_3=3500;
				//设置敌飞机飞行速度（像素/10毫秒）
				ENEMY_SPEED=0.7;
				//设置敌飞机子弹速度（像素/10毫秒）
				ENEMY_FIRE_SPEED=0.8;

				//设置打掉敌飞机1掉落的概率
				RANDOM_ENMEY_1=5;
				//设置打掉敌飞机2掉落的概率
				RANDOM_ENMEY_2=2;
				//设置打掉敌飞机3掉落的概率
				RANDOM_ENMEY_3=1;

				//设置UFO出现频率
				//随机掉落概率
				UFO_RANDOM_INTERVAL=8;
				//打掉敌机掉落的概率
				UFO_RANDOM_INTERVAL_1=3;
				//设置页面最多同时出现的UFO个数
				MAX_UFO=2;
				//设置盾牌掉落频率
				SHIELD_RANDOM_INTERVAL=8;
				SHIELD_RANDOM_INTERVAL_1=8;
				//设置页面最多同时出现的盾牌个数
				MAX_SHIELD=2;
				//设置桃心掉落频率
				HEART_RANDOM_INTERVAL=12;
				HEART_RANDOM_INTERVAL_1=10;
				//设置页面最多同时出现的桃心数
				MAX_HEARTS=2;
				break;
			case 3:
				//设置敌飞机生命值
				enemyLife_1=3;
				enemyLife_2=6;
				enemyLife_3=30;
				//设置打掉一个敌飞机的得分
				enemyScore_1=10;
				enemyScore_2=20;
				enemyScore_3=50;

				MAX_HEROES=102;
				//设置UFO送的子弹数
				UFO_FIRE_UNIT=8;
				//设置英雄机无敌时间时长（100约3秒）
				SUPER_TIME_UNIT =150;
				//设置复活英雄机无敌时间（毫秒*10）
				NEW_HERO_SUPER_TIME_UNIT=200;

				//设置掉落方式，默认true为随机掉落，否为打掉敌飞机概率掉落
				randomMode=false;
				//设置ufo开关
				ufoSwitch=true;
				//设置盾牌开关
				shieldSwitch=true;
				//设置桃心开关
				heartSwitch=true;
				//设置敌飞机火力开关
				enemyFireSwitch=false;

				//设置图片帧/打印间隔（毫秒）
				paintLastTime = 0;
				paintInterval = 40;	
				//设置敌飞机出场间隔（毫秒）
				interval = 400;
				//设置子弹射击间隔（毫秒）
				SHOOT_INTERVAL=280;
				//设置敌飞机子弹射击间隔（毫秒）
				ENEMY_SHOOT_INTERVAL_1=4200;
				ENEMY_SHOOT_INTERVAL_2=3800;
				ENEMY_SHOOT_INTERVAL_3=3500;
				//设置敌飞机飞行速度（像素/10毫秒）
				ENEMY_SPEED=0.8;
				//设置敌飞机子弹速度（像素/10毫秒）
				ENEMY_FIRE_SPEED=0.8;

				//设置打掉敌飞机1掉落的概率
				RANDOM_ENMEY_1=5;
				//设置打掉敌飞机2掉落的概率
				RANDOM_ENMEY_2=2;
				//设置打掉敌飞机3掉落的概率
				RANDOM_ENMEY_3=1;

				//设置UFO出现频率
				//随机掉落概率
				UFO_RANDOM_INTERVAL=12;
				//打掉敌机掉落的概率
				UFO_RANDOM_INTERVAL_1=3;
				//设置页面最多同时出现的UFO个数
				MAX_UFO=2;
				//设置盾牌掉落频率
				SHIELD_RANDOM_INTERVAL=4;
				SHIELD_RANDOM_INTERVAL_1=5;
				//设置页面最多同时出现的盾牌个数
				MAX_SHIELD=2;
				//设置桃心掉落频率
				HEART_RANDOM_INTERVAL=5;
				HEART_RANDOM_INTERVAL_1=8;
				//设置页面最多同时出现的桃心数
				MAX_HEARTS=1;
				break;
			case 4:

				//设置敌飞机生命值
				enemyLife_1=5;
				enemyLife_2=15;
				enemyLife_3=35;
				//设置打掉一个敌飞机的得分
				enemyScore_1=10;
				enemyScore_2=15;
				enemyScore_3=80;

				MAX_HEROES=102;
				//设置UFO送的子弹数
				UFO_FIRE_UNIT=8;
				//设置英雄机无敌时间时长（100约3秒）
				SUPER_TIME_UNIT =150;
				//设置复活英雄机无敌时间（毫秒*10）
				NEW_HERO_SUPER_TIME_UNIT=200;

				//设置掉落方式，默认true为随机掉落，否为打掉敌飞机概率掉落
				randomMode=false;
				//设置ufo开关
				ufoSwitch=true;
				//设置盾牌开关
				shieldSwitch=true;
				//设置桃心开关
				heartSwitch=true;
				//设置敌飞机火力开关
				enemyFireSwitch=false;

				//设置图片帧/打印间隔（毫秒）
				paintLastTime = 0;
				paintInterval = 40;	
				//设置敌飞机出场间隔（毫秒）
				interval = 380;
				//设置子弹射击间隔（毫秒）
				SHOOT_INTERVAL=250;
				//设置敌飞机子弹射击间隔（毫秒）
				ENEMY_SHOOT_INTERVAL_1=4200;
				ENEMY_SHOOT_INTERVAL_2=3800;
				ENEMY_SHOOT_INTERVAL_3=3500;
				//设置敌飞机飞行速度（像素/10毫秒）
				ENEMY_SPEED=0.8;
				//设置敌飞机子弹速度（像素/10毫秒）
				ENEMY_FIRE_SPEED=0.8;

				//设置打掉敌飞机1掉落的概率
				RANDOM_ENMEY_1=5;
				//设置打掉敌飞机2掉落的概率
				RANDOM_ENMEY_2=2;
				//设置打掉敌飞机3掉落的概率
				RANDOM_ENMEY_3=1;

				//设置UFO出现频率
				//随机掉落概率
				UFO_RANDOM_INTERVAL=12;
				//打掉敌机掉落的概率
				UFO_RANDOM_INTERVAL_1=5;
				//设置页面最多同时出现的UFO个数
				MAX_UFO=2;
				//设置盾牌掉落频率
				SHIELD_RANDOM_INTERVAL=4;
				SHIELD_RANDOM_INTERVAL_1=6;
				//设置页面最多同时出现的盾牌个数
				MAX_SHIELD=1;
				//设置桃心掉落频率
				HEART_RANDOM_INTERVAL=5;
				HEART_RANDOM_INTERVAL_1=7;
				//设置页面最多同时出现的桃心数
				MAX_HEARTS=1;
				break;
			case 5:

				//设置敌飞机生命值
				enemyLife_1=15;
				enemyLife_2=20;
				enemyLife_3=50;
				//设置打掉一个敌飞机的得分
				enemyScore_1=20;
				enemyScore_2=50;
				enemyScore_3=100;

				MAX_HEROES=102;
				//设置UFO送的子弹数
				UFO_FIRE_UNIT=8;
				//设置英雄机无敌时间时长（100约3秒）
				SUPER_TIME_UNIT =150;
				//设置复活英雄机无敌时间（毫秒*10）
				NEW_HERO_SUPER_TIME_UNIT=200;

				//设置掉落方式，默认true为随机掉落，否为打掉敌飞机概率掉落
				randomMode=true;
				//设置ufo开关
				ufoSwitch=true;
				//设置盾牌开关
				shieldSwitch=true;
				//设置桃心开关
				heartSwitch=true;
				//设置敌飞机火力开关
				enemyFireSwitch=true;

				//设置图片帧/打印间隔（毫秒）
				paintLastTime = 0;
				paintInterval = 40;	
				//设置敌飞机出场间隔（毫秒）
				interval = 1200;
				//设置子弹射击间隔（毫秒）
				SHOOT_INTERVAL=300;
				//设置敌飞机子弹射击间隔（毫秒）
				ENEMY_SHOOT_INTERVAL_1=4200;
				ENEMY_SHOOT_INTERVAL_2=3800;
				ENEMY_SHOOT_INTERVAL_3=3500;
				//设置敌飞机飞行速度（像素/10毫秒）
				ENEMY_SPEED=0.6;
				//设置敌飞机子弹速度（像素/10毫秒）
				ENEMY_FIRE_SPEED=0.8;

				//设置打掉敌飞机1掉落的概率
				RANDOM_ENMEY_1=3;
				//设置打掉敌飞机2掉落的概率
				RANDOM_ENMEY_2=2;
				//设置打掉敌飞机3掉落的概率
				RANDOM_ENMEY_3=1;

				//设置UFO出现频率
				//随机掉落概率
				UFO_RANDOM_INTERVAL=12;
				//打掉敌机掉落的概率
				UFO_RANDOM_INTERVAL_1=3;
				//设置页面最多同时出现的UFO个数
				MAX_UFO=1;
				//设置盾牌掉落频率
				SHIELD_RANDOM_INTERVAL=4;
				SHIELD_RANDOM_INTERVAL_1=5;
				//设置页面最多同时出现的盾牌个数
				MAX_SHIELD=1;
				//设置桃心掉落频率
				HEART_RANDOM_INTERVAL=5;
				HEART_RANDOM_INTERVAL_1=8;
				//设置页面最多同时出现的桃心数
				MAX_HEARTS=1;
				break;
			case 6:

				//设置敌飞机生命值
				enemyLife_1=30;
				enemyLife_2=50;
				enemyLife_3=100;
				//设置打掉一个敌飞机的得分
				enemyScore_1=50;
				enemyScore_2=100;
				enemyScore_3=200;

				MAX_HEROES=102;
				//设置UFO送的子弹数
				UFO_FIRE_UNIT=8;
				//设置英雄机无敌时间时长（100约3秒）
				SUPER_TIME_UNIT =150;
				//设置复活英雄机无敌时间（毫秒*10）
				NEW_HERO_SUPER_TIME_UNIT=200;

				//设置掉落方式，默认true为随机掉落，否为打掉敌飞机概率掉落
				randomMode=false;
				//设置ufo开关
				ufoSwitch=true;
				//设置盾牌开关
				shieldSwitch=true;
				//设置桃心开关
				heartSwitch=true;
				//设置敌飞机火力开关
				enemyFireSwitch=true;

				//设置图片帧/打印间隔（毫秒）
				paintLastTime = 0;
				paintInterval = 40;	
				//设置敌飞机出场间隔（毫秒）
				interval = 1000;
				//设置子弹射击间隔（毫秒）
				SHOOT_INTERVAL=300;
				//设置敌飞机子弹射击间隔（毫秒）
				ENEMY_SHOOT_INTERVAL_1=4200;
				ENEMY_SHOOT_INTERVAL_2=3800;
				ENEMY_SHOOT_INTERVAL_3=3500;
				//设置敌飞机飞行速度（像素/10毫秒）
				ENEMY_SPEED=0.7;
				//设置敌飞机子弹速度（像素/10毫秒）
				ENEMY_FIRE_SPEED=0.9;

				//设置打掉敌飞机1掉落的概率
				RANDOM_ENMEY_1=5;
				//设置打掉敌飞机2掉落的概率
				RANDOM_ENMEY_2=2;
				//设置打掉敌飞机3掉落的概率
				RANDOM_ENMEY_3=1;

				//设置UFO出现频率
				//随机掉落概率
				UFO_RANDOM_INTERVAL=12;
				//打掉敌机掉落的概率
				UFO_RANDOM_INTERVAL_1=3;
				//设置页面最多同时出现的UFO个数
				MAX_UFO=1;
				//设置盾牌掉落频率
				SHIELD_RANDOM_INTERVAL=4;
				SHIELD_RANDOM_INTERVAL_1=8;
				//设置页面最多同时出现的盾牌个数
				MAX_SHIELD=1;
				//设置桃心掉落频率
				HEART_RANDOM_INTERVAL=5;
				HEART_RANDOM_INTERVAL_1=10;
				//设置页面最多同时出现的桃心数
				MAX_HEARTS=1;
				break;
		}
	}
}