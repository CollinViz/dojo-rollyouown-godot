extends Node


onready var _loaded:Node = $Loaded
onready var LoadAnimation:AnimationPlayer = $LoadAnimation

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	var str1 = "0x517565656e73"
	 
	print(Dojo.key_to_str(str1))
	Dojo.connect("Player_Created",self,"_on_Player_Created")
	Dojo.connect("Game_Joined",self,"_show_game")
	LevelState.connect("Level_start", self, "Level_start")
	clear_loaded()
	load_scene("res://LoginScreen/login.tscn")
	

func _on_Player_Created():
	print("Player Burner created")
	load_scene("res://UI2/ListAllGames.tscn")

	
func clear_loaded():
	for c in _loaded.get_children():
		c.queue_free()


func load_scene(path):
	LoadAnimation.play("StartLoad")
	clear_loaded()
	var scene = load(path)
	var instance = scene.instance()
	_loaded.add_child(instance)
	return instance

func Level_start():
	LoadAnimation.play("endLoad")


func _show_game():
	load_scene("res://Locations/GameView.tscn")