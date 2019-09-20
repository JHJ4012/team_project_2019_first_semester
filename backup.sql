-- MySQL dump 10.17  Distrib 10.3.14-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: team2
-- ------------------------------------------------------
-- Server version	10.3.14-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `answerqnas`
--

DROP TABLE IF EXISTS `answerqnas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `answerqnas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ques_id` char(10) NOT NULL,
  `answer` varchar(200) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answerqnas`
--

LOCK TABLES `answerqnas` WRITE;
/*!40000 ALTER TABLE `answerqnas` DISABLE KEYS */;
INSERT INTO `answerqnas` VALUES (1,'1','아직 정확히 정해진게 없어서 확실히 말씀드리기가 어렵네요ㅜㅜ죄송합니다..','2019-06-15 07:32:10','2019-06-15 07:32:10'),(2,'2','개인따라 많이 다르겠지만 평균은 100~150만원정도면 부족함 없이 쓸 수 있을 것 같습니다. 자신이 풍족하게 쓰고 싶다고 하면 더 가져오는 것은 자유입니다','2019-06-15 07:34:17','2019-06-15 07:34:17'),(3,'3','아침은 6시 30분 기상해야 하며 저녁 점호는 9시부터 인원 점검을 실시한 뒤 군가제창 및 복무신조를 하고 취침에 듭니다. 야간에 유동병력은 없어야 합니다.','2019-06-15 07:35:09','2019-06-15 07:35:09');
/*!40000 ALTER TABLE `answerqnas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `introduces`
--

DROP TABLE IF EXISTS `introduces`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `introduces` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(10) NOT NULL,
  `explanation` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `introduces`
--

LOCK TABLES `introduces` WRITE;
/*!40000 ALTER TABLE `introduces` DISABLE KEYS */;
INSERT INTO `introduces` VALUES (1,'서영훈','이름 : 서영훈\n나이 : 24세\n거주지 : 대구 달서구\n하고 싶은 말 : 일본반 화이팅!'),(2,'정현재','이름 : 정현재\n나이 : 23세\n거주지 : 대구 북구\n하고 싶은 말 : 일본 가즈아!'),(3,'전용석','이름 : 전용석\n나이 : 25세\n거주지 : 대구 노원\n하고 싶은 말 : WDJ 화이팅!'),(4,'정인식','이름 : 정인식\n나이 : 25세 \n거주지 : 대구 달서구\n하고 싶은 말 : 2조 화이팅 !'),(5,'조영준','이름 : 조영준\n나이 : 23세\n거주지 : 대구 달성군\n하고 싶은 말 : 영진 일본반 화이팅!');
/*!40000 ALTER TABLE `introduces` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(140) NOT NULL,
  `img` varchar(200) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'5시부터 9시까지 나를 사랑한 스님','/img/5시부터9시까지 나를 사랑한 스님-1560584635556.jpg','2019-06-15 07:43:55','2019-06-15 07:43:55','2019-06-15 07:48:30'),(2,'도망치는건 부끄럽지만 도움이된다','/img/도망치는건 부끄럽지만 도움이 된다-1560584651267.PNG','2019-06-15 07:44:11','2019-06-15 07:44:11','2019-06-15 07:48:37'),(3,'리치맨 리치우먼','/img/리치맨 푸어우먼-1560584667041.jpg','2019-06-15 07:44:27','2019-06-15 07:44:27','2019-06-15 07:48:34'),(4,'후쿠오카의 돔 사진입니다','/img/fukuoka dom-1560585054347.jpg','2019-06-15 07:50:54','2019-06-15 07:50:54',NULL),(5,'후쿠오카의 자전거 여행입니다.','/img/fukuoka jitensha-1560585068791.jpg','2019-06-15 07:51:08','2019-06-15 07:51:08',NULL),(6,'후쿠오카 타워입니다.','/img/fukuoka tower-1560585080179.jpg','2019-06-15 07:51:20','2019-06-15 07:51:20',NULL),(7,'후쿠오카 지도입니다.','/img/jido-1560585098851.png','2019-06-15 07:51:38','2019-06-15 07:51:38',NULL),(8,'후쿠오카의 지하철입니다.','/img/jihachul-1560585124663.jpg','2019-06-15 07:52:04','2019-06-15 07:52:04',NULL),(9,'나카스강입니다. 일본 후쿠오카에 오면 한 번 쯤 꼭 가봐야할 곳!! 거기서 타는 포장마차거리를 꼭 가보는 것이 좋겠지요?','/img/nagasugang-1560585164068.jpeg','2019-06-15 07:52:44','2019-06-15 07:52:44',NULL);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qnas`
--

DROP TABLE IF EXISTS `qnas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `qnas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `q_title` varchar(100) DEFAULT NULL,
  `q_body` varchar(1000) DEFAULT NULL,
  `q_nick` varchar(20) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qnas`
--

LOCK TABLES `qnas` WRITE;
/*!40000 ALTER TABLE `qnas` DISABLE KEYS */;
INSERT INTO `qnas` VALUES (1,'현지학기제에서의 스케줄','현지학기제를 가면 저희가 어떤 시간표로 움직이게 되는지 궁금합니다!!','정현재','2019-06-15 07:28:07','2019-06-15 07:28:07',NULL),(2,'현지학기제 경비','일본에 현지 학기제를 갔을 때 드는 교통비 라던가 개인적으로 사용하는 돈을 해서 평균적으로 얼마정도 드는지 궁금합니다!','SYH','2019-06-15 07:29:19','2019-06-15 07:29:19',NULL),(3,'점호시간과 야간 외출가능 여부','아침은 몇시에 일어야 하는지, 저녁은 몇시에 점호를 하는지, 야간에 외출 가능 여부가 궁금합니다!','ids','2019-06-15 07:29:52','2019-06-15 07:29:52',NULL),(4,'기업 견학에 대한 질문입니다.','이번에 WDJ 반과 CPJ 반이 같이 가는데 그러면 기업 견학하러 갈 때 같이 가는 겁니까?','JoYoungJoon','2019-06-15 07:30:29','2019-06-15 07:30:29',NULL),(5,'후쿠오카 자전거 여행 관련 질문입니다.','자전거 못타는데 어떻게 하죠? 필수 코스인가요?','IS','2019-06-15 07:31:10','2019-06-15 07:31:10',NULL);
/*!40000 ALTER TABLE `qnas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `u_id` varchar(20) DEFAULT NULL,
  `u_passwd` varchar(100) NOT NULL,
  `u_nickName` varchar(20) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `u_nickName` (`u_nickName`),
  UNIQUE KEY `u_id` (`u_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','$2b$12$K52Q2HHpsEQ.iattzQmbI.d6/jngvugMp3F1T2c8jvywticDzBGty','관리자','2019-06-15 07:16:55','2019-06-15 07:16:55',NULL),(2,'seoyh96','$2b$12$auMtBoimAohePlFCSkFnEu3Oqadk2Ad1eYfaP/DqksP3kzrZj4aLC','SYH','2019-06-15 07:17:46','2019-06-15 07:17:46',NULL),(3,'yong1211','$2b$12$7d12AETWCm6.wDrEyUFE7.G/3DTPUtxMTM8XUISIzM0f9uYSbMyUS','ids','2019-06-15 07:17:59','2019-06-15 07:17:59',NULL),(4,'jojoon97','$2b$12$4wr5t2.ZfNamzajPtHfXCO1XyXzmyBgxK8o7WchC9fgyeWcax83bK','JoYoungJoon','2019-06-15 07:18:29','2019-06-15 07:18:29',NULL),(5,'dlstlr0423','$2b$12$4O2H1lQniu/7hGefv5ti6.r3YH/RyA1aqe6YrQVdfwTHcFc2orWdS','IS','2019-06-15 07:19:07','2019-06-15 07:19:07',NULL),(6,'wjdguswo22','$2b$12$W8ohdWzmsRDUJUuLweeLLeOIrmij4pDOMUhyU5BLCvnvBhgFU2ACG','정현재','2019-06-15 07:19:20','2019-06-15 07:19:20',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-06-15 16:57:43
