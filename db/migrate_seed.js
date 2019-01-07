require('dotenv').config()
const db = require('../db');

db.query("CREATE TABLE IF NOT EXISTS stores (\
	id INTEGER PRIMARY KEY,\
	latitude NUMERIC,\
	longitude NUMERIC,\
	name VARCHAR(255),\
	phone VARCHAR(255),\
	postcode VARCHAR(255),\
	street VARCHAR(255),\
	town VARCHAR(255),\
	type VARCHAR(255),\
	vegan BOOLEAN\
);", [], (error, results) => {
	if (error) {
		throw error;
	}
	return db.query("TRUNCATE ONLY stores", [], (error, results) => {
		if (error) {
			throw error;
		}
		return db.query("INSERT INTO stores (id, latitude, longitude, name, phone, postcode, street, town, type, vegan) VALUES \
		(90460, 55.1830949679681000, -1.5711139372706900, '﻿Ashington Stn Rd', '01670 813103', 'NE63 9UJ', '32 Station Road', 'Northumberland', 'Greggs', true),\
		(90461, 55.1310987473139000, -1.5938162954836200, 'Bedlington Mkt Pl', '01670 822909', 'NE22 5TN', '10/14 Market Place', 'Northumberland', 'Greggs', true),\
		(90462, 55.0080904090921000, -1.5787829124628500, 'Benton Benton Rd', '0191 2663024', 'NE7 7EE ', '387/389 Benton Road', 'Newcastle Upon Tyne', 'Greggs', true),\
		(90463, 54.8955876330336000, -1.5778833035687200, 'Birtley Durham Rd', '0191 4105387', 'DH3 2QH ', '37 Durham Road', 'Co. Durham', 'Greggs', false),\
		(90464, 54.9646706908573000, -1.7120732565867000, 'Blaydon The PCT', '0191 4145453', 'NE21 5BT', 'Unit 15 The Precinct', 'Tyne And Wear', 'Greggs', true),\
		(90465, 54.7509780050785000, -1.6306110095471300, 'Brandon Brandon SC', '0191 3780942', 'DH7 8NN ', 'Unit 2 Brandon SC', 'County Durham', 'Greggs', true),\
		(90466, 54.9778713238057000, -1.5766774099565400, 'Byker 209 Shields Rd', '0191 2655986', 'NE6 1DQ ', '209 Shields Road', 'Newcastle Upon Tyne', 'Greggs', true),\
		(90467, 55.0088205169843000, -1.4468399936052900, 'Nshields Bedford St', '0191 2579774', 'NE29 6QA', '40 Bedford Street (Unit 8)', 'Tyne and Wear', 'Greggs', true),\
		(90468, 53.3791888568038000, -1.4703515218231500, 'Shefld 93 Pinstn St', '0114 2798599', 'S1 2HJ  ', '93 Pinstone Street', 'Sheffield', 'Greggs', false),\
		(90469, 55.0852053570717000, -1.5880149994986000, 'Cramlington Mnr Wlk', '01670 713909', 'NE23 6QW', 'Unit 23 Northumbria House', 'Northumberland', 'Greggs', true),\
		(90470, 55.9413927379399000, -4.3182813338149800, 'Milngavie Douglas St', '0141 9550167', 'G62 6PB ', '6 Douglas Street (unit 10)', 'Scotland', 'Greggs', false),\
		(90471, 54.5257992091355000, -1.5539393600807300, 'Darlington Cornmill', '01325 354390', 'DL1 1LS ', 'Unit 60 (48) Cornmill Centre', 'Co. Durham', 'Greggs', true),\
		(90472, 54.5246648442093000, -1.5558366495262300, 'Darlington High Row', '01325 461089', 'DL3 7QQ ', '19 High Row', 'Co. Durham', 'Greggs', true),\
		(90473, 54.5252272777308000, -1.5572674428085900, 'Darlington Skinnergt', '01325 465931', 'DL3 7LL ', '68 Skinnergate', 'Co. Durham', 'Greggs', true),\
		(90474, 52.6896979366058000, -2.0310849701861200, 'Cannock Mkt Hall St', '01543 574324', 'WS11 1BU', '1 Market Hall Street', 'Staffordshire', 'Greggs', true),\
		(90475, 54.9405730774346000, -1.5453821747433500, 'Leam Lane Fewster Sq', '0191 4695102', 'NE10 8XQ', 'Unit 2 Fewster Sq', 'Tyne & Wear', 'Greggs', false),\
		(90476, 51.4662580705278000, 0.0090362649844450, 'Ldn Blackheath Tranq', '0208 8520265', 'SE3 0AX ', '28 Tranquil Vale', 'Blackheath', 'Greggs', false),\
		(90477, 54.6890089596474000, -1.5563718362634000, 'Ferryhill Mkt St', '01740 651206', 'DL17 8JN', '17/18 Market Street', 'Co Durham', 'Greggs', false),\
		(90478, 55.0176402727014000, -1.5678136024316200, 'Forest Hall Stn Rd', '0191 2662222', 'NE12 8AP', '19 Station Road', 'Tyne And Wear', 'Greggs', true),\
		(90479, 54.9626511147070000, -1.6041373583100900, 'Gateshead Intrchange', '0191 4775715', 'NE8 1BH ', 'Unit 22, 22 West Street', 'Tyne & Wear', 'Greggs', true),\
		(90480, 51.5081031823131000, -0.5894653393285560, 'Slough High St', '01753 518964', 'SL1 1BY ', '223 High Street', 'Berks', 'Greggs', true),\
		(90481, 55.0044355879703000, -1.6205641703551300, 'Gosforth High St', '0191 2851508', 'NE3 1HA ', '133/135 High Street', 'Tyne And Wear', 'Greggs', true),\
		(90482, 54.5354298400955000, -1.0523801116419500, 'Guisborough Westgate', '01287 631363', 'TS14 6BG', '39 Westgate', 'Cleveland', 'Greggs', true),\
		(90483, 54.6846573665715000, -1.2125688451981700, 'Hartpl 130 Midltn Gr', '01429 223448', 'TS24 7RG', 'Unit B33, 130 Middleton Grange', 'Cleveland', 'Greggs', true),\
		(90484, 54.9879938879921000, -1.5778367982589600, 'Heaton Chillinghm Rd', '0191 2656117', 'NE6 5LL ', '265 Chillingham Road', 'Tyne And Wear', 'Greggs', true),\
		(90485, 54.9730839630906000, -1.5192390241851700, 'Hebburn St James Mal', '0191 4835360', 'NE31 1LF', 'Unit 21 8 St James Mall', 'Tyne & Wear', 'Greggs', true),\
		(90486, 54.9705312248752000, -2.1009734993661400, 'Hexham Fore St', '01434 600028', 'NE46 1LU', '41 Fore Street', 'Northumberland', 'Greggs', true),\
		(90487, 54.9807530909726000, -1.4892881774130100, 'Jarrow Bede PCT', '0191 4891098', 'NE32 3LW', '17 Bede Precinct', 'Tyne And Wear', 'Greggs', true),\
		(90488, 51.3585888726775000, -0.1499428733313100, 'Wallington Woodcote', '0208 6696863', 'SM6 0LY ', '86 Woodcote Road', 'Surrey', 'Greggs', false),\
		(90489, 55.0062384394313000, -1.6525515092006400, 'Kenton Halewood Ave', '0191 2860025', 'NE3 3RX ', '45 Halewood Avenue', 'Tyne & Wear', 'Greggs', true),\
		(90490, 53.7972258842927000, -1.5391118714711100, 'Leeds Kirkgate', '0113 2471738', 'LS2 7JG ', '21 Kirkgate', 'Leeds', 'Greggs', true),\
		(90491, 54.9365750050319000, -1.5993052349489800, 'Low Fell Durham Rd', '0191 4823535', 'NE9 5EX ', '487 Durham Road', 'Tyne & Wear', 'Greggs', true),\
		(90492, 52.7872232595923000, -0.1523834104451850, 'Spalding Hall Pl', '01775 762763', 'PE11 1SA', '8 Hall Place', 'Lincolnshire', 'Greggs', false),\
		(90493, 54.9576405462948000, -1.6685552476180600, 'Ghead Mtr Cameron Wy', '0191 4600540', 'NE11 9YR', '10 Cameron Walk', 'Tyne & Wear', 'Greggs', true),\
		(90494, 51.9049573382395000, -0.5193593903959700, 'Houghton Reg Bedf Sq', '01582 863585', 'LU5 5ES ', '3 Bedford Square', 'Bedfordshire', 'Greggs', false),\
		(90495, 54.5605353368497000, -1.2431525989029500, 'Middlsboro Linthorpe', '01642 821276', 'TS5 6HX ', '447 Linthorpe Road', 'Cleveland', 'Greggs', true),\
		(90496, 51.5093517749742000, -0.5938506781476650, 'Slough Mackenzie St', '01753 578724', 'SL1 1XQ ', '1 Mackenzie Street', 'Bucks', 'Greggs', true),\
		(90497, 54.9776847724633000, -1.6123951163757100, 'Ncl St Marys Pl', '0191 2323370', 'NE1 7PG ', '3 St Marys Place', 'Newcastle Upon Tyne', 'Greggs', true),\
		(90498, 54.9732660269422000, -1.6395261055859000, 'Outlet Ncl Westgate', '0191 2730877', 'NE4 6PB ', '403 Westgate Road', 'Newcastle Upon Tyne', 'Greggs', false),\
		(90499, 54.5709787650567000, -1.2136162474406800, 'Nth Ormesby Kings Rd', '01642 245803', 'TS3 6NF ', '40/42 Kings Road', 'Cleveland', 'Greggs', true),\
		(90500, 54.8569942742407000, -1.5736909539028600, 'Chester Le St Front', '0191 3886033', 'DH3 3BD ', '54 Front Street', 'County Durham', 'Greggs', true),\
		(90501, 54.7598896059530000, -1.3347302268918900, 'Peterlee Yoden Wy', '0191 5864101', 'SR8 1BP ', '24 Yoden Way', 'Co. Durham', 'Greggs', true),\
		(90502, 54.9976388732937000, -1.4364580844075600, 'Sth Shields 117 King', '0191 4564634', 'NE33 1DP', '117 King Street', 'Tyne And Wear', 'Greggs', true),\
		(90503, 52.5036861600000000, -1.9356216300000000, 'Handsworth Soho Rd', '0121 5515151', 'B21 9LR ', '216 Soho Road', 'Birmingham', 'Greggs', true),\
		(90504, 54.9721892227832000, -1.4079922951689400, 'Sth Shield Prince Ed', '0191 4566148', 'NE34 7LZ', '285/289 Prince Edward Road', 'Tyne And Wear', 'Greggs', true),\
		(90505, 54.6997067748393000, -1.6014242784564100, 'Spennymoor Parkwood', '01388 814409', 'DL16 6AB', '9 Parkwood Precinct', 'Co. Durham', 'Greggs', true),\
		(90506, 54.8694830113929000, -1.6990550153463400, 'Stanley Front St', '01207 234789', 'DH9 0HU ', '52 Front Street', 'Co. Durham', 'Greggs', true),\
		(90507, 54.9016373559262000, -1.4044113748856800, 'Sdland Chester Rd', '0191 5143905', 'SR4 7HR ', '220 Chester Road', 'Tyne & Wear', 'Greggs', true),\
		(90508, 54.9225006232638000, -1.4514723581312000, 'Hyltn Cstl Chswck Sq', '0191 5480353', 'SR5 3PZ ', '42 Chiswick Square', 'Tyne & Wear', 'Greggs', false),\
		(90509, 54.9296511947726000, -1.3798564494567100, 'Fulwell Sea Rd', '0191 5491836', 'SR6 9BS ', '29 Sea Road', 'Tyne & Wear', 'Greggs', true),\
		(90510, 51.4769418132368000, 0.3225156266944640, 'Grays High St', '01375 397228', 'RM17 6NA', '44 High Street', 'Essex', 'Greggs', false),\
		(90511, 53.8094123348963000, -1.5093047197143000, 'Leeds Harehills Ln', '0113 2491013', 'LS9 6AX ', '355 Harehills Lane', 'Leeds', 'Greggs', true),\
		(90512, 54.8967620883083000, -1.4393480749744700, 'Pennywell Pnnywll SC', '0191 5342353', 'SR4 9AS ', '4 Portsmouth Road', 'Tyne & Wear', 'Greggs', true),\
		(90513, 51.5768955587105000, 0.1822107764771010, 'Romfrd South St', '01708 745885', 'RM1 1NL ', '57 South Street', 'Essex', 'Greggs', true),\
		(90514, 53.7589253705855000, -2.7017920868450000, 'Preston Friargate', '01772 204413', 'PR1 2NQ ', '91 Friargate Walk', 'Lancashire', 'Greggs', true),\
		(90515, 54.9068965196528000, -1.3832006207235300, 'Sdland Union St', '0191 5674910', 'SR1 3BT ', 'Units 1/2 Phoenix House', 'Tyne And Wear', 'Greggs', true),\
		(90516, 54.9742275808876000, -1.5455803377410900, 'Walker Churchwalk SC', '0191 2626769', 'NE6 3DW ', '15 Churchwalk Shopping Centre', 'Tyne And Wear', 'Greggs', false),\
		(90517, 54.9257890497610000, -1.5747899260514300, 'Wrekenton', '0191 4821508', 'NE9 7JR ', '167 High Street', 'Tyne & Wear', 'Greggs', true),\
		(90518, 52.6042714577864000, -1.9176526082914900, 'Aldridge Aldridge SC', '01922 455059', 'WS9 8QP ', '17 Anchor Parade', 'West Midlands', 'Greggs', true),\
		(90519, 51.5690403939344000, 0.4588597250583560, 'Basildon South Wlk', '01268 270803', 'SS14 1BZ', '20 South Walk', 'Basildon', 'Greggs', false),\
		(90520, 55.8657946101769000, -3.9783060583665900, 'Airdrie Graham St', '01236748384 ', 'ML6 6DB ', '68 Graham St', 'Strathclyde', 'Greggs', false),\
		(90521, 51.5098822791594000, 0.2827422433862050, 'Sth Ockendon Derwent', '01708 853361', 'RM15 5EF', '9 Derwent Parade', 'Essex', 'Greggs', false),\
		(90522, 55.9871531016884000, -4.5815665083076500, 'Alexandria Main St', '01389 751313', 'G83 0NX ', 'Unit 34, 139 Main Street', 'Dumbarton', 'Greggs', false),\
		(90523, 53.5456219403737000, -2.1409599672107200, 'Chaddertn Shopng PCT', '0161 6208336', 'OL9 0LQ ', 'Unit 3, Chadderton Shopping Ce', 'Manchester', 'Greggs', true),\
		(90524, 55.9070923109196000, -4.2065234708039300, 'Bshpbrgs Woodhill Rd', '0141 7726627', 'G64 1DH ', 'Unit 4, 174 Woodhill Rd', 'Bishopbriggs', 'Greggs', false),\
		(90525, 55.8752840332467000, -3.1065464977297900, 'Bonnyrigg High St', '0131 6542724', 'EH19 2AA', 'Unit 4, 44 High Street', 'Midlothian', 'Greggs', false),\
		(90526, 55.8455968725579000, -4.3545707337572000, 'Glas 2123 Paisley Rd', '0141 8829962', 'G52 3JL ', '2123 Paisley Road West', 'Larnarkshire', 'Greggs', false),\
		(90527, 55.7336574657501000, -3.8372838167149900, 'Carluke Rankin Gait', '01555 750460', 'ML8 4AT ', 'Unit 1, Rankin Gait Devment', 'Carluke', 'Greggs', false),\
		(90528, 55.8066815633502000, -4.2350996709411700, 'Cstlmlk Cstlmlk Arc', '0141 6346940', 'G45 9AA ', '8 Castlemilk Arcade', 'Castlemilk', 'Greggs', false),\
		(90529, 57.1453451700000000, -2.1006560430000000, 'Aberdn Trinity SC', '01224 572769', 'AB11 6BE', 'Unit 10, Trinity Centre', 'Aberdeen', 'Greggs', false),\
		(90530, 51.5098557620760000, -0.3248211752300270, 'West Ealing Broadway', '0208 5790300', 'W13 9BP ', '77 The Broadway', 'West Ealing', 'Greggs', true),\
		(90531, 55.9425714820535000, -3.2821681736612300, 'Edin St Johns Rd', '0131 3164133', 'EH12 7SD', '139a St Johns Road', 'Edinburgh', 'Greggs', false),\
		(90532, 55.8937103052505000, -3.0702925093461600, 'Dalkeith Jarnac Crt', '0131 6633465', 'EH22 1HU', '17 Jarnac Court', 'Midlothian', 'Greggs', false),\
		(90533, 55.9432515746110000, -4.5718525078136200, 'Dumbarton High St', '01389 732065', 'G82 1LF ', '81 High St', 'Dumbarton', 'Greggs', false),\
		(90534, 55.7605607321424000, -4.1758587050771800, 'E Kilbrde Prncs Mall', '01355 224591', 'G74 1LB ', '7 Princes Mall', 'East Kilbride', 'Greggs', false),\
		(90535, 55.7723527550967000, -4.1569685007396100, 'E Kilbrde Clderwd Sq', '013552 32967', 'G74 3BQ ', '12 Calderwood Square', 'East Kilbride', 'Greggs', false),\
		(90536, 55.9360987641533000, -3.2096281698450900, 'Edin Bruntsfield Pl', '0131 2296320', 'EH10 4DF', '198 Bruntsfield Plce', 'Edinburgh', 'Greggs', false),\
		(90537, 55.9591649784194000, -3.1714563544937700, 'Edin Easter Rd', '0131 6618791', 'EH7 5RH ', '106 Easter Road', 'Edinburgh', 'Greggs', false),\
		(90538, 55.9584564211565000, -3.1835441923083400, 'Edin Elm Row', '0131 5567950', 'EH7 4AA ', '21 Elm Row', 'Edinburgh', 'Greggs', false),\
		(90539, 55.9375247311618000, -3.2343584609693400, 'Edin Gorgie Rd', '0131 3374422', 'EH11 2PN', '224 Gorgie Road', 'Edinburgh', 'Greggs', false),\
		(90540, 55.9656084256894000, -3.2728370066279300, 'Edin Main St', '0131 3364493', 'EH4 5BZ ', '21 Main Street', 'Edinburgh', 'Greggs', false),\
		(90541, 55.9256125612091000, -3.2096375073852500, 'Edin Morningside Rd', '0131 4479061', 'EH10 5HY', '400 Morningside Road', 'Edinburgh', 'Greggs', false),\
		(90542, 55.9458769772072000, -3.1844573746185800, 'Edin Nicholson St', '0131 6674156', 'EH8 9DT ', '74 Nicolson Street', 'Edinburgh', 'Greggs', true),\
		(90543, 55.9709043985591000, -3.2523254296338900, 'Edin Pennywell Rd', '0131 3328992', 'EH4 4QR ', '45 Pennywell Road', 'Edinburgh', 'Greggs', false),\
		(90544, 51.5138102966260000, -0.3034041332757720, 'Ealing Broadway', '0208 8409877', 'W5  2NH ', '10 The Broadway', 'London', 'Greggs', true),\
		(90545, 51.5620232459634000, 0.2199784910995470, 'Hornchurch High St', '01708 438736', 'RM12 6QX', '148 High Street', 'Essex', 'Greggs', false),\
		(90546, 55.9521187920438000, -3.2014796894658500, 'Edin 85 Rose St', '0131 2261952', 'EH2 3DT ', '85-87 Rose Street', 'Edinburgh', 'Greggs', false),\
		(90547, 51.3926008211695000, -0.3052181167784260, 'Surbiton Victoria Rd', '0208 3993518', 'KT6 4NS ', '77 Victoria Road', 'Surrey', 'Greggs', true),\
		(90548, 55.9153797789874000, -3.2848703249902900, 'Edin Westside Plaza', '0131 4423116', 'EH14 2SW', 'Unit 21, Westside Plaza', 'Edinburgh', 'Greggs', false),\
		(90549, 56.0001588325214000, -3.7868733674361700, 'Falkirk Lintriggs', '01324 612685', 'FK1 1DG ', 'Unit 2, 4/6 Lintriggs', 'Falkirk', 'Greggs', false),\
		(90550, 55.8759458050823000, -4.2933228659000000, 'Glas Byres Rd', '0141 3348752', 'G12 8TL ', '259 Byres Road', 'Glasgow', 'Greggs', true),\
		(90551, 55.8655373409608000, -4.2608397471937100, 'Glas Cambridge St', '0141 3324493', 'G2 3DX  ', '19 Cambridge Street', 'Glasgow', 'Greggs', false),\
		(90552, 55.8606294568219000, -4.2510780715255900, 'Glas George Sq', '0141 2210950', 'G2 1DY  ', '13 George Square', 'Glasgow', 'Greggs', false),\
		(90553, 55.8832966971731000, -4.2539734751575300, 'Glas Saracen St', '0141 3368157', 'G22 5ER ', '240 Saracen Street', 'Glasgow', 'Greggs', false),\
		(90554, 55.8519043509034000, -4.1699704237427900, 'Glas Shettleston Rd', '0141 7789658', 'G32 7PB ', '1029 Shettleston Road', 'Glasgow', 'Greggs', false),\
		(90555, 55.8610432155210000, -4.2549853280365300, 'Glas West Nile St', '0141 2216224', 'G1 2PF  ', '28 West Nile Street', 'Glasgow', 'Greggs', false),\
		(90556, 56.0189631633110000, -3.7227472141209900, 'Grngemth La Porte', '01324 473324', 'FK3 8AZ ', 'Unit 4, 21 La Porte Precinct', 'Grangemouth', 'Greggs', false),\
		(90557, 55.9494237508999000, -4.7612541020879200, 'Grnock West Blackhll', '01475 784196', 'PA15 1UA', '3 West Blackhall Street', 'Greenock', 'Greggs', false),\
		(90558, 55.9240977166243000, -4.4018939522045100, 'Hardgate Rockbank Pl', '01389 873087', 'G81 5NZ ', '5 Rockbank Place', 'Strathclyde', 'Greggs', false),\
		(90559, 56.0033119947722000, -4.7333683302752300, 'Helnsbgh Sinclair St', '01436 676447', 'G84 8SU ', '26 Sinclair Street', 'Helensburgh', 'Greggs', false),\
		(90560, 55.8368308955380000, -4.5118715096380200, 'Johnstone High St', '01505 326831', 'PA5 8AN ', '40 High Street', 'Johnstone', 'Greggs', false),\
		(90561, 55.6101300495566000, -4.4955571356964800, 'Kilmarnock Burns SC', '01563 536483', 'KA1 1LT ', '11  Burns Precinct', 'Kilmarnock', 'Greggs', false),\
		(90562, 55.8862908551903000, -4.3598498209594100, 'Knghtswood Annieslnd', '0141 9541145', 'G14 0YU ', '740 Anniesland Road', 'Glasgow', 'Greggs', false),\
		(90563, 53.4387954140122000, -2.9709068675659000, 'Lvrpool County Rd', '0151 5301391', 'L4 3QH  ', '40 County Road', 'Liverpool', 'Greggs', false),\
		(90564, 55.7402985193688000, -3.9739888126176700, 'Larkhall Union St', '01698 887912', 'ML9 1DZ ', 'Unit 2, 73 Union Street', 'Larkhall', 'Greggs', false),\
		(90565, 55.7908870922385000, -3.9912065922706000, 'Mthrwll 32 Brndn Pde', '01698 264023', 'ML1 1LY ', '32 Brandon Parade East', 'Motherwell', 'Greggs', false),\
		(90566, 55.8460294340493000, -4.4243603079109400, 'Paisley Moss St', '0141 8898988', 'PA1 1BL ', '14 Moss Street', 'Paisley', 'Greggs', false),\
		(90567, 55.8452960836932000, -4.3444405795070800, 'Glas 1849 Paisley Rd', '0141 8821533', 'G52 3SX ', '1849 Paisley Road West', 'Lanarkshire', 'Greggs', false),\
		(90568, 55.8275036515506000, -3.2218674118248400, 'Penicuik John St', '01968 678467', 'EH26 8HN', 'Unit 4, John Street', 'Penicuik', 'Greggs', false),\
		(90569, 55.9526594737507000, -3.1133173898942800, 'Edin High St', '0131 6574426', 'EH15 1EX', '164/166 High Street', 'Portobello', 'Greggs', false),\
		(90570, 55.6330439646189000, -4.7870752595136000, 'Saltcoats Dockhead', '01294 464255', 'KA21 5ED', '29 Dockhead Street', 'Ayrshire', 'Greggs', false),\
		(90571, 51.5412422837870000, 0.6954034267373920, 'Westcliff Hamlet Crt', '01702 348813', 'SS0 7EL ', '163 Hamlet Court Road', 'Essex', 'Greggs', false),\
		(90572, 55.8833735104614000, -4.2280423720005700, 'Glas Springburn Wy', '0141 5570265', 'G21 1TS ', 'Unit 21 Springburn Way', 'Glasgow', 'Greggs', false),\
		(90573, 51.2319299000000000, -2.3216148680000000, 'Frome Westway', '01373 469872', 'BA11 1BS', 'Unit 22, Westway S.C', 'Frome', 'Greggs', false),\
		(90574, 55.8359712020269000, -4.2646008728914100, 'Glas Victoria Rd', '0141 4240535', 'G42 8RW ', '401 Victoria Road', 'Glasgow', 'Greggs', true),\
		(90575, 55.7750855730966000, -3.9225092800246700, 'Wishaw Main St', '01698 375457', 'ML2 7AU ', '83 Main Street &', 'Wishaw', 'Greggs', false),\
		(90576, 53.0968754854270000, -1.3881169325817400, 'Alfreton Institut Ln', '01773 830762', 'DE55 7BQ', '1 Institute Lane', 'Derbyshire', 'Greggs', true),\
		(90577, 53.7137607437447000, -1.6322971191491800, 'Batley Comm St', '01924 478385', 'WF17 5EF', '73 Commercial Street', 'Batley', 'Greggs', true),\
		(90578, 0.0000000000000000, 0.0000000000000000, 'Bingley Rise SC', '01274 569711', 'BD16 1AW', 'unit 8a 5 Rise Shopping Centre', 'Yorkshire', 'Greggs', true),\
		(90579, 53.7937402300000000, -1.7530409510000000, 'Bradford Bank St', '01274 722008', 'BD1 1PU ', '43 Bank Street', 'Bradford', 'Greggs', true),\
		(90580, 52.5227377900000000, -1.8418872030000000, 'Erdngtn 237 High St', '0121 3734754', 'B23 6SS ', '237 High Street', 'Birmingham', 'Greggs', true),\
		(90581, 53.8117663624734000, -1.6263985078679400, 'Bramley Bramley SC', '0113 2566640', 'LS13 2ET', 'Unit 5 Bramley District Shoppi', 'Leeds', 'Greggs', true),\
		(90582, 53.8293530812769000, -1.5378175028906300, 'Leeds Chapel Allrton', '0113 2695430', 'LS7 4NY ', 'Unit 8, Chapel Allerton DSC', 'Leeds', 'Greggs', true),\
		(90583, 53.2349088120531000, -1.4292846056513800, 'Chfield Pavements SC', '01246 207813', 'S40 1PA ', 'Unit 15, The Pavement', 'Chesterfield', 'Greggs', false),\
		(90584, 53.2360006523415000, -1.4264084480885300, 'Chfield Brlington St', '01246 232565', 'S40 1RR ', '38 Burlington Street', 'Chesterfield', 'Greggs', true),\
		(90585, 53.6922580355450000, -1.6283955487213000, 'Dwsbry Foundry St', '01924 450151', 'WF13 1QH', '2 Foundry Street', 'West Yorkshire', 'Greggs', true),\
		(90586, 51.8105376526878000, -2.7183727328960100, 'Monmouth Monnow St', '01600 715008', 'NP25 3EW', '53 Monnow Street', 'South Wales', 'Greggs', true),\
		(90587, 51.4461389583461000, -0.0198952941855200, 'Catford Rushey Grn', '0208 3140277', 'SE6 4HQ ', '136 Rushey Green', 'London', 'Greggs', true),\
		(90588, 53.8657089200000000, -1.9074179360000000, 'Keighley Low St', '01535 604681', 'BD21 3PT', '36 Low Street', 'West Yorkshire', 'Greggs', true),\
		(90589, 53.6904245920991000, -1.6284419680521200, 'Dwsbry Prncess Wales', '01924 454651', 'WF13 1NH', 'Unit 6, The Asman Centre', 'Dewsbury', 'Greggs', true),\
		(90590, 53.5224356842823000, -1.1375165250208600, 'Doncaster 10 Frenchg', '01302 363655', 'DN1 1TT ', 'Unit 10 South Mall (Unit 115)', 'South Yorkshire', 'Greggs', true),\
		(90591, 53.5210589132074000, -1.1335776278691000, 'Doncaster Wterdle SC', '01302 367992', 'DN1 3JZ ', '12 Kingsgate', 'Doncaster', 'Greggs', true),\
		(90592, 53.4189039338292000, -1.4472282735826000, 'Shefld Bellhse Rd', '0114 2619037', 'S5 6HJ  ', '31a Bellhouse Road', 'Sheffield', 'Greggs', true),\
		(90593, 53.7953125180642000, -1.3885068342918200, 'Garforth Main St', '0113 2862335', 'LS25 1AF', '55 Main Street', 'West Yorkshire', 'Greggs', true),\
		(90594, 53.7221160485213000, -1.8598598112244200, 'Halifax Southgate', '01422 344921', 'HX1 1DL ', '8/10 Southgate', 'Halifax', 'Greggs', true),\
		(90595, 53.7234170346862000, -1.8579156643295000, 'Halifax Woolshops SC', '01422 344908', 'HX1 1RU ', 'Unit 4, Woolshops Centre', 'Halifax', 'Greggs', true),\
		(90596, 53.7069814497584000, -1.6750917426985200, 'Heckmondwike Mkt St', '01924 402159', 'WF16 0EZ', '65 Market Street', 'West Yorkshire', 'Greggs', true),\
		(90597, 53.6440358510832000, -1.7815514855440100, 'Hudfield Pr Alex Wlk', '01484 541750', 'HD1 2RS ', '24 Princess Alexandra Walk', 'Huddersfield', 'Greggs', true),\
		(90598, 52.5224534050423000, -1.4690370785273800, 'Nuneaton Queens Rd', '02476 348764', 'CV11 5JW', '12 Queens Road', 'Warwickshire', 'Greggs', true),\
		(90599, 53.9247540676605000, -1.8229259728099200, 'Ilkley Brook St', '01943 816724', 'LS29 8DA', 'Unit 3, Brook Street', 'West Yorkshire', 'Greggs', true),\
		(90600, 53.7956816268448000, -1.5442600008317300, 'Leeds The Bourse', '0113 2469161', 'LS1 5EQ ', '1b The Bourse', 'Leeds', 'Greggs', true),\
		(90601, 53.7979691024320000, -1.5454497681075900, 'Leeds Albion St', '0113 2453811', 'LS1 5AA ', '71 Albion Street', 'West Yorkshire', 'Greggs', true),\
		(90602, 53.7973641407557000, -1.5895742736046300, 'Armley Town St', '0113 2638115', 'LS12 3AB', '34 Town Street', 'Leeds', 'Greggs', true),\
		(90603, 54.5627079953926000, -1.3120548670367900, 'Stockton Cstlgate SC', '01642 612255', 'TS18 1AL', '23/24 Castle Way (units 39/40)', 'Stockton On Tees', 'Greggs', true),\
		(90604, 53.8208683216586000, -1.4953934286326100, 'Leeds Hollin Pk Pde', '0113 2405561', 'LS8 3AS ', '1 Hollin Park Parade', 'Leeds', 'Greggs', true),\
		(90605, 51.4620784726196000, -0.2162427051390000, 'Putney High St', '0208 7801456', 'SW15 1SU', '145 High Street', 'London', 'Greggs', true),\
		(90606, 53.8221852649626000, -1.5781212079700300, 'Leeds Arndale CTR', '0113 2785284', 'LS6 2UE ', '5 Arndale Centre', 'Leeds', 'Greggs', true),\
		(90607, 53.7788495797544000, -1.5286450847108400, 'Hunslet District CTR', '0113 2706267', 'LS10 2AP', 'Unit 6, Hunslet District Shopp', 'Leeds', 'Greggs', true),\
		(90608, 51.5620467833869000, 0.1229939718293640, 'Becontree Green Ln', '0208 5995988', 'RM8 1YT ', '792 Green Lane', 'Essex', 'Greggs', true),\
		(90609, 51.2406799436046000, -0.1691042694820280, 'Redhill Stn Rd', '01737 778816', 'RH1 1QH ', '35 Station Road', 'Surrey', 'Greggs', false),\
		(90610, 53.1448394473198000, -1.1970374724078000, 'Mansfield Westgate', '01623 623150', 'NG18 1RY', '11(a) And 13 Westgate', 'Mansfield', 'Greggs', true),\
		(90611, 51.6144589627295000, -0.2755182149040160, 'Edgware Stn Rd', '0208 3811546', 'HA8 7AR ', '190c Station Road', 'Edgware', 'Greggs', true),\
		(90612, 53.7468010290573000, -1.5481096239045300, 'Leeds Mdleton Pk Ave', '0113 2703027', 'LS10 4HP', '3 & 3a Middleton Park Avenue', 'West Yorkshire', 'Greggs', true),\
		(90613, 53.7453208797775000, -1.6022115988399600, 'Morley Windsor Crt', '0113 2538981', 'LS27 9BG', 'Unit 1108, 13 Windsor Court', 'Morley', 'Greggs', true),\
		(90614, 53.7001690445386000, -1.4184985242310000, 'Normanton High St', '01924 890501', 'WF6 2AF ', '53 High Street', 'Normanton', 'Greggs', true),\
		(90615, 53.9056027443315000, -1.6940256933848700, 'Otley Mkt Pl', '01943 467672', 'LS21 3AQ', 'Unit 1, 36/38 Market Place', 'Otley', 'Greggs', true),\
		(90616, 53.5235817725979000, -1.6307019362773300, 'Penistone High St', '01226 763040', 'S36 6BR ', '1 High Street', 'Penistone', 'Greggs', true),\
		(90617, 53.6916202791251000, -1.3114590212476000, 'Pontefract Mkt Pl', '01977 701230', 'WF8 1AT ', '18 Market Place', 'West Yorkshire', 'Greggs', true),\
		(90618, 53.4318657922540000, -1.3557443378089500, 'Rotherham Efinghm St', '01709 377269', 'S65 1AJ ', '2/6 Effingham Street', 'Rotherham', 'Greggs', true),\
		(90619, 53.7484010503196000, -1.4773521277662400, 'Rothwell Comm St', '0113 2823099', 'LS26 0AP', '45 Commercial Street', 'Leeds', 'Greggs', false),\
		(90620, 53.4031706876966000, -1.5017002385067200, 'Shfield Hillsborough', '0114 2333101', 'S6 4GY  ', 'Unit 5, Hillsborough Shopping', 'Sheffield', 'Greggs', false),\
		(90621, 53.8332907200000000, -1.7778340700000000, 'Shipley Mkt Sq', '01274 599385', 'BD18 3QJ', '32 Market Square', 'West Yorkshire', 'Greggs', true),\
		(90622, 56.1165908168407000, -3.9366478647810800, 'Stirlng Thistles SC', '01786 470394', 'FK8 2EW ', '33 Port Street', 'Stirling', 'Greggs', false),\
		(90623, 53.5947530180054000, -1.2900080128177500, 'Pontefract Brnsly Rd', '01977 643268', 'WF9 2RN ', '27 Barnsley Road', 'South Elmsall', 'Greggs', false),\
		(90624, 54.9046262125141000, -1.3856214314796200, 'Sdland Maritime Tce', '0191 5674605', 'SR1 3JT ', '1 Maritime Terrace', 'Sunderland', 'Greggs', true),\
		(90625, 54.9702486832633000, -1.6557518428750100, 'Benwell Adelaide SC', '01912736187 ', 'NE4 8BE ', '9 Adelaide Shopping Centre', 'Newcastle Upon Tyne', 'Greggs', true),\
		(90626, 53.6820559718560000, -1.4976135379624300, 'Wkfield Ridings SC', '01924 384079', 'WF1 1YD ', '8 Cathedral Walk', 'Wakefield', 'Greggs', true),\
		(90627, 53.5233635406993000, -1.3994575899005200, 'Wombwell High St', '01226 758621', 'S73 8BH ', 'Unit 1, 50 High Street', 'Wombwell', 'Greggs', false),\
		(90628, 53.7891628088702000, -1.5857229915882200, 'Wortley Oldfield Ln', '0113 2311927', 'LS12 4BR', 'Unit 5 Oldfield Lane', 'West Yorkshire', 'Greggs', true),\
		(90629, 51.9483526540017000, -0.2782075532541370, 'Hitchin High St', '01462 432277', 'SG5 1AT ', '28 High Street', 'Hertfordshire', 'Greggs', false),\
		(90630, 53.8662173867273000, -1.6834098351720500, 'Yeadon High St', '0113 2509999', 'LS19 7SP', '43 High Street', 'Yeadon', 'Greggs', true),\
		(90631, 53.4887612074271000, -2.0958891617494000, 'Ashtn U Lyn Stavelgh', '0161 3306161', 'OL6 7JJ ', '34 Staveleigh Way', 'Ashton Under Lyne', 'Greggs', true),\
		(90632, 53.5238661477436000, -2.4941470270182000, 'Atherton Mkt St', '01942 883342', 'M46 0DA ', '67 Market Street', 'Manchester', 'Greggs', true),\
		(90633, 53.3910506799062000, -2.8589357531274200, 'Lvrpool Belle Vale', '0151 4886758', ' L25 2RG', '24 Belle Vale Shopping Centre', 'Liverpool', 'Greggs', false),\
		(90634, 53.7495988900000000, -2.4829786150000000, 'Blckburn SC Mkt Way', '01254 263877', 'BB1 7JQ ', '29 Market Way', 'Blackburn', 'Greggs', true),\
		(90635, 53.5771497500000000, -2.4288905200000000, 'Bolton Newport St', '01204 397380', 'BL1 1NE ', '7 Newport Street', 'Lancashire', 'Greggs', true),\
		(90636, 51.4764705908655000, -3.2547952716679200, 'Cardiff Wilson Rd', '02920 670462', 'CF5 4LL ', '49 Wilson Road', 'Cardiff', 'Greggs', false),\
		(90637, 51.5037222597956000, -2.6022379040467800, 'Bristol Arnside Rd', '0117 9592661', 'BS10 6AT', '8 Arnside Road', 'Bristol', 'Greggs', false),\
		(90638, 53.4884612611665000, -2.9739099867457500, 'Bootle Marian Sq', '01515249051 ', 'L30 5QA ', '2 Marion Square', 'Merseyside', 'Greggs', false),\
		(90639, 53.3569042468155000, -2.1653512921524600, 'Bramhall Woodford Rd', '0161 4394047', 'SK7 1JN ', '7 Woodford Road', 'Cheshire', 'Greggs', true),\
		(90640, 53.7896835500000000, -2.2435522500000000, 'Burnley 69 The Mall', '01282 453554', 'BB11 1BA', '69 The Mall', 'Lancashire', 'Greggs', true),\
		(90641, 53.5916481300000000, -2.2952577710000000, 'Bury Prncess Mll Gte', '0161 7647883', 'BL9 0QL ', '16 Princess Parade', 'Lancashire', 'Greggs', true),\
		(90642, 53.6527614036053000, -2.6313527004751200, 'Chorley Chapel St', '01257 264200', 'PR7 1BN ', '5 Chapel Street', 'Lancashire', 'Greggs', true),\
		(90643, 53.4423154162515000, -2.2761397645989000, 'Manc 561 Wlbraham Rd', '0161 8619344', 'M21 0AE ', '561 Wilbraham Road', 'Manchester', 'Greggs', true),\
		(90644, 53.4926996333022000, -3.0249394576139600, 'Crosby Moor Ln', '0151 9245191', 'L23 2SE ', '9 Moor Lane', 'Liverpool', 'Greggs', true),\
		(90645, 53.6961970900000000, -2.4679181770000000, 'Darwen Mkt St', '01254 701864', 'BB3 1AZ ', '18 Market Street', 'Lancashire', 'Greggs', true),\
		(90646, 53.4560260291152000, -2.1153173148567700, 'Denton Manc Rd', '0161 3209555', 'M34 3JU ', '17 Manchester Road', 'Manchester', 'Greggs', true),\
		(90647, 53.4165056081407000, -2.2313922183147400, 'Manc 733 Wilmslow Rd', '0161 4450654', 'M20 6WF ', '733 Wilmslow Road', 'Greater Manchester', 'Greggs', true),\
		(90648, 53.4799913294155000, -2.1462267046764400, 'Drylsdn Queen Wlk', '0161 3707007', 'M43 7AD ', 'Unit 35(a), 31 Queens Walk', 'Greater Manchester', 'Greggs', true),\
		(90649, 53.4838223162072000, -2.3364762990838200, 'Eccles The Mall', '0161 7072223', 'M30 0EA ', '12 The Mall', 'Manchester', 'Greggs', true),\
		(90650, 53.4019908414841000, -2.1655112737386700, 'Stckprt Castle St', '0161 4803157', 'SK3 9AT ', '55 Castle Street', 'Stockport', 'Greggs', true),\
		(90651, 53.5479207200000000, -2.3946221110000000, 'Farnworth Brckley St', '01204 791808', 'BL4 9DR ', '44 Brackley Street', 'Lancashire', 'Greggs', true),\
		(90652, 52.5447053700000000, -1.9839574050000000, 'West Brom Walsall Rd', '0121 5884269', 'B71 3HP ', '146 Walsall Road', 'West Bromwich', 'Greggs', true),\
		(90653, 53.3499942782373000, -2.2146573161794600, 'Handforth Wilmslow', '01625 523254', 'SK9 3LQ ', '134 Wilmslow Road', 'Wilmslow', 'Greggs', true),\
		(90654, 53.5127358608030000, -2.2122678736672500, 'Manc Hrpurhy Dct CTR', '0161 2059126', 'M9 4DH  ', 'Unit 6 Harpurhey District Cent', 'Manchester', 'Greggs', true),\
		(90655, 53.7056924800000000, -2.3257323390000000, 'Haslingden Drdengate', '01706 216054', 'BB4 5QN ', '43 Deardengate', 'Lancashire', 'Greggs', true),\
		(90656, 53.4112648390371000, -2.8389581890203300, 'Huyton Derby Rd', '0151 4493901', 'L36 9UQ ', '45a Derby Road', 'Liverpool', 'Greggs', false),\
		(90657, 53.4816940201481000, -2.8871823509732800, 'Kirkby Saint Chads', '0151 5491671', 'L32 8RD ', '11e St Chads Parade', 'Merseyside', 'Greggs', false),\
		(90658, 53.4964976601856000, -2.5171632294931900, 'Leigh Bradshawgate', '01942 679365', 'WN7 4NB ', '23 Bradshawgate', 'Leigh', 'Greggs', true),\
		(90659, 53.4136980386940000, -2.9128474002220800, 'Lvrpool 549 PreSC Rd', '0151 2201610', 'L13 5UR ', '549 Prescot Road', 'Liverpool', 'Greggs', true),\
		(90660, 53.4819696934643000, -2.2488667914290000, 'Manc King St Wst', '0161 8326530', 'M3 2PW  ', '39 King Street West', 'Manchester', 'Greggs', true),\
		(90661, 53.4571359806184000, -2.2003337440925600, 'Manc Stckport Rd', '0161 2486279', 'M12 4JH ', 'Unit B,  539 Stockport Road', 'Manchester', 'Greggs', true),\
		(90662, 53.4784808277201000, -2.2316693726024900, 'Manc Gateway Hse', '0161 2365048', 'M1 2GH  ', '16 Gateway House', 'Greater Manchester', 'Greggs', true),\
		(90663, 51.4968118300467000, -3.1810772022686300, 'Cardiff Crwys Rd', '02920 384263', 'CF24 4NR', '114 Crwys Road', 'South Glamorgan', 'Greggs', true),\
		(90664, 53.3947005978152000, -2.0629094782925000, 'Marple The Hollins', '0161 4490442', 'SK6 6AY ', '3 The Hollins', 'Cheshire', 'Greggs', true),\
		(90665, 53.8361274000000000, -2.2136738510000000, 'Nelson Pendle Rse SC', '01282 602760', 'BB9 9SL ', '6 The Mall', 'Lancashire', 'Greggs', true),\
		(90666, 53.4419515436289000, -2.9301191316997900, 'Norris Grn Broadway', '0151 2264930', 'L11 1BX ', '17 Broadway', 'Liverpool', 'Greggs', false),\
		(90667, 53.5430787345446000, -2.1153883139982100, 'Oldham Henshaw St', '0161 6244282', 'OL1 1NH ', '23 Henshaw Street', 'Manchester', 'Greggs', true),\
		(90668, 51.4328471375572000, -2.7591257172641700, 'Nailsea Colliers Wlk', '01275 856192', 'BS48 1RG', '16 Colliers Walk', 'North Somerset', 'Greggs', false),\
		(90669, 52.6764610463420000, -2.4471360139863700, 'Telford SC Thet Chs', '01952 291561', 'TF3 4BQ ', '136 Thetford Chase', 'Shropshire', 'Greggs', true),\
		(90670, 54.8213959629926000, -1.4519867804236200, 'Heton Le Hole Fnt St', '0191 5266137', 'DH5 9PF ', '15 Front Street', 'Co Durham', 'Greggs', false),\
		(90671, 53.7588101336590000, -2.7015171411645200, 'Preston Fshrgate Wlk', '01772 252994', 'PR1 2NR ', '60 Fishergate Walk', 'Lancashire', 'Greggs', true),\
		(90672, 55.7938558219485000, -4.8687473248103700, 'Largs Main St', '01475 689773', 'KA30 8AL', '62 Main Street', 'Largs', 'Greggs', false),\
		(90673, 53.4249590107657000, -2.3225424556388000, 'Sale School Rd', '0161 9624235', 'M33 7YE ', '45 School Road', 'Manchester', 'Greggs', true),\
		(90674, 53.4199813968741000, -2.3046591717860800, 'Sale Northendon Rd', '0161 9699763', 'M33 3HE ', '162 Northendon Road', 'Manchester', 'Greggs', true),\
		(90675, 53.4892366614860000, -2.2870097441178900, 'Salford Mather Way', '0161 7368083', 'M6 5HU  ', '104 Mather Way', 'Salford', 'Greggs', true),\
		(90676, 53.5770284524168000, -2.0939447600409900, 'Shaw Mkt St', '01706 844857', 'OL2 8NH ', '28 Market Street', 'Lancashire', 'Greggs', true),\
		(90677, 53.4539587107810000, -2.7210276584377600, 'St Helens Hghr Parr', '01744 453900', 'WA9 1AG ', '111 Higher Parr Street', 'Merseyside', 'Greggs', false),\
		(90678, 53.4820446265226000, -2.0574486464782100, 'Stlybrdg Melbourn St', '0161 3384079', 'SK15 2JJ', '48 Melbourne Street', 'Cheshire', 'Greggs', true),\
		(90679, 51.3618176705793000, -0.1920152862963090, 'Sutton 72 High St', '0208 7700678', 'SM1 1EZ ', '72 High Street', 'Surrey', 'Greggs', true),\
		(90680, 53.4100130194134000, -2.1623231954631100, 'Stckprt Merseyway SC', '0161 4740969', 'SK1 1RA ', 'Unit B2, 26 Mersey Square', 'Cheshire', 'Greggs', true),\
		(90681, 54.9130938892762000, -1.5222313052608100, 'Washington Arndale', '0191 4162429', 'NE37 2SW', 'Unit 1 Arndale House', 'Washington', 'Greggs', true),\
		(90682, 53.5125080500623000, -2.3383925782382000, 'Swinton The Pde', '0161 7941636', 'M27 4BH ', '30 The Parade', 'Manchester', 'Greggs', true),\
		(90683, 53.5250075130615000, -2.4005482037098100, 'Walkden Ellesmre CTR', '0161 7905066', 'M28 3ZD ', '76 Ellesmere Centre', 'Manchester', 'Greggs', true),\
		(90684, 53.4154166766094000, -2.5263040769162700, 'Warringtn Birchwood', '01925 810743', 'WA3 7PJ ', 'Unit 27,  31 Dewhurst Road', 'Warrington', 'Greggs', true),\
		(90685, 53.4756486524390000, -3.0237901112834300, 'Waterloo South Rd', '01519280406 ', 'L22 0ND ', 'Unit 1, 100 South Road', 'Merseyside', 'Greggs', true),\
		(90686, 51.4443092241537000, -0.1518049939527350, 'Balham High Rd', '0208 6736676', 'SW12 9AU', '141 High Road', 'London', 'Greggs', true),\
		(90687, 53.3675258936768000, -2.7264650286906800, 'Widnes Widnes Rd', '0151 4236145', 'WA8 6BJ ', '101 Widnes Road', 'Widnes', 'Greggs', true),\
		(90688, 53.1917337326532000, -2.5275107570866700, 'Wnsford Wnsfrd Cross', '01606 594507', 'CW7 1BA ', '8 Dingle Walk', 'Cheshire', 'Greggs', true),\
		(90689, 53.3799309166697000, -2.2618904893916800, 'Wythnshw The Birtles', '0161 4362657', 'M22 5RF ', 'Unit 7, 18 The Birtles', 'Manchester', 'Greggs', true),\
		(90690, 52.4467779300000000, -1.8203835680000000, 'Acocks Grn Warwck Rd', '0121 7065124', 'B27 6BL ', '1144 Warwick Road', 'Birmingham', 'Greggs', true),\
		(90691, 52.4435709600000000, -1.8344170980000000, 'Acocks Grn Blvd East', '0121 7060310', 'B27 7RR ', '29 Olton Boulevard East', 'West Midlands', 'Greggs', true),\
		(90692, 52.4895788600000000, -1.8526832400000000, 'Birm Alum Rock Rd', '0121 3274844', 'B8 1HU  ', '164 Alum Rock Road', 'West Midlands', 'Greggs', true),\
		(90693, 53.0024369438369000, -1.1288985169642600, 'Arnold Front St', '0115 9265503', 'NG5 7EA ', '51 Front Street', 'Nottingham', 'Greggs', true),\
		(90694, 52.4654543700000000, -1.8900475160000000, 'Birm Highgate St', '0121 4401517', 'B12 0XR ', '130 Highgate Street', 'Birmingham', 'Greggs', true),\
		(90695, 52.4800571896308000, -1.4732284295312300, 'Bedworth All Saints', '02476 643317', 'CV12 8ND', '32 All Saints Square', 'Warwickshire', 'Greggs', true),\
		(90696, 52.9273502436663000, -1.2144101153487400, 'Beeston High Rd', '0115 9254435', 'NG9 2JP ', '18 High Road', 'Nottingham', 'Greggs', true),\
		(90697, 52.5651144322496000, -2.0780568228964200, 'Bilston Church St', '01902491328 ', 'WV14 0BJ', '102 Church Street', 'West Midlands', 'Greggs', true),\
		(90698, 54.5869095279159000, -1.3103938967939800, 'Norton High St', '01642 553662', 'TS20 1AH', '51 High Street', 'Stockton On Tees', 'Greggs', true),\
		(90699, 52.4756930300000000, -2.0399134920000000, 'Blackheath High St', '0121 5612147', 'B65 0DU ', '181 High Street', 'West Midlands', 'Greggs', true),\
		(90700, 52.6168854580563000, -2.0046537500900100, 'Bloxwich High St', '01922 476180', 'WS3 3LG ', '143 High Street', 'Staffordshire', 'Greggs', true),\
		(90701, 52.6467576373161000, -1.9330477912899100, 'Brownhills High St', '01543 376874', 'WS8 6EL ', '54 High Street', 'Staffordshire', 'Greggs', true),\
		(90702, 52.4803044900000000, -1.7396321150000000, 'Chelmsley SC Mpl Wlk', '01217709786 ', 'B37 5TS ', 'Unit 61, 9 Greenwood Square', 'Birmingham', 'Greggs', true),\
		(90703, 52.6299284732320000, -2.2016272426994700, 'Codsall Stn Rd', '01902 847708', 'WV8 1BX ', '18 Station Road', 'Staffordshire', 'Greggs', false),\
		(90704, 52.4165970000000000, -1.9301020660000000, 'Birm Watford Rd', '0121 4597828', 'B30 1JA ', '6 Watford Road', 'West Midlands', 'Greggs', true),\
		(90705, 53.5482413842238000, -2.2010510347627100, 'Middleton Mdleton SC', '0161 6544840', 'M24 4EL ', 'Unit G28, Middleton Shopping C', 'Manchester', 'Greggs', true),\
		(90706, 52.3944702974853000, -1.5063578026307800, 'Coventry Daventry Rd', '02476 503035', 'CV3 5HD ', '137 Daventry Road', 'Warwickshire', 'Greggs', true),\
		(90707, 52.4066515853176000, -1.5757812997759600, 'Coventry Jardne Cres', '02476 466896', 'CV4 9PQ ', '38 Jardine Crescent', 'Warwickshire', 'Greggs', true),\
		(90708, 52.4301058137421000, -1.5169024465104100, 'Coventry Jublee Cres', '02476 596039', 'CV6 3ES ', '118/120 Jubilee Crescent', 'Coventry', 'Greggs', true),\
		(90709, 52.4061882031126000, -1.5137680028193900, 'Coventry Shelton Sq', '02476 251357', 'CV1 1DG ', '7 Shelton Square', 'Coventry', 'Greggs', true),\
		(90710, 54.9034631035714000, -1.3848593780268900, 'Sdland Park Lane', '0191 5659485', 'SR1 3NX ', 'Park Lane Interchange', 'Sunderland', 'Greggs', true),\
		(90711, 51.6818652099168000, -4.1594567764615500, 'Llanelli St Elli SC', '01554 746623', 'SA15 1SH', 'Unit 2 St Elli Shopping Centr', 'Carmarthenshire', 'Greggs', false),\
		(90712, 52.4936778300000000, -1.8198246060000000, 'Birm Fox + Goose SC', '0121 7898193', 'B8 2EP  ', 'Unit 12 - 18 Fox & Goose S.c.', 'Birmingham', 'Greggs', true),\
		(90713, 52.4883138800000000, -1.7941038780000000, 'Birm Glebe Farm Rd', '0121 7840901', 'B33 9LZ ', '26 Glebe Farm Road', 'Birmingham', 'Greggs', true),\
		(90714, 52.5354179800000000, -1.9050581710000000, 'Perry Barr Thornbrdg', '0121 3573835', 'B42 2AB ', '97 Thornbridge Avenue', 'West Midlands', 'Greggs', true),\
		(90715, 52.5452001200000000, -1.9331575760000000, 'Grt Barr Scott Arms', '0121 3586316', 'B42 1TQ ', '944 Walsall Road', 'Birmingham', 'Greggs', true),\
		(90716, 52.4485746900000000, -2.0515714270000000, 'Halesowen Cornbow SC', '0121 5507586', 'B63 4AJ ', '6 Hagley Mall', 'West Midlands', 'Greggs', true),\
		(90717, 55.8846117248881000, -3.5104936737585800, 'Lvngstn 72 The CTR', '01506 443634', 'EH54 6NB', 'Mall Cafe', 'Livingston', 'Greggs', false),\
		(90718, 55.8534411725106000, -4.1998218839078400, 'Glas The Forge SC', '0141 5565710', 'G31 4EB ', 'Unit 39 East Mall', 'Glasgow', 'Greggs', false),\
		(90719, 52.3414073255903000, -1.5775945062460200, 'Kenilworth Warwck Rd', '01926 852258', 'CV8 1HN ', '19 Warwick Road', 'Kenilworth', 'Greggs', false),\
		(90720, 52.4941992000000000, -1.7504053240000000, 'Kingshurst The Pde', '0121 7888377', 'B37 6BB ', '45 The Parade', 'West Midlands', 'Greggs', false),\
		(90721, 52.5406407900000000, -1.8844342850000000, 'Kngstnd Hawthorn Rd', '0121 3826122', 'B44 8PP ', '208 Hawthorn Road', 'Birmingham', 'Greggs', true),\
		(90722, 52.5527960200000000, -1.8854053230000000, 'Kngstnd Kngstnd CTR', '0121 3553788', 'B44 9HH ', 'Unit 12, Kings Circle', 'Birmingham', 'Greggs', true),\
		(90723, 52.5522910400000000, -1.8838138200000000, 'Kngstnd Kngstnd Rd', '0121 3550514', 'B44 9SU ', '625 Kingstanding Road', 'Birmingham', 'Greggs', true),\
		(90724, 52.4961399532600000, -2.1681965831192900, 'Kngswnfd Market St', '01384 271565', 'DY6 9JU ', '20 Market Street', 'West Midlands', 'Greggs', true),\
		(90725, 52.6830568896323000, -1.8257335317371700, 'Lichfield Bakers Ln', '01543262085 ', 'WS13 6NF', '9 Bakers Lane', 'Staffordshire', 'Greggs', true),\
		(90726, 52.4065669200000000, -1.8871214060000000, 'Birm Alcester Rd Sth', '0121 4367186', 'B14 5JA ', '1013 Alcester Road South', 'West Midlands', 'Greggs', true),\
		(90727, 52.4168469800000000, -1.9679914510000000, 'Nthfield Nthfield SC', '01214768884 ', 'B31 2JU ', 'Unit 8 Northfield Shopping Cen', 'West Midlands', 'Greggs', true),\
		(90728, 52.4334916800000000, -2.0052363630000000, 'Birm Curdale Rd', '0121 4758840', 'B32 4HD ', '23 Curdale Road', 'Birmingham', 'Greggs', true),\
		(90729, 52.9563003180048000, -1.1471379002593400, 'Notham Victoria CTR', '0115 9474111', 'NG1 3QE ', 'Unit 32, Victoria Centre', 'Nottingham', 'Greggs', true),\
		(90730, 52.5236156223092000, -1.4675934044431100, 'Nuneaton Abbygte CTR', '02476 326587', 'CV11 4HD', '24 Harefield Road (aka Unit 33', 'Warwickshire', 'Greggs', true),\
		(90731, 52.6952151377209000, -2.4514707453060600, 'Oakengate SC', '01952612666 ', 'TF2 6EL ', '19 Market Street', 'Shropshire', 'Greggs', true),\
		(90732, 52.5683116890551000, -2.1675582575452200, 'Whmptn Warstones Dr', '01902 333753', 'WV4 4PP ', '17 Warstones Drive', 'Staffordshire', 'Greggs', true),\
		(90733, 52.4645945200000000, -1.7771109570000000, 'Birm The Radleys', '01217433786 ', 'B26 2UB ', '399 Sheldon Heath Rd', 'Birmingham', 'Greggs', true),\
		(90734, 52.3936643000000000, -2.0188393060000000, 'Rubery New Rd', '0121 4579130', 'B45 9JW ', '175 New Road', 'Birmingham', 'Greggs', true),\
		(90735, 53.4065421416286000, -2.9907354644211200, 'Lvrpool Castle St', '0151 2361565', 'L2  4SX ', '17 Castle Street', 'Liverpool', 'Greggs', true),\
		(90736, 51.5911035959981000, -0.1045063279516020, 'Turnpike Ln High Rd', '0208 8818324', 'N22 6BH ', '29 High Road', 'London', 'Greggs', true),\
		(90737, 52.4522979800000000, -1.7829117720000000, 'Sheldon Coventry Rd', '0121 7223305', 'B26 3JE ', '2178 Coventry Road', 'Birmingham', 'Greggs', true),\
		(90738, 52.4869577100000000, -1.9603421680000000, 'Smethwick Cape Hill', '01215580177 ', 'B66 4RX ', '25 Cape Hill', 'West Midlands', 'Greggs', true),\
		(90739, 52.4569742000000000, -1.8697304880000000, 'Sprkhl 409 Strtfd Rd', '0121 7727230', 'B11 4JZ ', '409 Stratford Road', 'Birmingham', 'Greggs', false),\
		(90740, 52.5487541400000000, -1.8416169140000000, 'Sut Coldfd Boldmere', '0121 3550318', 'B73 5TJ ', '88 Boldmere Road', 'West Midlands', 'Greggs', true),\
		(90741, 52.5618839500000000, -1.8256823250000000, 'Sut Coldfd Grcechrch', '0121 3552263', 'B72 1PH ', '102 The Parade', 'Sutton Coldfield', 'Greggs', true),\
		(90742, 52.4731588000000000, -1.7616245260000000, 'Tile Cross Bell Lane', '0121 7792217', 'B33 0HS ', '9 Bell Lane', 'West Midlands', 'Greggs', false),\
		(90743, 52.4932460400000000, -1.8318743140000000, 'Outlet Ward End', '01213275948 ', 'B8 2HQ  ', '638 Washwood Heath Road', 'Birmingham', 'Greggs', false),\
		(90744, 52.5524898052924000, -2.0205305212515500, 'Wednesbury Union St', '01215022879 ', 'WS10 7HD', '14 Union Street', 'West Midlands', 'Greggs', true),\
		(90745, 52.5998032901658000, -2.0821788397070000, 'Wdnsfld High St', '01902732456 ', 'WV11 1SZ', '62 High Street', 'Wolverhampton', 'Greggs', true),\
		(90746, 52.4374530000000000, -1.9713157960000000, 'Birm Weoley Cstle Rd', '0121 4762158', 'B29 5QL ', '144 Weoley Castle Road', 'Birmingham', 'Greggs', true),\
		(90747, 52.9319823594032000, -1.1271444628731100, 'Wst Brdgfrd Ctrl Ave', '0115 9811442', 'NG2 5GR ', '28 Central Avenue', 'West Bridgford', 'Greggs', true),\
		(90748, 52.5852550076978000, -2.0563226801476200, 'Willenhll Staffrd St', '01902 603299', 'WV13 1RT', '83 Stafford Street', 'West Midlands', 'Greggs', true),\
		(90749, 51.5337000702372000, -0.0273298735527710, 'Ldn Bow Roman Rd', '0208 9817896', 'E3  2RW ', '628 Roman Road', 'London', 'Greggs', true),\
		(90750, 54.3747740565492000, -1.7229393086904100, 'Catterick Rchmnd Wlk', '01748 832798', 'DL9 3EN ', 'Unit D Richmondshire Walk', 'North Yorkshire', 'Greggs', false),\
		(90751, 52.5849945171668000, -2.1259417888876300, 'Whmptn Mkt St', '01902 421913', 'WV1 3AG ', '24 Market Street', 'West Midlands', 'Greggs', true),\
		(90752, 51.4063935748905000, -3.2650246993595000, 'Barry 133 Holton Rd', '01446 732812', 'CF63 4HP', '133 Holton Road', 'South Glamorgan', 'Greggs', false),\
		(90753, 51.4052694580715000, -3.2691917997872900, 'Outlet Barry Holton', '01446 746009', 'CF63 4HE', '58 Holton Road', 'South Glamorgan', 'Greggs', false),\
		(90754, 51.4555722817719000, -2.5916299075488100, 'Bristol Wine St', '0117 9405611', 'BS1 2BD ', 'Vintry Building', 'Bristol', 'Greggs', true),\
		(90755, 50.7211142900000000, -1.8762501430000000, 'Bournemouth Christch', '01202 314670', 'BH1 1LL ', '60 Old Christchurch Road', 'Dorset', 'Greggs', false),\
		(90756, 51.5961933958869000, -2.9826599245565000, 'Newport Caerleon Rd', '01633 660110', 'NP19 7FW', '151 Caerleon Road', 'Gwent', 'Greggs', false),\
		(90757, 51.5734162014700000, -3.2203349783693500, 'Caerphily Cardiff Rd', '02920 882084', 'CF83 1FP', '47 Cardiff Road', 'Caerphilly', 'Greggs', false),\
		(90758, 51.5913973056537000, -2.7520082460222200, 'Caldicot Newport Rd', '01291 423355', 'NP26 4BG', '29 Newport Road', 'Gwent', 'Greggs', false),\
		(90759, 52.9971788555971000, -0.4097030889864010, 'Sleaford Southgate', '01529 303295', 'NG34 7RR', '42 Southgate', 'Lincolnshire', 'Greggs', false),\
		(90760, 52.2449594358582000, 0.7143517125660170, 'Bry Edmnds Abbeygate', '01284754001 ', 'IP33 1UN', '11 Abbeygate Street', 'Suffolk', 'Greggs', false),\
		(90761, 51.6311610487781000, 0.0034830852520280, 'Nth Chngfrd Stn Rd', '0208 5244826', 'E4  7BJ ', '25 Station Road', 'London', 'Greggs', true),\
		(90762, 51.4862305848042000, -3.1583214393993400, 'Roath Clifton St', '02920 255380', 'CF24 1PX', '20 Clifton Street', 'South Glamorgan', 'Greggs', true),\
		(90763, 51.5210091636075000, -3.1196389765399600, 'Llanrumney Cntsbury', '02920 251311', 'CF3 5SN ', '54/54a Countisbury Av.', 'Cardiff', 'Greggs', false),\
		(90764, 51.4813808291306000, -3.1980028112444400, 'Cardiff Cowbridge Rd', '02920 251026', 'CF11 9AJ', '205 Cowbridge Road East', 'Cardiff', 'Greggs', true),\
		(90765, 51.4813139103860000, -3.2441418542780200, 'Outlet Cardiff Grand', '02920 553951', 'CF5 4LE ', '75 Grand Avenue', 'Cardiff', 'Greggs', false),\
		(90766, 56.0586797302891000, -2.7183275763339300, 'Nth Berwick High St', '01620 892764', 'EH39 4HQ', '56 High Street', 'North Berwick', 'Greggs', false),\
		(90767, 51.4800338019595000, -3.1792035828280500, 'Cardiff St Marys St', '02920 668753', 'CF10 1AT', '1 St Mary Street', 'South Glamorgan', 'Greggs', true),\
		(90768, 51.6414260576269000, -2.6750451170708900, 'Chepstow High St', '01291 623210', 'NP16 5LQ', '20 High Street', 'Gwent', 'Greggs', false),\
		(90769, 51.6536282236648000, -3.0220205227674500, 'Cwmbran The Pde', '01633 484132', 'NP44 1QR', '7 The Parade', 'Gwent', 'Greggs', false),\
		(90770, 51.7798204530424000, -3.2072119591301900, 'Ebbw Vale Mkt St', '01495 301103', 'NP23 6HL', '21 Market Street', 'Gwent', 'Greggs', false),\
		(90771, 51.4344238949628000, -2.5680085965086900, 'Bristol Broadwalk SC', '01179 711804', 'BS4 2QU ', 'Unit 15 The Broadwalk Shopping', 'Bristol', 'Greggs', true),\
		(90772, 54.2323310711483000, -1.3417207300843200, 'Thirsk Mkt Pl', '01845 522800', 'YO7 1LH ', '36/38 Market Place', 'North Yorkshire', 'Greggs', true),\
		(90773, 51.6089481446474000, -3.6596065564270800, 'Maesteg Talbot St', '01656 738838', 'CF34 9BT', '8 Talbot Street', 'Mid Glamorgan', 'Greggs', false),\
		(90774, 51.6646866322762000, -3.9254649719243500, 'Morriston Wdfield St', '01792 791005', 'SA6 8AB ', '29 Woodfield Street', 'West Glamorgan', 'Greggs', false),\
		(90775, 51.5757789973944000, -3.9996081266273800, 'Mumbles Newton Rd', '01792 368353', 'SA3 4AU ', '14 Newton Road', 'Swansea', 'Greggs', true),\
		(90776, 52.4091257945417000, -1.5132358980649400, 'Coventry Smithfrd Wy', '02476 634127', 'CV1 1FY ', '25 Smithford Way', 'Warwickshire', 'Greggs', true),\
		(90777, 53.7967907664045000, -1.5358222552703100, 'Leeds Ctrl Bus Stn', '01132 436554', 'LS2 7HU ', 'Central Bus Station', 'West Yorkshire', 'Greggs', true),\
		(90778, 51.5883251128420000, -2.9965926736242000, 'Newport 31 High St', '01633 660444', 'NP20 1GH', '31 High Street', 'Gwent', 'Greggs', true),\
		(90779, 51.5945522753689000, -2.9302777369941500, 'Newport Ringland CTR', '01633 273037', 'NP19 9HG', '13 Ringland Centre', 'Gwent', 'Greggs', false),\
		(90780, 51.4389718440347000, -3.1751960931885200, 'Penarth Windsor Rd', '02920709542 ', 'CF64 1JH', '32 Windsor Road', 'Penarth', 'Greggs', false),\
		(90781, 51.7036123536826000, -3.0424513993426800, 'Pontypool George St', '01495 752406', 'NP4 6LR ', '9 George Street', 'Gwent', 'Greggs', false),\
		(90782, 53.5527009280583000, -1.4819239113956200, 'Barnsley Peel Sq', '01226 240499', 'S70 2QT ', '3 Peel Square', 'Barnsley', 'Greggs', true),\
		(90783, 51.6302238170810000, -0.7523850948671790, 'High Wycmbe Queen Sq', '01494 536884', 'HP11 2DF', '13/14 Queens Square', 'High Wycombe', 'Greggs', true),\
		(90784, 51.6116375105873000, -3.4077093600589400, 'Porth Hannah St', '01443 682202', 'CF39 9PY', '69 Hannah Street', 'Mid Glamorgan', 'Greggs', false),\
		(90785, 51.4594761529930000, -2.5545450325601600, 'Redfield Church St', '0117 9393953', 'BS5 9HL ', '209 Church Road', 'Bristol', 'Greggs', true),\
		(90786, 51.4812696951480000, -2.5052864898943600, 'Staple Hill Broad St', '01179 574925', 'BS16 5LP', '27 Broad Street', 'Bristol', 'Greggs', false),\
		(90787, 51.6194139456055000, -3.9443061102805200, 'Swansea Whitewalls', '01792 411069', 'SA1 3AA ', '8 Whitewalls', 'Swansea', 'Greggs', true),\
		(90788, 51.6217402413190000, -3.4537860378821300, 'Tonypandy Dunravn St', '01443 438374', 'CF40 1AL', '37 Dunraven Street', 'Mid Glamorgan', 'Greggs', false),\
		(90789, 51.7749364089055000, -3.2452885749177900, 'Tredegar Gwent SC', '01495 723557', 'NP22 3EJ', 'Unit 17, Gwent Shopping Centre', 'Gwent', 'Greggs', false),\
		(90790, 51.5129286075663000, -3.2194092662313700, 'Whitchurch Mrthyr Rd', '02920 626086', 'CF14 1DA', '19 Merthyr Road', 'Cardiff', 'Greggs', false),\
		(90791, 51.5404199237252000, -2.4123477644679000, 'Yate Yate SC', '01454 273147', 'BS37 4AS', '21 East Walk', 'Bristol', 'Greggs', true),\
		(90792, 51.5905419877981000, 0.0819931317953180, 'Barkingside High St', '0208 5504113', 'IG6 2AY ', '75/75(a) High Street', 'Ilford', 'Greggs', true),\
		(90793, 52.0571401665168000, -2.7142139150716900, 'Hereford Comm St', '01432 371426', 'HR1 2DB ', '14 Commercial Street', 'Hereford & Worcester', 'Greggs', true),\
		(90794, 54.9887213861834000, -1.4377394485895300, 'Outlet South Shields', '0191 4544300', 'NE33 5EA', '4 Frederick Street', 'South Shields', 'Greggs', false),\
		(90795, 51.7070122620074000, -0.0364439169664410, 'Cheshunt Turners Hil', '01992 624049', 'EN8 9DD ', '53 Turners Hill', 'Hertfordshire', 'Greggs', false),\
		(90796, 51.6175444048055000, -0.0181202026489460, 'Chingford Albrt Cres', '0208 5248554', 'E4 6SH  ', '4 Albert Crescent', 'Essex', 'Greggs', true),\
		(90797, 51.5789911904167000, -0.1241195017215110, 'Crouch End Broadway', '0208 3401170', 'N8 8DU  ', '29 The Broadway', 'London', 'Greggs', true),\
		(90798, 51.5389163157300000, 0.1270221962269730, 'Dagenham Woodwrd Rd', '0208 5925768', 'RM9 4SH ', '12 Woodward Road', 'London', 'Greggs', false),\
		(90799, 51.5474547030584000, -0.0758164971497060, 'Dalston Kingsland', '0207 2757722', 'E8 2JS  ', '61 Kingsland High Street', 'London', 'Greggs', true),\
		(90800, 51.6281055837797000, -0.0462537943379480, 'Lwr Edmontn Bnces Rd', '0208 8077853', 'N9 8LP  ', '235 Bounces Road', 'London', 'Greggs', true),\
		(90801, 51.6341011725430000, -0.0711255587993100, 'Bury St Wst Cambrdge', '0208 3603811', 'N9 9JJ  ', '8 Cambridge Terrace', 'London', 'Greggs', true),\
		(90802, 51.6124924183260000, -0.0645744278830790, 'Edmonton Fore St', '0208 8033613', 'N18 2XA ', '124 Upper Fore Street', 'London', 'Greggs', true),\
		(90803, 51.5362116569848000, 0.7134787135235070, 'Southend 67 High St', '01702 433395', 'SS1 1HZ ', '67 High Street', 'Essex', 'Greggs', false),\
		(90804, 53.4037786373366000, -2.9792244887557300, 'Lvrpool Bold St', '0151 7093974', 'L1  4DN ', '21 Bold Street', 'Liverpool', 'Greggs', true),\
		(90805, 51.6084696399565000, 0.1073947287572030, 'Chigwell Manford Way', '0208 5002166', 'IG7 4DJ ', '197 Manford Way', 'Essex', 'Greggs', true),\
		(90806, 51.6236920019949000, -0.0588246467768470, 'Lwr Edmontn Sth Mall', '0208 8073794', 'N9 0TT  ', '21 South Mall', 'London', 'Greggs', true),\
		(90807, 51.6623221791688000, -0.0784294089694650, 'Enfield Baker St', '0208 3676228', 'EN1 3LD ', '308 Baker Street', 'Middlesex', 'Greggs', true),\
		(90808, 51.4251976600000000, -0.0041577800000000, 'Ldn Bromly Bromly Rd', '0208 6981802', 'BR1 4PH ', '439 Bromley Road', 'Kent', 'Greggs', false),\
		(90809, 51.6369392747850000, -0.0807887105252560, 'Enfield Bush Hil Pde', '0208 3602920', 'EN1 2HB ', '9 Bush Hill Parade', 'Middlesex', 'Greggs', true),\
		(90810, 51.6569405104129000, -0.0476451826762420, 'Enfield 188 Hrtfd Rd', '0208 8041573', 'EN3 5AZ ', '188 Hertford Road', 'Middlesex', 'Greggs', true),\
		(90811, 51.6703764103159000, -0.0412392816557650, 'Enfield 638 Hrtfd Rd', '0208 8059879', 'EN3 5TD ', '638 Hertford Road', 'London', 'Greggs', false),\
		(90812, 51.5481768954077000, -0.0552617833708540, 'Ldn Hackney Mare St', '0208 5330473', 'E8 1HY  ', '387b Mare Street', 'London', 'Greggs', true),\
		(90813, 51.7576610997879000, 0.1126535881009100, 'Harlow Bush Fair SC', '01279 426376', 'CM18 6PA', '6 North House', 'Essex', 'Greggs', false),\
		(90814, 51.7968717702178000, -0.0772102398826430, 'Hertford Railway St', '01992 500884', 'SG14 1BG', '5/7 Railway Street', 'Hertfordshire', 'Greggs', false),\
		(90815, 51.5538218155955000, -0.0984546542288180, 'Highbury Highbury Pk', '0207 2263985', 'N5 1QJ  ', '3 Highbury Park', 'Lond0n', 'Greggs', true),\
		(90816, 51.5503680203855000, -0.1089838439768650, 'Holloway Hollowy Rd', '0207 6071421', 'N7 8JE  ', '132 Holloway Road', 'London', 'Greggs', true),\
		(90817, 51.5576970588864000, 0.0705095359092070, 'Ilford Chapel Rd', '0208 4787445', 'IG1 2AF ', '15 Broadway Parade', 'Essex', 'Greggs', true),\
		(90818, 51.5503879054441000, -0.1411769576075590, 'Kentish Town Kt Rd', '0207 4852464', 'NW5 2TJ ', '311 Kentish Town Road', 'Kentish Town', 'Greggs', true),\
		(90819, 51.6190401498725000, -0.1071127661524440, 'Palmers Grn Grn Lns', '0208 8867571', 'N13 5TT ', '308 Green Lanes', 'London', 'Greggs', true),\
		(90820, 51.5219125464071000, 0.0211573790941960, 'Plaistow Barking Rd', '0207 4765184', 'E13 8EE ', '353 Barking Road', 'London', 'Greggs', true),\
		(90821, 51.6432550584176000, -0.0385348795910620, 'Enfield Sth St', '0208 8042141', 'EN3 4QA ', '110 South Street', 'Middlesex', 'Greggs', true),\
		(90822, 54.8961654670511000, -2.9357672269165300, 'Carlisle Scotch St', '01228 527807', 'CA3 8PX ', '24 Scotch Street', 'Cumbria', 'Greggs', true),\
		(90823, 51.5285360939741000, -0.0476216524350850, 'Ldn Globe Twn Roman', '0208 9801624', 'E2 0RN  ', '112 Roman Road', 'London', 'Greggs', true),\
		(90824, 51.6063288097581000, 0.2186732532395020, 'Harold Hill Frnhm Rd', '01708 343450', 'RM3 8DX ', '4 Farnham Road', 'London', 'Greggs', false),\
		(90825, 51.5938306546328000, 0.0245795170507080, 'Sth Wdford George Ln', '0208 5188021', 'E18 1AY ', '168 George Lane', 'London', 'Greggs', true),\
		(90826, 51.6329483556569000, -0.1288012572749970, 'Southgate Chase Side', '0208 8826392', 'N14 5PA ', '58 Chaseside', 'London', 'Greggs', true),\
		(90827, 51.2726419732132000, 0.5252694987990910, 'Maidstone Chequers', '01622 678832', 'ME15 6AR', '208/209 Chequers Centre', 'Kent', 'Greggs', false),\
		(90828, 51.5418235680705000, -0.0004289422404210, 'Stratford West Mall', '0208 5031593', 'E15 1XE ', '52 The Mall', 'London', 'Greggs', true),\
		(90829, 51.5559242634334000, 0.2493419242800500, 'Upminster Bell Cornr', '01708 225067', 'RM14 2AT', '3 Bell Corner', 'Essex', 'Greggs', false),\
		(90830, 51.5366269958543000, 0.0345418436266330, 'Upton Park Grn St', '020 85521343', 'E13 9AP ', '380 Green Street', 'London', 'Greggs', true),\
		(90831, 51.6861912818917000, -0.0335401421971640, 'Waltham Cross High S', '01992 633191', 'EN8 7AN ', '117 High Street', 'Hertfordshire', 'Greggs', false),\
		(90832, 51.4887062154448000, -0.0956482794170820, 'Ldn Walwrth Wlwrth R', '0207 7034102', 'SE17 1RL', '273 Walworth Road', 'London', 'Greggs', true),\
		(90833, 51.5782363080956000, 0.0262100605515680, 'Wanstead High St', '0208 9897094', 'E11 2AE ', '85 High Street', 'London', 'Greggs', true),\
		(90834, 51.5014836757332000, -0.1117141334913240, 'Ldn Wtrloo 109 L Msh', '0207 2610310', 'SE1 7AB ', '109 Lower Marsh St', 'London', 'Greggs', true),\
		(90835, 51.5960135385080000, -0.1095285757564260, 'Wood Green Broadway', '0208 8819067', 'N22 6DS ', '7 The Broadway', 'London', 'Greggs', true),\
		(90836, 54.5438334695036000, -1.9234841355043000, 'Barnard Castle Horse', '01833 638177', 'DL12 8LY', '11 Horsemarket', 'Durham', 'Greggs', true),\
		(90837, 55.7702476558990000, -2.0041024462665600, 'Berwick Marygate', '01289 302340', 'TD15 1BN', '26 Marygate', 'Northumberland', 'Greggs', true),\
		(90838, 51.5990148669477000, 0.1609904613178260, 'Romfrd Collier Row', '01708 741216', 'RM5 3PA ', '40 Collier Row Road', 'Romford', 'Greggs', false),\
		(90839, 53.3262408580554000, -2.2319089385697700, 'Wilmslow Grove St', '01625 524139', 'SK9 1DT ', '47 Grove Street', 'Cheshire', 'Greggs', true),\
		(90840, 56.0723913043424000, -3.4595788339980400, 'Dunfmlne Kingsgte SC', '01383 620218', 'KY12 7QA', 'Unit 3 Kingsgate Shopping Ctr', 'Fife', 'Greggs', false),\
		(90841, 51.5583470826551000, -0.1181021489231570, 'Seven Sisters SS Rd', '0207 7007956', 'N7 6AG  ', '24-26 Seven Sisters Road', 'London', 'Greggs', true),\
		(90842, 54.7763909246964000, -1.5753157016592100, 'Durham Saddler St', '0191 3843469', 'DH1 3NP ', '2/3 Saddler Street', 'Co Durham', 'Greggs', true),\
		(90843, 53.7996553884199000, -1.5445357740659000, 'Leeds Light Headrow', '0113 2468470', 'LS1 8EQ ', '5 The Light (66 The Headrow)', 'Leeds', 'Greggs', true),\
		(90844, 55.7747398273150000, -4.0365739594180400, 'Hamilton New Cross', '01698 457878', 'ML3 6AH ', '1a New Cross Centre', 'Strathclyde', 'Greggs', false),\
		(90845, 54.6836497247019000, -1.2137826831135300, 'Hartpl 175 Midltn Gr', '01429 265673', 'TS24 7RR', '175 Middleton Grange', 'Cleveland', 'Greggs', true),\
		(90846, 51.6033214291862000, -0.1915216893670010, 'Finchley Ballards Ln', '0208 3468727', 'N3 1XP  ', '25 Ballards Lane', 'Finchley', 'Greggs', true),\
		(90847, 53.4196853859935000, -3.0433307074746000, 'Wallasey Liscard Way', '0151 6398741', 'CH44 5TP', '20 Liscard Way', 'Wirral', 'Greggs', true),\
		(90848, 51.5468076354364000, -0.4795270162011570, 'Uxbrdge 152 High St', '01895 271578', 'UB8 1JY ', '152 High Street', 'Uxbridge', 'true', false),\
		(90849, 52.4289180925776000, -1.4993550158220400, 'Coventry Foleshll Rd', '02476 688238', 'CV6 5AU ', '507 Foleshill Road', 'West Midlands', 'Greggs', true),\
		(90850, 51.5213470372382000, -0.6257106445847910, 'Slough Buckingham SC', '01753 534152', 'SL1 4RD ', '171 Buckingham Avenue', 'Berkshire', 'Greggs', true),\
		(90851, 51.5781444445818000, 0.1813035821519190, 'Romfrd Quadrant Arc', '01708 739285', 'RM1 3ED ', '1-3 Quadrant Arcade', 'Essex', 'Greggs', true),\
		(90852, 55.1675738833188000, -1.6889042714566200, 'Morpeth Bridge St', '01670 512179', 'NE61 1NT', '23 Bridge Street', 'Northumberland', 'Greggs', true),\
		(90853, 53.5911475532268000, -0.6497341484404810, 'SCnthrpe 133 High St', '01724 864981', 'DN15 6LP', '133 High Street', 'N. Lincs', 'Greggs', true),\
		(90854, 52.5358774983060000, -2.4202889638020700, 'Bridgnorth High St', '01746 763470', 'WV16 4DB', '24 High Street', 'Shropshire', 'Greggs', true),\
		(90855, 54.9730769474343000, -1.6130643387059300, 'Ncl Grey St', '0191 2323536', 'NE1 6EG ', '95 Grey Street', 'Newcastle Upon Tyne', 'Greggs', true),\
		(90856, 54.9694246324002000, -1.6175200156928000, 'Ncl Neville St', '0191 2329620', 'NE1 5DF ', '42 Neville Street/1 Pink Lane', 'Tyne & Wear', 'Greggs', true),\
		(90857, 55.9588284484376000, -3.2109138068136400, 'Edin Raeburn Pl', '0131 3326377', 'EH4 1HU ', '27a Raeburn Place', 'Edinburgh', 'Greggs', false),\
		(90858, 54.1368769754297000, -1.5235814225417100, 'Ripon Market Pl Nth', '01765 603910', 'HG4 1BW ', '18 Market Place North', 'Yorkshire', 'Greggs', true),\
		(90859, 53.3420266407154000, -1.3513762526437800, 'Shfield 27 Crystl Pk', '01142 478363', 'S20 7PQ ', 'Unit 27, 5 Crystal Peaks Cntr', 'Sheffield', 'Greggs', false),\
		(90860, 53.9616967000000000, -2.0173236420000000, 'Skipton High St', '01756 793072', 'BD23 1JP', '60 High Street', 'North Yorkshire', 'Greggs', true),\
		(90861, 51.3786523631983000, -0.2422777702659430, 'Worcester Pk Ctrl', '0208 3373296', 'KT4 8DY ', '125 Central Road', 'Surrey', 'Greggs', false),\
		(90862, 56.3401154422731000, -2.7975830513537700, 'St Andrews Mkt St', '01334 473887', 'KY16 9PD', '116/118 Market Street', 'St Andrews', 'Greggs', false),\
		(90863, 54.9057896322488000, -1.3846679633415200, 'Sdland Cafe Bridges', '0191 5674957', 'SR1 3LB ', 'Cafe Mall, The Bridges SC', 'Tyne & Wear', 'Greggs', true),\
		(90864, 52.9032805209243000, -1.1778251406444100, 'Clifton Southchurch', '0115 9211881', 'NG11 8AA', '230 & 232 Southchurch Drive', 'Nottingham', 'Greggs', false),\
		(90865, 54.3392761402284000, -1.4347135988201800, 'Nthallerton High St', '01609 773347', 'DL7 8LF ', '185 High Street', 'North Yorkshire', 'Greggs', true),\
		(90866, 53.9595824621776000, -1.0815181037822100, 'York St Sampsons Sq', '01904 630573', 'YO1 8RR ', '15 St Sampsons Square', 'York', 'Greggs', true),\
		(90867, 53.9587211690245000, -1.0793728495559000, 'York Pavement', '01904 632645', 'YO1 9UP ', '18 The Pavement', 'York', 'Greggs', true),\
		(90868, 52.4749047400000000, -1.9690097030000000, 'Smethwick Bearwod SC', '0121 4202248', 'B66 4BH ', '573 Bearwood Road', 'West Midlands', 'Greggs', true),\
		(90869, 52.4574376691242000, 1.5624266818819800, 'Beccles Newmarket', '01502 717125', 'NR34 9HD', '13 Newmarket', 'Suffolk', 'Greggs', false),\
		(90870, 51.4971929499760000, -0.1341070670010550, 'Ldn Vic Strutton Gr', '0207 2225541', 'SW1P 2HP', '12 Strutton Ground', 'London', 'Greggs', true),\
		(90871, 53.8176912728664000, -3.0529665597258800, 'Blpool Chrch St', '01253 625100', 'FY1 1HP ', '72/74 Church Street', 'Blackpool', 'Greggs', true),\
		(90872, 55.6170949379692000, -2.8077162131678000, 'Galashiels Chnnel St', '01896 753100', 'TD1 1BJ ', '15 Channel Street', 'Selkirkshire', 'Greggs', false),\
		(90873, 52.5173415300000000, -1.8212753090000000, 'Erdngtn 634 Kngsbry', '0121 3737014', 'B24 9PJ ', '634 Kingsbury Road', 'West Midlands', 'Greggs', true),\
		(90874, 53.5653348648406000, -0.0888759913854580, 'Grimsby Friargate Pl', '01472 343195', 'DN31 1ED', '32 Friargate (unit D16)', 'South Humberside', 'Greggs', false),\
		(90875, 52.0435632566905000, 0.9541921734470390, 'Hadleigh High St', '01473 823252', 'IP7 5AL ', '58 High Street', 'Suffolk', 'Greggs', false),\
		(90876, 51.4402360212213000, -0.3869529931024740, 'Hanworth Market Pde', '0208 8949794', 'TW13 6AL', '8/8a Market Place', 'Hanworth', 'Greggs', true),\
		(90877, 52.3302924883966000, -0.1827549188781500, 'Huntingdon High St', '01480 453943', 'PE29 3LG', '123(b) High Street', 'Cambridgeshire', 'Greggs', false),\
		(90878, 52.0567353221139000, 1.1564126653970900, 'Ipswich Brook St', '01473 258518', 'IP4 1ED ', '35/35a Upper Brook Street', 'Suffolk', 'Greggs', false),\
		(90879, 52.3882967699201000, -2.2489531606500900, 'Kddminster Swan SC', '01562 822703', 'DY10 2AZ', '19 Bull Ring', 'Kidderminster', 'Greggs', false),\
		(90880, 56.1151571978927000, -3.7917348565238800, 'Alloa High St', '01259 218008', 'FK10 1JE', '8 High Street', 'Clackmannanshire', 'Greggs', false),\
		(90881, 52.7543431529662000, 0.3950372977784860, 'Kngs Lynn High St', '01553 763646', 'PE30 1BL', '93 High Street', 'Norfolk', 'Greggs', false),\
		(90882, 52.0363593001203000, -2.4223062137952100, 'Ledbury High St', '01531632055 ', 'HR8 1DS ', '2 High Street', 'Hereford & Worcester', 'Greggs', false),\
		(90883, 52.6349217845490000, -1.1341602730487300, 'Leicestr Mkt Pl', '01162626421 ', 'LE1 5GF ', '50 Market Place', 'Leicester', 'Greggs', true),\
		(90884, 53.2363522032650000, -0.5385836330738150, 'Lincoln Bailgate', '01522 525905', 'LN1 3AP ', '23 Bailgate', 'Lincolnshire', 'Greggs', true),\
		(90885, 52.7716979163981000, -1.2067493083761200, 'Loughboro Market Pl', '01509 233744', 'LE11 3EA', '15 Market Place', 'Leicestershire', 'Greggs', true),\
		(90886, 51.9161515606007000, -0.4701217697411070, 'Luton Sundon Pk Pde', '01582 597701', 'LU3 3BH ', '13 Sundon Park Parade', 'Bedfordshire', 'Greggs', false),\
		(90887, 52.6748884619655000, -2.4469720521113100, 'Telford SC Southwatr', '01952 210247', 'TF3 4DE ', '54 Southwater', 'Shropshire', 'Greggs', true),\
		(90888, 54.9930172217603000, -1.6988511010186400, 'Ncl Wst Denton Wy', '0191 2678822', 'NE5 2QZ ', 'Unit 10 Denton Park SC', 'Newcastle upon Tyne', 'Greggs', true),\
		(90889, 52.7643935183042000, -0.8861983762259260, 'Melton Mowbry Mkt Pl', '01664 566090', 'LE13 1XD', '26 Market Place', 'Leicestershire', 'Greggs', true),\
		(90890, 51.4632789416302000, -0.1681270299259700, 'Clap Jnc St Johns Rd', '0207 5852056', 'SW11 1PN', '22 St Johns Road', 'London', 'Greggs', true),\
		(90891, 52.7688509135489000, -2.3791627158979000, 'Newport 63 High St', '01952810453 ', 'TF10 7AU', '63 High Street', 'Shropshire', 'Greggs', false),\
		(90892, 52.6361373917210000, 1.2948145658034700, 'Norwch Anglia Sq', '01603 621943', 'NR3 1DY ', '4/5 Anglia Square', 'Norfolk', 'Greggs', false),\
		(90893, 52.6245822346822000, 1.2915221323139500, 'Norwch St Stephens', '01603 623507', 'NR1 3QR ', '57 St Stephens Street', 'Norfolk', 'Greggs', false),\
		(90894, 54.9462429352751000, -1.6774694123536000, 'Whickham St Marys Gr', '0191 4889310', 'NE16 4DN', '3 Saint Marys Green', 'Whickham', 'Greggs', true),\
		(90895, 51.4036692800000000, 0.1062759920000000, 'Orpington Cotmandene', '0208 3003229', 'BR5 2RB ', '113 Cotmandene Crescent', 'Orpington', 'Greggs', false),\
		(90896, 52.2279375704559000, -0.2709404300306000, 'St Neots Mkt Sq', '01480 472214', 'PE19 2AR', '15 Market Square', 'Cambridgeshire', 'Greggs', false),\
		(90897, 51.4964816552754000, -0.0827614517418210, 'Ldn Brmndsy Tower Br', '0207 4033010', 'SE1 4TW ', '79 Tower Bridge Road', 'London', 'Greggs', true),\
		(90898, 51.4623894549823000, -0.1142928240377560, 'Ldn Brixton Electric', '0207 7334551', 'SW9 8JX ', '4 Electric Avenue', 'London', 'Greggs', true),\
		(90899, 52.8066065462248000, -2.1176374920833900, 'Stafford Greengte St', '01785 258394', 'ST16 2JE', '58 Greengate Street', 'Staffordshire', 'Greggs', true),\
		(90900, 51.3789368567510000, -0.1031104249598230, 'Wst Crydn Ldn Rd', '0208 6801731', 'CR0 2TA ', '10 London Road', 'West Croydon', 'Greggs', true),\
		(90901, 52.1871494446972000, 0.9970819816753060, 'Stowmarket Ipswich S', '01449 612752', 'IP14 1AH', '17-19 Ipswich Street', 'Suffolk', 'Greggs', false),\
		(90902, 52.4136985251897000, 0.7490008090836410, 'Thetford King St', '01842 752333', 'IP24 2AN', '13-17 King Street', 'Norfolk', 'Greggs', false),\
		(90903, 52.5175118600000000, -1.9933838580000000, 'West Brom Sndwel CTR', '0121 5535959', 'B70 7NN ', 'Unit 25 Kings Square', 'West Midlands', 'Greggs', true),\
		(90904, 52.6657746967567000, 0.1617362509049000, 'Wisbech The Hrsefair', '01945 587883', 'PE13 1AR', 'Unit 11, The Horsefair', 'Cambridgeshire', 'Greggs', false),\
		(90905, 53.0467265801752000, -2.9956191752830800, 'Wrexham Regent St', ' 01978365376', 'LL11 1SA', '38 Regent Street', 'Clwyd', 'Greggs', true),\
		(90906, 51.4903004302339000, 0.1210994949551470, 'Abbey Wood Wilton Rd', '0208 3111221', 'SE2 9RH ', '7 Wilton Road', 'London', 'Greggs', false),\
		(90907, 51.6704067555741000, -1.2822186546621700, 'Abingdon Bury St', '01235 520137', 'OX14 3QY', '7 Bury Street', 'Oxfordshire', 'Greggs', false),\
		(90908, 51.1483378431219000, -0.9766875193130560, 'Alton High St', '01420 82518 ', 'GU34 1ET', '56 High Street', 'Hampshire', 'Greggs', false),\
		(90909, 51.6775684882549000, -0.6063069013332070, 'Amersham Sycamore Rd', '01494 432748', 'HP6 5DR ', '42 Sycamore Road', 'Buckinghamshire', 'Greggs', false),\
		(90910, 51.5377109192824000, 0.0788888889935850, 'Barking East St', '0208 5943752', 'IG11 8EJ', '59 East Street', 'London', 'Greggs', true),\
		(90911, 51.5749421263201000, 0.4228798046767750, 'Laindon Laindon SC', '01268 544309', 'SS15 5TG', '7 Laindon Centre', 'Essex', 'Greggs', false),\
		(90912, 52.9502090656135000, -1.1476446655559300, 'Notham Broadm Tanner', '0115 9589842', 'NG1  7LG', '37 Tanners Walk', 'Nottinghamshire', 'Greggs', true),\
		(90913, 51.5663127209240000, 0.5040521048309470, 'Pitsea Northlands', '01268 551688', 'SS13 3DU', '5 Northlands Pavement', 'Essex', 'Greggs', false),\
		(90914, 51.4535006409964000, -0.4300811601947430, 'Feltham Staines Rd', '0208 8907136', 'TW14 8BT', '382 Staines Road', 'Middlesex', 'Greggs', true),\
		(90915, 50.9146851956637000, -1.3606311397590300, 'Soton Bitterne Rd', '02380 447062', 'SO18 5RR', '381/383 Bitterne Road', 'Hampshire', 'Greggs', false),\
		(90916, 51.8786022072732000, 0.5499239044994460, 'Braintree George Yd', '01376 553055', 'CM7 1RB ', 'Unit 8B, 5 George Yard', 'Essex', 'Greggs', false),\
		(90917, 51.6198552539644000, 0.3012743890959560, 'Brentwood 68 High St', '01277 210177', 'CM14 4AN', '68/70 High Street', 'Essex', 'Greggs', false),\
		(90918, 51.5223477842103000, 0.5920441829426260, 'Canvey Furtherwick', '01268 683650', 'SS8 7AE ', '30 Furtherwick Road', 'Essex', 'Greggs', false),\
		(90919, 51.3837328680185000, 0.5256183474285690, 'Chatham Pentagon SC', '01634 406677', 'ME4 4HP ', 'Unit 58, 80 The Pentagon Centr', 'Kent', 'Greggs', false),\
		(90920, 51.7165906825957000, 0.4751388867105770, 'Chelmsford Glouc Ave', '01245 352136', 'CM2 9LG ', '146/146(a) Gloucester Avenue', 'Essex', 'Greggs', false),\
		(90921, 51.7052796597583000, -0.6122575529339730, 'Chesham High St', '01494 782843', 'HP5 1BW ', '49 High Street', 'Buckinghamshire', 'Greggs', true),\
		(90922, 51.3671004663889000, -0.3072515027574880, 'Chessington Hook Rd', '0208 3971093', 'KT9 1NU ', '332 Hook Road', 'Surrey', 'Greggs', false),\
		(90923, 51.4926273309348000, -0.2624585644515200, 'Chiswick Chis High R', '0208 9944538', 'W4 5TA  ', '364/366 Chiswick High Road', 'London', 'Greggs', true),\
		(90924, 51.7892733434955000, 1.1529205192988900, 'Clacton Stn Rd', '01255 429454', 'CO15 1TD', '19 Station Road', 'Essex', 'Greggs', false),\
		(90925, 51.8893213982491000, 0.8971278939117270, 'Colchester High St', '01206 542967', 'CO1 1DA ', '16 High Street', 'Essex', 'Greggs', true),\
		(90926, 54.9923526682694000, -1.6047361352225200, 'Jesmond Acorn Rd', '0191 2814726', 'NE2 2DJ ', '34 Acorn Road', 'Newcastle Upon Tyne', 'Greggs', true),\
		(90927, 51.5247158158749000, 0.4466669999001040, 'Corringham Grover Wk', '01375 672081', 'SS17 7LP', '19 Grover Walk(and 39 Grover W', 'Essex', 'Greggs', false),\
		(90928, 51.7317475576136000, -1.2177095206856000, 'Oxford Templars Sq', '01865 779253', 'OX4 3XH ', '121 Pound Way', 'Oxford', 'Greggs', true),\
		(90929, 51.1157843991060000, -0.1857329133798640, 'Crawley Queensway', '01293 525707', 'RH10 1EB', '17 Queensway', 'West Sussex', 'Greggs', true),\
		(90930, 51.4511977582858000, 0.1795213506511350, 'Crayford Crayford Rd', '01322 523189', 'DA1 4HA ', '185 Crayford Road', 'Kent', 'Greggs', false),\
		(90931, 51.4923771779548000, -0.1929481250438220, 'Ldn Earls Crt Rd', '0207 3701043', 'SW5 9RD ', '183 Earls Court Road', 'London', 'Greggs', true),\
		(90932, 52.0811023736728000, 0.4408624691625330, 'Haverhill High St', '01440 761673', 'CB9 8AH ', '30 High Street', 'Suffolk', 'Greggs', false),\
		(90933, 51.4466081198695000, -0.4110629701802350, 'Feltham The Centre', '0208 8906264', 'TW13 4AU', '22c The Centre', 'Hounslow', 'Greggs', true),\
		(90934, 51.4422668679767000, 0.3677699498516160, 'Gravesend Thamesgate', '01474 567667', 'DA11 0AF', 'Unit 9 Thamesgate Centre', 'Kent', 'Greggs', false),\
		(90935, 51.7177022459763000, 0.5012027859964280, 'Grt Baddow Vineyards', '01245 472632', 'CM2 7QS ', '12 Vineyards Centre', 'Essex', 'Greggs', false),\
		(90936, 50.8566284294402000, 0.5818587143398240, 'Hastings Queens Rd', '01424 437079', 'TN34 1QY', '13 Queens Road', 'Sussex', 'Greggs', false),\
		(90937, 54.6644048887398000, -1.6761230715360300, 'Bish Aucklnd Newg SC', '01388664256 ', 'DL14 7JQ', 'Unit 2 Newgate Centre', 'Co Durham', 'Greggs', true),\
		(90938, 50.9966858264432000, -0.1017815357290030, 'Haywards Hth South R', '01444 457397', 'RH16 4LA', '28/30 South Road', 'Haywards Heath', 'Greggs', false),\
		(90939, 50.9140855822264000, -1.3029723647449100, 'Soton Hedge End', '01489 783836', 'SO30 4FN', '3(a) Lower Northam Road', 'Hampshire', 'Greggs', false),\
		(90940, 51.7313232851944000, 0.6771993653747220, 'Maldon High St', '01621 856724', 'CM9 5PN ', '34 High Street', 'Essex', 'Greggs', false),\
		(90941, 51.3410315991477000, -0.0140907319844040, 'New Adingtn Ctrl Pde', '01689 842636', 'CR0 0JD ', '33/33(a) Central Parade', 'Croydon', 'Greggs', false),\
		(90942, 51.7000110554057000, 0.1120943332254880, 'Epping High St', '01992 576892', 'CM16 4BP', '257 High Street', 'Essex', 'Greggs', false),\
		(90943, 51.3998344852939000, -0.2552238509166080, 'New Malden High St', '0208 9421963', 'KT3 4EP ', '146/148 High Street', 'Surrey', 'Greggs', true),\
		(90944, 51.3763119600000000, 0.0993008710000000, 'Orpington 238 High S', '01689 890336', 'BR6 0LS ', '238 High Street', 'Kent', 'Greggs', false),\
		(90945, 51.5223650218968000, -0.1713498730397110, 'Ldn Paddington Chrch', '0207 7233054', 'NW8 8HA ', '109 Church Street', 'Greater London', 'Greggs', true),\
		(90946, 51.1807695560386000, 0.3887708435111300, 'Paddock Wood Comm Rd', '01892 833732', 'TN12 6EN', '43 Commercial Road', 'Kent', 'Greggs', false),\
		(90947, 51.4149826116820000, -0.0523055180075360, 'Penge High St', '0208 7783300', 'SE20 7DS', '139 High Street', 'London', 'Greggs', true),\
		(90948, 51.0053376192538000, -0.9380753942822020, 'Petersfld Chapel St', '01730 263450', 'GU32 3DY', '23/23(a) Chapel Street', 'East Hampshire', 'Greggs', false),\
		(90949, 51.5859143817638000, 0.6058106773892480, 'Rayleigh High St', '01268 747686', 'SS6 7EJ ', '81 High Street', 'Essex', 'Greggs', false),\
		(90950, 51.4983380422575000, -0.1354289988390500, 'Ldn Vic Palmer St', '0207 2225594', 'SW1H 0PH', 'Unit1 29/31 Palmer Street', 'London', 'Greggs', true),\
		(90951, 51.4548080864178000, -0.9758960386200460, 'Reading Broad St', '01189 580223', 'RG1 7QE ', '16 Broad Street Mall', 'Berks', 'Greggs', true),\
		(90952, 51.5824013999115000, 0.7069339470027470, 'Rochford West St', '01702 545221', 'SS4 1AL ', '12 West Street', 'Essex', 'Greggs', false),\
		(90953, 51.7984509702090000, -3.1752545657748800, 'Brynmawr Beaufort St', '01495 315302', 'NP23 4AB', '30 Beaufort Street', 'Gwent', 'Greggs', false),\
		(90954, 51.4406465257467000, 0.7611130671524420, 'Sheerness High St', '01795 662555', 'ME12 1NL', '52-54 High Street', 'Kent', 'Greggs', false),\
		(90955, 51.4261878631946000, 0.1037582877091040, 'Sidcup High St', '02083090162 ', 'DA14 6ED', '51 High Street', 'Sidcup', 'Greggs', false),\
		(90956, 51.5536500374884000, 0.5590562836114550, 'Benfleet High Rd', '01268 753584', 'SS7 5HA ', '281 High Road', 'South Benfleet', 'Greggs', false),\
		(90957, 51.6270626467547000, -0.3872705626900040, 'South Oxhey St Andrw', '0208 4212522', 'WD19 7AD', '3/5 St Andrews Road', 'South Oxhey', 'Greggs', false),\
		(90958, 51.4037213100000000, 0.0148490690000000, 'Bromley 112 High St', '0208 3130469', 'BR1 1HG ', '112 High Street', 'London', 'Greggs', false),\
		(90959, 51.2361696308585000, -0.5747340642061480, 'Guildford North St', '01483 458083', 'GU1 4TE ', '42/43 North Street', 'Guildford', 'Greggs', false),\
		(90960, 51.5998402852263000, -1.1242529872211400, 'Wallingford Mkt Pl', '01491 836267', 'OX10 0EG', '5-6 Market Place', 'Oxon', 'Greggs', false),\
		(90961, 52.5423583344093000, -1.3718919349582400, 'Hinckley Britania SC', '01455 615035', 'LE10 1RU', 'Unit 16 Britannia Centre', 'Leicestershire', 'Greggs', false),\
		(90962, 51.5887912478943000, -1.4260162304022200, 'Wantage Victoria Cr', '01235 762776', 'OX12 8AR', 'Units 1,2 & 4, Victoria Cross', 'Oxfordshire', 'Greggs', false),\
		(90963, 54.1960691213430000, -3.0956888831146700, 'Ulverston Mkt St', '01229 587931', 'LA12 7AY', '15 Market Place', 'Cumbria', 'Greggs', true),\
		(90964, 51.6128408052688000, 0.5209999747387220, 'Wickford High St', '01268 733404', 'SS12 9AZ', '26 High Street', 'Essex', 'Greggs', false),\
		(90965, 53.3900783122756000, -2.5950387567767200, 'Warringtn Golden Sq', '01925 576492', 'WA1 1QE ', 'Unit 88 The Mall', 'Warrington', 'Greggs', true),\
		(90966, 54.6638296336156000, -3.3659070063059500, 'Cockermouth Main St', '01900 828596', 'CA13 9LU', '54 Main Street', 'Cumbria', 'Greggs', true),\
		(90967, 54.9201074437164000, -1.4013460639905100, 'Southwick The Green', '0191 5498731', 'SR5 2JE ', 'Unit 9 The Green', 'Sunderland', 'Greggs', false),\
		(90968, 51.9018817505722000, -0.2023483259419060, 'Stevenage Town Sq', '01438 314568', 'SG1 1BP ', '27 Town Square', 'Herts', 'Greggs', false),\
		(90969, 51.7997547112749000, 0.6397825854872350, 'Witham Newlands', '01376 513366', 'CM8 2BB ', '52/54 Newlands Centre', 'Essex', 'Greggs', false),\
		(90970, 51.4527937004881000, -0.9052052131226350, 'Woodley Crockhamwell', '01189 693934', 'RG5 3JH ', '140/142 Crockhamwell Road', 'Berkshire', 'Greggs', false),\
		(90971, 51.5146484307267000, -0.2496729914385590, 'Acton Old Oak Com Ln', '0208 7435773', 'W3 7DD  ', '69 Old Oak Common Lane', 'London', 'Greggs', true),\
		(90972, 51.6545835937118000, -3.0207265548898000, 'Cwmbran Gwent Sq', '01633 860239', 'NP44 1PN', 'Unit 7 Gwent Square', 'Newport', 'Greggs', false),\
		(90973, 51.3712974651615000, -0.4885802123106400, 'Addlestone Stn Rd', '01932 842067', 'KT15 2AD', '94 Claudia Parade', 'Addlestone', 'Greggs', false),\
		(90974, 51.4338064264742000, -0.4653126955991760, 'Ashford Mx Grove Hse', '01784 256450', 'TW15 2UD', '7 Grove House', 'Surrey', 'Greggs', false),\
		(90975, 51.4689317111698000, -0.1707802315765450, 'Battersea Falcon Rd', '0207 2287504', 'SW11 2PH', '29 Falcon Road', 'Battersea', 'Greggs', true),\
		(90976, 53.7342954016037000, -0.3686108617220270, 'Hull Hessle Rd', '01482 580343', 'HU3 4EJ ', '361 Hessle Road', 'Hull', 'Greggs', false),\
		(90977, 51.4829184276091000, -0.3081657688829030, 'Brentford High St', '0208 5607248', 'TW8 8AT ', '115 High Street', 'Middlesex', 'Greggs', true),\
		(90978, 55.9456656404482000, -3.1914642922467300, 'Edin Forrest Rd', '0131 2263953', 'EH1 2QP ', '43 Forrest Road', 'Edinburgh', 'Greggs', false),\
		(90979, 51.4005237000000000, 0.0172388590000000, 'Bromley 15 High St', '0208 4600272', 'BR1 1LF ', '15 High Street', 'Kent', 'Greggs', false),\
		(90980, 51.6012289859336000, -0.2668069459757470, 'Burnt Oak Watlng Ave', '0208 9526435', 'HA8 0LQ ', '3 Watling Avenue', 'Middlesex', 'Greggs', true),\
		(90981, 51.4731867602648000, -0.0935443587445140, 'Ldn Cmberwll Denmark', '0207 7371093', 'SE5 8RZ ', '18 & 20 Denmark Hill', 'London', 'Greggs', true),\
		(90982, 51.1950494398468000, 0.2742724017703360, 'Tonbridge 86 High St', '01732 352248', 'TN9 1AP ', '86/86a High Street', 'Kent', 'Greggs', false),\
		(90983, 51.5195893963979000, -0.6446737317415970, 'Cippenham Bath Rd', '01628 661400', 'SL1 5QL ', '413/413a Bath Road', 'Berkshire', 'Greggs', true),\
		(90984, 51.4625477663340000, -0.1371328708278030, 'Ldn Clapham High St', '0207 6221231', 'SW4 7UG ', '166 Clapham High Street', 'London', 'Greggs', true),\
		(90985, 51.3807651540528000, -0.0724257700219050, 'Crydn Lwr Addiscombe', '0208 6543361', 'CR0 6RD ', '251 Lower Addiscombe Road', 'Croydon', 'Greggs', true),\
		(90986, 51.3749481691859000, -0.0967088509439890, 'Crydn Norfolk Hse', '0208 6861702', 'CR0 1LH ', '15 Norfolk House', 'Croydon', 'Greggs', true),\
		(90987, 51.4768462491524000, -0.0261260863136050, 'Ldn Deptford High St', '0208 6925300', 'SE8 4AA ', '91 High Street', 'London', 'Greggs', true),\
		(90988, 51.5608058481846000, -0.3811902865213600, 'Sth Ruislip Field En', '0208 8641260', 'HA4 0QP ', '708 Field End Road', 'Greater London', 'Greggs', true),\
		(90989, 51.4945046519456000, -0.0999733927743670, 'Ldn Elephnt Cstle SC', '0207 7036840', 'SE1 6TE ', 'Unit 95 Elephant And Castle', 'London', 'Greggs', true),\
		(90990, 51.4505724725578000, 0.0558431816747700, 'Eltham High St', '0208 8503012', 'SE9 1BJ ', '166 High Street', 'London', 'Greggs', false),\
		(90991, 51.5127429227359000, -0.0142844796565320, 'Poplar Mkt Sq', '0207 5388641', 'E14 6AQ ', '16 Market Square', 'London', 'Greggs', true),\
		(90992, 51.4747131031078000, -0.2068220499455220, 'Fulham Fulham Rd', '0207 7364090', 'SW6 5SA ', '702c Fulham Road', 'Fulham', 'Greggs', true),\
		(90993, 51.5279040956577000, -0.3528185010833870, 'Greenford Broadway', '0208 5782495', 'UB6 9PR ', '16 The Broadway', 'Greenford', 'Greggs', true),\
		(90994, 51.4848984842925000, 0.0043966211992390, 'Ldn Greenwch Traflgr', '0208 8582848', 'SE10 9TZ', '182 Trafalgar Road', 'London', 'Greggs', false),\
		(90995, 51.4810433045845000, -0.0100161361401940, 'Ldn Greenwch Chrch S', '0208 8581453', 'SE10 9BJ', '5 Greenwich Church Street', 'Grtr London', 'Greggs', true),\
		(90996, 51.5066524773516000, -0.4186007775297880, 'Hayes Stn Rd', '0208 5730374', 'UB3 4BD ', '25 Station Road', 'Hayes', 'Greggs', true),\
		(90997, 51.4882502347637000, -0.0568909903695920, 'Ldn Brmndsy Ilderton', '0207 2371079', 'SE16 3JU', '1a Ilderton Road', 'Bermondsey', 'Greggs', true),\
		(90998, 53.3425639746835000, -2.7323338618677400, 'Runcorn Chrch St', '01928 564603', 'WA7 1LR ', '34 Church Street', 'Cheshire', 'Greggs', true),\
		(90999, 51.7516831818154000, -0.4728020985971340, 'Hml Hemp 150 Marlows', '01442 264945', 'HP1 1BA ', '150 The Marlowes', 'Hertfordshire', 'Greggs', true),\
		(91000, 51.5511204778924000, -0.4483583650283500, 'Hillingdon Long Ln', '01895 238406', 'UB10 9PG', '370 Long Lane', 'Middlesex', 'Greggs', true),\
		(91001, 51.5213973624239000, -0.1102995146841620, 'Ldn Leather Ln', '0207 4302395', 'EC1N 7TS', '81/81(a) Leather Lane', 'Gtr London', 'Greggs', true),\
		(91002, 52.3995442579917000, -1.5315367079675000, 'Coventry Earlsdon St', '02476 675182', 'CV5 6EG ', '2a Earlsdon Street', 'Coventry', 'Greggs', true),\
		(91003, 51.5172232689948000, -0.2058304184367620, 'Ldn Portobello Rd', '0207 7272560', 'W11 1LJ ', '238 Portobello Road', 'London', 'Greggs', true),\
		(91004, 51.5379931351288000, -0.1939393900538920, 'Kilburn High Rd', '0207 6248435', 'NW6 6JE ', '79 High Road', 'London', 'Greggs', true),\
		(91005, 53.9934864897714000, -1.5416921130225600, 'Harrogate Cmbrdge Rd', '01423 524142', 'HG1 1PB ', '7 Cambridge Road', 'N.Yorkshire', 'Greggs', true),\
		(91006, 51.5856207004592000, -0.2761195115818040, 'Kingbury Kingsbry Rd', '0208 2048477', 'NW9 9DY ', '461 Kingsbury Road', 'Greater London', 'Greggs', true),\
		(91007, 51.4307249885219000, -0.3068144383963250, 'Ham Richmond Rd', '0208 5467186', 'KT2 5PY ', '430 Richmond Road', 'Surrey', 'Greggs', false),\
		(91008, 51.5398294779454000, 0.7133767012171890, 'Southend Southchurch', '01702 463139', 'SS1 2NE ', '2 Southchurch Road', 'Essex', 'Greggs', false),\
		(91009, 51.6213162669539000, 0.3047289664475350, 'Brentwood 19 High St', '01277 204005', 'CM14 4RG', '19 High Street', 'Essex', 'Greggs', false),\
		(91010, 51.6146261691080000, -0.2467395704166130, 'Mill Hill Broadway', '0208 9590119', 'NW7 3LH ', '44 The Broadway', 'London', 'Greggs', true),\
		(91011, 51.4054524767273000, -0.1644143984544700, 'Mitcham Fairgrn Pde', '0208 6485693', 'CR4 3NA ', '11 Fairgreen Parade', 'Surrey', 'Greggs', true),\
		(91012, 51.6830920708097000, -3.3792298657839200, 'Mntain Ash Oxford St', '01443 473982', 'CF45 3PG', '23b Oxford Street', 'Mid Glamorgan', 'Greggs', false),\
		(91013, 51.4027282843018000, -0.1939679303361420, 'Morden London Rd', '0208 6488513', 'SM4 5BE ', '54/54a London Road', 'Surrey', 'Greggs', true),\
		(91014, 51.3715510152890000, -0.2269468426631140, 'Nth Cheam Ldn Rd', '0208 6445199', 'SM3 8HW ', '522 London Road', 'Surrey', 'Greggs', false),\
		(91015, 53.0004995596677000, -1.1972287623601400, 'Bulwell Main St', '0115 9273977', 'NG6 8QD ', '83 Market Side', 'Nottingham', 'Greggs', false),\
		(91016, 51.4875557388327000, -0.1416448789888810, 'Ldn Pimlico Lupus St', '0207 8342025', 'SW1V 3EN', '111 Lupus Street', 'Greater London', 'Greggs', true),\
		(91017, 51.4871651791288000, 0.0908778245880210, 'Plumstead Lkedale Rd', '0208 8547267', 'SE18 1PP', '6 Lakedale Road', 'Plumstead', 'Greggs', true),\
		(91018, 51.4096694402561000, -0.2310374730341950, 'Raynes Pk Coombe Ln', '0208 9460948', 'SW20 0LA', '36 Coombe Lane', 'Gtr London', 'Greggs', true),\
		(91019, 51.4427784752884000, -0.9556756162572600, 'Reading Christch Rd', '01189 872825', 'RG2 7AZ ', '82 Christchurch Road', 'Berkshire', 'Greggs', true),\
		(91020, 51.4494480262476000, -0.2421076769222340, 'Ldn Roehamptn Dnebry', '0208 7882394', 'SW15 4DQ', '37 Danebury Avenue', 'London', 'Greggs', true),\
		(91021, 51.3984843876017000, -0.0759218681951550, 'Sth Norwood High St', '0208 6537040', 'SE25 6EA', '89 High Street', 'Grtr London', 'Greggs', true),\
		(91022, 51.5177108004421000, -0.3756706224572650, 'Southall Broadway', '0208 5744857', 'UB1 2PS ', '43 The Broadway', 'Ealing', 'Greggs', true),\
		(91023, 51.4445793685698000, -0.2056570750006770, 'Southfields Replnghm', '0208 8748065', 'SW18 5LS', '8 Replingham Road', 'London', 'Greggs', true),\
		(91024, 51.4710885817652000, -0.1245892419762890, 'Ldn Stockwll Clap Rd', '0207 6223091', 'SW9 9AE ', '312 Clapham Road', 'Greater London', 'Greggs', true),\
		(91025, 51.4197562582660000, -0.4203215164802440, 'Sunbury Staines Rd', '01932 784060', 'TW16 7AB', '17 The Parade', 'Surrey', 'Greggs', false),\
		(91026, 51.3936610354296000, -0.1138860161498840, 'Thornton Hth Ldn Rd', '0208 6842897', 'CR7 6JA ', '758 & 768(a) London Road', 'Surrey', 'Greggs', true),\
		(91027, 51.4270646546706000, -0.1663247262085290, 'Ldn Tooting Mitcham', '0208 6723702', 'SW17 9PB', '41 Mitcham Road', 'London', 'Greggs', true),\
		(91028, 51.4464281262822000, -0.3289133668318180, 'Twickenham King St', '0208 8929691', 'TW1 3SN ', '8 King Street', 'Grtr London', 'Greggs', true),\
		(91029, 51.4352518368991000, -0.1043897518467360, 'Ldn West Norwood', '0208 6707754', 'SE27 9AF', '324 Norwood Road', 'London', 'Greggs', true),\
		(91030, 51.5697171547623000, 0.4570346285299570, 'Basildon Town Sq', '01268 280886', 'SS14 1DT', '54/56 Town Square', 'Essex', 'Greggs', false),\
		(91031, 54.9749511898798000, -1.6118433899534300, 'Ncl Nrthumberland St', '0191 2619720', 'NE1 7DE ', '24/32 Northumberland Street', 'Newcastle Upon Tyne', 'Greggs', true),\
		(91032, 51.5532932562192000, -0.2951849326798230, 'Wembley High Rd', '0208 9035923', 'HA9 7BH ', '504 Wembley High Road', 'Wembley', 'Greggs', true),\
		(91033, 51.2354502673213000, -2.9972552561408700, 'Burnham Sea High St', '01278 780357', 'TA8 1PA ', 'Unit 2, 35 High Street', 'Somerset', 'Greggs', false),\
		(91034, 55.8625501621372000, -4.3127498170829900, 'Govan Govan Cross SC', '0141 4456433', 'G51 3JW ', 'Unit 4 Govan Cross Shopping Ce', 'Glasgow', 'Greggs', false),\
		(91035, 53.8161913786954000, -1.4696442502947100, 'Leeds Sth Parkway', '0113 2734085', 'LS14 6ER', '149 South Parkway', 'Leeds', 'Greggs', false),\
		(91036, 54.4306999765601000, -2.9630786691188400, 'Ambleside Chrch St', '015394 32638', 'LA22 0BU', '3 Old Stamp House', 'Cumbria', 'Greggs', true),\
		(91037, 54.9871751096832000, -3.2600753894890200, 'Annan High St', '01461 205076', 'DG12 6ED', '103 High Street', 'Annan', 'Greggs', false),\
		(91038, 54.1137349434734000, -3.2256895720495600, 'Barrow 171 Dalton Rd', '01229 836743', 'LA14 1PX', '171 Dalton Road', 'Cumbria', 'Greggs', false),\
		(91039, 54.8866778570016000, -2.9401148398458900, 'Carlisle Denton St', '01228 525831', 'CA2 5EN ', '131/133 Denton Street', 'Cumbria', 'Greggs', false),\
		(91040, 52.7006738845732000, -2.5169803738769700, 'Wellington New St', '01952 242539', 'TF1 1LU ', '1 & 3 New Street', 'Shropshire', 'Greggs', true),\
		(91041, 54.8927394019826000, -2.9337076754769400, 'Carlisle Devnshre St', '01228 526200', 'CA3 8LP ', '8 Devonshire Street', 'Cumbria', 'Greggs', false),\
		(91042, 51.5597099999699000, 0.0756793253656410, 'Ilford High Rd', '0208 4785757', 'IG1 1LX ', '209 High Road', 'Ilford', 'Greggs', true),\
		(91043, 54.1288843349045000, -2.7684478542544800, 'Carnforth Mkt St', '01524 732061', 'LA5 9JX ', '11 Market Street', 'Lancashire', 'Greggs', true),\
		(91044, 54.5217436376941000, -3.5167775711009100, 'Cleator Moor High St', '01946 811456', 'CA25 5AB', '2 High Street', 'Cleator Moor', 'Greggs', false),\
		(91045, 54.1564275505363000, -3.1808108498902900, 'Dalton Furnes Mkt St', '01229 462642', 'LA15 8DL', '79 Market Street', 'Cumbria', 'Greggs', false),\
		(91046, 55.0684442633591000, -3.6099333292381100, 'Dumfries Queensby St', '01387 251680', 'DG1 1EX ', '4 Queensberry Street', 'Dumfriesshire', 'Greggs', false),\
		(91047, 54.4816740353748000, -3.5283061241124600, 'Egremont Main St', '01946 820701', 'CA22 2AD', '42 Main Street', 'Cumbria', 'Greggs', false),\
		(91048, 53.3660439982713000, -0.0046803170448230, 'Louth Mkt Pl', '01507 605268', 'LN11 9PB', '16 Market Place', 'Lincolnshire', 'Greggs', true),\
		(91049, 55.4232357211433000, -2.7858843679685000, 'Hawick High St', '01450 377587', 'TD9 9EE ', '68 High Street', 'Roxburghshire', 'Greggs', false),\
		(91050, 54.6003748238878000, -3.1366902677477400, 'Keswick Mkt Sq', '017687 72026', 'CA12 5BD', '3 Market Square', 'Cumbria', 'Greggs', true),\
		(91051, 54.0490950088586000, -2.7995224190379900, 'Lanc Cheapside', '01524 68046 ', 'LA1 1LY ', '9 Cheapside', 'Lancashire', 'Greggs', true),\
		(91052, 54.0481207878889000, -2.8000535482068500, 'Lanc Penny St', '01524 64461 ', 'LA1 1UA ', '39a & 41a Penny Street', 'Lancashire', 'Greggs', true),\
		(91053, 54.0101008036332000, -2.7852546969739400, 'Lanc Uni Alexndra Sq', '01524 64052 ', 'LA1 4XX ', '8 Alexandra Square', 'Lancaster', 'Greggs', true),\
		(91054, 55.1211910787854000, -3.3559161009563200, 'Lockerbie High St', '01576 204336', 'DG11 2JH', '67 High Street', 'Dumfriesshire', 'Greggs', false),\
		(91055, 54.7137359384317000, -3.4968799451737900, 'Maryport Senhse St', '01900 813087', 'CA15 6BU', '67 Senhouse Street', 'Cumbria', 'Greggs', true),\
		(91056, 54.0615767549672000, -2.8522123832862800, 'Morecambe Glntwth Rd', '01524 832770', 'LA4 4SZ ', '22 Glentworth Road West', 'Lancashire', 'Greggs', false),\
		(91057, 55.9591347552112000, -2.9849465234694300, 'Prestonpans High St', '01875 814902', 'EH32 9AX', '135 High Street', 'East Lothian', 'Greggs', false),\
		(91058, 55.6516964176076000, -3.1889236513603800, 'Peebles High St', '01721 729810', 'EH45 8AG', '11 High Street', 'Peebles', 'Greggs', false),\
		(91059, 54.6643382581580000, -2.7529280855708000, 'Penrith Devnshre St', '01768 862260', 'CA11 7SR', '4 Devonshire Street', 'Cumbria', 'Greggs', true),\
		(91060, 55.8383264243617000, -4.2747998679556100, 'Polshds Kildrostn St', '0141 4231252', 'G41 4LU ', '16 Kildrostan Buildings', 'Glasgow', 'Greggs', false),\
		(91061, 51.9477469963216000, -3.3902317035463900, 'Brecon Bethnal Sq SC', '01874 625340', 'LD3 7JP ', 'Unit 1 Bethel Square Shopping', 'Powys', 'Greggs', false),\
		(91062, 52.5869195082294000, -1.1057184652472500, 'Wigston Leicester Rd', '01162884518 ', 'LE18 1NR', '23 Leicester Road', 'Leicestershire', 'Greggs', true),\
		(91063, 55.9340984057596000, -3.4703175664752700, 'Broxburn Est Main St', '01506 852888', 'EH52 5AE', '30 East Main Street', 'Scotland', 'Greggs', false),\
		(91064, 54.8250351250963000, -3.1605361441136400, 'Wigton King St', '016973 43631', 'CA7 9DT ', '3 King Street', 'Cumbria', 'Greggs', true),\
		(91065, 52.6369890011339000, -1.1316369019297600, 'Leicestr Haymrket SC', '0116 2531010', 'LE1 3YD ', 'Unit 58G', 'Leicester', 'Greggs', true),\
		(91066, 52.9549460513220000, -1.1488316952946700, 'Notham Upper Parl St', '0115 9411569', 'NG1 2AP ', '25 Upper Parliament Street', 'Nottingham', 'Greggs', true),\
		(91067, 51.5367940017265000, 0.0523145271402510, 'East Ham 158 High St', '0208 4728639', 'E6 2HT  ', '158 High Street North', 'London', 'Greggs', true),\
		(91068, 54.9759974466212000, -1.6548903105768500, 'Ncl West Rd', '0191 2724314', 'NE4 9QA ', '112 - 116 West Road', 'Newcastle Upon Tyne', 'Greggs', true),\
		(91069, 51.5226655235624000, -0.7200117291063580, 'Maidenhead High St', '01628 633479', 'SL6 1JF ', '43 High Street', 'Maidenhead', 'Greggs', true),\
		(91070, 53.8287323851016000, -1.5641082765990200, 'Leeds Northside RP', '0113 2242068', 'LS7 2TT ', 'Unit 2b, Northside Retail Park', 'Leeds', 'Greggs', true),\
		(91071, 52.7082969318016000, -2.7535176213679400, 'Shrwsbury Pride Hill', '01743 355539', 'SY1 1DN ', '47 Pride Hill', 'Shropshire', 'Greggs', true),\
		(91072, 55.9443124163827000, -2.9525316198326900, 'Tranent High St', '01875 616572', 'EH33 1HQ', '30 High Street', 'Tranent', 'Greggs', false),\
		(91073, 51.4621554323570000, -3.4482041577936600, 'Cowbridge High St', '01446 771824', 'CF71 7AE', '25 High Street', 'Vale Of Glamorgan', 'Greggs', false),\
		(91074, 51.6240712951275000, 0.4159175699575190, 'Billericay High St', '01277 627072', 'CM12 9AH', '121 High Street', 'Essex', 'Greggs', false),\
		(91075, 51.9620628494438000, 1.3509495852014800, 'Felixstowe Hamltn Rd', '01394 286796', 'IP11 7BB', '35 Hamilton Road', 'Suffolk', 'Greggs', false),\
		(91076, 55.4138992622523000, -1.7064330541416700, 'Alnwick Bondgate', '01665 603252', 'NE66 1JD', '44 Bondgate Within', 'Northumberland', 'Greggs', true),\
		(91077, 51.8167289854827000, -0.8124245686626020, 'Aylesbury Mkt Hse', '01296 426341', 'HP20 1TN', '1 Market House', 'Bucks', 'Greggs', true),\
		(91078, 53.0761736246393000, -0.8115935559840890, 'Newark Stodman St', '01636 701937', 'NG24 1AW', '23/24 Stodman Street', 'Nottinghamshire', 'Greggs', false),\
		(91079, 52.6806889875395000, 0.9417318840723550, 'E Dereham Nelson Pl', '0136 2691422', 'NR19 1EA', 'Unit 1 Nelson Place', 'Norfolk', 'Greggs', false),\
		(91080, 51.5969026790577000, -3.7855166667707800, 'Port Talb Aberafn SC', '01639 881978', 'SA13 1PB', 'Unit 9 Aberfan Shopping Centre', 'West Glamorgan', 'Greggs', false),\
		(91081, 52.0922532731856000, -1.9464886988647300, 'Evesham Bridge St', '01386 769446', 'WR11 4RR', '12/14 Bridge Street', 'Worcestershire', 'Greggs', true),\
		(91082, 55.8653187781226000, -4.2639276543902300, 'Glas 279 Sauchiehall', '0141 3328983', 'G2 3HQ  ', '279 Sauchiehall Street', 'Glasgow', 'Greggs', false),\
		(91083, 55.8784094429792000, -3.1488822852909900, 'Loanhead Clerk St', '0131 4403218', 'EH20 9RG', '80 Clerk Street', 'Midlothian', 'Greggs', false),\
		(91084, 52.2450383742998000, 0.4078668159484610, 'Newmarket High St', '01638 664634', 'CB8 8LB ', '66/72 High Street', 'Suffolk', 'Greggs', false),\
		(91085, 53.7245614200000000, -1.7135722630000000, 'Cleckheaton Nthgate', '01274 854800', 'BD19 5AE', '16 Northgate', 'West Yorkshire', 'Greggs', true),\
		(91086, 52.1923658738883000, -1.7050361263658500, 'Stratford Bridge St', '01789 293621', 'CV37 6AB', '2b Bridge Street', 'Stratford Upon Avon', 'Greggs', true),\
		(91087, 53.4246506785103000, -2.9332327147817900, 'Lvrpool Wst Derby Rd', '0151 2287233', 'L13 8AD ', '565 West Derby Road', 'Liverpool', 'Greggs', true),\
		(91088, 53.4818882830663000, -2.2447676178982200, 'Manc Cross St', '0161 8393867', 'M2 7AQ  ', '28 Cross Street', 'Manchester', 'Greggs', true),\
		(91089, 54.4036744241035000, -1.7381031881856200, 'Richmond Mkt Pl', '01748 826813', 'DL10 4PX', '14 Market Place', 'North Yorkshire', 'Greggs', true),\
		(91090, 53.7449470430085000, -0.3417210058879210, 'Hull Jameson St', '01482 323211', 'HU1 3LS ', '54 Jameson Street', 'Hull', 'Greggs', true),\
		(91091, 53.7915773300000000, -1.7502454330000000, 'Bradford Interchange', '01274306469 ', 'BD1 1TU ', '1 The Interchange', 'Bradford', 'Greggs', true),\
		(91092, 51.6488347678364000, -0.1291734545226440, 'Oakwood Bramley Rd', '0208 3666188', 'N14 4XA ', '197 Bramley Road', 'London', 'Greggs', true),\
		(91093, 52.1378970113501000, -0.4700321710741220, 'Bedford All Hallows', '01234 359709', 'MK40 1LN', '13 All Hallows', 'Bedfordshire', 'Greggs', true),\
		(91094, 53.7996553884199000, -1.5445357740659000, 'Leeds Light Albion', '0113 2468802', 'LS1 8EQ ', '13 The Light (115 Albion St)', 'Leeds', 'Greggs', true),\
		(91095, 56.0309247608419000, -3.3980895284756200, 'Invrkeithing High St', '01383 412640', 'KY11 1NL', '47 High Street', 'Inverkeithing', 'Greggs', false),\
		(91096, 52.3236077452670000, -0.0730024093025140, 'St Ives The Pavement', '01480 463153', 'PE27 5AD', '5 The Pavement', 'Cambridgeshire', 'Greggs', false),\
		(91097, 53.6859058508202000, -1.4983096783808600, 'Wkfield Bus Stn', '01924 381440', 'WF1 3AQ ', 'Unit 1, Wakefield Bus Station', 'Wakefield', 'Greggs', true),\
		(91098, 51.5703430255213000, 0.4614988212620350, 'Basildon East Wlk', '01268 522881', 'SS14 1HE', '44 East Walk', 'Essex', 'Greggs', false),\
		(91099, 51.8691693292471000, 0.1600598083838390, 'Bishps Strtfd Sth St', '01279 651592', 'CM23 3AT', 'Unit 2c South Street', 'Bishops Stortford', 'Greggs', false),\
		(91100, 52.4755941616370000, 1.7514416628942200, 'Lowestoft Ldn Rd Nth', '01502 585874', 'NR32 1LT', '65/67 London Road North', 'Suffolk', 'Greggs', false),\
		(91101, 53.8209097353083000, -1.4614882907768000, 'Leeds Seacrft Grn SC', '0113 2730682', 'LS14 6PA', '6 Seacroft Green Shopping Cent', 'Leeds', 'Greggs', true),\
		(91102, 54.5481878981718000, -3.5901001168422600, 'Whitehaven Kings St', '01946 694209', 'CA28 7JH', '61 King Street', 'Cumbria', 'Greggs', true),\
		(91103, 51.5815299809888000, -0.3340798927913470, 'Harrow 6 St Anns Rd', '0208 8636468', 'HA1 1LG ', '6 St Anns Road', 'Harrow', 'Greggs', true),\
		(91104, 51.4210753099398000, -0.2064051478621770, 'Wimbledon Wmbldn Brg', '0208 8791887', 'SW19 7NH', '17 Wimbledon Bridge', 'London', 'Greggs', true),\
		(91105, 51.6869966785518000, -0.0013441515730780, 'Waltham Abbey Sun St', '01992 761912', 'EN9 1EE ', '14 Sun Street', 'Essex', 'Greggs', false),\
		(91106, 54.7764974953334000, -1.5801183211323400, 'Durham North Rd', '0191 3863975', 'DH1 4SH ', 'Unit 3 1-4 North Road', 'Durham', 'Greggs', true),\
		(91107, 52.4792913100000000, -1.9018658230000000, 'Birm New St', '0121 6432944', 'B2 4BA  ', '85 New Street', 'West Midlands', 'Greggs', true),\
		(91108, 51.4687027537700000, -0.3614446304329350, 'Hounslow 181 High St', '0208 5772890', 'TW3 1BL ', '181 High Street', 'Middlesex', 'Greggs', true),\
		(91109, 53.5918825457231000, -0.6455708402534020, 'SCnthrpe 33 High St', '01724 850822', 'DN15 6SB', '33 High Street', 'Scunthorpe', 'Greggs', true),\
		(91110, 53.7020798438009000, -1.7806909329740200, 'Brighse Comm St', '01484 719677', 'HD6 1AF ', '15 Commercial Street', 'West Yorkshire', 'Greggs', true),\
		(91111, 51.6569518193743000, -0.2740069232136010, 'Borehamwood Shen Rd', '0208 9052237', 'WD6 1AH ', '149 Shenley Road', 'Herts', 'Greggs', true),\
		(91112, 52.6127713788295000, -2.0370112836582800, 'Willenhll The Square', '01922 478404', 'WV12 5EA', '36 The Square', 'Walsall', 'Greggs', true),\
		(91113, 52.7598933709447000, -1.9355424137397100, 'Rugeley Lwr Brook St', '01889 576429', 'WS15 2BZ', '23 Lower Brook Street', 'Staffordshire', 'Greggs', true),\
		(91114, 51.4444212201091000, 0.2181263361379480, 'Dartford High St', '01322 221136', 'DA1 1BZ ', '28 High Street', 'Dartford', 'Greggs', false),\
		(91115, 54.9057896322488000, -1.3846679633415200, 'Sdland 11 Bridges', '0191 5656746', 'SR1 3LB ', 'Unit 11a ( 28 ) The Bridges', 'Sunderland', 'Greggs', true),\
		(91116, 52.4868432400000000, -1.9139099750000000, 'Birm Warstone Ln', '0121 2369593', 'B18 6NG ', 'Unit 4, 51 Warstone Lane', 'Birmingham', 'Greggs', true),\
		(91117, 52.2813567200617000, -1.5890564646527200, 'Warwick Swan St', '01926 498169', 'CV34 4BJ', '20 Swan Street', 'Warwickshire', 'Greggs', false),\
		(91118, 56.0716004016346000, -3.4603521892127500, 'Dunfmlne High St', '01383 432777', 'KY12 7DP', '92 High Street', 'Dunfermline', 'Greggs', false),\
		(91119, 53.3277016246157000, -2.6984914592052100, 'Runcorn Forest Wlk', '01928 751414', 'WA7 2GX ', '34a Forest Walk', 'Runcorn', 'Greggs', true),\
		(91120, 51.4563195062212000, -0.9718753861727600, 'Reading Queen Vic St', '01189 569854', 'RG1 1TG ', '10 Queen Victoria Street', 'Reading', 'Greggs', true),\
		(91121, 51.4619736138917000, -0.0107738367482500, 'Lewisham High St', '0208 2971167', 'SE13 6JG', '114 High Street', 'Lewisham', 'Greggs', true),\
		(91122, 56.1098764602372000, -3.3426422544122700, 'Cowdenbeath High St', '01383 514733', 'KY4 9QJ ', '321 High Street', 'Fife', 'Greggs', false),\
		(91123, 51.7487169475861000, -0.4721923051133800, 'Hml Hemp 203 Marlows', '01442 212205', 'HP1 1BL ', '203 The Marlowes', 'Hertfordshire', 'Greggs', false),\
		(91124, 51.1285964658374000, -3.0044834597379500, 'Bridgewater High St', '01278 420957', 'TA6 3BH ', 'Unit 2 Royal Clarence House', 'Somerset', 'Greggs', false),\
		(91125, 55.0423855459952000, -1.4451571737942900, 'Whitley Bay Whtly Rd', '0191 2534456', 'NE26 2TE', '250 Whitley Road', 'Tyne And Wear', 'Greggs', false),\
		(91126, 53.2278539419211000, -0.5412699224727970, 'Lincoln High St', '01522 529007', 'LN5 7AL ', '188 High Street', 'Lincolnshire', 'Greggs', true),\
		(91127, 52.4807323800000000, -1.8945004500000000, 'Birm Bull St', '0121 2366309', 'B4 7LB  ', '5 Bull Street', 'Birmingham', 'Greggs', true),\
		(91128, 51.5109356468587000, -0.0845902034939600, 'Ldn Eastcheap', '0207 6262940', 'EC3M 1BU', '13-21 Eastcheap', 'London', 'Greggs', true),\
		(91129, 52.9793674255602000, -1.2082544650171200, 'Notham Broxtowe Ln', '0115 9752009', 'NG8 5NG ', '178 Broxtowe Lane', 'Nottinghamshire', 'Greggs', false),\
		(91130, 51.6690163479161000, -4.0396935422843600, 'Gorseinon High St', '01792 899447', 'SA4 4BP ', '65 High Street', 'South Wales', 'Greggs', false),\
		(91131, 52.4077868269427000, -1.5111926038597300, 'Coventry Broadgate', '02476 550668', 'CV1 1NF ', '42 Broadgate', 'Warwickshire', 'Greggs', true),\
		(91132, 51.5089912823067000, -3.1323129315795700, 'Rumney Newport Rd', '02920 779176', 'CF3 4AJ ', '767 Newport Road', 'Cardiff', 'Greggs', false),\
		(91133, 57.1469923000000000, -2.0965454990000000, 'Aberdn 55 Union St', '01224 589923', 'AB11 5BJ', '55 Union Street', 'Aberdeen', 'Greggs', false),\
		(91134, 53.2786405457878000, -2.9008025843640100, 'Ellmre Prt Marina Dr', '0151 3572560', 'CH65 0AL', '29 Marina Drive', 'Cheshire', 'Greggs', true),\
		(91135, 53.0454812532207000, -2.9929651332551600, 'Wrexham Hope St', '01978 355560', 'LL11 1BE', '54 Hope Street', 'Wrexham', 'Greggs', true),\
		(91136, 52.6329643262860000, -1.1332532510530200, 'Lecestr Mkt St', '0116 2553763', 'LE1 6DP ', '14 Market Street (Horsefair)', 'Leicestershire', 'Greggs', true),\
		(91137, 51.7529394800000000, -0.3374292550000000, 'St Albans St Peters', '01727 866026', 'AL1 3LW ', '15 St Peters Street', 'Hertfordshire', 'Greggs', true),\
		(91138, 52.8020407519827000, -1.6318705020638900, 'Burt U Trt Cooper Sq', '01283 569979', 'DE14 1DF', '3 Coopers Square', 'Burton On Trent', 'Greggs', true),\
		(91139, 50.7992637711178000, -1.0906690434449600, 'Portsmth 120 Comm Rd', '02392 296495', 'PO1 1EJ ', '120 Commercial Road', 'Portsmouth', 'Greggs', true),\
		(91140, 52.4124026200000000, -1.7793879620000000, 'Solihull Touchwood', '0121 7057411', 'B91 3GS ', 'Unit SU34 Touchwood Centre', 'West Midlands', 'Greggs', true),\
		(91141, 51.4560726735991000, -0.9755223179599220, 'Reading West St', '01189 513191', 'RG1 1TT ', '18 West Street', 'Reading', 'Greggs', true),\
		(91142, 52.6654022268761000, -1.1661333792394000, 'Leicestr Beaumont SC', '0116 2352310', 'LE4 1DE ', 'Unit Su3 Beaumont Shopping Ctr', 'Leicestershire', 'Greggs', true),\
		(91143, 54.5468737265504000, -3.5909302366134500, 'Whitehaven Mkt Pl', '01946 61063 ', 'CA28 7JB', '52 Market Place', 'Whitehaven', 'Greggs', false),\
		(91144, 51.3527723982518000, -1.9953124868622800, 'Devizes Mkt Pl', '01380 721900', 'SN10 1JG', '43/44 Market Place', 'Devizes', 'Greggs', false),\
		(91145, 50.9220989510736000, -1.4327891201071600, 'Shirley High St', '02380 528242', 'SO15 3NN', '45 High Street', 'Southampton', 'Greggs', false),\
		(91146, 51.0158189654197000, -3.1035477048289300, 'Taunton North St', '01823 282606', 'TA1 1LH ', '8 North Street', 'Somerset', 'Greggs', true),\
		(91147, 51.4153980417511000, -2.4987645526387400, 'Keynsham High St', '01179 864703', 'BS31 1DX', '42a High Street', 'Bristol', 'Greggs', false),\
		(91148, 53.4834585494695000, -2.2416874610587700, 'Manc 175 Arndale SC', '0161 8393402', 'M4 2HU  ', '175 Halle Mall', 'Manchester', 'Greggs', true),\
		(91149, 51.4686568264003000, -0.3639514567645110, 'Hounslow 8 High St', '0208 5696640', 'TW3 1HG ', '8 Trinity Parade', 'Middlesex', 'Greggs', true),\
		(91150, 52.2572235693962000, -1.1617356044353000, 'Daventry Bowen Sq', '01327 300144', 'NN11 4DR', 'Unit 20 Bowen Square', 'Northamptonshire', 'Greggs', false),\
		(91151, 54.6438362539600000, -3.5478521331274600, 'Wrkingtn Murray Rd', '01900 66754 ', 'CA14 2AD', '19 Murray Road', 'Cumbria', 'Greggs', true),\
		(91152, 51.8790491030142000, -0.4155348581418480, 'Luton 160 The Mall', '01582 485532', 'LU1 2TJ ', 'Unit 160 Arndale Centre', 'Beds', 'Greggs', true),\
		(91153, 54.5754032882208000, -1.2379578428885500, 'Middlsboro Gilkes St', '01642 249261', 'TS1 5ET ', '12/14 Gilkes Street', 'Cleveland', 'Greggs', true),\
		(91154, 50.9059978305473000, -1.4047536430275800, 'Soton Above Bar St', '02380 633601', 'SO14 7FG', '101 Above Bar Street', 'Hampshire', 'Greggs', true),\
		(91155, 51.1265095100000000, -2.7407445010000000, 'Street High St', '01458 447282', 'BA16 0EN', '98b High Street', 'Somerset', 'Greggs', true),\
		(91156, 53.3832876535780000, -1.4663016249989100, 'Shefld Mkt Pl', '0114 2787626', 'S1 2GH  ', '21 Market Place', 'Sheffield', 'Greggs', true),\
		(91157, 52.6326530700000000, -1.6933841180000000, 'Tamworth Ankersde SC', '01827 50245 ', 'B79 7LG ', '(unit 20) Ankerside Shopping C', 'Staffordshire', 'Greggs', false),\
		(91158, 54.3270685703292000, -2.7470754173800600, 'Kendal Highgate', '01539 724206', 'LA9 4DA ', '1/1a Highgate', 'Kendal', 'Greggs', true),\
		(91159, 52.2387868007419000, -0.8925623703467060, 'Nmptn Abington St', '01604 603115', 'NN1 2AW ', '51 Abington Street', 'Northamptonshire', 'Greggs', true),\
		(91160, 53.5657923687181000, -0.0854425426584910, 'Grimsby Victoria St', '01472 340090', 'DN31 1UU', '47 Victoria Street West', 'Grimsby', 'Greggs', false),\
		(91161, 53.8017029624369000, -1.5440884666260000, 'Leeds Merrion SC', '0113 2435197', 'LS2 8NG ', '39 Merrion Centre', 'Leeds', 'Greggs', true),\
		(91162, 53.5664431377806000, -0.6487091060592370, 'Ashby Broadway', '01724 280775', 'DN16 2SN', '18/20 Broadway', 'Scunthorpe', 'Greggs', false),\
		(91163, 54.8520100409973000, -1.8326003804541800, 'Consett Middle St', '01207 504162', 'DH8 5QJ ', '34 Middle Street', 'County Durham', 'Greggs', true),\
		(91164, 51.3711721317442000, -0.1006440797662910, 'Crydn High St', '0208 6883800', 'CR0 1NA ', '66 High Street', 'Croydon', 'Greggs', true),\
		(91165, 50.9019165179344000, -1.4032413548924100, 'Soton East St', '02380 634704', 'SO14 3HE', '8 East Street', 'Southampton', 'Greggs', false),\
		(91166, 51.4440100571540000, 0.2160916800425430, 'Dartford Priory SC', '01322 226933', 'DA1 2HR ', '15 Priory Centre', 'Kent', 'Greggs', false),\
		(91167, 51.5020219159567000, -2.6828082151750100, 'Bristol Lescren Way', '01179 824011', 'BS11 8DG', 'Unit 7 Lescren Way', 'Bristol', 'Greggs', false),\
		(91168, 51.2493123765656000, -0.7642524008216850, 'Aldershot Wellington', '01252 338711', 'GU11 1DX', '33 Wellington Street', 'Aldershot', 'Greggs', false),\
		(91169, 51.5506087141000000, 0.1981464527862750, 'Elm Pk Broadway Pde', '01708 475693', 'RM12 4RS', '12 - 13 Broadway Parade', 'Essex', 'Greggs', false),\
		(91170, 51.9778429641330000, -0.2283284349844690, 'Letchworth Eastcheap', '01462 679811', 'SG6 3DD ', '22 East Cheap', 'Herts', 'Greggs', false),\
		(91171, 51.5375059488247000, 0.7139018451659030, 'Southend 100 High St', '01702 610065', 'SS1 1JN ', '100 High Street', 'Essex', 'Greggs', false),\
		(91172, 51.8106386022765000, -0.0310145244587930, 'Ware High St', '01920 487773', 'SG12 9BA', '47 High Street', 'Herts', 'Greggs', false),\
		(91173, 51.4916988172173000, 0.0659473942008970, 'Ldn Woolwch 64 Powis', '0208 3098873', 'SE18 6LQ', '64 Powis Street', 'Woolwich', 'Greggs', true),\
		(91174, 52.9223664141905000, -1.4766097212674700, 'Derby Cornmarket', '01332 341713', 'DE1 2DG ', '40 Cornmarket', 'Derbyshire', 'Greggs', true),\
		(91175, 52.6294434985689000, 1.2958780154650200, 'Norwch London St', '01603 623706', 'NR2 1LA ', '50 London Street', 'Norwich', 'Greggs', true),\
		(91176, 54.3785392809345000, -2.9058776239635900, 'Windermere Cres Rd', '015394 42060', 'LA23 1EA', '19 Crescent Road', 'Cumbria', 'Greggs', true),\
		(91177, 53.8674164000000000, -1.9071404520000000, 'Keighley Towngate', '01535 605105', 'BD21 3QE', '58 Towngate', 'W. Yorkshire', 'Greggs', true),\
		(91178, 52.6072543637918000, 1.7266164682358300, 'Grt Yarmouth King St', '0149 3855521', 'NR30 1LS', '182 King Street', 'Norfolk', 'Greggs', false),\
		(91179, 52.5504243621398000, 0.0885793112689030, 'March Broad St', '01354 653169', 'PE15 8TP', '33/35 Broad Street', 'March', 'Greggs', false),\
		(91180, 51.4567501136645000, -2.5898604454604000, 'Bristol The Gallries', '01179 251883', 'BS1 3XD ', 'Unit CG12, The Galleries', 'Bristol', 'Greggs', true),\
		(91181, 51.6666952946970000, -3.1951066857662400, 'Blackwood High St', '01495 227625', 'NP12 1AB', 'Unit 1, 124-128 High Street', 'South Wales', 'Greggs', false),\
		(91182, 51.3770230000000000, -2.3782913980000000, 'Bath Moorland Rd', '01225 466259', 'BA2 3PN ', '44 Moorland Road', 'Bath', 'Greggs', false),\
		(91183, 56.1944731502977000, -2.9970935348222400, 'Leven High St', '01333 422200', 'KY8 4NE ', '53/55 High Street', 'Fife', 'Greggs', false),\
		(91184, 55.8614100112568000, -4.3670182555322300, 'Glas Hillington RP', '0141 8827592', 'G52 4LY ', 'Unit 4, Hillington Retail Park', 'Hillington', 'Greggs', false),\
		(91185, 54.9913542006926000, -1.5357282250497000, 'Wallsend 28 Forum SC', '0191 2626100', 'NE28 8JP', '28/30 Segedunum Way', 'Wallsend', 'Greggs', true),\
		(91186, 51.5841785192604000, -0.0243070578150120, 'Walthmstw Palace Pde', '0208 5216830', 'E17 7BU ', '1 Palace Parade', 'London', 'Greggs', true),\
		(91187, 51.0694338967278000, -1.7978566651409100, 'Salisbury The Mltngs', '01722 417550', 'SP1 1BD ', '29 The Maltings', 'Wiltshire', 'Greggs', true),\
		(91188, 51.5769682389568000, 0.1831379607095480, 'Romfrd Western Rd', '01708 733574', 'RM1 3LD ', 'Unit A, 16 Western Road', 'Romford', 'Greggs', true),\
		(91189, 50.8457315303361000, -1.0670255024399800, 'Cosham High St', '02392 383543', 'PO6 3BZ ', '18 High Street', 'Portsmouth', 'Greggs', false),\
		(91190, 55.8586344747429000, -4.2179167080011000, 'Glas Duke St', '0141 5565103', 'G31 1DL ', '543/545 Duke Street', 'Glasgow', 'Greggs', false),\
		(91191, 54.5753898333975000, -1.2358232695828000, 'Middlsboro Cleveland', '01642 232213', 'TS1 2NR ', '25 Centre Mall', 'Middlesbrough', 'Greggs', true),\
		(91192, 51.8797502326549000, -0.4121831773952960, 'Luton 51 The Mall', '01582 723435', 'LU1 2JX ', '51 Arndale Centre', 'Luton', 'Greggs', true),\
		(91193, 53.4207278982248000, -1.2844978244952000, 'Wickersley Bawtry Rd', '01709 548011', 'S66 1AA ', '236 Bawtry Road', 'Wickersley', 'Greggs', true),\
		(91194, 51.7339028712948000, 0.4716964261159480, 'Chelmsford Chelmer', '01245 267738', 'CM1 1XD ', '20 Exchange Way', 'Chelmsford', 'Greggs', false),\
		(91195, 51.4617293673221000, -0.0117489921597140, 'Lewisham The Mall', '0208 4630712', 'SE13 7EP', 'Unit 13, The Mall', 'Lewisham', 'Greggs', true),\
		(91196, 51.0627324801460000, -0.3310497122100980, 'Horsham West St', '01403 218579', 'RH12 1PB', '27 West Street', 'Horsham', 'Greggs', false),\
		(91197, 51.4564567602378000, 0.1445191968297050, 'Bexleyheath Broadway', '0208 3315202', 'DA6 7JH ', '111 Broadway', 'Kent', 'Greggs', false),\
		(91198, 51.4342215050358000, -0.5114508911259550, 'Staines 60 High St', '01784 465157', 'TW18 4DY', '60 High Street', 'Staines', 'Greggs', true),\
		(91199, 53.3767624977390000, -1.4725161198147500, 'Shefld 61 The Moor', '0114 2769638', 'S1 4PF  ', '61 The Moor', 'Sheffield', 'Greggs', true),\
		(91200, 53.7457766124962000, -0.3438569128674240, 'Hull Prospect CTR', '01482 320993', 'HU2 8PW ', 'Unit 7 Prospect Centre', 'Hull', 'Greggs', false),\
		(91201, 53.7896835500000000, -2.2435522500000000, 'Burnley 31 The Mall', '01282 429766', 'BB11 1BA', '31 The Mall', 'Burnley', 'Greggs', true),\
		(91202, 53.2588573079550000, -1.9120726630651400, 'Buxton Spring Gdns', '01298 72707 ', 'SK17 6DE', '30/32 Spring Gardens', 'Buxton', 'Greggs', true),\
		(91203, 53.5417231055811000, -2.1137096352228600, 'Oldham Town Sq SC', '0161 6285225', 'OL1 1XD ', 'Unit 6, Town Square Shopping C', 'Oldham', 'Greggs', true),\
		(91204, 54.6075037046361000, -1.2925669605400700, 'Billingham Queensway', '01642 554843', 'TS23 2ND', '57 Queensway', 'Cleveland', 'Greggs', true),\
		(91205, 54.5654876662915000, -1.3141114491373800, 'Stockton Wellingt Sq', '01642 616034', 'TS18 1RH', '34 Wellington Square', 'Stockton on Tees', 'Greggs', true),\
		(91206, 55.9351802862715000, -3.4464897566860300, 'Broxburn Fairfld Hse', '01506 857091', 'EH52 5BQ', 'Former Fairfield Fayre', 'Scotland', 'Greggs', false),\
		(91207, 52.4818043900000000, -1.8970158180000000, 'Birm Grt Western Arc', '0121 2365855', 'B2 5HU  ', '37/38 Great Western Arcade', 'Birmingham', 'Greggs', true),\
		(91208, 51.8644302942189000, -2.2435935005903900, 'Gloucster Kings Wk', '01452 503493', 'GL1 1RW ', '28 Kings Walk Shopping Centre', 'Gloucester', 'Greggs', true),\
		(91209, 53.0263067646286000, -2.1746232623511100, 'Hanley Upper Mkt Sq', '01782 214212', 'ST1 1NS ', '2 Upper Market Square', 'Stoke on Trent', 'Greggs', true),\
		(91210, 56.4721671901106000, -3.0100119118933500, 'Lochee High St', '01382 624863', 'DD2 3BL ', '116 High Street', 'Dundee', 'Greggs', false),\
		(91211, 55.9986670079486000, -3.7819135895071100, 'Falkirk High St', '01324 629802', 'FK1 1DU ', '163 High Street', 'Falkirk', 'Greggs', false),\
		(91212, 55.9413904166156000, -3.1810062368504400, 'Edin South Clerk St', '0131 6674699', 'EH8 9JD ', '9 South Clerk Street', 'Edinburgh', 'Greggs', false),\
		(91213, 55.9489015140240000, -3.1866955520404100, 'Edin South Bridge', '0131 5588183', 'EH1 1LL ', '21 South Bridge', 'Edinburgh', 'Greggs', true),\
		(91214, 52.7712475128918000, -1.2079581188739700, 'Loughboro Market St', '01509 269887', 'LE11 3EP', '5 Market Street', 'Loughborough', 'Greggs', true),\
		(91215, 52.8966122655539000, -1.2689119136201500, 'Long Eaton High St', '0115 9725622', 'NG10 1HZ', '67 High Street', 'Long Eaton', 'Greggs', true),\
		(91216, 53.7866611084347000, -0.3220125999594610, 'Hull Northpoint SC', '01482 835871', 'HU7 4EE ', '37 Northpoint Shopping Centre', 'Hull', 'Greggs', false),\
		(91217, 52.0611976073049000, -1.3364627324411800, 'Banbury High St', '01295 251836', 'OX16 5EE', '17 High Street', 'Banbury', 'Greggs', true),\
		(91218, 53.8046594869707000, -1.4515988245763100, 'Leeds Cross Gates SC', '0113 2643292', 'LS15 8BZ', '26/27 Crossgates Shopping Cent', 'Leeds', 'Greggs', true),\
		(91219, 52.4774144077984000, -0.9187977783974590, 'Mrk Harb St Marys Pl', '01858 434482', 'LE16 7DR', 'Unit 5A, St Marys Place Shoppi', 'Market Harborough', 'Greggs', false),\
		(91220, 52.4113723787098000, -1.4812797833797600, 'Coventry Walsgrve Rd', '02476 448037', 'CV2 4BA ', '243 Walsgrave Road', 'Coventry', 'Greggs', true),\
		(91221, 54.3290220448019000, -2.7465572590230600, 'Kendal Wstmorland SC', '01539 739670', 'LA9 4LR ', 'Unit 11 Westmorland Centre', 'Kendal', 'Greggs', true),\
		(91222, 52.5416466135885000, -1.3716071902980800, 'Hinckley Castle St', '01455 890273', 'LE10 1DB', '20/22 Castle Street', 'Leicestershire', 'Greggs', true),\
		(91223, 52.4137588700000000, -1.7787196100000000, 'Solihull High St', '0121 7049558', 'B91 3SJ ', '33 High Street', 'Solihull', 'Greggs', true),\
		(91224, 52.9509293711383000, -1.1490593696999900, 'Notham Listergate', '0115 9505184', 'NG1 7DD ', '6-8 Listergate', 'Nottingham', 'Greggs', true),\
		(91225, 52.3997233448837000, -0.7285485403203920, 'Kettering High St', '01536 515265', 'NN16 8SY', '57 High Street', 'Northants', 'Greggs', false),\
		(91226, 53.4062099537061000, -2.9808898937642700, 'Lvrpool St Johns SC', '0151 7099275', 'L1 1LP  ', '60 Houghton Street', 'Liverpool', 'Greggs', true),\
		(91227, 53.0988247607599000, -2.4409168828651900, 'Crewe Mkt St', '01270 500202', 'CW1 2HD ', '62 Market Street', 'Crewe', 'Greggs', true),\
		(91228, 52.5844313597434000, -1.9834856122997100, 'Walsall Townend Sq', '01922 624475', 'WS1 1LY ', 'Units 3 & 4 Park Place', 'West Midlands', 'Greggs', true),\
		(91229, 52.7732670462048000, -1.5561602977350700, 'Swadlincote High St', '01283 558099', 'DE11 8HY', '6 High Street', 'Derbyshire', 'Greggs', true),\
		(91230, 52.1926884158426000, -2.2209112117510900, 'Wrcster High St', '01905 611863', 'WR1 2QA ', '58 High Street', 'Worcester', 'Greggs', true),\
		(91231, 52.5855052409857000, -2.1275225158362600, 'Whmptn Dudley St', '01902 312407', 'WV1 3EN ', '3 Dudley Street', 'Wolverhampton', 'Greggs', true),\
		(91232, 54.5271995217598000, -1.5534914703000100, 'Darlington Northgate', '01325 366035', 'DL1 1PR ', '52 Northgate', 'Darlington', 'Greggs', true),\
		(91233, 51.2740615139348000, 0.5236697634304590, 'Maidstone Coleman', '01622 762378', 'ME14 1DJ', '6 Colman Parade', 'Kent', 'Greggs', false),\
		(91234, 51.0617033298904000, -1.3118465280413000, 'Winchester High St', '01962 813580', 'SO23 9JX', '16 High Street', 'Winchester', 'Greggs', false),\
		(91235, 55.4994291372438000, -4.6105878567844400, 'Prestwick Main St', '01292 474466', 'KA9 1JS ', '85 Main Street', 'Ayrshire', 'Greggs', false),\
		(91236, 51.3813383700000000, -2.3614147560000000, 'Bath Westgate St', '01225 337565', 'BA1 1EQ ', '8 Westgate Street', 'Bath', 'Greggs', true),\
		(91237, 51.2052667400000000, -2.1801206860000000, 'Warminster 3 Horse', '01985 213524', 'BA12 9BT', 'Unit 18 Three Horseshoes Walk', 'Warminster', 'Greggs', false),\
		(91238, 51.2651379749642000, -1.0865247968670100, 'Basingstoke Fest Pl', '01256 842151', 'RG21 7JT', 'Unit 12 Mayfair House', 'Basingstoke', 'Greggs', false),\
		(91239, 51.5114712624965000, -0.1182331146841700, 'Ldn The Strand', '02072405396 ', 'WC2R 1JA', '143 The Strand', 'London', 'Greggs', true),\
		(91240, 50.7182376400000000, -1.9815047850000000, 'Poole Dolphin SC', '01202 667146', 'BH15 1SU', 'Unit 14B, 43 Dolphin Centre', 'Dorset', 'Greggs', false),\
		(91241, 53.6460283368078000, -1.7799679746352600, 'Hudfield Kingsgate', '01484 428883', 'HD1 2QB ', '39 Kingsgate Shopping Centre', 'Huddersfield', 'Greggs', true),\
		(91242, 53.7235369577327000, -1.3144691207278800, 'Castleford Square', '01977 518777', 'WF10 3JJ', '9 The Square', 'Castleford', 'Greggs', false),\
		(91243, 51.1930468397721000, 0.2722701989897930, 'Tonbridge 22 High St', '01732 770530', 'TN9 1EJ ', '22 High Street', 'Kent', 'Greggs', false),\
		(91244, 54.0718705839866000, -2.8656727937372600, 'Morecambe Arndale', '01524 411931', 'LA4 5DH ', 'Unit 8 Royalty Mall', 'Morecambe', 'Greggs', true),\
		(91245, 55.8349622122881000, -4.4236073866082800, 'Paisley Neilston Rd', '0141 8876084', 'PA2 6NE ', '66 Neilston Road', 'Paisley', 'Greggs', false),\
		(91246, 54.9771502807421000, -1.6138688669212700, 'Ncl Haymarket', '0191 2612268', 'NE1 7PF ', 'Unit 1b, Haymarket', 'Newcastle upon Tyne', 'Greggs', true),\
		(91247, 52.6276512811704000, 1.2940287489384400, 'Norwch White Lion St', '01603 764626', 'NR2 1QA ', '18 White Lion Street', 'Norfolk', 'Greggs', true),\
		(91248, 52.3750358194729000, 1.1092030968972600, 'Diss Mere St', '01379 651468', 'IP22 4AD', '22/24 Mere Street', 'Norfolk', 'Greggs', false),\
		(91249, 55.7898716274068000, -3.9912026175729800, 'Mthrwll 61 Brndn Pde', '01698 276108', 'ML1 1RB ', '61 Brandon Parade', 'Motherwell', 'Greggs', false),\
		(91250, 53.4834585494695000, -2.2416874610587700, 'Manc 32 Arndale SC', '0161 8321645', 'M4 2HU  ', '32 Brown Court', 'Manchester', 'Greggs', true),\
		(91251, 52.0561295622693000, -2.7177710251692700, 'Hereford Broad St', '01432 352750', 'HR4 9AB ', '53 Broad Street', 'Hereford', 'Greggs', false),\
		(91252, 51.9026128360114000, -2.1151690029499800, 'Cheltenham Coronatn', '01242 530931', 'GL51 7SE', '78 Edinburgh Place', 'Cheltenham', 'Greggs', false),\
		(91253, 55.8260752334849000, -4.2651272760847000, 'Glas Battlefield Rd', '0141 6328041', 'G42 9JT ', '172 Battlefield Road', 'Glasgow', 'Greggs', true),\
		(91254, 55.7897661013410000, -4.2767688446810600, 'Clarkston Busby Rd', '0141 6383892', 'G76 7BG ', 'Unit 5, The Toll', 'Glasgow', 'Greggs', false),\
		(91255, 53.4660242748945000, -2.3102309951830000, 'Stretford Third Ave', '0161 8770756', 'M17 1JE ', '388 Cooper House', 'Manchester', 'Greggs', true),\
		(91256, 52.7238006689679000, -1.3718655870747300, 'Coalville Belvoir SC', '01530 838247', 'LE67 3XB', 'SU17  (No 40) Belvoir Shopping', 'Leicestershire', 'Greggs', true),\
		(91257, 54.9692492214361000, -1.6048066753154800, 'Ncl Quayside', '0191 2302454', 'NE1 3DE ', 'Suite 2, Indian Kings House', 'Newcastle upon Tyne', 'Greggs', true),\
		(91258, 52.4768135200000000, -1.8953637360000000, 'Birm Bullring SC', '01216436951 ', 'B5 4BA  ', 'Unit 3B, Bull Ring', 'Birmingham', 'Greggs', true),\
		(91259, 52.3870888766161000, -2.2504744515690500, 'Kddminster Weavr Whf', '01562 662820', 'DY10 1AA', 'Unit 6, Weavers Wharf', 'Kidderminster', 'Greggs', false),\
		(91260, 51.2632855583490000, -1.0865185106066200, 'Basingstoke Wote St', '01256 476833', 'RG21 7NE', '13 Wote Street', 'Basingstoke', 'Greggs', false),\
		(91261, 55.5989245535924000, -2.4335289487095400, 'Kelso The Square', '01573 225990', 'TD5 7HW ', '47/49 The Square', 'Kelso', 'Greggs', false),\
		(91262, 51.4201952981212000, -0.2041383792162430, 'Wimbledon Broadway', '0208 9712173', 'SW19 1RE', '32/32A The Broadway', 'Wimbledon', 'Greggs', true),\
		(91263, 50.7947825324748000, -1.1196156307961900, 'Gosport High St', '02392 585179', 'PO12 1DS', '87 High Street', 'Hampshire', 'Greggs', false),\
		(91264, 50.8527001721000000, -1.1794846449443400, 'Fareham West St', '01329 828399', 'PO16 0AD', 'Unit 3, Savoy Buildings', 'Hampshire', 'Greggs', false),\
		(91265, 50.8213590682574000, -1.0522496986081500, 'Portsmth Quartremain', '02392 663076', 'PO3 5QP ', 'The Lodge, Ameiva Point', 'Portsmouth', 'Greggs', false),\
		(91266, 51.6069422850107000, -1.2388879774688000, 'Didcot Orchard CTR', '01235 511954', 'OX11 7LG', 'Unit 13, Orchard Centre', 'Oxfordshire', 'Greggs', true),\
		(91267, 52.2374748314503000, -0.8964757834788500, 'Nmptn Mercers Rw', '01604 636683', 'NN1 2QL ', '5 Mercers Row', 'Northampton', 'Greggs', true),\
		(91268, 52.6021183478793000, 0.3769307742038440, 'Dwnham Mkt Wales Crt', '01366 381025', 'PE38 9JZ', 'Units 1 & 2 Wales Court S.C', 'Downham Market', 'Greggs', false),\
		(91269, 52.4804744700000000, -1.8976962310000000, 'Birm Cherry St', '0121 6437929', 'B2 5LS  ', 'Unit 6 Cherry Street', 'Birmingham', 'Greggs', true),\
		(91270, 52.9790407307763000, -0.0218288743996350, 'Boston Pescod Sq SC', '01205 356216', 'PE21 6QX', 'Unit 12A, 14 Pescod Square', 'Boston', 'Greggs', false),\
		(91271, 53.7586350314648000, -1.5742228181934800, 'Leeds 57 Wht Rose SC', '0113 2721943', 'LS11 8LU', 'Unit 57b, White Rose Centre', 'Leeds', 'Greggs', true),\
		(91272, 53.9928860427258000, -1.5397921111989500, 'Harrogate Mkt Pl', '01423 508163', 'HG1 1RP ', '17 Market Place', 'Harrogate', 'Greggs', true),\
		(91273, 56.0261346978198000, -3.8172473216487700, 'Stenhsemuir King St', '01324 579836', 'FK5 4HD ', '35 King Street', 'Stenhousemuir', 'Greggs', false),\
		(91274, 51.4911246649466000, 0.0679093885991590, 'Ldn Woolwch 6 Powis', '0208 8542953', 'SE18 6LF', '6 Powis Street', 'Woolwich', 'Greggs', true),\
		(91275, 52.8076397261052000, -2.1182485033765300, 'Stafford Gaolgate St', '01785252896 ', 'ST16 2BG', '7 Gaolgate Street', 'Staffordshire', 'Greggs', true),\
		(91276, 54.9928732300668000, -1.6743294430245000, 'Ncl Binswood Ave', '0191 2864511', 'NE5 3PN ', 'Unit A, Stamfordham Rd/Binsfor', 'Newcastle upon Tyne', 'Greggs', true),\
		(91277, 54.9598491943888000, -1.6778602633301800, 'Ghead Mtr Gibside Wy', '0191 4609071', 'NE11 9YA', 'Unit 2, Gibside Way', 'Tyne & Wear', 'Greggs', true),\
		(91278, 51.4827692842131000, -3.1709357442669900, 'Cardiff 140 Queen St', '02920 374910', 'CF10 2GP', 'The Aspect', 'Cardiff', 'Greggs', true),\
		(91279, 55.9555618392270000, -2.7771792533049800, 'Haddington High St', '01620 823107', 'EH41 3EN', '68 High Street', 'Haddington', 'Greggs', false),\
		(91280, 53.1445146678113000, -1.1968641188957200, 'Mansfield Mkt Pl', '01623 656957', 'NG18 1HZ', '19-21 Market Place', 'Notts', 'Greggs', false),\
		(91281, 53.4331996569289000, -1.3564015022582300, 'Rotherham College Wk', '01709 835862', 'S60 1QB ', 'Unit 15, College Walk', 'Rotherham', 'Greggs', false),\
		(91282, 55.0114758488688000, -1.5912725508158400, 'Lngbenton Boulevard', '0191 2666387', 'NE12 8GA', 'Unit 5 The Boulevard', 'Tyne & Wear', 'Greggs', true),\
		(91283, 52.9884953673669000, -2.1356205810319400, 'Longton Bennett PCT', '01782 599649', 'ST3 2HT ', 'Unit 39, Bennett Precinct', 'Stoke on Trent', 'Greggs', true),\
		(91284, 50.7952014685685000, -1.0944511186156300, 'Portsmth Charter Hse', '02392 753905', 'PO1 2SB ', 'Unit 4, Charter House', 'Portsmouth', 'Greggs', true),\
		(91285, 51.2527921839985000, 0.5456361685132060, 'Maidstone Nrthum Crt', '01622 672653', 'ME15 7LW', '14 Northumberland Court', 'Maidstone', 'Greggs', false),\
		(91286, 53.8375001726805000, -1.6415481702386400, 'Horsforth Town St', '01132588336 ', 'LS18 5LJ', '33b Town Street', 'Horsforth', 'Greggs', true),\
		(91287, 50.7268938100000000, -1.8373160920000000, 'Boscombe Christch', '01202 300409', 'BH1 4AP ', '619 Christchurch Road', 'Bournemouth', 'Greggs', false),\
		(91288, 52.8909224611488000, -1.4528803608088300, 'Derby Osmaston Rd', '01332 365067', 'DE24 9AA', '830 Osmaston Road', 'Derby', 'Greggs', true),\
		(91289, 52.9848166906697000, -1.1202261621600500, 'Notham Woodbrough Rd', '01159 858312', 'NG3 5QS ', '922 Woodborough Road', 'Nottingham', 'Greggs', true),\
		(91290, 51.4585801815396000, -2.5871205354507400, 'Bristol Cabot Circus', '0117 9304055', 'BS1 3JX ', '110 & 112 Horsefair', 'Bristol', 'Greggs', true),\
		(91291, 55.0370229046352000, -1.7101156338379900, 'Ncl Airport', '0191 2863871', 'NE13 8BZ', 'Newcastle International Airpor', 'Newcastle upon Tyne', 'Greggs', true),\
		(91292, 52.6375275555597000, -1.1327493212524000, 'Leicestr Belgrave Gt', '0116 2517632', 'LE1 3GP ', '20 Belgrave Gate', 'Leicester', 'Greggs', true),\
		(91293, 53.4728557191348000, -2.2399247465636500, 'Manc 10 Oxford Rd', '0161 2362209', 'M1 5QA  ', '10 Oxford Road', 'Manchester', 'Greggs', true),\
		(91294, 51.2809163307616000, -0.8421787032354160, 'Fleet Fleet Rd', '01252 626375', 'GU51 3BY', '239/239a Fleet Road', 'Fleet', 'Greggs', false),\
		(91295, 51.4109094392469000, -0.8343406608731680, 'Wokingham Broad St', '01189 892446', 'RG40 1AY', '6 Broad Street', 'Wokingham', 'Greggs', false),\
		(91296, 50.8098895300000000, -0.3755472570000000, 'Worthing Montague St', '01903 200501', 'BN11 3BP', '111 Montague Street', 'West Sussex', 'Greggs', false),\
		(91297, 51.1145241149852000, -0.1868109726534900, 'Crawley Martletts', '01293 541706', 'RH10 1ES', 'Unit 6, 26 The Martletts', 'Crawley', 'Greggs', true),\
		(91298, 52.8993414770519000, -1.8652292220529100, 'Uttoxeter High St', '01889 567416', 'ST14 7HT', '10 High Street', 'Uttoxeter', 'Greggs', true),\
		(91299, 55.9468801148889000, -3.2161452880189200, 'Edin Wst Maitland St', '0131 2265109', 'EH12 5EA', '17 West Maitland Street', 'Edinburgh', 'Greggs', false),\
		(91300, 56.4673009754720000, -2.8746487624965800, 'Dundee Brook St', '01382738752 ', 'DD5 2AG ', '259 Brook Street', 'Dundee', 'Greggs', false),\
		(91301, 54.8639931978872000, -1.4345677657964700, 'Sdland Doxford BP', '0191 5285196', 'SR3 3XL ', '3 Victory Way', 'Sunderland', 'Greggs', true),\
		(91302, 54.9766665250322000, -1.4688108979660500, 'Jarrow Bede IE', '0191 4839539', 'NE32 3HE', 'Unit 2a Bede Trade Park', 'Jarrow', 'Greggs', true),\
		(91303, 54.9576405462948000, -1.6685552476180600, 'Ghead Mtr Russell Wy', '0191 4606468', 'NE11 9XX', 'Unit 1.283  89 Russell Way', 'Gateshead', 'Greggs', true),\
		(91304, 53.7048434283273000, -0.8717308277126150, 'Goole Wesley Sq', '0140 5765616', 'DN14 5EZ', '5 Wesley Square', 'Goole', 'Greggs', false),\
		(91305, 50.8239229000000000, -0.1476584410000000, 'Brighton Western Rd', '01273 321468', 'BN1 2EB ', '51 Western Road', 'East Sussex', 'Greggs', true),\
		(91306, 52.4123865620169000, -0.7390348770177220, 'Kettering Henson Cl', '01536 411402', 'NN16 8PZ', '1 Henson Close', 'Northamptonshire', 'Greggs', false),\
		(91307, 51.9151960719032000, -2.5830135385192400, 'Ross On Wye Broad St', '01989 763861', 'HR9 7EA ', '11 Broad Street', 'Ross on Wye', 'Greggs', true),\
		(91308, 51.8019158000000000, -0.2057328350000000, 'Welwyn Gc Stonehills', '01707 323551', 'AL8 6PD ', '30 Stonehills', 'Welwyn Garden City', 'Greggs', false),\
		(91309, 53.3055228501053000, -1.1247096960082600, 'Worksop Priory SC', '01909 478167', 'S80 1JN ', 'Unit 29, The Priory Shopping C', 'Worksop', 'Greggs', false),\
		(91310, 51.3772994800000000, 0.1019038670000000, 'Orpington 145 High S', '01689 896815', 'BR6 0TW ', '145 High Street', 'Orpington', 'Greggs', false),\
		(91311, 51.2916712938258000, -0.7562605231142560, 'Farnborough Queensmd', '01252 543474', 'GU14 7SB', '68 Queensmead', 'Farnborough', 'Greggs', false),\
		(91312, 52.5032472521843000, -2.1510021829085700, 'Kngswnfd Pensnett IE', '01384 402935', 'DY6 7XN ', 'Bay 2, Building 39', 'Kingswinford', 'Greggs', false),\
		(91313, 51.9943490865239000, -0.7310755548986040, 'Bletchley Queensway', '01908 643545', 'MK2 2RU ', '108 Queensway', 'Bletchley', 'Greggs', true),\
		(91314, 52.5977252558695000, -2.0959493222123500, 'Whmptn Nw Cross Hosp', '01902 738336', 'WV10 0QP', 'The Event', 'Wolverhampton', 'Greggs', true),\
		(91315, 55.8484955640501000, -4.2506319178659400, 'Gorbals Crown St', '0141 4298301', 'G5 9XT  ', '169 Crown Street', 'Glasgow', 'Greggs', false),\
		(91316, 55.9021917593102000, -3.6414908531214900, 'Bathgate George Pl', '01506 652924', 'EH48 1PW', 'Unit 2, 2/4 George Place', 'Scotland', 'Greggs', false),\
		(91317, 51.5006696794873000, -3.5616304467569200, 'Bridgend Bridgend IE', '01656668859 ', 'CF31 3RF', 'Unit 7 Raven Close', 'South Wales', 'Greggs', false),\
		(91318, 51.3473735519096000, -2.9782028917331000, 'Wst Sup Mare Rgnt St', '01934 644198', 'BS23 1SL', '42 Regent Street', 'Weston Super Mare', 'Greggs', false),\
		(91319, 51.4802554874501000, 0.1799272186963910, 'Erith Riverside SC', '01322 359401', 'DA8 1RE ', 'Unit 23, Riverside Shopping Ce', 'Kent', 'Greggs', false),\
		(91320, 51.7360808076774000, 0.4664851057643650, 'Chelmsford Intrchnge', '01245 299203', 'CM1 1GZ ', 'Unit 5C The Interchange', 'Chelmsford', 'Greggs', false),\
		(91321, 55.6765505928696000, -4.0664096122308000, 'Strathaven Cmmon Grn', '01357 529271', 'ML10 6AQ', '35/37 Common Green', 'Strathaven', 'Greggs', false),\
		(91322, 51.8871332937929000, -0.5205699685589480, 'Dunstable Quadrant', '01582 664327', 'LU5 4RH ', 'Unit 18, 15 Broadwalk South', 'Dunstable', 'Greggs', true),\
		(91323, 52.2065997976989000, 0.1304619909119680, 'Cambridge Fitzroy St', '01223 302937', 'CB1 1EW ', 'Unit 2A, 2/14 Fitzroy Street', 'Cambridge', 'Greggs', true),\
		(91324, 53.4058469169095000, -2.9647710875727900, 'Lvrpool Brownlw Hill', '0151 7036668', 'L3 5TY  ', 'Unit 5, The Foundation', 'Liverpool', 'Greggs', true),\
		(91325, 53.4970809135360000, -2.2347404613718200, 'Manc Fort SP', '0161 8394356', 'M8 8EP  ', 'Unit 34, The Fort Shopping Par', 'Manchester', 'Greggs', true),\
		(91326, 53.3817107392056000, -1.4694633337130400, 'Shefld Fargate', '01142 795561', 'S1 2HE  ', '6 Fargate', 'Sheffield', 'Greggs', true),\
		(91327, 53.4804348735254000, -2.2389881152230700, 'Manc Piccadilly Plza', '01612362456 ', 'M1 4AH  ', 'Unit B2, Piccadilly Plaza', 'Manchester', 'Greggs', false),\
		(91328, 51.5738722254628000, -1.7691230301904400, 'Elgin Elgin IE', '01793 490817', 'SN2 8EA ', 'Unit 2271K Dunbeath Road', 'Swindon', 'Greggs', false),\
		(91329, 51.6141238188031000, -0.1759984670175740, 'Nth Finchly High Rd', '0208 4920483', 'N12 9QD ', '720 High Road', 'North Finchley', 'Greggs', true),\
		(91330, 55.8500195684523000, -4.1114739550032100, 'Baillieston Main St', '0141 7715596', 'G69 6SL ', '80-82 Main Street', 'Glasgow', 'Greggs', false),\
		(91331, 51.3337739220001000, -0.2666619089975730, 'Epsom High St', '01372 744238', 'KT19 8AJ', '48 High Street', 'Epsom', 'Greggs', false),\
		(91332, 52.5012531100000000, -1.7710775310000000, 'Castle Brom Timberly', '0121 7470838', 'B34 7EH ', '28 Timberley Lane', 'Birmingham', 'Greggs', true),\
		(91333, 53.0179328147983000, -1.3047717573561900, 'Eastwood Nottingham', '01773 768364', 'NG16 3AL', '67 Nottingham Road', 'Nottinghamshire', 'Greggs', false),\
		(91334, 54.1128706772272000, -3.2249450772865000, 'Barrow 136 Dalton Rd', '01229 811272', 'LA14 1JH', '136 Dalton Road', 'Barrow in Furness', 'Greggs', false),\
		(91335, 51.3594905592516000, 1.3929410259885000, 'Broadstairs Westwood', '01843 871339', 'CT10 2BF', 'Unit 16, The Fort', 'Kent', 'Greggs', false),\
		(91336, 51.4096227607383000, -0.3057822871324430, 'Kingston Mkt Pl', '0208 5467241', 'KT1 1JH ', '28 Market Place', 'Kingston upon Thames', 'Greggs', true),\
		(91337, 55.1276161618142000, -1.5093716067006400, 'Blyth Regents St', '01670366484 ', 'NE24 1LP', '16 Regent Street', 'Northumberland', 'Greggs', true),\
		(91338, 51.1349025648481000, 0.2630673142533060, 'Tunbridge Wells Grov', '01892 549298', 'TN1 2AH ', '6 Grosvenor Road', 'Tunbridge Wells', 'Greggs', false),\
		(91339, 51.4923804936481000, -0.2303154027608950, 'Hammersmith King St', '0208 7486007', 'W6 9JG  ', '129 King Street', 'London', 'Greggs', true),\
		(91340, 50.9675120524264000, -1.3517891253239000, 'Eastleigh Mkt St', '02380 651693', 'SO50 5RE', '94 Market Street', 'Hampshire', 'Greggs', false),\
		(91341, 50.8673509281928000, -0.9852094305797940, 'Leigh Park Greywell', '02392 499584', 'PO9 5AH ', 'Units 59/61, Greywell Shopping', 'Havant', 'Greggs', false),\
		(91342, 51.3865336354982000, 0.5482816684484280, 'Gillingham Pentagon', '01634 579857', 'ME7 1AQ ', '139 High Street', 'Kent', 'Greggs', false),\
		(91343, 51.2082986400000000, -2.6473470710000000, 'Wells High St', '01749 671486', 'BA5 2AE ', '39 High Street', 'Somerset', 'Greggs', true),\
		(91344, 52.0865271740630000, -0.2653188818168230, 'Biggleswade Mkt Sq', '01767 601975', 'SG18 8AP', '3 Market Square', 'Biggleswade', 'Greggs', false),\
		(91345, 52.9531398420455000, -1.1514422049180300, 'Notham Beast Mkt', '0115 9414274', 'NG1 6FB ', '3 Beast Market Hill', 'Nottingham', 'Greggs', true),\
		(91346, 56.4600289039740000, -2.9729177775444000, 'Dundee Overgate SC', '01382 204779', 'DD1 1UF ', 'Unit L30 Overgate Centre', 'Dundee', 'Greggs', false),\
		(91347, 53.3988571275168000, -0.7726628782365290, 'Gainsbrough Marshall', '01427 678212', 'DN21 2NA', 'Unit 21 Marshalls Yard', 'Gainsborough', 'Greggs', false),\
		(91348, 55.8986344447214000, -3.5326621626049700, 'Lvngstn Hawkbrae', '01506 429048', 'EH54 6TW', 'Unit 2, 25 Hawkbrae', 'Livingston', 'Greggs', false),\
		(91349, 52.3015525197199000, -0.6922044107950060, 'Wllngborough Swnsgte', '01933443294 ', 'NN8 1EX ', 'Unit 13a (47) Cheese Lane', 'Wellingborough', 'Greggs', true),\
		(91350, 53.4091879333006000, -2.9946932652252900, 'Lvrpool Old Hall St', '0151 2581537', 'L3 9PP  ', '38 Old Hall Street', 'Liverpool', 'Greggs', true),\
		(91351, 52.1919712132640000, -2.2198251226101300, 'Wrcster The Shambles', '01905 611450', 'WR1 2RF ', '10 The Shambles', 'Worcester', 'Greggs', true),\
		(91352, 50.7288779100000000, -1.9359068770000000, 'Parkstone Ashley Rd', '01202 746138', 'BH14 9DF', '332 Ashley Road', 'Dorset', 'Greggs', false),\
		(91353, 50.7856206172162000, -0.6745874349932410, 'Bognor Regis Ldn Rd', '01243 828349', 'PO21 1PW', 'Unit 2, 2B London Road', 'West Sussex', 'Greggs', false),\
		(91354, 55.9038734429096000, -4.4485124141358000, 'Erskine Bridgewtr SC', '0141 8126138', 'PA8 7AA ', 'Unit 6 Bridgewater Shopping Ce', 'Erskine', 'Greggs', false),\
		(91355, 0.0000000000000000, 0.0000000000000000, 'Havant West St', '02392499471 ', 'PO9 1EP ', '1 West Street', 'Hampshire', 'Greggs', false),\
		(91356, 53.8071361152307000, -1.5875351911221400, 'Leeds Kirkstall Rd', '0113 2038076', 'LS4 2EZ ', 'Unit 4, 385 Kirkstall Road', 'Leeds', 'Greggs', true),\
		(91357, 53.5240524637619000, -1.1385999193410800, 'Doncaster 16 Frenchg', '01302 556286', 'DN1 1LB ', 'Unit SU16, Frenchgate Intercha', 'Doncaster', 'Greggs', false),\
		(91358, 54.5318947572874000, -1.2000422213004600, 'Marton Marton Estate', '01642 327288', 'TS7 8DU ', 'Unit 3 Marton Estates Square', 'Middlesbrough', 'Greggs', true),\
		(91359, 51.4782622076254000, -3.1765370856488600, 'Cardiff Caroline St', '02920 227896', 'CF10 1FG', '23 Caroline Street', 'Cardiff', 'Greggs', true),\
		(91360, 51.5263784771617000, -3.6875526036254400, 'Bridgend Vlg Farm IE', '01656746923 ', 'CF33 6BJ', 'Unit 3 Plot 11b Village Farm I', 'Mid Glamorgan', 'Greggs', false),\
		(91361, 52.5996544962301000, -1.0840209181452600, 'Oadby The Pde', '0116 2718395', 'LE2 5BF ', '28 The Parade', 'Leicestershire', 'Greggs', true),\
		(91362, 54.9258711171578000, -2.9479258681117800, 'Carlisle Kingstown', '01228 533329', 'CA3 0ET ', 'Unit 1 Grearshill Road', 'Carlisle', 'Greggs', false),\
		(91363, 52.5773109609962000, -1.5472058461639500, 'Atherstone Long St', '01827 719827', 'CV9 1BB ', '91 Long Street', 'Warwickshire', 'Greggs', false),\
		(91364, 51.2082585553232000, -1.4792137032669300, 'Andover High St', '01264 338940', 'SP10 1LP', '57 High Street', 'Hampshire', 'Greggs', false),\
		(91365, 51.4857296993999000, 0.2844452282462360, 'Thurrock Lakeside SC', '01708 862272', 'RM20 2ZT', 'Unit 5b Lakeside Shopping Cent', 'Essex', 'Greggs', true),\
		(91366, 53.2603323329877000, -2.1264368444691200, 'Macclesfld Grosvenor', '01625 437176', 'SK11 6AJ', 'Unit 7 Mill Street Mall', 'Macclesfield', 'Greggs', true),\
		(91367, 53.0114795055459000, -2.2251636372652600, 'Ncl U Lyme Cstl Wlk', '01782 617274', 'ST5 1AN ', 'Unit 6 Castle Walk Shopping Ce', 'Newcastle Under Lyme', 'Greggs', true),\
		(91368, 55.8292872345206000, -4.2819524750544100, 'Shawlands Kilmarnock', '0141 6326481', 'G41 3YN ', '15 Kilmarnock Road', 'Glasgow', 'Greggs', true),\
		(91369, 55.9642445914301000, -3.1768163167610200, 'Edin Leith Wlk', '01315537958 ', 'EH6 8SD ', '357/359 Leith Walk', 'Edinburgh', 'Greggs', false),\
		(91370, 52.4975276900000000, -1.8968760700000000, 'Birm Newtown SC', '0121 3597952', 'B19 2SS ', 'Unit 33 Newtown Shopping Centr', 'Birmingham', 'Greggs', true),\
		(91371, 53.7593949700000000, -1.7393181420000000, 'Bradford Euroway Te', '01274 687630', 'BD4 6SG ', 'Unit 4a Euroway Trading Estate', 'Bradford', 'Greggs', true),\
		(91372, 54.6435108344796000, -3.5458871426026600, 'Wrkngtn Washngton Sq', '01900 65191 ', 'CA14 3DZ', 'Unit S32/33 Washington Square', 'Workington', 'Greggs', true),\
		(91373, 54.6551802662003000, -1.2335987923630400, 'Hartpl The Fens', '01429 279239', 'TS25 2LS', '398 Catcote Road', 'Hartlepool', 'Greggs', true),\
		(91374, 53.3218725643542000, -0.9425092284617740, 'Retford Carolgate', '01777 709195', 'DN22 6BU', '18A Carolgate', 'Nottinghamshire', 'Greggs', false),\
		(91375, 53.7601703284508000, -2.7010089220179900, 'Preston Orchard St', '01772 556192', 'PR1 2EN ', '13A/14 Orchard Street', 'Lancashire', 'Greggs', true),\
		(91376, 54.9658478985116000, -1.5872060896036100, 'Gateshead Saltmeadow', '0191 4777846', 'NE8 3AH ', 'Unit 3 Saltmeadows Road', 'Gateshead', 'Greggs', true),\
		(91377, 52.7541375081098000, 0.3972045269850400, 'Kngs Lynn Vancouver', '01553 773618', 'PE30 1DP', 'Unit E5, Broad Street', 'Kings Lynn', 'Greggs', false),\
		(91378, 53.4456763893423000, -2.3094201440807500, 'Stretford Arndle CTR', '0161 8651042', 'M32 9BA ', 'Unit 6, Kingsway Mall', 'Stretford', 'Greggs', true),\
		(91379, 55.8079211512336000, -4.3157319250964100, 'Thornliebank Main St', '01416386957 ', 'G46 7RY ', '77 Main Street', 'Glasgow', 'Greggs', false),\
		(91380, 54.9612066110933000, -1.8493575599771300, 'Prudhoe 55 Front St', '01661831355 ', 'NE42 5AA', '55 Front Street', 'Tyne & Wear', 'Greggs', true),\
		(91381, 51.3825663215629000, 0.5250798192404870, 'Chatham High St', '01634 819548', 'ME4 4AS ', '176 High Street', 'Chatham', 'Greggs', false),\
		(91382, 50.8793984202482000, -1.0314715103357800, 'Waterlooville Ldn Rd', '02392 261916', 'PO7 7DS ', '302 London Road', 'Hampshire', 'Greggs', false),\
		(91383, 54.9046196027218000, -1.3914542675604000, 'Sdland University', '0191 5145014', 'SR1 3SD ', 'Student Gateway', 'Sunderland', 'Greggs', false),\
		(91384, 56.3190975962732000, -3.0119969187334000, 'Cupar Crossgate', '01334 659616', 'KY15 5HA', '5 Crossgate', 'Fife', 'Greggs', false),\
		(91385, 54.5226679451829000, -1.5269059097300200, 'Darlington Yarm Rd', '01325 466356', 'DL1 1BA ', '289 Yarm Road', 'Darlington', 'Greggs', false),\
		(91386, 53.3754957762872000, -1.4747113021300300, 'Shefld 100 The Moor', '0114 2720882', 'S1 4PB  ', '100 The Moor', 'Sheffield', 'Greggs', true),\
		(91387, 50.8312579100000000, -0.1361352410000000, 'Brighton London Rd', '01273 683404', 'BN1 4JG ', '112 London Road', 'Brighton', 'Greggs', true),\
		(91388, 55.4605010850409000, -4.6289433787738300, 'Ayr High St', '01292269521 ', 'KA7 1RB ', '239 High Street', 'Ayr', 'Greggs', false),\
		(91389, 51.7922063038365000, -3.9881142918570100, 'Ammanford Quay St', '01269 597710', 'SA18 3DB', '27 Quay Street', 'Ammanford', 'Greggs', false),\
		(91390, 51.5852617512466000, -2.9941440874607700, 'Newport 42 Comm St', '01633 215490', 'NP20 1LP', '42b Commercial Street', 'Newport', 'Greggs', true),\
		(91391, 53.8009378568387000, -1.5437931013493500, 'Leeds Merrion St', '0113 2451061', 'LS2 8LW ', '68 Merrion Street', 'Leeds', 'Greggs', true),\
		(91392, 55.8188727824499000, -4.1686256161659600, 'Cambuslng Main St', '0141 6429108', 'G72 7EL ', '136 Main Street', 'Cambuslang', 'Greggs', false),\
		(91393, 53.3420266407154000, -1.3513762526437800, 'Shfield 41 Crystl Pk', '0114 2485153', 'S20 7PN ', 'Unit 41, West Mall', 'Sheffield', 'Greggs', false),\
		(91394, 52.2926300858262000, -1.5355238849686800, 'Leamngtn Spa The Pde', '01926 424899', 'CV32 4DE', '19/21 The Parade', 'Leamington Spa', 'Greggs', false),\
		(91395, 55.9047882840084000, -4.2241830040518500, 'Bshpbrgs Triangle SC', '01417725485 ', 'G64 2TR ', 'Unit 6 The Triangle Shopping C', 'Glasgow', 'Greggs', false),\
		(91396, 54.6352767686656000, -3.5620911717491000, 'Wrkngtn Buddle Rd', '01900605471 ', 'CA14 3YD', 'Unit 3c Buddle Road', 'Workington', 'Greggs', false),\
		(91397, 54.7649155453599000, -1.3688242860742900, 'Peterlee Cook Wy', '0191 5870891', 'SR8 2HY ', '1 Cook Way', 'Co. Durham', 'Greggs', true),\
		(91398, 53.4834585494695000, -2.2416874610587700, 'Manc 41 Arndale SC', '0161 8398304', 'M4 3AQ  ', 'Unit 41 Arndale Centre', 'Manchester', 'Greggs', true),\
		(91399, 51.4166777796294000, -0.7484277363003270, 'Bracknell High St', '01344 862652', 'RG12 1LN', '17 High Street', 'Bracknell', 'Greggs', false),\
		(91400, 51.4198072703351000, -1.7329401068909300, 'Marlborough High St', '01672516681 ', 'SN8 1LT ', '104 High Street', 'Marlborough', 'Greggs', false),\
		(91401, 51.8643155564050000, -2.2468749122073300, 'Gloucster Sthgte St', '01452 412579', 'GL1 1TP ', '19a Southgate Street', 'Gloucester', 'Greggs', true),\
		(91402, 51.6562338496853000, -3.9089431015081500, 'Swansea Swansea EP', '01792 700053', 'SA7 9EH ', 'Unit 6F Phoenix Way', 'Swansea', 'Greggs', false),\
		(91403, 55.7755708982189000, -4.0336037374566800, 'Hamilton Quarry St', '01698 283678', 'ML3 7AW ', '7 Quarry Street', 'Hamilton', 'Greggs', false),\
		(91404, 51.4932755322496000, -3.1696636799887100, 'Cardiff Albany Rd', '02920497666 ', 'CF24 3LJ', '33 Albany Road', 'Cardiff', 'Greggs', true),\
		(91405, 53.0500437602615000, -1.4044588474582100, 'Ripley Oxford St', '01773 512272', 'DE5 3AP ', '28 Oxford Street', 'Derbyshire', 'Greggs', false),\
		(91406, 53.7959312951524000, -1.5532900953580100, 'Leeds West Point', '01132 426800', 'LS1 4JY ', 'Kiosk Unit, West Point', 'Leeds', 'Greggs', true),\
		(91407, 53.7952773200000000, -1.7487812960000000, 'Bradford Forster Sq', '01274 731749', 'BD1 4JB ', 'Unit 19C, Forster Square', 'Bradford', 'Greggs', true),\
		(91408, 53.6791180391593000, -1.6620442072908900, 'Dwsbry Ravensthorpe', '01924485172 ', 'WF13 3JR', 'Unit 8, Ravensthorpe Shopping', 'West Yorkshire', 'Greggs', true),\
		(91409, 51.2951591357102000, -0.3284876412472520, 'Leatherhead High St', '01372 362104', 'KT22 8AN', '4 High Street', 'Leatherhead', 'Greggs', false),\
		(91410, 55.9532068251872000, -3.1949310687468400, 'Edin 19 Rose St', '01312265902 ', 'EH2 2PR ', 'Unit 1a, 19 Rose Street', 'Edinburgh', 'Greggs', false),\
		(91411, 53.4792337756702000, -2.2461837647235000, 'Manc Brazennose St', '0161 8347186', 'M2 5EA  ', '44-46 Brazennose Street', 'Manchester', 'Greggs', true),\
		(91412, 52.4799190255439000, -2.1096505632111100, 'Brierley Hl Mryhl L7', '01384 573570', 'DY5 1SH ', 'Unit L7 Merryhill Shopping Cen', 'West Midlands', 'Greggs', false),\
		(91413, 55.8280797802099000, -4.2167835297905700, 'Ruthrgln 72 Main St', '01416478500 ', 'G73 2HY ', '72 Main Street', 'Glasgow', 'Greggs', false),\
		(91414, 55.7648811074303000, -4.1724489389345200, 'E Kilbrde Kirkton Pk', '01355244988 ', 'G74 4HX ', '44 Kirkton Park', 'Glasgow', 'Greggs', false),\
		(91415, 53.7739269043199000, -2.6767483006812800, 'Preston Deepdale SP', '01772 709096', 'PR1 6QY ', 'Unit FC2B Deepdale Shopping Pa', 'Lancashire', 'Greggs', true),\
		(91416, 53.4441605619197000, -1.3455012601221500, 'Rotherham Parkgate', '01709780336 ', 'S60 1TG ', 'Unit 33, Retail World Parkgate', 'Rotherham', 'Greggs', true),\
		(91417, 51.4878745591135000, -3.1738463352504300, 'Cardiff Salisbury Rd', '02920 224837', 'CF24 4AA', '33 Salisbury Road', 'Cardiff', 'Greggs', true),\
		(91418, 52.4598027200000000, -1.9468117180000000, 'Harborne High St', '0121 4273244', 'B17 9NR ', '83 High Street', 'Harborne', 'Greggs', true),\
		(91419, 50.8013320662485000, -1.0883584124586200, 'Portsmth Crasswll St', '02392 822150', 'PO1 1HA ', '13 Crasswell Street', 'Portsmouth', 'Greggs', false),\
		(91420, 0.0000000000000000, 0.0000000000000000, 'Manc Grve Vlg Pde', '01612736672 ', 'M13 9 AB', 'Unit 10, Grove Village Parade', 'Manchester', 'Greggs', true),\
		(91421, 51.5450615434020000, -0.4766288023891240, 'Uxbrdge 197 High St', '01895 254776', 'UB8 1LB ', '197 High Street', 'Uxbridge', 'Greggs', true),\
		(91422, 51.0676237431469000, -1.7962803981019200, 'Salisbury Grge Mall', '01722340071 ', 'SP1 2AG ', 'Unit 40, 2 Old George Mall', 'Salisbury', 'Greggs', true),\
		(91423, 50.8146436317416000, -1.0794832050546000, 'Portsmth London Rd', '0239 2679871', 'PO2 0LN ', '78 London Road', 'Portsmouth', 'Greggs', false),\
		(91424, 55.7790009347180000, -4.0979347577720900, 'Hamilton Hillhse Rd', '01698721868 ', 'G72 0BP ', 'Unit 3, Livingston Boulevard', 'Hamilton', 'Greggs', false),\
		(91425, 53.0384425455534000, -1.2037427716254800, 'Hucknall High St', '01159635159 ', 'NG15 7AX', '54b High Street', 'Nottingham', 'Greggs', false),\
		(91426, 53.7490486800000000, -2.4834575580000000, 'Blckburn Kng William', '01254 675163', 'BB1 7DP ', '26 King William Street', 'Lancs.', 'Greggs', true),\
		(91427, 51.5074182692668000, -3.5606219962293500, 'Bridgend Triangle SC', '01656 646898', 'CF31 2LL', 'Unit 1 Triangle Shopping Centr', 'Brackla', 'Greggs', false),\
		(91428, 0.0000000000000000, 0.0000000000000000, 'Swansea Oxford St', '01792466690 ', 'SA1 3RL ', '241 Oxford Street', 'Swansea', 'Greggs', true),\
		(91429, 55.8761377824556000, -4.3238057219742500, 'Broomhill Brmhill SC', '01413572873 ', 'G11 7BN ', 'Unit 12 Broomhill Shopping Cen', 'Glasgow', 'Greggs', false),\
		(91430, 56.2437451289972000, -4.2142507424747800, 'Callander Main St', '01877330042 ', 'FK17 8DX', '83 Main Street', 'Callendar', 'Greggs', false),\
		(91431, 55.9772496222061000, -3.5945227636595400, 'Linlithgow Regent Sq', '01506671579 ', 'EH49 7HU', 'Linlithgow - Unit F Regent Sho', 'Lothian', 'Greggs', false),\
		(91432, 53.7924675100000000, -1.7730706050000000, 'Bradford Lster Hills', '01274 722540', 'BD7 1ND ', 'Unit 4, Fieldhead Business Par', 'Bradford', 'Greggs', true),\
		(91433, 53.7990558523250000, -1.5428722129370500, 'Leeds The Headrow', '01132426745 ', 'LS1 6LR ', '57/59 Headrow', 'Leeds', 'Greggs', true),\
		(91434, 51.7453536921220000, -2.2158231588982300, 'Stroud High St', '01453766046 ', 'GL5 1AP ', '54 High Street', 'Gloucestershire', 'Greggs', true),\
		(91435, 50.9416040100000000, -2.6314230190000000, 'Yeovil Middle St', '01935 429282', 'BA20 1LE', '11 Middle Street', 'Somerset', 'Greggs', false),\
		(91436, 54.8363467971793000, -1.3312163620317100, 'Seaham Byron Pl SC', '01915813297 ', 'SR7 7DR ', 'Unit 11, Byron Place Shopping', 'Seaham', 'Greggs', true),\
		(91437, 52.9195789331620000, -1.4743975026345500, 'Derby Intu Sth Mall', '01332 207651', 'DE1 2PL ', 'Unit SU164, South Mall', 'Derby', 'Greggs', true),\
		(91438, 56.3950266796514000, -3.4307360676426600, 'Perth South St', '01738639758 ', 'PH2 8PA ', '87 South Street', 'Perth', 'Greggs', false),\
		(91439, 55.8191130531099000, -4.0824705843816200, 'Uddngstn Main St', '01698 801378', 'G71 7EP ', '49 Main Street', 'Uddingston', 'Greggs', false),\
		(91440, 51.4709159819146000, -3.2065975965388600, 'Cardiff Capital SP', '02920 345105', 'CF11 8EG', 'Unit B, The Pod', 'Cardiff', 'Greggs', true),\
		(91441, 51.4982436901134000, -3.1381259360188700, 'Cardiff Avenue RP', '02920481901 ', 'CF23 9AF', 'Unit 7 Avenue Retail Park', 'Cardiff', 'Greggs', false),\
		(91442, 51.4048620771008000, -2.5981488569772100, 'Bristol Peterson Ave', '0117 9647296', 'BS13 0BE', 'Unit 8 Peterson Avenue', 'Bristol', 'Greggs', false),\
		(91443, 51.5123834097660000, -0.4443714557554290, 'Stockley Pk Arena', '02088137704 ', 'UB11 1AA', 'Unit 4, The Arena', 'Uxbridge', 'Greggs', true),\
		(91444, 50.7418988800000000, -1.8786898130000000, 'Winton Wimbourne Rd', '01202526640 ', 'BH9 2AQ ', '379 Wimbourne Road', 'Bournemouth', 'Greggs', false),\
		(91445, 52.4635273900000000, -1.9968505030000000, 'Quinton Hagly Rd Wst', '01214231715 ', 'B68 0BZ ', '524 Hagley Road West', 'Birmingham', 'Greggs', true),\
		(91446, 55.8647429002833000, -4.2225641443549800, 'Glas Alexandra Pde', '0141 5545633', 'G31 3AD ', 'Unit 2 Alexandra Gate', 'Glasgow', 'Greggs', false),\
		(91447, 50.9034973032807000, -3.4864202611578600, 'Tiverton Bampton St', '01884 256639', 'EX16 6AA', '1 Bampton Street', 'Devon', 'Greggs', false),\
		(91448, 50.8108164500000000, -0.5075493950000000, 'Rustington Churchill', '01903770720 ', 'BN16 3DJ', '11 Churchhill Parade', 'Littlehampton', 'Greggs', false),\
		(91449, 50.8497134789314000, -1.0953566882127800, 'Paulgrve Allaway Ave', '02392380402 ', 'PO6 4HG ', '179 Allaway Avenue', 'Portsmouth', 'Greggs', false),\
		(91450, 51.7858885033594000, 0.1181481456973520, 'Harlow Edinburgh Way', '01279 413788', 'CM20 2DG', 'Unit 5, Mill Hatch', 'Harlow', 'Greggs', false),\
		(91451, 56.0608689524462000, -3.4032686597340800, 'Dunfmlne Turnstne Rd', '01383841744 ', 'KY11 8EG', 'Unit 3, Block 1, Turnstone Rd', 'Fife', 'Greggs', false),\
		(91452, 55.8445525107970000, -4.4245079478134500, 'Paisley Paisley CTR', '01418891518 ', 'PA1 1UN ', 'Unit 35 Paisley Centre', 'Paisley', 'Greggs', false),\
		(91453, 53.4148613723162000, -1.4101190014159700, 'Shfield 17 Medhal SC', '0114 2516774', 'S9 1EH  ', '17 The Arcade', 'Sheffield', 'Greggs', true),\
		(91454, 53.7968213873225000, -1.4264996213286300, 'Leeds Thorpe Pk', '01132641321 ', 'LS15 8ZB', 'Unit 1, Plot 4600', 'Leeds', 'Greggs', true),\
		(91455, 55.9548638712458000, -3.9804774382197900, 'Cumbrnld Antnine CTR', '01236732271 ', 'G67 1PZ ', 'Unit 32 Antonine Centre', 'Cumbernauld', 'Greggs', false),\
		(91456, 53.7454411252297000, -0.3475551345234830, 'Hull St Stephens SC', '01482 218691', 'HU2 8LN ', 'Unit 44a St Stephens Shopping', 'Hull', 'Greggs', true),\
		(91457, 53.8158096000000000, -1.7732484400000000, 'Bradford Prkside CTR', '01274 498447', 'BD9 4JR ', 'Unit 5 The Parkside Centre', 'Bradford', 'Greggs', true),\
		(91458, 53.7441981459398000, -0.3460723144475780, 'Hull Paragon Intchng', '01482227328 ', 'HU1 3QX ', 'Unit 4 Hull Interchange', 'Hull', 'Greggs', false),\
		(91459, 53.1418357955518000, -1.1981848100469500, 'Mansfield St Peters', '01623657492 ', 'NG18 1BE', 'Unit 8A St Peters Retail Park', 'Nottinghamshire', 'Greggs', false),\
		(91460, 53.7953720976862000, -0.3485991077581640, 'Hull Kingswood RP', '01482 827313', 'HU7 3DA ', 'Unit 15 Kingswood Retail Park', 'Hull', 'Greggs', false),\
		(91461, 53.4730169658155000, -2.1663001577419600, 'Openshaw Lime Sq SC', '01613706274 ', 'M11 1DA ', 'Unit 7 Lime Square', 'Openshaw', 'Greggs', true),\
		(91462, 53.5833117000000000, -2.5347476750000000, 'Horwich Middlebrook', '01204 469868', 'BL6 6JA ', 'Unit 19B', 'Bolton', 'Greggs', true),\
		(91463, 53.4063801921219000, -2.9842332771429900, 'Lvrpool Richmond St', '01517097613 ', 'L1 1EF  ', '18 Richmond Street', 'Liverpool', 'Greggs', true),\
		(91464, 53.4037751538239000, -2.9872867717847600, 'Lvrpool Wall St', '01517088998 ', 'L1 8BU  ', '4 Wall Street', 'Liverpool', 'Greggs', true),\
		(91465, 53.0445157994288000, -2.9890796049561900, 'Wrexham Egles Meadow', '01978 262095', 'LL13 8DG', 'Unit D17 Eagles Meadow S.C.', 'Wrexham', 'Greggs', false),\
		(91466, 54.9750332979695000, -1.6150608632169900, 'Ncl Eldon Sq', '0191 2332854', 'NE1 7JD ', 'Unit 8 St Georges Way', 'Newcastle upon Tyne', 'Greggs', true),\
		(91467, 51.5342771248503000, -2.5487787882293000, 'Bradley Stoke Willow', '01454 612896', 'BS32 8EF', 'Unit 2, The Willow Brooks Cent', 'Bristol', 'Greggs', false),\
		(91468, 53.3618797349825000, -2.2708405884780800, 'Manc Airport T1', '0161 4365015', 'M90 1QX ', 'Unit C Terminal 1 Arrivals', 'Manchester', 'Greggs', true),\
		(91469, 55.8180849510465000, -4.2023272059957600, 'Burnside Stonelaw Rd', '01416475128 ', 'G73 3SA ', '224 Stonelaw Road', 'Glasgow', 'Greggs', false),\
		(91470, 52.9649286074375000, -1.2271142045883000, 'Notham Bracebridge', '01159291688 ', 'NG8 4PH ', '65 Bracebridge Drive', 'Nottingham', 'Greggs', true),\
		(91471, 51.8225941089066000, -3.0190358230121600, 'Abergavenny High St', '01873856462 ', 'NP7 5RY ', '22 High Street', 'Gwent', 'Greggs', true),\
		(91472, 54.5466595989787000, -1.3204406607677900, 'Stockton Preston Fm', '01642 679400', 'TS18 3TS', 'Unit 33 Falcon Court', 'Stockton on Tees', 'Greggs', true),\
		(91473, 51.4806034346102000, -3.1771013716521300, 'Cardiff St Davids SC', '02920 228100', 'CF10 2DQ', 'Unit 5 Town Wall', 'Cardiff', 'Greggs', true),\
		(91474, 51.5595684785420000, -3.0361820316839000, 'Newport Lakeside Dr', '01633 816991', 'NP10 8BB', 'Unit 3 Retail Parade', 'Newport', 'Greggs', false),\
		(91475, 51.5603346805927000, -1.7851746665648400, 'Swindon Havelock Sq', '01793 487543', 'SN1 1LE ', '10 Havelock Square', 'Swindon', 'Greggs', false),\
		(91476, 53.7989437642529000, -3.0257444799229500, 'Blpool Welbeck Ave', '01253760040 ', 'FY4 4ES ', '1 Welbeck Avenue', 'Blackpool', 'Greggs', true),\
		(91477, 54.6700022520521000, -1.2129608399882200, 'Hartpl Belle Vue', '01429 278258', 'TS25 1QF', 'Unit 6 Belle Vue Neighbourhood', 'Hartlepool', 'Greggs', true),\
		(91478, 53.4130392227421000, -1.4124610681832200, 'Shfield 14 Medhal SC', '01142516722 ', 'S9 1ER  ', '14A The Gallery', 'Sheffield', 'Greggs', true),\
		(91479, 53.5429865186727000, -1.1000658558019400, 'Doncaster Whtly Hall', '01302321989 ', 'DN2 4PE ', 'Unit 16 The Wheatley Hall Reta', 'Doncaster', 'Greggs', false),\
		(91480, 51.4826132528099000, -0.2000887743971590, 'Fulham North End Rd', '0207 3860255', 'SW6 1NS ', '411 North End Road', 'London', 'Greggs', true),\
		(91481, 53.6436038174107000, -1.7715854752402100, 'Aspley Carr Pit Rd', '01484435989 ', 'HD5 9AD ', 'Carr Pit Road', 'West Yorkshire', 'Greggs', true),\
		(91482, 56.0374752065631000, -3.4263511131586600, 'Rosyth Backmarsh Rd', '01383412363 ', 'KY11 2RS', 'Unit A Backmarsh Road', 'Fife', 'Greggs', false),\
		(91483, 51.5369768085929000, -3.3843238576804500, 'Pontyclun Talbot Rd', '01443449624 ', 'CF72 8AF', '48 Talbot Road', 'Mid Glamorgan', 'Greggs', false),\
		(91484, 53.4055848474121000, -2.9880206321862000, 'Lvrpool Nth John St', '01512363064 ', 'L2 6SG  ', '51 North John Street', 'Liverpool', 'Greggs', true),\
		(91485, 53.8009756328661000, -1.5514297398281800, 'Leeds Grt George St', '0113 2434727', 'LS1 3BB ', '49 Great George Street', 'Leeds', 'Greggs', true),\
		(91486, 51.7127245303841000, -3.4446737947436400, 'Aberdare Victoria Sq', '01685872442 ', 'CF44 7LB', '22a Victoria Square', 'Mid Glamorgan', 'Greggs', false),\
		(91487, 51.4746989432973000, -3.1541703674197800, 'Cardiff Regent Tp', '02920491739 ', 'CF24 5PF', 'Unit 8b Quay Point', 'Cardiff', 'Greggs', false),\
		(91488, 0.0000000000000000, 0.0000000000000000, 'Wkfield Trnty Wlk SC', '01924 360408', 'WF1 1QS ', 'Unit G36 Trinity Walk Shopping', 'Wakefield', 'Greggs', true),\
		(91489, 52.6764653391065000, -2.4459972135805800, 'Telford Ksk Tlfd SC', '01952293036 ', 'TF3 4DX ', 'Kiosk, Kielder Square', 'Telford', 'Greggs', true),\
		(91490, 53.7586350314648000, -1.5742228181934800, 'Leeds 28 Wht Rose SC', '0113 2777211', 'LS11 8LU', 'Unit 28G White Rose Centre', 'Leeds', 'Greggs', true),\
		(91491, 53.4809426064165000, -2.1678531041350200, 'Manc Ashton New Rd', '01612318043 ', 'M11 4PE ', 'Unit 1 998 Ashton New Road', 'Manchester', 'Greggs', true),\
		(91492, 53.3893866737346000, -3.0263798771565200, 'Birkenhead Pavements', '0151 6471800', 'CH41 2ZL', '44B Borough Pavement', 'Birkenhead', 'Greggs', true),\
		(91493, 50.8122694900000000, -0.3701558770000000, 'Worthing Chapel Rd', '01903 210154', 'BN11 1BJ', '2 Chapel Road', 'West Sussex', 'Greggs', false),\
		(91494, 50.8343728100000000, -0.2063381220000000, 'Portslade Boundry Rd', '01273410080 ', 'BN3 5TD ', '78 Boundary Road', 'Brighton', 'Greggs', false),\
		(91495, 55.8067177698962000, -3.9641054744907100, 'Mthrwll Carfin RP', '01698260571 ', 'ML1 4GN ', 'Unit 2b Carfin Retail Parade', 'Carfin', 'Greggs', false),\
		(91496, 55.8725671036317000, -4.2821734766016200, 'Kelvnbrdge Gibson St', '0141 3346986', 'G12 8NX ', 'Unite Buildings', 'Glasgow', 'Greggs', true),\
		(91497, 55.8509249802796000, -4.1329629402650900, 'Glas Barrachnie Rd', '01417734444 ', 'G69 6HB ', 'Unit 3b Barrachnie Road', 'Glasgow', 'Greggs', false),\
		(91498, 52.5084472510178000, -0.7054187991033840, 'Corby Rockingham Pk', '01536264789 ', 'NN17 4BH', 'Unit 1 Princewood Court', 'Corby', 'Greggs', false),\
		(91499, 53.4605633165216000, -2.1172574643889600, 'Denton Crownpoint SP', '0161 3378770', 'M34 3LY ', 'Unit 2C2 Crown Point North', 'Manchester', 'Greggs', true),\
		(91500, 53.8163390438401000, -3.0534187060017200, 'Blpool Houndshill SC', '01253749331 ', 'FY1 4HU ', 'Unit 16 Adelaide Street West', 'Blackpool', 'Greggs', true),\
		(91501, 53.4047887651387000, -2.9799095425017700, 'Lvrpool Lpool Ctrl', '0151 7087718', 'L1 1QE  ', 'Unit 7 Liverpool Central', 'Liverpool', 'Greggs', true),\
		(91502, 53.4498305076692000, -2.3541859592066100, 'Urmston Eden Sq SC', '0161 7497346', 'M41 0NA ', '9B Eden Square Shopping Centre', 'Manchester', 'Greggs', true),\
		(91503, 51.5226965606284000, -3.3912419463837800, 'Pontyclun Cowbrdg Rd', '01443 230916', 'CF72 9EA', '19 Cowbridge Road', 'Pontyclun', 'Greggs', false),\
		(91504, 50.9780717292244000, -3.2283758404651900, 'Wellington Fore St', '01823 669223', 'TA21 8AA', '9/9a Fore Street', 'Somerset', 'Greggs', false),\
		(91505, 54.9763283631948000, -1.5852863731945500, 'Byker 24 Shields Rd', '01912651522 ', 'NE6 1DR ', 'Unit 1, 24 Shields Road', 'Newcastle upon Tyne', 'Greggs', true),\
		(91506, 55.0066343737736000, -1.5181344849908600, 'Bttle Hll Btl Hll SC', '0191 2634443', 'NE28 9RW', 'Unit 6, Block A', 'Wallsend', 'Greggs', true),\
		(91507, 56.1116794591007000, -3.9191115709254800, 'Stirlng Springkerse', '01786472835 ', 'FK7 7GN ', 'Unit 2 Springkerse Trade Park', 'Stirling', 'Greggs', false),\
		(91508, 54.8434272059519000, -1.4714179909427300, 'Htn Le Sprg Nwbtl St', '0191 5840100', 'DH4 4AB ', '36 Newbottle Street', 'Tyne & Wear', 'Greggs', true),\
		(91509, 50.8233155400000000, -0.1411370080000000, 'Brighton North St', '01273 720162', 'BN1 1RE ', '150 North Street', 'Brighton', 'Greggs', true),\
		(91510, 55.8898207787636000, -4.3236002728996300, 'Anniesland Gt Wstern', '0141 9596874', 'G13 1HQ ', '1580-1582 Great Western Road', 'Glasgow', 'Greggs', false),\
		(91511, 55.9437265826193000, -4.5607047256098900, 'Dumbarton St James', '01389 733447', 'G82 1RB ', 'Unit 4 St James Retail Park', 'Dumbarton', 'Greggs', false),\
		(91512, 51.4831170004216000, -2.7692059124849300, 'Portishead High St', '01275 846119', 'BS20 6EH', '66 High Street', 'North Somerset', 'Greggs', false),\
		(91513, 52.9540988403451000, -1.1472705091431600, 'Notham Clumber St', '01159505814 ', 'NG1 3GA ', '4 Clumber Street', 'Nottingham', 'Greggs', true),\
		(91514, 53.1671817618778000, -3.1421165684378700, 'Mold High St', '01352757664 ', 'CH7 1AZ ', '3 High Street', 'Clywd', 'Greggs', true),\
		(91515, 53.4432909308586000, -1.9524022897981700, 'Glossop High St Wst', '01457864370 ', 'SK13 8AZ', '25 High Street West', 'Glossop', 'Greggs', true),\
		(91516, 55.0362744522834000, -1.5669090852447500, 'Killingwrth Killw SC', '0191 2681188', 'NE12 6YT', 'Unit 35', 'Killingworth', 'Greggs', true),\
		(91517, 52.5192451400000000, -1.8028460510000000, 'Erdngtn 1016 Kngsbry', '01217494315 ', 'B24 9PZ ', 'Unit 3, 1016 Kingsbury Road', 'Birmingham', 'Greggs', true),\
		(91518, 53.6176225008584000, -2.1589777480595200, 'Rochdale Yrkshire St', '01706657120 ', 'OL16 1EA', '64 Market Way', 'Rochdale', 'Greggs', true),\
		(91519, 55.8574043221166000, -4.2544388831768100, 'St Enoch St Enoch SC', '0141 2489284', 'G1 4BW  ', 'G0235 St Enoch Shopping Centre', 'Glasgow', 'Greggs', false),\
		(91520, 51.4359338417000000, -2.8528893236375400, 'Clevedon Stn Rd', '01275 874478', 'BS21 6NH', '3 Station Road', 'Clevedon', 'Greggs', false),\
		(91521, 53.8574126500000000, -2.1672298870000000, 'Colne Mkt St', '01282866507 ', 'BB8 0LJ ', '41 Market Street', 'Lancashire', 'Greggs', true),\
		(91522, 52.6365794475139000, -2.4503050180444800, 'Madeley Sthrn Block', '01952 585273', 'TF7 5BD ', 'Unit 14 Southern Block', 'Telford', 'Greggs', false),\
		(91523, 51.3400616724344000, 0.7349151183899150, 'Sittingbourne High S', '01795 424308', 'ME10 4AJ', '95-97 High Street', 'Kent', 'Greggs', false),\
		(91524, 51.1497611366008000, 0.8708681367897710, 'Ashford High St', '01233 662085', 'TN24 8SD', '94 High Street', 'Kent', 'Greggs', false),\
		(91525, 55.8643220446050000, -4.2838153863307700, 'Glas 1111 Argyle St', '0141 2043546', 'G3 8ND  ', '1111 Argyle Street', 'Glasgow', 'Greggs', true),\
		(91526, 52.6828994888614000, -1.8287665700800500, 'Lichfield Mkt St', '01543410640 ', 'WS13 6LH', '30 Market Street', 'Lichfield', 'Greggs', true),\
		(91527, 52.9479594427025000, -1.1473316841155100, 'Notham Carrington St', '01159 243215', 'NG1 7FE ', '93 Carrington Street', 'Nottingham', 'Greggs', true),\
		(91528, 52.7469269880519000, -1.4725506519174300, 'Ashby De La Z Mkt Pl', '01530562999 ', 'LE65 1AF', '25 Market Place', 'Ashby De La Zouch', 'Greggs', true),\
		(91529, 52.2852974100000000, -1.9064571170000000, 'Redditch Washford TP', '01527 525900', 'B98 0GZ ', 'Washford Trade Park', 'Redditch', 'Greggs', true),\
		(91530, 55.8267715536926000, -4.0454398183497000, 'Bellshill Righead IE', '0169 8842663', 'ML4 3LX ', 'Block D Innovation Park', 'Bellshill', 'Greggs', false),\
		(91531, 53.4916636011084000, -1.2545916866756800, 'Denaby Main Hill Top', '01709 770203', 'DN12 4TJ', 'Hill Top Road', 'Doncaster', 'Greggs', false),\
		(91532, 55.9307698089004000, -3.3005057298451000, 'Edin Sth Gyle Cres', '01313347782 ', 'EH12 9EB', '17 South Gyle Crescent', 'Scotland', 'Greggs', false),\
		(91533, 52.4437702330941000, -1.4910362165802900, 'Coventry Arena SP', '02476662354 ', 'CV6 6AS ', 'Unit 10a The Mall', 'Coventry', 'Greggs', true),\
		(91534, 52.2570283190826000, -0.8354825393175010, 'Nmptn West Favell SC', '01604408531 ', 'NN3 8JZ ', 'Unit 46 Weston Favell Shopping', 'Northampton', 'Greggs', true),\
		(91535, 53.7793719413077000, -1.5822987229348200, 'Leeds Gelderd Rd', '0113 2793462', 'LS12 6DQ', 'Unit 1, 126 Gelderd Road', 'Leeds', 'Greggs', true),\
		(91536, 52.6219626904116000, -2.1321488002700000, 'Whmptn Marsh Ln Pde', '01902788735 ', 'WV10 6RU', '16 Marsh Lane Parade', 'Wolverhampton', 'Greggs', true),\
		(91537, 56.4634165059322000, -2.9682655314719600, 'Dundee Cowgate', '01382 227903', 'DD1 2HS ', '7 Cowgate', 'Dundee', 'Greggs', false),\
		(91538, 55.8551264892029000, -4.3317864909676400, 'Glas Shieldhall Rd', '01418839902 ', 'G51 4DJ ', '183 Shieldhall Road', 'Glasgow', 'Greggs', false),\
		(91539, 51.5013598463302000, -2.6586525121563200, 'Bristol Ridingleaze', '01179827199 ', 'BS11 0QE', '44 Ridingleaze', 'Bristol', 'Greggs', false),\
		(91540, 51.6426186940833000, -3.9870110011204000, 'Swansea Queensway', '01792 583870', 'SA5 4EB ', 'Queensway', 'Swansea', 'Greggs', false),\
		(91541, 51.6071309432886000, -3.1007601215248200, 'Risca Tredegar St', '01633 619141', 'NP11 6BW', 'Unit 1, 43a Tredegar Street', 'Gwent', 'Greggs', false),\
		(91542, 56.4748366408358000, -2.9807480142224600, 'Dundee Strathmrtn Rd', '01382814198 ', 'DD3 7SE ', 'Unit 1, 134 Stathmartin Road', 'Scotland', 'Greggs', false),\
		(91543, 54.5757133663562000, -1.2889251591981100, 'Stockton Portrack TP', '01642 670879', 'TS18 2SL', 'Unit 6a Protrack Trade Park', 'Stockton on Tees', 'Greggs', true),\
		(91544, 52.6985304839622000, -1.0741100189628700, 'Syston Melton Rd', '01162698327 ', 'LE7 2HD ', 'Unit3 , 1286 Melton Road', 'Leicestershire', 'Greggs', true),\
		(91545, 53.2518498097196000, -1.4211756113565700, 'Chfield Lockoford Ln', '01246 211793', 'S41 7JB ', 'Unit 3 Tesco Extra', 'DERBYSHIRE', 'Greggs', true),\
		(91546, 53.6784704500565000, -1.7413314328597100, 'Hudfield Kirkheaton', '01484450193 ', 'HD2 1UU ', 'Unit 2 Local Centre', 'Huddersfield', 'Greggs', true),\
		(91547, 53.3239338699204000, -3.8287968525959600, 'Llandudno Mostyn St', '01492871218 ', 'LL30 2NN', '73 Mostyn Street', 'Llandudno', 'Greggs', true),\
		(91548, 53.3876511445406000, -2.3499103993976500, 'Altrincham George St', '0161 9416287', 'WA14 1RH', '54 George Street', 'Cheshire', 'Greggs', true),\
		(91549, 51.8030086694096000, -4.9686856148806600, 'Haverfordwest Bridge', '01437783782 ', 'SA61 2AL', '19 Bridge Street', 'Haverfordwest', 'Greggs', true),\
		(91550, 50.7263744807056000, -3.5256360011079700, 'Exeter Sidwell St', '01392423846 ', 'EX4 6NN ', '28 Sidwell Street', 'Devon', 'Greggs', true),\
		(91551, 51.1391709102301000, -2.9961365695060100, 'Bridgewater Wylds Rd', '01278456356 ', 'TA6 4BH ', 'Unit Z Carvers Mill Business P', 'Bridgwater', 'Greggs', false),\
		(91552, 53.7976923237060000, -1.5459385773609800, 'Leeds Bond St', '01132427990 ', 'LS1 5BQ ', '30 Bond Street', 'Leeds', 'Greggs', true),\
		(91553, 53.5591630730808000, -0.0309487892126510, 'Cleethorps St Peters', '01472698781 ', 'DN35 8HF', '41 St Peters Avenue', 'N E Lincs', 'Greggs', false),\
		(91554, 53.1432252073829000, 0.3373703455329440, 'Skegness Lumley Rd', '01754765156 ', 'PE25 3NG', '76 Lumley Road', 'Skegness', 'Greggs', true),\
		(91555, 52.4449658100000000, -1.7849339530000000, 'Solihull Hobs Moat', '0121 7228997', 'B92 8JN ', '113 Hobs Moat Road', 'Solihull', 'Greggs', true),\
		(91556, 52.5404911224972000, -2.1208747764175800, 'Sedgley Dudley St', '01902 880923', 'DY3 1SA ', '31 Dudley Street', 'Sedgley', 'Greggs', true),\
		(91557, 54.9861389112689000, -1.6630856532310700, 'Fenham Two Bll Lnnen', '0191 2741715', 'NE4 9RX ', '313 - 315 Two Ball Lonnen', 'Newcastle upon Tyne', 'Greggs', true),\
		(91558, 52.9046540423668000, -2.4855226651882400, 'Mkt Drytn Cheshre St', '01630653453 ', 'TF9 1PH ', 'Unit 5, 31 Cheshire Street', 'Market Drayton', 'Greggs', true),\
		(91559, 55.7604571961235000, -4.2282614519171500, 'Hairmyers St James', '01355 242600', 'G74 5QD ', 'Unit 6a St James Avenue', 'Scotland', 'Greggs', false),\
		(91560, 57.1435605100000000, -2.0969000820000000, 'Aberdn East Mall', '01224590343 ', 'AB11 5RA', 'Unit K2 Union Square', 'Aberdeen', 'Greggs', false),\
		(91561, 53.4615868073117000, -2.2294385532495800, 'Manc Thorncliffe Hse', '0161 2759999', 'M13 9NG ', 'Unit 5/6 Thorncliffe House', 'Manchester', 'Greggs', true),\
		(91562, 52.6273370011145000, -1.1506942290348400, 'Leicestr Narboro Rd', '01162 540429', 'LE3 0PA ', '121 Narborough Road', 'Leicester', 'Greggs', true),\
		(91563, 53.0230701211219000, -1.4819669524657200, 'Belper King St', '01773829936 ', 'DE56 1PL', '40 King Street', 'Belper', 'Greggs', false),\
		(91564, 54.5390840110664000, -1.2907674570391200, 'Thornaby Pavilion SC', '01642 308954', 'TS17 9FD', 'Unit 2 The Pavillion SC', 'Thornaby', 'Greggs', true),\
		(91565, 54.7449460276448000, -1.8145872892358000, 'Tow Law High St', '01388730137 ', 'DL13 4DH', 'Unit 1B 47A  High Street', 'Co. Durham', 'Greggs', false),\
		(91566, 53.5329358550868000, -2.2843031249195400, 'Prestwich Radius Ret', '01617730016 ', 'M25 1AY ', 'Unit 10 Radius Retail', 'Prestwich', 'Greggs', true),\
		(91567, 55.9454457131537000, -3.2057564261889900, 'Edin Lothian Rd', '01312 296793', 'EH3 9BG ', '126 Lothian Road', 'Edinburgh', 'Greggs', false),\
		(91568, 51.6636966730105000, -3.8037874091866900, 'Neath Wind St', '01639 635489', 'SA11 3EN', '55 Wind Street', 'Neath', 'Greggs', false),\
		(91569, 51.5094357560241000, -2.6204690008187500, 'Henbury Crow Ln', '01179508220 ', 'BS10 7DR', '175 Crow Lane', 'Bristol', 'Greggs', false),\
		(91570, 51.6615118734170000, -3.4479309288184600, 'Ferndale High St', '01443 732275', 'CF43 4RR', '64 High Street', 'Cardiff', 'Greggs', false),\
		(91571, 51.7624177888603000, -3.3791686465117900, 'Mthr Tydfl Chstnt Wy', '01685 370825', 'CF47 9SB', '21 Chestnut Way', 'Merthyr Tydfil', 'Greggs', false),\
		(91572, 50.7233850629252000, -3.5320843651475100, 'Exeter High St', '01392438849 ', 'EX4 3EB ', '195 High Street', 'Exeter', 'Greggs', true),\
		(91573, 57.1507968200000000, -2.1019435330000000, 'Aberdn George St', '01224627361 ', 'AB25 1BS', '166-170', 'Aberdeen', 'Greggs', false),\
		(91574, 55.8787975120387000, -4.3858240133826200, 'Renfrew High St', '01418866053 ', 'PA4 8QL ', '11-13 High Street', 'Renfrew', 'Greggs', false),\
		(91575, 53.4801074973142000, -2.2538886307616300, 'Manc Gartside St', '01618323987 ', 'M3 3AQ  ', 'Unit 4, 1 Hardman Boulevard', 'Manchester', 'Greggs', true),\
		(91576, 51.1273128822075000, 1.3095545311207900, 'Dover Biggin St', '01304203546 ', 'CT16 1BB', '71 Biggin Street', 'Kent', 'Greggs', false),\
		(91577, 51.3952567802200000, 0.4965230490257310, 'Strood High St', '01634 730481', 'ME2 4AR ', '84a High Street', 'Kent', 'Greggs', false),\
		(91578, 53.4124423925655000, -2.9425638972971400, 'Lvrpool 14 PreSC Rd', '0151 2619373', 'L7 0LQ  ', 'Unit 4, Kensington District Ce', 'Liverpool', 'Greggs', true),\
		(91579, 55.8308814695815000, -4.0753074578648600, 'Uddngstn Old Edin Rd', '01698 815416', 'G71 6BP ', '319 Old Edinburgh Road', 'Uddingston', 'Greggs', false),\
		(91580, 52.0585781905079000, 1.1500644771771100, 'Ipswich Westgate St', '01473217404 ', 'IP1 3DX ', '51 Westgate Street', 'Ipswich', 'Greggs', false),\
		(91581, 51.8883776326269000, 0.9025757103848050, 'Colchester Long Wyre', '01206762157 ', 'CO1 1LJ ', '36 Long Wyre Street', 'Essex', 'Greggs', false),\
		(91582, 50.7860132505369000, -1.0878334975133700, 'Southsea Palmerston', '02392 826348', 'PO5 3QQ ', '15 Palmerston Road', 'Portsmouth', 'Greggs', true),\
		(91583, 51.4555930284359000, -0.1943867368621780, 'Wandswrth Sthside SC', '0208 8747757', 'SW18 4TG', '75 Southside Shopping Centre', 'London', 'Greggs', true),\
		(91584, 55.8729743161173000, -4.1368895408761300, 'Glas Glas Fort SC', '01417712276 ', 'G34 9DL ', 'Unit B6 Glasgow Fort Shopping', 'Glasgow', 'Greggs', false),\
		(91585, 54.5334727636864000, -1.5786587449178800, 'Cockerton Woodland', '01325 353062', 'DL3 9AA ', '301 Woodland Road', 'Darlington', 'Greggs', true),\
		(91586, 55.0139346511523000, -1.6668561015493200, 'Kingstn Pk Kngstn Pk', '01912866833 ', 'NE3 2FP ', 'Unit 8 Kingston Park Shopping', 'Newcastle upon Tyne', 'Greggs', true),\
		(91587, 53.5811643100000000, -2.4297921140000000, 'Bolton Mkt Pl', '01204 371918', 'BL1 2AL ', 'Unit 9b', 'Bolton', 'Greggs', true),\
		(91588, 53.4007815281615000, -3.1130033002605500, 'Moreton Hoylake Rd', '0151 6780542', 'CH46 0PF', '243 Hoylake Road', 'Wrral', 'Greggs', true),\
		(91589, 53.4959917510349000, -2.2734890240357000, 'Salford Seaford Rd', '0161 7375488', 'M6 6BA  ', 'Unit 4 Seaford Road', 'Manchester', 'Greggs', true),\
		(91590, 51.4588592257973000, -2.5924208772786000, 'Bristol St James Crt', '01179298451 ', 'BS1 3LH ', 'Unit 1 St James Court', 'Bristol', 'Greggs', true),\
		(91591, 51.7271946109738000, -2.5294240911329900, 'Lydney Newerne St', '01594840830 ', 'GL15 5RA', '63 Newerne Street', 'Gloucestershire', 'Greggs', false),\
		(91592, 52.9146500325139000, -1.4480160538914100, 'Derby Pride Pk Stad', '01332 668375', 'DE24 8XL', 'Ground Floor Retail Unit', 'Derby', 'Greggs', true),\
		(91593, 52.5434825169798000, -0.3014215732209220, 'Pterbrough Ortngate', '01733 394176', 'PE2 5TD ', 'Unit 10 Ortongate Shopping Cen', 'Peterborough', 'Greggs', false),\
		(91594, 51.7598662913386000, -1.2114282272207200, 'Headington London Rd', '01865767663 ', 'OX3 9AX ', '118 London Road', 'Oxford', 'Greggs', true),\
		(91595, 53.5535407567823000, -1.4786834731898200, 'Barnsley Eldon Arc', '01226247443 ', 'S70 2JP ', '5 Eldon Arcade', 'Barnsley', 'Greggs', false),\
		(91596, 53.4828380426211000, -2.2462347906372200, 'Manc Deansgate', '01618347625 ', 'M3 2AY  ', '41 Deansgate', 'Manchester', 'Greggs', true),\
		(91597, 53.4112640514039000, -2.9651645053346200, 'Lvrpool Prescot St', '0151 2602816', 'L6 1BA  ', 'Unit D1 Prospect Point', 'Liverpool', 'Greggs', true),\
		(91598, 53.7272033086351000, -1.8762268649997600, 'Halifax Pellon Ln SS', '01422 360616', 'HX1 5RL ', 'Pellon Lane Service Station,1', 'West Yorkshire', 'Greggs', true),\
		(91599, 50.7355634300000000, -1.7777279580000000, 'Christchurch Saxon', '01202 487370', 'BH23 1QA', 'Unit 1B Saxon Square Shopping', 'Dorset', 'Greggs', false),\
		(91600, 53.3908947918388000, -2.5899075719922600, 'Warringtn Cockhedge', '01925651989 ', 'WA1 2QQ ', 'Unit 9 Cockhedge Shopping Cent', 'Warrington', 'Greggs', true),\
		(91601, 51.8236337506572000, -1.2893195777084600, 'Kidlington High St', '01865 842132', 'OX5 2DH ', 'Unit 2, 18  High Street', 'Oxford', 'Greggs', false),\
		(91602, 52.9098262888567000, -0.6427468560684850, 'Granthm ISC Nwtn CTR', '01476573245 ', 'NG31 6EE', 'Unit 3 Isaac Newton Centre', 'Lincolnshire', 'Greggs', false),\
		(91603, 52.5941450045372000, -2.1427528631080900, 'Whmptn Avion SC', '01902425091 ', 'WV6 0QW ', 'Unit 5 (16) Bargate Drive', 'Wolverhampton', 'Greggs', true),\
		(91604, 50.9550344011457000, -0.1311163070129190, 'Burgess Hill Mkt Pl', '01444247140 ', 'RH15 9NP', 'Unit 17 B, C & D Mall', 'Burgess Hill', 'Greggs', false),\
		(91605, 53.0371872187877000, -1.0818914294049700, 'Calverton St Wilfrid', '0115 9653783', 'NG14 6FP', 'Unit 10 St Wilfrids Square', 'Nottingham', 'Greggs', false),\
		(91606, 52.9292683245035000, -1.2758002134663000, 'Stapleford Derby Rd', '01159392135 ', 'NG9 7AA ', '44 Derby Road', 'Nottingham', 'Greggs', false),\
		(91607, 51.6982863435996000, -0.1913702499711930, 'Potters Bar Darkes L', '01707657241 ', 'EN6 1AE ', '114 Darkes Lane', 'Potters Bar', 'Greggs', true),\
		(91608, 52.5403942663607000, -2.0880979247478700, 'Bilston Rosevill PCT', '01902885223 ', 'WV14 9EP', 'Unit 1 Roseville Precinct', 'West Midlands', 'Greggs', true),\
		(91609, 51.5868569221356000, -0.0608859529420160, 'Tottenham Hale RP', '0208 8080978', 'N15 4QD ', 'Unit C1 Tottenham Hale Retail', 'London', 'Greggs', true),\
		(91610, 51.7705426418599000, 0.0943254395014930, 'Harlow Broadwalk', '01279 450549', 'CM20 1HX', '1a Broadwalk', 'Essex', 'Greggs', false),\
		(91611, 52.4091252655076000, -1.5109279059464200, 'Coventry Irnmngr Row', '02476634965 ', 'CV1 1FD ', '6 Ironmonger Row', 'Coventry', 'Greggs', true),\
		(91612, 53.3208115246170000, -3.4897740278751700, 'Rhyl High St', '01745356431 ', 'LL18 1TH', '73 High Street', 'Rhyl', 'Greggs', true),\
		(91613, 51.4812211363775000, -3.1782693522190000, 'Cardiff St Johns St', '02920373371 ', 'CF10 1GJ', '4 St John Street', 'Cardiff', 'Greggs', true),\
		(91614, 51.5224238683739000, -3.5008685111834900, 'Pencoed Coychurch Rd', '01656864014 ', 'CF35 5NH', 'Unit 2', 'Pencoed', 'Greggs', false),\
		(91615, 51.6184306806321000, -3.9466620281454100, 'Swansea Bus Stn', '01792 467474', 'SA1 3QF ', 'Unit B Swansea Bus Station', 'Swansea', 'Greggs', true),\
		(91616, 55.8534001611566000, -4.2781094796510100, 'Glas 455 Paisley Rd', '0141 4293624', 'G5 8RJ  ', 'Unit 1 455 Paisley Road', 'Glasgow', 'Greggs', false),\
		(91617, 0.0000000000000000, 0.0000000000000000, 'Notham Midland Wy RP', '01159 706756', 'NG7 3NY ', 'Unit 7 (3a) Midland Way', 'Nottingham', 'Greggs', true),\
		(91618, 53.4892698976458000, -2.3265572594108600, 'Salford Ecles Old Rd', '0161 7073551', 'M6 8HH  ', '258 Eccles Old Road', 'Salford', 'Greggs', true),\
		(91619, 56.5608480859005000, -2.5832078472008100, 'Arbroath Abbeygate', '01241434005 ', 'DD11 1HY', 'Unit 1', 'Angus', 'Greggs', false),\
		(91620, 51.7676504912457000, 0.0941335809083370, 'Harlow Watergardens', '01279430294 ', 'CM20 1AN', 'Unit 3.5(b), The Water Gardens', 'Harlow', 'Greggs', false),\
		(91621, 52.4953554800000000, -1.7756594640000000, 'Shard End All Saints', '01217481119 ', 'B34 7BA ', 'Unit 10, Block A,  All Saints', 'Birmingham', 'Greggs', true),\
		(91622, 52.9195305164667000, -1.4756474137926300, 'Derby St Peters St', '01332203092 ', 'DE1 1SR ', '48 St Peters Street', 'Derby', 'Greggs', true),\
		(91623, 50.8096384600000000, -0.5416944300000000, 'Littlehampton High S', '01903715974 ', 'BN17 5EJ', '53 High Street', 'West Sussex', 'Greggs', false),\
		(91624, 56.6447109674693000, -2.8889599387383500, 'Forfar Castle St', '01307463445 ', 'DD8 3AE ', '25 Castle Street', 'Forfar', 'Greggs', false),\
		(91625, 53.3946469629852000, -2.2161904967273300, 'Cheadle High St', '01614913589 ', 'SK8 1AE ', '66 High Street', 'Cheadle', 'Greggs', true),\
		(91626, 53.4790534926348000, -2.2420390936918000, 'Manc Abbey Hse', '01612365226 ', 'M2 3LW  ', 'Unit 7 Abbey House', 'Manchester', 'Greggs', true),\
		(91627, 55.9800586383638000, -3.1796685358958900, 'Edin Ocean Terminal', '01315541495 ', 'EH6 6JJ ', 'RU 10 Ocean Terminal', 'Edinburgh', 'Greggs', true),\
		(91628, 55.9328214746925000, -3.4120336647954300, 'Edin Newbridge IE', '01313330622 ', 'EH28 8PJ', 'Unit 10D Cliftonhall Road', 'Edinburgh', 'Greggs', false),\
		(91629, 52.5717805829765000, -0.2419364693331200, 'Pterbrough Brge St', '01733310213 ', 'PE1 1HJ ', '27 Bridge Street', 'Peterborough', 'Greggs', true),\
		(91630, 52.6117184972995000, -2.1005581467997300, 'Whmptn Cannock Rd', '01902 865367', 'WV10 8PN', '749 Cannock Road', 'Wolverhampton', 'Greggs', true),\
		(91631, 55.9046386546512000, -4.4042263106529900, 'Clydbk 113 Sylvana W', '0141 9529504', 'G81 2RR ', '113 Sylvania Way', 'Glasgow', 'Greggs', false),\
		(91632, 53.1637834226553000, -2.2141148463170700, 'Congleton Duke St', '01260272506 ', 'CW12 1AP', '1 Duke Street', 'Congleton', 'Greggs', true),\
		(91633, 53.3618740653253000, -2.2885867017752400, 'Manc Avro Way', '01614378499 ', 'M90 5PZ ', 'Building 308 World Freight Ter', 'Manchester Airport', 'Greggs', true),\
		(91634, 53.4509327637177000, -2.0781560315803800, 'Hyde Clarendon Sq SC', '01618 829640', 'SK14 2QT', 'Unit 14 Clarendon Square Shopp', 'Hyde', 'Greggs', true),\
		(91635, 54.9966135438564000, -1.5022169989356400, 'Outlet Howdon Tyn Rd', '0191 2344976', 'NE28 0LF', '18 Tynemouth Road', 'Howdon', 'Greggs', false),\
		(91636, 55.8613679553237000, -4.2446006164254900, 'Glas George St', '01415486796 ', 'G1 1RF  ', '100 George Street', 'Glasgow', 'Greggs', false),\
		(91637, 55.8872528436970000, -4.2865218662627500, 'Maryhill Maryhill SC', '01419455411 ', 'G20 9SH ', 'Unit 8', 'Glasgow', 'Greggs', false),\
		(91638, 53.5366541199449000, -1.0620558688797700, 'Armthorpe Armthrp SC', '01302 835902', 'DN3 3AN ', 'Armthorpe Shopping Centre', 'Armthorpe', 'Greggs', false),\
		(91639, 52.2909016647380000, -0.5976673284354860, 'Rushden High St', '01933353072 ', 'NN10 0PJ', '40 High Street', 'Northampton', 'Greggs', false),\
		(91640, 51.4956826754309000, -3.1654180750530700, 'Cardiff Wellfield Rd', '02920485399 ', 'CF24 3PA', '39 Wellfield Road', 'Cardiff', 'Greggs', true),\
		(91641, 51.5435882777451000, -2.4386785061972800, 'Yate Beeches IE', '01454323942 ', 'BS37 5QR', 'Unit 61 Waverley Road', 'Yate', 'Greggs', false),\
		(91642, 51.5486432240562000, -1.8536742388791700, 'Swindon Lydiard Flds', '01793872656 ', 'SN5 8UB ', 'Unit 2A Lydiards Field', 'Swindon', 'Greggs', false),\
		(91643, 50.7183152331813000, -3.4661739881149700, 'Exeter Sowton IE', '01392367312 ', 'EX2 7LA ', 'Unit 1C Centurian Mill', 'Exeter', 'Greggs', false),\
		(91644, 51.6520477804993000, -3.0217825991484200, 'Cwmbran Monmouth Wlk', '01633483771 ', 'NP44 1PE', '6 Monmouth Walk', 'Cwmbran', 'Greggs', false),\
		(91645, 51.4476825073671000, -2.5595104819426100, 'Bristol Avonmeads RP', '01179771953 ', 'BS2 0SP ', 'Unit 9B Avonmeads Retail Park', 'Bristol', 'Greggs', true),\
		(91646, 55.0207992541172000, -1.5097690745784800, 'Ncl Cobalt BP', '01912577957 ', 'NE27 0QJ', 'Unit 3 Plot 4B Cobalt Central', 'North Tyneside', 'Greggs', true),\
		(91647, 51.8333476787632000, 1.2453271734603500, 'Frnton Connaught Ave', '01255852696 ', 'CO13 9PT', '66 Connaught Avenue', 'Frinton on Sea', 'Greggs', false),\
		(91648, 51.5373171034722000, -0.1420123558223770, 'Camden Camdn High St', '02074289817 ', 'NW1 7JR ', '137 Camden High Street', 'London', 'Greggs', true),\
		(91649, 50.8373644242385000, -0.7790968527991270, 'Chichester North St', '01243780433 ', 'PO19 1LB', '25 North Street', 'Chichester', 'Greggs', false),\
		(91650, 55.6540677632146000, -4.6979171240471500, 'Kilwinning Main St', '01294557312 ', 'KA13 6AG', 'Unit 4, 72-80 Main Street', 'Kilwinning', 'Greggs', false),\
		(91651, 52.9282414006723000, -1.5181765152165500, 'Mackworth Pr Charles', '01332386218 ', 'DE22 4BG', '91 Prince Charles Avenue', 'Derby', 'Greggs', false),\
		(91652, 50.6204612682702000, -3.4128583756730200, 'Exmouth The Pde', '01395277773 ', 'EX8 1RW ', '44 The Parade', 'Exmouth', 'Greggs', false),\
		(91653, 51.1245940805450000, -0.0086827820836820, 'East Grinstd Ldn Rd', '01342302929 ', 'RH19 1AG', 'Unit 2 Swan Court', 'East Grinstead', 'Greggs', false),\
		(91654, 52.5975249818174000, -1.1811823265171300, 'Leicestr Fosse Pk SP', '01162897950 ', 'LE19 1HY', 'Food Unit 1, Food Hall', 'Leicester', 'Greggs', true),\
		(91655, 50.6095630300000000, -1.9578466190000000, 'Swanage Stn Rd', '01929423427 ', 'BH19 1AE', '14/16 Station Road', 'Swanage', 'Greggs', false),\
		(91656, 52.0632664900446000, -1.3350463290073000, 'Banbury Cstl Quay SC', '01295256517 ', 'OX16 5UN', '30 Castle Quay Shopping Centre', 'Banbury', 'Greggs', true),\
		(91657, 55.8254885288270000, -4.2574453683810400, 'Glas Cathcart Rd', '01416490830 ', 'G42 9EG ', '1158 Cathcart Road', 'Glasgow', 'Greggs', false),\
		(91658, 55.9343379659240000, -3.1033633849322200, 'Edin Fort Kinnaird', '01316696854 ', 'EH15 3RD', 'Unit 32B Fort Kinnaird Retail', 'Edinburgh', 'Greggs', false),\
		(91659, 52.9521898891174000, -0.9533182247730460, 'Bingham Eaton Pl', '01949837083 ', 'NG13 8BD', '9 Eaton Place', 'Nottingham', 'Greggs', false),\
		(91660, 53.0256487136414000, -2.1758729772128800, 'Hanley Crown Bank', '01782280414 ', 'ST1 1DE ', '3 Crown Bank', 'Hanley', 'Greggs', true),\
		(91661, 51.6482457846070000, 0.0841301932171180, 'Debden The Broadway', '02085085572 ', 'IG10 3SP', '45 The Broadway', 'Essex', 'Greggs', false),\
		(91662, 51.5070645872483000, 0.1070495468028470, 'Thamesmead Joyce Daw', '02083118530 ', 'SE28 8RA', 'Unit 6 Joyce Dawson Way', 'Thamesmead', 'Greggs', false),\
		(91663, 0.0000000000000000, 0.0000000000000000, 'Yardley Swan SC', '01217060587 ', 'B25 8UJ ', 'Unit 9 (was 10b) Swan Shopping', 'Birmingham', 'Greggs', true),\
		(91664, 51.3373384513750000, -0.7457369967002270, 'Camberley Prncess Wy', '01276469099 ', 'GU15 3SP', '24/26 Princess Way', 'Surrey', 'Greggs', false),\
		(91665, 52.2468939337868000, 0.7115689566696480, 'Bry Edmnds Cornhill', '01284703074 ', 'IP33 1EA', 'Unit 1 and 3, 30-32 Cornhill', 'Bury St Edmunds', 'Greggs', false),\
		(91666, 53.4126711647871000, -2.1574589990598100, 'Stckprt Warren St', '01614779309 ', 'SK1 1UD ', 'Unit A 23-25 Warren Street', 'Stockport', 'Greggs', true),\
		(91667, 0.0000000000000000, 0.0000000000000000, 'Preston Tulketh Mill', '01772720322 ', 'PR2 2DZ ', 'Unit 4 Tulketh Mill', 'Preston', 'Greggs', true),\
		(91668, 53.4820197113546000, -2.2375504284891800, 'Manc 7 Piccadilly', '01618391216 ', 'M1 1LZ  ', '7a Piccadilly', 'Manchester', 'Greggs', true),\
		(91669, 53.2270849748969000, -4.1250923178485500, 'Bangor High St', '01248352395 ', 'LL57 1PB', '266 High Street', 'Bangor', 'Greggs', true),\
		(91670, 52.5889442268683000, -1.9834101401477600, 'Walsall Wisemore', '01922 610413', 'WS2 8EQ ', 'Unit 5 Littleton Street West', 'Walsall', 'Greggs', true),\
		(91671, 52.2343585207485000, -0.9162630030509040, 'Nmptn Travis Perkins', '01604 587952', 'NN5 5JR ', 'Travis Perkins (premises withi', 'Northampton', 'Greggs', false),\
		(91672, 52.0432072221199000, -0.7563757068378040, 'Miltn Ky centre:MK', '01908662329 ', 'MK9 3BE ', '104 Silbury Arcade', 'Milton Keynes', 'Greggs', true),\
		(91673, 54.5242621676028000, -1.2161362376670200, 'Coulby Newhm Parkway', '01642576646 ', 'TS8 0TJ ', 'Unit 14 Parkway Shopping Centr', 'Cleveland', 'Greggs', true),\
		(91674, 53.8236393400000000, -1.7343929790000000, 'Bradford Norman Ln', '01274643396 ', 'BD2 2JU ', '172 Norman Lane', 'Bradford', 'Greggs', true),\
		(91675, 54.5563602761724000, -1.2731189196279500, 'Stockton Teesside RP', '01642 605462', 'TS17 7BW', 'Unit 23 Teeside Retail Park', 'Stockton on Tees', 'Greggs', true),\
		(91676, 55.8470505679348000, -4.4085281160935500, 'Paisley Glasgow Rd', '01418890513 ', 'PA1 3PD ', '65 Glasgow Road', 'Paisley', 'Greggs', false),\
		(91677, 51.5757452015743000, -2.9467196061711900, 'Newport Newport RP', '01633276961 ', 'NP19 4TX', 'Unit U4 Tesco Extra', 'Newport', 'Greggs', false),\
		(91678, 0.0000000000000000, 0.0000000000000000, 'Stratford Westfield', '02085556996 ', 'E20 1EH ', 'Unit SU003a Lower Ground Floor', 'London', 'Greggs', true),\
		(91679, 52.2768296409366000, -1.5459487406406600, 'Leam Spa Leam SPa SP', '01926334136 ', 'CV34 6RH', 'Unit N Leamington Spa Retail P', 'Warwickshire', 'Greggs', true),\
		(91680, 51.5223233199498000, -3.1951277652377700, 'Llanishen Cardiff BP', '02920754468 ', 'CF14 5DN', 'Unit 9a Cardiff Business Park', 'Cardiff', 'Greggs', false),\
		(91681, 50.9064827799615000, -1.3409885653254800, 'Soton Antelope Pk SC', '02380449300 ', 'SO19 8NE', 'Unit J1 Antelope Park', 'Southampton', 'Greggs', false),\
		(91682, 52.1321367136458000, -2.3057974275120500, 'Malvern Worcester Rd', '01684564154 ', 'WR14 1BD', '326 Worcester Road', 'Worcestershire', 'Greggs', false),\
		(91683, 51.5763142060521000, -3.2166172582954900, 'Caerphily Castle Crt', '02920862621 ', 'CF83 1NU', 'Unit 29', 'Wales', 'Greggs', false),\
		(91684, 52.5010594739364000, -2.1227550697777600, 'Brierley Hl High St', '01384483405 ', 'DY5 4JD ', '240 High Street', 'Dudley', 'Greggs', true),\
		(91685, 54.8946852357294000, -1.3729251089972200, 'Outlet Hendon Vilete', '01915672526 ', 'SR2 8RW ', '62 Villette Road', 'Sunderland', 'Greggs', false),\
		(91686, 51.5219800056006000, -0.1360346918125500, 'Ldn Tottenham Crt Rd', '02076314161 ', 'W1T 4TL ', '92 Tottenham Court Road', 'London', 'Greggs', true),\
		(91687, 54.2808865873592000, -0.4023581428643450, 'SCborough Brnswck SC', '01723367728 ', 'YO11 1UE', 'Unit 4 Brunswick Shopping Cent', 'Scarborough', 'Greggs', true),\
		(91688, 53.6450716569168000, -1.7827411594168000, 'Hudfield New St', '01484429539 ', 'HD1 2BQ ', 'Unit A, 39 New Street', 'Huddersfield', 'Greggs', true),\
		(91689, 53.6866926087437000, -1.4888063651808600, 'Wkfield Stanley Rd', '01924364422 ', 'WF1 4LH ', 'Unit 3, 77 Stanley Road', 'Wakefield', 'Greggs', true),\
		(91690, 51.8472878561588000, -2.1702637172691600, 'Gloucster Glcestr BP', '01452 619564', 'GL3 4BJ ', 'Unit A4 Whittle Square', 'Gloucester', 'Greggs', true),\
		(91691, 55.9571745704213000, -3.1878937272510100, 'Edin Broughton St', '01315560854 ', 'EH1 3JU ', '27 Broughton Street', 'Edinburgh', 'Greggs', false),\
		(91692, 52.6359011926911000, -1.1353230882188900, 'Leicestr Highcrss SC', '01162620730 ', 'LE1 4FP ', 'SU26 Lower Level', 'Leicester', 'Greggs', true),\
		(91693, 51.9051027495957000, -0.4537509820893040, 'Luton Marsh Rd', '01582 581132', 'LU3 2QP ', '8 Nursery Parade', 'Luton', 'Greggs', true),\
		(91694, 56.4168188089949000, -3.4764730067515100, 'Perth Inveralmond Rd', '01738449195 ', 'PH1 3TW ', 'Unit 4 Inveralmond Road', 'Perth', 'Greggs', false),\
		(91695, 54.6984000172404000, -1.2183852881266600, 'Hartpl Powlett Rd', '01429267276 ', 'TS24 8NA', 'Unit 2 Powlett Road', 'Hartlepool', 'Greggs', true),\
		(91696, 0.0000000000000000, 0.0000000000000000, 'Rotherham Onyx RP', '01709872774 ', 'S63 7FN ', 'Unit 2 Onyx, Harris Hawk Way', 'Rotherham', 'Greggs', false),\
		(91697, 51.6080692734627000, -2.5253506956188600, 'Thornbury St Marys', '01454416917 ', 'BS35 2BH', 'Unit 5 St Marys Way', 'Bristol', 'Greggs', false),\
		(91698, 0.0000000000000000, 0.0000000000000000, 'Tunbridge Wells Foun', '01892530562 ', 'TN2 3FB ', 'Unit 7b Fountains Retail Park', 'Tunbridge Wells', 'Greggs', false),\
		(91699, 52.5748752028324000, -1.1638967027767400, 'Blaby St Johns Crt', '01162771793 ', 'LE8 4DJ ', '9  Johns Court', 'Leicester', 'Greggs', true),\
		(91700, 0.0000000000000000, 0.0000000000000000, 'Birm Burtons Way', '01217797029 ', 'B36 0UG ', '35 Burtons Way (Unit 2)', 'Birmingham', 'Greggs', true),\
		(91701, 0.0000000000000000, 0.0000000000000000, 'Telford Hadley CTR', '01952261255 ', 'TF1 5GQ ', 'Unit 1 Hadley Centre', 'Telford', 'Greggs', true),\
		(91702, 0.0000000000000000, 0.0000000000000000, 'Lawley Birchfld Way', '01952501566 ', 'TF3 5BZ ', 'Unit 7 Birchfield Way (Formerl', 'Telford', 'Greggs', false),\
		(91703, 51.4087044379504000, -3.4828200451298200, 'Llanwt Mjr Pndfld SC', '01446792302 ', 'CF61 1XA', 'Unit 3 The Precinct', 'Cardiff', 'Greggs', false),\
		(91704, 55.9616131638935000, -3.1519553650854400, 'Edin Restalig Rd Sth', '01316614770 ', 'EH7 6EH ', '162 Restalrig Road South', 'Edinburgh', 'Greggs', false),\
		(91705, 53.3590262328765000, -2.5044377684018100, 'MOTO Lymm', '01925 759736', 'WA13 0SP', 'MOTO Poplar Services', 'Cheshire', 'Greggs', true),\
		(91706, 54.9741849907424000, -1.5609063488755200, 'Outlet Wlker Welbeck', '01912765107 ', 'NE6 2QX ', '265 Welbeck Road', 'Newcastle upon Tyne', 'Greggs', false),\
		(91707, 56.0145956242192000, -3.7896416476496800, 'Falkirk Carron Rd', '01324628232 ', 'FK2 7RS ', 'Unit 1 Carron Road', 'Falkirk', 'Greggs', false),\
		(91708, 56.7124535896088000, -2.4678389860567800, 'Montrose High St', '01674673574 ', 'DD10 8LR', '33-35 High Street', 'Montrose', 'Greggs', false),\
		(91709, 51.5136982985563000, -0.0935396384343720, 'Ldn Cheapside', '02072362052 ', 'EC2V 6AT', 'Unit 3 Bow Bells House', 'Central London', 'Greggs', true),\
		(91710, 51.2773243385833000, 1.0820670400952500, 'Canterbury St George', '01227787714 ', 'CT1 2SS ', '22 St Georges Street', 'Canterbury', 'Greggs', false),\
		(91711, 55.7728202653608000, -4.3335164693992700, 'Newtn Mearns The Ave', '01416392024 ', 'G77 6AA ', 'Unit 31 The Avenue Shopping Ce', 'Glasgow', 'Greggs', false),\
		(91712, 52.0028407051711000, -0.7247752196808120, 'Bletchley Beacon RP', '01908370364 ', 'MK1 1BN ', 'Unit 1C, Beacon Retail Park', 'Milton Keynes', 'Greggs', true),\
		(91713, 54.5709928702301000, -1.2541887481196500, 'Middlsboro Newprt Rd', '01642242712 ', 'TS1 5QH ', 'Newport Road', 'Middlesbrough', 'Greggs', true),\
		(91714, 0.0000000000000000, 0.0000000000000000, 'Leeds Ctrl Arc', '01132449179 ', 'LS1 6DX ', 'Unit 7 Central Arcade', 'Leeds', 'Greggs', true),\
		(91715, 51.5046122423464000, -0.2197551544800450, 'Shep Bush Uxbridge', '02087437449 ', 'W12 8LP ', '68 Uxbridge Road', 'Shepherds Bush', 'Greggs', true),\
		(91716, 51.4507279903190000, -0.3576554771493580, 'Whitton High St', '02088941163 ', 'TW2 7LD ', '83 High Street', 'Whitton', 'Greggs', true),\
		(91717, 51.6542497828281000, -0.3947916299881340, 'Watford 114 High St', '01923255675 ', 'WD17 2BJ', '114c High Street', 'Watford', 'Greggs', true),\
		(91718, 52.9456369035582000, -1.1332095250207700, 'Notham Lady Bay RP', '01159867934 ', 'NG2 3GZ ', 'Unit 13 (previously Pod Unit 2', 'Nottingham', 'Greggs', true),\
		(91719, 52.9962636175344000, -1.2563986088684000, 'Kimberley Greens Ln', '01159382890 ', 'NG16 2PB', 'Unit 9a, 41 Greens Lane', 'Nottingham', 'Greggs', false),\
		(91720, 51.4325738168236000, -0.5456711659497160, 'Egham High St', '01784434653 ', 'TW20 9EY', 'Unit 1, 64/65 High Street', 'Egham', 'Greggs', true),\
		(91721, 51.4960396419847000, -3.5676235731451500, 'Bridgend Parc Plaza', '01656645109 ', 'CF31 3XY', 'Unit 3A Parc Plaza', 'Bridgend', 'Greggs', false),\
		(91722, 54.9629729447014000, -1.6322465260323600, 'Ncl Penn St', '01912732218 ', 'NE4 7BG ', '1-3 Penn Street', 'Newcastle upon Tyne', 'Greggs', true),\
		(91723, 52.4376634500000000, -1.8470015450000000, 'Hall Green Stratf Rd', '01217786723 ', 'B28 8AQ ', 'Unit 2, 1176-1184 Stratford Rd', 'Birmingham', 'Greggs', true),\
		(91724, 52.2007054479628000, -1.7108775318118600, 'Stratford Maybird RP', '01789298638 ', 'CV37 0HZ', 'Unit U Maybird Retail Park', 'Stratford upon Avon', 'Greggs', false),\
		(91725, 51.3641132504069000, 0.6078937675466450, 'Rainham Rainham SC', '01634238037 ', 'ME8 7HW ', 'Unit 3 Rainham Shopping Centre', 'Kent', 'Greggs', false),\
		(91726, 53.3988572753333000, -2.9687489230355400, 'Lvrpool Catharine St', '01517091053 ', 'L8 7NL  ', '2a Catharine Street', 'Liverpool', 'Greggs', true),\
		(91727, 0.0000000000000000, 0.0000000000000000, 'Eston Low Grange Frm', '01642463437 ', 'TS6 9TN ', 'Unit 4 Low Grange Farm', 'Eston', 'Greggs', true),\
		(91728, 54.9246757295305000, -1.6184436330471300, 'Team V Tenth Ave', '01914877057 ', 'NE11 0HL', 'Unit 3 Tenth Avenue West', 'Gateshead', 'Greggs', true),\
		(91729, 51.9026213372471000, -0.3946751147846910, 'Luton Hitchin Rd', '01582721949 ', 'LU2 7XH ', 'Jansel House', 'Luton', 'Greggs', true),\
		(91730, 51.3864059359287000, 1.3810603812437600, 'Margate High St', '01843227015 ', 'CT9 1JW ', '106 High Street', 'Margate', 'Greggs', false),\
		(91731, 53.5074418468796000, -1.1140575104405400, 'Doncaster Lkside Vlg', '01302344502 ', 'DN4 5PH ', 'Unit 56 Lakeside Village Outle', 'Doncaster', 'Greggs', true),\
		(91732, 52.0848240999836000, -4.6597284154861700, 'Cardigan Pendre', '01239615355 ', 'SA43 1JS', '43 Pendre', 'Cardigan', 'Greggs', true),\
		(91733, 52.5433696975843000, -2.0597486940793200, 'Outlet Tipton High', '01215208533 ', 'DY4 9JB ', '162 High Street', 'West Midlands', 'Greggs', false),\
		(91734, 0.0000000000000000, 0.0000000000000000, 'Longbridge High St', '01214753695 ', 'B31 2UQ ', '4 High Street (a.k.a. Unit 7)', 'West Midlands', 'Greggs', true),\
		(91735, 52.5625904700000000, -1.8232012340000000, 'Sut Coldfd Red Rose', '01213547024 ', 'B72 1XX ', '53 Lower Parade', 'Sutton Coldfield', 'Greggs', true),\
		(91736, 52.0004805637717000, -2.1294187420861500, 'Tewkesbury Delta Dr', '01684273020 ', 'GL20 8HB', 'Unit 5E Delta Drive', 'Tewkesbury', 'Greggs', false),\
		(91737, 51.5229289379306000, -3.1397071433284200, 'Pentwyn Pentwyn RP', '02920549323 ', 'CF23 7XH', 'Unit 3 Pentwyn Retail Park', 'Cardiff', 'Greggs', false),\
		(91738, 54.5772841833810000, -1.2383714044381900, 'Middlsboro Hill St', '01642249337 ', 'TS1 1TB ', 'Unit 34 (29) East Mall', 'Middlesbrough', 'Greggs', true),\
		(91739, 50.7583432726717000, -1.5409726359621600, 'Lymington High St', '01590671049 ', 'SO41 9AF', '37 High Street', 'Lymington', 'Greggs', false),\
		(91740, 56.3961807899663000, -3.4327235454661000, 'Perth Scott St', '0173 8632574', 'PH1 5EJ ', '9 Scott Street', 'Perth', 'Greggs', false),\
		(91741, 55.8104801793788000, -4.2451328302724200, 'Glas Carmunnock Rd', '01416379098 ', 'G44 5EH ', '428A Carmunnock Road', 'Glasgow', 'Greggs', false),\
		(91742, 52.9198739093340000, -1.5054339401785100, 'Derby Kingsway', '01332343197 ', 'DE22 3FA', 'Unit P2 Kingsway Retail Park', 'Derby', 'Greggs', true),\
		(91743, 52.8296704080111000, 0.8492883596574960, 'Fakenham Millers Wlk', '01328 864950', 'NR21 9AP', 'Unit 14 Miller Walk', 'Fakenham', 'Greggs', false),\
		(91744, 51.5184925695894000, -0.1119620228675480, 'Ldn Chancery Ln', '02072428687 ', 'WC1V 6DR', '5 High Holborn', 'Central London', 'Greggs', true),\
		(91745, 51.4727348789473000, -0.0686810906814850, 'Peckham Aylesham CTR', '02077323831 ', 'SE15 5EW', 'Unit 8 Aylesham Centre', 'Peckham', 'Greggs', true),\
		(91746, 51.5645438245511000, -0.1053080966462150, 'Fnsbry Pk Sev Sis Rd', '02072635035 ', 'N4 2DD  ', '255 Seven Sisters Road', 'London', 'Greggs', true),\
		(91747, 51.6498541429651000, -3.9898716720101600, 'Swansea Fforest Fach', '01792589485 ', 'SA5 4BB ', 'Unit A Fforest Fach Retail Par', 'Swansea', 'Greggs', false),\
		(91748, 52.4030413500000000, -2.0162417270000000, 'Rednal Arden Rd', '01214533538 ', 'B45 0JA ', '10 Arden Road', 'Birmingham', 'Greggs', false),\
		(91749, 52.4340101800000000, -1.8931850250000000, 'Kings Heath High St', '01214411251 ', 'B14 7LG ', '134 High Street', 'Birmingham', 'Greggs', true),\
		(91750, 56.0009743815325000, -3.8871257553933700, 'Bonnybrdge Bridge St', '01324814265 ', 'FK4 1AA ', 'Unit 3 Bridge Street', 'Bonnybridge', 'Greggs', false),\
		(91751, 51.1860099736638000, -0.6114244887813290, 'Godalming High St', '01483421653 ', 'GU7 1AD ', '8 High Street', 'Godalming', 'Greggs', false),\
		(91752, 53.5526463623553000, -1.4797057589563600, 'Barnsley May Day Grn', '01226242605 ', 'S70 1SH ', '20 May Day Green', 'Barnsley', 'Greggs', true),\
		(91753, 56.7031032597491000, -3.7335235937124800, 'Pitlochry Atholl Rd', '01796472467 ', 'PH16 5BL', '92 Atholl Road', 'Pitlochry', 'Greggs', false),\
		(91754, 55.8435522697377000, -3.9484573485717800, 'Chapelhall Lauchope', '01236766812 ', 'ML6 8SW ', '31-33 Lauchope Street', 'Chapelhall', 'Greggs', false),\
		(91755, 53.2622911632181000, -2.5123230606365600, 'Northwich Lcester St', '0160645907  ', 'CW9 5LA ', '8 Leicester Street', 'Northwich', 'Greggs', true),\
		(91756, 54.2814464595621000, -0.4018756537023950, 'SCborough Westborogh', '01723375921 ', 'YO11 1UH', '6-7 Westborough', 'Scarborough', 'Greggs', true),\
		(91757, 52.6418753460389000, -1.0891543763753700, 'Leicestr Uppinghm Rd', '01162769725 ', 'LE5 4DG ', '237C Uppingham Road', 'Leicester', 'Greggs', true),\
		(91758, 55.8683071835471000, -3.9830048808194800, 'Airdrie High St', '01236763132 ', 'ML6 0DT ', 'Unit 3, 22c High Street', 'Airdrie', 'Greggs', false),\
		(91759, 51.7192718585951000, -3.8498219998692700, 'Pontardwe Herbert St', '01792864336 ', 'SA8 4ED ', '70 Herbert Street', 'Pontardawe', 'Greggs', false),\
		(91760, 53.1913665244361000, -0.5569078455341800, 'Lincoln Brant Rd SC', '01522720929 ', 'LN5 9TR ', 'Unit 4 Brant Road Shopping Cen', 'Lincoln', 'Greggs', false),\
		(91761, 53.5850546836035000, -2.2079780348879600, 'MOTO Birch', '01616538656 ', 'OL10 2HQ', 'MOTO Services Birch (Eastbound', 'Lancashire', 'Greggs', true),\
		(91762, 0.0000000000000000, 0.0000000000000000, 'Wishaw Coltness Rd', '01698387221 ', 'ML2 8JZ ', '398A Coltness Road', 'Wishaw', 'Greggs', false),\
		(91763, 54.0843536838603000, -0.1879628467919670, 'Brdlingtn Promenades', '01262609903 ', 'YO15 2QE', 'Unit 11 The Promenades Shoppi', 'Bridlington', 'Greggs', true),\
		(91764, 54.9000953943012000, -1.5327237272328900, 'Washington Galleries', '01914155877 ', 'NE38 7RR', 'Unit 69 Wessington Square', 'Washington', 'Greggs', true),\
		(91765, 51.4034032981016000, -1.3247887797473200, 'Newbury Nthbrook St', '0163541333  ', 'RG14 1AE', '77 Northbrook Street', 'Newbury', 'Greggs', false),\
		(91766, 51.5651547647602000, -0.1344571118134380, 'Archway Junction Rd', '02072724736 ', 'N19 5QT ', '33 Junction Road', 'London', 'Greggs', true),\
		(91767, 52.2642473774730000, -0.9001340558553430, 'Nmptn Alexandra Tce', '01604791461 ', 'NN2 7SJ ', '9 Alexandra Terrace', 'Northampton', 'Greggs', false),\
		(91768, 51.7131635432064000, -5.0350122696447900, 'Mil Haven Charles St', '01646690813 ', 'SA73 2HA', '83 Charles Street', 'Milford Haven', 'Greggs', true),\
		(91769, 50.7413841500000000, -1.9780236270000000, 'Poole Nuffield', '01202649557 ', 'BH17 0RA', 'Nuffield Industrial Estate', 'Poole', 'Greggs', false),\
		(91770, 51.7308693411345000, -3.1342448332831200, 'Abertillry Chrch St', '01495217151 ', 'NP13 1DA', '13 Church Street', 'Abertillery', 'Greggs', false),\
		(91771, 0.0000000000000000, 0.0000000000000000, 'Gateshead Trinity Sq', ' 01914771129', 'NE8 1BF ', '18 Ellison Walk', 'Tyen and Wear', 'Greggs', true),\
		(91772, 0.0000000000000000, 0.0000000000000000, 'Chelmsley SC Wst Mll', '01217796063 ', 'B37 5TN ', 'Unit LG1 Lower West Mall', 'Birmingham', 'Greggs', true),\
		(91773, 52.5504663300000000, -1.8591310090000000, 'Sut Coldfd Prin Alc', '01213542989 ', 'B73 6RB ', 'Unit 3, 17 Princess Alice Driv', 'Sutton Coldfield', 'Greggs', true),\
		(91774, 55.2411185010519000, -4.8551212867635300, 'Girvan Dalrymple St', '01465713375 ', 'KA26 9BS', '69 Dalrymple Street', 'Girvan', 'Greggs', false),\
		(91775, 53.4778282844901000, -1.0789485816881500, 'Rossington Rngtn Mkt', '01302860793 ', 'DN11 0PD', 'Unit 2 Rossington Market', 'Doncaster', 'Greggs', false),\
		(91776, 52.9620065594466000, -1.0655297369927300, 'Netherfield Victoria', '01159874313 ', 'NG4 2PE ', 'Unit R1B Victoria Retail Park', 'Nottingham', 'Greggs', true),\
		(91777, 51.6936960645036000, -4.9419265330228600, 'Pembrke Dock Dmnd St', '01646622037 ', 'SA72 6AH', '6 Dimond Street', 'Pembroke Dock', 'Greggs', false),\
		(91778, 53.1384569407141000, -1.5559803429081800, 'Matlock Crown CTR', '01629581192 ', 'DE4 3AT ', 'Unit 2 Crown Centre', 'Derbyshire', 'Greggs', true),\
		(91779, 51.5630400852922000, -1.8164088355869400, 'Westmead Westmead IE', '01793431981 ', 'SN5 7YT ', 'Unit 19, Westmead Industrial E', 'Swindon', 'Greggs', false),\
		(91780, 52.3348098500000000, -2.0603465590000000, 'Bromsgrove High St', '01527558775 ', 'B61 8EX ', '104 High Street', 'Bromsgrove', 'Greggs', false),\
		(91781, 51.4585092436414000, -2.5905020407430600, 'Bristol Horsefair', '01179298044 ', 'BS1 3JL ', '31 Horsefair', 'Bristol', 'Greggs', true),\
		(91782, 51.6024846957419000, -3.3400370443626900, 'Pntyprdd Taff St', '01443406151 ', 'CF37 4SU', '79a Taff Street', 'Pontypridd', 'Greggs', false),\
		(91783, 52.5790861527036000, 1.7276498551239200, 'Gorleston High St', '01493659021 ', 'NR31 6RB', '147 High Street', 'Gorleston', 'Greggs', false),\
		(91784, 52.6219014511341000, 1.2623115818532000, 'Norwch Colman Rd', '01603507968 ', 'NR4 7EH ', '82 Colman Road', 'Norwich', 'Greggs', false),\
		(91785, 55.8092635367010000, -4.1783847045549800, 'Cambuslng Western Rd', '01416414048 ', 'G72 8PE ', 'Unit 6 151 Western Road', 'Glasgow', 'Greggs', false),\
		(91786, 55.8544740817489000, -4.1587695523695600, 'Glas Budhill Ave', '01417745495 ', 'G32 0PW ', '3 Budhill Avenue', 'Glasgow', 'Greggs', false),\
		(91787, 53.9615670297902000, -2.7613576493394500, 'MOTO Lancaster South', '01524793801 ', 'LA2 9DU ', 'MOTO Services M6', 'Lancaster', 'Greggs', true),\
		(91788, 53.7136251200000000, -2.4815359320000000, 'MOTO Blackburn', '01254704956 ', 'BB3 0AT ', 'MOTO Blackburn', 'Blackburn', 'Greggs', true),\
		(91789, 52.0145153797065000, -0.2024856942065770, 'MOTO Baldock', '01462730962 ', 'SG7 5TR ', 'A1(M)Jct 10', 'Hertfordshire', 'Greggs', true),\
		(91790, 51.5874271634209000, -0.6278606799654400, 'MOTO Beaconsfield', '01494 674872', 'HP9 2SE ', 'A355 Windsor Drive', ' ', 'Greggs', true),\
		(91791, 53.5921496236476000, -0.9923254859643430, 'MOTO Doncaster', '01302 840329', 'DN8 5GS ', 'M18 JCT 5', 'Doncaster', 'Greggs', true),\
		(91792, 52.4287707600000000, -2.0171484640000000, 'MOTO Frankley North', '01215859604 ', 'B32 4AR ', 'M5 Jct 3/4 North', 'Birmingham', 'Greggs', true),\
		(91793, 51.3398197061404000, 0.6059398145764590, 'MOTO Medway', '01634363138 ', 'ME8 8PQ ', 'M2 Jct 4/5', 'Gillingham', 'Greggs', true),\
		(91794, 0.0000000000000000, 0.0000000000000000, 'MOTO Cobham', '01932588399 ', 'KT11 3DB', 'Junction 9/10, M25,', 'Cobham', 'Greggs', true),\
		(91795, 53.6975209949089000, -1.2667427930674300, 'MOTO Ferrybridge', '01977671862 ', 'WF11 0AF', 'Junction 33, M62/A1', 'Ferrybridge', 'Greggs', true),\
		(91796, 51.4624326573334000, -0.3024885509335730, 'Richmond The Quadrnt', '02089488348 ', 'TW9 1DN ', '35 The Quadrant', 'Richmond', 'Greggs', true),\
		(91797, 51.5362069993574000, 0.0519420482781330, 'East Ham 95 High St', '02084716996 ', 'E6 1HZ  ', '95 High Street', 'East Ham', 'Greggs', true),\
		(91798, 51.6545032421519000, -0.2013251578786560, 'Barnet High St', '02084470115 ', 'EN5 5XQ ', '134 High Street', 'Barnet', 'Greggs', true),\
		(91799, 53.5463024424905000, -2.6313814540530200, 'Wigan Mkt Pl', '01942498055 ', 'WN1 1PE ', '21-23 Market Place', 'Wigan', 'Greggs', true),\
		(91800, 53.4153666807468000, -2.5962043014887700, 'Warringtn Winwick Rd', '01925 571979', 'WA2 9SX ', 'Winwick Road', 'Warrington', 'Greggs', true),\
		(91801, 51.6520156379762000, -0.0833033748228860, 'Enfield Chrch St', '0208 3679106', 'EN2 6BE ', '8 Church Street', 'Enfield', 'Greggs', true),\
		(91802, 55.9756887542289000, -3.2385865550495200, 'Edin Boswell Parkway', '01315525036 ', 'EH5 1LW ', '236-240 Crewe North Road', 'Edinburgh', 'Greggs', false),\
		(91803, 51.5323140300534000, -3.5776932333594900, 'Bridgend Mcarthr Gln', '01656661572 ', 'CF32 9SU', 'Unit 45a McArthur Glen', 'Cardiff', 'Greggs', false),\
		(91804, 0.0000000000000000, 0.0000000000000000, 'Felling Booth St', '01914380135 ', 'NE10 9BF', 'Unit 5 Booth Street', 'Gateshead', 'Greggs', true),\
		(91805, 55.8663770471952000, -3.6857006735817800, 'Whitburn Wst Main St', '01501740537 ', 'EH47 0QB', '19 West Main Street', 'Whitburn', 'Greggs', false),\
		(91806, 52.3192576800000000, -2.0586381790000000, 'Bromsgrove Sherwd Rd', '01527877140 ', 'B60 3DR ', '53 Sherwood Road', 'Bromsgrove', 'Greggs', false),\
		(91807, 52.0341608639254000, -0.7716857901009540, 'Miltn Ky Pheonix Hse', '01908554085 ', 'MK9 1BE ', 'Unit 1 Phoenix House', 'Milton Keynes', 'Greggs', true),\
		(91808, 0.0000000000000000, 0.0000000000000000, 'Bury Rock SC Ctrl St', '01617645934 ', 'BL9 0JN ', '22 Central Street', 'Bury', 'Greggs', true),\
		(91809, 51.9017371007787000, -2.0753137021600800, 'Cheltenham High St', '01242248775 ', 'GL50 3HH', '219 High Street', 'Cheltenham', 'Greggs', true),\
		(91810, 53.1923816569658000, -2.8887401986192300, 'Chester Frodsham St', '01244313241 ', 'CH1 3JJ ', '9 Frodsham Street', 'Chester', 'Greggs', true),\
		(91811, 53.3408396572480000, -2.9757088638039200, 'Wirral Croft RP', '0151 3348303', 'CH62 3PN', 'Unit RU2 Croft Retail Park', 'Wirral', 'Greggs', true),\
		(91812, 53.7865986500000000, -2.2489072720000000, 'Burnley Trafalgar St', '01282838027 ', 'BB11 1TQ', 'Trafalgar Street', 'Burnley', 'Greggs', true),\
		(91813, 52.4767858600000000, -2.0681090860000000, 'Cradley Hth Halesown', '01384638683 ', 'B64 6HU ', '190c Halesowen Road', 'West Midlands', 'Greggs', true),\
		(91814, 51.5199807668180000, -0.1217597932047930, 'Ldn Southampton Row', '02074049410 ', 'WC1B 4AR', '76 Southampton Row', 'London', 'Greggs', true),\
		(91815, 53.5923938900000000, -2.2953687310000000, 'Bury Mall Mill Gte', '01617635505 ', 'BL9 0QQ ', 'Unit 22 The Mall', 'Bury', 'Greggs', true),\
		(91816, 51.5197494896628000, -0.1428139030486240, 'Ldn Grt Portland St', '02076373342 ', 'W1W 6QQ ', '111 Great Portland Street', 'Central London', 'Greggs', true),\
		(91817, 56.9644973000000000, -2.2087225080000000, 'Stonehaven Mkt Sq', '01569760023 ', 'AB39 2BA', '31 Market Place', 'Stonehaven', 'Greggs', false),\
		(91818, 0.0000000000000000, 0.0000000000000000, 'Barnsley Wombwell Ln', '01226289525 ', 'S70 3PB ', 'Unit 8, Phase 3, Barnsley Trad', 'South Yorkshire', 'Greggs', false),\
		(91819, 53.7956419256521000, -1.6206818432408200, 'Leeds Butt Ln', '01132796494 ', 'LS13 4JF', 'Unit 1, Butt Lane', 'Leeds', 'Greggs', true),\
		(91820, 51.5137932801643000, -0.1021686335518570, 'Ldn Ludgate Hill', '02072486623 ', 'EC4M 7JN', '41/43 Ludgate Hill', 'London', 'Greggs', true),\
		(91821, 52.7409920857509000, 0.4118167773160870, 'Kngs Lynn Hansa Rd', '01553776168 ', 'PE30 4HX', 'Former HSBC, Hardwick Industri', 'Kings Lynn', 'Greggs', false),\
		(91822, 51.9474349451380000, -0.5031342867331320, 'MOTO Toddington N', '01525873052 ', 'LU5 6HR ', 'Toddington', 'Bedfordshire', 'Greggs', true),\
		(91823, 51.5085253931351000, -3.3068013575393700, 'MOTO Cardiff', '02920892327 ', 'CF72 8SA', 'Pontyculn', 'Mid Glamorgan', 'Greggs', true),\
		(91824, 52.6431665022005000, -2.0573727926274500, 'MOTO Hilton Park Nor', '01922411292 ', 'WV11 2AT', 'Essington', 'Staffs', 'Greggs', true),\
		(91825, 52.9480407005475000, -0.6784773702856750, 'MOTO Grantham', '01476565711 ', 'NG32 2AB', 'Gonerby Moor', 'Lincolnshire', 'Greggs', true),\
		(91826, 54.7979553231934000, -2.8721794068318500, 'MOTO Southwaite Nrt', '01697473030 ', 'CA4 0NT ', 'Broadfield Road', 'Carlisle', 'Greggs', true),\
		(91827, 51.4865730704751000, -0.3961064124649400, 'MOTO Heston W', '02085746892 ', 'TW5 9NB ', 'Phoenix Way', 'Middlesex', 'Greggs', true),\
		(91828, 54.8893230076301000, -1.5598337781311400, 'MOTO Washington S', '01914103212 ', 'DH3 2SJ ', 'Portobello', 'County Durham', 'Greggs', true),\
		(91829, 53.3008641077557000, -2.4016275107010900, 'MOTO Knutsford', '01565653499 ', 'WA16 0TL', 'Northwich Road', 'Cheshire', 'Greggs', true),\
		(91830, 53.9467384052044000, -1.3686212262240400, 'MOTO Wetherby', '01937582626 ', 'LS22 5GT', 'Kirk Deighton', 'Wetherby', 'Greggs', true),\
		(91831, 51.4510991974393000, -1.3084714910950400, 'MOTO Chieveley', '01635247575 ', 'RG18 9XX', 'Oxford Road', 'Berkshire', 'Greggs', true),\
		(91832, 51.4261845431617000, -1.0349756828612200, 'MOTO Reading W', '01189507633 ', 'RG30 3UQ', 'Burghfield', 'Berkshire', 'Greggs', true),\
		(91833, 50.7166665438333000, -3.4635443931708600, 'MOTO Exeter', '01392369719 ', 'EX2 7HF ', 'Sandygate', 'Devon', 'Greggs', true),\
		(91834, 51.9500216859265000, -1.1997610300631500, 'MOTO Cherwell Valley', '01869345470 ', 'OX27 7RD', 'Northampton Road', 'Oxfordshire', 'Greggs', true),\
		(91835, 52.8841656205577000, -2.1706476894052600, 'MOTO Stafford N', '01785813218 ', 'ST15 0EU', 'Stone', 'Staffordshire', 'Greggs', true),\
		(91836, 51.4261845431617000, -1.0349756828612200, 'MOTO Reading E', '01189598045 ', 'RG30 3UQ', 'Burghfield', 'Berkshire', 'Greggs', true),\
		(91837, 51.5117982077593000, -2.1582296165998700, 'MOTO Leigh Del E', '01666838208 ', 'SN14 6LB', 'Chippenham', 'Wiltshire', 'Greggs', true),\
		(91838, 51.5117982077593000, -2.1582296165998700, 'MOTO Leigh Del W', '01666838829 ', 'SN14 6LB', 'Chippenham', 'Wiltshire', 'Greggs', true),\
		(91839, 51.9474349451380000, -0.5031342867331320, 'MOTO Toddington S', '01525874569 ', 'LU5 6HR ', 'Toddington', 'Bedfordshire', 'Greggs', true),\
		(91840, 52.6081438500000000, -1.6410433510000000, 'MOTO Tamworth', '01827282292 ', 'B77 5PS ', 'Green Lane', 'Staffordshire', 'Greggs', true),\
		(91841, 52.9761478341858000, -1.1893699350727300, 'Notham Nuthall Rd', '01159249696 ', 'NG8 5BU ', '331 Nuthall Road', 'Nottingham', 'Greggs', true),\
		(91842, 52.6394674042652000, 1.2834004392124500, 'Norwch Barker St', '01603662423 ', 'NR2 4TN ', '2 Barker Street', 'Norwich', 'Greggs', false),\
		(91843, 51.3488557567116000, -2.9794549908930800, 'Wst Sup Mare High St', '01934425476 ', 'BS23 1HE', '85 High Street', 'Weston Super Mare', 'Greggs', true),\
		(91844, 55.8706034627144000, -4.1864065029487200, 'Glas Smithycroft Rd', '01417709920 ', 'G33 2QZ ', '242 Smithycroft Road', 'Glasgow', 'Greggs', false),\
		(91845, 53.4802480127044000, -2.2334871881944200, 'Manc 93 Piccadilly', '01612282279 ', 'M1 2DA  ', '93 Piccadilly', 'Manchester', 'Greggs', true),\
		(91846, 51.5911516299820000, -3.2034441488602600, 'Bedwas Bedwas Ip', '02920886125 ', 'CF83 8DU', 'Unit 5 Bedwas Industrial Park', 'Caerphilly', 'Greggs', false),\
		(91847, 53.7845014200000000, -1.7206316380000000, 'Bradford Sticker Ln', '01274660355 ', 'BD4 8QQ ', '228-230 Sticker Lane', 'Bradford', 'Greggs', true),\
		(91848, 54.9183612683575000, -1.4307015468763200, 'Sdland Hyltn Rvrside', '01915487108 ', 'SR5 3XG ', 'Unit 1B Hylton Riverside Retai', 'Tyne & Wear', 'Greggs', true),\
		(91849, 54.5832505750756000, -1.3508082491649800, 'Stockton High Newham', '01642605970 ', 'TS19 8JZ', 'High Newham Road', 'Stockton on Tees', 'Greggs', true),\
		(91850, 53.6452042038752000, -1.7864768191146100, 'Hudfield Bus Stn', '01484535530 ', 'HD1 2JN ', 'Upperhead Row', 'Huddersfield Bus Station', 'Greggs', true),\
		(91851, 51.5298556301170000, -3.2059498488114200, 'Cardiff Thornhill Rd', '02920617083 ', 'CF14 6RG', 'Unit 1 Former Thornhill Cars', 'Cardiff', 'Greggs', false),\
		(91852, 51.4774866875016000, -3.7037475913587300, 'Porthcawl St John St', '01656771562 ', 'CF36 3AP', '31 John Street', 'Cardiff', 'Greggs', false),\
		(91853, 52.5173917400000000, -1.9031811640000000, 'Perry Barr One Stop', '01213560208 ', 'B42 1AA ', 'Unit 37 One Stop Shopping Cent', 'Birmingham', 'Greggs', true),\
		(91854, 56.0033198798080000, -3.8134816254446200, 'Camelon Main St', '01324630070 ', 'FK1 4EG ', '332 Main Street', 'Falkirk', 'Greggs', false),\
		(91855, 0.0000000000000000, 0.0000000000000000, 'West Brom New Sq SC', '01215536748 ', 'B70 7PP ', '45 New Square (was 20a)', 'West Midlands', 'Greggs', true),\
		(91856, 54.0036191051235000, -0.4373634431191910, 'Driffield, Middle St', '01377232091 ', 'YO25 6PS', 'Unit 2', 'East Yorkshire', 'Greggs', true),\
		(91857, 55.9333026694966000, -3.2599799103199700, 'Edin Stenhse Pl Est', '01314435992 ', 'EH11 3DQ', 'Unit 2, 74 Stenhouse Place Eas', 'Edinburgh', 'Greggs', false),\
		(91858, 0.0000000000000000, 0.0000000000000000, 'Brierley Hl Mryhl 10', '01384263704 ', 'DY6 1QX ', 'Kiosk K10a/b Lower Mall Phase', 'Brierley Hill', 'Greggs', true),\
		(91859, 51.9185454752248000, -2.1046249349345800, 'Cheltenham Gallagher', '01242517468 ', 'GL51 9RR', 'Unit J2 Gallagher Retail Park', 'Cheltenham', 'Greggs', true),\
		(91860, 51.5784278169924000, -2.9888573364734000, 'Newport Usk Way', '01633 841220', 'NP20 2BL', 'Unit 1 Usk Way Retail Developm', 'Newport', 'Greggs', true),\
		(91861, 51.7863449596422000, -1.4856925942251300, 'Witney Welch Way', '01993778387 ', 'OX28 6JH', 'Unit 4, 5 Welch Way', 'Oxfordshire', 'Greggs', false),\
		(91862, 51.6604887368906000, -3.5077837271103600, 'Treorchy Bute St', '01443778438 ', 'CF42 6AU', '110 Bute Street', 'Rhondda Cynon Taff', 'Greggs', false),\
		(91863, 50.9192984954925000, -1.4884477265950600, 'Soton Totton SC', '02380668970 ', 'SO40 3BX', 'Unit 15 Totton Shopping Centre', 'Southampton', 'Greggs', false),\
		(91864, 55.8607866520378000, -4.2577031471215700, 'Glas Gordon St', '01412042101 ', 'G1 3RS  ', 'Unit 3, 1/11 Renfield Street &', 'Glasgow', 'Greggs', false),\
		(91865, 55.8228902839936000, -4.3420544094083500, 'Glas Silverburn SC', '01418812931 ', 'G53 6AG ', 'Unit A5 Silverburn Shopping Ce', 'Glasgow', 'Greggs', true),\
		(91866, 55.7608727973323000, -4.0457648133372200, 'Hamilton Low Wtrs Rd', '01698540916 ', 'ML3 7QR ', 'Units 7 & 8 Cadzow Gait', 'Hamilton', 'Greggs', false),\
		(91867, 55.8457166971475000, -4.4694389761968600, 'Paisley Phoenix RP', '0141 8893737', 'PA1 2AB ', 'Unit 12 Phoenix Retail Park', 'Paisley', 'Greggs', false),\
		(91868, 56.1983369546941000, -3.1731449406509900, 'Glnrothes Leslie Rd', '01592759573 ', 'KY7 5PS ', 'Unit 1 Leslie Road', 'Glenrothes', 'Greggs', false),\
		(91869, 52.3878123256726000, -1.5548766125856700, 'Coventry Cannon Pk', '02476697442 ', 'CV4 7EH ', 'Unit 7 Cannon Park Shopping Ce', 'Coventry', 'Greggs', true),\
		(91870, 51.9937214573250000, -2.1573476687990200, 'Tewkesbury High St', '01684295377 ', 'GL20 5AL', '11a High Street', 'Tewkesbury', 'Greggs', false),\
		(91871, 52.8217125239037000, -1.3081586287316200, 'MOTO Donnington Park', '01509673084 ', 'DE74 2TN', 'Castle Donnington', 'East Midlands', 'Greggs', true),\
		(91872, 53.3819866554684000, -1.0613081449712400, 'MOTO Blyth', '01909591596 ', 'S81 8HG ', 'Hill Top Roundabout', 'Nottinghamshire', 'Greggs', true),\
		(91873, 51.4922884605814000, 0.2722685095115920, 'MOTO Thurrock', '01708860909 ', 'RM16 3BG', 'Arterial Road', 'Grays', 'Greggs', false),\
		(91874, 51.0833143558862000, -0.1999392379671240, 'MOTO Pease Pottage', '01293523323 ', 'RH11 9YA', 'Brighton Road', 'West Sussex', 'Greggs', true),\
		(91875, 54.4436280121636000, -1.6674732512295000, 'MOTO Scotch Corner', '01325377726 ', 'DL10 6PQ', 'Middleton Tyas Lane', 'North Yorkshire', 'Greggs', true),\
		(91876, 53.7318353800000000, -2.4538532490000000, 'EURO Beehive', '01254263089 ', 'BB1 2EE ', 'Beehive Trading', ' ', 'Greggs', true),\
		(91877, 55.9425041113000000, -3.0500877546197500, 'Musselburgh High St', '01316533844 ', 'EH21 7EA', '136/138 High Street', 'Musselburgh', 'Greggs', false),\
		(91878, 55.8281302498625000, -4.2114853364775100, 'Ruthrgln 210 Main St', '01416431922 ', 'G73 2HP ', '210 Main Street', 'Glasgow', 'Greggs', false),\
		(91879, 51.4419920956368000, -2.5974973314860900, 'Bedminster East St', '01179662389 ', 'BS3 4JD ', '78 East Street', 'Bristol', 'Greggs', true),\
		(91880, 55.8621358026797000, -4.0258689108613000, 'Coatbridge Main St', '01236422525 ', 'ML5 3BQ ', '62 Main Street', 'Coatbridge', 'Greggs', false),\
		(91881, 53.6818897970738000, -1.5052007366943600, 'Wkfield Stn', '01924291342 ', 'WF1 1XP ', 'Unit 2 Wakefield Westgate Rail', 'Wakefield', 'Greggs', true),\
		(91882, 51.6637288846742000, -3.9125405990329500, 'Swansea Heron Way', '01792794140 ', 'SA6 8PS ', 'Unit 1 Heron Way', 'Swansea', 'Greggs', false),\
		(91883, 51.6888440236572000, -3.2288623344727800, 'Bargoed The Plateau', '01443830079 ', 'CF81 8QT', 'Unit 5 The Plateau', 'Bargoed', 'Greggs', false),\
		(91884, 52.8585694344137000, -3.0554691000561400, 'Oswestry Chrch St', '01691658696 ', 'SY11 2SU', '1 Church Street', 'Oswestry', 'Greggs', true),\
		(91885, 51.7451507322757000, -3.3801924946819000, 'Mthr Tydfl Tydfil SC', '01685373724 ', 'CF47 8EL', '16 New Market Walk', 'Merthyr Tydfil', 'Greggs', false),\
		(91886, 51.4833355830728000, -3.1745506469043500, 'Cardiff Pk Pl', '02920236534 ', 'CF10 3DP', '2a Park Place', 'Cardiff', 'Greggs', true),\
		(91887, 52.4256007470519000, -0.7270982797509840, 'EURO Kettering', '01536517120 ', 'NN14 1UE', 'Rockingham Road', 'Kettering', 'Greggs', true),\
		(91888, 53.3798665988059000, -2.5878910004457600, 'EURO Causeway', '01925573604 ', 'WA4 6QE ', 'Wilderspool Causeway', 'Cheshire', 'Greggs', true),\
		(91889, 53.2320999827174000, -3.0068673880245100, 'EURO Deeside', '01244280932 ', 'CH5 2NN ', 'Parkway', 'Deeside', 'Greggs', true),\
		(91890, 53.6547150596805000, -1.5243713224939700, 'EURO Calder Park', '01924249727 ', 'WF2 7UA ', 'Calder Park Service Station', 'Wakefield', 'Greggs', true),\
		(91891, 51.9285859394484000, -2.5622013507336900, 'EURO Ross Spur', '01989567985 ', 'HR9 7QJ ', 'Trunk Road', 'Hertfordshire', 'Greggs', true),\
		(91892, 53.4224276787639000, -2.9150057553572200, 'EURO Larkhil', '01512285099 ', 'L13 0AR ', 'Liverpool Road', 'Liverpool', 'Greggs', true),\
		(91893, 53.5506454915045000, -2.8087188390551600, 'EURO Newtown', '01695559756 ', 'WN8 8TL ', 'Railway Road', 'Lancashire', 'Greggs', true),\
		(91894, 55.9537518769009000, -4.5583711226230200, 'EURO Lomondgate', '01389762145 ', 'G82 2AR ', 'Lomondgate Drive', 'Dumbarton', 'Greggs', true),\
		(91895, 53.7371197900000000, -1.7220674650000000, 'EURO Cleckheaton', '01274878364 ', 'BD19 6HG', 'Whitehall Road, A58', 'Cleckheaton', 'Greggs', true),\
		(91896, 0.0000000000000000, 0.0000000000000000, 'EURO Markham Vale', '                 ', ' ', 'Markham Lane', 'Derbyshire', '          ', true),\
		(91897, 53.6066074392256000, -2.1063428327586800, 'EURO Milnrow', '01706347053 ', 'OL16 4JD', 'Newhey Road', 'Lancashire', 'Greggs', true),\
		(91898, 53.4015749483624000, -2.2538114735106800, 'EURO Royale Green', '01619986836 ', 'M22 4SY ', 'Longley Lane', 'Manchester', 'Greggs', true),\
		(91899, 53.4293070871502000, -2.1204973093149700, 'EURO Ashton Road', '01614305916 ', 'SK6 2QN ', 'Ashton Road', 'Cheshire', 'Greggs', true),\
		(91900, 53.7260702390742000, -1.3530306849615300, 'Castleford Carltn St', '01977555839 ', 'WF10 1DB', '64 Carlton Street', 'Castleford', 'Greggs', true),\
		(91901, 54.7149424829029000, -1.7464564697073100, 'Crook The Royal Cnr', '01388 766160', 'DL15 9UA', 'Unit 3 & 4 The Royal Corner', 'County Durham', 'Greggs', true),\
		(91902, 55.7600314037398000, -4.1798617980975600, 'E Kilbride The Plaza', '01355223941 ', 'G74 1LW ', 'Unit 22/23', 'East Kilbride', 'Greggs', false),\
		(91903, 55.8624108524740000, -4.2529390854886400, 'Glas Buchanan St', '01413329542 ', 'G1 2LW  ', '162/164 Buchanan Street', 'Glasgow', 'Greggs', false),\
		(91904, 53.3478210109251000, -2.8654420381510900, 'EURO Speke', '01514860558 ', 'L24 1UX ', 'Unit C & D', 'Liverpool', 'Greggs', true),\
		(91905, 51.7746847973946000, -2.8064613546954900, 'EURO Monmouth South', '01600740182 ', 'NP25 4BG', 'A40, Southbound', 'Monmouth', 'Greggs', true),\
		(91906, 51.2157222823436000, -1.5325763098135700, 'EURO Weyhill West', '            ', 'SP11 0PN', 'Weyhill Services West, A303', 'Andover', 'Greggs', true),\
		(91907, 52.4131578200000000, -1.8282384490000000, 'Shirley Parkgate SC', '01217331980 ', 'B90 3BQ ', 'Unit 14 Parkgate Shopping Cent', 'Shirley', 'Greggs', true),\
		(91908, 52.0612087707345000, 1.2816324917823700, 'Martlesham Betts Ave', '01473613481 ', 'IP5 3RH ', '1a Betts Avenue', 'Suffolk', 'Greggs', false),\
		(91909, 52.3725245954226000, -1.2626989848216600, 'Rugby Market Pl', '01788 579631', 'CV21 3DU', '19 Market Place', 'Rugby', 'Greggs', true),\
		(91910, 53.4669506436685000, -2.3235689289185800, 'Stretford Traford Pk', '0161 8728664', 'M17 1PZ ', 'Unit 1B Longwood Road', 'Trafford Park', 'Greggs', true),\
		(91911, 52.9665232853754000, -2.7052792349296800, 'EURO Whitchurch', '01948662941 ', 'SY13 1JZ', 'Wrexham Road', 'Shropshire', 'Greggs', true),\
		(91912, 52.8492838172884000, -3.0266735690425400, 'EURO Oswestry', '01691657777 ', 'SY11 4JA', 'Shrewsbury Road', 'Shropshire', 'Greggs', true),\
		(91913, 55.8479136204009000, -4.4893090909019000, 'Linwood Bridge St', '01505331487 ', 'PA3 3DB ', 'Unit 4 Bridge Street', 'Linwood', 'Greggs', false),\
		(91914, 0.0000000000000000, 0.0000000000000000, 'MOTO Doncaster Forec', '01302843838 ', 'DN8 8GS ', 'M18 JCT 5', 'Doncaster', 'Greggs', false),\
		(91915, 52.0386713394033000, 0.7302387979119270, 'Sudbury Mkt Hill', '01787312796 ', 'CO10 2EA', '5-6 Market Hill', 'Suffolk', 'Greggs', false),\
		(91916, 53.5750633214609000, -0.6550645084490120, 'Blakemore Brumby Cor', '01724859209 ', 'DN16 2AW', '96 Old Brumby Street', 'Scunthorpe', 'Greggs', true),\
		(91917, 53.3828362053233000, -0.0089022461723330, 'BLAKEMORE Louth', '01507354531 ', 'LN11 0WA', 'Fairfield', 'Louth', 'Greggs', true),\
		(91918, 53.4521387072794000, -2.7364619188763700, 'St Helens Chrch Sq', '01744752789 ', 'WA10 1BD', 'Church Square SC', 'St Helens', 'Greggs', true),\
		(91919, 51.5066816937909000, -3.5780322873826000, 'Bridgend Adare St', '01656663406 ', 'CF31 1ET', '15 Adare Street', 'Mid Glamorgan', 'Greggs', false),\
		(91920, 52.7131105080535000, -2.5014366825895900, 'Blakemore Leegomery', '01952258342 ', 'TF1 6FQ ', 'Leegomery', 'Telford', 'Greggs', true),\
		(91921, 51.6571200606405000, -0.3982177807538590, 'Watford Parade', '01923220988 ', 'WD17 1LQ', '5 The Parade', 'Watford', 'Greggs', true),\
		(91922, 55.5441551945524000, -4.6628572864397400, 'Troon 26 Portland St', '01292313310 ', 'KA10 6EA', '26/28 Portland Street', 'Troon', 'Greggs', false),\
		(91923, 51.2841959457873000, -1.0597345411515000, 'Chineham Chineham SC', '01256321713 ', 'RG24 8BQ', 'Unit 6 Chineham Shopping Centr', 'Hampshire', 'Greggs', false),\
		(91924, 50.8137803400000000, -1.9131943390000000, 'Wimborne Ferndown In', '01202894341 ', 'BH21 7PQ', '110 Cobham Road', 'Wimborne', 'Greggs', false),\
		(91925, 53.5695951900000000, -2.2934732140000000, 'EURO Blackford', '0161 7963042', 'BL9 9ST ', 'Manchester Road', 'Bury', 'Greggs', true),\
		(91926, 51.3788454600000000, -2.3592111500000000, 'Bath Southgate St', '01225420125 ', 'BA1 1AQ ', 'Unit 56 Southgate Street', 'Bath', 'Greggs', true),\
		(91927, 51.5021194743629000, -2.5794969371026800, 'Bristol Gloucester R', '01179692965 ', 'BS7 0SH ', 'Unit 5 Gloucester Road North', 'Bristol', 'Greggs', true),\
		(91928, 52.9727322567702000, -1.3090412072637100, 'Ilkeston Bath St', '01159300177 ', 'DE7 8AH ', '33/35 Bath Street', 'Derbyshire', 'Greggs', true),\
		(91929, 52.5832044142855000, -2.1269992714112000, 'Whmptn Wulfrun SC', '01902427385 ', 'WV1 3HG ', 'Unit 25a, 38a Wulfrun Way', 'Wolverhampton', 'Greggs', true),\
		(91930, 51.4804259731363000, -2.5293973597287200, 'Bristol, Fishponds 7', '01179659403 ', 'BS16 3UP', '741 Fishponds Road', 'Bristol', 'Greggs', true),\
		(91931, 53.8009026700001000, -1.5584146831704800, 'Compass Park Lane Ca', '01132434656 ', 'LS3 1AA ', 'Park Lane Campus', 'West Yorkshire', 'Greggs', true),\
		(91932, 53.0479854935325000, -2.1826169845132100, 'EURO GARAGES Moorlan', '01782817485 ', 'ST6 1JP ', 'Moorland Road', 'Staffordshire', 'Greggs', true),\
		(91933, 51.4829875018635000, -3.6852585928797900, 'Porthcawl New Rd', '01656785476 ', 'CF36 5BA', 'Unit 2 New Road', 'Mid Glamorgan', 'Greggs', false),\
		(91934, 52.9615468550695000, -1.2680407195036100, 'MOTO Trowell North', '01159444018 ', 'NG9 3PL ', 'M1 Motorway', 'Nottingham', 'Greggs', true),\
		(91935, 53.6220313334281000, -1.5445895043370500, 'MOTO Wooley Edge Sou', '01924830635 ', 'WF4 4LQ ', 'M1 Motorway', 'Yorkshire', 'Greggs', true),\
		(91936, 53.7939710600000000, -1.7516581830000000, 'Bradford Broadway', '01274723653 ', 'BD1 1HA ', '23-25 Broadway', 'Bradford', 'Greggs', true),\
		(91937, 52.9110899495101000, -1.8647318654873400, 'EURO Garage Uttoxete', '01889560786 ', 'ST14 5AA', 'Derby Road, A50', 'Uttoxeter', 'Greggs', true),\
		(91938, 52.5838738046762000, -1.9821722780253800, 'Walsall Digbeth Sq', '01922616474 ', 'WS1 1LR ', 'Unit 7 Sister Dora Buildings,', 'Walsall', 'Greggs', true),\
		(91939, 51.2814917697203000, -0.0772586513000950, 'Caterham Chrch Wlk', '01883342690 ', 'CR3 6RT ', 'Unit 38 Church Walk Shopping C', 'Caterham', 'Greggs', false),\
		(91940, 52.6333946400000000, -1.6950929070000000, 'Tamworth Mid Entry', '0182766853  ', 'B79 7NJ ', '17 Middle Entry', 'Tamworth', 'Greggs', false),\
		(91941, 55.8759408398089000, -4.3648012038421500, 'Braehead Intu SC', '01418867820 ', 'G51 4BN ', 'Unit 107', 'Kings Inch Road', 'Greggs', false),\
		(91942, 53.3489319936338000, -2.1197142511308200, 'Poynton, Park Lane 2', '01625859424 ', 'SK12 1RD', '21-23 Park Lane', 'Poynton', 'Greggs', true),\
		(91943, 53.4206736855920000, -2.1621381535484500, 'Stckprt Manc Rd', '01614805445 ', 'SK4 1TN ', 'Unit 5', 'Stockport', 'Greggs', true),\
		(91944, 53.3618797349825000, -2.2708405884780800, 'Manc Airport Ksk T2', '01614986811 ', 'M90 1QX ', 'Kiosk, Terminal 2', 'Manchester Airport', 'Greggs', true),\
		(91945, 53.0414788240515000, -2.2140594837061100, 'Porthill SS Prthl Rd', '01782821741 ', 'ST6 4NL ', 'Porthill Road', 'Stoke on Trent', 'Greggs', true),\
		(91946, 51.7020243482087000, -3.4203395119097400, 'Aberdare Riversde RP', '01685888165 ', 'CF44 0AH', '3a Riverside Retail Park', 'Aberdare', 'Greggs', false),\
		(91947, 54.9423327431540000, -1.6209614783763400, 'Team V U4 Maingate', '01914878212 ', 'NE11 0NU', 'Unit 4 Maingate', 'Gateshead', 'Greggs', true),\
		(91948, 54.8067429192390000, -1.5817652550405100, 'Durham Arnison RC', '01913868162 ', 'DH1 5GB ', 'Unit Q, Arnison Shopping Park', 'Durham', 'Greggs', true),\
		(91949, 54.6204680390014000, -1.5716592292686100, 'NEWTON AYCLIFFE', '01325312843 ', 'DL5 4DP ', 'Unit 2 Beveridge Way', 'Co Durham', 'Greggs', true),\
		(91950, 55.1302480956169000, -1.5414429686291900, 'Blyth Cowpen Rd', '01670366152 ', 'NE24 5JP', 'The Windmill', 'Blyth', 'Greggs', true),\
		(91951, 54.9742135947083000, -1.6144438051138400, 'Ncl Blackett St', '01912220658 ', 'NE1 7UG ', '44B/44C Blackett Street', 'Newcastle upon Tyne', 'Greggs', true),\
		(91952, 56.1965819145532000, -3.1715602820286000, 'Lyon Way, Glenrothes', '01592754315 ', 'KY7 5NN ', '31 Lyon Way', 'Glenrothes', 'Greggs', false),\
		(91953, 55.9526310351907000, -3.1912939049559600, 'Edin Princes Mall', '01315565478 ', 'EH1 1BQ ', 'Unit U12 Waverley Mall SC', 'Edinburgh', 'Greggs', true),\
		(91954, 55.0698007067884000, -3.6126972535985600, 'Dumfries, Castle Str', '01387253838 ', 'DG1 1DJ ', '9-13 Castle Street', 'Dumfries', 'Greggs', false),\
		(91955, 55.8709428740667000, -4.3085332946496700, 'Glasgow, Dumbarton R', '01413574227 ', 'G11 6RZ ', '392 Dumbarton Road', 'Glasgow', 'Greggs', false),\
		(91956, 51.4817531944338000, -0.0949873983750750, 'Applegreen Camberwel', '02077010283 ', 'SE5 0EG ', 'Camberwell Service Station', 'London', 'Greggs', true),\
		(91957, 51.1097923257790000, -0.2059536843784910, 'Applegreen Crawley', '01293510700 ', 'RH10 8BA', 'Crawley Avenue', 'West Sussex', 'Greggs', true),\
		(91958, 51.4871968736141000, -0.1157757736944920, 'Applegreen Kenningto', '02075822580 ', 'SE11 5RD', '238 Kennington Lane', 'Vauxhall London', 'Greggs', true),\
		(91959, 55.9267810981587000, -3.2474286763944700, 'Edin Edin West RP', '0131 4437796', 'EH14 1RJ', 'Chesser Road', 'Edinburgh', 'Greggs', false),\
		(91960, 52.5838740639005000, -1.9840171381466600, 'Walsall Saddlers SC', '01922725571 ', 'WS1 1YT ', 'Unit 12A/B, 1A/B Bradford Mall', 'Walsall', 'Greggs', true),\
		(91961, 0.0000000000000000, 0.0000000000000000, 'Ncl Wellbar Ctrl', '01912221732 ', 'NE1 4TD ', 'Unit 2, Wellbar Central', 'Newcastle upon Tyne', 'Greggs', true),\
		(91962, 53.0932543090915000, -2.4151607341389100, 'Crewe Beswick Drive', '01270500848 ', 'CW1 5NP ', 'Beswick Drive', 'Crewe', 'Greggs', true),\
		(91963, 53.6975209949089000, -1.2667427930674300, 'MOTO Ferrybridge For', '01977676455 ', 'WF11 0AF', 'M62 (J33) Ferrybridge', 'West Yorkshire', 'Greggs', false),\
		(91964, 51.7773597507699000, -3.7585532569164600, 'Ystradgynlais', '01639844534 ', 'SA9 1NS ', '34 Heol Eglwys', 'Ystradgynlais', 'Greggs', false),\
		(91965, 0.0000000000000000, 0.0000000000000000, 'APPLEGREEN M2 NI', '02890833625 ', 'BT36 4TN', 'Applegreen Service Station', 'Co Antrim, NI', 'Greggs', true),\
		(91966, 54.6562693238216000, -3.3724274650158700, 'EURO Oakhurst', '01900824356 ', 'CA13 0QT', 'Lamplugh Road', 'Cumbria', 'Greggs', true),\
		(91967, 53.5767395871934000, -2.8945180538779900, 'EURO Dingle Bell', '01695580220 ', 'L39 1LZ ', 'Southport Road', 'Merseyside', 'Greggs', true),\
		(91968, 56.3997858061196000, -3.4426294349052000, 'Perth St Catherines', '01738633686 ', 'PH1 5XA ', 'Unit 12B St Catherines RP', 'Perth', 'Greggs', false),\
		(91969, 52.4902263300000000, -1.7382333790000000, 'Chelmsley Wood SS', '01217708534 ', 'B37 6RD ', 'Chelmsley Wood Service Station', 'Birmingham', 'Greggs', true),\
		(91970, 52.1360621706914000, -0.4692913911762100, 'Bedford Harpur Centr', '01234273572 ', 'MK40 1TQ', 'Unit 19 Midland Street Mall', 'Bedford', 'Greggs', true),\
		(91971, 52.5243325700000000, -1.8378724960000000, 'Erdngtn 96 High St', '01213778998 ', 'B23 6RS ', '96 High Street', 'Erdington', 'Greggs', true),\
		(91972, 53.5241142488890000, -1.1347069481915500, 'Doncaster Baxtergate', '01302341619 ', 'DN1 1LD ', '19/21 Baxtergate', 'Doncaster', 'Greggs', true),\
		(91973, 53.7252361629190000, -1.3567111981106500, 'Castleford Bus Stati', '01977551752 ', 'WF10 1EG', 'Retail Unit, Castleford Bus St', 'West Yorkshire', 'Greggs', true),\
		(91974, 52.5844893007256000, -2.1276081158240300, 'Whmptn Mander CTR', '01902715477 ', 'WV1 3NJ ', '15 The Gallery (Unit 88),', 'Wolverhampton', 'Greggs', true),\
		(91975, 53.4871339901024000, -2.2421002114281700, 'Manchester, Victoria', '01618321544 ', 'M3 1WY  ', 'Concourse Kiosk', 'Manchester', 'Greggs', true),\
		(91976, 52.6751118690316000, -2.4203232556195000, 'Telford Stafford Pk', '01952292172 ', 'TF3 3BA ', 'Unit A5 Stafford Park 4', 'Telford', 'Greggs', false),\
		(91977, 53.8036393056418000, -3.0274231295105900, 'Blpool Oxford Sq', '01253693677 ', 'FY4 4DP ', 'The POD', 'Blackpool', 'Greggs', true),\
		(91978, 50.7175793931816000, -3.5406495646163700, 'Exeter, St Thomas', '01392433753 ', 'EX4 1DG ', '9A St Thomas Centre', 'Exeter', 'Greggs', false),\
		(91979, 55.4797838414879000, -4.5926376506598000, 'Ayr Heathefield RP', '01292610468 ', 'KA8 9BF ', 'Unit 15/16 Heathfield Retail P', 'Ayr', 'Greggs', false),\
		(91980, 55.8008875596834000, -4.3883309994794800, 'Barrhead Main Street', '0141 8818532', 'G78 1SL ', '186/188 Main Street', 'Barrhead', 'Greggs', false),\
		(91981, 52.5147928599097000, -3.3162108269302500, 'Newtown High St', '01686627266 ', 'SY16 2NP', '25 High Street', 'Powys', 'Greggs', true),\
		(91982, 52.2417442810322000, -3.3792360761555900, 'Llndrndod Wls Stn Cr', '01597823665 ', 'LD1 5BB ', 'The Bakehouse', 'Llandrindod Wells', 'Greggs', true),\
		(91983, 52.4147383337342000, -4.0847348772489200, 'Aberystwyth Darkgate', '01970625146 ', 'SY23 1DE', '23 Darkgate Street', 'Powys', 'Greggs', true),\
		(91984, 52.7386684118077000, -2.7269661719959200, 'Shrewsbury Harlescot', '01743462431 ', 'SY1 3AH ', '1 Harlescott Lane', 'Shrewsbury', 'Greggs', true),\
		(91985, 53.2569668610452000, -1.4462893296528000, 'BLAKEMORE Newbold', '01246233153 ', 'S41 8QN ', 'Littlemore Shopping Centre', 'Chesterfield', 'Greggs', true),\
		(91986, 53.4075601781601000, -2.1615617212576500, 'Stockport, Princes S', '01614776451 ', 'SK1 1RE ', '50/52 Princes Street', 'Stockport', 'Greggs', true),\
		(91987, 54.8952050356694000, -2.9344507912642900, 'Carlisle, The Lanes', '01228523241 ', 'CA3 8NX ', 'Unit 3', 'Carlisle', 'Greggs', true),\
		(91988, 53.8742642700000000, -1.9060150400000000, 'Keighley, Keighley R', '01535665977 ', 'BD21 3NJ', 'Pod unit', 'Keighley', 'Greggs', true),\
		(91989, 53.4736429973327000, -2.2826859933981200, 'EURO Salford Quays', '01618728117 ', 'M5 3AW  ', 'Salford Quays', 'Manchester', 'Greggs', true),\
		(91990, 53.3391514675968000, -2.7332666096416000, 'EURO Runcorn Express', '01928574530 ', 'WA7 5AQ ', 'Runcorn Expressway', 'Runcorn', 'Greggs', true),\
		(91991, 55.9107032566734000, -4.3723742849704000, 'Drumchapel Kinfauns', '01419442961 ', 'G15 7TG ', '71 Kinfauns Drive', 'Drumchapel', 'Greggs', false),\
		(91992, 51.9474349451380000, -0.5031342867331320, 'MOTO Toddington Nort', '01525875183 ', 'LU5 6HR ', 'Toddington', 'Bedfordshire', 'Greggs', true),\
		(91993, 53.7121500441085000, -1.3386839403274300, 'Castleford Jct 32 SC', '01977516666 ', 'WF10 4FR', 'Unit G14, Junction 32 Outlet S', 'Castleford', 'Greggs', true),\
		(91994, 53.3045830692815000, -1.1240386014570300, 'Worksop Bridge St 19', '01909488366 ', 'S80 1DP ', '19 Bridge Street', 'Worksop', 'Greggs', false),\
		(91995, 0.0000000000000000, 0.0000000000000000, 'York University', '01904411072 ', 'YO10 5LA', 'Unit 4 Field Lane, Kimberlow H', 'York', 'Greggs', true),\
		(91996, 53.9916056150270000, -1.1027775841632500, 'York Clifton Moore R', '01904690013 ', 'YO30 4XZ', 'Pod Unit 10', 'York', 'Greggs', true),\
		(91997, 53.6675293146344000, -1.8242921028580400, 'Hudfield Halifax Rd', '01422327430 ', 'HD3 3QP ', 'Unit 2', 'Huddersfield', 'Greggs', true),\
		(91998, 51.2396645737907000, 0.5570324424650290, 'Maidstone Parkwood', '01622675566 ', 'ME15 9JD', '1b Longshaw Road', 'Maidstone', 'Greggs', false),\
		(91999, 53.7838970294034000, -1.0718961638806900, 'Selby Gowthorpe 24-2', '01757241211 ', 'YO8 4ET ', 'Unit 1', 'Selby', 'Greggs', true),\
		(92000, 52.4560217774792000, -2.1447625542610300, 'Stourbridge High Str', '01384379731 ', 'DY8 1DX ', '62 High Street', 'West Midlands', 'Greggs', true),\
		(92001, 52.9211818503888000, -1.4750325354363700, 'Derby East St', '01332291167 ', 'DE1 2AF ', 'Unit 2a Central Hall', 'Derby', 'Greggs', true),\
		(92002, 52.5926142770708000, -2.0780320364353500, 'Wdnsfld Phoenx Rd IE', '01902724410 ', 'WV11 3PX', 'Unit 1 Phoenix Road Industrial', 'Wednesfield', 'Greggs', true),\
		(92003, 52.5095065500000000, -1.9672469710000000, 'West Brom Birm Rd', '01215253609 ', 'B71 4JZ ', '2 Birmimgham Road', 'West Bromwich', 'Greggs', true),\
		(92004, 52.5057721700000000, -1.8621760100000000, 'Birm Cuckoo TP', '01213285587 ', 'B7 5SY  ', 'Unit 54 Cuckoo Trade Park', 'Birmingham', 'Greggs', true),\
		(92005, 52.4027991795030000, -1.5573422224324100, 'Coventry Vanguard Av', '02476679297 ', 'CV5 6UA ', 'Unit A2 Island Site', 'Coventry', 'Greggs', true),\
		(92006, 51.6089506684485000, -3.0072686911571900, 'Newport Malpas Rd', '01633859283 ', 'NP20 6WB', 'Unit 4, 389-431 Malpas Road', 'Newport', 'Greggs', false),\
		(92007, 0.0000000000000000, 0.0000000000000000, 'Newport Friar Wlk SC', '01633214055 ', 'NP20 1DU', 'Unit 29 Friars Walk', 'Newport', 'Greggs', true),\
		(92008, 51.4515190973341000, -2.5876487337254000, 'Bristol Victoria Str', '01179252926 ', 'BS1 6AH ', 'Unit 6 Transom House', 'Bristol', 'Greggs', true),\
		(92009, 54.9708661149376000, -1.6158348780653700, 'Ncl 39/41 Clayton St', '01912305728 ', 'NE1 5JE ', '39/41 Clayton Street', 'Newcastle upon Tyne', 'Greggs', true),\
		(92010, 52.4787482400000000, -1.8975235400000000, 'Birmingham 14a Steph', '01216430323 ', 'B2 4PY  ', '14a Stephenson Place', 'Birmingham', 'Greggs', true),\
		(92011, 54.7040826927624000, -1.5671634238019500, 'EURO Thinford', '01388813619 ', 'DL17 8RU', 'Thinford Noth Service Station', 'Ferry Hill', 'Greggs', true),\
		(92012, 53.4521663587386000, -2.9922339977595600, 'Bootle Strand SC', '01519332438 ', 'L20 4XX ', '156 Parkway', 'Liverpool', 'Greggs', true),\
		(92013, 54.9879938879921000, -1.5778367982589600, 'Heaton 209 Chillingh', '01912659164 ', 'NE6 5LL ', '209 Chillingham Road', 'Newcastle upon Tyne', 'Greggs', false),\
		(92014, 54.9708661149376000, -1.6158348780653700, 'Newcastle, 73/75 Gra', '01912611823 ', 'NE1 5JE ', '73/75 Grainger Street', 'Newcastle upon Tyne', 'Greggs', true),\
		(92015, 51.3419612092259000, -0.8283230087114140, 'Yateley Reading Rd', '01252873283 ', 'GU46 7LR', '117 Reading Road', 'Hampshire', 'Greggs', false),\
		(92016, 52.4570681500000000, -1.7961037370000000, 'Sheldon Whirlwind SS', '0121742 5619', 'B26 3HL ', 'R/O Whirlwind Service Station', 'Birmingham', 'Greggs', true),\
		(92017, 52.5109843286350000, -2.0811432022210500, 'Dudley 11 Castle St', '01384254621 ', 'DY1 1LF ', '11/12 Castle Street', 'Dudley', 'Greggs', true),\
		(92018, 0.0000000000000000, 0.0000000000000000, 'Pntyprdd 1 Treforest', '01443842823 ', 'CF37 5YG', 'Unit 1 Taffs Fall Trade Park', 'Pontypridd', 'Greggs', false),\
		(92019, 53.5506841368205000, -2.6670067719655300, 'EURO Scot Lane', '01942213780 ', 'WN5 0PU ', 'Scot Lane', 'Wigan', 'Greggs', true),\
		(92020, 53.8091427703217000, -2.8923679460309000, 'EURO Westholme Kirkh', '01253836037 ', 'PR4 3HE ', 'Eurogarages Westholme', 'Lancashire', 'Greggs', true),\
		(92021, 54.7927381622629000, -1.5912255587476600, 'Durham Dryburn View', '01913841953 ', 'DH1 5AP ', '1b Dryburn View', 'Durham', 'Greggs', true),\
		(92022, 51.5326926101400000, -3.4537725600056000, 'Llanharan', '01443228136 ', 'CF72 9RP', 'Unit 3 Former Bryncae IE', 'Llanharan', 'Greggs', false),\
		(92023, 54.9983872734926000, -1.4331336471207100, 'Sth Shields 15 King', '01914567470 ', 'NE33 1DA', '15 King Street', 'South Shields', 'Greggs', true),\
		(92024, 55.7826949921787000, -3.9792744170487400, 'Mthrwll Windmillhill', '01698230807 ', 'ML1 2UA ', '341 Windmillhill Street', 'Motherwell', 'Greggs', false),\
		(92025, 53.4570861087197000, -2.9165039330511500, 'EURO Sugarbrook', '01515254631 ', 'L11 2ST ', 'Eurogarages Sugarbrook', 'Liverpool', 'Greggs', true),\
		(92026, 0.0000000000000000, 0.0000000000000000, 'Norwch The Lastings', '01603628533 ', 'NR4 6EF ', 'Unit 3 The Lastings', 'Norwich', 'Greggs', false),\
		(92027, 51.0016025016817000, -1.5001846043753500, 'EURO Greatbridge', '01794524193 ', 'SO51 0HB', 'Great Bridge Road', 'Hampshire', 'Greggs', true),\
		(92028, 51.1937115755709000, -1.2480319843839200, 'EURO Micheldever', '            ', 'SO21 3BD', 'Cocksford Down', 'Hampshire', 'Greggs', true),\
		(92029, 51.6374828193452000, -1.8371620408764800, 'EURO Calcutt', '01793759063 ', 'SN6 6JR ', 'Calcutt Service Station', 'Wiltshire', 'Greggs', true),\
		(92030, 51.5700821997217000, -1.8009855031412200, 'EURO Rodbourne', '01793484979 ', 'SN2 1DH ', 'Rodbourne Road', 'Wiltshire', 'Greggs', true),\
		(92031, 51.5298248706196000, -0.8982699592976360, 'EURO Regatta', '01491572435 ', 'RG9 1DR ', '167 Reading Road', 'Oxfordshire', 'Greggs', true),\
		(92032, 51.4612591269099000, -0.4818389250538240, 'EURO Heathrow South', '02085647908 ', 'TW6 3PF ', 'Southern Perimeter Road', 'Middlesex', 'Greggs', true),\
		(92033, 0.0000000000000000, 0.0000000000000000, 'EURO Clockhouse', '01784251533 ', 'TW14 8RD', 'Clockhouse Lane', 'Middlesex', 'Greggs', true),\
		(92034, 51.4944734165924000, -0.4317280261393920, 'EURO Heathrow North', '02085730462 ', 'UB3 1LL ', 'Shepiston Lane', 'Middlesex', 'Greggs', true),\
		(92035, 51.5623124589857000, 0.0338846913614460, 'EURO Aldersbrook', '02085306072 ', 'E12 5HH ', '19 Aldersbrook Road', 'Greater London', 'Greggs', true),\
		(92036, 51.9606738014125000, -1.2020892136779300, 'EURO Baynards Green', '01869341061 ', 'OX27 7SG', 'A43 Baynards Green', 'Oxfordshire', 'Greggs', true),\
		(92037, 51.8936059089635000, -1.1626893466582100, 'EURO Bicester', '01869245078 ', 'OX26 1BT', 'Oxford Road', 'Oxfordshire', 'Greggs', true),\
		(92038, 51.5059770601811000, -0.7126697440305730, 'EURO Braywick', '01628629305 ', 'SL6 1UZ ', 'Windsor Road', 'Berkshire', 'Greggs', true),\
		(92039, 51.5168689181060000, -1.7243029893103600, 'EURO Chiseldon Camp', '            ', 'SN4 0NR ', 'Marlborough Road', 'Wiltshire', 'Greggs', true),\
		(92040, 51.1356701231835000, -0.0981456222878590, 'EURO Copthorne', '01342719509 ', 'RH10 3LF', 'Copthorne Common', 'Sussex', 'Greggs', true),\
		(92041, 51.5698059338360000, -1.7462604217704700, 'EURO Dorcan Way', '01793481109 ', 'SN3 3RA ', 'Dorcan Way', 'Wiltshire', 'Greggs', true),\
		(92042, 0.0000000000000000, 0.0000000000000000, 'EURO Ermont Way', '01295250988 ', 'OX16 8SZ', 'Ermont Way', 'Oxfordshire', 'Greggs', true),\
		(92043, 52.3245797141957000, -2.2238865390576100, 'EURO Hartlebury', '01299253721 ', 'DY11 7XP', 'A449 Crown Lane', 'Worcestershire', 'Greggs', true),\
		(92044, 51.2261002071381000, -0.7270517318079930, 'EURO Hogsback', '01252783961 ', 'GU10 1EU', 'Hogsback (A3`)', 'Surrey', 'Greggs', true),\
		(92045, 51.6000150813724000, -0.6684006081007780, 'EURO Holtspur', '01494730445 ', 'HP9 1UB ', 'Oxford Road', 'Buckinghamshire', 'Greggs', true),\
		(92046, 51.5767870381692000, -0.7704155965904850, 'EURO Maple', '01628482138 ', 'SL7 1HH ', 'Maple Rise', 'Buckinghamshire', 'Greggs', true),\
		(92047, 51.6682504724332000, -1.3049255475176800, 'EURO Marcham Road', '01235535743 ', 'OX14 1TZ', 'Marcham Road', 'Oxfordshire', 'Greggs', true),\
		(92048, 51.0103418962809000, -0.9277264457895220, 'EURO Ramshill', '01730268628 ', 'GU31 4AT', 'London Road', 'Hampshire', 'Greggs', true),\
		(92049, 50.7417429500000000, -1.9470145990000000, 'EURO Rossmore', '01202721411 ', 'BH12 3JN', '347 Ringwood Road', 'Dorset', 'Greggs', true),\
		(92050, 51.4049183295359000, -0.9431676288347550, 'EURO Shinfield', '01189889540 ', 'RG2 9DY ', 'Aborfield Road', 'Bershire', 'Greggs', true),\
		(92051, 51.3548115108594000, -1.1419426205469800, 'EURO Tadley', '01189817667 ', 'RG26 3LG', 'Mulfords Hill', 'Berkshire', 'Greggs', true),\
		(92052, 51.7570377847307000, -0.9783185544854150, 'EURO Thame', '01844214447 ', 'OX9 3SB ', 'A418/B4011', 'Oxfordshire', 'Greggs', true),\
		(92053, 52.4144659876756000, -0.7900542654747690, 'EURO Rothwell', '01536713167 ', 'NN14 1SS', 'Kettering Road', 'Northamptonshire', 'Greggs', true),\
		(92054, 51.3752052537884000, -0.1014685934013010, 'Croydon Nth End Rd', '02086809583 ', 'CR0 1TG ', '51 North End Road', 'Croydon', 'Greggs', true),\
		(92055, 52.4014551338873000, -0.7273963484942360, 'Kettering Newlands', '01536524378 ', 'NN16 8JL', 'Unit 14 The Mall', 'Kettering', 'Greggs', false),\
		(92056, 0.0000000000000000, 0.0000000000000000, 'Basingstoke Hndmills', '01256331312 ', 'RG21 6AH', 'Unit 7 Houndmills Trade Park', 'Basingstoke', 'Greggs', false),\
		(92057, 0.0000000000000000, 0.0000000000000000, 'Beverley Flemingate', '01482869119 ', 'HU17 0PW', 'Unit 9A, Block B', 'Beverley', 'Greggs', true),\
		(92058, 53.3459482778069000, -1.3584967944400100, 'Shefld Crystal Gate', '01142280492 ', 'S20 7HT ', '19 Drake House Crescent', 'Sheffield', 'Greggs', true),\
		(92059, 51.5091960780446000, -0.7324790450853660, 'EURO SHOPPENHANGER', '01628635608 ', 'SL6 2QJ ', 'Shoppenhangers Road', 'Maidenhead', 'Greggs', true),\
		(92060, 51.2609244766221000, -0.5738826560287200, 'EURO BELLFIELDS', '01483571950 ', 'GU1 1NH ', 'Woking Road', 'Guildford', 'Greggs', true),\
		(92061, 53.0205420810883000, -1.3239012024022800, 'EURO LANGLEY', '01773717875 ', 'NG16 4AA', 'Derby Road', 'Derbyshire', 'Greggs', true),\
		(92062, 51.7746847973946000, -2.8064613546954900, 'EURO MONMOUTH', '01600740179 ', 'NP25 4BG', 'A40 Northbound', 'Dingestow', 'Greggs', true),\
		(92063, 51.6919882781767000, -0.3980144675127180, 'EURO SHEEPCOT', '01923671843 ', 'WD25 7LW', 'North Orbital Road', 'Garston', 'Greggs', true),\
		(92064, 53.6147741945070000, -2.1282664617689800, 'Rochdale Kingsway RP', '01706654758 ', 'OL16 5AF', 'Unit 9, Kingsway Retail Park', 'Rochdale', 'Greggs', true),\
		(92065, 55.8182778936246000, -4.0254082188485300, 'Hamilton Rd Bellshil', '01698849881 ', 'ML4 1AF ', '13A-15A Hamilton Road', 'Bellshill', 'Greggs', false),\
		(92066, 54.9576405462948000, -1.6685552476180600, 'Ghead Mtr Yellow Mll', '01914609785 ', 'NE11 9XY', 'Unit 236/236a Yellow Mall', 'Gateshead', 'Greggs', true),\
		(92067, 53.3838095710623000, -1.4447360003063100, 'Shefld Prkwy Ctrl RP', '01142701970 ', 'S2 5AU  ', 'Unit 3', 'Sheffield', 'Greggs', true),\
		(92068, 55.9715663393422000, -3.1713024241371200, 'Edin Newkirkgate SC', '01315549591 ', 'EH6 6AD ', 'Uit 5 Newkirkgate SC', 'Edinburgh', 'Greggs', false),\
		(92069, 51.4536422277732000, -2.5980956183489800, 'Bristol St Augustine', '01179290239 ', 'BS1 4UL ', '30-31 St Augustines Parade', 'Bristol', 'Greggs', true),\
		(92070, 53.5911352900000000, -2.2606880330000000, 'EURO HEAP BRIDGE', '01617637669 ', 'BL9 7HY ', 'Heap Bridge', 'Bury', 'Greggs', true),\
		(92071, 0.0000000000000000, 0.0000000000000000, 'Applegreen Crankhill', '02825685065 ', 'BT43 5NW', '147 Crankhill Road', 'Ballymena', 'Greggs', true),\
		(92072, 53.8466762570017000, -1.5933938580511800, 'EURO Lawnswood', '01132676430 ', 'LS16 8AA', 'Lawnswood Service Station', 'Leeds', 'Greggs', true),\
		(92073, 54.5813590000000000, -5.9653470000000000, 'Belfast Boucher SP', '02890682802 ', 'BT12 6HU', '9B Boucher Shopping Park', 'Belfast', 'Greggs', false),\
		(92074, 55.9478140326226000, -4.7584803362890900, 'Grnock Hamilton Way', '01475727947 ', 'PA15 1JJ', '44 Hamilton Way', 'Greenock', 'Greggs', false),\
		(92075, 51.4865730704751000, -0.3961064124649400, 'MOTO HESTON FORECOUR', '02085748670 ', 'TW5 9NB ', 'Phoenix Way', 'Middlesex', 'Greggs', false),\
		(92076, 52.6431665022005000, -2.0573727926274500, 'MOTO HILTON PARK FOR', '01922415195 ', 'WV11 2AT', 'Hilton Park Motorway Services', 'Wolverhampton', 'Greggs', false),\
		(92077, 53.9615670297902000, -2.7613576493394500, 'MOTO LANCASTER FOREC', '01524792699 ', 'LA2 9DU ', 'White Carr Lane', 'Lancaster', 'Greggs', false),\
		(92078, 54.7979553231934000, -2.8721794068318500, 'MOTO SOUTHWAITE FORE', '01697473675 ', 'CA4 0NT ', 'Broadfield Site', 'Carlisle', 'Greggs', false),\
		(92079, 52.9615468550695000, -1.2680407195036100, 'MOTO TROWELL FORECOU', '01159308219 ', 'NG9 3PL ', 'Trowell', 'Nottingham', 'Greggs', false),\
		(92080, 51.4634742223784000, -3.1653601558027400, 'Cardiff Mermaid Quay', '02920495040 ', 'CF10 5BZ', 'Unit 21 Mermaid Quay', 'Cardiff', 'Greggs', true),\
		(92081, 53.1974362398322000, -2.9156846988541700, 'Chester Greyhound RP', '01244390823 ', 'CH1 4QG ', 'Pod Unit', 'Chester', 'Greggs', true),\
		(92082, 52.1131355839606000, -4.0801821579137400, 'Lampeter High St', '01570421261 ', 'SA48 7BB', '42-43 High Street', 'Dyfed', 'Greggs', true),\
		(92083, 55.0209133241608000, -1.5838881348455700, 'Lngbenton Quorum RP', '01912667162 ', 'NE12 8BS', 'Cafe Unit, Quorum Retail Pde', 'Newcastle', 'Greggs', true),\
		(92084, 55.4543685539350000, -4.2641534924604600, 'Cumnock Townhead St', '01290425802 ', 'KA18 1LA', 'Unit 7 Townhead Street', 'Cumnock', 'Greggs', true),\
		(92085, 51.4630558414844000, -2.5087270583192400, 'Bristol Kings Chs SC', '01179612648 ', 'BS15 8LP', 'Unit 1 Kings Chase Shopping Ce', 'Bristol', 'Greggs', false),\
		(92086, 53.3412292273106000, 0.2605465970899540, 'Mablethorpe High St', '01507478708 ', 'LN12 1AX', '37 High Street', 'Mablethorpe', 'Greggs', true),\
		(92087, 53.7906313700000000, -1.7624399130000000, 'Bradford Horton Rd', '01274725430 ', 'BD7 1AZ ', '45 Great Horton Road', 'Bradford', 'Greggs', true),\
		(92088, 0.0000000000000000, 0.0000000000000000, 'APPLEGREEN M1 BELFAS', '02890827075 ', 'BT27 5SG', 'M1 Southbound', 'Co Down', 'Greggs', true),\
		(92089, 50.7902715700000000, 0.0055523840000000, 'Peacehavn Sth Coast', '01273589690 ', 'BN10 8NP', 'Unit 3, 165 South Coast Road', 'Peacehaven', 'Greggs', false),\
		(92090, 52.4787542700000000, -1.8941518010000000, 'Birm High St', '01216432790 ', 'B4 7SL  ', '41 High Street', 'Birmingham', 'Greggs', true),\
		(92091, 0.0000000000000000, 0.0000000000000000, 'Stckbrdge Fox Vly RP', '01142881444 ', 'S36 2AA ', 'Unit A4', 'Stocksbridge', 'Greggs', true),\
		(92092, 53.7957706537550000, -1.6638708132487100, 'Pudsey Church Ln', '01132569431 ', 'LS28 7TY', '14 Church Lane & 2 Market Plac', 'Pudsey', 'Greggs', true),\
		(92093, 50.8720569518110000, -1.2709827729687300, 'EURO GARAGES LOCKSHE', '01489565409 ', 'SO31 7ZE', 'Locksheath Service Station', 'Southampton', 'Greggs', true),\
		(92094, 51.0105331166102000, -2.1921073581845000, 'EURO GARAGES IVY CRO', '01747854515 ', 'SP7 8DS ', 'Ivy Cross Service Station', 'Shatesbury', 'Greggs', true),\
		(92095, 52.7008211596185000, -1.3054539031523800, 'EURO GARAGES BROWNS', '01530243432 ', 'LE67 9PU', '32 Shaw Lane', 'Leicestershire', 'Greggs', true),\
		(92096, 51.4585560388090000, -2.1150385242197400, 'Chippenham High St', '01249655824 ', 'SN15 3EU', 'Chippenham 23 High St', 'Chippenham', 'Greggs', true),\
		(92097, 51.4557802764811000, -0.9698581203980120, 'Reading Mkt Pl', '01189503835 ', 'RG1 2DE ', '38 Market Place', 'Reading', 'Greggs', true),\
		(92098, 51.6524785164715000, -1.5817988367656100, 'EURO GARAGES ACORN', '01367241002 ', 'SN7 7BU ', 'Acorn Service Station', 'Faringdon', 'Greggs', true),\
		(92099, 0.0000000000000000, 0.0000000000000000, 'EURO GARAGES ELSTREE', '02089537295 ', 'WD6 7BU ', 'Elstree Hill South', 'Watford', 'Greggs', true),\
		(92100, 53.8389301504787000, -1.4714694586250100, 'EURO GARAGES CORONAT', '01132657484 ', 'LS17 8ND', '213 Weatherby Road', 'Leeds', 'Greggs', true),\
		(92101, 0.0000000000000000, 0.0000000000000000, 'EURO GARAGES ST MATT', '01914894181 ', 'NE32 5JX', 'York Avenue', 'Jarrow', 'Greggs', true),\
		(92102, 53.5236310613248000, -2.7162978401574600, 'EURO GARAGES BILLING', '01695623504 ', 'WN5 7DN ', 'Billinge', 'Wigan', 'Greggs', true),\
		(92103, 51.5643049872668000, -0.4996903735386660, 'EURO GARAGES DENHAM', '01895831481 ', 'UB9 4DF ', 'Denham', 'Buckingshamshire', 'Greggs', true),\
		(92104, 51.1013909500000000, -2.1859145020000000, 'EURO GARAGES WILLOUG', '01747830409 ', 'BA12 6AQ', 'Willoughby Hedge Service Stati', 'Warminster', 'Greggs', true),\
		(92105, 56.4611786588848000, -2.9695068221776700, 'Dundee 74 High St', '01382229205 ', 'DD1 1SD ', '74-78 High Street', 'Dundee', 'Greggs', false),\
		(92106, 53.4934734117135000, -1.2890473446675800, 'Mexborough High St', '01709590922 ', 'S64 9AS ', '26/28 High Street', 'Mexborough', 'Greggs', false),\
		(92107, 53.5568805539447000, -2.3199832250092400, 'EURO  GARAGES GREEN', '01617258444 ', 'M26 1LS ', 'New Road', 'Radcliffe', 'Greggs', true),\
		(92108, 51.3203411700000000, -2.2090417240000000, 'Trowbridge Shires', '01225752195 ', 'BA14 8AT', '38 The Shires', 'Trowbridge', 'Greggs', false),\
		(92109, 55.9501118465094000, -3.2091523472648500, 'Edin Shandwick Pl', '01312256759 ', 'EH2 4RN ', '2/4 Shandwick Place', 'Edinburgh', 'Greggs', false),\
		(92110, 56.1098423743723000, -3.1578759167991700, 'Kirkcaldy Mercat CTR', '01592642590 ', 'KY1 1NU ', 'Unit 5 The Mercat Centre', 'Kirkcaldy', 'Greggs', false),\
		(92111, 0.0000000000000000, 0.0000000000000000, 'Belfast Royal Ave', '02890329349 ', 'BT1 1FD ', '41/51 Royal Avenue', 'Belfast', 'Greggs', false),\
		(92112, 51.8207796187105000, -0.8101997749635710, 'Aylesbury Aylsbry SP', '01296433240 ', 'HP20 1DG', 'Unit 12b Aylesbury Shopping Pk', 'Aylesbury', 'Greggs', true),\
		(92113, 0.0000000000000000, 0.0000000000000000, 'Belfast Donegall Sq', '02890233838 ', 'BT1 6JH ', '8 Donegall Square West', 'Belfast', 'Greggs', false),\
		(92114, 54.5352375440640000, -1.5520592699204100, 'Darlington Nth Rd RP', '01325489560 ', 'DL1 2PF ', '7 North Road Retail Park', 'Darlington', 'Greggs', true),\
		(92115, 52.6604518417873000, -3.1479914981630700, 'Welshpool Broad St', '01938555984 ', 'SY21 7RZ', 'Ground floor, 10 Broad Street', 'Powys', 'Greggs', true),\
		(92116, 0.0000000000000000, 0.0000000000000000, 'Belfast Kennedy Ctr', '02890309371 ', 'BT11 9AE', 'Unit 48 Kennedy Centre', 'Belfast', 'Greggs', false),\
		(92117, 0.0000000000000000, 0.0000000000000000, 'Belfast Dargan Rd', '02890773655 ', 'BT3 9JZ ', 'Unit 3 Dargan Road', 'Belfast', 'Greggs', false),\
		(92118, 51.5618617760678000, -1.7843884914567200, 'Swindon PDE SC', '01793423255 ', 'SN1 1BB ', '19-21 The Parade', 'Swindon', 'Greggs', false),\
		(92119, 51.0139905694109000, -3.1019504339098400, 'Taunton Orchard SC', '01823252855 ', 'TA1 3TP ', '26 Orchard Centre', 'Taunton', 'Greggs', false),\
		(92120, 51.8571188507943000, -4.3081867888116900, 'Carmarthen Red St', '01267237433 ', 'SA31 1QL', '11-13 Red Street', 'Carmarthen', 'Greggs', true),\
		(92121, 0.0000000000000000, 0.0000000000000000, 'Mthr Tydfl Beacon Pl', '01685374996 ', 'CF47 8DF', '6 Beacons Place Shopping Centr', 'Merthyr Tydfil', 'Greggs', false),\
		(92122, 51.6648510149296000, -3.1446682896631900, 'Newbridge High St', '01495247790 ', 'NP11 4EZ', '16-18 High Street', 'Newbridge', 'Greggs', false),\
		(92123, 50.7072167982779000, -3.5299001149439500, 'Exeter Trusham Rd', '01392423342 ', 'EX2 8QH ', 'Part Unit 12', 'Exeter', 'Greggs', false),\
		(92124, 51.4053995627740000, -1.3155008397753400, 'Newbury London Rd', '0163534966  ', 'RG14 2BX', 'Unit 2, 125 London Road', 'Newbury', 'Greggs', false),\
		(92125, 51.5042451190369000, -3.5760029150705800, 'Bridgend Bridgend SC', '01656655617 ', 'CF31 1DD', 'Unit 7 Bridgend Shopping Centr', 'Bridgend', 'Greggs', false),\
		(92126, 52.3294578718673000, -0.2544072974463230, 'Brampton Brampton IC', '01480457007 ', 'PE28 4NQ', 'Brampton Hut Interchange', 'Cambs', 'Greggs', false),\
		(92127, 53.7537025200000000, -2.3646859640000000, 'Accrington Broadway', '01254230751 ', 'BB5 1ET ', '2 Broadway', 'Accrington', 'Greggs', true),\
		(92128, 53.7495137700000000, -2.4817948100000000, 'Blckburn Ainswrth St', '01254671800 ', 'BB1 6AS ', 'Unit 4 Ainsworth Street', 'Blackburn', 'Greggs', true),\
		(92129, 50.7896308700000000, -2.0116379880000000, 'EURO GARAGES WIMBOUR', '01202884861 ', 'BH21 3HA', 'Dorchester Road', 'Dorset', 'Greggs', true),\
		(92130, 51.4884300456359000, -0.3716412342489450, 'EURO GARAGES HESTON', '02085772817 ', 'TW5 0RG ', '270 Heston Road', 'Middlesex', 'Greggs', true),\
		(92131, 51.8159191113968000, -0.7911779837292590, 'EURO GARAGES ADAMS C', '01296318923 ', 'HP20 1JJ', 'Oakfield Road', 'Aylesbury', 'Greggs', true),\
		(92132, 55.4626699784730000, -4.6304958157951800, 'Ayr 85 High St', '01292270390 ', 'KA7 1QL ', '85 High Street', 'Ayr', 'Greggs', false),\
		(92133, 50.8461014031359000, -1.0934237381390700, 'Portsmouth', '02392325794 ', 'PO6 4FB ', 'Unit 6 Portsmouth Retail Park', 'Portsmouth', 'Greggs', false),\
		(92134, 55.8496113302212000, -4.2273555298506900, 'Bridgeton London Rd', '01415543129 ', 'G40 1NE ', '613 London Road', 'Glasgow', 'Greggs', false),\
		(92135, 55.8580599144898000, -4.2564263674208200, 'Glas Argyle St', '01412210252 ', 'G2 8BU  ', '172 Argyle Street', 'Glasgow', 'Greggs', false),\
		(92136, 50.8015474166219000, -1.0882974604263100, 'Portsmth 240 Comm Rd', '02392824278 ', 'PO1 1HG ', '240 Commercial Road', 'Portsmouth', 'Greggs', true),\
		(92137, 51.3731915957882000, -2.1382841845673100, 'Melksham High St', '01225709583 ', 'SN12 6JY', '29-33 High Street', 'Melksham', 'Greggs', false),\
		(92138, 52.3060614200000000, -1.9436513050000000, 'Redditch Kngfshr Wlk', '0152762572  ', 'B97 4EY ', '8 & 9 Kingfisher Walk', 'Redditch', 'Greggs', true),\
		(92139, 0.0000000000000000, 0.0000000000000000, 'Balymena Fairhill SC', '02825654293 ', 'BT43 6UF', 'Unit 33 Fairhill Shopping Cent', 'Ballymena', 'Greggs', false),\
		(92140, 51.5612360991826000, -1.7864254446340200, 'Swindon Canal Wlk', '01793530627 ', 'SN1 1LD ', '13 Canal Walk', 'Swindon', 'Greggs', false),\
		(92141, 51.4816833422354000, -3.1770139735053300, 'Cardiff 34 Queen St', '02920371934 ', 'CF10 2BW', '34 Queen Street', 'Cardiff', 'Greggs', true),\
		(92142, 51.4570250674720000, -2.5906124162468100, 'Bristol Broadmead', '01179293457 ', 'BS1 3DT ', '87 Broadmead', 'Bristol', 'Greggs', true),\
		(92143, 52.0507213189281000, 1.1442014394807500, 'Ipswich Ipswich Stn', '01473685283 ', 'IP2 8AL ', 'Unit 3 Ipswich Station', 'Ipswich', 'Greggs', true),\
		(92144, 51.1258751584465000, 1.3171135509029500, 'Dover St James St', '01304213423 ', 'CT16 1QD', 'Unit 23 St James Retail Park', 'Dover', 'Greggs', false),\
		(92145, 50.7692008700000000, 0.2850820000000000, 'Eastbourne Arndale', '01323724544 ', 'BN21 3NW', 'Unit 17 Arndale Centre', 'Eastbourne', 'Greggs', false),\
		(92146, 53.7577504309583000, -2.7044268226648600, 'Preston Fishergate', '01772251638 ', 'PR1 2NJ ', '91 Fishergate', 'Preston', 'Greggs', true),\
		(92147, 50.7204558200000000, -1.8830373040000000, 'Bournemouth Comm Rd', '01202638953 ', 'BH2 5RH ', '35 Commercial Road', 'Bournemouth', 'Greggs', false),\
		(92148, 51.5406590020226000, 0.1483459658678220, 'Dagenham Heathway', '02085267643 ', 'RM10 8RD', '214-216 Heathway', 'Dagenham', 'Greggs', true),\
		(92149, 50.8447660568909000, -1.1829616530867500, 'EURO GARAGES Fareham', '01329236298 ', 'PO16 0QW', '86 Gosport Road', 'Hampshire', 'Greggs', true),\
		(92150, 51.8922201601210000, -0.4505164654095680, 'EURO GARAGES Empire', '01582562061 ', 'LU4 8DL ', '518 Dunstable Road', 'Befordshire', 'Greggs', true),\
		(92151, 53.5364083099892000, -0.1824417163115970, 'BLAKEMORE Laceby', '            ', 'DN37 7LG', 'Laceby Lodge Service Area', 'Laceby', 'Greggs', true),\
		(92152, 53.4667258670469000, -1.3396561175984500, 'EURO GARAGES Rawmars', '01709524968 ', 'S62 7BY ', 'Dale Road', 'Sheffield', 'Greggs', true),\
		(92153, 51.5323666905836000, -0.3710255774658410, 'EURO GARAGES Mead', '02085750815 ', 'UB6 9RP ', 'Ruislip Road', 'Middlesex', 'Greggs', true),\
		(92154, 51.3242611720326000, -0.7547621805062070, 'EURO GARAGES Frimley', '01276469654 ', 'GU15 2QL', '156 Frimley Road', 'Surrey', 'Greggs', true),\
		(92155, 51.9081578525985000, -0.2094103774812160, 'EURO GARAGES Lyton W', '01438723036 ', 'SG1 3BT ', 'Lyton Way', 'Stevenage', 'Greggs', true),\
		(92156, 51.6005980595910000, -0.3173833838555310, 'EURO GARAGES Harrow', '02089076648 ', 'HA3 8SF ', 'Belmont Circle', 'Middlesex', 'Greggs', true),\
		(92157, 53.7369675949068000, -2.9608030248491600, 'Lytham Clifton St', '01253731491 ', 'FY8 5EW ', '48 Clifton Street', 'Lytham', 'Greggs', true),\
		(92158, 52.7515068683108000, -1.4458420293167300, 'EURO GARAGES Ashby d', '01530563020 ', 'LE65 1JP', 'Nottingham Road', 'Ashby de la Zouch', 'Greggs', true),\
		(92159, 50.8026506297979000, -0.6983020683388380, 'EURO GARAGES Bognor', '01243827208 ', 'PO21 5DS', '449 Chichester Road', 'Sussex', 'Greggs', true),\
		(92160, 52.1836220113132000, -1.4655328149281600, 'EURO GARAGES Gaydon', '01926640893 ', 'CV35 0HA', 'Banbury Road', 'Gaydon', 'Greggs', true),\
		(92161, 51.0876421906047000, -0.7335829728209420, 'EURO GARAGES Haselme', '01428642984 ', 'GU27 1LE', 'Hindhead Road', 'Surrey', 'Greggs', true),\
		(92162, 56.1267849040330000, -3.1715927755348500, 'EURO GARAGES Kirkcal', '01592266896 ', 'KY2 5DS ', 'Hendry Road', 'Kirkcaldy', 'Greggs', true),\
		(92163, 50.6149021720843000, -2.4555042118829900, 'EURO GARAGES Weymout', '01305785783 ', 'DT4 7BJ ', 'King Street', 'Weymouth', 'Greggs', true),\
		(92164, 0.0000000000000000, 0.0000000000000000, 'EURO GARAGES South P', '01592760133 ', 'KY6 1PD ', '1 Roxburgh Road', 'Fife', 'Greggs', false),\
		(92165, 52.2184643720074000, -0.8628985953667620, 'Nmpton Brackmils Hub', '01604765406 ', 'NN4 7PW ', 'Unit 2 Tungsten Business Park', 'Northampton', 'Greggs', false),\
		(92166, 53.5798612600000000, -2.4297184750000000, 'Bolton Deansgate', '01204529713 ', 'BL1 1BG ', '64-66 Deansgate', 'Bolton', 'Greggs', true),\
		(92167, 53.2360006523415000, -1.4264084480885300, 'Chfield Brlington St', '01246557473 ', 'S40 1RR ', '8-12 Burlington St', 'Chesterfield', 'Greggs', true),\
		(92168, 53.6987898775562000, -1.5079258751883700, 'Wkfield Snowhill', '01924363933 ', 'WF1 2UJ ', 'Part Unit 7', 'Wakefield', 'Greggs', true),\
		(92169, 51.2662146823736000, -1.0873777905352000, 'Basingstoke Chiswick', '01256354676 ', 'RG21 7LD', 'Unit B Chiswick House', 'Basingstoke', 'Greggs', false),\
		(92170, 52.0477781788387000, 1.1837735446074800, 'Ipswich Rosehill SC', '01473720338 ', 'IP3 9BG ', 'Unit 6, 9 Hines Road', 'Suffolk', 'Greggs', false),\
		(92171, 51.3209975668473000, -0.5587745876586240, 'Woking Wolsey Walk', '01483728207 ', 'GU21 6YL', '33 Wolsey Walk', 'Woking', 'Greggs', true),\
		(92172, 0.0000000000000000, 0.0000000000000000, 'Belfast Castle Ln', '02890313165 ', 'BT1 5DA ', '4/6 Castle Lane', 'Belfast', 'Greggs', false),\
		(92173, 0.0000000000000000, 0.0000000000000000, 'Coventry Warwickshre', '02476445858 ', 'CV3 2SB ', 'Unit 1D Warwickshire Shopping', 'Coventry', 'Greggs', true),\
		(92174, 51.2655613624479000, -1.0854700868450900, 'Basingstoke Bus Stn', '01256328746 ', 'RG21 7BE', 'Unit K10 Festival Place SC', 'Basingstoke', 'Greggs', false),\
		(92175, 52.0614717834406000, 1.1982014358791500, 'Ipswich Woodbridge', '01473724473 ', 'IP4 5QN ', '41 Woodbridge Road East', 'Ipswich', 'Greggs', false),\
		(92176, 55.9271596042072000, -3.1637844477853700, 'Edin Cameron Toll SC', '01316647186 ', 'EH16 5PB', 'Unit 14 & 15C Cameron Toll Sho', 'Edinburgh', 'Greggs', false),\
		(92177, 52.3123886300000000, -1.8897808540000000, 'Redditch Moons Moat', '0152761820  ', 'B98 9HA ', 'Unit K Moons Moat Drive', 'Redditch', 'Greggs', true),\
		(92178, 51.3166835800000000, -2.2027690530000000, 'Trowbridge County Wy', '01225719074 ', 'BA14 7AQ', 'Unit 2A Cradle Bridge', 'Trowbridge', 'Greggs', false),\
		(92179, 53.5687487385029000, -3.0483260491757900, 'EURO GARAGES Formby', '01704874711 ', 'L37 7AE ', 'Southport Old Road', 'Formby', 'Greggs', true),\
		(92180, 54.9788701792020000, -2.0898545510995700, 'EURO GARAGES Hexham', '01434608292 ', 'NE46 4DL', 'Rotary Way', 'Hexham', 'Greggs', true),\
		(92181, 53.8073895663061000, -1.6597690455198300, 'Leeds Belgrave RP', '01132572411 ', 'LS28 6HQ', 'Belgrave Retail Park', 'Leeds', 'Greggs', true),\
		(92182, 53.6578700135173000, -1.7679071706353900, 'Hudfield Leeds Rd RP', '01484426954 ', 'HD1 6PF ', 'Unit J3', 'Huddersfield', 'Greggs', true),\
		(92183, 53.1558400672020000, -1.1874407382534700, 'Mansfield Oldmill Ln', '            ', 'NG19 9BG', 'Unit 7 Old Mill Lane Ind Estat', 'Mansfield', 'Greggs', true),\
		(92184, 52.5739116457119000, -0.2443747296438760, 'Pterbrough 94 Qnsgte', '01733892524 ', 'PE1 1NS ', 'Unit 94 Queensgate Shopping Ce', 'Peterborough', 'Greggs', true),\
		(92185, 55.9406140679322000, -4.1578761334053700, 'Kirkintilloch Cowgat', '01417760484 ', 'G66 1HW ', '73 Cowgate', 'Kirkintilloch', 'Greggs', false),\
		(92186, 54.9058712216747000, -1.3812667831304700, 'Sdland Fawcett St', '01915671853 ', 'SR1 1RH ', '18 Fawcett Street', 'Sunderland', 'Greggs', true),\
		(92187, 54.7761033077918000, -1.5407445627367000, 'Durham Dragonvile RP', '01913869482 ', 'DH1 2WP ', 'Unit 3 Dragonville Retail Park', 'Durham', 'Greggs', true),\
		(92188, 53.4414999502448000, -2.7314452834108800, 'EURO GARAGES SHIRDLE', '01744612725 ', 'WA9 5DT ', '102 St Helens', 'Linkway', 'Greggs', false),\
		(92189, 53.4565062473196000, -2.3364860556249200, 'EURO GARAGES CIRCLE', '01617489898 ', 'M32 9TR ', 'Audley Avenue', 'Manchester', 'Greggs', true),\
		(92190, 51.8879829637578000, -0.1861189920575280, 'EURO GARAGES BROADWA', '01438721477 ', 'SG2 8EH ', 'Broadwater Crescent', 'Hertfordshire', 'Greggs', true),\
		(92191, 53.7983561722737000, -2.8876144821968600, 'EURO GARAGES MILLFAR', '01912668479 ', 'PR4 3HD ', 'Fleetwood Road', 'Kirkham', 'Greggs', true),\
		(92192, 52.6818424157625000, -2.7615528204886800, 'EURO GARAGES SHEWSBU', '01743873942 ', 'SY3 0DA ', 'Hereford Road', 'Shropshire', 'Greggs', false),\
		(92193, 52.6354687132373000, -1.1327309169292500, 'Leicestr Gallowtr Gt', '01162627318 ', 'LE1 5AD ', '15-17 Gallowtree Gate', 'Leicester', 'Greggs', true),\
		(92194, 54.5262019503183000, -1.2886266526277900, 'Thornaby Fleck Wy', '01642763367 ', 'TS17 9JZ', 'Unit 9A Fleck Way', 'Thornaby', 'Greggs', true),\
		(92195, 51.4163773973413000, -0.7693165701886170, 'Bracknell Western TC', '01344301408 ', 'RG12 1RW', 'Western Trade Centre', 'Bracknell', 'Greggs', false),\
		(92196, 52.6918110958653000, -2.7155641278997500, 'Shrwsbury BP', '01743360534 ', 'SY2 6LG ', 'Unit 1 Plot 30 Anchorage Ave', 'Shrewsbury', 'Greggs', false),\
		(92197, 55.0784575964408000, -3.6213323762174500, 'Dumfries Dumfries RP', '01387267740 ', 'DG2 0NU ', 'Unit 7 Dumfries Retail Park', 'Dumfries', 'Greggs', false),\
		(92198, 52.0041395189363000, -0.7943309139122610, 'Miltn Ky Brnsdale Dr', '01908507981 ', 'MK4 4DD ', 'Unit 10B Barnsdale Drive', 'Milton Keynes', 'Greggs', false),\
		(92199, 51.4765601859822000, -3.1785812026225000, 'Cardiff U3 Ctrl Sq', '02920398571 ', 'CF10 1EP', 'Unit 3 BBC Building', 'Cardiff', 'Greggs', false),\
		(92200, 55.8361868143752000, -4.1586660481369600, '2224 GlasLdn Rd', '01417783031 ', 'G32 8YG ', '2224 London Road', 'Glasgow', 'Greggs', false),\
		(92201, 0.0000000000000000, 0.0000000000000000, 'Stevnstn Ashnyrds RP', '01294542914 ', 'KA20 3EG', 'Unit 3 Ashenyards Retail Park', 'Stevenston', 'Greggs', false),\
		(92202, 0.0000000000000000, 0.0000000000000000, 'Bangor Main St', '02891478768 ', 'BT20 5AE', '70/72 Main Street', 'Bangor', 'Greggs', false),\
		(92203, 51.9029779640811000, 0.9296296989638700, 'Colchester St Chris', '01206854674 ', 'CO4 0NB ', '58 St Chrisopher Road', 'Essex', 'Greggs', false),\
		(92204, 54.5998290000000000, -5.9480520000000000, 'Belfast, U5 Twin Spi', '02890328625 ', 'BT13 2JF', 'Unit 5 & 6 Twin Spires Complex', '155 Northumberland St', 'Greggs', false),\
		(92205, 51.4858991595249000, 0.2463545109810130, 'MRH Purfleet', '01708861412 ', 'RM19 1TS', 'Arterial Road', 'Esses', 'Greggs', true),\
		(92206, 51.4170012664549000, -0.2510036713476920, 'MRH Robin Hood', '02089496489 ', 'SW20 0AB', '325 Robin Hood Way', 'London', 'Greggs', true),\
		(92207, 51.6719097097596000, -4.6991851509775700, 'Tenby High St', '01834849736 ', 'SA70 7AA', '48 High Street', 'Tenby', 'Greggs', true),\
		(92208, 50.6092877299204000, -2.4539377897436000, 'Weymouth St Mary St', '01305782352 ', 'DT4 8PN ', '21 St Mary Street', 'Weymouth', 'Greggs', false),\
		(92209, 51.5191713486209000, -0.0609660155675050, 'Ldn Whitechapel Rd', '02070929766 ', 'E1 1DB  ', '243 Whitechapel Road', 'London', 'Greggs', true),\
		(92210, 0.0000000000000000, 0.0000000000000000, 'Newry Buttercrane SC', '02830262195 ', 'BT35 8HJ', 'Unit 11 Buttercrane Shopping C', 'Newry', 'Greggs', false),\
		(92211, 54.5112120000000000, -6.0489580000000000, 'Lisburn Market Pl', '02892678191 ', 'BT28 1AN', 'Unit 10 Wallace Building', 'Lisburn', 'Greggs', false),\
		(92212, 51.7597307113984000, -0.4392473429974370, 'Hml Hemp Maylnds Ave', '01442242129 ', 'HP2 4SE ', 'Unit 7 Maylands Avenue', 'Hemel Hempstead', 'Greggs', false),\
		(92213, 55.1698994166919000, -1.5573777878056600, 'EURO GARAGES ASHINGT', '01670850899 ', 'NE63 0TQ', 'Newbiggen Road', 'Northumberland', 'Greggs', true),\
		(92214, 53.6005452100000000, -2.5729698300000000, 'EURO GARAGES RIVINGT', '01204698015 ', 'BL6 5UZ ', 'M61 Motorway South Bound Servi', ' ', 'Greggs', true),\
		(92215, 53.6005452100000000, -2.5729698300000000, 'EURO GARAGES RIVINGT', '01204690892 ', 'BL6 5UZ ', 'M62 Motorway North Bound Servi', ' ', 'Greggs', true),\
		(92216, 51.6927319548852000, -3.0210349527043100, 'EURO GARAGES FOLLY T', '01495753473 ', 'NP4 0XB ', 'A4042 Roundabout', ' ', 'Greggs', true),\
		(92217, 52.0412120462031000, -1.3255322023838600, 'EURO GARAGES BANBURY', '01295259807 ', 'OX15 4AB', 'Oxford Road', 'Banbury', 'Greggs', true),\
		(92218, 53.0225026090679000, -2.1495621772724900, 'EURO GARAGES TRENT', '01782214905 ', 'ST2 9DG ', '4 Ruxley Road', 'Bucknall', 'Greggs', true),\
		(92219, 0.0000000000000000, 0.0000000000000000, 'Shefld St James RP', '01142372122 ', 'S8 8BS  ', 'Unit 2, St James Retail Park', 'Sheffield', 'Greggs', true),\
		(92220, 55.8387892548286000, -4.1741906226283400, 'EURO GARAGES FULLART', '01417782942 ', 'G32 8XQ ', '2101 London Road', 'Glasgow', 'Greggs', true),\
		(92221, 50.4626947524555000, -3.5263058469343200, 'Torquay Fleet Wlk', '01803213810 ', 'TQ2 5EB ', 'Unit 7 Fleet Walk', 'Torquay', 'Greggs', true),\
		(92222, 51.0819418427083000, -4.0616869555855700, 'Barnstaple High St', '01271374492 ', 'EX31 1JB', '61 High Street', 'Barnstaple', 'Greggs', true),\
		(92223, 50.4673420384432000, -3.5292314278880600, 'Torquay Union Sq SC', '01803293296 ', 'TQ1 3UT ', 'Union Square Shopping Centre', 'Torquay', 'Greggs', true),\
		(92224, 52.0817670641866000, 1.1168380571199800, 'Ipswich Quantum BP', '01473462130 ', 'IP1 5NX ', '10 Quantum Business Park', 'Ipswich', 'Greggs', false),\
		(92225, 54.9085501853006000, -1.4141199145748600, 'Sdland St Lukes Tce', '01915672978 ', 'SR4 6NQ ', '31/33 St Lukes Terrace', 'Sunderland', 'Greggs', true),\
		(92226, 55.9511046220691000, -3.9840013419230600, 'Cumbrnld S Muirhd Rd', '01236729738 ', 'G67 1AX ', 'Unit 1A', 'Cumbernauld', 'Greggs', false),\
		(92227, 56.0237381671071000, -3.9086636719285200, 'Denny 13 Stirling St', '01324822965 ', 'FK6 6DF ', 'Unit 7 13 Stirling Street', 'Denny', 'Greggs', false),\
		(92228, 0.0000000000000000, 0.0000000000000000, 'Melksham Commerce Wy', '01225791031 ', 'SN12 6AD', 'Unit 3 Ashville Centre', 'Melksham', 'Greggs', false),\
		(92229, 51.4758134830047000, -3.2498094765386400, 'Cardiff Cowbrdge Rd', '02920597750 ', 'CF5 5BY ', '364-372 Cowbridge Road West', 'Cardiff', 'Greggs', false),\
		(92230, 50.3716657315915000, -4.1436615758919000, 'Plymouth George St', '01752260729 ', 'PL1 1RR ', '54 New George Street', 'Plymouth', 'Greggs', true),\
		(92231, 51.5117982077593000, -2.1582296165998700, 'MOTO Leigh Del West', '01666838701 ', 'SN14 6LB', 'Chippenham', 'Wiltshire', 'Greggs', false),\
		(92232, 53.6220313334281000, -1.5445895043370500, 'MOTO Wooley Edge Nor', '01924830396 ', 'WF4 4LQ ', 'Wests Brtton', 'Yorkshire', 'Greggs', true),\
		(92233, 53.9615670297902000, -2.7613576493394500, 'MOTO Lancaster North', '01524791616 ', 'LA2 9DU ', 'White Carr Lane', 'Lancaster', 'Greggs', true),\
		(92234, 53.3008641077557000, -2.4016275107010900, 'MOTO Knutsford South', '01565751648 ', 'WA16 0TL', 'Norwich Road', 'Cheshire', 'Greggs', false),\
		(92235, 51.4865730704751000, -0.3961064124649400, 'MOTO Heston East Fou', '02088431094 ', 'TW5 9NB ', 'Phoenix Way', 'Middlesex', 'Greggs', false),\
		(92236, 52.6431665022005000, -2.0573727926274500, 'MOTO Hilton Park Sou', '01922417116 ', 'WV11 2AT', 'Hilton Park Motorway Services', 'Essington', 'Greggs', true),\
		(92237, 52.4287707600000000, -2.0171484640000000, 'MOTO Frankley South', '01215500203 ', 'B32 4AR ', 'Illey Lane', 'West Midlands', 'Greggs', false),\
		(92238, 52.8217125239037000, -1.3081586287316200, 'MOTO Donnington Park', '01509673283 ', 'DE74 2TN', 'Castle Donnington', 'East Midlands', 'Greggs', true),\
		(92239, 55.9342698810051000, -4.6897500115488000, 'P Glasgow Princes t', '01475741394 ', 'PA14 5JQ', '38 Princes Street', 'Port Glasgow', 'Greggs', false),\
		(92240, 57.2838541600000000, -2.3750777340000000, 'Inverurie Mkt Pl', '01467670026 ', 'AB51 3PU', '5 Market Place', 'Inverurie', 'Greggs', false),\
		(92241, 0.0000000000000000, 0.0000000000000000, 'APPLEGREEN M1 Northb', '02892670943 ', 'BT27 5SE', 'M1 Northbound', 'Co Down', 'Greggs', true),\
		(92242, 51.6248196293351000, -3.9382525873156600, 'Swansea New Cut Rd', '01792648423 ', 'SA1 8AP ', 'Unit 4 New Cut Road', 'Swansea', 'Greggs', false),\
		(92243, 51.4333577413012000, -0.5306558307823910, 'Staines Hawthorne Rd', '01784449410 ', 'TW18 3AY', 'Unit 1 Hawthorne Trade Park', 'Staines', 'Greggs', true),\
		(92244, 0.0000000000000000, 0.0000000000000000, 'Sutton Ashf Cstlwood', '01623442310 ', 'NG17 1BX', 'Part Plot 6C', 'Sutton in Ashfield', 'Greggs', false),\
		(92245, 52.3622468659107000, -2.2638880262770800, 'Kdderminster Foley D', '01562829626 ', 'DY11 7PS', 'Unit 2 Foley Drive', 'Kidderminster', 'Greggs', false),\
		(92246, 0.0000000000000000, 0.0000000000000000, 'Carmarthen Parc Pens', '01267229349 ', 'SA31 2DG', 'Unit 4 Parc Pensarn', 'Carmarthen', 'Greggs', false),\
		(92247, 53.7640029473113000, -2.5974781567332300, 'EURO GARAGES 5 Barre', '01772877426 ', 'PR5 0UX ', 'Spring Lane', 'Preston', 'Greggs', true),\
		(92248, 53.6866694627816000, -2.6718803263885400, 'EURO GARAGES Matrix', '            ', 'PR7 7NA ', 'Matrix Point', 'Lancashire', 'Greggs', true),\
		(92249, 51.2015066600000000, -2.3769798320000000, 'EURO GARAGES Nunney', '01373836337 ', 'BA11 4NZ', 'Nunney Catch', 'Somerset', 'Greggs', true),\
		(92250, 51.2886284250533000, 1.0967958344308900, 'Canterbury Sturry Rd', '01227762462 ', 'CT1 1HJ ', '126 Sturry Road', 'Canterbury', 'Greggs', false),\
		(92251, 53.2331122574265000, -2.9424543661997700, 'EURO GARAGES Red Ens', '01244881169 ', 'CH1 6JS ', 'Parkgate Road', 'Chester', 'Greggs', false),\
		(92252, 53.4220549816307000, -2.9778989231756000, 'Lvrpool Great Homer', '01512076050 ', 'L5 3LQ  ', 'Unit 9 Block Y', 'Liverpool', 'Greggs', false),\
		(92253, 55.6112360699820000, -4.6745349250513900, 'Irvine New St', '01294312037 ', 'KA12 8NU', 'New Street', 'Irvine', 'Greggs', false),\
		(92254, 53.4995162392823000, -2.5277977972119200, 'Leigh Parsonage RP', '01942675481 ', 'WN7 5SJ ', 'New Retail Unit 1', 'Leigh', 'Greggs', true),\
		(92255, 52.4857723600000000, -1.8907627370000000, 'Birm Aston St', '01212365145 ', 'B4 7DA  ', 'Unit 2 The Old Fire Station', 'Birmingham', 'Greggs', true),\
		(92256, 51.4923741073491000, -0.1483635511776770, 'Ldn Vic Coach Statn', '02077302636 ', 'SW1W 9TP', 'Unit 1 London Victoria Coach S', 'London', 'Greggs', true),\
		(92257, 51.5046729413928000, -0.0860055938514930, 'Ldn Ldn Bridge Statn', '            ', 'SE1 9SP ', 'SU45 London Bridge Station', 'London', 'Greggs', false),\
		(92258, 53.3798316730782000, -3.0126651296214200, 'EURO GARAGES Laids', '01516475683 ', 'CH41 9BW', '117 New Chester Road', 'Birkenhead', 'Greggs', true),\
		(92259, 53.1629391046342000, -2.9081893701667800, 'EURO GARAGES Wrexham', '01244659853 ', 'CH4 9DE ', 'Wrexham Road', 'Chester', 'Greggs', true),\
		(92260, 55.8837567688448000, -3.5149849375297400, 'Lvngstn 96 The Ctr', '01506431837 ', 'EH54 6HR', '96 The Centre', 'Livingston', 'Greggs', false),\
		(92261, 53.3928272554574000, -2.2937585222141600, 'Wythnshw Ledson Rd', '01619980010 ', 'M23 9GP ', 'Unit A The Hub', 'Wythenshawe', 'Greggs', true),\
		(92262, 51.5212715160257000, -3.1194724503277200, 'Llanrumney Cntsbury', '02920792948 ', 'CF3 5YR ', '72 Countisbury Avenue', 'Cardiff', 'Greggs', false),\
		(92263, 51.5584191735160000, 0.2505470768492110, 'Upminster Station Rd', '01708250629 ', 'RM14 2TD', '72 Station Road', 'Upminster', 'Greggs', false),\
		(92264, 55.8629768395109000, -4.2524604530523300, 'Glas Buchanan Gall', '01413326614 ', 'G1 2GF  ', 'Units 6 and 7', 'Glasgow', 'Greggs', false),\
		(92265, 51.5811878917238000, -0.3359542845367790, 'Harrow 51 St Anns Rd', '02088633566 ', 'HA1 1JU ', '51 St Anns Road', 'Harrow', 'Greggs', true),\
		(92266, 53.6982679152518000, -1.6976050760464600, 'Lvrsdge Fountain Ct', '01924404487 ', 'WF15 7QQ', 'Unit 3b Fountain Court', 'Liversedge', 'Greggs', true),\
		(92267, 53.5777443058132000, -0.1066237791800560, 'Grimsby Gilbey Rd', '01472352646 ', 'DN31 2TN', 'Unit 2 Gilbey Road', 'Grimsby', 'Greggs', false),\
		(92268, 52.4453811700000000, -1.7211528590000000, 'EURO GARAGES Bickenh', '01675443032 ', 'B92 0EH ', 'Coventry Road', 'Solihull', 'Greggs', true),\
		(92269, 51.7569282313331000, -0.5526183759456420, 'EURO GARAGES Hall Pa', '01442870653 ', 'HP4 2NB ', 'London Road', 'Berkhamsted', 'Greggs', true),\
		(92270, 50.8230438194622000, -0.9821379451405370, 'EURO GARAGES Hayling', '02392637304 ', 'PO11 0LG', '181 Havant Road', 'Hampshire', 'Greggs', true),\
		(92271, 51.9840554711270000, -1.7056480212444500, 'EURO GARAGES Marsh', '01608652379 ', 'GL56 0DS', 'Stow Road', 'Moreton in Marsh', 'Greggs', true),\
		(92272, 52.6044817177377000, -0.2707235606485010, 'EURO GARAGES Northme', '01733571769 ', 'PE4 6AX ', 'Lincoln Road', 'Peterborough', 'Greggs', false),\
		(92273, 53.0019594723140000, -2.1205233634712000, 'EURO GARAGES Park Ha', '            ', 'ST3 5YY ', 'Dividy Road', 'Stoke on Trent', 'Greggs', false),\
		(92274, 50.9405721955944000, -2.8062877808351300, 'EURO GARAGES South P', '01460242654 ', 'TA13 5JG', 'Harp Road', 'Somerset', 'Greggs', true),\
		(92275, 51.2894700535015000, 0.9957231315310380, 'MRH Gate', '01227751734 ', 'ME13 9LN', 'A2 Dunkirk', 'Kent', 'Greggs', true),\
		(92276, 50.7470994100000000, -1.6641972390000000, 'New Mltn Old Grn Pde', '01425621006 ', 'BH25 6QA', '9 Old Green Parade', 'New Milton', 'Greggs', false),\
		(92277, 53.5743800100000000, -2.4267482370000000, 'Bolton Interchange', '01204389664 ', 'BL2 1BE ', 'Bolton Interchange', 'Bolton', 'Greggs', true),\
		(92278, 53.4553682790610000, -2.4021661482278300, 'Irlam Gateway SS', '01617762664 ', 'M44 6FB ', 'Irlam Gateway Service Station', 'Irlam', 'Greggs', false),\
		(92279, 0.0000000000000000, 0.0000000000000000, 'Rhyl Marina Quay', '01745342778 ', 'LL18 1LQ', 'Unit 8', 'Rhyl', 'Greggs', true),\
		(92280, 50.5463456732436000, -3.4950178575667700, 'Teignmth Welingtn St', '01626776867 ', 'TQ14 8HH', '12 Wellington Street', 'Teignmouth', 'Greggs', false),\
		(92281, 50.4354941958700000, -3.5664925662170100, 'Paignton Victoria St', '01803553176 ', 'TQ4 5DN ', '16 Victoria Street', 'Paignton', 'Greggs', false),\
		(92282, 51.3659025645002000, -0.1939086936540500, 'Sutton 194 High St', '02087701384 ', 'SM1 1NR ', '194-196 High Street', 'Sutton', 'Greggs', true),\
		(92283, 51.5800562755614000, -1.7224780354700300, 'EURO GARAGES SOUTH M', '01793826426 ', 'SN3 4RS ', 'Shrivenham Road', 'Swindon', 'Greggs', true),\
		(92284, 53.2189787642991000, -2.8780732353632300, 'BLAKEMORE UPTON', '01244381655 ', 'CH2 1JF ', '143 Long Lane', 'Chester', 'Greggs', true),\
		(92285, 51.6492340321057000, 0.6091813409194300, 'BLAKEMORE SOUTH WOOD', '01245322465 ', 'CM3 5JT ', '1 Warwick Parade', 'Essex', 'Greggs', true),\
		(92286, 52.3449699116928000, -0.5358999100687760, 'BLAKEMORE RAUNDS', '01933624152 ', 'NN9 6HS ', 'High Street', 'Northants', 'Greggs', true),\
		(92287, 53.2742548579288000, -2.8144530226856300, 'BLAKMORE ELTON', '01928724265 ', 'CH2 4LU ', 'Elton Shopping Precinct', 'Chester', 'Greggs', true),\
		(92288, 52.6604605371874000, -1.1144499724343900, 'HKS SANDRINGHAM', '01162668832 ', 'LE4 7PB ', '270 Melton Road', 'Leicestershire', 'Greggs', true),\
		(92289, 52.4591270679543000, -0.7355218379171250, 'HKS CORBY', '01536747012 ', 'NN18 8TJ', 'Uppingham Road', 'Northans', 'Greggs', true),\
		(92290, 57.1296407000000000, -2.0917428930000000, 'Aberdn Wellington Rd', '01224896130 ', 'AB12 3DP', '65a Wellington Road', 'Aberdeen', 'Greggs', false),\
		(92291, 55.6733707022759000, -3.7789567035790900, 'Lanark High St', '01555662871 ', 'ML11 7EX', 'Unit 2, 40./42 High Street', 'Lanark', 'Greggs', false),\
		(92292, 53.7923483585126000, -2.7055530829570700, 'Prestn Sharoe Grn Ln', '01772718567 ', 'PR2 9HD ', 'Unit 6 Sharoe Green Lane', 'Preston', 'Greggs', true),\
		(92293, 50.4030757012278000, -4.1016924448633600, 'MRH Landmark', '01752770363 ', 'PL6 8LE ', 'Forder Valley Road', 'Devon', 'Greggs', true),\
		(92294, 52.4879311126306000, -0.7013377943799840, 'Corby Corporation St', '01536202544 ', 'NN17 1NJ', 'Unit 34 Corporation Street', 'Northants', 'Greggs', false),\
		(92295, 52.2609693935667000, -3.4970974514588300, 'EURO GARAGES Halt', '01597810680 ', 'LD1 6NN ', 'Halt A470 Llamwrthwl', 'Doldowlod', 'Greggs', true),\
		(92296, 52.6125924015540000, -0.1877932513143940, 'EURO GARAGES Eye Gre', '01733223692 ', 'PE6 7SZ ', 'A47 Eastbound', 'Peterborough', 'Greggs', true),\
		(92297, 54.8947198452313000, -1.4291950606115400, 'Grindon Sprngwell Rd', '01915250068 ', 'SR4 8NW ', 'Unit 4 Broadway House', 'Sunderland', 'Greggs', true),\
		(92298, 0.0000000000000000, 0.0000000000000000, 'Coleraine Church St', '02870355014 ', 'BT52 1AW', '13/15 Church St', 'Coleraine', 'Greggs', false),\
		(92299, 55.8685090089663000, -4.1222752324218900, 'Glas Easterhouse', '01417732628 ', 'G34 9DT ', 'LGF2 Shandwick Square', 'Glasgow', 'Greggs', false),\
		(92300, 53.7506503300000000, -2.4962144490000000, 'EUROGARAGES Prestonw', '01254260504 ', 'BB2 6BJ ', '103 Preston New Road', 'Blackburn', 'Greggs', false),\
		(92301, 53.0866143203811000, -2.4295195576996000, 'EUROGARAGES Crewe', '01270214592 ', 'CW1 6FL ', 'Railway Exchange', 'Cheshire', 'Greggs', false),\
		(92302, 51.2178501000000000, -2.1999858830000000, 'EUROGARAGES Warminst', '01985220653 ', 'BA12 7RU', 'A36 Warminster Service Area', 'Warminster', 'Greggs', true),\
		(92303, 53.4804348735254000, -2.2389881152230700, 'Man Parker St', '01612287893 ', 'M1 4BT  ', '15a City Tower', 'Manchester', 'Greggs', true),\
		(92304, 0.0000000000000000, 0.0000000000000000, 'Birm New Street Stn', '01216161219 ', 'B2 4QE  ', 'Unit 12 New Street Station', 'Birmingham', 'Greggs', true),\
		(92305, 51.4527937004881000, -0.9052052131226350, 'Woodley Crckhmwll Rd', '            ', 'RG5 3JH ', '136-142 Crockhamwell Road', 'Woodley', 'Greggs', false),\
		(92306, 0.0000000000000000, 0.0000000000000000, 'APPLEGREEN Spalding', '            ', 'PE12 6FY', 'Barrier Bank Service Station', 'Spalding', 'Greggs', true),\
		(92307, 52.3413232966165000, -0.3415774102285330, 'APPLEGREEN Spaldwick', '01480896324 ', 'PE28 0TD', 'High Street', 'Huntingdon', 'Greggs', true),\
		(92308, 51.6627644448328000, -3.8280132167302600, 'Neath Abbey New Rd', '01792817286 ', 'SA10 7NG', 'Units 2 & 3 New Road', 'Neath Abbey', 'Greggs', false),\
		(92309, 52.0459515041426000, -2.7251901753502400, 'Hereford Belmont Rd', '01432354005 ', 'HR2 7JR ', 'Unit 4, 109-111 Belmont Rd', 'Hereford', 'Greggs', false),\
		(92310, 50.5305067635869000, -3.6110503428679500, 'Nwtn Abbot Mkt Wlk', '01626334849 ', 'TQ12 2RX', 'Unit 3 Market Walk Shoppig Cen', 'Newton Abbot', 'Greggs', true),\
		(92311, 51.5014001208828000, -0.1250020744523230, 'Ldn Westminster Stn', '02078397459 ', 'SW1A 2JR', 'Shop 2', 'London', 'Greggs', true),\
		(92312, 53.7947162000000000, -1.7556159320000000, 'Bradford Kirkgate SC', '01274395598 ', 'BD1 1QY ', 'Units 4 & 5 Godwin Mall', 'Bradford', 'Greggs', true),\
		(92313, 53.1670344085328000, -3.1340198322947900, 'EURO GARAGES Wyfla', '01352757216 ', 'CH7 1UE ', 'Chester Road', 'Mold', 'Greggs', true),\
		(92314, 0.0000000000000000, 0.0000000000000000, 'Stafford', '01785249971 ', 'ST16 3AL', 'Unit 4 Riverside', 'Stafford', 'Greggs', false),\
		(92315, 0.0000000000000000, 0.0000000000000000, 'Skelton Skelton RP', '01287653461 ', 'TS12 2ZL', 'Unit 3B Skelton Park', 'Saltburn by the Sea', 'Greggs', true),\
		(92316, 52.8261236766773000, -1.3296230466145600, 'East Midlnds Airport', '01332812899 ', 'DE74 2SA', 'Unit T Arrivals', 'Castle Donnington', 'Greggs', true),\
		(92317, 0.0000000000000000, 0.0000000000000000, 'Selly Oak SP', '01214727730 ', 'B29 6?? ', 'Unit 9a Selly Oak Shopping Pk', 'Birmingham', 'Greggs', true),\
		(92318, 52.5043127500000000, -2.0219810020000000, 'Oldbury Green RP', '01215525174 ', 'B69 3DD ', 'Unit 14 Oldbury Green Retail P', 'Oldbury', 'Greggs', false),\
		(92319, 56.1353803037483000, -3.1981791387140300, 'Kirkcaldy Central RP', '01592262819 ', 'KY2 6QL ', 'Unit 2 Fife Central Retail Par', 'Kirkcaldy', 'Greggs', false),\
		(92320, 0.0000000000000000, 0.0000000000000000, 'Larne Main St', '02828277543 ', 'BT40 1JE', 'Larne', 'Northern Ireland', 'Greggs', false),\
		(92321, 0.0000000000000000, 0.0000000000000000, 'Edin Harewood Dr', '01316566786 ', 'EH16 4GP', '2 Harewood Drive', 'Edinburgh', 'Greggs', false),\
		(92322, 51.6425255009982000, 0.0841858329739270, 'Debden Eping Frst SP', '02085085890 ', 'IG10 3UE', 'Unit 7 Epping Forest Shopping', 'Essex', 'Greggs', true),\
		(92323, 52.5737885349645000, -0.2415314880835110, 'Pterbrough Lng Cswy', '01733340242 ', 'PE1 1TS ', '22 Long Causeway', 'Peterborough', 'Greggs', true),\
		(92324, 55.6129039069583000, -4.6714246104346700, 'Irvine Rivergate SC', '01294279652 ', 'KA12 8EH', 'Unit 23 & 25 Rivergate Centre', 'Irvine', 'Greggs', false),\
		(92325, 0.0000000000000000, 0.0000000000000000, 'Portadown High St', '02838332961 ', 'BT62 1HZ', 'U18 High Street Mall', 'Portadown', 'Greggs', false),\
		(92326, 55.0677483884034000, -3.6095451867373600, 'Dumfries High St', '01387739957 ', 'DG1 2BS ', '72 High Street', 'Dumfries', 'Greggs', false),\
		(92327, 55.8580185845652000, -4.1353970629321100, 'Glas Hallhill Rd', '01417718502 ', 'G33 4RJ ', 'Unit 1A', 'Glasgow', 'Greggs', false),\
		(92328, 51.8660720872308000, -0.4080607195947660, 'Luton Capability Grn', '01582727353 ', 'LU1 3LU ', '499 Capability Green Business', 'Luton', 'Greggs', true),\
		(92329, 51.1181239053692000, -0.1616364112237550, 'Crawley Three Brdges', '01293560552 ', 'RH10 1LY', 'Three Bridges Railway Station', 'Crawley', 'Greggs', true),\
		(92330, 0.0000000000000000, 0.0000000000000000, 'Bracknell Braccn Wlk', '01344452364 ', 'RG12 1BE', '34 Braccan Walk', 'Bracknell', 'Greggs', false),\
		(92331, 56.2318713991095000, -3.8981757168550000, 'EUOR GARAGES BALLHAL', '            ', 'FK15 0NB', 'A9 Southbound', 'Dunblane', 'Greggs', false),\
		(92332, 53.8403931400000000, -2.3954842470000000, 'EURO GARAGES BAROWBR', '            ', 'BB7 9WF ', 'Whalley Road', 'Clitherow', 'Greggs', true),\
		(92333, 57.1538708700000000, -2.2783362860000000, 'Aberden Westhill SC', '01224749593 ', 'AB32 6RL', 'Units 21 and 22 Westhill Shopp', 'Aberdeen', 'Greggs', false),\
		(92334, 52.4418314914125000, -2.8353341242872700, 'Crvn Arms Shrwsby Rd', '01588672449 ', 'SY7 9PY ', 'Unit 1 Garage Shop, Craven Cen', 'Shropshire', 'Greggs', true),\
		(92335, 52.4237929925945000, 0.7270644353746100, 'MRH Thetford West', '01842753039 ', 'IP24 1QN', 'A11 Thetford Bypass Westbound', ' ', 'Greggs', true),\
		(92336, 55.9019027306101000, -4.4048728787188600, 'Clydbk Sylvana Way', '01419514094 ', 'G81 1EA ', 'Unit 13/15 Sylvania Way South', 'Clydebank', 'Greggs', false),\
		(92337, 53.5150277612372000, -1.1286635923631500, 'Doncaster Wht Rse RC', '            ', 'DN4 5AJ ', 'Unit 1 White Rose Retail Centr', 'Doncaster', 'Greggs', true),\
		(92338, 53.1249361756183000, -1.2621753753530800, 'Sutton Ashf Idlewlls', '01623443881 ', 'NG17 1BN', 'Unit 30-31 Idlewells Shopping', 'Sutton in Ashfield', 'Greggs', false),\
		(92339, 53.7655091011771000, -2.6566183317884300, 'EURO GARAGES Hall La', '01772797483 ', 'PR1 4TE ', 'Shell New Hall Lane', 'Preston', 'Greggs', true),\
		(92340, 52.4144659876756000, -0.7900542654747690, 'EURO GARAGES Ketteri', '01536510020 ', 'NN14 1SS', 'A14 Eastbound Services', 'Kettering', 'Greggs', true),\
		(92341, 52.4673272900000000, -1.7217797630000000, 'Birm Waterside Ctr', '            ', 'B37 7YN ', 'Unit 4205A Waterside Centre', 'Birmingham', 'Greggs', false),\
		(92342, 50.3705229653658000, -4.1412474420273200, 'Plymouth Royal Pde', '01752228655 ', 'PL1 1DU ', '30 Royal Parade', 'Plymouth', 'Greggs', true),\
		(92343, 51.5827695363577000, -3.0017246394859100, 'EURO GARAGES TWO HIL', '01633253101 ', 'NP20 4GA', 'Stow Hill Services', 'Newport', 'Greggs', true),\
		(92344, 52.4954088337676000, -0.6473520632775760, 'EURO GARAGES CORBY', '01536261428 ', 'NN17 3HX', 'Corby - Junction off Bangrave', ' ', 'Greggs', true),\
		(92345, 51.6316955215655000, -0.4158166612063430, 'EURO GARAGES Sandy L', '01923840208 ', 'HA6 2HU ', 'Esso', 'Middlesex', 'Greggs', true),\
		(92346, 50.8293573000000000, -1.8387072530000000, 'EURO GARAGES RINGWOO', '01425479174 ', 'BH24 2NR', '176 Ringwood Road', 'Hampshire', 'Greggs', true),\
		(92347, 55.9771001931196000, -4.0683559531825400, 'EURO GARAGES DUNCANS', '01236825791 ', 'G65 9AE ', '3 Glasgow Road', 'Glasgow', 'Greggs', true),\
		(92348, 51.5919159561079000, -3.1768445194075400, 'EURO GARAGES CHEQUER', '02920889315 ', 'CF83 8GB', 'BP', 'Gwent', 'Greggs', true),\
		(92349, 53.7539509200000000, -2.4454016110000000, 'EURO GARAGES FRONTIE', '            ', 'BB1 3HR ', 'Frontier Business Park', 'Rishton', 'Greggs', true),\
		(92350, 0.0000000000000000, 0.0000000000000000, 'EURO GARAGES WEYHILL', '01264771839 ', 'SP11 OPN', 'WeyhilL Service Area East', 'Hampshire', 'Greggs', true),\
		(92351, 53.5015273617128000, -1.4752359098708100, 'BARNSLY DRNE V PRKWY', '01226360148 ', 'S70 5TW ', 'PFS Dearne Valley Parkway', 'Barnsley', 'Greggs', false),\
		(92352, 52.6644434875937000, 1.2791497303279900, 'Norwch Lansdowne Rd', '01603488973 ', 'NR6 6NF ', 'Unit 2 Lansdowne Road', 'Norwich', 'Greggs', false),\
		(92353, 51.8781950484923000, 0.8459894949708780, 'Colchester Stanwy RP', '            ', 'CO3 0JS ', 'Unit 5 Stanway Retail Park', 'Colchester', 'Greggs', false),\
		(92354, 53.4098354036969000, -2.9265146870991100, 'Lvrpool Edge Ln', '01512280512 ', 'L13 1AD ', 'Unit 6 Liverpool Shopping Cent', 'Liverpool', 'Greggs', true),\
		(92355, 55.0973214579737000, -1.6079484812073000, 'Cramlington Nelsn IE', '01670738468 ', 'NE23 1WE', 'Unit 15a, Nelson Park Industri', 'Cramlington', 'Greggs', true),\
		(92356, 51.2056806319946000, -3.4772910720736400, 'Minehead The Pde', '01643705532 ', 'TA24 5UG', '18 The Parade', 'Minehead', 'Greggs', true),\
		(92357, 51.5728375414320000, -3.0128046751495700, 'Newport Cardiff Rd', '01633245947 ', 'NP20 3AE', 'Unit 3a, 156-160 Cardiff Road', 'Newport', 'Greggs', false),\
		(92358, 51.5907734823533000, 0.4795390427200740, 'Basildon Mayflwer RP', '01268820335 ', 'SS14 3HZ', 'Unit 1E Mayflower Retail Park', 'Essex', 'Greggs', false),\
		(92359, 52.5157984825206000, -3.3049670358771900, 'Newtown', '01686626412 ', 'SY16 1DW', 'Poole Road', 'Newtown', 'Greggs', true),\
		(92360, 53.7573444952975000, -2.6829429180030600, 'Preston London Rd', '            ', 'PR1 4BA ', 'Unit 1 New Retail Development', 'Preston', 'Greggs', false),\
		(92361, 51.0856002430739000, -4.0770282602431700, 'Barnstaple Ptngtn BP', '01271345682 ', 'EX31 1LP', 'Unit 1 Pilland Way', 'Barnstaple', 'Greggs', false),\
		(92362, 53.7027223600000000, -2.2850382560000000, 'Rawtenstall Bank St', '01706214436 ', 'BB4 8DY ', '48 Bank Street', 'Lancashire', 'Greggs', true),\
		(92363, 51.4010179691500000, 0.4007490816289530, 'MRH Cobham', '01474533030 ', 'DA12 3BH', 'A2 Trunk Road', 'Kent', 'Greggs', true),\
		(92364, 52.6322678323693000, -1.1277704854832000, 'Leicester Granby Str', '01162548729 ', 'LE1 6FJ ', '135 Granby Street', 'Leicester', 'Greggs', true),\
		(92365, 52.1526740935702000, -3.4017681569178100, 'Builth Wells', '01982552261 ', 'LD2 3SS ', 'Tuffins, Station Road', 'Builth Wells', 'Greggs', false),\
		(92366, 51.5961933958869000, -2.9826599245565000, 'Newport Caerleon Rd', '01633245949 ', 'NP19 7FW', '141/143 Caerleon Road', 'Newport', 'Greggs', false),\
		(92367, 54.1790808173867000, -2.7338174781106100, 'MOTO Burton Kiosk', '01524784759 ', 'LA6 1JF ', 'Buton in Kendal', 'Lancashire', 'Greggs', false),\
		(92368, 52.4287707600000000, -2.0171484640000000, 'MOTO Frankley S Kios', '01215502459 ', 'B32 4AR ', 'Illey Lane', 'West Midlands', 'Greggs', false),\
		(92369, 56.2090766964224000, -3.4414718892618100, 'MOTO Kinross Kiosk', '01577862831 ', 'KY13 0NQ', 'Kinross', 'Perthshire', 'Greggs', false),\
		(92370, 51.1055826251050000, -2.9910719666389700, 'MOTO Bridgewater Kio', '01278425820 ', 'TA6 6TS ', 'Huntworth Business Park', 'Somerset', 'Greggs', false),\
		(92371, 0.0000000000000000, 0.0000000000000000, 'MOTO Stirling', '01786817360 ', 'KY7 8EU ', 'Pirnhall', 'Stirling', 'Greggs', true),\
		(92372, 51.6792437678594000, -3.9950368289300700, 'MOTO Swansea', '01792229264 ', 'SA4 9GT ', 'Penllergaer', 'West Glamorgan', 'Greggs', true),\
		(92373, 0.0000000000000000, 0.0000000000000000, 'Birmingham 105 Brist', '            ', 'B15 2DZ ', '105 Bristol Street', 'Birmingham', 'Greggs', false),\
		(92374, 53.3964581906813000, -2.3655025122062100, 'Altrincham Atlntc St', '01619295078 ', 'WA14 5TW', 'Farrow House', 'Altrincham', 'Greggs', true),\
		(92375, 0.0000000000000000, 0.0000000000000000, 'Bradford Clayton Rd', '01274 578741', 'BD7 2SG ', 'Unit 6 Quora Retail Park', 'Bradford', 'Greggs', true),\
		(92376, 55.8654206745018000, -4.2520106033748400, 'Glas Killermont St', '01413322363 ', 'G2 3NW  ', 'Unit 3 Buchanan Bus Station', 'Glasgow', 'Greggs', true),\
		(92377, 52.0119158302454000, -0.7468397698509990, 'Miltn Ky Bletchly TP', '01908270380 ', 'MK6 4AE ', 'Unit 4 Bletchley Trade Park', 'Milton Keynes', 'Greggs', false),\
		(92378, 52.2132856278052000, -2.1783209246542800, 'Warndon Berkeley Way', '01905452760 ', 'WR4 9FB ', 'Unit 5 Berkeley Way', 'Worcester', 'Greggs', false),\
		(92379, 0.0000000000000000, 0.0000000000000000, 'Cannon St', '            ', 'EC4N 6AD', 'Arch 1, Dowgate Hill', 'London', 'Greggs', false),\
		(92380, 51.6186054719856000, -0.7840047741437810, 'High Wycombe', '01494473354 ', 'HP12 4RG', '186-188 New Road', 'High Wycombe', 'Greggs', true),\
		(92381, 55.8452960836932000, -4.3444405795070800, 'Glas 1865 Paisley Rd', '01418101750 ', 'G52 3SX ', '1865 Paisley Road West', 'Glasgow', 'Greggs', false),\
		(92382, 55.0417924079332000, -1.4431779774449200, 'Whitley By Whitly Rd', '            ', 'NE26 2SY', '248/250 Whitley Road', 'Tyne & Wear', 'Greggs', true),\
		(92383, 53.3791888568038000, -1.4703515218231500, 'Shefld Pinstone St', '01142762516 ', 'S1 2HJ  ', '95-101 Pinstone St', 'Sheffield', 'Greggs', true),\
		(92384, 57.1435674200000000, -2.1102685730000000, 'Aberdn Union St', '01224611673 ', 'AB10 1TR', '446/450 Union Street', 'Aberdeen', 'Greggs', false),\
		(92385, 54.9201074437164000, -1.4013460639905100, 'Sdland The Green', '01915480889 ', 'SR5 2JE ', 'Unit 7-8 THe Green', 'Sunderland', 'Greggs', false),\
		(92386, 55.9203207521534000, -4.3337804373259200, 'Bearsden Drymen Rd', '01419424368 ', 'G61 3RB ', '124 Drymen Road', 'Bearsden', 'Greggs', false),\
		(92387, 55.8445525107970000, -4.4245079478134500, 'Paisley Paisley SC', '01418891518 ', 'PA1 1UN ', '34/35 Paisley Shopping Centre', 'Paisley', 'Greggs', false),\
		(92388, 55.4232357211433000, -2.7858843679685000, 'Hawick High St', '01450363649 ', 'TD9 9EE ', '52a High Street', 'Hawick', 'Greggs', false),\
		(92389, 51.7253992005435000, -1.9443437361437400, 'EURO GARAGES Cirence', '01285651264 ', 'GL7 5HB ', 'Burford Road', 'Cirencester', 'Greggs', true),\
		(92390, 52.3383860334759000, 0.5334186741102280, 'EURO GARAGES Barton', '            ', 'IP28 6AE', 'Fiveways Roundabout', 'Bury St Edmunds', 'Greggs', true),\
		(92391, 52.5447568090616000, -0.3303215455279850, 'EURO GARAGES Alwalto', '            ', 'PE7 3UG ', 'A1 SOuth', 'Peterborough', 'Greggs', false),\
		(92392, 53.2062197928768000, -4.1067635860734500, 'EURO GARAGES Bangor', '01248354885 ', 'LL57 4BG', 'Llandygai Road', 'Bangor', 'Greggs', true),\
		(92393, 51.8525424196265000, 0.7308474460340480, 'EURO GARAGES Feering', '            ', 'CO5 9EL ', 'A12 Colchester', ' ', 'Greggs', true),\
		(92394, 52.1475294994820000, 1.0798978246704000, 'EURO GARAGES Beacon', '            ', 'IP6 8LP ', 'Junction A14/a140', 'Ipswich', 'Greggs', true),\
		(92395, 53.5882082211808000, -1.2149761089268200, 'EURO GARAGES Doncast', '01302724561 ', 'DN6 8LR ', 'Great North Road', 'Doncaster', 'Greggs', true),\
		(92396, 51.1798465080038000, -1.7823247267686000, 'EURO GARAGES Amesbur', '01980623979 ', 'SP4 7AS ', '18 Countess Road', 'Amesbury', 'Greggs', true),\
		(92397, 52.1858477146076000, -0.3036881959510880, 'EURO GARAGES Black C', '01480210553 ', 'MK44 3BE', 'A1 Black Cat Roundabout', 'Bedford', 'Greggs', true),\
		(92398, 53.2276420869510000, -3.1710490624261200, 'EURO GARAGES Halkyn', '01352781017 ', 'CH8 8DF ', 'West Drive', 'Hollywell', 'Greggs', true),\
		(92399, 51.4784031253554000, -2.1295599141037900, 'EURO GARAGES Chippen', '01249661114 ', 'SN14 6UY', 'Chippenham', 'Chippenham', 'Greggs', false),\
		(92400, 53.0688527072756000, -2.3372303563238200, 'EURO GARAGES Barthom', '01270878416 ', 'CW2 5PT ', 'M6 J16', 'Crewe', 'Greggs', true),\
		(92401, 52.2985451121326000, -0.0607153204768010, 'EURO GARAGES', '01954231479 ', 'PE28 9LP', 'Cambridge Road', 'Huntingdon', 'Greggs', true),\
		(92402, 54.6494376759671000, -2.7701186126230100, 'EURO GARAGES Penrith', '01768863869 ', 'CA11 0DT', 'A66', 'Penrith', 'Greggs', true),\
		(92403, 51.0235709800000000, -2.6492041470000000, 'EURO GARAGES Podimor', '01935849679 ', 'BA22 8JG', 'Podimore', 'Yeovil', 'Greggs', true),\
		(92404, 53.1770991486652000, -0.6260366997395930, 'EURO GARAGES Lincoln', '01522685217 ', 'LN6 9AJ ', 'A46 Lincoln', ' ', 'Greggs', true),\
		(92405, 52.0641242159393000, -0.5519577049704490, 'EURO GARAGES Marston', '0134764351  ', 'MK43 0PZ', 'Beancroft Road', 'Milton Keynes', 'Greggs', true),\
		(92406, 52.6040799439919000, 1.2191520766983900, 'EURO GARAGES Norwich', '            ', 'NR9 3AU ', 'Thickthorn Service Area', 'Norwich', 'Greggs', true),\
		(92407, 55.0664900549660000, -1.6339292321424900, 'EURO GARAGES Seaton', '            ', 'NE13 6BP', 'Fisher Lane', 'Newcastle upon Tyne', 'Greggs', true),\
		(92408, 50.4178019365956000, -4.2337554342819100, 'EURO GARAGES Saltash', '01752848130 ', 'PL12 6LF', 'Callington Road', 'Saltash', 'Greggs', true),\
		(92409, 50.7078285288363000, -4.0590360494328100, 'EURO GARAGES Sourton', '            ', 'EX20 4LY', 'Bratton Clovelly', 'Okehampton', 'Greggs', true),\
		(92410, 52.8884773343487000, -0.0804628306708850, 'EURO GARAGES Suttert', '01205460160 ', 'PE20 2LG', 'Holbeach Road', 'Boston', 'Greggs', true),\
		(92411, 52.3925230423523000, -0.5243628242940340, 'EURO GARAGES Thrapst', '01832730600 ', 'NN14 4UR', 'Thrapston Service Area', 'Kettering', 'Greggs', true),\
		(92412, 54.9456481488123000, -1.5190979528981100, 'EURO GARAGES Whiteme', '            ', 'NE10 8YB', 'A194 Whitre Mare Pool', 'Tyne & Wear', 'Greggs', true),\
		(92413, 53.8999646979054000, -1.2009880696556800, 'EURO GARAGES YorK Ea', '            ', 'LS24 8EG', 'A64 Eastbound', 'York', 'Greggs', true),\
		(92414, 50.9058478648053000, -1.6267200368359800, 'EURO GARAGES Stoney', '02380811607 ', 'SO43 7GN', 'A31 Ringwood Cross Road', 'Lyndhurst', 'Greggs', true),\
		(92415, 0.0000000000000000, 0.0000000000000000, 'Belfast Botanic Ave', '02890332058 ', 'BT7 1JR ', '52/54 Botanic Avenue', 'Belfast', 'Greggs', false),\
		(92416, 53.7335650737848000, -0.3691091137386440, 'Hull St Andrews RP', '            ', 'HU3 4EB ', 'Unit 7b St Andrews Retail Park', 'Hull', 'Greggs', false),\
		(92417, 51.6280993261336000, -0.3861502021537820, 'South Oxhey Stn Apch', '02084213003 ', 'WD19 7DT', '6 Station Approach', 'Watford', 'Greggs', false),\
		(92418, 52.6571606371821000, -1.1338393344965400, 'Leicestr Abbey Ln', '01162681032 ', 'LE4 5QH ', '285 Abbey Lane', 'Leicester', 'Greggs', false),\
		(92419, 53.9560698777828000, -1.0700587947503700, 'York Foss Islands RP', '01904 655108', 'YO31 7UL', 'Unit 5B', 'York', 'Greggs', false),\
		(92420, 53.1523116553258000, -2.3511478479182200, 'Sndbach Saxn Cros SS', '01270761559 ', 'CW11 4SP', 'Saxon Cross Service Station', 'Sandbach', 'Greggs', true),\
		(92421, 55.7924205553566000, -4.0883354730310700, 'Blantyre Cldyview SC', '01698828188 ', 'G72 0QD ', 'Unit 8 Clydeview SC', 'Blantyre', 'Greggs', false),\
		(92422, 55.8574043221166000, -4.2544388831768100, 'Glas St Enochs Sq', '01412211033 ', 'G1 4BW  ', 'Kiosk 5', 'Glasgow', 'Greggs', false),\
		(92423, 0.0000000000000000, 0.0000000000000000, 'Loughboro Allndle Rd', '            ', 'LE11 2FF', 'Retail Unit A', 'Leicestershire', 'Greggs', true),\
		(92424, 53.1929488655179000, -3.0820463788467100, 'EURO GARAGES Northop', '01244818877 ', 'CH7 6HB ', 'Northop Hall', 'Flintshire', 'Greggs', true),\
		(92425, 53.5324787800656000, -2.6546509829625700, 'EURO GARAGES Warring', '01942238435 ', 'WN3 6PF ', 'Warrington Road', 'Wirral', 'Greggs', true),\
		(92426, 54.0581605871486000, -2.8013464728486000, 'EURO GARAGES Rylands', '0152435850  ', 'LA1 2LL ', 'Rylands', 'Lancaster', 'Greggs', true),\
		(92427, 53.2001492422420000, -1.3422019725562300, 'EURO GARAGES Heath', '01246853514 ', 'S44 5SF ', 'Mansfield Road', 'Derbyshire', 'Greggs', true),\
		(92428, 53.3957526954301000, -1.2572606528982000, 'BLAKEMORE Thurcroft', '01709709236 ', 'S66 9LA ', 'Green Arbour Road', 'South Yorkshire', 'Greggs', true),\
		(92429, 0.0000000000000000, 0.0000000000000000, 'EURO GARAGES New Mar', '01638577671 ', 'CB8 OXG ', 'A14 Eastbound Services', 'Suffolk', 'Greggs', false),\
		(92430, 52.6461836765485000, -2.2986433653365000, 'COMPASSS RAF Cosford', '01902373763 ', 'WV7 3EX ', 'RAF Cosford', 'Wolverhampton', 'Greggs', true),\
		(92431, 51.4114151437054000, -0.3016322017528720, 'Kingston Castle St', '02085498202 ', 'KT1 1SS ', '14 Castle Street', 'Kingston', 'Greggs', true),\
		(92432, 51.8186204917415000, 1.1673351676208400, 'Clacton Clacton FO', '01255426650 ', 'CO15 4TL', 'Unit 2a Clacton Factory Outlet', 'Clacton on Sea', 'Greggs', false),\
		(92433, 53.3754969360119000, -1.2268886198632800, 'HKS Dinnington', '01909517795 ', 'S25 3QZ ', 'Outgang Lance', 'South Yorkshire', 'Greggs', true),\
		(92434, 51.5727963547640000, -2.9643345968608100, 'Newport Langland Wy', '01633282348 ', 'NP19 4PT', 'Unit A3 Langland Park West', 'Newport', 'Greggs', false),\
		(92435, 53.9624910900000000, -2.0401709650000000, 'EURO GARAGES Skipton', '01756799514 ', 'BD23 1UD', 'A65-A59 Roundabout', 'Skipton', 'Greggs', true),\
		(92436, 52.1267820521178000, 0.2223037502154030, 'EURO GARAGES Abingto', '            ', 'CB21 6AP', 'Fourwentways', 'Abington', 'Greggs', true),\
		(92437, 54.5998557393471000, -1.2971883943855000, 'Billingham Stn Rd', '01642550784 ', 'TS23 1PA', '83 Station Road', 'Billingham', 'Greggs', false),\
		(92438, 54.5813433279425000, -1.2407557725763000, 'Middlsboro Snowdn Rd', '            ', 'TS2 1DY ', 'Unit 1 Snowdon Road', 'Middlesbrough', 'Greggs', false),\
		(92439, 50.8866450300000000, 0.2400225140000000, 'EURO GARAGES', '01323847015 ', 'BN27 4DT', 'A22, A267 Lower Dicker', 'Hailsham', 'Greggs', true),\
		(92440, 54.6180049075539000, -1.0663670376284500, 'Redcar Regents Wlk', '01642493692 ', 'TS10 3FB', 'Units 3 and 4 Regents Walk', 'Redcar', 'Greggs', false),\
		(92441, 50.7139555003675000, -2.4373852585127100, 'Dorchester South St', '01305269227 ', 'DT1 1DQ ', '55 South Street', 'Dochester', 'Greggs', false),\
		(92442, 0.0000000000000000, 0.0000000000000000, 'Pterbrough Fletn Qys', '            ', 'PE2 8TY ', 'Retail Unit, Sand Martin House', 'Peterborough', 'Greggs', false),\
		(92443, 53.5182469185023000, -2.1454989748644200, 'EURO GARAGES Holling', '            ', 'OL8 3RB ', 'Euro Garages Service Station', 'A62 Manchester Road', 'Greggs', true),\
		(92444, 55.9038849362574000, -3.1380711019580200, 'Edin Gilmrtn Dyks St', '            ', 'EH17 8PR', 'Unit 2 Hyvots Loan', 'Edinburgh', 'Greggs', false),\
		(92445, 53.0874351612038000, -1.3948203281471100, 'EURO GARAGES Alfreto', '01773835395 ', 'DE55 1HJ', 'A38/A61 Old Sanwich', 'Derbyshire', 'Greggs', false),\
		(92446, 0.0000000000000000, 0.0000000000000000, 'EURO GARAGES The Gat', '01902785434 ', 'WV10 7ER', 'M54 Junction 2', 'Wolverhampton', 'Greggs', true),\
		(92447, 51.5166706193951000, -0.1188980325984250, 'London Kingsway', '            ', 'WC2B 6DS', '60 Kingsway', 'London', 'Greggs', false),\
		(92448, 53.3680773481704000, -1.4404619375236100, 'APPLEGREEN Sheffield', '            ', 'S2 1GE  ', '58 City Road', 'South Yorkshire', 'Greggs', true),\
		(92449, 53.0596563775320000, -0.8040798158626410, 'APPLEGREEN Newark', '01636678534 ', 'NG24 4EQ', '299 Bowbridge Road', 'Newark', 'Greggs', true),\
		(92450, 53.0058635863615000, -1.7127891939464700, 'Ashbrne Airfields IE', '            ', 'DE6 1HA ', 'Unit 2 Blenheim Road', 'Derbyshire', 'Greggs', false),\
		(92451, 50.7915333079252000, -3.2085812869855700, 'Honiton Reme Drive', '            ', 'EX14 1DP', 'Honiton U1A Honiton RP Reme Dr', 'Honiton', 'Greggs', false),\
		(92452, 51.7174745191489000, -1.1971400225773800, 'BLAKEMORE Greater Le', '            ', 'OX4 7EX ', 'Dunnock Wax', 'Oxford', 'Greggs', true),\
		(92453, 53.1004928934602000, -1.3514591123021800, 'HKS Meteor', '            ', 'DE55 2AS', '2-4 Alfreton Road', 'Derbyshire', 'Greggs', true);", [], (error, results) => {
			if (error) {
				throw error;
			}
			return true;
		});
	});
});
