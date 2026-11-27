export {};

declare global {
  namespace itemAPI {
    var customItemToId: Record<sc.ItemID, number>;
    var idToCustomItem: Record<number, sc.ItemID>;
    var vanillaItemToID: Record<string, number>;
    
    function getItemID(itemID: sc.ItemID): sc.ItemID;
  }
}
