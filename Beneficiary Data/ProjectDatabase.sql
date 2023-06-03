-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: fwms
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (134);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ngo`
--

DROP TABLE IF EXISTS `ngo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ngo` (
  `ngo_id` int NOT NULL,
  `ngo_email` varchar(255) DEFAULT NULL,
  `ngo_name` varchar(255) DEFAULT NULL,
  `ngo_password` varchar(255) DEFAULT NULL,
  `ngo_phone` varchar(255) DEFAULT NULL,
  `ngo_time` varchar(255) DEFAULT NULL,
  `ngo_username` varchar(255) DEFAULT NULL,
  `role_id` int NOT NULL,
  `ngo_address_ngo_aid` int DEFAULT NULL,
  PRIMARY KEY (`ngo_id`),
  KEY `FK8blt7alav4t4i2gvv30s8sqsb` (`ngo_address_ngo_aid`),
  CONSTRAINT `FK8blt7alav4t4i2gvv30s8sqsb` FOREIGN KEY (`ngo_address_ngo_aid`) REFERENCES `ngo_address` (`ngo_aid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ngo`
--

LOCK TABLES `ngo` WRITE;
/*!40000 ALTER TABLE `ngo` DISABLE KEYS */;
INSERT INTO `ngo` VALUES (2,'softnext@gmail.com','Soft The Next','pass1','7947287199','9:30 am - 8:30 pm','user1',2,3),(4,'manuskiseva@gmail.com','Manuski Old Age Home and Seva Sushrusha Kendra','pass2','7947198182','Open 24 Hrs','user2',2,5),(8,'vastsalya@gmail.com','Vatsalya Vridhashram & Matimand Mulanchi Niwasi Shala ','pass3','7947062290','Open 24 Hrs','user3',2,9),(10,'babavrudhashram@gmail.com','Baba Vrudhashram and Nursing Care Centre ','pass4','7947312285','Open 24 Hrs','user4',2,11),(12,'caringhands@gmail.com','Caring Hands Trust','pass5','7947204850','9:00 am - 9:00 pm','user5',2,13),(14,'kinara@gmail.com','Kinara Vruddha & Matimanda Seva Trust','pass6','7947432574','Open 24 Hrs','user6',2,15),(16,'santbabamonisaheb@gmail.com','Sant Baba Moni Saheb Vriddha Anand Ashram','pass7','0638449492635','9:00 am - 9:00 pm','user7',2,17),(18,'mahilashaktipratishthan@gmail.com','Mahila Shakti Pratishthan','pass8','06384492842','9:30 am - 6:30 pm','user8',2,19),(20,'vaishnavifoundation@gmail.com','Vaishnavi Foundation','pass9','06384492848','Open 24 Hrs','user9',2,21),(22,'saahara@gmail.com','Saahara Old Age Home','pass10','06384489269','8:00 am - 9:00 pm','user10',2,23),(24,'astha@gmail.com','Astha Old Age Home','pass11','06384492890','9:00 am - 9:00 pm','user11',2,25),(26,' team@resqct.org','RESQ  Charitable Trust','pass12','98909 99111 ','11 AM-5 PM','user12',4,27),(28,' report@karmafoundation.ngo','Karma Foundation','pass13','-8390944337 ','10:00 am - 6:00 pm','user13',4,29),(30,' mayurpasare@gmail.com','Make New Life','pass14','9922819742, 9604451500 ','Open 24 Hrs','user14',4,31),(32,' info@animalrescuetrustpune.com','Animal Rescue Trust','pass15','+917262955444  ','10:00 am - 5:45 pm','user15',4,33),(34,' animal@disease.com','Animal Disease Investigation Section','pass16','020 2569 1474  ','10:00 am - 5:45 pm','user16',4,35),(36,'pawsforacausencr@gmail.com','Paws For A Cause','pass17','9178654852 ','Open 24 Hrs','user17',4,37),(38,'info@sawct.org','Sinhgad Animal Welfare Charitable Trust','pass18','+91-9373148876 ','Open 24 Hrs','user18',4,39),(40,'animalwelfare@trustpune.org','Animal Welfare Trust Pune','pass19','+91-9373148876 ','Open 24 Hrs','user19',4,41),(42,'report@petfoundation.ngo','Pet Home','pass20','+91-9373146876 ','7:30 am - 6:00 pm','user20',4,43),(44,'report@Pranimal.ngo','Pranimal Foundation','pass21','96970 05454 ','10 am - 6:00 pm','user21',4,45),(46,'wildanimal@gmail.com','Wild Animal Rescue & Rehabilitation Center','pass22','020 2437 0747 ','10 am - 6:00 pm','user22',4,47),(85,'mauli@gmail.com','Mauli Balakashram','pass23','7947200451 ','9:00 am - 6:00 pm','user23',1,86),(87,'pratham@gmail.com','Pratham Shikshan Mandal Pune','pass24','7947198061 ','10:00 am - 5:00 pm','user24',1,88),(89,'soft@gmail.com','Soft The Next','pass25','7947287199 ','9:30 am - 8:30 pm','user25',1,90),(91,'matruchhaya@gmail.com','Matruchhaya Balakashram','pass26','06384489055 ','Open 24 Hrs','user26',1,92),(93,'maulikrupa@gmail.com','Mauli Krupa Gayandan Aanayadan Sanstha','pass27','7947287199 ','Open 24 Hrs','user27',1,94),(95,'dyaneshwar@gmail.com','Shree Sant Dyaneshwar Adivasi Ashram School','pass28','06384491840 ','Open 24 Hrs','user28',1,96),(97,'adhar@gmail.com','Shravasti Adhar Foundation','pass29','08045791077 ','Open 24 Hrs','user29',1,98),(99,'madhuban@gmail.com','Madhuban Matimand Va Bahuviklang Samajik Sanstha Pune','pass30','07947455489 ','Open 24 Hrs','user30',1,100),(101,'snehalay@gmail.com','Snehalaya Education Society','pass31','06384492647 ','9:00 am - 5:00 pm','user31',1,102),(103,'hopefor@gmail.com','Hope For The Children Foundation','pass32','06384493263 ','10:00 am - 5:00 pm','user32',1,104),(105,'sparsh@gmail.com','Sparsh','pass33','06384493263 ','10:00 am - 7:30 pm','user33',1,106),(110,'sparsh@gmail.com','jkdfahsjfhkjashk','pass33','06384493263 ','10:00 am - 7:30 pm','user33',1,111),(112,'http://shikshangram.com/','Shikshangram Shelter for Homeless Children','pass34','91 93732 35894','9am to 9pm','user34',3,113),(114,' http://asha-kiran.org.in/','Asha-Kiran Shelters Foundation','pass35','91 20 2605 4100','10am to 9pm','user35',3,115),(116,' https://maherashram.org/ ','Maher Ashram','pass36','91 90110 86134','8am to 6pm','user36',3,117),(118,'  http://www.tathapi.org/','Tathapi Trust - Women And Health Resource Development','pass37','91823 702 4849','8am to 8pm','user37',3,119),(120,'  http://www.snehalaya.org','Snehadhar Sankul','pass38',' +91 90110 33011','11am to 9pm','user38',3,121),(122,' http://www.cmmpune.org/ ','Chaitanya Mahila Mandal','pass39',' +91 94220 04152','7am to 8pm','user39',3,123),(124,'  http://www.savalimrcp.org/','SAVALI – A Shelter for Care','pass40','+91 20 2528 2379','10am to 9pm','user40',3,125),(126,' https://www.facebook.com/pg/Dhanyawad-Bungalow-... ','Dhanyawad Bungalow Girl\'s Hostel','pass41',' +91 99236 25050','10am to 6pm','user41',3,127),(128,'http://shivgangaoldagehome.com/','Shivganga Vrudhaashram','pass42','+91 20 2686 7455','8am to 9pm','user42',3,129),(130,'http://rainbowhome.in/','Rainbow Foundation India','pass43',' +91 99495 40009','9am to 9pm','user43',3,131),(132,'http://deepgriha.org/','Deep Griha Society','pass44',' +91 20 4018 7373','11am to 5pm','user44',3,133);
/*!40000 ALTER TABLE `ngo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ngo_address`
--

DROP TABLE IF EXISTS `ngo_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ngo_address` (
  `ngo_aid` int NOT NULL,
  `city` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `pin` int NOT NULL,
  `state` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ngo_aid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ngo_address`
--

LOCK TABLES `ngo_address` WRITE;
/*!40000 ALTER TABLE `ngo_address` DISABLE KEYS */;
INSERT INTO `ngo_address` VALUES (3,'pune,camp','Pune',411001,'Maharashtra','Sr No 2403, EAST STREAT Above Poona Motors'),(5,'IAF Station','Pune',411032,'Maharashtra','Survey No 253 Plot No 36D/37A, Lohgoan Road, Lane No 18 '),(9,'Dehu,Pune','Pune',412109,'Maharashtra','Gut No 92, Near Sairaj Garden,Yelwadi Road ,Tal Khed '),(11,'Pimpalwandi,Pune','Pune',412412,'Maharashtra','At Post Vaishyakhede,Near Z P School '),(13,'Ambi,Pune','Pune',410507,'Maharashtra','419 Golewadi MAWAL '),(15,'Kamshet, Lonavala ,Pune','Pune',410405,'Maharashtra','Ahirwade Phata, Gat No 224, Old Mumbai Pune Highway '),(17,'Akurdi ,Pune','Pune',411035,'Maharashtra','Survey No 133, Gurudwara Road '),(19,'Katraj ,Pune','Pune',411046,'Maharashtra','L-503, Bharati Vihard,Near Bharati Vidyapeeth'),(21,'Kondhwa Khurd ,Pune','Pune',411048,'Maharashtra','Shivneri, Kondhwa Khurd, Bhagwa Chowk, Lane No 12'),(23,'Dhanori ,Pune','Pune',411015,'Maharashtra','Swami Samarth Nagar Lane No 4  Dhanori Jakat Naka'),(25,'Vishrantwadi,Pune','Pune',411002,'Maharashtra','Near Bajar Samiti Yashwant Nagar  Wai, Tirupti Resedency Road No. 1G Vishrantwadi'),(27,'Bavdhan','Pune',411021,'Maharashtra','Paud Mulshi Road'),(29,'Aundh','Pune',411007,'Maharashtra','Bungalow No 1, Jacinta Villa, Ward No 8,Opposite Sandalwood Society, Near Ambedkar Chowk and Medipoint Hospital'),(31,'Hinjewadi','Pune',411057,'Maharashtra','Kasarsai Road Opposite Bhagwant Loan'),(33,'Manjari Khurd','Pune',412307,'Maharashtra','ART Shelter, Manjri - Theur Road,Behind Raj Washing Centre, Near Sonarwada'),(35,'Aundh','Pune',411007,'Maharashtra','Aundh Road'),(37,'Budhwar Peth','Pune',411002,'Maharashtra','962, Flat 17, 2nd Floor Manorama Apartment'),(39,'Nanded','Pune',412307,'Maharashtra','Vadgaon Khurd, Nanded Fata, Pandurang Industrial Area'),(41,'TALEGAON DABHADE ','Pune',410507,'Maharashtra','Gat No. 18, Milkat No. 1020, Shevkarmala, Indori'),(43,'Wagholi ','Pune',412207,'Maharashtra','Nagar Road'),(45,'Pimpri-Chinchwad ','Pune',411061,'Maharashtra','B56, Purandar Apartment, Kashid Nagar, Pimple Gurav'),(47,'Katraj','Pune',411046,'Maharashtra','Next to Rajiv Gandhi Zoological Park and Research Center,Opp Bharati Vidyapeth'),(86,'Wagholi','Pune',412207,'Maharashtra','nagar Road'),(88,'Hadapsar','Pune',412278,'Maharashtra','Hadapsar'),(90,'Camp','Pune',411001,'Maharashtra','Sr No 2403, EAST STREAT Above Poona Motors'),(92,'Dighi','Pune',411015,'Maharashtra','Plot No 317 Matruchhaya, Alandi Road'),(94,'Alandi Devachi','Pune',412105,'Maharashtra','Mr Ganeshenand Eaknath Punekar(President)|^|undefined, Vadgaon Road'),(96,'Alandi Devachi','Pune',412105,'Maharashtra','Kelgaon, Chakan Road'),(98,'Shivane-khadakwasla','Pune',411023,'Maharashtra','Rahul Nagar, Nda Road'),(100,'Chaitanya Nagar-dhankawadi','Pune',411043,'Maharashtra','Girinagar Society Plot No 31, Bharti Vidyapeeth Road'),(102,'Chaitanya Nagar-dhankawadi','Pune',412207,'Maharashtra','Anand Nagar, Awhalwadi Road'),(104,'Vadgaon Sheri','Pune',411014,'Maharashtra','Survey No57/1/1 Pakia Niwas'),(106,'Hadapsar','Pune',411028,'Maharashtra','Jmd Enclave Society, No. 2, Mohhamadwadi'),(111,'Hadapsar','Pune',411028,'Maharashtra','Jmd Enclave Society, No. 2, Mohhamadwadi'),(113,'Pune','Pune',410405,'Maharashtra','143 Shikshangram Devale Ashram Road, Near Malavali Railway Station '),(115,'Koregaon Park','Pune',411001,'Maharashtra','16/A Kalaprabha Bungalow Ragvilas Society, Lane C1, North Main Rd '),(117,'pune','Pune',411014,'Maharashtra',' Sr. No. 1, Plot No. 102, Vadgaon Sheri, Near Sant Hospital, Behind Lonkar Marathi School'),(119,'Pune','Pune',411037,'Maharashtra','Flat No. 1, 73, Sangam Society, Bibwewadi, Off Pune Satara Road '),(121,'Pune','Pune',411014,'Maharashtra',' Snehalaya, F-239, MIDC, Near Shree Tiles Chowk '),(123,'Bhosari','Pune',411039,'Maharashtra',' 10, Mahalaxmi Society, Bhosari, Bhosari, APTE Colony'),(125,'Kothrud','Pune',411038,'Maharashtra',' Plot No 13, S no 78, Left Bhusari colony, Paud Road'),(127,'Dhankawadi','Pune',424811,'Maharashtra','S. No. 36/19/4 Vanrai Colony'),(129,'Wanowrie','Pune',411040,'Maharashtra','Balaji Shelters, S.N. 51/2, St Shiromani N Maharaja Path, SRPF '),(131,'Shivajinagar','Pune',411016,'Maharashtra',' Flat no. 9, Navshantiban 1134/2, Opp. Sandeep Lodge, Squadron Leader Sureshchandra Bhagwat Rd '),(133,'Sangamvadi','Pune',411001,'Maharashtra',' No. 13, Tadiwala Rd');
/*!40000 ALTER TABLE `ngo_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ssi`
--

DROP TABLE IF EXISTS `ssi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ssi` (
  `ssi_id` int NOT NULL,
  `ssi_email` varchar(255) DEFAULT NULL,
  `ssi_name` varchar(255) DEFAULT NULL,
  `ssi_password` varchar(255) DEFAULT NULL,
  `ssi_phone` varchar(255) DEFAULT NULL,
  `ssi_time` varchar(255) DEFAULT NULL,
  `ssi_username` varchar(255) DEFAULT NULL,
  `ssi_address_ssi_aid` int DEFAULT NULL,
  PRIMARY KEY (`ssi_id`),
  KEY `FKe56q9focas5wp2farvdjk0ghb` (`ssi_address_ssi_aid`),
  CONSTRAINT `FKe56q9focas5wp2farvdjk0ghb` FOREIGN KEY (`ssi_address_ssi_aid`) REFERENCES `ssi_address` (`ssi_aid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ssi`
--

LOCK TABLES `ssi` WRITE;
/*!40000 ALTER TABLE `ssi` DISABLE KEYS */;
INSERT INTO `ssi` VALUES (69,'info@xeonwm.com','Xeon Waste Manag-ers Pvt Ltd.','pass1','099229 87856 ','9am to 6pm','user1',70),(71,'promin@xeonwm.com','Promin-ent vision india pvt ','pass2','08046045574 ','9 am to 9 pm','user2',72),(77,'Info@nobleexchangesolutions.com','NobleExchange Solutions ','pass3','8379837991 ','9am to 9pm','user3',78),(79,'Info@ajinkyasolutions.com','AjinkyaBiofert& Disha WasteManagement  ','pass4','7859761591 ','9am to 9pm','user4',80),(81,'Info@ajinkyasolutions.com','Global Engine-ering And Waste Manag-ement','pass5','9595625369 ','10AM to 6PM','user5',82),(83,'wintechsquare@gmail.com','Wintech Square Pvt.Ltd','pass6','7898050021  ','9AM to 6PM','user6',84);
/*!40000 ALTER TABLE `ssi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ssi_address`
--

DROP TABLE IF EXISTS `ssi_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ssi_address` (
  `ssi_aid` int NOT NULL,
  `city` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `pin` int NOT NULL,
  `state` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ssi_aid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ssi_address`
--

LOCK TABLES `ssi_address` WRITE;
/*!40000 ALTER TABLE `ssi_address` DISABLE KEYS */;
INSERT INTO `ssi_address` VALUES (70,'Talegaon Dabhade','Pune',410506,'Maharashtra','1st floor, Kaka Saheeb Khalde Sankul Vaidya Colony Maruti Mandir Chowk '),(72,'Sudatta Sankul','Pune',411002,'Maharashtra','Behind Damodar Nagar, Flat No. A-202, S. No. 8 '),(78,'Talegao','Pune',412106,'Maharashtra','QMG7+XJ2, Mangarul'),(80,'Navi Peth','Pune',411030,'Maharashtra','Flat No. 7, Mayuresh Apts, Phatak Bag'),(82,'Vadgaon Budruk','Pune',411051,'Maharashtra','S.N 25, Yashganga Industries Area, Prayeja City Opp., Versatile School near Sinhgad Cricket Academy'),(84,'Pimple Nilakh ','Pune',411027,'Maharashtra','Shantiniketan 11 ,S.No. – 29 Vishal Nagar ');
/*!40000 ALTER TABLE `ssi_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `uid` int NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `fname` varchar(255) DEFAULT NULL,
  `lname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `role` int NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,NULL,NULL,NULL,NULL,NULL,0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_address`
--

DROP TABLE IF EXISTS `user_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_address` (
  `aid` int NOT NULL,
  `city` varchar(255) DEFAULT NULL,
  `dist` varchar(255) DEFAULT NULL,
  `pin` int NOT NULL,
  `state` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `user_uid` int NOT NULL,
  `address_aid` int NOT NULL,
  PRIMARY KEY (`aid`),
  UNIQUE KEY `UK_r4k8n8c4ok265ttl55dvps2ax` (`address_aid`),
  KEY `FKaydqkv40j8ou5qer1w3anynjp` (`user_uid`),
  CONSTRAINT `FKaydqkv40j8ou5qer1w3anynjp` FOREIGN KEY (`user_uid`) REFERENCES `user` (`uid`),
  CONSTRAINT `FKi3rvsknmrr5l4flpe6qdssc56` FOREIGN KEY (`address_aid`) REFERENCES `user_address` (`aid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_address`
--

LOCK TABLES `user_address` WRITE;
/*!40000 ALTER TABLE `user_address` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_address` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-06 21:31:21
