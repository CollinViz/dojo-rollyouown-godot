extends Node

export var current_level:=0
onready var _levelAudio: AudioStreamPlayer = $Level
onready var _menuAudio: AudioStreamPlayer = $menu 


signal EnemyCountChange(Enemy,Gohst)
signal Level_complete
signal Level_start
signal player_dead
signal loadLevel(index)
signal MainMenu

signal reload_start
signal reload_end
signal reload_uiUpdate(TimeToGo)

onready var allLevels = null

var LevelTimer:float
var LevelEndTimer:float
# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	_play_menu()

func MainMenu():
	emit_signal("MainMenu")
	_play_menu()

func load_next_level():
	current_level+=1
	if current_level>=allLevels.allLevels.size():
		current_level=0
	load_levele(current_level)

func reload_level():
	emit_signal("loadLevel",current_level)
	
func load_levele(index:int):
	print("Load index ",index)
	current_level = index
	emit_signal("loadLevel",index)

func get_levelPacked(index:int)->PackedScene:
	return allLevels.allLevels[index]

func is_next_level()->bool:
	return current_level<allLevels.allLevels.size()

func new_level():
	#Cleare counts 
	#Clear Time
	emit_signal("EnemyCountChange",0,0)
	
	
func update_ui(Enemy,Gohst):
	emit_signal("EnemyCountChange",Enemy,Gohst)


func level_complete():
	LevelEndTimer=OS.get_ticks_msec()
	emit_signal("Level_complete")

func Level_start():
	emit_signal("Level_start")
	_play_level()
	_start_Level_timer()

func player_dead():
	emit_signal("player_dead")


func _play_level():
	if !_levelAudio.playing:
		_levelAudio.play()
	_menuAudio.stop()
	
func _play_menu():
	if !_menuAudio.playing:
		_menuAudio.play()
	_levelAudio.stop()


func _start_Level_timer():
	LevelTimer = OS.get_ticks_msec()


func reload_start():
	emit_signal("reload_start")
	
func reload_end():
	emit_signal("reload_end")
	
func reload_uiUpdate(TimeToGo:String):
	emit_signal("reload_uiUpdate",TimeToGo)
