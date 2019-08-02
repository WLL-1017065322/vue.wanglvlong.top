/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs';
import data from './data.json';
// 返回接口
Mock.mock('/goods', { code: 0, data: data.goods });

Mock.mock('/ratings', { code: 0, data: data.ratings });

Mock.mock('/info', { code: 0, data: data.info });

// 需要 main.js入口函数引入
