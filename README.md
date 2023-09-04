# dojo-rollyouown-godot

# Implantation
Used JavaScrip phaser client as a base so I did not need to write a Godot interface to Katana.
This has a lot of limitation and double code but I felt it would be faster.

Torii use graphQL so that can easily be done with https://github.com/Dracks/GodotGraphQL but the code had move to 4 so I need to get an older commit and make some small changes.


## Godot
You need Godot 3.5 or higher but not 4 

To run the project you need to the the HTML 5 build button on far right in Godot.

### With Katana

```bash
cd dojo-starter
# Start Katana
./run_run_katana.sh &
or 
katana --seed 0 --block-time 1 --disable-fee


# Build the game
./run_sozo_build.sh
or
sozo build
sozo test

# Migrate the world, this will declare/deploy contracts to katana
./run_sozo_migrate.sh
or
sozo migrate

# Start indexer, graphql endpoint at http://localhost:8080
./run_torii.sh &
or
torii --manifest target/dev/manifest.json --world 0x4b603970f151d639330fc35ddd591d7bac3c94505369270a969e54304a7e3f6

cd ../basicHTML
npm run start
```

