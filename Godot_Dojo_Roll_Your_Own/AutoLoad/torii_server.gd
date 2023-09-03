extends Node2D

signal game_list_updated
signal location_update_market
export var LocationUpdateTimer:= 30

onready var refersh_locationData:Timer = $refersh_locationData
onready var toriiClient = toriiGraphQl.new()

var AllGames:Array = []
var CurrentGameId:=""
var CurrentLocationID:=""

var allDrugs:=[]
var AllLocationID:=[]
var AllLocationHexID:=[] 
var fasterLookupKeyLocation:Dictionary = {}
var fasterLookupDrugs:Dictionary = {}
var currentRisks:=[]
var currentAvailableDrugs:=[]
# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	allDrugs.push_back("Cocaine")
	allDrugs.push_back("Acid")
	allDrugs.push_back("Weed")
	allDrugs.push_back("Ludes")
	allDrugs.push_back("Speed")
	allDrugs.push_back("Heroin") 
	AllLocationID.push_front("Queens")
	AllLocationID.push_front("The Bronx")
	AllLocationID.push_front("Brooklyn")
	AllLocationID.push_front("Jersey City")
	AllLocationID.push_front("Central Park")
	AllLocationID.push_front("Coney Island")
	for x in AllLocationID:
		AllLocationHexID.push_back(Dojo.str_to_key(x))		 
		fasterLookupKeyLocation[x] = Dojo.str_to_key(x)
		fasterLookupKeyLocation[Dojo.str_to_key(x)] = x
	
	for x in allDrugs:
		fasterLookupDrugs[Dojo.str_to_key(x)] = x
		fasterLookupDrugs[x] = Dojo.str_to_key(x)
	get_games_list()
	pass

func get_games_list():
	# Send the query
	var query = GQLQuery.new("gameComponents")
	query.add_prop(GQLQuery.new("edges").add_prop(
						GQLQuery.new("node").add_prop("start_time") \
						.add_prop("max_players") \
						.add_prop("num_players") \
						.add_prop("max_turns") \
						.add_prop("is_finished") \
						.add_prop("creator") \
						.add_prop(GQLQuery.new("entity").add_prop("keys"))))
	var exe = toriiClient.query("allGames",{},query)
	var x = exe.connect("graphql_response", self, "_on_List_all_games")
	print("Connect ",x)
	add_child(exe)
	#exe.run({"code":"ZA"})
	exe.run({})
	# Connect to the response signal

func _on_List_location_data(response):
	print(response)
	currentRisks=[]
	currentAvailableDrugs=[]
	var json_result = JSON.parse(response) 
	if json_result.error == OK:		
		for item in json_result.result.data.entities.edges:
			match item.node.components[0].__typename:
				"Risks":
					item.node.components[0]["location"]=fasterLookupKeyLocation[item.node.keys[1]]
					currentRisks.push_back(item.node.components[0])
				"Market":
					item.node.components[0]["location"]=fasterLookupKeyLocation[item.node.keys[1]]
					item.node.components[0]["drugs"]=fasterLookupDrugs[item.node.keys[2]]
					currentAvailableDrugs.push_back(item.node.components[0])

	else:
		print("JSON Parse Error: ", json_result.error_string(),  " at line ", json_result.error_line)
	emit_signal("location_update_market")
	
func _on_List_all_games(response):
	# Print the response	
	print(response)
	var json_result = JSON.parse(response) 
	if json_result.error == OK:		
		print("json_result.result ", typeof(json_result.result))
		AllGames = []
		for game in json_result.result.data.gameComponents.edges:
			print("game.node ", game.node)
			AllGames.append(game.node)
		#print("json_result.result.data.country.name ", json_result.result.data.country.name)
		emit_signal("game_list_updated")
	else:
		print("JSON Parse Error: ", json_result.error_string(),  " at line ", json_result.error_line)

func set_current_game(GameID):
	CurrentGameId = GameID

func set_current_location(LocationID):
	CurrentLocationID = LocationID
	get_current_location_market()
	refersh_locationData.start(LocationUpdateTimer)

func get_current_location_market():
	var query = GQLQuery.new("entities").set_args({"[$gameId,$locationId]":"keys"}) \
						.add_prop("totalCount") \
						.add_prop(GQLQuery.new("edges")\
						.add_prop(GQLQuery.new("node")\
						.add_prop("keys")\
						.add_prop(GQLQuery.new("components") \
						.add_prop("__typename") \
						.add_prop(GQLQuery.new("... on Market ") \
						.add_prop("cash") \
						.add_prop("quantity") ) \
						.add_prop(GQLQuery.new("... on Risks ") \
						.add_prop("arrested") \
						.add_prop("hurt")  \
						.add_prop("mugged")  \
						.add_prop("travel") ))) \
						.add_prop("cursor")) 
	var exe = toriiClient.query("LocationEntities",{"gameId":"String!" ,"locationId":"String!"},query)
	exe.connect("graphql_response", self, "_on_List_location_data")
	 
	add_child(exe)
	exe.run({"gameId":CurrentGameId,"locationId":fasterLookupKeyLocation[CurrentLocationID]})
	

func _on_refersh_locationData_timeout() -> void:
	get_current_location_market()
