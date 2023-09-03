extends Control


onready var PlayerName:TextEdit = $CenterContainer/VBoxContainer/PlayerName
onready var Validattion:AnimationPlayer = $CenterContainer/Validattion

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	LevelState.Level_start()


func _on_CreateUser_pressed() -> void:
	if PlayerName.text =="":
		Validattion.play("NeedName")
		return
	Dojo.create_player(PlayerName.text)
	
	#Create new Player 
	#Set player name 
	#list all active games that are not full
	#join game
	#create game


func _on_UseCurrent_pressed() -> void:
	if PlayerName.text =="":
		Validattion.play("NeedName")
		return
	Dojo.start_list_games(PlayerName.text)
