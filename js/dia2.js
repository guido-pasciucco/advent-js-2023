function manufacture(gifts, materials) {
    const regalosFabricados = []
    for (const gift of gifts) { 
        let sePuedeFabricar = true
        for (const char of gift) { 
            if (!materials.includes(char)) { 
                sePuedeFabricar = false
                break
            }
        }
        sePuedeFabricar && regalosFabricados.push(gift)
    }
    return regalosFabricados
}

// Ejemplos de uso:
const gifts1 = ['tren', 'oso', 'pelota'];
const materials1 = 'trnesa';
console.log(manufacture(gifts1, materials1)); // ["tren", "oso"]

const gifts2 = ['juego', 'puzzle'];
const materials2 = 'jglepuo';
console.log(manufacture(gifts2, materials2)); // ["puzzle"]

const gifts3 = ['libro', 'ps5'];
const materials3 = 'psl5';
console.log(manufacture(gifts3, materials3)); // []
