extends ColorRect

export var DrugID:=""
export var Price:=0.0
signal pressed(DrugID)

onready var pic:TextureRect = $VBoxContainer/pic
onready var _Price:Label = $VBoxContainer/Price 

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	_Price.text = str((Price)/100000)+"$"
	pic.texture = load("res://texture/drugs/"+str(DrugID).to_lower()+".png")


# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta: float) -> void:
#	pass


func _on_Button_pressed() -> void:
	emit_signal("pressed",DrugID)
