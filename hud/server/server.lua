
if (GetResourceState("es_extended") == "started") then
    if (exports["es_extended"] and exports["es_extended"].getSharedObject) then
        ESX = exports["es_extended"]:getSharedObject()
    else
        TriggerEvent("esx:getSharedObject", function(obj) ESX = obj end)
    end
end
lib.callback.register('pr_hud:getdata', function(source)
    local xPlayer = ESX.GetPlayerFromId(source)

    if xPlayer then

    money = xPlayer.getAccount('money').money or 0 
    return money
    else
        return 0
    end
end)

