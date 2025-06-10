enum Role{
    warrior,
    Mage,
    Archer
}

type Action= "Attack"|"defend"|"heal";

let performAction = (role:Role,action:Action) =>{
    if(role === Role.warrior && action === "Attack"){
       console.log("🗡️ Warrior attacks!")
    }else if (role ===Role.Mage && action ==="heal"){
        console.log("🧙 Mage heals!")
    }else if (role === Role.Archer && action === "defend"){
        console.log("🏹 Archer defends!")
    }else{
        console.log("❌ Invalid move")
    }
}


performAction(Role.Mage, "heal");      
performAction(Role.Archer, "Attack"); 

