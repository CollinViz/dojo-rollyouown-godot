extends Control
var _buy = JavaScript.create_callback(self, "onBuy") # This reference must be kept
var _Travel = JavaScript.create_callback(self, "onTravel") # This reference must be kept
onready var buy: Panel = $Buy

onready var LocationList:VBoxContainer = $LocationList
onready var GridDrugsToBy:GridContainer =  $Buy/GridDrugsToBy
onready var buyBox:PackedScene = load("res://Locations/buyDrugs.tscn")
# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	for c in GridDrugsToBy.get_children():
		c.queue_free()

	for x in ToriiServer.AllLocationID:
		var but = Button.new()
		print("New button ",but,str(x))
		but.text = str(x)
		but.connect("pressed",self,"_on_Button_pressed", [x])
		LocationList.add_child(but)

	ToriiServer.connect("location_update_market",self,"_on_location_update_market")
	LevelState.Level_start()

func _on_Button_pressed(LocationID):
	ToriiServer.set_current_location(LocationID)
	if Dojo.systemCalls:
		Dojo.systemCalls.travel(Dojo.account,Dojo.SelectedGameID,LocationID).then(_Travel)


func onTravel(_args):
	print("buy Done ",_args) 
	buy.visible = true

func _on_location_update_market():
	for c in GridDrugsToBy.get_children():
		c.queue_free()
	
	for x in ToriiServer.currentAvailableDrugs:
		var button = buyBox.instance()
		button.DrugID = x["drugs"]
		button.Price = str(x["cash"]).hex_to_int()
		button.connect("pressed",self,"_on_Button_buy_pressed")
		GridDrugsToBy.add_child(button)
		
	buy.visible = true

func _on_Button_buy_pressed(drugId):
	Dojo.systemCalls.buy(Dojo.account,Dojo.SelectedGameID,ToriiServer.fasterLookupKeyLocation[ToriiServer.CurrentLocationID],ToriiServer.fasterLookupDrugs[drugId],1)

func onBuy(_args):
	print("buy Done ",_args) 
	#Show cool UI stuff
	#systemCalls.setName(account,SelectedGameID, PlayerName).then(_player_name)
	


func _on_Close_pressed() -> void:
	buy.visible = false
