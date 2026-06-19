const MAX_NUMBER_PLAYER_PER_TABLE = 6;

class PokerManager {
    constructor() {
        if(!PokerManager.listTable){
            PokerManager.listTable = [{listPlayer: [this]}];
        }else if(PokerManager.listTable[PokerManager.listTable.length - 1 ].listPlayer.length < MAX_NUMBER_PLAYER_PER_TABLE){
            PokerManager.listTable[PokerManager.listTable.length - 1 ].listPlayer.push(this);
        }else{
            PokerManager.listTable.push({listPlayer: [this]});
        }
        return PokerManager.listTable;
    }
}

let instance = new PokerManager();
for (let i = 0; i < 15; i++) {
    new PokerManager();
}

console.log(instance);