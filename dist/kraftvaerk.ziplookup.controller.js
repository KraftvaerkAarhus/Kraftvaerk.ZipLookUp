angular.module("umbraco").controller("Kraftvaerk.ZipLookUpController",
    function ($scope, assetsService, notificationsService) {

        assetsService.loadCss("/app_plugins/kraftvaerk.ziplookup/assets/css/style.css")
            .then(function () {

	//Adding the config options to the scope so the view knows wether to display input fields or not
    $scope.showCountry = $scope.model.config.showcountry;
    $scope.showCountryAbbr = $scope.model.config.showcountryabbr;
    $scope.showPlaceName = $scope.model.config.showplacename;
    $scope.showStateName = $scope.model.config.showstatename;
    $scope.showStateNameAbbr = $scope.model.config.showstatenameabbr;
    $scope.showCoordinates = $scope.model.config.showcoordinates;

    //Creats a JSON object for the country data
    var countryData = {
    		"andorra": {"countryCode":"ad", "zipLength":"5", "showState":"false","zipFormat":"AD100"},
    		"argentina": {"countryCode":"ar", "zipLength":"4", "showState":"true","zipFormat":"1601"},
    		"american samoa": {"countryCode":"as", "zipLength":"5", "showState":"true","zipFormat":"96799"},
    		"austria": {"countryCode":"at", "zipLength":"4", "showState":"false","zipFormat":"1010"},
			"australia": {"countryCode":"au", "zipLength":"4", "showState":"true","zipFormat":"0200"},
    		"bangladesh": {"countryCode":"bd", "zipLength":"4", "showState":"true","zipFormat":"1000"},
    		"belgium": {"countryCode":"be", "zipLength":"4", "showState":"true","zipFormat":"1000"},
    		"bulgaria": {"countryCode":"bg", "zipLength":"4", "showState":"true","zipFormat":"1000"},
    		"brazil": {"countryCode":"br", "zipLength":"9", "showState":"true","zipFormat":"01000-000"},
    		"canada": {"countryCode":"ca", "zipLength":"3", "showState":"true","zipFormat":"A0A"},
    		"switzerland": {"countryCode":"ch", "zipLength":"4", "showState":"true","zipFormat":"1000"},
    		"czech republic": {"countryCode":"cz", "zipLength":"6", "showState":"true","zipFormat":"100 00"},
    		"germany": {"countryCode":"de", "zipLength":"5", "showState":"true","zipFormat":"01067"},
    		"denmark": {"countryCode":"dk", "zipLength":"4", "showState":"false","zipFormat":"0800"},
    		"dominican republic": {"countryCode":"do", "zipLength":"5", "showState":"false","zipFormat":"10101"},
    		"spain": {"countryCode":"es", "zipLength":"5", "showState":"true","zipFormat":"01001"},
    		"finland": {"countryCode":"fi", "zipLength":"5", "showState":"false","zipFormat":"00002"},
    		"faroe islands": {"countryCode":"fo", "zipLength":"3", "showState":"false","zipFormat":"100"},
    		"france": {"countryCode":"fr", "zipLength":"5", "showState":"true","zipFormat":"01000"},
    		"great britain": {"countryCode":"gb", "zipLength":"3", "showState":"true","zipFormat":"AB1"},
    		"french guyana": {"countryCode":"gf", "zipLength":"5", "showState":"true","zipFormat":"97300"},
    		"guernsey": {"countryCode":"gg", "zipLength":"3", "showState":"false","zipFormat":"GY1"},
    		"greenland": {"countryCode":"gl", "zipLength":"4", "showState":"false","zipFormat":"2412"},
    		"guadelope": {"countryCode":"gp", "zipLength":"5", "showState":"true","zipFormat":"97100"},
    		"guatemala": {"countryCode":"gt", "zipLength":"5", "showState":"true","zipFormat":"01001"},
    		"guam": {"countryCode":"gu", "zipLength":"5", "showState":"true","zipFormat":"96910"},
    		"guyana": {"countryCode":"gy", "zipLength":"5", "showState":"false","zipFormat":"97312"},
    		"croatia": {"countryCode":"hr", "zipLength":"5", "showState":"true","zipFormat":"10000"},
    		"hungary": {"countryCode":"hu", "zipLength":"4", "showState":"true","zipFormat":"1011"},
    		"isle of man": {"countryCode":"im", "zipLength":"3", "showState":"false","zipFormat":"IM1"},
    		"india": {"countryCode":"in", "zipLength":"6", "showState":"true","zipFormat":"110001"},
    		"iceland": {"countryCode":"is", "zipLength":"3", "showState":"false","zipFormat":"101"},
    		"italy": {"countryCode":"it", "zipLength":"5", "showState":"true","zipFormat":"00010"},
    		"jersey": {"countryCode":"je", "zipLength":"3", "showState":"false","zipFormat":"JE1"},
    		"japan": {"countryCode":"jp", "zipLength":"8", "showState":"true","zipFormat":"100-0001"},
    		"liechtenstein": {"countryCode":"li", "zipLength":"4", "showState":"false","zipFormat":"9485"},
    		"sri lanka": {"countryCode":"lk", "zipLength":"5", "showState":"true","zipFormat":"96167"},
    		"lithuania": {"countryCode":"lt", "zipLength":"5", "showState":"true","zipFormat":"00001"},
    		"luxembourg": {"countryCode":"lu", "zipLength":"6", "showState":"false","zipFormat":"L-1009"},
    		"monaco": {"countryCode":"mc", "zipLength":"5", "showState":"true","zipFormat":"98000"},
    		"moldavia": {"countryCode":"md", "zipLength":"7", "showState":"true","zipFormat":"MD-2000"},
    		"marshall islands": {"countryCode":"mh", "zipLength":"5", "showState":"true","zipFormat":"96960"},
    		"macedonia": {"countryCode":"mk", "zipLength":"4", "showState":"false","zipFormat":"1000"},
    		"nothern mariana islands": {"countryCode":"mp", "zipLength":"5", "showState":"true","zipFormat":"96950"},
    		"martinique": {"countryCode":"mq", "zipLength":"5", "showState":"true","zipFormat":"97200"},
    		"mexico": {"countryCode":"mx", "zipLength":"5", "showState":"true","zipFormat":"01000"},
    		"malaysia": {"countryCode":"my", "zipLength":"5", "showState":"true","zipFormat":"01000"},
    		"holland": {"countryCode":"nl", "zipLength":"4", "showState":"true","zipFormat":"1000"},
    		"norway": {"countryCode":"no", "zipLength":"4", "showState":"true","zipFormat":"0001"},
    		"new zealand": {"countryCode":"nz", "zipLength":"4", "showState":"false","zipFormat":"0110"},
    		"phillippines": {"countryCode":"ph", "zipLength":"4", "showState":"false","zipFormat":"0400"},
    		"pakistan": {"countryCode":"pk", "zipLength":"5", "showState":"true","zipFormat":"10010"},
    		"poland": {"countryCode":"pl", "zipLength":"6", "showState":"true","zipFormat":"00-001"},
    		"saint pierre and miquelon": {"countryCode":"pm", "zipLength":"5", "showState":"true","zipFormat":"97500"},
    		"puerto rico": {"countryCode":"pr", "zipLength":"5", "showState":"true","zipFormat":"00601"},
    		"portugal": {"countryCode":"pt", "zipLength":"7", "showState":"true","zipFormat":"1000-001"},
    		"french reunion": {"countryCode":"re", "zipLength":"5", "showState":"true","zipFormat":"97400"},
    		"russia": {"countryCode":"ru", "zipLength":"6", "showState":"true","zipFormat":"101000"},
    		"sweden": {"countryCode":"se", "zipLength":"5", "showState":"true","zipFormat":"10005"},
    		"slovenia": {"countryCode":"si", "zipLength":"4", "showState":"true","zipFormat":"1000"},
    		"svalbard and jan mayern islands": {"countryCode":"sj", "zipLength":"4", "showState":"true","zipFormat":"8099"},
    		"slovak republic": {"countryCode":"sk", "zipLength":"6", "showState":"true","zipFormat":"010 01"},
    		"san marino": {"countryCode":"sm", "zipLength":"5", "showState":"true","zipFormat":"47890"},
    		"thailand": {"countryCode":"th", "zipLength":"5", "showState":"true","zipFormat":"10100"},
    		"turkey": {"countryCode":"tr", "zipLength":"5", "showState":"true","zipFormat":"01000"},
    		"united states": {"countryCode":"us", "zipLength":"5", "showState":"true","zipFormat":"00210"},
    		"vatican": {"countryCode":"va", "zipLength":"5", "showState":"false","zipFormat":"00120"},
    		"virgin islands": {"countryCode":"vi", "zipLength":"5", "showState":"true","zipFormat":"00801"},
    		"mayotte": {"countryCode":"yt", "zipLength":"5", "showState":"true","zipFormat":"97600"},
    		"south africa": {"countryCode":"za", "zipLength":"4", "showState":"false","zipFormat":"0002"}
    };

    //Lyt på keychanges og kald funktion til at opdatere felter med
    var zipInput = document.getElementById($scope.model.alias + '_code'),
    	chosenCountry = $scope.model.config.country,
		lcCountry = chosenCountry.toLowerCase();
		matchedCountry = countryData[lcCountry],
		countryCode = matchedCountry.countryCode;

		//Setting max-length attribue on html element using $scope
		$scope.maxLength = matchedCountry.zipLength;
		$scope.countryCode = countryCode;

		//Settings placeholder text
		$scope.zipFormat = 'Enter zip kode like: ' + matchedCountry.zipFormat;

        //Getting saved values string from $scope.model.value
        var cityStoredValues = $scope.model.value,
        	cityStoredValuesArr = cityStoredValues.split(',');

        	if(cityStoredValuesArr.length > 1){
				$scope.zip = cityStoredValuesArr[0];
            	$scope.countryabbr = cityStoredValuesArr[1];
				$scope.placename = cityStoredValuesArr[2];
				$scope.statename = cityStoredValuesArr[3];
				$scope.statenameabbr = cityStoredValuesArr[4];
				$scope.coordinates = cityStoredValuesArr[5] +","+ cityStoredValuesArr[6];
			}

		//Calling the zipLookUp function on keyup
		if (typeof zipInput.addEventListener != "undefined") {
			zipInput.addEventListener("keyup", function(e) {
				var zip = e.target.value,
					code = e.target.className;
				//Calling the zipLookUp function when the whole zip code is entered
					zipLookUp(zip,code);
				e.preventDefault();
			}, false);
		} else if (typeof zipInput.attachEvent != "undefined") {
    		zipInput.attachEvent("onkeyup", function(e) {
			var zip = e.target.value,
				code = e.target.className;
			//Calling the zipLookUp function when the whole zip code is entered
					zipLookUp(zip,code);
    		});
		}

		function zipLookUp (zip,code) {

			var zip = zip,
			baseApiString = "http://api.zippopotam.us/",
			apiString = baseApiString + code + "/" + zip;

			//Calling ajax function
			getData(apiString,zip);
		}

		function getData (apiString,zip) {
			var xmlhttp;
			//If the XMLHttpRequest is supported let's make an ajax call
			if (window.XMLHttpRequest) {

				//If zip is 0 then clear the model.value and the fields of the form
				if (zip.length == 0) {
					$scope.model.value = '';
					$scope.zip = '';
                    $scope.countryabbr = '';
					$scope.placename = '';
					$scope.statename = '';
					$scope.statenameabbr = '';
					$scope.coordinates = '';
				};

				//If zip is greater than it's max-length, then make a server call
				if(zip.length == $scope.maxLength){
				//Instantiate an XMLHttpObject
				xmlhttp = new XMLHttpRequest();
				xmlhttp.open("GET", apiString, false);

				xmlhttp.onreadystatechange = function() {

					//If everything is fine we send the request
					if(xmlhttp.readyState == 4 && xmlhttp.status == 200 || xmlhttp.status == 304){

						var data = eval("("+xmlhttp.responseText+")");
						var places = data['places'][0],
							countryshortcode = data['country abbreviation'];
						
						//Settings variables
						getValZip = zip;
						getValCountryAbbr = countryshortcode;
						getValPlaceName = places['place name'];
						getValStateName = places['state'];
						getValStateNameAbbr = places['state abbreviation'];
						getValCoordinates = places['latitude'] +","+ places['longitude'];
						//Gemmer modellens data

						$scope.$apply(function () {

                    		//Store the value as a CSV
                    		$scope.model.value = getValZip +","+ getValCountryAbbr +","+ getValPlaceName +","+ getValStateName +","+ getValStateNameAbbr +"," + getValCoordinates;

                    		//Updating scope with the return values
							$scope.zip = getValZip;
                    		$scope.countryabbr = getValCountryAbbr;
							$scope.placename = getValPlaceName;
							$scope.statename = getValStateName;
							$scope.statenameabbr = getValStateNameAbbr;
							$scope.coordinates = getValCoordinates;
                		});

					} else{
						//Otherwise we show an error message using the notificationService
						notificationsService.error("Oops, an error has happened looking up the zip-code. We\'re very sorry about that! Please try again in 10 minutes");
					}
				}

				xmlhttp.send(null);
			}
			};

		}

	});
});