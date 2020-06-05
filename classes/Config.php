<?php

/**
 * Class: Config
 *
 * Bevat enkele paramaters met betrekking tot de instelling van de applicatie
 *
 * @author Kaj Van der Hallen
 */

class Config {
    private $_errorMode;            //De mode die bepaalt hoe errors opgevangen worden
    private $_mysqlHost;            //De host van de MySQL Database
    private $_mysqlUser;            //De gebruikersnaam om in te loggen op de MySQL Database
    private $_mysqlPass;            //Het passwoord om in te loggen de op de MySQL Database
    private $_mysqlDbName;          //De naam van de MySQL Database
    private $_mysqlPrefix;

    private $_mysqlHostDev;            //De host van de MySQL Database
    private $_mysqlUserDev;            //De gebruikersnaam om in te loggen op de MySQL Database
    private $_mysqlPassDev;            //Het passwoord om in te loggen de op de MySQL Database
    private $_mysqlDbNameDev;          //De naam van de MySQL Database
    private $_mysqlPrefixDev;


    private $_mysqlAnopeHost;            //De host van de MySQL Database
    private $_mysqlAnopeUser;            //De gebruikersnaam om in te loggen op de MySQL Database
    private $_mysqlAnopePass;            //Het passwoord om in te loggen de op de MySQL Database
    private $_mysqlAnopeDbName;          //De naam van de MySQL Database



    /**
     * Default constructor
     */
    public function __construct() {
        /**
         * Errormodes:
         *      'dev': Development: Alle foutmeldingen worden getoond
         *      'prd': Productie: Er worden geen foutmeldingen getoond
         */
        $this->_errorMode = "prd";
        $this->_rootDirectory = "";
        $this->_fullUrl = "https://chameleon.chattersworld.nl"; //zonder / achter de link
		$this->_logo = "https://horus.chattersworld.nl/dist/img/c4all-horus.png"; //zonder / achter de link
        /**
         * MySQL gegevens
         */
        $this->_mysqlHost = "chameleon_db_host";
        $this->_mysqlUser = "chameleon_db_user";
        $this->_mysqlPass = "chameleon_db_pass";
        $this->_mysqlDbName = "chameleon";
        $this->_mysqlPrefix = "chameleon_";

        $this->_mysqlHostDev = "chameleon_db_dev_host";
        $this->_mysqlUserDev = "chameleon_db_dev_user";
        $this->_mysqlPassDev = "chameleon_db_dev_pass";
        $this->_mysqlDbNameDev = "chameleon";
        $this->_mysqlPrefixDev = "chameleon_";

        $this->_mysqlAnopeHost = "anope_db_host";
        $this->_mysqlAnopeUser = "anope_db_user";
        $this->_mysqlAnopePass = "anope_db_pass";
        $this->_mysqlAnopeDbName = "Anope_DB";
    }

    /**
     * Getfuncties
     */
    public function getErrorMode() {
        return $this->_errormode;
    }
    public function setErrorMode($errormode) {
        if ($errormode == "dev") {
            $this->_errormode = "dev";
        }
        else {
            $this->_errormode = "prd";
        }
    }
    public function getRootDirectory() {
        return $this->_rootDirectory;
    }
    public function setRootDirectory($directory) {
        $this->_rootDirectory = $directory;
    }
    public function getFullUrl() {
        return $this->_fullUrl;
    }
	public function getLogo() {
        return $this->_logo;
    }
    public function setFullUrl($url) {
        $this->_fullUrl = $url;
    }
	public function setLogo($logo) {
        $this->_logo = $logo;
    }
    public function getMysqlHost() {
        return $this->_mysqlHost;
    }
    public function getMysqlUser() {
        return $this->_mysqlUser;
    }
    public function getMysqlPass() {
        return $this->_mysqlPass;
    }
    public function getMysqlDbName() {
        return $this->_mysqlDbName;
    }
    public function getMysqlAnopeHost() {
        return $this->_mysqlAnopeHost;
    }
    public function getMysqlAnopeUser() {
        return $this->_mysqlAnopeUser;
    }
    public function getMysqlAnopePass() {
        return $this->_mysqlAnopePass;
    }
    public function getMysqlAnopeDbName() {
        return $this->_mysqlAnopeDbName;
    }
    public function getMysqlCredentials() {
        $mysqlCredentials = array(
            "host" => $this->_mysqlHost,
            "user" => $this->_mysqlUser,
            "pass" => $this->_mysqlPass,
            "db" => $this->_mysqlDbName,
            "prefix" => $this->_mysqlPrefix
        );
        if ($this->_errormode == "dev") {
            $mysqlCredentials = array(
                "host" => $this->_mysqlHostDev,
                "user" => $this->_mysqlUserDev,
                "pass" => $this->_mysqlPassDev,
                "db" => $this->_mysqlDbNameDev,
                "prefix" => $this->_mysqlPrefixDev
            );
        }
        return $mysqlCredentials;
    }
    public function getMysqlAnopeCredentials() {
        $mysqlCredentials = array(
            "host" => $this->_mysqlAnopeHost,
            "user" => $this->_mysqlAnopeUser,
            "pass" => $this->_mysqlAnopePass,
            "db" => $this->_mysqlAnopeDbName,
            "prefix" => $this->_mysqlPrefixDev
            );
        return $mysqlCredentials;
    }
}

?>