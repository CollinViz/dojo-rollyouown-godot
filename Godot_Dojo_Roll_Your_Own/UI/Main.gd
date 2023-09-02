extends Control


var _my_js_callback = JavaScript.create_callback(self, "myCallback") # This reference must be kept
var jsWindow = JavaScript.get_interface("window")



# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	pass # Replace with function body.


func myCallback(args):
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
		else:
			print("JSON Parse Error: ", json_result.error_string(), " in ", args, " at line ", json_result.error_line)
	
#	var json_result = JSON.parse(args) 
#	if json_result.error == OK:
#		var data_received = json_result.result
#		if typeof(data_received) == TYPE_ARRAY:
#			print(data_received) # Prints array
#		else:
#			print("Unexpected data")
#	else:
#		print("JSON Parse Error: ", json_result.error_string(), " in ", args, " at line ", json_result.error_line)



func _on_Button_pressed() -> void: 
	jsWindow.systemCalls.spawn(jsWindow.account).then(_my_js_callback);
	#JavaScript.eval("window.alert('Hello from Godot!');")
	#JavaScript.eval("window.systemCalls.spawn(window.account);")

