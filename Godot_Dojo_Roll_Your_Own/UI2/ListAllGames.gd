extends Control

onready var _gameCard:PackedScene = preload("res://UI2/GameDetails.tscn")
onready var _VBoxContainer:VBoxContainer = $VBoxContainer

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	ToriiServer.connect("game_list_updated", self, "_on_game_list_updated")
	ToriiServer.get_games_list()
	LevelState.Level_start()



func _on_game_list_updated():	 
	
	for game in ToriiServer.AllGames:
		var card = _gameCard.instance()
		card.set_game(game) 
		card.connect("pressed", self, "_on_game_button_pressed", [game.entity.keys[0]])
		_VBoxContainer.add_child(card)


func _on_game_button_pressed(gameData,game_key):
	print("Game ID ",gameData.entity.keys[0], " Save Key ",game_key)
	Dojo.join_game(game_key)
