-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               8.0.21 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for aplikacija
CREATE DATABASE IF NOT EXISTS `aplikacija` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `aplikacija`;

-- Dumping structure for table aplikacija.administrator
CREATE TABLE IF NOT EXISTS `administrator` (
  `administrator_id` int unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL DEFAULT '0',
  `password_hash` varchar(128) NOT NULL DEFAULT '0',
  PRIMARY KEY (`administrator_id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table aplikacija.administrator: ~2 rows (approximately)
DELETE FROM `administrator`;
/*!40000 ALTER TABLE `administrator` DISABLE KEYS */;
INSERT INTO `administrator` (`administrator_id`, `username`, `password_hash`) VALUES
	(1, 'nikolaMilanov', '123456789'),
	(2, 'probniAdmin', '987654321');
/*!40000 ALTER TABLE `administrator` ENABLE KEYS */;

-- Dumping structure for table aplikacija.izvestaj
CREATE TABLE IF NOT EXISTS `izvestaj` (
  `izvestaj_id` int unsigned NOT NULL AUTO_INCREMENT,
  `zaposleni_id` int unsigned NOT NULL DEFAULT '0',
  `pocetak_opsega_izvestaja` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `kraj_opsega_datuma` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`izvestaj_id`),
  UNIQUE KEY `zaposleni_id_pocetak_opsega_izvestaja_kraj_opsega_datuma` (`zaposleni_id`,`pocetak_opsega_izvestaja`,`kraj_opsega_datuma`),
  CONSTRAINT `fk_izvestaj_zaposleni_id` FOREIGN KEY (`zaposleni_id`) REFERENCES `zaposleni` (`zaposleni_id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table aplikacija.izvestaj: ~0 rows (approximately)
DELETE FROM `izvestaj`;
/*!40000 ALTER TABLE `izvestaj` DISABLE KEYS */;
/*!40000 ALTER TABLE `izvestaj` ENABLE KEYS */;

-- Dumping structure for table aplikacija.odjava
CREATE TABLE IF NOT EXISTS `odjava` (
  `odjava_id` int unsigned NOT NULL AUTO_INCREMENT,
  `datum_vreme` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`odjava_id`),
  UNIQUE KEY `datum_vreme` (`datum_vreme`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table aplikacija.odjava: ~0 rows (approximately)
DELETE FROM `odjava`;
/*!40000 ALTER TABLE `odjava` DISABLE KEYS */;
/*!40000 ALTER TABLE `odjava` ENABLE KEYS */;

-- Dumping structure for table aplikacija.odjava_zaposleni
CREATE TABLE IF NOT EXISTS `odjava_zaposleni` (
  `odjava_zaposleni_id` int unsigned NOT NULL AUTO_INCREMENT,
  `zaposleni_id` int unsigned NOT NULL DEFAULT '0',
  `odjava_id` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`odjava_zaposleni_id`),
  UNIQUE KEY `zaposleni_id_odjava_id` (`zaposleni_id`,`odjava_id`),
  KEY `fk_odjava_zaposleni_odjava_id` (`odjava_id`),
  CONSTRAINT `fk_odjava_zaposleni_odjava_id` FOREIGN KEY (`odjava_id`) REFERENCES `odjava` (`odjava_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_odjava_zaposleni_zaposleni_id` FOREIGN KEY (`zaposleni_id`) REFERENCES `zaposleni` (`zaposleni_id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table aplikacija.odjava_zaposleni: ~0 rows (approximately)
DELETE FROM `odjava_zaposleni`;
/*!40000 ALTER TABLE `odjava_zaposleni` DISABLE KEYS */;
/*!40000 ALTER TABLE `odjava_zaposleni` ENABLE KEYS */;

-- Dumping structure for table aplikacija.prijava
CREATE TABLE IF NOT EXISTS `prijava` (
  `prijava_id` int unsigned NOT NULL AUTO_INCREMENT,
  `datum_vreme` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`prijava_id`),
  UNIQUE KEY `datum_vreme` (`datum_vreme`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table aplikacija.prijava: ~1 rows (approximately)
DELETE FROM `prijava`;
/*!40000 ALTER TABLE `prijava` DISABLE KEYS */;
INSERT INTO `prijava` (`prijava_id`, `datum_vreme`) VALUES
	(1, '2020-09-12 12:00:53');
/*!40000 ALTER TABLE `prijava` ENABLE KEYS */;

-- Dumping structure for table aplikacija.prijava_zaposleni
CREATE TABLE IF NOT EXISTS `prijava_zaposleni` (
  `prijava_zaposleni_id` int unsigned NOT NULL AUTO_INCREMENT,
  `zaposleni_id` int unsigned NOT NULL DEFAULT '0',
  `prijava_id` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`prijava_zaposleni_id`),
  UNIQUE KEY `zaposleni_id_prijava_id` (`zaposleni_id`,`prijava_id`),
  KEY `fk_prijava_zaposleni_prijava_id` (`prijava_id`),
  CONSTRAINT `fk_prijava_zaposleni_prijava_id` FOREIGN KEY (`prijava_id`) REFERENCES `prijava` (`prijava_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_prijava_zaposleni_zaposleni_id` FOREIGN KEY (`zaposleni_id`) REFERENCES `zaposleni` (`zaposleni_id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table aplikacija.prijava_zaposleni: ~1 rows (approximately)
DELETE FROM `prijava_zaposleni`;
/*!40000 ALTER TABLE `prijava_zaposleni` DISABLE KEYS */;
INSERT INTO `prijava_zaposleni` (`prijava_zaposleni_id`, `zaposleni_id`, `prijava_id`) VALUES
	(1, 1, 1);
/*!40000 ALTER TABLE `prijava_zaposleni` ENABLE KEYS */;

-- Dumping structure for table aplikacija.zaposleni
CREATE TABLE IF NOT EXISTS `zaposleni` (
  `zaposleni_id` int unsigned NOT NULL AUTO_INCREMENT,
  `id_broj_zaposlenog` varchar(32) NOT NULL DEFAULT '0',
  `ime_prezime` varchar(64) NOT NULL DEFAULT '0',
  `pozicija` varchar(32) NOT NULL DEFAULT '0',
  `jeste_zaposlen` tinyint unsigned NOT NULL DEFAULT '1',
  PRIMARY KEY (`zaposleni_id`),
  UNIQUE KEY `id_broj_zaposlenog` (`id_broj_zaposlenog`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table aplikacija.zaposleni: ~4 rows (approximately)
DELETE FROM `zaposleni`;
/*!40000 ALTER TABLE `zaposleni` DISABLE KEYS */;
INSERT INTO `zaposleni` (`zaposleni_id`, `id_broj_zaposlenog`, `ime_prezime`, `pozicija`, `jeste_zaposlen`) VALUES
	(1, '0001', 'Nikola Milanov', 'Direktor', 1),
	(2, '0002', 'Petar Petrovic', 'Prodavac', 1),
	(3, '0003', 'Marija Marijic', 'Sekretarica', 1),
	(4, '0004', 'Nikola Nikolic', 'Prodavac', 1);
/*!40000 ALTER TABLE `zaposleni` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
