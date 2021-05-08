
import "./banner";
import "./blog";
import "./setting";
import "./about";
import "./project";
import "./message";
import Mock from "mockjs";
Mock.setup({
   timeout:"500-1000" 
})

// 键名|10-20:[{模拟数据}]————10到20个模拟数据
// 键名|+1:数字————数字自增
// 键名:"字符串@键名"————字符串使用变量
// 键名|0-300:数字————数字区间[0-300]
// 键名|1:[数组]————数组选择
// "@guid"————不重复id
// "@uuid"————唯一id
// "@ctitle(1,50)"————中文字段区间
// "@cparagraph(1,10)"————中文段落区间
// "@cname"————中文名随机
// "@url"————随机地址
// @image（300x250,@color,#fff,@natural）
// @color
// @natural
// @date('T')————生成日期（格式令牌）
// Mock.Random.image("300x250", "#000", "#fff", "Random Image")