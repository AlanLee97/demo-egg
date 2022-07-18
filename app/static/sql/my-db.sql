/*
 Navicat Premium Data Transfer

 Source Server         : local-mysql
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : my-db

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 15/07/2022 17:51:59
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for t_users
-- ----------------------------
DROP TABLE IF EXISTS `t_users`;
CREATE TABLE `t_users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime(6) DEFAULT NULL,
  `updatedAt` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_users
-- ----------------------------
INSERT INTO `t_users` VALUES (1, 'alan', '123456', '2022-07-15 15:59:53.000000', '2022-07-15 15:59:56.000000');
INSERT INTO `t_users` VALUES (2, 'tom', '111111', '2022-07-15 16:00:23.000000', '2022-07-15 16:00:25.000000');
INSERT INTO `t_users` VALUES (3, 'bob', '222222', '2022-07-15 09:34:35.000000', '2022-07-15 09:36:54.000000');
INSERT INTO `t_users` VALUES (5, 'haha', '123456', '2022-07-15 09:45:30.000000', '2022-07-15 09:45:30.000000');
INSERT INTO `t_users` VALUES (6, 'haha2', '123456', '2022-07-15 09:50:14.000000', '2022-07-15 09:50:14.000000');

SET FOREIGN_KEY_CHECKS = 1;
