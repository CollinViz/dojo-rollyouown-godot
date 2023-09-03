extends Control

signal pressed(gameData)

var gameData = null
onready var max_players:Label = $"%max_players"
onready var start_time:Label = $"%start_time"
onready var num_players:Label = $"%num_players"
onready var max_turns:Label = $"%max_turns" 

func set_game(game):
	gameData = game


# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	assert(gameData != null)
	max_players.text = str(gameData.max_players)
	start_time.text = str(gameData.start_time)
	num_players.text = str(gameData.num_players)
	max_turns.text = str(gameData.max_turns)


# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta: float) -> void:
#	pass


func _on_Join_pressed() -> void:
	emit_signal("pressed", gameData)
