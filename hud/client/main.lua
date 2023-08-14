
if (GetResourceState("es_extended") == "started") then
  if (exports["es_extended"] and exports["es_extended"].getSharedObject) then
      ESX = exports["es_extended"]:getSharedObject()
  else
      TriggerEvent("esx:getSharedObject", function(obj) ESX = obj end)
  end
end
local display = false
RegisterCommand("hudon", function()
  TriggerEvent('nui:on')
  nui = true
end)

local randomValue = math.random()
if randomValue <= 0.001 then
  font = true
else
  font = false
end

nui = true

RegisterCommand("off", function()
    TriggerEvent("nui:off") -- siehe unten
  end)



RegisterNetEvent('nui:on')
AddEventHandler('nui:on',
  function(money, water, hunger, vehicle, speed, o2, locked, fuel, seatbelt) -- du könntest beides auch mit einer function schreiben und sonstiges aber nur zur demonstration ist es in einem event, und dazunoch kannst du off und on in eins machen, aber das ignorieren wir mal.
    SendNUIMessage({
      type = "ui", -- hier iird als beispiel ein type mitgegeben namens UI, dies kannst du wie du wilst bnnenen
      display = true, -- hier wird ein boolean (true false) mitgegeben damit du feststellen kannst ob das UI aus oder an sein soll, da es im default zustand immer zu sehen ist, :)
      money = money,
      water = water,
      hunger = hunger,
      vehicle = vehicle,
      speed = speed,
      o2 = o2,
      locked = locked,
      belt = seatbelt,
      microphone = Config.MicrophoneToggle(),
      fuel = math.round(fuel),
    })
  end)

RegisterNetEvent('nui:off')
AddEventHandler('nui:off', function()
  nui = false
  SendNUIMessage({
    type = "ui",
    display = false -- das display  wird in der JS gemacht auf zu --> html/listener.js
  })
end)

Citizen.CreateThread(function()
  while true do
    Citizen.Wait(100 )
  --  print(nui)
 if nui and ESX.IsPlayerLoaded() then
  lib.callback('pr_hud:getdata', false, function(money)
    TriggerEvent('esx_status:getStatus', 'thirst', function(status)
      water = 100
  end)
  TriggerEvent('esx_status:getStatus', 'hunger', function(status)       
      hunger = 100
  end)
  if GetVehiclePedIsIn(PlayerPedId()) ~= 0 then
  vehicle = true
  speed = math.round(GetEntitySpeed(GetVehiclePedIsIn(PlayerPedId())))
  else
    vehicle = false
  end

  if IsPedSwimming(PlayerPedId()) then
    swimming = true
    o2 = math.round(GetPlayerUnderwaterTimeRemaining(PlayerId()))

  else
    swimming = false
    o2 = 0
    buckklee = nil
  end
  locked = GetVehicleDoorLockStatus(GetVehiclePedIsIn(PlayerPedId()))
  fuel = Config.GetFuelExport()
if fuel == -1 then
  fuel = 0 
end
if buckle == false then
  seatbelt = true
elseif buckle == true or nil then
  seatbelt = false
end
  TriggerEvent('nui:on', money, water, hunger, vehicle, speed, o2, GetVehicleDoorLockStatus(GetVehiclePedIsIn(PlayerPedId())), fuel, seatbelt)
  
    end)
  
  elseif not nui and ESX.IsPlayerLoaded() then
  TriggerEvent('nui:off')
  end
end
end)

