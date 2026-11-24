// Ponte tra il codice importato da "city" e il Brianza Driving Simulator.
// Il chiamante imposta nextNormal (normale del suolo) prima di posizionare un veicolo della flotta.
export const nextNormal = { x: 0, y: 1, z: 0 };
let heightFn = () => 0;
export function setTerrain(h) { heightFn = h; }
export function groundHeight(x, z) { return heightFn(x, z); }
export function surfaceNormal() { return nextNormal; }
