extends Node2D

var _createAccount = JavaScript.create_callback(self, "onCreate_account") # This reference must be kept
var _player_name = JavaScript.create_callback(self, "onPlayerName") # This reference must be kept
var _game_data = JavaScript.create_callback(self, "onGameData") # This reference must be kept


var _generic_events = JavaScript.create_callback(self, "onGenericEvents") # This reference must be kept

var jsWindow = JavaScript.get_interface("window")
var systemCalls=null
var account = null
var _account = null

var PlayerName = "Player1"
var SelectedGameID = "0x0"
signal Player_Created
signal Game_Joined

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	if jsWindow!=null:
		systemCalls = jsWindow.systemCalls
		account = jsWindow.account
		_account = jsWindow._account


func onGenericEvents(args):
	# Will be called with the parameters passed to the "forEach" callback
	# [0, 0, [JavaScriptObject:1173]]
	# [255, 1, [JavaScriptObject:1173]]
	# ...
	# [0, 9, [JavaScriptObject:1180]]
	print(args)
	print("args ", typeof(args), " Size ",args.size())
	for x in args.size():
		print("args[x] ", typeof(args[x]))
		var json_result = JSON.parse(args[x]) 
		if json_result.error == OK:			
			for y in json_result.result.size():
				print("json_result.result[y] ", typeof(json_result.result[y]))
				match json_result.result[y].type:
					"Position":
						print("Player pos ",json_result.result[y].x, " ", json_result.result[y].y)
					"Moves":
						print("remaining ",json_result.result[y].remaining)
					_:
						print("Unexpected data ", JSON.stringify(json_result.result[y]))
		else:
			print("JSON Parse Error: ", json_result.error_string(), " in ", args, " at line ", json_result.error_line)
	
func onGameData(args):
	print(args)
	emit_signal("Game_Joined")
	systemCalls.setName(account,SelectedGameID, PlayerName).then(_player_name)

func create_player(NameOfPlayer:String):
	PlayerName = NameOfPlayer
	_account.create().then(_createAccount);

func onPlayerName(_args):
	pass

func onCreate_account(_args):
	print("Burn Done")
	emit_signal("Player_Created")
	#systemCalls.setName(account,SelectedGameID, PlayerName).then(_player_name)

func start_list_games(NameOfPlayer:String):
	PlayerName = NameOfPlayer
	emit_signal("Player_Created")

func join_game(gameID:String):
	SelectedGameID = gameID
	ToriiServer.set_current_game(SelectedGameID)
	if systemCalls:
		systemCalls.join_game(account,SelectedGameID).then(_game_data)
	else:
		emit_signal("Game_Joined")

func create_game():
	systemCalls.create_game(account).then(_game_data)

func key_to_str(KeyValue:String)->String:
	var x = hex_to_byte_array(KeyValue.substr(2))

	return x.get_string_from_utf8()

func hex_to_byte_array(hex:String) -> PoolByteArray:
	var hex_length := hex.length()
	if hex_length % 2 == 1:
		push_error("Not even length hex input")
		return PoolByteArray()

	var byte_length := hex_length / 2
	var result := PoolByteArray()
	result.resize(byte_length)
	for byte_index in byte_length:
		var hex_index := int(byte_index) * 2
		var hex_couple := hex.substr(hex_index, 2)
		result[byte_index] = ("0x" + hex_couple).hex_to_int()
	
	return result	

func str_to_key(key:String) -> String:	 
	return "0x"+key.to_utf8().hex_encode()
