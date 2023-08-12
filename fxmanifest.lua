description 'nui_example'
resource_manifest_version '77731fab-63ca-442c-a67b-abc70f28dfa5'
ui_page 'html/index.html'
-- Set the FX version and game type
fx_version "cerulean"
game "gta5"
lua54 "yes"

-- Resource metadata
author "Ludaro"
description "Hud for Project-Roleplay"
version "1.0"
client_scripts {
    'hud/client/*.lua',
    '/seatbelt/client/*.lua'
}

files {
    'html/index.html',
    'html/style.css',
    'html/reset.css',
    'html/listener.js',
    'html/sounds/buckle.ogg',
    'html/sounds/unbuckle.ogg',
}

shared_scripts{
     '@ox_lib/init.lua',
    'config.lua'
}


server_scripts{
    '@mysql-async/lib/MySQL.lua',
    'hud/server/*.lua',
    'seatbelt/server/*.lua'
}

